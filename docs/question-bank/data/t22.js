window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t2-2.2-01",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "One foundation model summarizes contracts, drafts emails, and labels support tickets, and the only change between these jobs is the prompt. Which advantage of generative AI does this show?",
    "choices": [
      {
        "id": "A",
        "text": "Adaptability across many tasks without building a separate model for each"
      },
      {
        "id": "B",
        "text": "Interpretability of every individual output the model produces"
      },
      {
        "id": "C",
        "text": "Deterministic output that is identical on every repeated run"
      },
      {
        "id": "D",
        "text": "Automatic removal of bias from the data used in training"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A single foundation model handling several different tasks through prompting is adaptability. This is a core advantage over classical models trained for one task.",
    "whyWrong": {
      "B": "Generative models are hard to interpret. This is a limitation, not an advantage.",
      "C": "Outputs can vary between runs. Determinism is not a property of these models.",
      "D": "Models can reflect bias in their training data. Switching tasks by prompt does not remove it."
    },
    "services": [],
    "tags": [
      "genai-advantages",
      "adaptability"
    ]
  },
  {
    "id": "t2-2.2-02",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A retailer wants shoppers to ask questions about delivery and return policies in plain language and receive an answer within seconds at any hour. Which pair of generative AI advantages does this use case rely on?",
    "choices": [
      {
        "id": "A",
        "text": "Guaranteed factual accuracy and full explainability of each reply"
      },
      {
        "id": "B",
        "text": "Unsupervised clustering of customers and low training cost"
      },
      {
        "id": "C",
        "text": "A natural language conversational interface and fast responsiveness"
      },
      {
        "id": "D",
        "text": "Identical wording on every reply and no need for human review"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Plain-language questions point to conversational ability, and answers within seconds around the clock point to responsiveness.",
    "whyWrong": {
      "A": "Generative models can hallucinate and are hard to explain, so neither is guaranteed.",
      "B": "Clustering is a classical unsupervised technique and has nothing to do with answering questions in conversation.",
      "D": "Wording can vary between replies, and human review is not removed by the advantages in question."
    },
    "services": [],
    "tags": [
      "genai-advantages",
      "conversational-ability"
    ]
  },
  {
    "id": "t2-2.2-03",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A marketing team spends several days writing first drafts of product descriptions before an editor polishes them. Which generative AI capability most directly shortens this step?",
    "choices": [
      {
        "id": "A",
        "text": "Detecting anomalies in weekly sales figures across stores"
      },
      {
        "id": "B",
        "text": "Drafting text quickly and at scale for a person to refine"
      },
      {
        "id": "C",
        "text": "Forecasting demand for each product category by month"
      },
      {
        "id": "D",
        "text": "Assigning a category label to each product photo in the catalog"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Content generation produces drafts in seconds, so people spend their time editing rather than starting from a blank page.",
    "whyWrong": {
      "A": "Anomaly detection finds unusual data points. It does not write text.",
      "C": "Forecasting predicts numeric demand. It does not produce descriptions.",
      "D": "Image labeling is a classification task. It does not produce descriptive copy."
    },
    "services": [],
    "tags": [
      "genai-advantages",
      "content-generation"
    ]
  },
  {
    "id": "t2-2.2-04",
    "domain": 2,
    "task": "2.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO statements describe genuine advantages of using generative AI for business tasks? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "The same prompt always returns exactly the same output."
      },
      {
        "id": "B",
        "text": "Users can interact with software in natural language."
      },
      {
        "id": "C",
        "text": "Generated facts never need to be checked by a person."
      },
      {
        "id": "D",
        "text": "One model can support many different tasks by changing the prompt."
      },
      {
        "id": "E",
        "text": "The reasoning behind each answer is fully transparent to auditors."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Adaptability across tasks and a natural language interface are recognized strengths. Identical outputs, full transparency, and no need for checking are not.",
    "whyWrong": {
      "A": "Generative output is probabilistic and can differ between runs, so this is not true.",
      "C": "Hallucination and outdated knowledge mean factual output still needs validation.",
      "E": "Interpretability is a known limitation of large models, not a strength."
    },
    "services": [],
    "tags": [
      "genai-advantages",
      "genai-limitations"
    ]
  },
  {
    "id": "t2-2.2-05",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "In generative AI, what is a hallucination?",
    "choices": [
      {
        "id": "A",
        "text": "The model gives different wording each time it receives the same prompt."
      },
      {
        "id": "B",
        "text": "The model declines to answer because a safety filter was triggered."
      },
      {
        "id": "C",
        "text": "The model cannot show which internal weights produced an answer."
      },
      {
        "id": "D",
        "text": "The model produces fluent, confident output that is false or invented."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "A hallucination is plausible-sounding output that is not true or not grounded in real data, such as a nonexistent citation.",
    "whyWrong": {
      "A": "Varying wording for the same prompt is nondeterminism.",
      "B": "A refusal from a safety filter is guardrail behavior, not fabricated content.",
      "C": "Being unable to explain an output is a lack of interpretability."
    },
    "services": [],
    "tags": [
      "hallucination",
      "genai-limitations"
    ]
  },
  {
    "id": "t2-2.2-06",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A QA engineer sends the identical prompt to the same model version twice and receives two differently worded answers. What is the most likely explanation?",
    "choices": [
      {
        "id": "A",
        "text": "The model samples each token from a probability distribution, so outputs can vary."
      },
      {
        "id": "B",
        "text": "The model weights were retrained between the two requests."
      },
      {
        "id": "C",
        "text": "The model hallucinated the first answer and corrected itself in the second."
      },
      {
        "id": "D",
        "text": "The prompt was silently truncated because it exceeded the context window."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Nondeterminism comes from probabilistic token sampling. Lowering temperature reduces the variation but does not guarantee identical output.",
    "whyWrong": {
      "B": "The scenario says the model version is unchanged, and deployed models are not retrained between calls.",
      "C": "Different wording does not mean either answer is false. This is variation, not fabrication.",
      "D": "Truncation of an identical prompt would happen identically both times, so it would not explain differing outputs."
    },
    "services": [],
    "tags": [
      "nondeterminism",
      "genai-limitations"
    ]
  },
  {
    "id": "t2-2.2-07",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A bank wants to use a large language model to approve or decline loan applications. Regulators require a clear, traceable reason for every decision. Which generative AI limitation is the main concern?",
    "choices": [
      {
        "id": "A",
        "text": "Hallucination, because the model may invent facts about the applicant"
      },
      {
        "id": "B",
        "text": "Limited interpretability, because it is hard to explain a specific output"
      },
      {
        "id": "C",
        "text": "High latency, because loan decisions must be returned very quickly"
      },
      {
        "id": "D",
        "text": "Short context length, because applications are usually very long"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The keyword is a required explanation for each decision. Large models behave like black boxes, which is the interpretability limitation.",
    "whyWrong": {
      "A": "Hallucination is about false output. The requirement here is traceable reasoning, and the model can read the form.",
      "C": "Nothing in the scenario mentions a response-time requirement.",
      "D": "Nothing in the scenario says applications exceed a context window."
    },
    "services": [],
    "tags": [
      "interpretability",
      "genai-limitations"
    ]
  },
  {
    "id": "t2-2.2-08",
    "domain": 2,
    "task": "2.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An internal HR chatbot sometimes states out-of-date leave rules and occasionally invents policy details. Which TWO actions best reduce these inaccuracies? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Assume a larger model will remove all factual errors on its own."
      },
      {
        "id": "B",
        "text": "Ground answers in the current policy documents with retrieval augmented generation (RAG)."
      },
      {
        "id": "C",
        "text": "Raise the temperature so the model explores more varied answers."
      },
      {
        "id": "D",
        "text": "Add human review for answers that affect pay or employment decisions."
      },
      {
        "id": "E",
        "text": "Hide source references so employees do not question the answers."
      }
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "RAG supplies current, authoritative content, and human review catches remaining errors in high-impact answers.",
    "whyWrong": {
      "A": "Larger models still hallucinate and still have a training cutoff, so they do not remove errors.",
      "C": "A higher temperature increases randomness and tends to make fabrication more likely.",
      "E": "Removing sources makes errors harder to detect. Showing sources helps users verify answers."
    },
    "services": [],
    "tags": [
      "hallucination",
      "rag",
      "human-review"
    ]
  },
  {
    "id": "t2-2.2-09",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is NOT a recognized limitation of generative AI?",
    "choices": [
      {
        "id": "A",
        "text": "It can produce confident answers that are factually wrong."
      },
      {
        "id": "B",
        "text": "It can return different outputs for the same prompt."
      },
      {
        "id": "C",
        "text": "It needs a separate retrained model for every new task."
      },
      {
        "id": "D",
        "text": "It is difficult to explain why a particular output was produced."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Reuse across tasks through prompting is an advantage of foundation models, so needing a separate model per task is not a generative AI limitation.",
    "whyWrong": {
      "A": "This is hallucination, a well-known limitation.",
      "B": "This is nondeterminism, a recognized limitation.",
      "D": "This is limited interpretability, a recognized limitation."
    },
    "services": [],
    "tags": [
      "genai-limitations",
      "adaptability"
    ]
  },
  {
    "id": "t2-2.2-10",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An IDE vendor is adding inline code suggestions that must appear in a fraction of a second while the developer types. Quality only needs to be good enough for short completions. Which model selection approach fits best?",
    "choices": [
      {
        "id": "A",
        "text": "Use the most capable, largest model available to get the deepest reasoning."
      },
      {
        "id": "B",
        "text": "Use whichever model has the largest context window, regardless of speed."
      },
      {
        "id": "C",
        "text": "Use an image generation model because code is structured output."
      },
      {
        "id": "D",
        "text": "Use a smaller, faster model that meets the quality bar for short completions."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Latency is the deciding factor. Larger models tend to be slower, so pick the smallest model that meets quality needs for the task.",
    "whyWrong": {
      "A": "The largest model adds latency the interactive use case cannot tolerate, and its extra capability is not needed here.",
      "B": "Context size is not the constraint. Short completions need speed, not a huge window.",
      "C": "Image models produce pixels, not code, so they do not match the text modality needed."
    },
    "services": [],
    "tags": [
      "model-selection",
      "latency"
    ]
  },
  {
    "id": "t2-2.2-11",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A healthcare provider's policy requires that patient data be processed only inside the European Union. Which factor should be used first to narrow down the candidate models?",
    "choices": [
      {
        "id": "A",
        "text": "Availability in an approved EU Region with suitable data-handling terms"
      },
      {
        "id": "B",
        "text": "Which model has the highest score on a public general benchmark"
      },
      {
        "id": "C",
        "text": "Which model has the largest number of parameters in total"
      },
      {
        "id": "D",
        "text": "Which model is most widely discussed in the developer community online"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Data residency and compliance are hard constraints. A model that cannot run in an approved Region is ruled out regardless of its quality.",
    "whyWrong": {
      "B": "Benchmark scores matter for capability but cannot override a residency requirement.",
      "C": "Parameter count says nothing about where data is processed.",
      "D": "Popularity is not a selection criterion and does not satisfy compliance."
    },
    "services": [],
    "tags": [
      "model-selection",
      "compliance"
    ]
  },
  {
    "id": "t2-2.2-12",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A team needs a model that creates product images from text descriptions. Which model selection factor immediately rules out a text-only large language model?",
    "choices": [
      {
        "id": "A",
        "text": "Maximum context window size"
      },
      {
        "id": "B",
        "text": "Supported input and output modality"
      },
      {
        "id": "C",
        "text": "Price per input token processed"
      },
      {
        "id": "D",
        "text": "Time to first token in streaming"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Modality describes which kinds of data a model can take in and produce. A text-only model cannot output images.",
    "whyWrong": {
      "A": "Context window affects how much text fits in a request, not whether images can be produced.",
      "C": "Price may matter later but does not decide whether the capability exists.",
      "D": "Response speed is a performance factor and does not decide the output type."
    },
    "services": [],
    "tags": [
      "model-selection",
      "modality"
    ]
  },
  {
    "id": "t2-2.2-13",
    "domain": 2,
    "task": "2.2",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A support-ticket classifier handles millions of short requests per day. In evaluation on the team's own data, a mid-size model meets the accuracy target. Which TWO statements support choosing it over the largest available model? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Mid-size models cannot be evaluated on custom datasets."
      },
      {
        "id": "B",
        "text": "Larger models usually cost more per request and respond more slowly."
      },
      {
        "id": "C",
        "text": "Choose the smallest model that meets the quality bar when tested on your own data."
      },
      {
        "id": "D",
        "text": "Model size has no effect on cost at high request volumes."
      },
      {
        "id": "E",
        "text": "Larger models are always more accurate on every task, so the extra spend is justified."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Model complexity trades capability against cost and latency. At high volume, the smallest model that satisfies the evaluated quality target is the right balance.",
    "whyWrong": {
      "A": "Any model can be evaluated on a custom dataset, which is how the choice is validated.",
      "D": "Cost scales with usage, so size differences have a large effect at high volume.",
      "E": "Bigger is not always better. For a narrow task a smaller model can match accuracy at lower cost."
    },
    "services": [],
    "tags": [
      "model-selection",
      "cost",
      "model-complexity"
    ]
  },
  {
    "id": "t2-2.2-14",
    "domain": 2,
    "task": "2.2",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A firm wants to summarize 300-page reports in a single request, produce summaries in Japanese and Spanish, and keep all processing in Germany. Which THREE attributes should be checked first when shortlisting models? (Select THREE)",
    "choices": [
      {
        "id": "A",
        "text": "A context window large enough to hold an entire report plus the summary"
      },
      {
        "id": "B",
        "text": "The visual design of the provider's logo and documentation site"
      },
      {
        "id": "C",
        "text": "The number of GPUs the provider operates worldwide"
      },
      {
        "id": "D",
        "text": "Support for Japanese and Spanish at the required quality"
      },
      {
        "id": "E",
        "text": "Maximum resolution of images the model can generate"
      },
      {
        "id": "F",
        "text": "Availability of the model in an approved German Region"
      }
    ],
    "answer": [
      "A",
      "D",
      "F"
    ],
    "explanation": "Each stated requirement maps to a selection factor: input length to context window, languages to multilingual capability, and location to Region availability and compliance.",
    "whyWrong": {
      "B": "Branding has no bearing on whether a model satisfies the requirements.",
      "C": "Provider hardware totals do not determine fit for length, language, or residency.",
      "E": "The task produces text summaries, so image resolution is irrelevant."
    },
    "services": [],
    "tags": [
      "model-selection",
      "context-window",
      "compliance"
    ]
  },
  {
    "id": "t2-2.2-15",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which business metric compares the value a generative AI project delivers with what the project costs?",
    "choices": [
      {
        "id": "A",
        "text": "Accuracy on a benchmark"
      },
      {
        "id": "B",
        "text": "Return on investment"
      },
      {
        "id": "C",
        "text": "Perplexity on test text"
      },
      {
        "id": "D",
        "text": "Customer conversion rate"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "ROI relates the value gained to the cost of getting it, which makes it the headline number for justifying spend.",
    "whyWrong": {
      "A": "Accuracy measures answer correctness, a model-quality measure, not value against cost.",
      "C": "Perplexity is a technical language-model measure and says nothing about business cost.",
      "D": "Conversion rate measures the share of users who complete a goal, not value relative to spend."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "roi"
    ]
  },
  {
    "id": "t2-2.2-16",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A travel site adds a generative AI trip-planning assistant. Leadership wants to know whether the assistant leads more visitors to complete a booking. Which metric should the team track?",
    "choices": [
      {
        "id": "A",
        "text": "Tickets resolved per support agent per hour"
      },
      {
        "id": "B",
        "text": "Size of the model's context window"
      },
      {
        "id": "C",
        "text": "Perplexity on a held-out test set"
      },
      {
        "id": "D",
        "text": "Conversion rate"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Conversion rate is the share of visitors who complete a desired action such as a purchase or booking, which matches the stated goal of completing a booking.",
    "whyWrong": {
      "A": "Agent throughput is a support efficiency measure and says nothing about bookings.",
      "B": "Context window is a capability limit, unrelated to customer outcomes.",
      "C": "Perplexity is a model-quality measure and does not show whether visitors book."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "conversion-rate"
    ]
  },
  {
    "id": "t2-2.2-17",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A streaming service uses generative AI to personalize recommendations, hoping subscribers stay longer and generate more total revenue across their whole relationship with the service. Which metric best captures this goal?",
    "choices": [
      {
        "id": "A",
        "text": "Average revenue per user for a single month"
      },
      {
        "id": "B",
        "text": "Conversion rate on the sign-up page"
      },
      {
        "id": "C",
        "text": "Customer lifetime value"
      },
      {
        "id": "D",
        "text": "Average handle time per support call"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Total expected revenue from a customer over the whole relationship is customer lifetime value, which retention-focused features aim to increase.",
    "whyWrong": {
      "A": "ARPU is revenue divided by users over a period. It does not capture long-term retention across the relationship.",
      "B": "Sign-up conversion measures acquisition, not how long subscribers stay or what they spend over time.",
      "D": "Handle time is a support efficiency metric and is unrelated to revenue from subscribers."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "customer-lifetime-value"
    ]
  },
  {
    "id": "t2-2.2-18",
    "domain": 2,
    "task": "2.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A contact center deploys generative AI to draft replies for human agents. Which TWO metrics best show efficiency gains from this deployment? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Average handle time per ticket"
      },
      {
        "id": "B",
        "text": "Size of the context window"
      },
      {
        "id": "C",
        "text": "Tickets resolved per agent per hour"
      },
      {
        "id": "D",
        "text": "Number of parameters in the model"
      },
      {
        "id": "E",
        "text": "Perplexity on a held-out test set"
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Efficiency is time or effort saved per task. Handle time and throughput per agent show that directly.",
    "whyWrong": {
      "B": "Context window is a capability limit, not an outcome measure.",
      "D": "Parameter count is a model property and does not show saved time.",
      "E": "Perplexity is a model-quality measure, not a business efficiency measure."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "efficiency"
    ]
  },
  {
    "id": "t2-2.2-19",
    "domain": 2,
    "task": "2.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company plans a single internal assistant for legal, HR, engineering, and finance questions. Which evaluation approach best reflects whether the model meets this business need?",
    "choices": [
      {
        "id": "A",
        "text": "Measure answer quality on representative tasks from every one of those domains"
      },
      {
        "id": "B",
        "text": "Report the top score on one well-known benchmark from a single domain"
      },
      {
        "id": "C",
        "text": "Measure average response latency across all requests and ignore content"
      },
      {
        "id": "D",
        "text": "Tune and test using only the department with the most users"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A general-purpose assistant must be judged on cross-domain performance, meaning how well it works across different subject areas, not on a single narrow measure.",
    "whyWrong": {
      "B": "A strong result in one domain does not show the model performs well in the others.",
      "C": "Latency matters for experience but says nothing about answer quality in any domain.",
      "D": "Testing one department hides weakness in the others, which the shared assistant must also serve."
    },
    "services": [],
    "tags": [
      "business-metrics",
      "cross-domain-performance"
    ]
  }
);
