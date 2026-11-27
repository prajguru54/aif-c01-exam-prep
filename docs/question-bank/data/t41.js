window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t4-4.1-01",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which statement best describes fairness as a feature of responsible AI?",
    "choices": [
      {
        "id": "A",
        "text": "The model always returns the identical output whenever it receives the same input."
      },
      {
        "id": "B",
        "text": "The model is deployed on the lowest-cost infrastructure option available to the team."
      },
      {
        "id": "C",
        "text": "The model gives similar outcomes to similar people across demographic groups."
      },
      {
        "id": "D",
        "text": "The model can explain each of its predictions to users in plain language."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Fairness means comparable treatment and outcomes for similar individuals regardless of group. Bias is the systematic skew that fairness work tries to find and reduce.",
    "whyWrong": {
      "A": "Repeatable output is determinism, not fairness. A model can be deterministic and still treat groups unequally.",
      "B": "Infrastructure cost has no bearing on whether outcomes are equitable.",
      "D": "Explaining predictions is explainability, covered under transparency, not fairness."
    },
    "services": [],
    "tags": [
      "responsible-ai",
      "fairness"
    ]
  },
  {
    "id": "t4-4.1-02",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A speech recognition product transcribes some regional accents far less accurately than others. Which responsible AI feature is most directly lacking?",
    "choices": [
      {
        "id": "A",
        "text": "Inclusivity"
      },
      {
        "id": "B",
        "text": "Robustness"
      },
      {
        "id": "C",
        "text": "Veracity of text"
      },
      {
        "id": "D",
        "text": "Safety limits"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Inclusivity means the system works well for diverse users, languages and abilities. Uneven accuracy across accents is the classic inclusivity failure.",
    "whyWrong": {
      "B": "Robustness is about staying reliable under noisy, unexpected or adversarial input, not about performance differences between user groups.",
      "C": "Veracity concerns whether the output is truthful and accurate in content, not who the system serves well.",
      "D": "Safety concerns avoiding harmful outputs or actions. Poor transcription for some accents is not a harm-generation issue."
    },
    "services": [],
    "tags": [
      "responsible-ai",
      "inclusivity"
    ]
  },
  {
    "id": "t4-4.1-03",
    "domain": 4,
    "task": "4.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO of the following are failures of safety or veracity in a generative AI assistant? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "It supplies step-by-step instructions for making a dangerous substance at home."
      },
      {
        "id": "B",
        "text": "Its image classifier changes its answer after a few pixels are subtly altered."
      },
      {
        "id": "C",
        "text": "Its loan recommendations favor one demographic group over another."
      },
      {
        "id": "D",
        "text": "It cites a court ruling that does not exist and presents it as established fact."
      },
      {
        "id": "E",
        "text": "Its speech interface works noticeably worse for non-native speakers of a language."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "A fabricated ruling is a veracity failure (output is not accurate or verifiable). Dangerous instructions are a safety failure (harmful output). The other options map to robustness, inclusivity and fairness.",
    "whyWrong": {
      "B": "Sensitivity to tiny input perturbations is a robustness failure.",
      "C": "Different outcomes for demographic groups is a fairness and bias failure.",
      "E": "Uneven quality for different speakers is an inclusivity failure."
    },
    "services": [],
    "tags": [
      "responsible-ai",
      "veracity",
      "safety"
    ]
  },
  {
    "id": "t4-4.1-04",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which Amazon Bedrock Guardrails policy lets a team block entire subjects, such as legal advice, by describing them in natural language?",
    "choices": [
      {
        "id": "A",
        "text": "Content filters"
      },
      {
        "id": "B",
        "text": "Word filters"
      },
      {
        "id": "C",
        "text": "Sensitive information filters"
      },
      {
        "id": "D",
        "text": "Denied topics"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Denied topics are defined with a plain-language description of a subject, and the guardrail blocks prompts and responses that fall under it.",
    "whyWrong": {
      "A": "Content filters screen predefined harmful categories such as hate, insults, sexual content, violence, misconduct and prompt attacks, not custom subjects.",
      "B": "Word filters match specific words or phrases, so they cannot cover a whole subject described in natural language.",
      "C": "Sensitive information filters detect PII and similar data to block or mask it, not subject matter."
    },
    "services": [
      "Amazon Bedrock Guardrails"
    ],
    "tags": [
      "guardrails",
      "denied-topics"
    ]
  },
  {
    "id": "t4-4.1-05",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A support assistant built on Amazon Bedrock must keep answering questions, but customer account numbers and email addresses in its replies must be anonymized. Which approach meets this requirement?",
    "choices": [
      {
        "id": "A",
        "text": "Add a guardrail content filter at the highest strength for the misconduct category."
      },
      {
        "id": "B",
        "text": "Add a guardrail sensitive information filter configured to mask PII entities in responses."
      },
      {
        "id": "C",
        "text": "Add a guardrail denied topic that describes customer account data."
      },
      {
        "id": "D",
        "text": "Add a guardrail contextual grounding check with a high grounding threshold."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Sensitive information filters detect PII and can either block the content or mask it, which keeps the rest of the answer usable.",
    "whyWrong": {
      "A": "Content filters look for harmful content categories. Account numbers and emails are not harmful content, so they would pass through.",
      "C": "A denied topic would block the whole conversation about account data instead of masking the identifiers and still answering.",
      "D": "A grounding check detects answers unsupported by source text. It does not detect or mask PII."
    },
    "services": [
      "Amazon Bedrock Guardrails"
    ],
    "tags": [
      "guardrails",
      "pii"
    ]
  },
  {
    "id": "t4-4.1-06",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A RAG assistant sometimes states facts that appear nowhere in the retrieved documents. Which Amazon Bedrock Guardrails capability is designed to flag these hallucinated responses?",
    "choices": [
      {
        "id": "A",
        "text": "Content filters with prompt attack detection enabled"
      },
      {
        "id": "B",
        "text": "Denied topics covering the subject of the documents"
      },
      {
        "id": "C",
        "text": "Contextual grounding check"
      },
      {
        "id": "D",
        "text": "Sensitive information filters set to block"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The contextual grounding check compares a response with the reference source and the user query, and flags answers that are not grounded in the source or are irrelevant.",
    "whyWrong": {
      "A": "Prompt attack detection targets jailbreak and injection attempts in user input, not unsupported facts in the output.",
      "B": "Denied topics block subjects. Blocking the subject of the documents would stop the assistant from doing its job.",
      "D": "PII filters detect personal data. Whether a statement is supported by the sources is outside their purpose."
    },
    "services": [
      "Amazon Bedrock Guardrails"
    ],
    "tags": [
      "guardrails",
      "hallucination"
    ]
  },
  {
    "id": "t4-4.1-07",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which model selection practice best supports environmental sustainability goals?",
    "choices": [
      {
        "id": "A",
        "text": "Choose the smallest model that still meets the quality requirement."
      },
      {
        "id": "B",
        "text": "Choose the largest available model to avoid retraining later."
      },
      {
        "id": "C",
        "text": "Choose the model with the longest context window by default."
      },
      {
        "id": "D",
        "text": "Choose a model only on the basis of its leaderboard rank."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Larger models consume more compute and energy to train and to serve. Right-sizing the model to the task reduces the footprint.",
    "whyWrong": {
      "B": "Larger models use more energy on every request, so picking the biggest one by default increases environmental cost.",
      "C": "A longer context window is a capability, not a sustainability measure, and processing more tokens consumes more compute.",
      "D": "Leaderboard rank measures capability and ignores energy use and provider sustainability reporting."
    },
    "services": [],
    "tags": [
      "responsible-model-selection",
      "sustainability"
    ]
  },
  {
    "id": "t4-4.1-08",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is NOT a responsible practice for reducing the environmental impact of a generative AI workload?",
    "choices": [
      {
        "id": "A",
        "text": "Reusing a pre-trained model instead of training a new one."
      },
      {
        "id": "B",
        "text": "Using a smaller or distilled model whenever quality allows."
      },
      {
        "id": "C",
        "text": "Using a managed service that runs on shared, efficient hardware."
      },
      {
        "id": "D",
        "text": "Training a large model from scratch when a pre-trained one suffices."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Training from scratch consumes far more compute and energy than reusing an existing model that already meets requirements.",
    "whyWrong": {
      "A": "Reuse avoids the large energy cost of training, so it is a responsible practice.",
      "B": "Smaller and distilled models use less compute per request, so this reduces impact.",
      "C": "Shared managed infrastructure generally achieves higher utilization than isolated self-run capacity, so it is a sound practice."
    },
    "services": [],
    "tags": [
      "responsible-model-selection",
      "sustainability"
    ]
  },
  {
    "id": "t4-4.1-09",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A marketing team notices that its text generator reproduced long passages from a published novel. Which legal risk does this most directly create?",
    "choices": [
      {
        "id": "A",
        "text": "End-user risk from relying on unsafe advice"
      },
      {
        "id": "B",
        "text": "Intellectual property infringement claims"
      },
      {
        "id": "C",
        "text": "Discrimination claims from biased output"
      },
      {
        "id": "D",
        "text": "Liability from hallucinated facts"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Output that reproduces copyrighted material can expose the company to intellectual property infringement claims.",
    "whyWrong": {
      "A": "End-user risk is harm from acting on wrong or unsafe advice. Copying text is not advice.",
      "C": "Discrimination claims arise from biased outputs affecting groups, which is not the issue here.",
      "D": "Hallucinations are false statements presented as fact. Reproducing real text verbatim is the opposite problem."
    },
    "services": [],
    "tags": [
      "legal-risks",
      "intellectual-property"
    ]
  },
  {
    "id": "t4-4.1-10",
    "domain": 4,
    "task": "4.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A bank plans to release a customer-facing generative AI assistant. Which TWO outcomes represent legal or business risks of doing so? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Its responses treat applicants differently by demographic group, inviting discrimination claims."
      },
      {
        "id": "B",
        "text": "Pilot customers say they prefer shorter answers to the current long ones."
      },
      {
        "id": "C",
        "text": "The per-token price of the selected model is lowered by the provider next quarter."
      },
      {
        "id": "D",
        "text": "It invents a fee rule that a customer acts on and is harmed by."
      },
      {
        "id": "E",
        "text": "The model provider publishes a new version with higher benchmark scores and lower latency."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Biased outputs create discrimination exposure, and hallucinations acted upon cause end-user harm and liability, both of which also erode customer trust. The remaining options are neutral or favorable changes.",
    "whyWrong": {
      "B": "Style feedback from a pilot is a product tuning input, not a legal exposure.",
      "C": "A lower price reduces cost and carries no legal risk.",
      "E": "A better model version is an opportunity, not a legal risk."
    },
    "services": [],
    "tags": [
      "legal-risks",
      "hallucination",
      "bias"
    ]
  },
  {
    "id": "t4-4.1-11",
    "domain": 4,
    "task": "4.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO characteristics describe a high-quality training dataset for a responsible AI system? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "It is collected by scraping as much content as possible from any site."
      },
      {
        "id": "B",
        "text": "It contains about 99 percent examples of one outcome class."
      },
      {
        "id": "C",
        "text": "It comes from curated, vetted and properly licensed sources."
      },
      {
        "id": "D",
        "text": "Its labels are applied quickly without any quality review."
      },
      {
        "id": "E",
        "text": "It represents diverse groups, languages and contexts."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Inclusive, diverse data and curated, known sources are the dataset characteristics the exam names. Balanced classes and accurate labels also matter.",
    "whyWrong": {
      "A": "Indiscriminate scraping brings unvetted content, licensing and provenance problems, and unknown bias.",
      "B": "A heavily imbalanced dataset teaches the model to favor the majority outcome. Balanced classes are preferred.",
      "D": "Unreviewed labels bake errors and prejudice into the model."
    },
    "services": [],
    "tags": [
      "datasets",
      "inclusivity"
    ]
  },
  {
    "id": "t4-4.1-12",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A resume screening model is trained on historical data in which 90 percent of the records come from a single demographic group. What is the most likely consequence?",
    "choices": [
      {
        "id": "A",
        "text": "The model will be more accurate for every group because the dataset is large."
      },
      {
        "id": "B",
        "text": "The model will only train more slowly, with no change in outcomes."
      },
      {
        "id": "C",
        "text": "The model will likely perform worse for the underrepresented groups."
      },
      {
        "id": "D",
        "text": "The model will correct the imbalance on its own as it learns."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A model learns the patterns in its training data. When groups are underrepresented or the classes are unbalanced, error rates tend to be higher for those groups, which makes the system unfair.",
    "whyWrong": {
      "A": "Dataset size does not help groups that are barely represented in it. Balance and diversity matter, not volume alone.",
      "B": "Imbalance affects what the model learns, not just training speed.",
      "D": "Models do not repair skew in their data. They reproduce and can amplify it."
    },
    "services": [],
    "tags": [
      "datasets",
      "bias"
    ]
  },
  {
    "id": "t4-4.1-13",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A model performs poorly on both its training data and on new data. Which diagnosis fits best?",
    "choices": [
      {
        "id": "A",
        "text": "High bias, which means the model is underfitting."
      },
      {
        "id": "B",
        "text": "High variance, which means the model is overfitting."
      },
      {
        "id": "C",
        "text": "Low bias and low variance, which means a well-balanced model."
      },
      {
        "id": "D",
        "text": "High variance, which means the model has learned the noise."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Poor results even on the training set mean the model is too simple to capture the pattern. That is high bias, or underfitting.",
    "whyWrong": {
      "B": "Overfitting shows strong training performance and weak performance on new data, not weak on both.",
      "C": "A balanced model generalizes well and would score well on both sets.",
      "D": "Learning the noise is overfitting, which gives excellent training results."
    },
    "services": [],
    "tags": [
      "bias-variance",
      "underfitting"
    ]
  },
  {
    "id": "t4-4.1-14",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which description matches a model with high variance?",
    "choices": [
      {
        "id": "A",
        "text": "It is too simple to capture the real pattern in the data."
      },
      {
        "id": "B",
        "text": "It performs equally poorly on training and new data."
      },
      {
        "id": "C",
        "text": "It scores lower on the training data than on new, unseen data."
      },
      {
        "id": "D",
        "text": "It memorizes training noise and generalizes poorly to new data."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "High variance means the model is too sensitive to the training data, including noise. This is overfitting: strong training results and weak results on unseen data.",
    "whyWrong": {
      "A": "Being too simple to capture the pattern describes high bias, or underfitting.",
      "B": "Equally poor results on both sets point to underfitting, not variance.",
      "C": "A model that does better on new data than on training data is not the typical signature of overfitting, which is the reverse."
    },
    "services": [],
    "tags": [
      "bias-variance",
      "overfitting"
    ]
  },
  {
    "id": "t4-4.1-15",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A credit scoring model is too simple to capture patterns that matter for a small minority group of applicants. Which statement describes the likely effect?",
    "choices": [
      {
        "id": "A",
        "text": "The model is overfitting to that group, so it is accurate for it and weak for others."
      },
      {
        "id": "B",
        "text": "High bias causes consistently inaccurate predictions, with errors concentrated in that group."
      },
      {
        "id": "C",
        "text": "High variance causes unstable predictions, but only for the majority group."
      },
      {
        "id": "D",
        "text": "The effect is limited to training time and does not appear in predictions on real applicants."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "A model that is too simple underfits, which is the high bias case. Its systematic errors can land hardest on groups whose patterns it misses, which makes it both inaccurate and unfair.",
    "whyWrong": {
      "A": "Overfitting is high variance and arises from fitting noise. The scenario describes a model too simple for the pattern.",
      "C": "The scenario is about a too-simple model and a minority group, so high variance and the majority group do not fit.",
      "D": "Bias and variance show up in prediction quality on real applicants, not only during training."
    },
    "services": [],
    "tags": [
      "bias-variance",
      "bias"
    ]
  },
  {
    "id": "t4-4.1-16",
    "domain": 4,
    "task": "4.1",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A classifier meets its overall accuracy target, yet complaints suggest it performs poorly for applicants from one region. Which TWO actions most directly help detect the problem? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Report overall accuracy again using a larger random test set drawn from all regions."
      },
      {
        "id": "B",
        "text": "Add word filters to the application so the outputs avoid offensive terms."
      },
      {
        "id": "C",
        "text": "Train for more epochs and check that the training loss keeps falling steadily."
      },
      {
        "id": "D",
        "text": "Calculate the evaluation metrics separately for each region and compare them."
      },
      {
        "id": "E",
        "text": "Review the training labels for inconsistent or prejudiced annotation, including by region."
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "Subgroup analysis exposes gaps that an overall average hides, and label quality analysis finds flawed or biased labels that the model then learns. The other options leave the gap hidden or address a different problem.",
    "whyWrong": {
      "A": "A larger random sample still averages across groups, so the regional gap stays hidden.",
      "B": "Word filters screen generated text. They do not measure per-group performance of a classifier.",
      "C": "Falling training loss shows fit to the training data and says nothing about uneven performance across groups."
    },
    "services": [],
    "tags": [
      "bias-detection",
      "subgroup-analysis"
    ]
  },
  {
    "id": "t4-4.1-17",
    "domain": 4,
    "task": "4.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company uses a generative model to summarize regulatory documents. It wants ongoing evidence about the truthfulness of the summaries, including subtle errors. Which approach is the best fit?",
    "choices": [
      {
        "id": "A",
        "text": "Enable content filters, because they flag statements that are factually wrong."
      },
      {
        "id": "B",
        "text": "Track the average token count of summaries and alert on sudden changes."
      },
      {
        "id": "C",
        "text": "Have diverse human reviewers audit a sample of summaries against the source documents."
      },
      {
        "id": "D",
        "text": "Set temperature to zero, because deterministic output cannot contain errors."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Human audits compare outputs with the source and catch subtle factual errors, bias and toxicity that automated checks miss. Sampling outputs on a regular basis supports ongoing monitoring.",
    "whyWrong": {
      "A": "Content filters target harmful categories such as hate or violence. They do not verify factual accuracy.",
      "B": "Length statistics say nothing about whether the content is correct.",
      "D": "A lower temperature reduces randomness, but the model can still repeat the same wrong statement every time."
    },
    "services": [],
    "tags": [
      "human-audit",
      "veracity"
    ]
  }
);
