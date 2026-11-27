window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t1-1.3-01",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which sequence lists the stages of a typical ML pipeline in the correct order?",
    "choices": [
      {
        "id": "A",
        "text": "Prepare data, collect data, train, deploy, evaluate, monitor"
      },
      {
        "id": "B",
        "text": "Collect data, prepare data, train, evaluate, deploy, monitor"
      },
      {
        "id": "C",
        "text": "Collect data, train, prepare data, deploy, monitor, evaluate"
      },
      {
        "id": "D",
        "text": "Collect data, prepare data, train, monitor, evaluate, deploy"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Data is collected and prepared first, the model is trained and evaluated, then deployed, and monitoring runs after deployment and feeds back into retraining.",
    "whyWrong": {
      "A": "Data cannot be prepared before it is collected, and evaluation must happen before deployment.",
      "C": "Training on unprepared data skips cleaning and feature work, and monitoring cannot precede evaluation.",
      "D": "Monitoring watches a model that is already serving traffic, so it comes after deployment."
    },
    "services": [],
    "tags": [
      "ml-pipeline",
      "mlops"
    ]
  },
  {
    "id": "t1-1.3-02",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A data team converts raw order timestamps into new columns such as hour of day, day of week, and is-weekend before training. In which pipeline activity does this belong, and how does it differ from removing duplicates and filling missing values?",
    "choices": [
      {
        "id": "A",
        "text": "Data preparation, because it cleans the raw records before any modelling starts"
      },
      {
        "id": "B",
        "text": "Model evaluation, because it checks how well the model handles time-based data"
      },
      {
        "id": "C",
        "text": "Feature engineering, because it builds new model inputs from raw data rather than cleaning it"
      },
      {
        "id": "D",
        "text": "Monitoring, because it tracks how time-based inputs change after deployment"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Feature engineering transforms raw data into more useful input columns (features). Cleaning tasks such as removing duplicates and imputing missing values are data preparation.",
    "whyWrong": {
      "A": "Cleaning fixes quality problems in existing values. Creating new derived columns is feature engineering.",
      "B": "Evaluation measures a trained model on held-out data. It does not create inputs.",
      "D": "Monitoring happens after deployment and does not create training features."
    },
    "services": [],
    "tags": [
      "feature-engineering",
      "ml-pipeline"
    ]
  },
  {
    "id": "t1-1.3-03",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What is a hyperparameter in machine learning?",
    "choices": [
      {
        "id": "A",
        "text": "A setting chosen before training begins, such as the learning rate or tree depth"
      },
      {
        "id": "B",
        "text": "A value the model learns from the training data, such as a weight in a network"
      },
      {
        "id": "C",
        "text": "An input column in the dataset that the model uses to make predictions"
      },
      {
        "id": "D",
        "text": "A metric reported after training that summarizes how accurate the model is"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Hyperparameters are set by the practitioner before training and control how learning happens. Tuning them is part of the training stage.",
    "whyWrong": {
      "B": "Values learned from data are the model parameters (weights), not hyperparameters.",
      "C": "An input column is a feature.",
      "D": "Accuracy and similar values are performance metrics, not settings."
    },
    "services": [],
    "tags": [
      "hyperparameters",
      "ml-pipeline"
    ]
  },
  {
    "id": "t1-1.3-04",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A startup chooses to adapt an open source pre-trained model instead of training a custom model from scratch. Which statement describes the trade-off it accepts?",
    "choices": [
      {
        "id": "A",
        "text": "It pays a higher up-front cost but gets a perfect fit to its domain without any data"
      },
      {
        "id": "B",
        "text": "It needs far more training data and compute than a custom model would require"
      },
      {
        "id": "C",
        "text": "It is free of licence terms because open source models carry no usage conditions"
      },
      {
        "id": "D",
        "text": "It starts faster and spends less, but inherits the model's limits and licence terms"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Pre-trained models give a fast, low-cost start. The cost is that the team accepts the model's existing capabilities, limits, and licence, while a custom model fits the domain better but needs data, compute, and expertise.",
    "whyWrong": {
      "A": "Reusing a pre-trained model lowers cost, and it does not guarantee a perfect domain fit.",
      "B": "Training from scratch is the option that needs the most data and compute.",
      "C": "Open source models still have licences that can restrict use, so the team must check them."
    },
    "services": [],
    "tags": [
      "model-sources",
      "pre-trained-models"
    ]
  },
  {
    "id": "t1-1.3-05",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A team wants a catalog of pre-trained open source and proprietary models, plus sample notebooks, that it can deploy from inside Amazon SageMaker AI. Which feature provides this?",
    "choices": [
      {
        "id": "A",
        "text": "AWS Glue DataBrew"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker JumpStart"
      },
      {
        "id": "C",
        "text": "Amazon Quick for BI"
      },
      {
        "id": "D",
        "text": "Amazon Athena for SQL"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "SageMaker JumpStart is the hub of pre-trained models and solution notebooks in SageMaker AI, so it is a starting source of models you can deploy or fine-tune.",
    "whyWrong": {
      "A": "DataBrew is a visual data preparation tool. It does not host models.",
      "C": "Amazon Quick is a business-user assistant and analytics service, not a model catalog.",
      "D": "Athena runs SQL queries on data in Amazon S3 and does not provide models."
    },
    "services": [
      "Amazon SageMaker JumpStart",
      "Amazon SageMaker AI"
    ],
    "tags": [
      "jumpstart",
      "model-sources"
    ]
  },
  {
    "id": "t1-1.3-06",
    "domain": 1,
    "task": "1.3",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A small team wants to add text generation to its product quickly using Amazon Bedrock, a managed API service. Which TWO benefits apply to this way of using a model in production? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "There are no servers to provision, patch, or scale for model hosting"
      },
      {
        "id": "B",
        "text": "The team can place the model endpoint on hardware it chooses and tunes"
      },
      {
        "id": "C",
        "text": "The team controls the inference container and its operating system libraries"
      },
      {
        "id": "D",
        "text": "The team picks the exact instance type and GPU count serving the model"
      },
      {
        "id": "E",
        "text": "Usage is billed per request, and adoption needs little setup effort"
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "A managed API removes infrastructure work and charges for use, so adoption is quick. Control over instances and containers belongs to self-hosted endpoints.",
    "whyWrong": {
      "B": "Selecting and tuning the hosting hardware is a self-hosted concern.",
      "C": "Owning the inference container and OS libraries means self-hosting the model.",
      "D": "Choosing instance types and GPU counts is a self-hosting decision, not a managed API feature."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "managed-api",
      "deployment"
    ]
  },
  {
    "id": "t1-1.3-07",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company has fine-tuned its own open source model. It must serve the model from a custom inference container on specific GPU instances inside its VPC, and it accepts responsibility for scaling. Which option fits?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Bedrock with Provisioned Throughput"
      },
      {
        "id": "B",
        "text": "Amazon Bedrock with on-demand inference"
      },
      {
        "id": "C",
        "text": "A SageMaker AI real-time inference endpoint"
      },
      {
        "id": "D",
        "text": "Amazon Quick with a custom data source"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A self-hosted API on a SageMaker AI endpoint lets you bring your own model and container, pick the instance type, and control the network. Bedrock options are managed, so you do not choose hardware or containers.",
    "whyWrong": {
      "A": "Provisioned Throughput reserves capacity for Bedrock-hosted models, but you still do not control the container or instance type.",
      "B": "On-demand inference is the managed pay-per-use path with the least control over the infrastructure.",
      "D": "Amazon Quick is a business assistant and analytics service. It does not host custom models."
    },
    "services": [
      "Amazon SageMaker AI",
      "Amazon Bedrock"
    ],
    "tags": [
      "self-hosted-api",
      "deployment"
    ]
  },
  {
    "id": "t1-1.3-08",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A data science team needs a managed service to build, train, tune, and deploy its own machine learning models. Which service is the best fit?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon SageMaker AI"
      },
      {
        "id": "B",
        "text": "Amazon Bedrock (FM API)"
      },
      {
        "id": "C",
        "text": "Amazon Quick for BI"
      },
      {
        "id": "D",
        "text": "Kiro coding IDE"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "SageMaker AI covers the full ML workflow for building and training models. Bedrock is for consuming foundation models through an API.",
    "whyWrong": {
      "B": "Bedrock gives API access to existing foundation models. It is not the main service for training your own models from scratch.",
      "C": "Amazon Quick serves business users with analytics and an assistant.",
      "D": "Kiro is a development environment for writing code with AI help, not an ML training service."
    },
    "services": [
      "Amazon SageMaker AI",
      "Amazon Bedrock"
    ],
    "tags": [
      "sagemaker-vs-bedrock",
      "aws-services"
    ]
  },
  {
    "id": "t1-1.3-09",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Business analysts with no coding background want to explore dashboards and ask questions about company data in natural language. Which AWS offering is designed for this?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon SageMaker JumpStart"
      },
      {
        "id": "B",
        "text": "Kiro"
      },
      {
        "id": "C",
        "text": "AWS Glue DataBrew"
      },
      {
        "id": "D",
        "text": "Amazon Quick"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Amazon Quick is aimed at business users, combining analytics and an AI assistant for working with company data.",
    "whyWrong": {
      "A": "JumpStart is a model hub for ML practitioners working in SageMaker AI.",
      "B": "Kiro is an AI development environment for software developers.",
      "C": "DataBrew is a visual data cleaning tool and does not provide a question-answering assistant."
    },
    "services": [
      "Amazon Quick"
    ],
    "tags": [
      "amazon-quick",
      "aws-services"
    ]
  },
  {
    "id": "t1-1.3-10",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A developer wants an agentic IDE that turns a feature request into a spec, a task list, and working code. Which AWS tool is intended for this?",
    "choices": [
      {
        "id": "A",
        "text": "Kiro"
      },
      {
        "id": "B",
        "text": "Amazon Quick"
      },
      {
        "id": "C",
        "text": "Amazon SageMaker JumpStart"
      },
      {
        "id": "D",
        "text": "Amazon Athena"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Kiro is an AI-assisted development environment that supports spec-driven, agentic coding for developers.",
    "whyWrong": {
      "B": "Amazon Quick is for business users and analytics, not software development.",
      "C": "JumpStart supplies pre-trained models and notebooks, not an IDE for coding with agents.",
      "D": "Athena is a SQL query service for data in Amazon S3."
    },
    "services": [
      "Kiro"
    ],
    "tags": [
      "kiro",
      "aws-services"
    ]
  },
  {
    "id": "t1-1.3-11",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A demand-forecasting model has served predictions reliably for months, but its error is now rising. Monitoring shows the distribution of incoming data differs from the training data. What is the most likely cause and the right next step?",
    "choices": [
      {
        "id": "A",
        "text": "Endpoint capacity is too small, so move to a larger instance type"
      },
      {
        "id": "B",
        "text": "The metric is wrong, so report F1 score instead of error"
      },
      {
        "id": "C",
        "text": "The model file is corrupt, so roll back to the first training dataset"
      },
      {
        "id": "D",
        "text": "Data drift has occurred, so retrain the model on recent data and redeploy"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Model monitoring detects data drift, where live inputs move away from the training data. The fix is to retrain on fresh data, which closes the MLOps loop.",
    "whyWrong": {
      "A": "Capacity affects latency and throughput. It does not change prediction quality.",
      "B": "F1 is a classification metric, and switching metrics does not fix a model that has gone stale.",
      "C": "Nothing suggests corruption, and retraining on the original dataset would repeat the same mismatch."
    },
    "services": [
      "Amazon SageMaker AI"
    ],
    "tags": [
      "model-monitoring",
      "retraining"
    ]
  },
  {
    "id": "t1-1.3-12",
    "domain": 1,
    "task": "1.3",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Data scientists cannot reproduce last month's best model, and each release is deployed by hand from a notebook. Which TWO MLOps practices address these problems? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Copy the best notebook to a shared drive before each release"
      },
      {
        "id": "B",
        "text": "Automate training and deployment in a repeatable pipeline instead of manual steps"
      },
      {
        "id": "C",
        "text": "Move the notebook to a larger instance type to speed up training runs"
      },
      {
        "id": "D",
        "text": "Retrain every night regardless of whether anything has changed"
      },
      {
        "id": "E",
        "text": "Track experiment runs, with data versions and results, so they can be compared and repeated"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Experimentation tracking makes results reproducible, and automated pipelines make the process repeatable. Both reduce manual, error-prone work.",
    "whyWrong": {
      "A": "Copying notebooks keeps no record of data versions or parameters and remains a manual process.",
      "C": "A larger instance changes speed, not reproducibility or the manual release process.",
      "D": "Blind nightly retraining adds cost and does not fix reproducibility or manual deployment."
    },
    "services": [],
    "tags": [
      "mlops",
      "experimentation"
    ]
  },
  {
    "id": "t1-1.3-13",
    "domain": 1,
    "task": "1.3",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A team is preparing an ML model for release and wants to improve production readiness while limiting technical debt. Which TWO actions best serve both goals? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Add automated tests and a rollback plan, and define service targets before launch"
      },
      {
        "id": "B",
        "text": "Keep preprocessing logic in ad hoc notebook cells that only one engineer understands"
      },
      {
        "id": "C",
        "text": "Delay monitoring until users start reporting poor predictions"
      },
      {
        "id": "D",
        "text": "Version the model and document its data dependencies and pipeline steps"
      },
      {
        "id": "E",
        "text": "Tune hyperparameters repeatedly until the test set score stops improving"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Production readiness means tests, rollback, and service targets in place before release. Technical debt is reduced by versioning and documenting data dependencies and glue steps.",
    "whyWrong": {
      "B": "Undocumented, single-owner glue code is a classic source of technical debt.",
      "C": "Monitoring should be in place at launch so drift and quality loss are detected early.",
      "E": "Repeated tuning against the test set overfits to it and does nothing for readiness or maintainability."
    },
    "services": [],
    "tags": [
      "mlops",
      "production-readiness"
    ]
  },
  {
    "id": "t1-1.3-14",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A photo-sharing site trains a model that flags uploads as policy violations and deletes them automatically. Wrongly deleting a compliant photo is considered much worse than missing an occasional violation. Which metric should the team prioritize?",
    "choices": [
      {
        "id": "A",
        "text": "Recall, to catch as many violating uploads as possible"
      },
      {
        "id": "B",
        "text": "Accuracy, to maximize total correct predictions"
      },
      {
        "id": "C",
        "text": "Precision, to make sure flagged uploads really are violations"
      },
      {
        "id": "D",
        "text": "Root mean squared error, to minimize prediction distance"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Here false positives (compliant photos flagged) are the costly error. Precision measures how many flagged items are truly positive, so it is the metric to maximize.",
    "whyWrong": {
      "A": "Recall reduces missed violations (false negatives), which is the cheaper error in this scenario.",
      "B": "Accuracy treats both error types equally and can hide the cost of false positives.",
      "D": "RMSE is a regression error metric and does not apply to a violation or not-violation classifier."
    },
    "services": [],
    "tags": [
      "precision-recall",
      "model-metrics"
    ]
  },
  {
    "id": "t1-1.3-15",
    "domain": 1,
    "task": "1.3",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "Only 0.5 percent of transactions are fraudulent. A model that labels every transaction as legitimate scores 99.5 percent accuracy, yet catches no fraud. Which single metric both exposes this failure and penalizes false alarms and misses together?",
    "choices": [
      {
        "id": "A",
        "text": "Recall, because it reports the share of real fraud that was caught"
      },
      {
        "id": "B",
        "text": "F1 score, the harmonic mean of precision and recall"
      },
      {
        "id": "C",
        "text": "Accuracy, because it summarizes every prediction in one number"
      },
      {
        "id": "D",
        "text": "Mean absolute error, because it shows the average size of mistakes"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "F1 combines precision and recall, so a model that catches nothing scores near zero. It suits imbalanced classes where accuracy misleads. Recall alone would ignore false alarms.",
    "whyWrong": {
      "A": "Recall would expose the missed fraud, but it ignores false positives, so it does not balance both error types.",
      "C": "Accuracy is the misleading metric in this scenario because the negative class dominates.",
      "D": "MAE is a regression metric and does not apply to a fraud or not-fraud classifier."
    },
    "services": [],
    "tags": [
      "f1-score",
      "model-metrics"
    ]
  },
  {
    "id": "t1-1.3-16",
    "domain": 1,
    "task": "1.3",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A product owner reviews an AI feature after launch. Which TWO of the following are business metrics rather than model performance metrics? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Precision measured on the validation data"
      },
      {
        "id": "B",
        "text": "F1 score on the held-out test set"
      },
      {
        "id": "C",
        "text": "Customer feedback ratings collected in the app"
      },
      {
        "id": "D",
        "text": "Cost per user of running the feature"
      },
      {
        "id": "E",
        "text": "Recall for the positive class"
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "Cost per user, customer feedback, development cost, and ROI measure business value. F1, recall, and precision describe how well the model classifies.",
    "whyWrong": {
      "A": "Precision is a model performance metric derived from the confusion matrix.",
      "B": "F1 score is a model performance metric computed on test data.",
      "E": "Recall is a model performance metric derived from the confusion matrix."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "model-metrics"
    ]
  }
);
