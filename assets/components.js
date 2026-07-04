/* ==========================================================================
   The Beginner's Guide to Machine Learning and Artificial Intelligence — Shared Components
   Reference only — call these from chapter <script> blocks, never redefine
   them inline in a part file. Load with:
   <script src="../assets/components.js"></script>
   ========================================================================== */

/**
 * Canonical list of every Part file in the book, in curriculum order.
 * Shared by initSiteNav() (the jump-to-Part dropdown) and index.html (the
 * full table of contents). `id` matches the two-digit suffix on the part
 * file's name (part-00-..., part-01-..., etc).
 */
var SITE_PARTS = [
  { id: '00', file: 'part-00-before-we-begin.html', label: 'Part 0 — Before We Begin',
    chapters: [{id:"0-1",title:"How This Book Works",tag:"C"}] },
  { id: '01', file: 'part-01-orientation.html', label: 'Part I — Orientation',
    chapters: [{id:"1-1",title:"AI vs. ML vs. Deep Learning vs. RL",tag:"C"},{id:"1-2",title:"The Three Ways Machines Learn",tag:"C"},{id:"1-3",title:"Machines Don't Think, They Fit Curves",tag:"C"},{id:"1-4",title:"A Short History of AI",tag:"D"},{id:"1-5",title:"The Job Landscape (ML Engineer / Research Scientist / MLOps / Data Scientist)",tag:"C"}] },
  { id: '02', file: 'part-02-toolkit.html', label: 'Part II — The Toolkit: Math & Code',
    chapters: [{id:"2-1",title:"Numbers, Variables & Functions",tag:"C"},{id:"2-2",title:"Vectors — Data as Arrows in Space",tag:"C"},{id:"2-3",title:"Matrices — Tables That Transform Data",tag:"C"},{id:"2-4",title:"Dot Products & Similarity",tag:"C"},{id:"2-5",title:"Probability, the Intuitive Way",tag:"C"},{id:"2-6",title:"Distributions & Uncertainty",tag:"C"},{id:"2-7",title:"Bayes' Theorem, Explained With a Story",tag:"C"},{id:"2-8",title:"Slopes & Change — Intuitive Calculus",tag:"C"},{id:"2-9",title:"The Chain Rule",tag:"C"},{id:"2-10",title:"Your First Lines of Code (Python)",tag:"C"},{id:"2-11",title:"Arrays, Tables & Tensors (NumPy/pandas)",tag:"C"},{id:"2-12",title:"Plotting & Seeing Your Data",tag:"D"}] },
  { id: '03', file: 'part-03-working-with-data.html', label: 'Part III — Working With Data',
    chapters: [{id:"3-1",title:"Where Data Comes From",tag:"C"},{id:"3-2",title:"Cleaning Messy Data",tag:"C"},{id:"3-3",title:"Exploratory Data Analysis",tag:"C"},{id:"3-4",title:"Feature Engineering",tag:"C"},{id:"3-5",title:"Imbalanced Data & Why Accuracy Lies",tag:"C"},{id:"3-6",title:"Data Augmentation",tag:"C"},{id:"3-7",title:"Bias in Data, Bias in Models",tag:"D"}] },
  { id: '04', file: 'part-04-classical-ml.html', label: 'Part IV — Classical Machine Learning',
    chapters: [{id:"4-1",title:"Linear Regression",tag:"C"},{id:"4-2",title:"Logistic Regression",tag:"C"},{id:"4-3",title:"How Learning Actually Happens (loss, gradient descent)",tag:"C"},{id:"4-4",title:"k-Nearest Neighbors",tag:"C"},{id:"4-5",title:"Decision Trees",tag:"C"},{id:"4-6",title:"Random Forests & Boosting",tag:"C"},{id:"4-7",title:"SVM & Naive Bayes",tag:"D"},{id:"4-8",title:"Clustering (K-means)",tag:"C"},{id:"4-9",title:"Dimensionality Reduction (PCA/t-SNE)",tag:"C"}] },
  { id: '05', file: 'part-05-evaluation.html', label: 'Part V — The Science of Evaluation',
    chapters: [{id:"5-1",title:"Why Models Fail (over/underfitting, bias-variance)",tag:"C"},{id:"5-2",title:"Train/Val/Test & Cross-Validation",tag:"C"},{id:"5-3",title:"Metrics (precision/recall/F1/ROC-AUC)",tag:"C"},{id:"5-4",title:"Regularization",tag:"C"}] },
  { id: '06', file: 'part-06-neural-networks.html', label: 'Part VI — Neural Networks',
    chapters: [{id:"6-1",title:"The Neuron",tag:"C"},{id:"6-2",title:"Stacking Neurons (layers, MLPs)",tag:"C"},{id:"6-3",title:"Activation Functions",tag:"C"},{id:"6-4",title:"Backpropagation",tag:"C"},{id:"6-5",title:"Optimizers (SGD, Adam)",tag:"C"},{id:"6-6",title:"The Training Toolbox (epochs, batches, LR schedules)",tag:"C"},{id:"6-7",title:"Vanishing Gradients & Initialization",tag:"C"},{id:"6-8",title:"Dropout & BatchNorm",tag:"C"},{id:"6-9",title:"Building Your First Network (PyTorch)",tag:"C"}] },
  { id: '07', file: 'part-07-teaching-computers-to-see.html', label: 'Part VII — Teaching Computers to See',
    chapters: [{id:"7-1",title:"Images Are Just Grids of Numbers",tag:"C"},{id:"7-2",title:"Convolutional Neural Networks",tag:"C"},{id:"7-3",title:"The Classic CV Toolbox (SIFT/ORB)",tag:"C"},{id:"7-4",title:"Classification vs. Detection vs. Segmentation",tag:"C"},{id:"7-5",title:"Famous Architectures & Transfer Learning",tag:"C"},{id:"7-6",title:"Evaluating Vision Models (IoU/mAP)",tag:"C"},{id:"7-7",title:"Meet YOLO",tag:"C"},{id:"7-8",title:"Meet SuperPoint",tag:"C"}] },
  { id: '08', file: 'part-08-attention-graphs-sequences.html', label: 'Part VIII — Attention, Graphs & Sequences',
    chapters: [{id:"8-1",title:"Why Order Matters",tag:"C"},{id:"8-2",title:"RNNs & Their Limits",tag:"C"},{id:"8-3",title:"Word Embeddings (word2vec)",tag:"C"},{id:"8-4",title:"Attention",tag:"C"},{id:"8-5",title:"The Transformer, Piece by Piece",tag:"C"},{id:"8-6",title:"Meet SuperGlue",tag:"C"}] },
  { id: '09', file: 'part-09-language-models.html', label: 'Part IX — Language Models',
    chapters: [{id:"9-1",title:"Tokenization",tag:"C"},{id:"9-2",title:"Meet the LLM",tag:"C"},{id:"9-3",title:"Scaling Laws & Emergent Abilities",tag:"D"},{id:"9-4",title:"Instruction Tuning & RLHF",tag:"C"},{id:"9-5",title:"Efficient Fine-Tuning (LoRA, quantization)",tag:"D"},{id:"9-6",title:"Prompting & In-Context Learning",tag:"C"},{id:"9-7",title:"Retrieval-Augmented Generation (RAG)",tag:"C"},{id:"9-8",title:"Agents & Tool Use",tag:"D"},{id:"9-9",title:"Hallucination & Evaluation",tag:"C"}] },
  { id: '10', file: 'part-10-multimodal-ai.html', label: 'Part X — Multimodal AI',
    chapters: [{id:"10-1",title:"Meet the VLM (CLIP)",tag:"C"},{id:"10-2",title:"Captioning & Visual Question Answering",tag:"D"},{id:"10-3",title:"Speech & Audio Models (Whisper)",tag:"D"}] },
  { id: '11', file: 'part-11-generative-ai.html', label: 'Part XI — Generative AI',
    chapters: [{id:"11-1",title:"Autoencoders",tag:"C"},{id:"11-2",title:"Variational Autoencoders",tag:"C"},{id:"11-3",title:"GANs",tag:"C"},{id:"11-4",title:"Diffusion Models",tag:"C"},{id:"11-5",title:"Text-to-Image (Diffusion Meets CLIP)",tag:"D"}] },
  { id: '12', file: 'part-12-reinforcement-learning.html', label: 'Part XII — Reinforcement Learning',
    chapters: [{id:"12-1",title:"Learning by Trial and Reward",tag:"C"},{id:"12-2",title:"Q-Learning, Simply Explained",tag:"C"},{id:"12-3",title:"Policy Gradients & Exploration/Exploitation",tag:"D"},{id:"12-4",title:"Deep RL & RLHF Revisited",tag:"C"}] },
  { id: '13', file: 'part-13-responsible-ai.html', label: 'Part XIII — Responsible AI',
    chapters: [{id:"13-1",title:"Fairness & Bias",tag:"C"},{id:"13-2",title:"Privacy, Safety & Misuse",tag:"C"},{id:"13-3",title:"Interpretability",tag:"D"}] },
  { id: '14', file: 'part-14-notebook-to-product.html', label: 'Part XIV — From Notebook to Product',
    chapters: [{id:"14-1",title:"Version Control for ML",tag:"C"},{id:"14-2",title:"Experiment Tracking",tag:"C"},{id:"14-3",title:"Hardware: CPU vs. GPU vs. TPU",tag:"C"},{id:"14-4",title:"Distributed & Parallel Training",tag:"D"},{id:"14-5",title:"Serving a Model",tag:"C"},{id:"14-6",title:"Containers & Reproducibility",tag:"D"},{id:"14-7",title:"Monitoring & Drift",tag:"C"},{id:"14-8",title:"A Real Pipeline, Start to Finish",tag:"C"}] },
  { id: '15', file: 'part-15-becoming-ml-engineer.html', label: 'Part XV — Becoming an ML Engineer',
    chapters: [{id:"15-1",title:"How to Read a Research Paper (worked example: SuperPoint paper)",tag:"C"},{id:"15-2",title:"Choosing a Specialization",tag:"C"},{id:"15-3",title:"Portfolio Projects Mapped to Every Part",tag:"C"},{id:"15-4",title:"The Job Search",tag:"C"},{id:"15-5",title:"Glossary",tag:"C"}] }
];

