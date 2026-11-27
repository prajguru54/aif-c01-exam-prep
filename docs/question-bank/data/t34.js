window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t3-3.4-01",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What does human-in-the-loop evaluation of a foundation model involve?",
    "choices": [
      {
        "id": "A",
        "text": "Running the model against a fixed dataset and computing a score automatically."
      },
      {
        "id": "B",
        "text": "People reviewing and rating model outputs for qualities such as helpfulness, tone, and accuracy."
      },
      {
        "id": "C",
        "text": "Asking a second foundation model to grade the first model's answers against a rubric."
      },
      {
        "id": "D",
        "text": "Measuring how many tokens per second the model returns under production load."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Human-in-the-loop evaluation uses people as raters. It catches nuance and subjective qualities that automatic scores miss, at the cost of speed and money.",
    "whyWrong": {
      "A": "That describes an automatic evaluation, where no person rates the outputs.",
      "C": "That describes LLM-as-a-judge, where a model, not a person, does the grading.",
      "D": "Throughput is a performance measurement of speed. It says nothing about the quality of the answers."
    },
    "services": [],
    "tags": [
      "human-evaluation",
      "evaluation-approaches"
    ]
  },
  {
    "id": "t3-3.4-02",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What is the main benefit of evaluating several candidate foundation models on a benchmark dataset?",
    "choices": [
      {
        "id": "A",
        "text": "It guarantees the model will perform well on the company's own private data."
      },
      {
        "id": "B",
        "text": "It removes the need to measure latency or cost before choosing a model."
      },
      {
        "id": "C",
        "text": "It gives a fast, repeatable way to compare models on questions with known answers."
      },
      {
        "id": "D",
        "text": "It replaces the need for any human review of the model's tone and style."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "A benchmark dataset holds standard inputs with known good answers, so every model is scored the same way and results are comparable. It may not match your own task, so it is a starting point.",
    "whyWrong": {
      "A": "A public benchmark may not resemble your own data or task, so it gives no such guarantee.",
      "B": "Benchmark scores cover quality only. Latency and cost still have to be weighed separately.",
      "D": "Benchmarks do not judge subjective qualities such as brand voice, so human review is still useful."
    },
    "services": [],
    "tags": [
      "benchmark-datasets",
      "evaluation-approaches"
    ]
  },
  {
    "id": "t3-3.4-03",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A team wants to compare two Amazon Bedrock models on summarization using a built-in dataset and built-in quality metrics. They have no reviewers available and want the least manual effort. Which option fits?",
    "choices": [
      {
        "id": "A",
        "text": "Create an automatic model evaluation job in Amazon Bedrock Model Evaluation for the summarization task."
      },
      {
        "id": "B",
        "text": "Create a human-based evaluation job in Amazon Bedrock Model Evaluation with a work team of employees."
      },
      {
        "id": "C",
        "text": "Deploy both models and wait for end users to submit thumbs-up and thumbs-down ratings."
      },
      {
        "id": "D",
        "text": "Fine-tune both models on the summaries and compare their training loss."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Amazon Bedrock Model Evaluation supports automatic evaluation with built-in datasets and metrics for task types such as summarization. No reviewers are needed.",
    "whyWrong": {
      "B": "Human-based jobs need a work team to rate outputs, which is the manual effort the team wants to avoid.",
      "C": "Waiting for production ratings is slow and exposes users to the weaker model. It is not a controlled comparison.",
      "D": "Training loss is not a measure of summarization quality, and fine-tuning is far more work than evaluating."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "bedrock-model-evaluation",
      "evaluation-approaches"
    ]
  },
  {
    "id": "t3-3.4-04",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A marketing department is choosing a model to write product copy. The key quality is whether the text matches the brand's voice, which is subjective. Which evaluation approach is most appropriate?",
    "choices": [
      {
        "id": "A",
        "text": "Score the outputs with BLEU against a single reference marketing paragraph."
      },
      {
        "id": "B",
        "text": "Run a public benchmark dataset and pick the model with the top score."
      },
      {
        "id": "C",
        "text": "Compute perplexity on the brand's past marketing text and choose the lowest."
      },
      {
        "id": "D",
        "text": "Use human evaluation, with reviewers rating outputs against a brand-voice guideline."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Subjective qualities such as tone and brand voice are best judged by people. Automatic metrics compare against references and cannot judge voice well.",
    "whyWrong": {
      "A": "BLEU counts n-gram overlap with one reference. Many different texts can fit the brand voice, so it would penalize good copy.",
      "B": "A public benchmark does not measure this company's brand voice.",
      "C": "Perplexity shows how well a model predicts text. It does not show whether new copy sounds like the brand."
    },
    "services": [],
    "tags": [
      "human-evaluation",
      "evaluation-approaches"
    ]
  },
  {
    "id": "t3-3.4-05",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which metric is most commonly used to evaluate text summarization by checking how much of a human-written reference summary appears in the model's summary?",
    "choices": [
      {
        "id": "A",
        "text": "BLEU"
      },
      {
        "id": "B",
        "text": "ROUGE"
      },
      {
        "id": "C",
        "text": "Accuracy"
      },
      {
        "id": "D",
        "text": "Perplexity"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ROUGE (Recall-Oriented Understudy for Gisting Evaluation) measures n-gram overlap with a reference and leans toward recall. That fits summarization.",
    "whyWrong": {
      "A": "BLEU is precision-oriented and is mainly used for machine translation.",
      "C": "Accuracy suits classification with fixed labels, not free-form generated text.",
      "D": "Perplexity measures how well a language model predicts text. It does not compare against a reference summary."
    },
    "services": [],
    "tags": [
      "rouge",
      "evaluation-metrics"
    ]
  },
  {
    "id": "t3-3.4-06",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A company is comparing foundation models for translating product pages from English to German, using professional human translations as the reference. Which metric is the traditional choice?",
    "choices": [
      {
        "id": "A",
        "text": "ROUGE"
      },
      {
        "id": "B",
        "text": "Recall at k"
      },
      {
        "id": "C",
        "text": "Area under the ROC curve"
      },
      {
        "id": "D",
        "text": "BLEU"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "BLEU (Bilingual Evaluation Understudy) scores n-gram precision against reference translations, with a penalty for output that is too short. It is the classic machine translation metric.",
    "whyWrong": {
      "A": "ROUGE is recall-oriented and is the usual choice for summarization.",
      "B": "Recall at k is a retrieval metric. It does not compare translated text with a reference.",
      "C": "AUC-ROC evaluates binary classifiers that output scores, not generated text."
    },
    "services": [],
    "tags": [
      "bleu",
      "evaluation-metrics"
    ]
  },
  {
    "id": "t3-3.4-07",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A model answers a question with \"The firm laid off a large share of its staff\" while the reference says \"The company cut many jobs.\" The two share almost no words. Which metric would still give this pair a high score?",
    "choices": [
      {
        "id": "A",
        "text": "BERTScore, because it compares meaning through embeddings."
      },
      {
        "id": "B",
        "text": "BLEU, because it rewards output that is short and to the point."
      },
      {
        "id": "C",
        "text": "ROUGE-1, because it counts matching single words between the texts."
      },
      {
        "id": "D",
        "text": "Exact match, because both sentences describe the same event."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "BERTScore uses embeddings from a BERT-style model to compare meaning, so paraphrases with different words can score well. It is the choice when meaning matters more than exact wording.",
    "whyWrong": {
      "B": "BLEU is based on n-gram precision, so a paraphrase with few shared words scores poorly.",
      "C": "ROUGE-1 counts overlapping words. With almost no shared words, the score would be low.",
      "D": "Exact match requires identical strings, so a paraphrase scores zero."
    },
    "services": [],
    "tags": [
      "bertscore",
      "evaluation-metrics"
    ]
  },
  {
    "id": "t3-3.4-08",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A team uses a strong foundation model as a judge to score thousands of chatbot answers against a rubric. They notice the judge consistently favors longer answers. What is the most appropriate response?",
    "choices": [
      {
        "id": "A",
        "text": "Stop using LLM-as-a-judge, since automatic scoring by a model can never be reliable."
      },
      {
        "id": "B",
        "text": "Replace the judge with ROUGE, because overlap scores are free of any bias."
      },
      {
        "id": "C",
        "text": "Compare the judge's scores with a sample of human ratings, then adjust the rubric or the judge."
      },
      {
        "id": "D",
        "text": "Increase the judge model's temperature so that its scores vary more across answers."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "LLM-as-a-judge scales well but the judge can be biased, so its scores should be validated against human ratings. Calibrating with a human-rated sample is the standard fix.",
    "whyWrong": {
      "A": "The approach is useful at scale. The bias is a reason to validate and tune it, not to abandon it.",
      "B": "ROUGE needs reference answers and misses meaning, and it also rewards longer outputs that overlap more. It is not a bias-free replacement.",
      "D": "A higher temperature adds randomness to the judge. It does not remove a systematic preference for length."
    },
    "services": [],
    "tags": [
      "llm-as-a-judge",
      "evaluation-metrics"
    ]
  },
  {
    "id": "t3-3.4-09",
    "domain": 3,
    "task": "3.4",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A team is evaluating an English-to-French translation model and a separate meeting-summary model, each against human-written reference texts. Which TWO metric choices are appropriate? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Perplexity for the summary model"
      },
      {
        "id": "B",
        "text": "ROUGE for the summary model"
      },
      {
        "id": "C",
        "text": "BLEU for the translation model"
      },
      {
        "id": "D",
        "text": "Classification accuracy for the translation model"
      },
      {
        "id": "E",
        "text": "BLEU for the summary model"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "BLEU is the traditional machine translation metric, and ROUGE is the traditional summarization metric. Both compare generated text against references.",
    "whyWrong": {
      "A": "Perplexity shows how well a model predicts text. It does not compare a summary with a reference summary.",
      "D": "Accuracy needs fixed class labels. Translated sentences are free-form text.",
      "E": "BLEU is precision-oriented. Summarization is judged by how much reference content is covered, which is what ROUGE measures."
    },
    "services": [],
    "tags": [
      "rouge",
      "bleu",
      "evaluation-metrics"
    ]
  },
  {
    "id": "t3-3.4-10",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A company deploys a generative AI assistant to help support agents write replies. The business objective is higher productivity. Which measurement best shows the objective is met?",
    "choices": [
      {
        "id": "A",
        "text": "The BLEU score of the assistant's drafts"
      },
      {
        "id": "B",
        "text": "The number of parameters in the model"
      },
      {
        "id": "C",
        "text": "The perplexity of the model on support tickets"
      },
      {
        "id": "D",
        "text": "The drop in average handling time per ticket"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Productivity is time saved or output per person. A fall in handling time per ticket shows the assistant is delivering that outcome. The other options are technical properties of the model.",
    "whyWrong": {
      "A": "BLEU compares text with a reference. It does not show that agents work faster.",
      "B": "Model size says nothing about whether agents finish tickets sooner.",
      "C": "Perplexity measures how well the model predicts text, not agent productivity."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "productivity"
    ]
  },
  {
    "id": "t3-3.4-11",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A company wants to know whether employees actually adopt its new internal chat assistant. Which of the following is NOT an indicator of user engagement?",
    "choices": [
      {
        "id": "A",
        "text": "Number of messages per session"
      },
      {
        "id": "B",
        "text": "Share of users who return in the following week"
      },
      {
        "id": "C",
        "text": "Average session length"
      },
      {
        "id": "D",
        "text": "ROUGE score against reference answers"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "User engagement describes how much and how often people use the application. ROUGE is a text-quality metric computed against references, and it says nothing about usage.",
    "whyWrong": {
      "A": "Messages per session shows how deeply people use the assistant, so it is an engagement indicator.",
      "B": "Return rate shows whether users come back, which is a core engagement signal.",
      "C": "Session length is a common engagement measure of time spent with the application."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "user-engagement"
    ]
  },
  {
    "id": "t3-3.4-12",
    "domain": 3,
    "task": "3.4",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A Retrieval Augmented Generation (RAG) assistant built on an Amazon Bedrock knowledge base is being evaluated. Which TWO aspects should the evaluation measure? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "The BLEU score of the retrieved passages against the user's question"
      },
      {
        "id": "B",
        "text": "The number of parameters in the embedding model"
      },
      {
        "id": "C",
        "text": "The average GPU utilization of the vector store"
      },
      {
        "id": "D",
        "text": "Whether the generated answer is faithful to the retrieved passages"
      },
      {
        "id": "E",
        "text": "Whether the retrieved passages are relevant to the question"
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "A RAG application has two parts that can fail: retrieval (are the right passages returned) and generation (is the answer grounded in them). Both need to be evaluated.",
    "whyWrong": {
      "A": "BLEU compares generated text with a reference translation. It is not a way to judge retrieved passages.",
      "B": "Parameter count is a model property and does not show whether retrieval or answers are good.",
      "C": "GPU utilization is an operational statistic. It does not measure answer quality."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "rag-evaluation",
      "application-evaluation"
    ]
  },
  {
    "id": "t3-3.4-13",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An agent books travel by calling a flight-search tool and a payment tool. Which evaluation best reflects how well the agent works?",
    "choices": [
      {
        "id": "A",
        "text": "Whether it called the right tools and completed the requested booking."
      },
      {
        "id": "B",
        "text": "The ROUGE score of the agent's final chat message against a reference message."
      },
      {
        "id": "C",
        "text": "The perplexity of the underlying model on a general text corpus."
      },
      {
        "id": "D",
        "text": "The embedding dimension of the model used to pick tools."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Agents act through tools, so evaluation looks at task completion, correct tool selection and arguments, steps taken, latency, and cost. Text overlap in one reply does not show the task was done.",
    "whyWrong": {
      "B": "A reply can read well and still hide a failed booking. Text overlap does not check actions.",
      "C": "General perplexity says nothing about this agent's tool use or task success.",
      "D": "Embedding dimension is a design detail, not a measure of whether the agent completes tasks."
    },
    "services": [],
    "tags": [
      "agent-evaluation",
      "application-evaluation"
    ]
  },
  {
    "id": "t3-3.4-14",
    "domain": 3,
    "task": "3.4",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A multi-step workflow classifies an insurance claim, retrieves the policy, drafts a decision letter, and routes it for approval. The team wants to evaluate the whole workflow, not only the model. Which THREE measures should they track? (Select THREE)",
    "choices": [
      {
        "id": "A",
        "text": "Perplexity of the model on its original training data"
      },
      {
        "id": "B",
        "text": "Failure rate at each individual step"
      },
      {
        "id": "C",
        "text": "End-to-end success rate across complete claims"
      },
      {
        "id": "D",
        "text": "End-to-end latency and cost per claim"
      },
      {
        "id": "E",
        "text": "ROUGE score of only the final letter, ignoring earlier steps"
      },
      {
        "id": "F",
        "text": "Context window size of the model used in the drafting step"
      }
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "explanation": "A workflow is only as good as the whole chain. Track end-to-end success, where in the chain failures occur, and the latency and cost of a complete run.",
    "whyWrong": {
      "A": "Training-data perplexity is a model property. It does not show how the pipeline performs on real claims.",
      "E": "Scoring only the last step hides failures in classification, retrieval, and routing, which is what an end-to-end evaluation should expose.",
      "F": "Context window size is a model specification. It is a design input, not a measure of how well the workflow performs."
    },
    "services": [],
    "tags": [
      "workflow-evaluation",
      "application-evaluation"
    ]
  },
  {
    "id": "t3-3.4-15",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which business metric answers the question \"Did the assistant finish what the user asked it to do?\"",
    "choices": [
      {
        "id": "A",
        "text": "Cost per interaction"
      },
      {
        "id": "B",
        "text": "Task completion rate"
      },
      {
        "id": "C",
        "text": "Average session length"
      },
      {
        "id": "D",
        "text": "BERTScore similarity"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Task completion rate is the share of user requests the application successfully fulfills. It is a direct measure of whether the application meets its business purpose.",
    "whyWrong": {
      "A": "Cost per interaction shows what each conversation costs, not whether the goal was achieved.",
      "C": "Session length shows time spent. A long session can mean the user struggled to get an answer.",
      "D": "BERTScore measures semantic similarity to a reference text. It does not show that a user's task was finished."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "task-completion"
    ]
  },
  {
    "id": "t3-3.4-16",
    "domain": 3,
    "task": "3.4",
    "type": "multi",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which TWO signals directly measure user satisfaction with a generative AI assistant? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Tokens generated per second"
      },
      {
        "id": "B",
        "text": "Number of model parameters"
      },
      {
        "id": "C",
        "text": "BLEU score on a test set"
      },
      {
        "id": "D",
        "text": "Thumbs-up and thumbs-down ratings on answers"
      },
      {
        "id": "E",
        "text": "Customer satisfaction (CSAT) survey scores after a conversation"
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "User satisfaction comes from what users say about their experience, such as in-app ratings and CSAT surveys. The other options are technical or model-quality properties.",
    "whyWrong": {
      "A": "Tokens per second measures speed. Users can be unhappy with fast answers.",
      "B": "Parameter count is a model property and not a user opinion.",
      "C": "BLEU compares text with references offline. It does not capture what real users think."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "user-satisfaction"
    ]
  },
  {
    "id": "t3-3.4-17",
    "domain": 3,
    "task": "3.4",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "Model X costs less per conversation but resolves 70 percent of support requests. Model Y costs more per conversation but resolves 92 percent. Each unresolved request escalates to a human agent. Which approach gives the best view of which model better meets the business objective?",
    "choices": [
      {
        "id": "A",
        "text": "Choose Model X, because cost per interaction is the only metric that reflects spend."
      },
      {
        "id": "B",
        "text": "Choose Model Y, because the higher price is evidence of higher quality."
      },
      {
        "id": "C",
        "text": "Compare ROUGE scores on a sample of the replies and choose the higher one."
      },
      {
        "id": "D",
        "text": "Combine cost per interaction with task completion rate and escalation costs."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Cost per interaction alone ignores whether the request was resolved. Pairing it with task completion rate, and counting escalation costs, shows the true cost of each resolved request.",
    "whyWrong": {
      "A": "Low cost per conversation can hide the cost of escalating the 30 percent of unresolved requests to humans.",
      "B": "Price does not prove quality. The decision should rest on measured completion and total cost.",
      "C": "ROUGE measures text overlap with references, not whether requests were resolved or what they cost."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "cost-per-interaction"
    ]
  }
);
