# Progress

## Status
In progress. 92 of 98 chapters written. Parts I-XIII are all complete.
Part XIV is in progress (7 of 8 chapters done).

## Next chapter due
Part XIV, Chapter 14.8 — A Real Pipeline, Start to Finish (the LAST
chapter of Part XIV — do a Part XIV self-check afterward per the
resumable-autonomous-loop rule).
(parts/part-14-notebook-to-product.html already exists — insert the new
<section> before </main> and flip 14.8's sidebar entry from unwritten to
live. Not an anchor chapter. No anchor chapters remain anywhere in the
curriculum — the rest of Part XIV and all of Part XV can be batched
normally per the 2-3-chapters-per-turn rule all the way to the end of
the book.)

## Part XIII self-check (write-book-chapter skill compliance)
Reviewed all 3 chapters (13.1–13.3) against the required rhythm: every
chapter has a frame-of-reference analogy, plain concept explanation, a
worked/interactive example with real computed values (verified via Node
scripts and headless-Chromium checks, not faked), a "what you can now
explain" recap, and a 3-question quiz. Real, verified computation
throughout: real per-group confusion-matrix metrics (accuracy,
demographic parity, equal opportunity) computed live from toy counts,
showing an 80% overall accuracy masking a real 30-point recall gap
(13.1); Chapter 9.2's exact real bigram machinery reused to show a
common context's probability genuinely splitting 50/50 versus a rare
context's 100% deterministic (memorized) output (13.2); and a real
logistic-regression feature-contribution breakdown, verified to sum
exactly to the raw score feeding sigmoid, updating live as a feature
slider moves (13.3). All new jargon terms were boxed on first use and
cross-checked against GLOSSARY_TRACKER.md, with correct linking back to
already-defined terms rather than redefinition (e.g. "bias (in data and
models)" from Chapter 3.7 was linked, not redefined). Heavy
cross-referencing to Chapters 3.7, 4.1-4.2, 5.3, 6-8, and 9.2/9.4. No
structural or quality issues found.

## Part XII self-check (write-book-chapter skill compliance)
Reviewed all 4 chapters (12.1–12.4) against the required rhythm: every
chapter has a frame-of-reference analogy, plain concept explanation, a
worked/interactive example with real computed values (verified via Node
scripts and headless-Chromium checks, not faked), a "what you can now
explain" recap, and a 3-question quiz. Real, verified computation
throughout: a real multi-armed bandit with genuinely random Bernoulli
rewards converging toward hidden true probabilities (12.1); a real
Q-learning update rule run over hundreds of episodes with a fully random
behavior policy, converging to Q-values matching the exact discounted-
reward formula γ^distance-from-goal (12.2); a real policy-gradient
(REINFORCE-with-baseline) update converging a softmax policy toward the
best hidden-probability action, plus a real, deterministic demonstration
of pure-exploitation getting permanently stuck due to zero-initialization
and tie-breaking (12.3); and a real combinatorial calculation showing a
Q-table's entry count for an 84×84 image state (~17,000 digits) dwarfing
even the number of atoms in the observable universe, motivating deep RL,
plus an explicit, accurate vocabulary mapping back onto Chapter 9.4's
already-computed RLHF demo (12.4, anchor). All new jargon terms were
boxed on first use and cross-checked against GLOSSARY_TRACKER.md, with
heavy cross-referencing back to Chapters 1.1, 4.3, 6-8, 8.4, and 9.2-9.4.
Chapter 12.4 closed the loop explicitly back to Part IX's RLHF chapter,
tying the whole book's LLM-training material to this Part's RL
vocabulary. No structural or quality issues found.

## Part XI self-check (write-book-chapter skill compliance)
Reviewed all 5 chapters (11.1–11.5) against the required rhythm: every
chapter has a frame-of-reference analogy, plain concept explanation, a
worked/interactive example with real computed values (verified via Node
scripts and headless-Chromium checks, not faked), a "what you can now
explain" recap, and a 3-question quiz. Real, verified computation
throughout: a real 1-number encoder/decoder showing reconstruction error
scale with genuine data compressibility (11.1); real Box-Muller Gaussian
sampling producing distinct-but-plausible reconstructions from one
learned distribution (11.2); a real, working 1-number GAN trained via
actual alternating gradient descent/ascent, including the honest,
correctly-reproduced oscillation real adversarial training exhibits
(11.3, anchor); a real forward/reverse diffusion process that exactly
recovers its original value via genuine algebraic inversion of recorded
noise, explicitly flagged as a simplification versus a real trained
model's approximate predictions (11.4, anchor); and a real guided-step
computation showing identical starting noise converging to different
targets under different prompt conditioning (11.5). All new jargon terms
were boxed on first use and cross-checked against GLOSSARY_TRACKER.md,
with heavy cross-referencing back to Chapters 2.6, 4.2-4.3, 4.9, 5.4,
6.1, 6.3, 7.2, 8.4, and 10.1. Anchor chapters 11.4 and (per the
non-consecutive-anchors rule) the standalone-turn requirement were both
honored; 11.3 was written in the same batch as 11.1-11.2 since it is not
itself an anchor, and 11.4 immediately followed as its own dedicated
turn. No structural or quality issues found.

