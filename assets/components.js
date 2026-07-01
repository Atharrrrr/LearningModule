/* ==========================================================================
   AI/ML From Zero to Job-Ready — Shared Components
   Reference only — call these from chapter <script> blocks, never redefine
   them inline in a part file. Load with:
   <script src="../assets/components.js"></script>
   ========================================================================== */

/**
 * Renders a first-use jargon definition box immediately after the <script>
 * tag that calls it. Usage inside a chapter:
 *
 *   <span class="jargon-term">gradient descent</span>
 *   <script>initJargonBox("gradient descent",
 *     "An iterative method for finding the minimum of a function by
 *      repeatedly moving against its slope.");</script>
 *
 * Only call this the FIRST time a term appears anywhere in the book — check
 * GLOSSARY_TRACKER.md first. Later mentions should link back instead.
 */
function initJargonBox(term, definitionHTML) {
  var script = document.currentScript;
  if (!script || !script.parentNode) return;

  var box = document.createElement('div');
  box.className = 'jargon-box';
  box.innerHTML =
    '<span class="jargon-box-term">' + term + '</span>' +
    '<span class="jargon-box-def">' + definitionHTML + '</span>';
  script.parentNode.insertBefore(box, script.nextSibling);

  try {
    var KEY = 'aimlBookGlossarySeen';
    var seen = JSON.parse(localStorage.getItem(KEY) || '[]');
    var slug = term.toLowerCase().trim();
    if (seen.indexOf(slug) === -1) {
      seen.push(slug);
      localStorage.setItem(KEY, JSON.stringify(seen));
    }
  } catch (e) { /* localStorage unavailable — box still renders fine */ }
}

/**
 * Wires click-to-reveal behavior onto a quiz container. Usage:
 *
 *   <div class="quiz" id="quiz-0-1">
 *     <div class="quiz-header">Quick check</div>
 *     <div class="quiz-question">
 *       <div class="quiz-question-text">...</div>
 *       <div class="quiz-options">
 *         <div class="quiz-option" data-correct="false" data-feedback="Not quite — try again.">...</div>
 *         <div class="quiz-option" data-correct="true" data-feedback="Correct!">...</div>
 *       </div>
 *       <div class="quiz-feedback"></div>
 *     </div>
 *   </div>
 *   <script>initQuiz(document.getElementById('quiz-0-1'));</script>
 *
 * Wrong answers are never penalized — the reader can keep trying until they
 * pick the correct option, at which point that question locks in green.
 */
function initQuiz(container) {
  if (!container) return;
  var questions = container.querySelectorAll('.quiz-question');

  questions.forEach(function (q) {
    var options = q.querySelectorAll('.quiz-option');
    var feedback = q.querySelector('.quiz-feedback');
    var solved = false;

    options.forEach(function (opt) {
      opt.addEventListener('click', function () {
        if (solved) return;
        var correct = opt.getAttribute('data-correct') === 'true';

        options.forEach(function (o) { o.classList.remove('correct', 'incorrect'); });

        if (correct) {
          opt.classList.add('correct');
          options.forEach(function (o) { o.classList.add('disabled'); });
          solved = true;
        } else {
          opt.classList.add('incorrect');
        }

        if (feedback) {
          var msg = opt.getAttribute('data-feedback');
          feedback.textContent = msg || (correct ? 'Correct!' : 'Not quite — try again.');
          feedback.classList.add('show');
        }
      });
    });
  });
}

/**
 * Wires up localStorage-backed reading progress: marks sidebar nav dots as
 * "done" once a chapter section has scrolled into view, fills the sidebar
 * progress bar, and highlights the currently active section via
 * IntersectionObserver. Call once per page, after the sidebar and sections
 * exist in the DOM:
 *
 *   <script>initProgressTracking();</script>
 *
 * Expects sidebar items shaped like:
 *   <a class="nav-item" data-chapter-id="0-1" href="#chapter-0-1">...
 *     <span class="nav-dot"></span>...</a>
 * and chapter sections shaped like:
 *   <section id="chapter-0-1">...
 *
 * NOTE: this uses window.localStorage, NOT window.storage — window.storage
 * only exists inside claude.ai Artifacts and does not exist in standalone
 * HTML files like these.
 */
function initProgressTracking() {
  var STORAGE_KEY = 'aimlBookProgress';

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function markRead(chapterId) {
    try {
      var progress = getProgress();
      if (progress[chapterId]) return;
      progress[chapterId] = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      updateSidebar();
    } catch (e) { /* localStorage unavailable — active highlighting still works */ }
  }

  function updateSidebar() {
    var progress = getProgress();
    var navItems = document.querySelectorAll('.nav-item[data-chapter-id]');

    navItems.forEach(function (item) {
      var id = item.getAttribute('data-chapter-id');
      if (progress[id]) item.classList.add('done');
    });

    var fill = document.querySelector('.progress-bar-fill');
    if (fill && navItems.length) {
      var doneCount = Object.keys(progress).length;
      var pct = Math.min(100, (doneCount / navItems.length) * 100);
      fill.style.width = pct + '%';
    }
  }

  updateSidebar();

  var sections = document.querySelectorAll('section[id^="chapter-"]');
  if (!sections.length || !('IntersectionObserver' in window)) return;

  var navMap = {};
  document.querySelectorAll('.nav-item[data-chapter-id]').forEach(function (item) {
    navMap[item.getAttribute('data-chapter-id')] = item;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.id.replace('chapter-', '');
        if (!entry.isIntersecting) return;

        document.querySelectorAll('.nav-item.active').forEach(function (n) {
          n.classList.remove('active');
        });
        var navItem = navMap[id];
        if (navItem) navItem.classList.add('active');

        markRead(id);
      });
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
  );

  sections.forEach(function (s) { observer.observe(s); });
}
