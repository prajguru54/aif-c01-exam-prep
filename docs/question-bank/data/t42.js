window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t4-4.2-01",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which statement correctly distinguishes transparency from explainability for an AI model?",
    "choices": [
      {
        "id": "A",
        "text": "Transparency means explaining a single prediction, and explainability means publishing the training data."
      },
      {
        "id": "B",
        "text": "Transparency is openness about how a model was built, and explainability is saying why it made a prediction."
      },
      {
        "id": "C",
        "text": "Transparency applies only to open source models, and explainability applies only to proprietary models."
      },
      {
        "id": "D",
        "text": "Transparency measures prediction accuracy, and explainability measures how fast the model responds."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Transparency covers openness about data, design, limits and intended use. Explainability is about the reason behind a specific output.",
    "whyWrong": {
      "A": "The two definitions are swapped. Explaining one prediction is explainability.",
      "C": "Both properties can apply to any model type. Open source status helps inspection but does not define either term.",
      "D": "Accuracy and latency are performance measures, not definitions of transparency or explainability."
    },
    "services": [],
    "tags": [
      "transparency",
      "explainability"
    ]
  },
  {
    "id": "t4-4.2-02",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is an interpretable model whose decision logic a reviewer can read directly?",
    "choices": [
      {
        "id": "A",
        "text": "A deep neural network with many hidden layers"
      },
      {
        "id": "B",
        "text": "A large language model with billions of parameters"
      },
      {
        "id": "C",
        "text": "A closed proprietary model reached only through an API"
      },
      {
        "id": "D",
        "text": "A small decision tree with a handful of if-then splits"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Decision trees and linear or logistic regression can be read as explicit rules or weights, so they are interpretable. Deep networks and LLMs behave as black boxes.",
    "whyWrong": {
      "A": "Reasoning is spread across many learned weights that a person cannot follow, so it is a black box.",
      "B": "LLM behavior emerges from billions of parameters and cannot be read as rules.",
      "C": "A closed API hides internals, which is the opposite of readable decision logic."
    },
    "services": [],
    "tags": [
      "interpretability",
      "black-box"
    ]
  },
  {
    "id": "t4-4.2-03",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An insurer is required by regulators to tell each policyholder which factors raised their premium. The data science team has a highly accurate but opaque ensemble of deep networks. What is the most appropriate course of action?",
    "choices": [
      {
        "id": "A",
        "text": "Keep the opaque model because its accuracy outweighs the reporting requirement."
      },
      {
        "id": "B",
        "text": "Hide the premium factors from policyholders and publish only the final price."
      },
      {
        "id": "C",
        "text": "Add or switch to an interpretable model that can state the factors behind each decision."
      },
      {
        "id": "D",
        "text": "Increase the size of the network so that it produces more accurate premiums."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A requirement to give reasons makes explainability a hard constraint. An interpretable model can state the factors behind each decision.",
    "whyWrong": {
      "A": "The regulatory requirement is mandatory, so accuracy alone cannot justify an opaque model here.",
      "B": "Withholding the factors breaks the stated requirement.",
      "D": "A larger network is even harder to explain and does nothing for the reporting duty."
    },
    "services": [],
    "tags": [
      "explainability",
      "regulation"
    ]
  },
  {
    "id": "t4-4.2-04",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is NOT a practice that improves the transparency of an AI system?",
    "choices": [
      {
        "id": "A",
        "text": "Documenting the intended use and known limitations of the model"
      },
      {
        "id": "B",
        "text": "Keeping the training data sources undisclosed to reviewers"
      },
      {
        "id": "C",
        "text": "Publishing the license terms that apply to the model"
      },
      {
        "id": "D",
        "text": "Recording evaluation results so that others can review them"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Transparency means openness about data, design and limits. Withholding those details from reviewers reduces it.",
    "whyWrong": {
      "A": "Documenting intended use and limitations is a core transparency practice.",
      "C": "Publishing license terms tells users what they may do with the model, which adds transparency.",
      "D": "Recorded evaluation results give reviewers evidence about behavior, which adds transparency."
    },
    "services": [],
    "tags": [
      "transparency"
    ]
  },
  {
    "id": "t4-4.2-05",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which AWS capability stores a structured record of a model's intended use, training data, evaluation results and risk rating for documentation and audit?",
    "choices": [
      {
        "id": "A",
        "text": "SageMaker Model Cards"
      },
      {
        "id": "B",
        "text": "Amazon Bedrock Guardrails"
      },
      {
        "id": "C",
        "text": "AWS PrivateLink endpoints"
      },
      {
        "id": "D",
        "text": "Amazon Macie for S3"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "SageMaker Model Cards is the documentation record for a model's purpose, data, evaluation and risk.",
    "whyWrong": {
      "B": "Guardrails filter harmful content and sensitive information at runtime. They do not document a model.",
      "C": "PrivateLink provides private network connectivity to services.",
      "D": "Macie discovers sensitive data in Amazon S3. It does not describe a model."
    },
    "services": [
      "Amazon SageMaker Model Cards"
    ],
    "tags": [
      "model-cards",
      "documentation"
    ]
  },
  {
    "id": "t4-4.2-06",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A team must pick between two foundation models for a support assistant. They want measured evidence of quality and toxicity, using their own sample of customer questions, before deciding. Which approach fits best?",
    "choices": [
      {
        "id": "A",
        "text": "Read the Amazon SageMaker Model Card of each model and choose the one with the longer description."
      },
      {
        "id": "B",
        "text": "Review AWS CloudTrail logs of past invocations to compare the two models."
      },
      {
        "id": "C",
        "text": "Run Amazon Macie on the sample questions and compare the findings."
      },
      {
        "id": "D",
        "text": "Run Amazon Bedrock Model Evaluations on both models using their own questions."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Bedrock Model Evaluations measures quality and toxicity and lets you compare models on your own data. Documentation does not replace measurement.",
    "whyWrong": {
      "A": "A model card documents a model but does not measure how it performs on your questions.",
      "B": "CloudTrail records API activity and gives no quality or toxicity scores.",
      "C": "Macie finds sensitive data in storage and does not evaluate model output."
    },
    "services": [
      "Amazon Bedrock Model Evaluations"
    ],
    "tags": [
      "model-evaluation",
      "tools"
    ]
  },
  {
    "id": "t4-4.2-07",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A security team wants to independently inspect a model's architecture and weights as part of an internal review. Which kind of model best supports this?",
    "choices": [
      {
        "id": "A",
        "text": "A closed proprietary model offered only through an API"
      },
      {
        "id": "B",
        "text": "A model whose provider publishes only a marketing summary"
      },
      {
        "id": "C",
        "text": "An open source or open-weight model"
      },
      {
        "id": "D",
        "text": "Any model that scores highest on a public benchmark"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Open source and open-weight models expose architecture and weights, which makes independent review possible.",
    "whyWrong": {
      "A": "Closed API models do not expose their internals for inspection.",
      "B": "A marketing summary does not give access to architecture or weights.",
      "D": "A benchmark score says nothing about whether the model can be inspected."
    },
    "services": [],
    "tags": [
      "open-source",
      "transparency"
    ]
  },
  {
    "id": "t4-4.2-08",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A team downloads an open-weight model whose weights are publicly available. Legal asks whether the model may be used inside a paid commercial product. What should the team check first?",
    "choices": [
      {
        "id": "A",
        "text": "The license terms, because public weights do not by themselves grant commercial rights."
      },
      {
        "id": "B",
        "text": "The model's benchmark scores, because high accuracy implies commercial rights."
      },
      {
        "id": "C",
        "text": "The size of the model, because smaller models are always free for commercial use."
      },
      {
        "id": "D",
        "text": "The public availability of the weights, because anything downloadable may be used commercially."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "License documentation states permitted uses, restrictions and obligations. Open weights do not automatically mean unrestricted commercial use.",
    "whyWrong": {
      "B": "Accuracy has no bearing on legal permission to use a model.",
      "C": "Model size does not determine licensing, and licenses vary by model.",
      "D": "Being downloadable is not permission. The license decides what is allowed."
    },
    "services": [],
    "tags": [
      "licensing",
      "open-source"
    ]
  },
  {
    "id": "t4-4.2-09",
    "domain": 4,
    "task": "4.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A governance team needs to record a model's intended use and risk rating, and also needs measured toxicity and robustness results for it. Which TWO AWS capabilities together meet these needs? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Bedrock prompt caching"
      },
      {
        "id": "B",
        "text": "Amazon Bedrock Model Evaluations"
      },
      {
        "id": "C",
        "text": "AWS PrivateLink"
      },
      {
        "id": "D",
        "text": "AWS Budgets"
      },
      {
        "id": "E",
        "text": "Amazon SageMaker Model Cards"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Model Cards document intended use and risk. Bedrock Model Evaluations produces the measured quality, toxicity and robustness evidence.",
    "whyWrong": {
      "A": "Prompt caching reduces latency and cost for repeated prompt prefixes.",
      "C": "PrivateLink is about private network connectivity and neither documents nor measures a model.",
      "D": "Budgets tracks spend and does not describe or test a model."
    },
    "services": [
      "Amazon SageMaker Model Cards",
      "Amazon Bedrock Model Evaluations"
    ],
    "tags": [
      "model-cards",
      "model-evaluation"
    ]
  },
  {
    "id": "t4-4.2-10",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A model provider wants to be open with the public while still protecting users from misuse. Which approach best balances transparency and safety?",
    "choices": [
      {
        "id": "A",
        "text": "Publish nothing about the model so that attackers can learn nothing about its weaknesses."
      },
      {
        "id": "B",
        "text": "Publish every detail of the safety filters, thresholds and known weaknesses."
      },
      {
        "id": "C",
        "text": "Publish intended use, limitations and evaluation summaries, but not exploit-level safeguard details."
      },
      {
        "id": "D",
        "text": "Publish only the marketing description and share test results solely with paying customers."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Full disclosure of safeguard internals can help attackers craft jailbreaks, while total secrecy removes the review that builds trust. Disclosing purpose, limits and results while holding back exploit detail balances both.",
    "whyWrong": {
      "A": "Total secrecy gives users and reviewers nothing to assess, which fails the transparency goal.",
      "B": "Detailing filter thresholds and weaknesses can help attackers evade the safeguards.",
      "D": "A marketing-only description is not meaningful transparency, and limiting results to paying customers does not serve reviewers or the public."
    },
    "services": [],
    "tags": [
      "safety-tradeoff",
      "transparency"
    ]
  },
  {
    "id": "t4-4.2-11",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company has two projects. Project 1 screens factory photos for defects, and no one needs a reason for each result. Project 2 decides benefit eligibility, and each applicant is entitled to the reasons. Which model choice best reflects the interpretability versus performance trade-off?",
    "choices": [
      {
        "id": "A",
        "text": "A complex high-performance model for Project 1 and an interpretable model for Project 2"
      },
      {
        "id": "B",
        "text": "An interpretable model for Project 1 and a complex high-performance model for Project 2"
      },
      {
        "id": "C",
        "text": "A complex high-performance model for both projects"
      },
      {
        "id": "D",
        "text": "An interpretable model for both projects, even where accuracy suffers badly"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Choose by what the use case demands. Where explanations are not required, favor performance. Where reasons are owed to people, favor interpretability.",
    "whyWrong": {
      "B": "This reverses the needs. Project 2 requires reasons, and Project 1 gains most from raw accuracy on images.",
      "C": "A black box for Project 2 cannot supply the reasons applicants are entitled to.",
      "D": "Interpretability is not free. Forcing it onto an image task would sacrifice accuracy where no one needs the explanation."
    },
    "services": [],
    "tags": [
      "interpretability-tradeoff",
      "model-selection"
    ]
  },
  {
    "id": "t4-4.2-12",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A team replaces a large neural network with a small decision tree so that its predictions can be explained. What is the most likely consequence?",
    "choices": [
      {
        "id": "A",
        "text": "The model becomes both more explainable and more accurate on every dataset."
      },
      {
        "id": "B",
        "text": "The model becomes harder to explain but easier to train."
      },
      {
        "id": "C",
        "text": "The model keeps the same accuracy and the same level of explainability."
      },
      {
        "id": "D",
        "text": "The model becomes easier to explain but may be less accurate on complex patterns."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Simple models are easier to explain, and they often give up some accuracy on complex data. This is the standard interpretability versus performance trade-off.",
    "whyWrong": {
      "A": "Simpler models are not more accurate on every dataset, and complex data often favors larger models.",
      "B": "A small decision tree is easier to explain, not harder.",
      "C": "Changing the model type changes both properties, so neither stays the same by default."
    },
    "services": [],
    "tags": [
      "interpretability-tradeoff"
    ]
  },
  {
    "id": "t4-4.2-13",
    "domain": 4,
    "task": "4.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A team wants to compare a complex model with an interpretable one and measure the interpretability versus performance trade-off. Which TWO actions should they take? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Count how many users saw the model's results in the pilot."
      },
      {
        "id": "B",
        "text": "Compare the number of training hours each model used."
      },
      {
        "id": "C",
        "text": "Measure the accuracy of each model on a held-out test set."
      },
      {
        "id": "D",
        "text": "Have reviewers judge whether the reason for each decision can be followed and stated."
      },
      {
        "id": "E",
        "text": "Compare the file size of each model's saved weights."
      }
    ],
    "answer": [
      "C",
      "D"
    ],
    "explanation": "The trade-off has two sides. Performance is measured on test data, and explainability is judged by whether a reviewer can follow the reason for a decision.",
    "whyWrong": {
      "A": "Pilot reach says nothing about accuracy or about whether decisions can be explained.",
      "B": "Training time is a cost measure and shows neither accuracy nor explainability.",
      "E": "Storage size is not a measure of how well a model performs or how readable it is."
    },
    "services": [],
    "tags": [
      "interpretability-tradeoff",
      "evaluation"
    ]
  },
  {
    "id": "t4-4.2-14",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A company launches a customer chatbot and wants users to be able to flag incorrect or unhelpful answers so the team can improve the system. Which human-centered design feature addresses this?",
    "choices": [
      {
        "id": "A",
        "text": "Removing the conversation history to keep the interface simple"
      },
      {
        "id": "B",
        "text": "A user feedback mechanism such as thumbs up or down and report-an-error"
      },
      {
        "id": "C",
        "text": "Raising the model temperature so that the answers vary more"
      },
      {
        "id": "D",
        "text": "Encrypting the chat logs with a customer managed key"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "User feedback mechanisms give people a way to report bad outputs and feed the improvement loop.",
    "whyWrong": {
      "A": "Removing history does not let users report problems and can make answers worse.",
      "C": "A higher temperature makes output more random and gives users no voice.",
      "D": "Encryption protects data and is a security control, not a feedback channel."
    },
    "services": [],
    "tags": [
      "human-centered-design",
      "user-feedback"
    ]
  },
  {
    "id": "t4-4.2-15",
    "domain": 4,
    "task": "4.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An HR assistant summarizes policy questions from an internal knowledge base. Employees say they cannot tell whether to trust the answers. Which change best improves decision transparency for these users?",
    "choices": [
      {
        "id": "A",
        "text": "Show a plain-language reason and cite source documents for each answer."
      },
      {
        "id": "B",
        "text": "Display only the final answer in a larger font so that it stands out."
      },
      {
        "id": "C",
        "text": "Hide the sources and show a confidence badge with no explanation or reasoning."
      },
      {
        "id": "D",
        "text": "Add a longer disclaimer at the bottom of the page and keep the answers unchanged."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Human-centered explainability shows the reason or evidence behind an output. Source citations let users verify an answer themselves.",
    "whyWrong": {
      "B": "A larger final answer changes presentation but gives no reasoning or evidence.",
      "C": "A badge without a reason or source gives users nothing to verify.",
      "D": "A disclaimer does not explain how any specific answer was reached."
    },
    "services": [],
    "tags": [
      "human-centered-design",
      "source-citation"
    ]
  },
  {
    "id": "t4-4.2-16",
    "domain": 4,
    "task": "4.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A hospital deploys an AI tool that suggests triage priority for incoming patients. Which TWO design choices follow human-centered design for explainable AI? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Hide that an AI model produced the suggestion, to avoid confusing staff."
      },
      {
        "id": "B",
        "text": "Tell staff clearly that the suggestion comes from an AI model and state its limits."
      },
      {
        "id": "C",
        "text": "Show only the priority label and leave out any supporting information."
      },
      {
        "id": "D",
        "text": "Present the suggestion as a final decision that staff cannot override."
      },
      {
        "id": "E",
        "text": "Keep a clinician in the loop to review and override high-stakes suggestions."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Disclosing AI use and its limits, and keeping a human reviewer for high-stakes outcomes, are core human-centered practices.",
    "whyWrong": {
      "A": "Concealing AI involvement removes transparency and prevents staff from judging reliability.",
      "C": "A bare label gives no evidence or reason that staff could use to judge the suggestion.",
      "D": "Removing the ability to override takes away human oversight in a high-stakes setting."
    },
    "services": [],
    "tags": [
      "human-oversight",
      "human-centered-design"
    ]
  },
  {
    "id": "t4-4.2-17",
    "domain": 4,
    "task": "4.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which THREE are principles of human-centered design for explainable AI? (Select THREE)",
    "choices": [
      {
        "id": "A",
        "text": "Remove human review of high-stakes outcomes to speed up decisions."
      },
      {
        "id": "B",
        "text": "Show the reason or evidence behind an output in plain language."
      },
      {
        "id": "C",
        "text": "Provide a way for users to give feedback or contest a decision."
      },
      {
        "id": "D",
        "text": "Present every answer as equally certain to keep the interface clean."
      },
      {
        "id": "E",
        "text": "Avoid telling users what the system cannot do."
      },
      {
        "id": "F",
        "text": "Express uncertainty instead of presenting every output as certain."
      }
    ],
    "answer": [
      "B",
      "C",
      "F"
    ],
    "explanation": "Explaining outputs, giving users a feedback or contest path, and communicating uncertainty all keep people informed and in control.",
    "whyWrong": {
      "A": "High-stakes outcomes call for human oversight, so removing it works against the principles.",
      "D": "Uniform certainty misleads users about how reliable each output is.",
      "E": "Hiding limitations reduces transparency. Users should be told what the system can and cannot do."
    },
    "services": [],
    "tags": [
      "human-centered-design",
      "uncertainty"
    ]
  }
);
