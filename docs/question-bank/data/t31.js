window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t3-3.1-01",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A retailer wants an assistant that accepts a customer's photo of a damaged product plus a typed question, and replies with text. Which model selection criterion should the team apply FIRST?",
    "choices": [
      {
        "id": "A",
        "text": "Whether the model can be pre-trained from scratch on the retailer's data"
      },
      {
        "id": "B",
        "text": "Whether the model accepts image input as well as text"
      },
      {
        "id": "C",
        "text": "Whether the model supports the largest possible output length"
      },
      {
        "id": "D",
        "text": "Whether the model has the lowest price per token of any text model"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Modality is a hard filter: a text-only model cannot read the photo. Once the input types are covered, cost, latency and length can be compared among the multimodal candidates.",
    "whyWrong": {
      "A": "Pre-training from scratch is the most expensive path and is not a selection criterion for this need.",
      "C": "Output length matters for long answers, but the replies here are short and a text-only model would still fail on the photo.",
      "D": "A cheap text-only model cannot process the image, so low price does not help until modality is satisfied."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "model-selection",
      "modality"
    ]
  },
  {
    "id": "t3-3.1-02",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An email client adds an inline autocomplete that suggests the next few words while the user types. Each suggestion must appear in a fraction of a second and traffic is very high. Which model choice fits best?",
    "choices": [
      {
        "id": "A",
        "text": "The largest available model, because bigger models always give the best user experience"
      },
      {
        "id": "B",
        "text": "A model pre-trained from scratch so that it learns the exact email vocabulary"
      },
      {
        "id": "C",
        "text": "A smaller, lower-latency model, accepting some loss in reasoning depth for this simple task"
      },
      {
        "id": "D",
        "text": "Any model with a very high maximum output token setting"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Model size trades reasoning quality against latency and cost. A short, simple completion task with strict latency and high volume favours a smaller model.",
    "whyWrong": {
      "A": "Larger models reason better but respond more slowly and cost more, which breaks the latency target for a simple task.",
      "B": "Pre-training from scratch is the highest-cost option and does not address latency.",
      "D": "A higher output cap does not speed anything up. Autocomplete needs short outputs, not longer ones."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "model-selection",
      "latency"
    ]
  },
  {
    "id": "t3-3.1-03",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A company will serve a support chatbot in Japanese, Portuguese and German. What is the correct way to treat this requirement when choosing a foundation model?",
    "choices": [
      {
        "id": "A",
        "text": "Confirm the model supports each language and test answer quality in each"
      },
      {
        "id": "B",
        "text": "Assume every foundation model performs equally well in every language"
      },
      {
        "id": "C",
        "text": "Lower the temperature so the model produces each language more accurately"
      },
      {
        "id": "D",
        "text": "Choose a model with the largest context window, since it covers more languages"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Multilingual support is a selection criterion. Supported languages and the quality in each differ between models, so verify both before committing.",
    "whyWrong": {
      "B": "Language coverage and quality vary between models, so the assumption is unsafe.",
      "C": "Temperature controls randomness, not language ability.",
      "D": "Context window sets how much text fits in a request. It says nothing about which languages are supported."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "model-selection",
      "multilingual"
    ]
  },
  {
    "id": "t3-3.1-04",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A summarization feature works for short contracts but returns an error on the longest 300-page contracts. What is the most likely cause?",
    "choices": [
      {
        "id": "A",
        "text": "The temperature is set too high for long documents"
      },
      {
        "id": "B",
        "text": "The model does not accept text, which is a modality mismatch"
      },
      {
        "id": "C",
        "text": "The model is not multilingual enough for the contract language"
      },
      {
        "id": "D",
        "text": "The prompt plus the expected output exceeds the model's context window"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "The context window caps input plus output tokens. A request that fails only on the largest inputs points to a length limit, so use a model with a larger window or split the document.",
    "whyWrong": {
      "A": "Temperature changes randomness of sampling. It does not make a long input fail.",
      "B": "Short contracts work, so the model clearly accepts text.",
      "C": "A language gap would affect short contracts too, not only the longest ones."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "model-selection",
      "context-window"
    ]
  },
  {
    "id": "t3-3.1-05",
    "domain": 3,
    "task": "3.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO workloads would benefit most from prompt caching on Amazon Bedrock? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Each request is a brand-new, short prompt with no shared content"
      },
      {
        "id": "B",
        "text": "A creative-writing tool that needs more varied output from the same prompt"
      },
      {
        "id": "C",
        "text": "A job that needs to reduce the number of tokens the model generates"
      },
      {
        "id": "D",
        "text": "Hundreds of user questions that each reuse the same 50-page policy document at the start of the prompt"
      },
      {
        "id": "E",
        "text": "A chat assistant that sends the same long system prompt and tool descriptions with every turn"
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "Prompt caching reuses a long, repeated prompt prefix, which cuts cost and latency when many calls share the same leading content.",
    "whyWrong": {
      "A": "With no shared prefix there is nothing to reuse, so caching gives no benefit.",
      "B": "Output variety is controlled by inference parameters such as temperature, not by caching.",
      "C": "Caching affects input processing, not how many tokens are generated. Output length is capped by the maximum tokens setting."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "prompt-caching",
      "cost"
    ]
  },
  {
    "id": "t3-3.1-06",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which inference setting should be lowered to make a model's answers to the same factual question more consistent from one call to the next?",
    "choices": [
      {
        "id": "A",
        "text": "Maximum output tokens"
      },
      {
        "id": "B",
        "text": "Temperature"
      },
      {
        "id": "C",
        "text": "Context window size"
      },
      {
        "id": "D",
        "text": "Number of embedding dimensions"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Temperature controls the randomness of token sampling. Values near 0 make output focused and repeatable, which suits factual or extraction tasks.",
    "whyWrong": {
      "A": "Maximum output tokens only caps response length. It does not change how tokens are chosen.",
      "C": "The context window is a fixed property of the model, not a sampling setting.",
      "D": "Embedding dimensions relate to vector search, not to text generation randomness."
    },
    "services": [],
    "tags": [
      "inference-parameters",
      "temperature"
    ]
  },
  {
    "id": "t3-3.1-07",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Users report that the assistant's answers regularly stop in the middle of a sentence. The prompts and the model have not changed. What is the most likely cause?",
    "choices": [
      {
        "id": "A",
        "text": "The maximum output tokens setting is lower than the answers being generated"
      },
      {
        "id": "B",
        "text": "The temperature is too low, so the model cannot finish its sentences"
      },
      {
        "id": "C",
        "text": "The knowledge base was not synced after the most recent document update"
      },
      {
        "id": "D",
        "text": "The model is not multilingual enough to finish the sentences"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Maximum tokens is a hard cap on generated output. When it is smaller than the natural answer, generation is cut off mid-sentence.",
    "whyWrong": {
      "B": "Low temperature makes sampling more focused. It does not truncate output.",
      "C": "A stale index causes outdated or missing facts, not truncated sentences.",
      "D": "Language limits would cause poor wording, not a consistent cutoff partway through answers."
    },
    "services": [],
    "tags": [
      "inference-parameters",
      "max-tokens"
    ]
  },
  {
    "id": "t3-3.1-08",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is NOT an effect of inference parameters on a foundation model's responses?",
    "choices": [
      {
        "id": "A",
        "text": "A lower temperature makes outputs more predictable"
      },
      {
        "id": "B",
        "text": "A lower maximum output tokens setting can shorten or truncate responses"
      },
      {
        "id": "C",
        "text": "A lower Top K narrows the set of candidate tokens considered for sampling"
      },
      {
        "id": "D",
        "text": "A higher temperature teaches the model new facts about the company"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Inference parameters change how the model samples and how long it may write. They never change what the model knows. New facts need RAG or training.",
    "whyWrong": {
      "A": "This is a real effect. Lower temperature makes sampling more focused and repeatable.",
      "B": "This is a real effect. Maximum tokens is a hard cap on output length.",
      "C": "This is a real effect. Top K limits sampling to the K most likely tokens."
    },
    "services": [],
    "tags": [
      "inference-parameters",
      "temperature"
    ]
  },
  {
    "id": "t3-3.1-09",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which statement best defines Retrieval Augmented Generation (RAG)?",
    "choices": [
      {
        "id": "A",
        "text": "Retraining a foundation model on new documents so that it memorizes them"
      },
      {
        "id": "B",
        "text": "Reducing a large model into a smaller one that imitates its answers"
      },
      {
        "id": "C",
        "text": "Retrieving relevant passages from external data and adding them to the prompt"
      },
      {
        "id": "D",
        "text": "Raising the temperature so the model draws on a wider range of its training data"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "RAG fetches relevant content from your own data sources at query time and supplies it as context, so answers are grounded in current information without changing the model's weights.",
    "whyWrong": {
      "A": "That describes training or fine-tuning, which changes model weights. RAG leaves them unchanged.",
      "B": "That describes model distillation.",
      "D": "Temperature affects randomness only. It does not retrieve any external data."
    },
    "services": [],
    "tags": [
      "rag"
    ]
  },
  {
    "id": "t3-3.1-10",
    "domain": 3,
    "task": "3.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A team points Amazon Bedrock Knowledge Bases at an Amazon S3 bucket of product manuals. Which TWO tasks does the managed RAG workflow perform for them? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Fine-tunes the foundation model on the manuals so it memorizes them"
      },
      {
        "id": "B",
        "text": "Detects and blocks harmful content in the manuals before they are stored"
      },
      {
        "id": "C",
        "text": "Retrieves the most relevant chunks for a question so they can be added to the prompt"
      },
      {
        "id": "D",
        "text": "Raises the model's temperature so answers cover more of the manuals"
      },
      {
        "id": "E",
        "text": "Splits the documents into chunks, converts them to embeddings and stores them in a vector store"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Knowledge Bases automates ingestion (chunking, embedding, storing vectors) and query-time retrieval, so you do not build the RAG pipeline yourself.",
    "whyWrong": {
      "A": "Knowledge Bases does not change model weights. RAG supplies context at query time instead.",
      "B": "Content filtering is the job of Amazon Bedrock Guardrails, not of the ingestion pipeline.",
      "D": "Temperature is an inference setting that the application chooses. It is not part of the retrieval workflow."
    },
    "services": [
      "Amazon Bedrock",
      "Amazon S3"
    ],
    "tags": [
      "rag",
      "knowledge-bases"
    ]
  },
  {
    "id": "t3-3.1-11",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A travel company's assistant must quote hotel policies and room rates that change several times a week. The answers must come from the latest private documents. What is the most appropriate approach?",
    "choices": [
      {
        "id": "A",
        "text": "Fine-tune the model after every change so that it memorizes the latest policies"
      },
      {
        "id": "B",
        "text": "Use RAG so that current documents are retrieved and supplied at question time"
      },
      {
        "id": "C",
        "text": "Pre-train a new foundation model on the policy documents"
      },
      {
        "id": "D",
        "text": "Lower the temperature to 0 so that the model stays accurate as policies change"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Fresh, private and frequently changing data is the classic RAG case. Updating the index is cheaper and faster than retraining, and the model reads the latest content on each call.",
    "whyWrong": {
      "A": "Repeated fine-tuning is slow and costly, and answers are stale between training runs.",
      "C": "Pre-training from scratch is the most expensive option and would be stale immediately.",
      "D": "Temperature affects randomness only. A model cannot become accurate about facts it was never given."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "rag",
      "customization"
    ]
  },
  {
    "id": "t3-3.1-12",
    "domain": 3,
    "task": "3.1",
    "type": "multi",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which TWO AWS services can store embeddings for vector search, as named in the AIF-C01 exam guide? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Athena"
      },
      {
        "id": "B",
        "text": "Amazon Neptune"
      },
      {
        "id": "C",
        "text": "Amazon Polly"
      },
      {
        "id": "D",
        "text": "Amazon QuickSight"
      },
      {
        "id": "E",
        "text": "Amazon OpenSearch Service"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "The exam guide names Amazon OpenSearch Service, Amazon Aurora, Amazon Neptune and Amazon RDS for PostgreSQL as services that help store embeddings in vector databases.",
    "whyWrong": {
      "A": "Athena runs SQL queries over data in S3. It is not a vector database.",
      "C": "Polly converts text to speech and does not store embeddings.",
      "D": "QuickSight is a business intelligence and dashboard service, not a vector store."
    },
    "services": [
      "Amazon OpenSearch Service",
      "Amazon Neptune",
      "Amazon Polly"
    ],
    "tags": [
      "vector-stores",
      "embeddings"
    ]
  },
  {
    "id": "t3-3.1-13",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A company keeps all customer and order data in Amazon Aurora PostgreSQL and wants to add semantic search over product descriptions. It wants to avoid running a new database. Which option fits best?",
    "choices": [
      {
        "id": "A",
        "text": "Store the embeddings in the existing Aurora PostgreSQL cluster with pgvector"
      },
      {
        "id": "B",
        "text": "Migrate the product data to Amazon Neptune and store the embeddings there"
      },
      {
        "id": "C",
        "text": "Stand up a separate Amazon OpenSearch Service domain and sync the data to it"
      },
      {
        "id": "D",
        "text": "Fine-tune a model on the descriptions so no vector search is needed"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Aurora PostgreSQL and RDS for PostgreSQL support vector storage and similarity search through pgvector, so embeddings can sit beside the relational data without a new system.",
    "whyWrong": {
      "B": "Neptune is a graph database suited to relationships between entities, and the move adds a new system.",
      "C": "OpenSearch Service works for vectors, but it is a new database to run and keep in sync, which the company wants to avoid.",
      "D": "Fine-tuning changes model behavior. It does not provide search over the product catalog."
    },
    "services": [
      "Amazon Aurora"
    ],
    "tags": [
      "vector-stores",
      "pgvector"
    ]
  },
  {
    "id": "t3-3.1-14",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "Which ordering lists the approaches to adapting a foundation model from the lowest typical cost to the highest?",
    "choices": [
      {
        "id": "A",
        "text": "RAG, in-context learning, fine-tuning, pre-training"
      },
      {
        "id": "B",
        "text": "In-context learning, fine-tuning, RAG, pre-training"
      },
      {
        "id": "C",
        "text": "Fine-tuning, in-context learning, RAG, pre-training"
      },
      {
        "id": "D",
        "text": "In-context learning, RAG, fine-tuning, pre-training"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "In-context learning changes only the prompt, so it has no training cost. RAG adds a vector store and ingestion. Fine-tuning needs labeled data and a training job. Pre-training from scratch is the most expensive.",
    "whyWrong": {
      "A": "RAG needs retrieval infrastructure, while in-context learning needs none, so RAG is not the cheapest.",
      "B": "RAG avoids any training, so it costs less than fine-tuning, which needs a training job and labeled data.",
      "C": "Fine-tuning requires training and is more costly than both in-context learning and RAG."
    },
    "services": [],
    "tags": [
      "customization",
      "cost-tradeoffs"
    ]
  },
  {
    "id": "t3-3.1-15",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A large model classifies millions of support emails per day with excellent accuracy, but inference cost and latency are too high. The company wants close to the same quality from a cheaper, faster model. Which approach best fits?",
    "choices": [
      {
        "id": "A",
        "text": "Add RAG so that the large model receives more context for each email"
      },
      {
        "id": "B",
        "text": "Continue pre-training the large model on unlabeled support emails"
      },
      {
        "id": "C",
        "text": "Use distillation, with the large model as teacher and a smaller student"
      },
      {
        "id": "D",
        "text": "Raise the temperature on the large model so that it responds faster"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Distillation transfers the behavior of a large teacher model to a smaller student. It costs effort up front but lowers inference cost and latency afterwards while keeping quality close.",
    "whyWrong": {
      "A": "RAG adds context and tokens, which raises cost and latency on the large model.",
      "B": "Continued pre-training is a high-cost step that keeps the model large, so inference cost stays high.",
      "D": "Temperature changes randomness and has no effect on speed or price."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "distillation",
      "customization"
    ]
  },
  {
    "id": "t3-3.1-16",
    "domain": 3,
    "task": "3.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What is the role of an AI agent in a generative AI application?",
    "choices": [
      {
        "id": "A",
        "text": "It stores document embeddings so that similar passages can be found quickly"
      },
      {
        "id": "B",
        "text": "It breaks a goal into steps, calls tools and APIs, and repeats until done"
      },
      {
        "id": "C",
        "text": "It reduces a large model to a smaller one that costs less to run"
      },
      {
        "id": "D",
        "text": "It filters harmful input and output according to configured policies"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "An agent plans multi-step work and takes actions through tools such as APIs and knowledge bases, rather than only returning a single answer.",
    "whyWrong": {
      "A": "That describes a vector database, not an agent.",
      "C": "That describes model distillation.",
      "D": "That describes the role of Amazon Bedrock Guardrails."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "agents"
    ]
  },
  {
    "id": "t3-3.1-17",
    "domain": 3,
    "task": "3.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO business scenarios are the best fit for an AI agent rather than a plain model call? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Booking a trip by querying flight, hotel and payment systems in sequence"
      },
      {
        "id": "B",
        "text": "Handling an order request by checking status in an order API, then issuing a refund if the policy allows"
      },
      {
        "id": "C",
        "text": "Labeling a customer review as positive or negative"
      },
      {
        "id": "D",
        "text": "Writing a one-line summary of a single pasted article"
      },
      {
        "id": "E",
        "text": "Translating a single paragraph of text into French"
      }
    ],
    "answer": [
      "A",
      "B"
    ],
    "explanation": "Agents suit tasks that need several steps, decisions and calls to external systems. Single-turn text transformations need only a model call.",
    "whyWrong": {
      "C": "Sentiment labeling is a single classification step that does not need tools.",
      "D": "A one-shot summary needs no planning or external actions.",
      "E": "Translation is a single model call with no tools or steps."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "agents",
      "business-applications"
    ]
  }
);
