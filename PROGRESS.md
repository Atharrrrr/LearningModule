# Progress

## Status
In progress. 63 of 98 chapters written. Parts I, II, III, IV, V, VI, VII,
and VIII are all complete. Part IX is in progress (2 of 9 chapters done).

## Next chapter due
Part IX, Chapter 9.3 — Scaling Laws & Emergent Abilities
(parts/part-09-language-models.html already exists — insert the new
<section> before </main> and flip 9.3's sidebar entry from unwritten to
live. Not an anchor chapter — can be batched with 9.4 up to the batch
size given, EXCEPT Chapter 9.4 (Instruction Tuning & RLHF) is itself an
anchor chapter (see CLAUDE.md) and must be written ALONE — so if a batch
would reach 9.4, stop right before it and write only up through 9.3.)

## Part VIII self-check (write-book-chapter skill compliance)
Reviewed all 6 chapters (8.1–8.6) against the required rhythm: every
chapter has a frame-of-reference analogy, plain concept explanation, a
worked/interactive example with real computed values (verified via
Node scripts and headless-Chromium checks, not faked), a "what you can
now explain" recap, and a 3-question quiz. Real algorithms implemented
throughout: bag-of-words counting (8.1), a real sigmoid RNN step-through
plus the vanishing-gradient formula reused from 6.7 (8.2), a 2D toy
word-embedding analogy demo (8.3), real scaled dot-product attention
with softmax (8.4), real sinusoidal positional encoding plus a
click-to-highlight Transformer block diagram reusing the 6.9 UI pattern
(8.5), and a real geometric-consistency-vs-naive-matching cost function
with a verified λ crossover (8.6). All new jargon terms were boxed on
first use and cross-checked against GLOSSARY_TRACKER.md before writing.
No structural or quality issues found.

## Part VII self-check (write-book-chapter skill compliance)
Reviewed all 8 chapters (7.1–7.8) against the required rhythm: every
chapter has a frame-of-reference analogy, plain concept explanation, a
worked/interactive example with real computed values (verified via
Node scripts and headless-Chromium checks, not faked), a "what you can
now explain" recap, and a 3-question quiz. All new jargon terms were
boxed on first use and cross-checked against GLOSSARY_TRACKER.md before
writing (e.g., "classification" and "precision/recall" were linked back
to Chapters 4.2/5.3 rather than redefined). No structural or quality
issues found.