/**
 * Renders the slim, persistent site-wide nav bar and inserts it as the
 * very first element in <body>. Call once per page, as early as possible:
 *
 *   <script>initSiteNav({ atRoot: true });</script>            // index.html
 *   <script>initSiteNav({ atRoot: false, current: '07' });</script>  // parts/*.html
 *
 * `atRoot` controls relative link prefixes (index.html lives at the
 * project root; every part file lives one level down in parts/).
 * `current` (a SITE_PARTS id) highlights that Part in the dropdown.
 */
function initSiteNav(opts) {
  opts = opts || {};
  var atRoot = !!opts.atRoot;
  var current = opts.current || null;
  var partPrefix = atRoot ? 'parts/' : '';
  var homeHref = atRoot ? '#top' : '../index.html';

  var nav = document.createElement('header');
  nav.className = 'site-nav';

  var home = document.createElement('a');
  home.className = 'site-nav-home';
  home.href = homeHref;
  home.textContent = "The Beginner's Guide to Machine Learning and Artificial Intelligence";
  nav.appendChild(home);

  var jump = document.createElement('div');
  jump.className = 'site-nav-jump';

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'site-nav-jump-btn';
  btn.textContent = 'Jump to Part ▾';
  jump.appendChild(btn);

  var menu = document.createElement('div');
  menu.className = 'site-nav-menu';
  SITE_PARTS.forEach(function (part) {
    var link = document.createElement('a');
    link.href = partPrefix + part.file;
    link.textContent = part.label;
    if (part.id === current) link.className = 'current';
    menu.appendChild(link);
  });
  jump.appendChild(menu);
  nav.appendChild(jump);

  document.body.insertBefore(nav, document.body.firstChild);

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    jump.classList.toggle('open');
  });
  document.addEventListener('click', function () {
    jump.classList.remove('open');
  });
}

