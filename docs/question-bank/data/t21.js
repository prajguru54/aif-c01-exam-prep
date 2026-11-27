window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t2-2.1-01",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "In the context of Amazon Bedrock pricing and limits, what is a token?",
    "choices": [
      {
        "id": "A",
        "text": "A credential that authenticates an application when it calls the model API."
      },
      {
        "id": "B",
        "text": "A unit of text, such as a word, part of a word, or punctuation mark, that a model reads or writes."
      },
      {
        "id": "C",
        "text": "A single numeric dimension inside the embedding vector produced for a document."
      },
      {
        "id": "D",
        "text": "One complete request that a user sends to the model and the reply that comes back."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Models process and produce text as tokens, and on-demand billing and the context window limit are both measured in tokens.",
    "whyWrong": {
      "A": "Authentication uses IAM credentials, not tokens in this sense. The model unit of text is a different concept.",
      "C": "Embedding dimensions are numbers in a vector. They are not the units of text a model reads and writes.",
      "D": "A request is made of many tokens. A token is far smaller than a full request and response."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "tokens",
      "genai-basics"
    ]
  },
  {
    "id": "t2-2.1-02",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Why would a team split a 300-page product manual into chunks before embedding it for retrieval?",
    "choices": [
      {
        "id": "A",
        "text": "To shrink the number of parameters in the model that will answer questions."
      },
      {
        "id": "B",
        "text": "To encrypt each section of the manual separately before it is stored."
      },
      {
        "id": "C",
        "text": "To fine-tune the model weights on each section of the manual in turn."
      },
      {
        "id": "D",
        "text": "To let retrieval return focused passages instead of one huge, unfocused document."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Chunking breaks long documents into smaller pieces so each embedding represents a focused passage and retrieval returns only relevant text.",
    "whyWrong": {
      "A": "Chunking changes the data, not the model. Parameter count is fixed by the model itself.",
      "B": "Encryption is a security control and is unrelated to splitting text for retrieval.",
      "C": "Chunking prepares text for embedding and retrieval. It does not update model weights."
    },
    "services": [],
    "tags": [
      "chunking",
      "rag"
    ]
  },
  {
    "id": "t2-2.1-03",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What does an embedding represent?",
    "choices": [
      {
        "id": "A",
        "text": "A numeric vector that captures the meaning of data, so similar items sit close together."
      },
      {
        "id": "B",
        "text": "A compressed copy of the original text that can be decoded back word for word."
      },
      {
        "id": "C",
        "text": "A list of the most frequent words found in a document, ranked by count."
      },
      {
        "id": "D",
        "text": "A set of rules that tells the model which topics it must refuse to discuss."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "An embedding is a vector of numbers. Distance between vectors measures similarity of meaning, which powers semantic search.",
    "whyWrong": {
      "B": "Embeddings are lossy numeric representations of meaning. They are not a reversible compression of the text.",
      "C": "A word-frequency list is a keyword technique and does not capture meaning.",
      "D": "Refusal rules are a guardrail or safety configuration, not an embedding."
    },
    "services": [],
    "tags": [
      "embeddings",
      "vectors"
    ]
  },
  {
    "id": "t2-2.1-04",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which feature of the transformer architecture lets an LLM decide which tokens in a sequence matter most to each other?",
    "choices": [
      {
        "id": "A",
        "text": "A fixed window that reads exactly one token at a time with no look-back."
      },
      {
        "id": "B",
        "text": "A decision tree that splits tokens on feature thresholds."
      },
      {
        "id": "C",
        "text": "An attention mechanism that weighs relationships between tokens."
      },
      {
        "id": "D",
        "text": "A clustering step that groups tokens without using any labels."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Attention is the core idea of the transformer. It weights how much each token should influence every other token.",
    "whyWrong": {
      "A": "Reading one token at a time with no look-back would lose context. Transformers do the opposite.",
      "B": "Decision trees are a classical ML method and are not part of the transformer architecture.",
      "D": "Clustering is an unsupervised technique and is not how a transformer relates tokens."
    },
    "services": [],
    "tags": [
      "transformer",
      "llm"
    ]
  },
  {
    "id": "t2-2.1-05",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which description best fits a multi-modal model?",
    "choices": [
      {
        "id": "A",
        "text": "A model that has more parameters than the typical language model."
      },
      {
        "id": "B",
        "text": "A model that can handle more than one data type, such as text together with images."
      },
      {
        "id": "C",
        "text": "A model that can serve requests from several customers at the same time."
      },
      {
        "id": "D",
        "text": "A model that is deployed to more than one AWS Region for resilience."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Modality means type of data. A multi-modal model accepts or produces more than one, for example an image plus a text question.",
    "whyWrong": {
      "A": "Size is about parameter count and does not say anything about the data types handled.",
      "C": "Serving many customers is multi-tenancy, which is a deployment property and not a modality.",
      "D": "Multi-Region deployment is about availability, not about the kinds of data a model processes."
    },
    "services": [],
    "tags": [
      "multi-modal",
      "foundation-models"
    ]
  },
  {
    "id": "t2-2.1-06",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which type of generative model creates an image by starting from random noise and removing that noise step by step, guided by a text prompt?",
    "choices": [
      {
        "id": "A",
        "text": "A diffusion model"
      },
      {
        "id": "B",
        "text": "A text-only transformer decoder"
      },
      {
        "id": "C",
        "text": "A decision tree ensemble"
      },
      {
        "id": "D",
        "text": "A k-means clustering model"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Iterative denoising from noise is the defining trait of diffusion models. Amazon Nova Canvas is an image model available in Amazon Bedrock.",
    "whyWrong": {
      "B": "A text-only transformer generates tokens of text. It does not denoise images.",
      "C": "Tree ensembles are classical models for tabular prediction and do not generate images.",
      "D": "K-means groups unlabeled data into clusters. It is not a generative image model."
    },
    "services": [
      "Amazon Bedrock",
      "Amazon Nova"
    ],
    "tags": [
      "diffusion-models",
      "image-generation"
    ]
  },
  {
    "id": "t2-2.1-07",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What is prompt engineering?",
    "choices": [
      {
        "id": "A",
        "text": "Retraining a model on a labeled dataset so that its weights change."
      },
      {
        "id": "B",
        "text": "Converting documents into vectors so they can be searched by meaning."
      },
      {
        "id": "C",
        "text": "Splitting long documents into smaller passages before they are indexed."
      },
      {
        "id": "D",
        "text": "Crafting the input to steer a model toward the desired output without changing it."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Prompt engineering shapes instructions, examples, and format in the input. The model itself is unchanged.",
    "whyWrong": {
      "A": "Changing weights with labeled data is fine-tuning, which is a different customization technique.",
      "B": "That describes creating embeddings.",
      "C": "That describes chunking."
    },
    "services": [],
    "tags": [
      "prompt-engineering",
      "genai-basics"
    ]
  },
  {
    "id": "t2-2.1-08",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which statement about foundation models (FMs) is NOT correct?",
    "choices": [
      {
        "id": "A",
        "text": "An FM is pre-trained on broad data and can be adapted to many different tasks."
      },
      {
        "id": "B",
        "text": "A large language model is one kind of FM that focuses on text."
      },
      {
        "id": "C",
        "text": "An FM has to be trained again from scratch for each new task it is used for."
      },
      {
        "id": "D",
        "text": "Some FMs accept inputs such as images in addition to text."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "The point of an FM is reuse. One pre-trained model is adapted by prompting, retrieval, or fine-tuning, not retrained from scratch per task.",
    "whyWrong": {
      "A": "This is the standard definition of an FM, so it is correct.",
      "B": "LLMs are text-focused FMs, so this is correct.",
      "D": "Multi-modal FMs exist, so this statement is correct."
    },
    "services": [],
    "tags": [
      "foundation-models",
      "llm"
    ]
  },
  {
    "id": "t2-2.1-09",
    "domain": 2,
    "task": "2.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO tasks are typical generative AI use cases rather than classical predictive ML tasks? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Labeling card transactions as fraud or not fraud from labeled tabular records."
      },
      {
        "id": "B",
        "text": "Forecasting next quarter's unit sales from historical numeric data."
      },
      {
        "id": "C",
        "text": "Summarizing long customer support transcripts into short case notes."
      },
      {
        "id": "D",
        "text": "Estimating a house price from square footage, location, and age."
      },
      {
        "id": "E",
        "text": "Translating product descriptions into several languages with natural phrasing."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Summarization and translation produce new text content, which is what GenAI is used for. The other tasks predict a number or a label from structured data.",
    "whyWrong": {
      "A": "Fraud labeling is classification on labeled tabular data, a classical ML task.",
      "B": "Forecasting a numeric value from history is a classical regression or time-series task.",
      "D": "Predicting a price from features is regression, not content generation."
    },
    "services": [],
    "tags": [
      "genai-use-cases",
      "summarization"
    ]
  },
  {
    "id": "t2-2.1-10",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Engineers want an AWS tool that applies generative AI to help them write, understand, and change code from inside their development environment. Which service fits?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Polly"
      },
      {
        "id": "B",
        "text": "Kiro"
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
      "B"
    ],
    "explanation": "Kiro is the AWS option the exam guide names for AI-assisted code generation and development.",
    "whyWrong": {
      "A": "Polly turns text into spoken audio and does not generate or edit code.",
      "C": "Lex builds conversational chatbots with voice and text interfaces. It is not a coding assistant.",
      "D": "Comprehend extracts insights such as entities and sentiment from text. It does not write code."
    },
    "services": [
      "Kiro"
    ],
    "tags": [
      "code-generation",
      "genai-use-cases"
    ]
  },
  {
    "id": "t2-2.1-11",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A marketing team needs original product images created from short text descriptions. Which option on AWS matches this need?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Transcribe, which converts speech in recordings into text."
      },
      {
        "id": "B",
        "text": "Amazon Translate, which converts text between languages."
      },
      {
        "id": "C",
        "text": "Amazon Comprehend, which finds entities and sentiment in text."
      },
      {
        "id": "D",
        "text": "Amazon Nova Canvas in Amazon Bedrock, an image generation model."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Generating new images from text prompts is image generation, a GenAI use case served by image models such as Amazon Nova Canvas.",
    "whyWrong": {
      "A": "Transcribe handles speech to text and produces no images.",
      "B": "Translate changes the language of text and produces no images.",
      "C": "Comprehend analyzes existing text and does not create images."
    },
    "services": [
      "Amazon Bedrock",
      "Amazon Nova",
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Comprehend"
    ],
    "tags": [
      "image-generation",
      "genai-use-cases"
    ]
  },
  {
    "id": "t2-2.1-12",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which sequence lists the stages of the foundation model lifecycle in the correct order?",
    "choices": [
      {
        "id": "A",
        "text": "Data selection, model selection, pre-training, fine-tuning, evaluation, deployment, feedback"
      },
      {
        "id": "B",
        "text": "Data selection, model selection, fine-tuning, pre-training, deployment, evaluation, feedback"
      },
      {
        "id": "C",
        "text": "Model selection, data selection, evaluation, pre-training, fine-tuning, feedback, deployment"
      },
      {
        "id": "D",
        "text": "Pre-training, data selection, model selection, deployment, fine-tuning, evaluation, feedback"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A model is first pre-trained broadly, then fine-tuned for a purpose, evaluated, deployed, and improved using feedback.",
    "whyWrong": {
      "B": "Fine-tuning needs an already pre-trained model, and evaluation must come before deployment.",
      "C": "Evaluation cannot come before the model has been trained, and feedback follows deployment.",
      "D": "Pre-training needs selected data first, and a model should be evaluated before it is deployed."
    },
    "services": [],
    "tags": [
      "fm-lifecycle"
    ]
  },
  {
    "id": "t2-2.1-13",
    "domain": 2,
    "task": "2.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO statements correctly describe stages of the foundation model lifecycle? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Pre-training is normally repeated by every application team before each deployment."
      },
      {
        "id": "B",
        "text": "Pre-training trains a model on very large, broad datasets so it learns general patterns."
      },
      {
        "id": "C",
        "text": "Fine-tuning starts from randomly initialized weights and uses no earlier training."
      },
      {
        "id": "D",
        "text": "The feedback stage happens before any data is selected for the model."
      },
      {
        "id": "E",
        "text": "Fine-tuning adapts an already pre-trained model using a smaller, task-specific dataset."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Pre-training builds general capability on broad data, usually done once by the model provider. Fine-tuning then specializes that model with a smaller dataset.",
    "whyWrong": {
      "A": "Pre-training is costly and is normally done once by the provider, not by each application team.",
      "C": "Fine-tuning builds on pre-trained weights. Starting from random weights would be pre-training.",
      "D": "Feedback comes after deployment and feeds into improving data and models."
    },
    "services": [],
    "tags": [
      "fm-lifecycle",
      "fine-tuning"
    ]
  },
  {
    "id": "t2-2.1-14",
    "domain": 2,
    "task": "2.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A chatbot on Amazon Bedrock with on-demand pricing has long, rambling answers, and its token bill keeps growing. Which TWO actions would most directly lower cost and response time? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Set a lower maximum output token limit for responses."
      },
      {
        "id": "B",
        "text": "Send every retrieved document in full with every request."
      },
      {
        "id": "C",
        "text": "Raise the temperature so the model produces shorter answers."
      },
      {
        "id": "D",
        "text": "Move to a larger model so that fewer calls are needed."
      },
      {
        "id": "E",
        "text": "Trim old conversation history before it is sent with each request."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "Cost scales with input and output tokens, and output tokens are usually priced higher. Capping output length and reducing input context both cut tokens and latency.",
    "whyWrong": {
      "B": "Sending more text raises input tokens and cost.",
      "C": "Temperature controls randomness, not length, and does not reduce token charges.",
      "D": "Larger models generally have a higher per-token rate and are slower."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "token-pricing",
      "cost-optimization"
    ]
  },
  {
    "id": "t2-2.1-15",
    "domain": 2,
    "task": "2.1",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "Which TWO statements about context windows and token-based pricing are correct? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Output tokens are free because the model creates them without any input."
      },
      {
        "id": "B",
        "text": "The context window sets the maximum number of tokens a model can handle at once."
      },
      {
        "id": "C",
        "text": "Sending larger prompts with more retrieved text increases input tokens, cost, and latency."
      },
      {
        "id": "D",
        "text": "A larger context window reduces the per-token price of each request."
      },
      {
        "id": "E",
        "text": "Input and output tokens are billed at the same rate for every on-demand model."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "The context window is a token limit, and every token in a prompt is processed and billed. More context means more cost and more time.",
    "whyWrong": {
      "A": "Generated tokens are billed as output tokens.",
      "D": "Window size is a capability limit. It does not lower the rate per token.",
      "E": "On-demand pricing lists separate input and output rates, and output is usually higher."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "token-pricing",
      "context-window"
    ]
  },
  {
    "id": "t2-2.1-16",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which statement best describes context engineering?",
    "choices": [
      {
        "id": "A",
        "text": "Adjusting a model's weights so that it learns a company's vocabulary."
      },
      {
        "id": "B",
        "text": "Lowering the temperature so that answers become more repeatable."
      },
      {
        "id": "C",
        "text": "Choosing and arranging everything placed in the model's context window per call."
      },
      {
        "id": "D",
        "text": "Splitting source documents into passages before they are stored in a vector index."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Context engineering decides what the model sees on each call: instructions, history, retrieved documents, tool results, memory, and examples.",
    "whyWrong": {
      "A": "Changing weights is fine-tuning, not context management.",
      "B": "Temperature is an inference parameter for randomness and does not choose context.",
      "D": "Chunking is one preparation step for retrieval. It is only a small part of context engineering."
    },
    "services": [],
    "tags": [
      "context-engineering"
    ]
  },
  {
    "id": "t2-2.1-17",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "An agent keeps giving wrong answers even though the team has reworded its system prompt many times. Tracing shows that by the fifth step the context is filled with raw tool output and old turns, and the relevant policy document is not included. What is the best next step?",
    "choices": [
      {
        "id": "A",
        "text": "Add more few-shot examples to the system prompt and reword the instructions once more."
      },
      {
        "id": "B",
        "text": "Manage what enters the context: summarize history, trim tool output, retrieve the policy."
      },
      {
        "id": "C",
        "text": "Raise the temperature so that the model explores more possible answers each step."
      },
      {
        "id": "D",
        "text": "Pre-train a new foundation model on the company's own policy documents."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "The failure is in what the model sees, not how the instruction is phrased. That is a context engineering problem, and prompt wording is only one part of it.",
    "whyWrong": {
      "A": "More prompt wording does not fix a window crowded with irrelevant content and missing the needed document.",
      "C": "Temperature adds randomness and cannot supply a missing policy document.",
      "D": "Pre-training a new model is far out of proportion to the problem and would not manage what is in each call."
    },
    "services": [],
    "tags": [
      "context-engineering",
      "prompt-engineering"
    ]
  },
  {
    "id": "t2-2.1-18",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Several agents in a company each need to call the same internal ticketing system, and the team is tired of building a separate custom connector per agent. Which approach lets them build the integration once and reuse it?",
    "choices": [
      {
        "id": "A",
        "text": "Increase the context window of each agent's model so it can hold more text."
      },
      {
        "id": "B",
        "text": "Fine-tune each agent's model on the ticketing system's data."
      },
      {
        "id": "C",
        "text": "Create embeddings of the ticketing system's API documentation."
      },
      {
        "id": "D",
        "text": "Expose the ticketing system as a Model Context Protocol (MCP) server."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "MCP is an open standard interface between agents and tools or data sources, so one integration can serve many agents.",
    "whyWrong": {
      "A": "A bigger window holds more text but does not connect an agent to a system.",
      "B": "Fine-tuning changes model behavior and does not give the agent a way to call live tools.",
      "C": "Embeddings help search documentation but do not provide a callable tool interface."
    },
    "services": [],
    "tags": [
      "mcp",
      "agentic-ai"
    ]
  },
  {
    "id": "t2-2.1-19",
    "domain": 2,
    "task": "2.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "In a multi-agent design, one agent receives the request, delegates sub-tasks to specialized agents, and then combines their results into a single answer. Which pattern is this?",
    "choices": [
      {
        "id": "A",
        "text": "A supervisor pattern with specialized collaborator agents"
      },
      {
        "id": "B",
        "text": "A single-agent loop with no delegation"
      },
      {
        "id": "C",
        "text": "A retrieval pipeline that ranks chunks by vector similarity"
      },
      {
        "id": "D",
        "text": "A batch inference job that runs prompts offline"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A supervisor coordinates and delegates work to specialized agents, then assembles the outcome. The key signal is delegation and combining results.",
    "whyWrong": {
      "B": "A single-agent loop has no other agents to delegate to.",
      "C": "A retrieval pipeline fetches relevant text and does not coordinate agents.",
      "D": "Batch inference is a pricing and execution mode for offline prompts, not an agent pattern."
    },
    "services": [],
    "tags": [
      "multi-agent",
      "agentic-ai"
    ]
  },
  {
    "id": "t2-2.1-20",
    "domain": 2,
    "task": "2.1",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "Which TWO statements correctly describe memory and tool use in agentic AI? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Short-term memory holds the current conversation so the agent can follow the thread."
      },
      {
        "id": "B",
        "text": "In tool use, the model runs the external function itself inside its own weights."
      },
      {
        "id": "C",
        "text": "Adding memory to an agent increases the parameter count of the underlying model."
      },
      {
        "id": "D",
        "text": "Long-term memory is erased automatically at the end of every single turn."
      },
      {
        "id": "E",
        "text": "In tool use, the model emits a structured call that the application executes and returns."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "Short-term memory covers the active conversation, while long-term memory persists across sessions. For tool use, the model requests a call and the surrounding application runs it.",
    "whyWrong": {
      "B": "Models do not run functions internally. The orchestrating application executes the call.",
      "C": "Memory is stored outside the model and fed into the context. Model parameters do not change.",
      "D": "Long-term memory exists to persist facts across sessions, so it is not wiped every turn."
    },
    "services": [],
    "tags": [
      "agent-memory",
      "tool-use"
    ]
  }
);