## Completed chapters
- 0.1 How This Book Works — parts/part-00-before-we-begin.html
- 1.1 AI vs. ML vs. Deep Learning vs. RL — parts/part-01-orientation.html
- 1.2 The Three Ways Machines Learn — parts/part-01-orientation.html
- 1.3 Machines Don't Think, They Fit Curves — parts/part-01-orientation.html
- 1.4 A Short History of AI [D] — parts/part-01-orientation.html
- 1.5 The Job Landscape — parts/part-01-orientation.html
- 2.1 Numbers, Variables & Functions — parts/part-02-toolkit.html
- 2.2 Vectors — Data as Arrows in Space — parts/part-02-toolkit.html
- 2.3 Matrices — Tables That Transform Data — parts/part-02-toolkit.html
- 2.4 Dot Products & Similarity — parts/part-02-toolkit.html
- 2.5 Probability, the Intuitive Way — parts/part-02-toolkit.html
- 2.6 Distributions & Uncertainty — parts/part-02-toolkit.html
- 2.7 Bayes' Theorem, Explained With a Story — parts/part-02-toolkit.html
- 2.8 Slopes & Change — Intuitive Calculus — parts/part-02-toolkit.html
- 2.9 The Chain Rule — parts/part-02-toolkit.html
- 2.10 Your First Lines of Code (Python) — parts/part-02-toolkit.html
- 2.11 Arrays, Tables & Tensors (NumPy/pandas) — parts/part-02-toolkit.html
- 2.12 Plotting & Seeing Your Data [D] — parts/part-02-toolkit.html
- 3.1 Where Data Comes From — parts/part-03-working-with-data.html
- 3.2 Cleaning Messy Data — parts/part-03-working-with-data.html
- 3.3 Exploratory Data Analysis — parts/part-03-working-with-data.html
- 3.4 Feature Engineering — parts/part-03-working-with-data.html
- 3.5 Imbalanced Data & Why Accuracy Lies — parts/part-03-working-with-data.html
- 3.6 Data Augmentation — parts/part-03-working-with-data.html
- 3.7 Bias in Data, Bias in Models [D] — parts/part-03-working-with-data.html
- 4.1 Linear Regression — parts/part-04-classical-ml.html
- 4.2 Logistic Regression — parts/part-04-classical-ml.html
- 4.3 How Learning Actually Happens (loss, gradient descent) — parts/part-04-classical-ml.html
- 4.4 k-Nearest Neighbors — parts/part-04-classical-ml.html
- 4.5 Decision Trees — parts/part-04-classical-ml.html
- 4.6 Random Forests & Boosting — parts/part-04-classical-ml.html
- 4.7 SVM & Naive Bayes [D] — parts/part-04-classical-ml.html
- 4.8 Clustering (K-means) — parts/part-04-classical-ml.html
- 4.9 Dimensionality Reduction (PCA/t-SNE) — parts/part-04-classical-ml.html
- 5.1 Why Models Fail (over/underfitting, bias-variance) — parts/part-05-evaluation.html
- 5.2 Train/Val/Test & Cross-Validation — parts/part-05-evaluation.html
- 5.3 Metrics (precision/recall/F1/ROC-AUC) — parts/part-05-evaluation.html
- 5.4 Regularization — parts/part-05-evaluation.html
- 6.1 The Neuron — parts/part-06-neural-networks.html
- 6.2 Stacking Neurons (Layers, MLPs) — parts/part-06-neural-networks.html
- 6.3 Activation Functions — parts/part-06-neural-networks.html
- 6.4 Backpropagation — parts/part-06-neural-networks.html
- 6.5 Optimizers (SGD, Adam) — parts/part-06-neural-networks.html
- 6.6 The Training Toolbox — parts/part-06-neural-networks.html
- 6.7 Vanishing Gradients & Initialization — parts/part-06-neural-networks.html
- 6.8 Dropout & BatchNorm — parts/part-06-neural-networks.html
- 6.9 Building Your First Network (PyTorch) — parts/part-06-neural-networks.html
- 7.1 Images Are Just Grids of Numbers — parts/part-07-teaching-computers-to-see.html
- 7.2 Convolutional Neural Networks — parts/part-07-teaching-computers-to-see.html
- 7.3 The Classic CV Toolbox (SIFT/ORB) — parts/part-07-teaching-computers-to-see.html
- 7.4 Classification vs. Detection vs. Segmentation — parts/part-07-teaching-computers-to-see.html
- 7.5 Famous Architectures & Transfer Learning — parts/part-07-teaching-computers-to-see.html
- 7.6 Evaluating Vision Models (IoU/mAP) — parts/part-07-teaching-computers-to-see.html
- 7.7 Meet YOLO — parts/part-07-teaching-computers-to-see.html
- 7.8 Meet SuperPoint — parts/part-07-teaching-computers-to-see.html
- 8.1 Why Order Matters — parts/part-08-attention-graphs-sequences.html
- 8.2 RNNs & Their Limits — parts/part-08-attention-graphs-sequences.html
- 8.3 Word Embeddings (word2vec) — parts/part-08-attention-graphs-sequences.html
- 8.4 Attention — parts/part-08-attention-graphs-sequences.html
- 8.5 The Transformer, Piece by Piece — parts/part-08-attention-graphs-sequences.html
- 8.6 Meet SuperGlue — parts/part-08-attention-graphs-sequences.html
- 9.1 Tokenization — parts/part-09-language-models.html
- 9.2 Meet the LLM — parts/part-09-language-models.html

## Open issues / flags for review
- Reminder for future chapters: assets/components.js must be included in
  <head> (not at the bottom of <body>), since inline jargon-box calls
  inside <main> run before a bottom-of-body script would load. Fixed in
  0.1 and 1.1 after a real browser check caught it; part-01's template
  already has it right, so this only matters when starting a new Part file.
- verify-chapter's browser check is a no-op in this environment (Python
  playwright isn't installed), so structural PASS alone doesn't prove the
  page runs cleanly. Each chapter since 1.1 has also been smoke-tested
  with the Node/Playwright + Chromium already installed at
  /opt/pw-browsers (load the page headless, assert zero console/page
  errors, click through the quiz/demo, check localStorage progress).
  Keep doing this before marking a chapter done.
