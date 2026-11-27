window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t1-1.1-01",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which statement best distinguishes machine learning (ML) from the broader field of artificial intelligence (AI)?",
    "choices": [
      {
        "id": "A",
        "text": "ML is the field of building systems that can see images, while AI is the field of building systems that read text."
      },
      {
        "id": "B",
        "text": "ML refers only to systems that generate new content, while AI refers to systems that classify existing content."
      },
      {
        "id": "C",
        "text": "ML is a subset of AI in which a system learns patterns from data instead of following hand-written rules."
      },
      {
        "id": "D",
        "text": "ML is any software that follows fixed if-then rules, while AI is software that improves with experience."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "AI is the broad goal of software performing tasks that normally need human intelligence. ML is the part of AI where the behavior is learned from data rather than coded as explicit rules.",
    "whyWrong": {
      "A": "Seeing images and reading text are computer vision and NLP. They are application areas, not the ML versus AI distinction.",
      "B": "Generating content is generative AI, a subset of deep learning. ML also covers classification and prediction.",
      "D": "This reverses the idea. Fixed if-then rules are classic non-learning AI, and learning from experience is what defines ML."
    },
    "services": [],
    "tags": [
      "ai-ml-definitions",
      "terminology"
    ]
  },
  {
    "id": "t1-1.1-02",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "In ML terminology, what is the relationship between an algorithm and a model?",
    "choices": [
      {
        "id": "A",
        "text": "The algorithm is the learning procedure, and the model is the artifact it produces after training on data."
      },
      {
        "id": "B",
        "text": "The model is the learning procedure, and the algorithm is the artifact it produces after training on data."
      },
      {
        "id": "C",
        "text": "The algorithm is the dataset used for training, and the model is the test set used for evaluation."
      },
      {
        "id": "D",
        "text": "The algorithm and the model are two names for the same thing, used in different cloud services."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "An algorithm (for example linear regression) is the recipe. Running it on training data yields a model, which holds the learned parameters and is what you deploy.",
    "whyWrong": {
      "B": "This swaps the terms. The model is the output of training, not the procedure that performs it.",
      "C": "Datasets are the input to the algorithm, and neither term refers to a train or test split.",
      "D": "They are distinct. One algorithm trained on different data produces different models."
    },
    "services": [],
    "tags": [
      "model-vs-algorithm",
      "terminology"
    ]
  },
  {
    "id": "t1-1.1-03",
    "domain": 1,
    "task": "1.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO activities are examples of inferencing rather than training? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "An engineer splits historical records into a training set and a held-out test set."
      },
      {
        "id": "B",
        "text": "A deployed foundation model writes a summary of a document that a user just uploaded."
      },
      {
        "id": "C",
        "text": "An algorithm repeatedly adjusts model weights over several passes through a labeled dataset."
      },
      {
        "id": "D",
        "text": "A job computes a loss value and updates parameters to reduce it on each epoch."
      },
      {
        "id": "E",
        "text": "A deployed model scores each new loan application and returns an approval probability."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Inferencing is using an already trained model to predict or generate on new input. Adjusting weights to reduce loss is training, and splitting data is preparation.",
    "whyWrong": {
      "A": "Splitting data is data preparation that happens before training, and it does not use a model at all.",
      "C": "Adjusting weights across passes through the data is the training loop.",
      "D": "Computing loss and updating parameters each epoch is training."
    },
    "services": [],
    "tags": [
      "training-vs-inference",
      "terminology"
    ]
  },
  {
    "id": "t1-1.1-04",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A fraud-detection model reaches 98% accuracy on its training data but only 71% on a validation set of transactions it has never seen. What is the most likely problem, and what is a reasonable response?",
    "choices": [
      {
        "id": "A",
        "text": "Underfitting, so the team should use a simpler model with fewer parameters."
      },
      {
        "id": "B",
        "text": "Overfitting, so the team should add more varied training data or apply regularization."
      },
      {
        "id": "C",
        "text": "Underfitting, so the team should train longer on the same training data only."
      },
      {
        "id": "D",
        "text": "Overfitting, so the team should evaluate on the training data instead of the validation set."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "High accuracy on training data with much lower accuracy on unseen data is the signature of overfitting: the model memorized the training set. More varied data or regularization improves generalization.",
    "whyWrong": {
      "A": "Underfitting shows poor results on both training and unseen data, which does not match 98% on training.",
      "C": "This misdiagnoses the problem. Underfitting would show low training accuracy, and more training on the same data worsens memorization.",
      "D": "The diagnosis is right, but evaluating on training data hides the problem and does not fix generalization."
    },
    "services": [],
    "tags": [
      "overfitting-underfitting",
      "model-fit"
    ]
  },
  {
    "id": "t1-1.1-05",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which of the following is NOT a characteristic of deep learning?",
    "choices": [
      {
        "id": "A",
        "text": "It uses neural networks made of many stacked layers of connected units."
      },
      {
        "id": "B",
        "text": "It can learn useful features directly from raw inputs such as pixels or text."
      },
      {
        "id": "C",
        "text": "It typically performs best when trained on large amounts of data."
      },
      {
        "id": "D",
        "text": "It requires engineers to hand-write the decision rules for every input pattern."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Deep learning is ML with multi-layer neural networks that learn features and patterns from data. Hand-writing rules for every pattern is the traditional rules-based approach it replaces.",
    "whyWrong": {
      "A": "Many-layered neural networks are the defining trait of deep learning, so this is a true characteristic.",
      "B": "Learning features from raw data is a major advantage of deep learning, so this is true.",
      "C": "Deep networks usually need large datasets to perform well, so this is true."
    },
    "services": [],
    "tags": [
      "deep-learning",
      "neural-networks"
    ]
  },
  {
    "id": "t1-1.1-06",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A manufacturer wants software that inspects photos from an assembly line and flags cracked parts. Which AI field does this task belong to?",
    "choices": [
      {
        "id": "A",
        "text": "Natural language processing, because the software produces a text label for each part."
      },
      {
        "id": "B",
        "text": "Computer vision, because the input data is images that the software must interpret."
      },
      {
        "id": "C",
        "text": "Speech recognition, because the software listens for sounds that indicate a crack."
      },
      {
        "id": "D",
        "text": "Time-series forecasting, because photos arrive in sequence over the course of a shift."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Computer vision is the AI field that interprets images and video. The deciding factor is the input type (photos), not the form of the output.",
    "whyWrong": {
      "A": "NLP works on human language as input. A text label as output does not make the task NLP.",
      "C": "Speech recognition works on spoken audio, and the input here is photos.",
      "D": "Arrival order does not turn image classification into forecasting, which predicts future values from ordered numeric data."
    },
    "services": [
      "Amazon Rekognition"
    ],
    "tags": [
      "computer-vision",
      "nlp"
    ]
  },
  {
    "id": "t1-1.1-07",
    "domain": 1,
    "task": "1.1",
    "type": "multi",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which TWO statements correctly describe how AI, ML, deep learning, and generative AI relate to one another? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Generative AI is a separate field with no connection to machine learning."
      },
      {
        "id": "B",
        "text": "Generative AI is built on deep learning models such as transformers."
      },
      {
        "id": "C",
        "text": "Machine learning is a subset of deep learning."
      },
      {
        "id": "D",
        "text": "Deep learning is a subset of machine learning."
      },
      {
        "id": "E",
        "text": "Artificial intelligence is a subset of machine learning."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "The nesting is AI, then ML, then deep learning, then generative AI. Generative AI models such as LLMs are deep neural networks.",
    "whyWrong": {
      "A": "Generative AI is a subset of deep learning, which makes it part of ML.",
      "C": "This reverses the nesting. ML is the larger set that contains deep learning.",
      "E": "This reverses the nesting. AI is the broadest term and contains ML."
    },
    "services": [],
    "tags": [
      "ai-ml-definitions",
      "genai-vs-ml"
    ]
  },
  {
    "id": "t1-1.1-08",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which task is best described as a generative AI use case, as opposed to a discriminative (predict-a-label) use case?",
    "choices": [
      {
        "id": "A",
        "text": "Drafting a product description from a short list of features."
      },
      {
        "id": "B",
        "text": "Classifying incoming emails as spam or not spam."
      },
      {
        "id": "C",
        "text": "Predicting whether a customer will cancel a subscription."
      },
      {
        "id": "D",
        "text": "Estimating the sale price of a house from its size and location."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Generative models create new content such as text, images, or code. Discriminative models map an input to a label or a number.",
    "whyWrong": {
      "B": "Spam detection assigns one of a fixed set of labels, which is classification.",
      "C": "Churn prediction outputs a yes or no label, which is classification.",
      "D": "Price estimation outputs a number, which is regression. Neither creates new content."
    },
    "services": [],
    "tags": [
      "genai-vs-ml",
      "ai-ml-definitions"
    ]
  },
  {
    "id": "t1-1.1-09",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Given the goal \"resolve this billing dispute,\" a system chooses its own steps, calls a payments API and a policy lookup tool, checks the results, and retries when a step fails. Which term best describes this system?",
    "choices": [
      {
        "id": "A",
        "text": "A supervised classifier that predicts the dispute category from labeled tickets."
      },
      {
        "id": "B",
        "text": "A single-turn LLM that returns one text completion for each prompt it receives."
      },
      {
        "id": "C",
        "text": "Agentic AI, in which a model plans and takes actions with tools toward a goal."
      },
      {
        "id": "D",
        "text": "A batch inference job that scores a stored dataset of disputes overnight."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Agentic AI combines a goal, planning, tool use, and some autonomy. A single-turn LLM only returns text and does not act on external systems.",
    "whyWrong": {
      "A": "A classifier outputs a label and does not plan steps or call tools.",
      "B": "A single-turn completion neither calls tools nor checks results and retries. Those behaviors are what make a system agentic.",
      "D": "Batch is a way of running inference over a stored dataset. It says nothing about planning or acting with tools."
    },
    "services": [],
    "tags": [
      "agentic-ai",
      "genai-vs-ml"
    ]
  },
  {
    "id": "t1-1.1-10",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An e-commerce team must generate embeddings for 20 million catalog items once a month. Results are written to Amazon S3, and no user waits on any individual response. Which inference approach is the best fit?",
    "choices": [
      {
        "id": "A",
        "text": "A real-time endpoint kept running all month, called once per catalog item."
      },
      {
        "id": "B",
        "text": "Serverless inference, invoked once per item with cold starts on idle periods."
      },
      {
        "id": "C",
        "text": "Asynchronous inference with one queued request for each of the 20 million items."
      },
      {
        "id": "D",
        "text": "Batch inference, which processes the whole dataset offline without a persistent endpoint."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Scoring an entire dataset offline with no latency requirement is the batch pattern (for example SageMaker Batch Transform, or Amazon Bedrock batch inference). It avoids paying for an always-on endpoint.",
    "whyWrong": {
      "A": "A persistent real-time endpoint is built for low-latency interactive calls and wastes money on a monthly bulk job.",
      "B": "Serverless inference targets intermittent request-by-request traffic, and it is not designed for bulk dataset scoring.",
      "C": "Asynchronous inference suits large or slow individual requests that a caller does not wait for, not a whole-dataset job."
    },
    "services": [
      "Amazon SageMaker AI",
      "Amazon Bedrock"
    ],
    "tags": [
      "inference-types",
      "batch-inference"
    ]
  },
  {
    "id": "t1-1.1-11",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A checkout page must score each card payment for fraud and return a decision in well under a second, all day long. Which inference type fits?",
    "choices": [
      {
        "id": "A",
        "text": "Real-time inference through a persistent endpoint."
      },
      {
        "id": "B",
        "text": "Batch inference run once each night."
      },
      {
        "id": "C",
        "text": "Asynchronous inference with results delivered later."
      },
      {
        "id": "D",
        "text": "Offline scoring of a weekly export of transactions."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Interactive requests that need an answer in milliseconds to seconds, with steady traffic, call for a real-time endpoint.",
    "whyWrong": {
      "B": "A nightly batch cannot decide a payment while the customer waits.",
      "C": "Asynchronous inference queues requests and returns results later, which is too slow for a checkout decision.",
      "D": "A weekly export is an offline workload and cannot block or approve a live payment."
    },
    "services": [
      "Amazon SageMaker AI"
    ],
    "tags": [
      "inference-types",
      "real-time-inference"
    ]
  },
  {
    "id": "t1-1.1-12",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A radiology app receives large scanned images, and each analysis takes several minutes. Uploads are sporadic, with long idle gaps between them, and clinicians retrieve results later. Which inference option fits best?",
    "choices": [
      {
        "id": "A",
        "text": "Serverless inference, because traffic is sporadic and idle periods are long."
      },
      {
        "id": "B",
        "text": "Asynchronous inference, because payloads are large and callers do not wait."
      },
      {
        "id": "C",
        "text": "Real-time inference, because every image needs a response from the model."
      },
      {
        "id": "D",
        "text": "Batch inference, because several images arrive over the course of a day."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Large payloads, long processing time, and a caller that does not wait are the asynchronous keywords. Sporadic traffic alone does not override the payload and duration constraints.",
    "whyWrong": {
      "A": "Sporadic traffic suggests serverless, but it suits small, quick requests. Large images and minutes of processing do not fit.",
      "C": "A real-time endpoint expects a prompt response on an open connection, which does not fit multi-minute jobs.",
      "D": "Batch processes a stored dataset as one job. These images arrive as individual requests that clinicians retrieve later."
    },
    "services": [
      "Amazon SageMaker AI"
    ],
    "tags": [
      "inference-types",
      "asynchronous-inference"
    ]
  },
  {
    "id": "t1-1.1-13",
    "domain": 1,
    "task": "1.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO statements about labeled and unlabeled data are correct? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Supervised learning can be trained on unlabeled data without any other inputs."
      },
      {
        "id": "B",
        "text": "Labeled data is any data stored in a table with rows and columns."
      },
      {
        "id": "C",
        "text": "Unlabeled data has no target answer attached, such as a folder of unmarked photos."
      },
      {
        "id": "D",
        "text": "Unlabeled data is data that has been cleaned and has no missing values."
      },
      {
        "id": "E",
        "text": "Labeled data includes the correct answer for each example, such as emails marked spam."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "A label is the known correct answer attached to an example. Data without such answers is unlabeled, and supervised learning needs the labels.",
    "whyWrong": {
      "A": "Supervised learning needs labeled examples. Unlabeled data fits unsupervised learning.",
      "B": "Tabular describes the format. A table can be labeled or unlabeled depending on whether a target column exists.",
      "D": "Cleanliness is unrelated to labeling. Unlabeled means no known answer is attached."
    },
    "services": [],
    "tags": [
      "labeled-vs-unlabeled",
      "data-types"
    ]
  },
  {
    "id": "t1-1.1-14",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which dataset is an example of time-series data?",
    "choices": [
      {
        "id": "A",
        "text": "A customer table with age, city, and plan type for each account."
      },
      {
        "id": "B",
        "text": "A folder of product photos, each tagged with a category."
      },
      {
        "id": "C",
        "text": "Hourly temperature readings from a sensor, collected over six months."
      },
      {
        "id": "D",
        "text": "A set of support emails collected from a shared inbox."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Time-series data is a sequence of values ordered by time, where the order matters, and it is commonly used for forecasting.",
    "whyWrong": {
      "A": "This is structured tabular data with no time ordering.",
      "B": "These are image data, which is unstructured, and the tags make them labeled.",
      "D": "Emails are unstructured text and are not defined by a time-ordered numeric sequence."
    },
    "services": [],
    "tags": [
      "data-types",
      "time-series"
    ]
  },
  {
    "id": "t1-1.1-15",
    "domain": 1,
    "task": "1.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO scenarios are examples of supervised learning? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Grouping customers by purchase behavior with no predefined segments."
      },
      {
        "id": "B",
        "text": "Finding unusual sensor patterns when no failures have ever been labeled."
      },
      {
        "id": "C",
        "text": "Flagging emails as spam after training on messages already marked spam or not spam."
      },
      {
        "id": "D",
        "text": "Predicting a home's sale price from past sales that include the final price."
      },
      {
        "id": "E",
        "text": "Training a robot by giving it a score for each action it takes."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Supervised learning trains on examples with known outcomes, whether a number (regression) or a class (classification). Both A and C have a known target in the training data.",
    "whyWrong": {
      "A": "Grouping with no predefined segments is clustering, which is unsupervised.",
      "B": "Anomaly detection without labeled failures looks for structure in unlabeled data, which is unsupervised.",
      "E": "Learning from a score per action is reinforcement learning, which uses rewards rather than labeled answers."
    },
    "services": [],
    "tags": [
      "learning-types",
      "supervised-vs-unsupervised"
    ]
  },
  {
    "id": "t1-1.1-16",
    "domain": 1,
    "task": "1.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A warehouse robot starts with no examples. It tries routes, earns points for fast deliveries, and loses points for collisions. Over time it learns a policy that maximizes total points. Which learning type is this?",
    "choices": [
      {
        "id": "A",
        "text": "Supervised learning, because the points act as labels for each route."
      },
      {
        "id": "B",
        "text": "Unsupervised learning, because no human provided example routes."
      },
      {
        "id": "C",
        "text": "Semi-supervised learning, because only some routes receive a score."
      },
      {
        "id": "D",
        "text": "Reinforcement learning, because an agent learns from rewards and penalties."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "An agent that acts in an environment and learns a policy from rewards and penalties by trial and error is reinforcement learning.",
    "whyWrong": {
      "A": "Supervised learning needs a dataset of inputs paired with correct answers. Here the feedback is a reward signal earned through interaction.",
      "B": "Unsupervised learning finds structure in unlabeled data and has no reward signal. The robot is optimizing a reward, so the label does not fit.",
      "C": "Semi-supervised learning mixes a small labeled set with a large unlabeled one. It does not involve an agent acting for rewards."
    },
    "services": [],
    "tags": [
      "learning-types",
      "reinforcement-learning"
    ]
  }
);
