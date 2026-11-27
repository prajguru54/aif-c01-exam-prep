window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t1-1.2-01",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A bank's model scores each loan application for default risk. A loan officer reads the score and then makes the final approval decision. Which benefit of AI does this describe?",
    "choices": [
      {
        "id": "A",
        "text": "Full automation, because the model removes the need for any human review."
      },
      {
        "id": "B",
        "text": "Data replacement, because the model removes the need for applicant records."
      },
      {
        "id": "C",
        "text": "Decision support, because the model gives the officer a second opinion."
      },
      {
        "id": "D",
        "text": "Guaranteed accuracy, because the score is always correct for each applicant."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "When a model informs a person who still makes the call, AI is assisting human decision making. The officer stays accountable for the outcome.",
    "whyWrong": {
      "A": "The officer still approves or rejects each application, so the process is not fully automated.",
      "B": "The model is trained on and scored with applicant data. It does not replace it.",
      "D": "ML outputs are predictions with some error rate. No model guarantees correct scores."
    },
    "services": [],
    "tags": [
      "use-cases",
      "decision-support"
    ]
  },
  {
    "id": "t1-1.2-02",
    "domain": 1,
    "task": "1.2",
    "type": "multi",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which TWO are typical benefits of applying AI/ML to a high-volume process, such as checking every card transaction for problems? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "The model always returns exactly the same result as a fixed formula."
      },
      {
        "id": "B",
        "text": "The model needs no historical data to learn from."
      },
      {
        "id": "C",
        "text": "The model removes all incorrect predictions once it is deployed."
      },
      {
        "id": "D",
        "text": "Repetitive judgement calls are automated, which frees staff for harder cases."
      },
      {
        "id": "E",
        "text": "The review scales to far more items than a human team could check."
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "Scalability and automation are the standard benefits of AI/ML. Models handle volume and repetitive judgement, though they are not perfect.",
    "whyWrong": {
      "A": "Matching a fixed formula exactly is a property of deterministic code. ML gives predictions, not guaranteed identical outputs.",
      "B": "Most ML approaches learn from data. Without usable data the model cannot be trained.",
      "C": "No model eliminates all errors. Predictions always carry some error rate."
    },
    "services": [],
    "tags": [
      "use-cases",
      "scalability",
      "automation"
    ]
  },
  {
    "id": "t1-1.2-03",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which of the following is NOT a good candidate for machine learning?",
    "choices": [
      {
        "id": "A",
        "text": "Estimating how long each delivery will take, based on past trips and traffic."
      },
      {
        "id": "B",
        "text": "Converting a temperature from Celsius to Fahrenheit using the standard formula."
      },
      {
        "id": "C",
        "text": "Grouping website visitors into segments with similar browsing behavior."
      },
      {
        "id": "D",
        "text": "Flagging card transactions that look unusual compared with past activity."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "A unit conversion follows an exact formula, so the outcome is deterministic. Plain code gives the right answer every time, while a model would only approximate it.",
    "whyWrong": {
      "A": "Delivery time depends on many fuzzy factors and history. This is a regression problem suited to ML.",
      "C": "Grouping similar visitors without predefined labels is clustering, a standard ML use case.",
      "D": "Spotting unusual patterns in large volumes of transactions is a classic ML use case."
    },
    "services": [],
    "tags": [
      "when-not-to-use-ml",
      "deterministic"
    ]
  },
  {
    "id": "t1-1.2-04",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A small company must tag about 30 incoming contracts per year as standard or non-standard. A clerk does this in a few minutes each. A consultant proposes building a custom ML classifier with a labeling project and a hosted endpoint. What is the best recommendation?",
    "choices": [
      {
        "id": "A",
        "text": "Skip ML, because the cost of building and running a model exceeds the benefit."
      },
      {
        "id": "B",
        "text": "Build the classifier, because any manual task should be automated with ML."
      },
      {
        "id": "C",
        "text": "Build the classifier, because ML always costs less than human effort over time."
      },
      {
        "id": "D",
        "text": "Use a larger model, because the volume is too low for a smaller model to work."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Cost-benefit analysis is part of deciding whether ML is appropriate. At 30 items a year, the build, labeling, and hosting costs far outweigh the few minutes saved.",
    "whyWrong": {
      "B": "Not every manual task justifies ML. The value gained must exceed the cost of building and operating the model.",
      "C": "ML is not automatically cheaper. Low volume means the fixed costs are never recovered.",
      "D": "A larger model does not fix the economics. It adds cost while the volume stays tiny."
    },
    "services": [],
    "tags": [
      "when-not-to-use-ml",
      "cost-benefit"
    ]
  },
  {
    "id": "t1-1.2-05",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which machine learning technique predicts a continuous numeric value, such as the selling price of a house?",
    "choices": [
      {
        "id": "A",
        "text": "Clustering"
      },
      {
        "id": "B",
        "text": "Binary classification"
      },
      {
        "id": "C",
        "text": "Multi-class classification"
      },
      {
        "id": "D",
        "text": "Regression"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Regression is a supervised technique whose output is a number. If the answer is a quantity such as a price, think regression.",
    "whyWrong": {
      "A": "Clustering groups unlabeled data. It does not output a numeric prediction.",
      "B": "Binary classification outputs one of two labels, such as yes or no.",
      "C": "Multi-class classification outputs one of several categories, not a continuous number."
    },
    "services": [],
    "tags": [
      "regression",
      "ml-techniques"
    ]
  },
  {
    "id": "t1-1.2-06",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Assigning each incoming email the label \"spam\" or \"not spam\" using a model trained on previously labeled emails is an example of which technique?",
    "choices": [
      {
        "id": "A",
        "text": "Classification"
      },
      {
        "id": "B",
        "text": "Regression"
      },
      {
        "id": "C",
        "text": "Clustering"
      },
      {
        "id": "D",
        "text": "Dimensionality reduction"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "The output is a category and the training data has labels, so this is supervised classification (binary in this case).",
    "whyWrong": {
      "B": "Regression predicts a number, not a category.",
      "C": "Clustering works on unlabeled data and finds groups. Here the labels already exist.",
      "D": "Dimensionality reduction cuts the number of features. It does not assign labels."
    },
    "services": [],
    "tags": [
      "classification",
      "ml-techniques"
    ]
  },
  {
    "id": "t1-1.2-07",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A marketing team has purchase histories for its customers but no predefined segments. It wants an algorithm to discover natural groups of similar customers. Which technique fits?",
    "choices": [
      {
        "id": "A",
        "text": "Regression"
      },
      {
        "id": "B",
        "text": "Binary classification"
      },
      {
        "id": "C",
        "text": "Clustering"
      },
      {
        "id": "D",
        "text": "Supervised multi-class classification"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Finding groups in data with no labels is clustering, an unsupervised technique. Segmentation is the textbook use case.",
    "whyWrong": {
      "A": "Regression predicts a number from labeled examples, not groups.",
      "B": "Binary classification needs labeled examples of two classes, and none exist here.",
      "D": "Multi-class classification needs labeled segments for training. The segments are what the team wants to discover."
    },
    "services": [],
    "tags": [
      "clustering",
      "ml-techniques"
    ]
  },
  {
    "id": "t1-1.2-08",
    "domain": 1,
    "task": "1.2",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A payments company has years of transactions labeled fraud or legitimate. It also wants to catch brand-new fraud patterns that do not resemble past fraud. Which TWO approaches fit this situation? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Train a regression model to predict each transaction's fraud label."
      },
      {
        "id": "B",
        "text": "Train a supervised classification model on the labeled transactions."
      },
      {
        "id": "C",
        "text": "Use only fixed rules written from past fraud cases, with no learning component."
      },
      {
        "id": "D",
        "text": "Apply anomaly detection to flag transactions that deviate from normal behavior."
      },
      {
        "id": "E",
        "text": "Use Amazon Comprehend to score the sentiment of transaction descriptions."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Labeled history supports supervised classification for known fraud patterns. Anomaly detection flags outliers, so it can surface novel patterns that no label covers.",
    "whyWrong": {
      "A": "Regression predicts a continuous number. A fraud label is a category, so classification is the right framing.",
      "C": "Fixed rules only match patterns already known, so they cannot flag fraud that looks unlike past cases.",
      "E": "Comprehend analyzes language in text. Sentiment of a description says little about whether a transaction is fraudulent."
    },
    "services": [
      "Amazon SageMaker AI"
    ],
    "tags": [
      "fraud-detection",
      "anomaly-detection",
      "classification"
    ]
  },
  {
    "id": "t1-1.2-09",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "An online retailer wants to show each shopper a personalized list of products based on past clicks and purchases. Which AWS service is purpose-built for this?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Comprehend"
      },
      {
        "id": "B",
        "text": "Amazon Personalize"
      },
      {
        "id": "C",
        "text": "Amazon Lex"
      },
      {
        "id": "D",
        "text": "Amazon Rekognition"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Amazon Personalize is the managed service for recommendations and personalization from user and item interaction data.",
    "whyWrong": {
      "A": "Comprehend analyzes text for sentiment, entities, and key phrases. It does not recommend items.",
      "C": "Lex builds chatbots and voice bots with intents and slots.",
      "D": "Rekognition analyzes images and video."
    },
    "services": [
      "Amazon Personalize"
    ],
    "tags": [
      "recommendation",
      "managed-ai-services"
    ]
  },
  {
    "id": "t1-1.2-10",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An energy utility has two years of hourly electricity readings and weather data. It wants to estimate hourly demand for the coming week. How should the problem be framed?",
    "choices": [
      {
        "id": "A",
        "text": "Clustering, to group similar hours into usage patterns."
      },
      {
        "id": "B",
        "text": "Binary classification, to label each hour as high or low."
      },
      {
        "id": "C",
        "text": "Image classification, to read values from meter photos."
      },
      {
        "id": "D",
        "text": "Time-series forecasting, to predict values from time-ordered data."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The target is a future numeric value that depends on time-ordered history. That is forecasting, which a team can build with Amazon SageMaker AI.",
    "whyWrong": {
      "A": "Grouping similar hours does not produce a prediction for next week.",
      "B": "A high or low label loses the numeric estimate the utility asked for.",
      "C": "The inputs are numeric readings and weather data, not images."
    },
    "services": [
      "Amazon SageMaker AI"
    ],
    "tags": [
      "forecasting",
      "time-series"
    ]
  },
  {
    "id": "t1-1.2-11",
    "domain": 1,
    "task": "1.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A training department has English-language videos and wants Spanish subtitles for each one. Which TWO AWS services should it combine? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Translate, to convert the English text into Spanish."
      },
      {
        "id": "B",
        "text": "Amazon Transcribe, to convert the spoken English audio into text."
      },
      {
        "id": "C",
        "text": "Amazon Comprehend, to translate the English text into Spanish."
      },
      {
        "id": "D",
        "text": "Amazon Rekognition, to read the spoken words from the audio track."
      },
      {
        "id": "E",
        "text": "Amazon Polly, to convert the English audio into text."
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Transcribe turns speech into text and Translate converts that text to another language. Chaining the two produces the subtitles.",
    "whyWrong": {
      "C": "Comprehend analyzes text for sentiment, entities, and language. It does not translate.",
      "D": "Rekognition analyzes images and video content, and it does not transcribe speech.",
      "E": "Polly goes the opposite direction, from text to speech, and does not transcribe audio."
    },
    "services": [
      "Amazon Transcribe",
      "Amazon Translate"
    ],
    "tags": [
      "speech-to-text",
      "translation",
      "managed-ai-services"
    ]
  },
  {
    "id": "t1-1.2-12",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A support team receives emails in many languages. Without translating them, it wants to detect each email's language and extract the product names and people mentioned. Which service fits?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Comprehend"
      },
      {
        "id": "B",
        "text": "Amazon Translate"
      },
      {
        "id": "C",
        "text": "Amazon Lex"
      },
      {
        "id": "D",
        "text": "Amazon Textract"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Comprehend is the NLP service. It detects the dominant language and extracts entities and key phrases from text.",
    "whyWrong": {
      "B": "Translate converts text between languages. The team does not want translation, and it does not extract entities.",
      "C": "Lex builds conversational interfaces. It is not an analytics service for existing emails.",
      "D": "Textract extracts text and structure from scanned documents. The emails are already digital text."
    },
    "services": [
      "Amazon Comprehend"
    ],
    "tags": [
      "nlp",
      "managed-ai-services"
    ]
  },
  {
    "id": "t1-1.2-13",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A clinic wants callers to book appointments by speaking or typing to a virtual assistant that recognizes what the caller wants and collects the date and time. Which service builds this?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Polly"
      },
      {
        "id": "B",
        "text": "Amazon Transcribe"
      },
      {
        "id": "C",
        "text": "Amazon Lex"
      },
      {
        "id": "D",
        "text": "Amazon Comprehend"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Amazon Lex builds chatbots and voice bots using intents and slots. Here the intent is booking and the slots are date and time.",
    "whyWrong": {
      "A": "Polly only converts text to speech. It does not understand caller intent or manage a dialog.",
      "B": "Transcribe only converts speech to text. It has no dialog or intent handling.",
      "D": "Comprehend analyzes text after the fact. It does not run a conversation."
    },
    "services": [
      "Amazon Lex"
    ],
    "tags": [
      "chatbot",
      "managed-ai-services"
    ]
  },
  {
    "id": "t1-1.2-14",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A team scanned supplier invoices and used Amazon Rekognition text detection to read them. It returns lines of text, but the line-item table structure and the key-value fields such as invoice number are lost. What is the best next step?",
    "choices": [
      {
        "id": "A",
        "text": "Send the extracted lines to Amazon Comprehend to rebuild the table."
      },
      {
        "id": "B",
        "text": "Switch to Amazon Textract, which extracts tables and form fields from documents."
      },
      {
        "id": "C",
        "text": "Run the extracted lines through Amazon Translate to restore the layout."
      },
      {
        "id": "D",
        "text": "Convert the invoices to audio and process them with Amazon Transcribe."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Textract is built for documents. It returns tables and key-value pairs in addition to text. Rekognition handles text found in general images and does not preserve document structure.",
    "whyWrong": {
      "A": "Comprehend analyzes the meaning of text, such as entities and sentiment. It cannot recover layout that was already lost.",
      "C": "Translate changes the language of text and does nothing for document structure.",
      "D": "Transcribe converts speech to text, and invoices are not audio recordings."
    },
    "services": [
      "Amazon Textract",
      "Amazon Rekognition"
    ],
    "tags": [
      "document-extraction",
      "managed-ai-services"
    ]
  },
  {
    "id": "t1-1.2-15",
    "domain": 1,
    "task": "1.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "An insurer scores millions of structured policy applications per day with very low latency and low per-prediction cost. Regulators require a clear reason for every accept or decline decision. Which approach fits best?",
    "choices": [
      {
        "id": "A",
        "text": "Prompt a foundation model on Amazon Bedrock with each application and ask it to decide."
      },
      {
        "id": "B",
        "text": "Use Amazon Comprehend to analyze the applications and return a decision."
      },
      {
        "id": "C",
        "text": "Cluster the applicants with unsupervised learning and approve one cluster."
      },
      {
        "id": "D",
        "text": "Train an interpretable traditional ML model on Amazon SageMaker AI."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A narrow prediction on tabular data, at high volume, with a need to explain each decision, points to a simple traditional model such as a linear or tree-based one. It is cheap per call and easy to justify.",
    "whyWrong": {
      "A": "A foundation model costs more per call, is harder to explain, and is nondeterministic by default. That is a poor fit for regulated, high-volume scoring.",
      "B": "Comprehend performs language analysis on text. It is not an underwriting service.",
      "C": "Clusters are not decisions, and approving a whole cluster gives no per-applicant reason."
    },
    "services": [
      "Amazon SageMaker AI",
      "Amazon Bedrock"
    ],
    "tags": [
      "traditional-ml-vs-fm",
      "explainability"
    ]
  },
  {
    "id": "t1-1.2-16",
    "domain": 1,
    "task": "1.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO factors favor choosing a foundation model on Amazon Bedrock over a task-specific traditional ML model? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "The task needs open-ended text generation, such as drafting or summarizing."
      },
      {
        "id": "B",
        "text": "Each decision must be explained to a regulator in simple terms."
      },
      {
        "id": "C",
        "text": "There is little labeled data, and the team wants to start with prompting."
      },
      {
        "id": "D",
        "text": "The lowest possible cost per prediction at very high volume is required."
      },
      {
        "id": "E",
        "text": "The task is one narrow numeric prediction on a structured table."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Foundation models handle open-ended generation across many tasks and can start working from prompts with little or no labeled data. Narrow, explainable, low-cost prediction favors traditional ML.",
    "whyWrong": {
      "B": "Foundation models are hard to interpret, so a simple traditional model suits regulators better.",
      "D": "Per-token pricing makes a foundation model costlier per call than a small trained model.",
      "E": "A narrow prediction on tabular data is the classic case for a traditional model trained on labeled data."
    },
    "services": [
      "Amazon Bedrock",
      "Amazon SageMaker AI"
    ],
    "tags": [
      "traditional-ml-vs-fm",
      "foundation-models"
    ]
  }
);