/**
 * Renders index.html's aggregate reading-progress bar and full table of
 * contents from SITE_PARTS. Expects three elements already in the page:
 *
 *   <div class="landing-progress-fill" id="landing-progress-fill"></div>
 *   <p id="landing-progress-count"></p>
 *   <div id="landing-toc"></div>
 *
 * Reads the exact same 'aimlBookProgress' localStorage key every part
 * page's initProgressTracking() writes to, so a chapter read on any Part
 * counts toward this page's total — the key already accumulates across
 * the whole site, this just divides by the whole book's chapter count
 * (98) instead of one Part's.
 */
function initLandingPage() {
  var STORAGE_KEY = 'aimlBookProgress';
  var totalChapters = SITE_PARTS.reduce(function (sum, p) { return sum + p.chapters.length; }, 0);

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function renderProgress() {
    var progress = getProgress();
    var doneCount = Object.keys(progress).length;
    var pct = Math.min(100, Math.round((doneCount / totalChapters) * 100));
    var fill = document.getElementById('landing-progress-fill');
    var count = document.getElementById('landing-progress-count');
    if (fill) fill.style.width = pct + '%';
    if (count) count.textContent = doneCount + ' of ' + totalChapters + ' chapters read (' + pct + '%).';
  }

  function renderToc() {
    var container = document.getElementById('landing-toc');
    if (!container) return;

    SITE_PARTS.forEach(function (part) {
      var wrap = document.createElement('div');
      wrap.className = 'toc-part open';

      var header = document.createElement('div');
      header.className = 'toc-part-header';
      header.innerHTML = '<span>' + part.label + '</span><span class="toc-caret">▶</span>';
      header.addEventListener('click', function () {
        wrap.classList.toggle('open');
      });
      wrap.appendChild(header);

      var list = document.createElement('ul');
      list.className = 'toc-chapter-list';
      part.chapters.forEach(function (ch) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = 'parts/' + part.file + '#chapter-' + ch.id;
        a.textContent = ch.id + ' ' + ch.title + ' ';
        var tag = document.createElement('span');
        tag.className = 'toc-tag ' + (ch.tag === 'C' ? 'core' : 'deep');
        tag.textContent = ch.tag === 'C' ? 'CORE' : 'DEEP';
        a.appendChild(tag);
        li.appendChild(a);
        list.appendChild(li);
      });
      wrap.appendChild(list);
      container.appendChild(wrap);
    });
  }

  renderProgress();
  renderToc();
}

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
