window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t3-3.3-01",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What is pre-training in the lifecycle of a foundation model?",
    "choices": [
      {
        "id": "A",
        "text": "Adjusting a finished model with a few hundred labeled examples so it follows a company style guide."
      },
      {
        "id": "B",
        "text": "Training a model from scratch on very large unlabeled datasets so it learns broad language and world knowledge."
      },
      {
        "id": "C",
        "text": "Writing a system prompt that tells the model which role to play before each conversation starts."
      },
      {
        "id": "D",
        "text": "Compressing a large trained model into a smaller one that imitates its answers at lower cost."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Pre-training is the first and most expensive stage. The model learns general patterns from massive unlabeled data, usually by predicting the next token, and is then specialized later.",
    "whyWrong": {
      "A": "This describes fine-tuning, which uses a small labeled dataset on top of an already pre-trained model.",
      "C": "A system prompt changes behavior at inference time. It does not train the model at all.",
      "D": "This describes distillation, where a smaller student model learns from a larger teacher model."
    },
    "services": [],
    "tags": [
      "pre-training",
      "fm-training"
    ]
  },
  {
    "id": "t3-3.3-02",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which description best matches fine-tuning of a foundation model?",
    "choices": [
      {
        "id": "A",
        "text": "Training on trillions of unlabeled tokens until the model can predict the next word in any text."
      },
      {
        "id": "B",
        "text": "Retrieving relevant documents at query time and adding them to the prompt for each request."
      },
      {
        "id": "C",
        "text": "Further training a pre-trained model on a smaller labeled dataset so it performs a specific task or style."
      },
      {
        "id": "D",
        "text": "Training a reward model from human rankings of pairs of answers, then tuning against it."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Fine-tuning takes an existing pre-trained model and updates it with a smaller, labeled, task-specific dataset such as prompt and response pairs.",
    "whyWrong": {
      "A": "This is pre-training. It uses huge unlabeled data and is done once by the model provider.",
      "B": "This is retrieval-augmented generation. It changes the prompt, not the model weights.",
      "D": "This describes RLHF, which aligns outputs with human preferences. It is not training on labeled task examples."
    },
    "services": [],
    "tags": [
      "fine-tuning",
      "fm-training"
    ]
  },
  {
    "id": "t3-3.3-03",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Continued pre-training and fine-tuning both update model weights. What is the main difference in the data they use?",
    "choices": [
      {
        "id": "A",
        "text": "Continued pre-training uses large unlabeled domain text, while fine-tuning uses labeled prompt and response pairs."
      },
      {
        "id": "B",
        "text": "Continued pre-training uses labeled prompt and response pairs, while fine-tuning uses large amounts of unlabeled raw text."
      },
      {
        "id": "C",
        "text": "Continued pre-training needs human preference rankings, while fine-tuning needs only a list of keywords."
      },
      {
        "id": "D",
        "text": "Both use identical labeled data. They differ only in which cloud region runs the training job."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Continued pre-training keeps the original self-supervised objective on unlabeled domain text. Fine-tuning is supervised and needs labeled examples of the desired behavior.",
    "whyWrong": {
      "B": "This reverses the two. Labeled pairs belong to fine-tuning and unlabeled text belongs to continued pre-training.",
      "C": "Preference rankings are the input for RLHF. Neither of these two methods is defined by them or by keyword lists.",
      "D": "The data type is the defining difference. The region where the job runs has no bearing on the method."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "continued-pre-training",
      "fine-tuning"
    ]
  },
  {
    "id": "t3-3.3-04",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A team wants a smaller, faster model that behaves much like a very large model for one task. Which technique trains the smaller model using the larger model's outputs?",
    "choices": [
      {
        "id": "A",
        "text": "Continued pre-training"
      },
      {
        "id": "B",
        "text": "Instruction tuning"
      },
      {
        "id": "C",
        "text": "Reinforcement learning from human feedback"
      },
      {
        "id": "D",
        "text": "Distillation"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "In distillation a large teacher model produces outputs that are used to train a smaller student model. The result is lower cost and latency with similar behavior on the target task.",
    "whyWrong": {
      "A": "Continued pre-training extends a model's knowledge with unlabeled domain text. It does not shrink a model.",
      "B": "Instruction tuning teaches a model to follow instructions. The model stays the same size.",
      "C": "RLHF aligns a model with human preferences and does not produce a smaller model."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "distillation",
      "fm-training"
    ]
  },
  {
    "id": "t3-3.3-05",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "How does the cost and time of fine-tuning an existing foundation model usually compare with pre-training one from scratch?",
    "choices": [
      {
        "id": "A",
        "text": "Fine-tuning costs more because it needs a larger dataset and more compute than pre-training."
      },
      {
        "id": "B",
        "text": "Fine-tuning costs far less because it needs a much smaller dataset and starts from learned weights."
      },
      {
        "id": "C",
        "text": "They cost about the same because both update every parameter on the same amount of data."
      },
      {
        "id": "D",
        "text": "Fine-tuning costs nothing because it only changes the prompt template and leaves the model unchanged."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Pre-training needs massive data and very long, expensive compute runs. Fine-tuning reuses those learned weights and trains on a small dataset, so it is much cheaper and faster.",
    "whyWrong": {
      "A": "This is backwards. Pre-training needs far more data and compute than fine-tuning.",
      "C": "The scale differs by orders of magnitude, because fine-tuning uses a small dataset and short runs.",
      "D": "Fine-tuning does change model weights and does incur training cost. Only prompt engineering leaves the model unchanged."
    },
    "services": [],
    "tags": [
      "pre-training",
      "fine-tuning"
    ]
  },
  {
    "id": "t3-3.3-06",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is NOT a stage or technique used to train or customize a foundation model?",
    "choices": [
      {
        "id": "A",
        "text": "Pre-training on a large text corpus"
      },
      {
        "id": "B",
        "text": "Distillation into a smaller student model"
      },
      {
        "id": "C",
        "text": "Lowering temperature at inference"
      },
      {
        "id": "D",
        "text": "Continued pre-training on domain text"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Temperature is an inference parameter that controls randomness of output. It does not train or change the model weights.",
    "whyWrong": {
      "A": "Pre-training is the initial stage that builds a model's broad knowledge, so it is a training element.",
      "B": "Distillation trains a smaller student model from a larger teacher, so it is a training technique.",
      "D": "Continued pre-training further trains a model on unlabeled domain text, so it is a customization technique."
    },
    "services": [],
    "tags": [
      "fm-training",
      "inference-parameters"
    ]
  },
  {
    "id": "t3-3.3-07",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Instruction tuning is a fine-tuning method. What does it train a model to do?",
    "choices": [
      {
        "id": "A",
        "text": "Follow instructions and respond in a desired way, using labeled prompt and response pairs."
      },
      {
        "id": "B",
        "text": "Memorize the exact contents of a document library so it can quote it verbatim."
      },
      {
        "id": "C",
        "text": "Convert text into numerical vectors that can be stored in a vector database."
      },
      {
        "id": "D",
        "text": "Reduce its own parameter count while keeping the accuracy of a larger model."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Instruction tuning uses labeled examples that pair an instruction with a good response, so the model learns to follow instructions and answer in the desired format.",
    "whyWrong": {
      "B": "Fine-tuning is a poor way to store exact documents. Retrieval-augmented generation is the better fit for quoting source content.",
      "C": "Producing vectors is the job of an embedding model, which is a different kind of model.",
      "D": "Shrinking a model while keeping its behavior is distillation, not instruction tuning."
    },
    "services": [],
    "tags": [
      "instruction-tuning",
      "fine-tuning"
    ]
  },
  {
    "id": "t3-3.3-08",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A healthcare software vendor wants a general-purpose foundation model to work well in clinical language, using a large body of medical text as training data. Which fine-tuning approach is this?",
    "choices": [
      {
        "id": "A",
        "text": "Prompt chaining"
      },
      {
        "id": "B",
        "text": "Zero-shot prompting"
      },
      {
        "id": "C",
        "text": "Model distillation"
      },
      {
        "id": "D",
        "text": "Domain adaptation"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Domain adaptation adapts a general model to a specialty such as healthcare or finance by training on domain-specific data.",
    "whyWrong": {
      "A": "Prompt chaining splits a task across several prompts at inference time. It does not train the model on medical text.",
      "B": "Zero-shot prompting asks for a task with no examples and leaves the model weights unchanged.",
      "C": "Distillation produces a smaller model from a larger one. It is about size and cost, not about specializing in a field."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "domain-adaptation",
      "fine-tuning"
    ]
  },
  {
    "id": "t3-3.3-09",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which statement best describes transfer learning?",
    "choices": [
      {
        "id": "A",
        "text": "Copying a trained model's files to another AWS Region so that it can serve users there."
      },
      {
        "id": "B",
        "text": "Reusing knowledge from a model trained on one task as the starting point for a new task."
      },
      {
        "id": "C",
        "text": "Moving training data from one S3 bucket to another before a job begins."
      },
      {
        "id": "D",
        "text": "Replacing a model's tokenizer so that it supports additional languages."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "In transfer learning a model trained on one task or dataset is reused as the starting point for a new task, so less data and compute are needed than training from zero.",
    "whyWrong": {
      "A": "Copying a model to another Region is a deployment concern. It involves no further learning.",
      "C": "Moving data between buckets is data logistics and does not describe a learning method.",
      "D": "Changing a tokenizer is a model architecture change. It is not what transfer learning means."
    },
    "services": [],
    "tags": [
      "transfer-learning",
      "fine-tuning"
    ]
  },
  {
    "id": "t3-3.3-10",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A law firm has two million unlabeled contracts. Its model keeps misreading specialized legal terms. The firm has no labeled question-and-answer pairs. What is the most appropriate next step?",
    "choices": [
      {
        "id": "A",
        "text": "Lower the temperature to zero so the model stops guessing at unfamiliar terms."
      },
      {
        "id": "B",
        "text": "Add few-shot examples to every prompt that define each legal term."
      },
      {
        "id": "C",
        "text": "Run continued pre-training on the unlabeled contracts, if the chosen model supports it."
      },
      {
        "id": "D",
        "text": "Distill the model so that it becomes smaller and learns the terms from its own outputs."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Large unlabeled domain text points to continued pre-training, which teaches the model the vocabulary of the domain without needing labels.",
    "whyWrong": {
      "A": "Temperature changes randomness, not knowledge. The model would still misread terms it never learned.",
      "B": "Few-shot examples cover only a few terms and consume prompt space. They cannot teach a large specialized vocabulary.",
      "D": "Distillation copies a teacher's behavior into a smaller model. A teacher that misreads the terms passes on the same errors."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "continued-pre-training",
      "domain-adaptation"
    ]
  },
  {
    "id": "t3-3.3-11",
    "domain": 3,
    "task": "3.3",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company has two needs. First, its assistant must answer in a fixed house format, and the company has 5,000 labeled prompt and ideal-response pairs. Second, the model must absorb the vocabulary of 100 GB of unlabeled internal engineering manuals. Which TWO methods address these needs? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Distillation into a smaller student model"
      },
      {
        "id": "B",
        "text": "Instruction tuning with the labeled prompt and response pairs"
      },
      {
        "id": "C",
        "text": "Zero-shot prompting with a longer system prompt"
      },
      {
        "id": "D",
        "text": "Continued pre-training on the unlabeled manuals"
      },
      {
        "id": "E",
        "text": "Reinforcement learning from human feedback with preference rankings"
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Labeled pairs that show the desired format suit instruction tuning or fine-tuning. Unlabeled domain text suits continued pre-training.",
    "whyWrong": {
      "A": "Distillation reduces size and cost. It does not add a format behavior or new domain vocabulary.",
      "C": "Prompting leaves the weights unchanged, so it cannot teach 100 GB worth of domain vocabulary.",
      "E": "RLHF needs human preference rankings of outputs, which the company does not have in this scenario."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "fine-tuning",
      "continued-pre-training",
      "method-selection"
    ]
  },
  {
    "id": "t3-3.3-12",
    "domain": 3,
    "task": "3.3",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO steps are part of curating a dataset for fine-tuning a foundation model? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Keep every duplicated record so that common examples carry more weight."
      },
      {
        "id": "B",
        "text": "Check that the examples are accurate and relevant to the target task."
      },
      {
        "id": "C",
        "text": "Remove duplicate and low-quality records."
      },
      {
        "id": "D",
        "text": "Include outdated and incorrect answers so the model sees realistic mistakes."
      },
      {
        "id": "E",
        "text": "Keep inconsistent formats so the model becomes flexible."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Curation means cleaning, deduplicating, and selecting accurate, relevant examples. Poor data produces a poor model.",
    "whyWrong": {
      "A": "Duplicates skew the model toward repeated examples and can cause it to memorize them.",
      "D": "Incorrect answers teach the model wrong behavior. The model learns from them as though they were correct.",
      "E": "Inconsistent formats confuse the training signal. A consistent format is expected by the customization job."
    },
    "services": [],
    "tags": [
      "data-curation",
      "fine-tuning-data"
    ]
  },
  {
    "id": "t3-3.3-13",
    "domain": 3,
    "task": "3.3",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A company plans to fine-tune a model on past customer support transcripts that contain names and account numbers. Which TWO governance actions should it take before training? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Choose a larger model so that personal data is harder to extract."
      },
      {
        "id": "B",
        "text": "Record where the data came from and any license or consent terms that apply to it."
      },
      {
        "id": "C",
        "text": "Increase the number of training epochs so that the model learns the names reliably."
      },
      {
        "id": "D",
        "text": "Skip review because internal data is automatically cleared for training."
      },
      {
        "id": "E",
        "text": "Remove or protect personal data, and confirm the company has the right to use the transcripts."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Data governance covers permission to use the data, handling of PII, and tracking of source and license. A model can reproduce training data, so sensitive data should be removed or protected first.",
    "whyWrong": {
      "A": "A larger model does not guarantee protection. Models can still memorize and reveal training data.",
      "C": "More epochs make memorization of the sensitive values more likely, not less.",
      "D": "Being internal does not grant permission. Privacy terms and consent can still restrict how the data is used."
    },
    "services": [],
    "tags": [
      "data-governance",
      "fine-tuning-data"
    ]
  },
  {
    "id": "t3-3.3-14",
    "domain": 3,
    "task": "3.3",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO statements about the size and labeling of a fine-tuning dataset are correct? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "More records always give better results, even when many of them are noisy."
      },
      {
        "id": "B",
        "text": "A smaller set of accurate, consistently labeled examples can beat a larger set of sloppy ones."
      },
      {
        "id": "C",
        "text": "Labels can be assigned at random because the model corrects them during training."
      },
      {
        "id": "D",
        "text": "Fine-tuning needs as many tokens as pre-training did to change the model's behavior."
      },
      {
        "id": "E",
        "text": "Labels or desired responses should be accurate and consistent, and a sample should be reviewed by people."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Quality matters more than raw volume, and the labels are the signal the model learns from. Consistent, reviewed labels are therefore essential.",
    "whyWrong": {
      "A": "Noisy data teaches wrong patterns, so volume does not make up for poor quality.",
      "C": "A model does not correct random labels. It learns from them and reproduces the errors.",
      "D": "Fine-tuning needs only a small fraction of the data used in pre-training."
    },
    "services": [],
    "tags": [
      "data-labeling",
      "fine-tuning-data"
    ]
  },
  {
    "id": "t3-3.3-15",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A retailer fine-tuned a model on support tickets from its North American stores only. After launch, answers for customers in other regions are often wrong or unhelpful, although accuracy on North American tickets is high. What is the most likely cause?",
    "choices": [
      {
        "id": "A",
        "text": "The training data did not represent the full range of customers."
      },
      {
        "id": "B",
        "text": "The temperature was set too high during training."
      },
      {
        "id": "C",
        "text": "The model was pre-trained, and pre-trained models cannot be fine-tuned further."
      },
      {
        "id": "D",
        "text": "The training dataset was too large for the model to learn from."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Good results on the data it saw and poor results elsewhere indicate unrepresentative training data. The model has not seen the other regions' language, products, and cases.",
    "whyWrong": {
      "B": "Temperature is an inference setting that controls randomness. It does not explain a gap between regions.",
      "C": "Fine-tuning always starts from a pre-trained model, so this statement is false.",
      "D": "A large, representative dataset would not cause this pattern. The problem is what the data covers, not how much of it there is."
    },
    "services": [],
    "tags": [
      "data-representativeness",
      "fine-tuning-data"
    ]
  },
  {
    "id": "t3-3.3-16",
    "domain": 3,
    "task": "3.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "What is the purpose of reinforcement learning from human feedback (RLHF) when preparing a foundation model?",
    "choices": [
      {
        "id": "A",
        "text": "To label large unlabeled corpora automatically so that they can be used for pre-training."
      },
      {
        "id": "B",
        "text": "To retrieve current facts from an external knowledge base at query time."
      },
      {
        "id": "C",
        "text": "To reduce the model's parameter count so it can run on cheaper hardware."
      },
      {
        "id": "D",
        "text": "To align model outputs with human preferences, using human rankings to train a reward signal."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "In RLHF people rank outputs, a reward model learns those preferences, and the foundation model is tuned to maximize that reward. This makes answers more helpful and better aligned with what people want.",
    "whyWrong": {
      "A": "Pre-training uses self-supervised learning and does not need labels. RLHF is not a labeling tool for corpora.",
      "B": "Retrieval of current facts is the role of retrieval-augmented generation, which does not change the model.",
      "C": "Shrinking a model is distillation. RLHF changes behavior, not size."
    },
    "services": [],
    "tags": [
      "rlhf",
      "human-feedback"
    ]
  }
);
