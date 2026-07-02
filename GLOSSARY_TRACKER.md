# Glossary Tracker
Running list of jargon terms already given a definition box, and where.
Check this before boxing a term again — link back to the first definition
instead of repeating it.

| Term | First defined in | One-line definition used |
|------|------------------|---------------------------|
| algorithm | 0.1 How This Book Works | A precise, step-by-step set of instructions for turning an input into an output — a recipe a computer can follow exactly, every time. |
| artificial intelligence (AI) | 1.1 AI vs. ML vs. Deep Learning vs. RL | Any technique that makes a computer perform a task that normally seems to require human intelligence — whether it follows a hand-written rule or learns one from data. |
| machine learning (ML) | 1.1 AI vs. ML vs. Deep Learning vs. RL | A way of building AI where the system improves at a task by learning patterns from data, instead of being given an explicit, hand-written rule for every situation. |
| neural network | 1.1 AI vs. ML vs. Deep Learning vs. RL | A model loosely inspired by neurons in the brain: many simple, connected units arranged in layers, each passing a signal to the next, that together turn an input into an output. |
| deep learning | 1.1 AI vs. ML vs. Deep Learning vs. RL | Machine learning that uses a neural network with many stacked layers, so the system can automatically discover which patterns in the raw data matter, instead of a person hand-picking them. |
| reinforcement learning (RL) | 1.1 AI vs. ML vs. Deep Learning vs. RL | Machine learning where a system (an "agent") learns by taking actions and receiving rewards or penalties for the results, gradually improving its behavior through trial and error — without ever being shown a labeled correct answer. |
| label | 1.2 The Three Ways Machines Learn | The correct answer attached to a training example — like the word "spam" or "not spam" written next to an email — that the model is trying to learn to predict. |
| supervised learning | 1.2 The Three Ways Machines Learn | A way of training a model where every example comes paired with a label (the correct answer). The model guesses, compares its guess to the label, and adjusts. |
| unsupervised learning | 1.2 The Three Ways Machines Learn | A way of training a model on data that has no labels or correct answers attached at all. The model's only job is to find structure — which examples resemble each other — on its own. |
| model | 1.3 Machines Don't Think, They Fit Curves | A mathematical function that turns an input into an output; exactly how it behaves is controlled by a set of adjustable numbers called its parameters. |
| parameters | 1.3 Machines Don't Think, They Fit Curves | The adjustable numbers inside a model that control exactly how it turns an input into an output — the "knobs" that training tunes. |
| training | 1.3 Machines Don't Think, They Fit Curves | The process of searching for parameter values that make a model's outputs match real examples as closely as possible. |
| prediction | 1.3 Machines Don't Think, They Fit Curves | The output a trained model produces when given a new input it hasn't seen labeled before. |
| Turing Test | 1.4 A Short History of AI | A thought experiment proposed by Alan Turing in 1950: if a human judge, chatting blind with both a machine and a real person, can't reliably tell which is which, the machine is said to have passed. |
| AI winter | 1.4 A Short History of AI | A recurring period in AI's history when hype outpaces real progress, funding and interest collapse, and research slows sharply — until the next breakthrough starts a new "summer." |
| Research Scientist (ML) | 1.5 The Job Landscape | A researcher who invents new model architectures, training techniques, or algorithms, and typically publishes results — pushing the field's frontier rather than shipping a specific product. |
| ML Engineer | 1.5 The Job Landscape | An engineer who takes proven machine learning techniques and builds them into real, running software products — closer to software engineering than research. |
| MLOps | 1.5 The Job Landscape | Short for "machine learning operations" — the discipline of keeping trained models running reliably in production: monitoring them, retraining them, and maintaining the infrastructure they depend on. |
| Data Scientist | 1.5 The Job Landscape | Someone who analyzes data to answer business questions and build predictive models, often working earlier in the pipeline than an ML Engineer — exploring data and running experiments before or alongside a deployed system. |
| variable | 2.1 Numbers, Variables & Functions | A name that stands in for a number that can change or be filled in later — like x, or hours, or score — rather than a fixed number itself. |
| function | 2.1 Numbers, Variables & Functions | A rule that takes one or more inputs and produces exactly one output, every single time you give it the same input — written f(x), meaning "the function f applied to input x." |
| vector | 2.2 Vectors — Data as Arrows in Space | An ordered list of numbers describing something, which can be pictured as an arrow from an origin point to a specific location in space — one axis per number in the list. |
| feature | 2.2 Vectors — Data as Arrows in Space | One measured property used to describe something numerically — like a movie's "action score" or a house's square footage. A vector is built out of features, one per number. |
| matrix | 2.3 Matrices — Tables That Transform Data | A grid of numbers arranged in rows and columns. As a dataset, each row is one example (a vector) and each column is one feature. As a transformation, a matrix consistently reshapes any vector fed into it. |
| dot product | 2.4 Dot Products & Similarity | A single number computed from two same-length vectors: multiply each pair of matching entries, then add up all the results. A larger, more positive dot product means the two vectors point in a more similar direction. |
| probability | 2.5 Probability, the Intuitive Way | A number from 0 (impossible) to 1 (certain), often shown as a percentage, expressing how likely something is to happen — and matching, over many repeats, how often it actually would. |
| independent events | 2.5 Probability, the Intuitive Way | Two events where the outcome of one has no effect on the outcome of the other. The probability of both happening is found by multiplying their individual probabilities. |
| distribution | 2.6 Distributions & Uncertainty | A description of how probability (or frequency) is spread across all the possible outcomes of something — for example, a bar chart showing how likely each face of a die is to land face-up. |
| normal distribution | 2.6 Distributions & Uncertainty | An extremely common bell-shaped distribution where outcomes cluster symmetrically around an average, with progressively fewer outcomes the further you get from that average. Also called a bell curve. |
| Bayes' theorem | 2.7 Bayes' Theorem, Explained With a Story | A rule for updating a probability estimate (the prior) into a more accurate one (the posterior) after seeing new evidence, by properly weighing that evidence against how rare the thing you're looking for was to begin with. |
| prior | 2.7 Bayes' Theorem, Explained With a Story | Your probability estimate before seeing new evidence — in the story above, the 1% base rate of the condition. |
| posterior | 2.7 Bayes' Theorem, Explained With a Story | Your updated probability estimate after seeing new evidence — in the story above, the roughly 50% chance of actually having the condition given a positive test. |
| slope | 2.8 Slopes & Change — Intuitive Calculus | How much a line's output (y) changes for each unit its input (x) changes — rise over run. For a straight line, it's the same number everywhere. |
| derivative | 2.8 Slopes & Change — Intuitive Calculus | The slope of a curve at one specific point — found by zooming in close enough that the curve looks like a straight line right there. Different points on a curve can have different derivatives. |
| chain rule | 2.9 The Chain Rule | A rule for finding the rate of change through a chain of dependencies: multiply each link's individual rate of change together. If y depends on u, and u depends on x, then dy/dx = dy/du × du/dx. |
| string | 2.10 Your First Lines of Code (Python) | A piece of text data in code, written inside quotes — like "spam" or "Movie A" — as opposed to a number. |
| loop | 2.10 Your First Lines of Code (Python) | An instruction that repeats a block of code once for each item in a list (or until some condition is met), instead of writing the same code out by hand for every item. |
| NumPy array | 2.11 Arrays, Tables & Tensors (NumPy/pandas) | A fast, uniform grid of numbers — the real, working implementation of the vectors (Chapter 2.2) and matrices (Chapter 2.3) this Part has been building toward. |
| tensor | 2.11 Arrays, Tables & Tensors (NumPy/pandas) | A generalization of vectors and matrices to any number of dimensions: a 0D tensor is a single number, 1D is a vector, 2D is a matrix, and 3D or higher is a stack of matrices. |
| scatter plot | 2.12 Plotting & Seeing Your Data | A chart that plots each data example as a point, using two features as its x and y position — directly visualizing the vectors from Chapter 2.2, and revealing relationships, clusters, and outliers. |
| histogram | 2.12 Plotting & Seeing Your Data | A chart that bins one feature's values and counts how many examples fall into each bin — a direct visual picture of the distributions from Chapter 2.6. |