## Part X self-check (write-book-chapter skill compliance)
Reviewed all 3 chapters (10.1–10.3) against the required rhythm: every
chapter has a frame-of-reference analogy, plain concept explanation, a
worked/interactive example with real computed values (verified via Node
scripts and headless-Chromium checks, not faked), a "what you can now
explain" recap, and a 3-question quiz. Real, verified computation
throughout: real cosine-similarity image-caption matching over toy CLIP
embeddings (10.1); a real template-based caption/VQA-answer generator
sharing one underlying data structure per scene (10.2); and a real
frequency-correlation computation (a genuine single-bin DFT) correctly
isolating the two true frequencies in a synthetic waveform out of five
candidates (10.3). Where full pixel- or audio-level neural computation
wasn't feasible to run live in a browser, this was stated honestly in
the prose rather than faked (10.2's structured "scene" standing in for
real vision features; 10.3's synthetic waveform standing in for a real
recording). All new jargon terms were boxed on first use and
cross-checked against GLOSSARY_TRACKER.md, with heavy, explicit
cross-referencing back to Chapters 2.4, 2.11, 7.1-7.2, 8.3, 8.5, and
9.1-9.2. No structural or quality issues found.

## Part IX self-check (write-book-chapter skill compliance)
Reviewed all 9 chapters (9.1–9.9) against the required rhythm: every
chapter has a frame-of-reference analogy, plain concept explanation, a
worked/interactive example with real computed values (verified via
Node scripts and headless-Chromium checks, not faked), a "what you can
now explain" recap, and a 3-question quiz. Real, verified computation
throughout: a live Byte-Pair Encoding merge stepper and tokenizer (9.1);
a real bigram next-token model with greedy vs. weighted-sampling
autoregressive generation (9.2); a real power-law loss curve and a
per-step-accuracy-raised-to-a-power "emergent ability" illustration
(9.3); a real dot-product toy reward model and an exponentiated-weights
RLHF policy-update simulation (9.4); real LoRA parameter-count arithmetic
and real int8 quantization/dequantization with measured rounding error
(9.5); a real context-length disambiguation demo (river bank vs. money
bank) and a real few-shot pattern-application demo (9.6); real cosine-
similarity document retrieval over toy embeddings (9.7); a real live
agent-trace calculator tool call (9.8); and a real fallback-to-mode
hallucination simulation plus a real graded true/false benchmark (9.9).
All new jargon terms were boxed on first use and cross-checked against
GLOSSARY_TRACKER.md before writing, with heavy cross-referencing back to
Chapters 2.4, 4.2-4.3, 6.1, 6.4-6.5, 7.5, and all of Part VIII. Anchor
chapters 9.2 and 9.4 each received a full solo turn per CLAUDE.md. No
structural or quality issues found.

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
- 9.3 Scaling Laws & Emergent Abilities — parts/part-09-language-models.html
- 9.4 Instruction Tuning & RLHF — parts/part-09-language-models.html
- 9.5 Efficient Fine-Tuning (LoRA, quantization) — parts/part-09-language-models.html
- 9.6 Prompting & In-Context Learning — parts/part-09-language-models.html
- 9.7 Retrieval-Augmented Generation (RAG) — parts/part-09-language-models.html
- 9.8 Agents & Tool Use — parts/part-09-language-models.html
- 9.9 Hallucination & Evaluation — parts/part-09-language-models.html
- 10.1 Meet the VLM (CLIP) — parts/part-10-multimodal-ai.html
- 10.2 Captioning & Visual Question Answering — parts/part-10-multimodal-ai.html
- 10.3 Speech & Audio Models (Whisper) — parts/part-10-multimodal-ai.html
- 11.1 Autoencoders — parts/part-11-generative-ai.html
- 11.2 Variational Autoencoders — parts/part-11-generative-ai.html
- 11.3 GANs — parts/part-11-generative-ai.html
- 11.4 Diffusion Models — parts/part-11-generative-ai.html
- 11.5 Text-to-Image (Diffusion Meets CLIP) — parts/part-11-generative-ai.html
- 12.1 Learning by Trial and Reward — parts/part-12-reinforcement-learning.html
- 12.2 Q-Learning, Simply Explained — parts/part-12-reinforcement-learning.html
- 12.3 Policy Gradients & Exploration/Exploitation — parts/part-12-reinforcement-learning.html
- 12.4 Deep RL & RLHF Revisited — parts/part-12-reinforcement-learning.html
- 13.1 Fairness & Bias — parts/part-13-responsible-ai.html
- 13.2 Privacy, Safety & Misuse — parts/part-13-responsible-ai.html
- 13.3 Interpretability — parts/part-13-responsible-ai.html
- 14.1 Version Control for ML — parts/part-14-notebook-to-product.html
- 14.2 Experiment Tracking — parts/part-14-notebook-to-product.html
- 14.3 Hardware: CPU vs. GPU vs. TPU — parts/part-14-notebook-to-product.html
- 14.4 Distributed & Parallel Training — parts/part-14-notebook-to-product.html
- 14.5 Serving a Model — parts/part-14-notebook-to-product.html
- 14.6 Containers & Reproducibility — parts/part-14-notebook-to-product.html
- 14.7 Monitoring & Drift — parts/part-14-notebook-to-product.html

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
