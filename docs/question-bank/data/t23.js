window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t2-2.3-01",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A data science team must train a model on proprietary tabular data, pick the GPU instance types for training, and control how the trained model is hosted behind an endpoint. Which AWS service fits this need?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Bedrock, because it gives serverless access to foundation models through one API."
      },
      {
        "id": "B",
        "text": "Amazon Quick, because it lets business users ask questions about their data."
      },
      {
        "id": "C",
        "text": "Amazon SageMaker AI, because it is a managed platform to build, train and deploy your own models."
      },
      {
        "id": "D",
        "text": "Kiro, because it is an AI-assisted environment that helps developers write code."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Choosing instance types and training your own model with full control of the endpoint is the SageMaker AI use case. Bedrock is the serverless choice when you consume existing foundation models.",
    "whyWrong": {
      "A": "Bedrock hides the infrastructure. You do not choose training instance types or manage endpoints for your own tabular model.",
      "B": "Amazon Quick serves business users who want answers and dashboards from data. It is not a model training platform.",
      "D": "Kiro helps developers write software. It does not train or host machine learning models."
    },
    "services": [
      "Amazon SageMaker AI",
      "Amazon Bedrock"
    ],
    "tags": [
      "bedrock-vs-sagemaker",
      "service-selection"
    ]
  },
  {
    "id": "t2-2.3-02",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which statement best describes SageMaker JumpStart?",
    "choices": [
      {
        "id": "A",
        "text": "A hub of pre-trained and open source models and templates to deploy or fine-tune in SageMaker AI."
      },
      {
        "id": "B",
        "text": "A serverless API that sends requests to foundation models with no endpoint to manage."
      },
      {
        "id": "C",
        "text": "A business intelligence tool that builds dashboards for non-technical employees at work."
      },
      {
        "id": "D",
        "text": "An open source SDK for writing agent logic in a few lines of Python."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "JumpStart is the model and solution hub on the SageMaker AI side. You keep control of the endpoint and can fine-tune the model.",
    "whyWrong": {
      "B": "This describes Amazon Bedrock, which is serverless. JumpStart models are deployed to endpoints you control.",
      "C": "This describes Amazon Quick, which targets business users rather than model builders.",
      "D": "This describes Strands Agents, which is an agent SDK and not a model hub."
    },
    "services": [
      "Amazon SageMaker JumpStart"
    ],
    "tags": [
      "jumpstart",
      "service-selection"
    ]
  },
  {
    "id": "t2-2.3-03",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Business analysts want to ask natural-language questions about company data and get dashboards, without writing code or building a model. Which AWS offering is the best match?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon SageMaker AI"
      },
      {
        "id": "B",
        "text": "Amazon Quick"
      },
      {
        "id": "C",
        "text": "Strands Agents"
      },
      {
        "id": "D",
        "text": "Amazon Bedrock AgentCore"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Amazon Quick is the AI-powered assistant and business intelligence service for business users. The keywords are business users, dashboards and questions about company data.",
    "whyWrong": {
      "A": "SageMaker AI is a platform for building and training models. It is aimed at ML builders, not analysts who want ready answers.",
      "C": "Strands Agents is an SDK that developers use to write agents. It is not an end-user analytics tool.",
      "D": "AgentCore runs and secures agents that developers have built. It does not give analysts a dashboard experience."
    },
    "services": [
      "Amazon Quick"
    ],
    "tags": [
      "amazon-quick",
      "service-selection"
    ]
  },
  {
    "id": "t2-2.3-04",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is an AI-assisted development environment that helps developers build software using specifications and agents?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Quick"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker JumpStart"
      },
      {
        "id": "C",
        "text": "Amazon Bedrock AgentCore"
      },
      {
        "id": "D",
        "text": "Kiro"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Kiro is the AI coding environment. When the question is about AI helping developers write code, think Kiro.",
    "whyWrong": {
      "A": "Amazon Quick serves business users with answers and automation. It is not a developer coding environment.",
      "B": "JumpStart is a hub for deploying and fine-tuning models in SageMaker AI, not a tool for writing software.",
      "C": "AgentCore hosts and operates agents in production. It does not help developers author application code."
    },
    "services": [
      "Kiro"
    ],
    "tags": [
      "kiro",
      "service-selection"
    ]
  },
  {
    "id": "t2-2.3-05",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A Python team wants an open source toolkit to define an agent, its tools and its model in a few lines of code. They will decide later where to host it. What should they use?",
    "choices": [
      {
        "id": "A",
        "text": "Strands Agents, an open source SDK for building agents."
      },
      {
        "id": "B",
        "text": "Amazon Bedrock Guardrails, which filters harmful model output."
      },
      {
        "id": "C",
        "text": "SageMaker JumpStart, which provides pre-trained models and templates."
      },
      {
        "id": "D",
        "text": "Amazon Quick, which gives business users an AI assistant."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Strands Agents is the open source SDK for writing agent logic. The result can then run on AgentCore or elsewhere.",
    "whyWrong": {
      "B": "Guardrails applies safety policies to model input and output. It does not define an agent or its tools.",
      "C": "JumpStart supplies models to deploy or fine-tune. It is not an agent-building SDK.",
      "D": "Amazon Quick is an end-user assistant, not a developer toolkit for writing agents."
    },
    "services": [
      "Strands Agents"
    ],
    "tags": [
      "strands-agents",
      "agents"
    ]
  },
  {
    "id": "t2-2.3-06",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An agent written with an open source SDK works on a laptop. The team now needs to run it in production with managed runtime, memory, identity and observability, without managing servers. Which service should they choose?",
    "choices": [
      {
        "id": "A",
        "text": "Strands Agents SDK"
      },
      {
        "id": "B",
        "text": "Kiro, an AI coding IDE"
      },
      {
        "id": "C",
        "text": "Amazon SageMaker JumpStart"
      },
      {
        "id": "D",
        "text": "Amazon Bedrock AgentCore"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "AgentCore is the managed platform to run, secure and observe agents at scale. It is framework and model agnostic, so it can host an agent written with any SDK.",
    "whyWrong": {
      "A": "Strands Agents is the SDK the team already used to write the agent. It is not a hosting platform.",
      "B": "Kiro helps developers write code. It does not run production agents.",
      "C": "JumpStart deploys pre-trained models to endpoints. It has no agent runtime, memory or identity features."
    },
    "services": [
      "Amazon Bedrock AgentCore",
      "Strands Agents"
    ],
    "tags": [
      "agentcore",
      "agents"
    ]
  },
  {
    "id": "t2-2.3-07",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A company wants an AWS-built family of foundation models that it can call through Amazon Bedrock. Which should it choose?",
    "choices": [
      {
        "id": "A",
        "text": "Strands Agents"
      },
      {
        "id": "B",
        "text": "Kiro"
      },
      {
        "id": "C",
        "text": "Amazon Nova"
      },
      {
        "id": "D",
        "text": "Amazon Quick"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Amazon Nova is Amazon's own family of foundation models, offered through Bedrock.",
    "whyWrong": {
      "A": "Strands Agents is an SDK for building agents. It is not a foundation model family.",
      "B": "Kiro is a development environment. It is not a model that you call through Bedrock.",
      "D": "Amazon Quick is an assistant and BI service. It is not a model family offered on Bedrock."
    },
    "services": [
      "Amazon Nova",
      "Amazon Bedrock"
    ],
    "tags": [
      "amazon-nova",
      "bedrock"
    ]
  },
  {
    "id": "t2-2.3-08",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is NOT an advantage of building a GenAI application on Amazon Bedrock?",
    "choices": [
      {
        "id": "A",
        "text": "You can try models from several providers through one API."
      },
      {
        "id": "B",
        "text": "You must provision and patch GPU servers for every model you call."
      },
      {
        "id": "C",
        "text": "Features such as Knowledge Bases and Guardrails are available without building them yourself."
      },
      {
        "id": "D",
        "text": "You pay for what you use, with no idle model hardware on serverless options."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Bedrock is serverless, so you do not provision or patch GPU servers. That lower barrier to entry is one of its main advantages.",
    "whyWrong": {
      "A": "One API for many providers is a real Bedrock advantage. It makes switching models simple.",
      "C": "Managed RAG and safety features are real advantages that speed up delivery.",
      "D": "Usage-based pricing without idle hardware is a real cost advantage of serverless options."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "bedrock",
      "managed-service-benefits"
    ]
  },
  {
    "id": "t2-2.3-09",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A team is comparing two ways to build a prototype that will be used only a few hours each day. One option is to host an open source LLM on always-on GPU instances. The other is to call a model on Amazon Bedrock. What is the main cost reason to prefer Bedrock?",
    "choices": [
      {
        "id": "A",
        "text": "On-demand pricing is per token, so you do not pay for idle GPU capacity between uses."
      },
      {
        "id": "B",
        "text": "Bedrock charges a flat monthly fee regardless of how much the prototype is used."
      },
      {
        "id": "C",
        "text": "Bedrock models need no prompts or evaluation, which removes all development cost."
      },
      {
        "id": "D",
        "text": "Hosting your own model is not possible on AWS, so Bedrock is the only choice."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Serverless, token-based pricing means a lightly used prototype does not pay for idle accelerators. This is the cost-effectiveness advantage of a managed service.",
    "whyWrong": {
      "B": "On-demand Bedrock is billed by usage, not a flat monthly fee.",
      "C": "You still design prompts and evaluate outputs on Bedrock. No managed service removes that work.",
      "D": "You can host models on AWS, for example with SageMaker AI or Amazon EC2. The issue is idle cost, not possibility."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "cost-effectiveness",
      "token-pricing"
    ]
  },
  {
    "id": "t2-2.3-10",
    "domain": 2,
    "task": "2.3",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO statements describe how managed AWS GenAI services help a company meet its business objectives faster? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Managed services remove the need to review outputs for fairness and safety."
      },
      {
        "id": "B",
        "text": "Managed services make prompt design unnecessary for production workloads."
      },
      {
        "id": "C",
        "text": "Managed services guarantee higher accuracy than any model a company could build itself."
      },
      {
        "id": "D",
        "text": "A single API lets teams swap or compare models without rewriting the application."
      },
      {
        "id": "E",
        "text": "Built-in capabilities such as RAG and guardrails reduce the amount of custom code to write."
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "Prebuilt features and model choice through one API shorten time to market. They do not guarantee accuracy or remove responsibility for review.",
    "whyWrong": {
      "A": "Responsible AI review stays the customer's job. Guardrails help but do not replace oversight.",
      "B": "Prompts still shape results. Prompt engineering remains part of building on any model.",
      "C": "No service guarantees higher accuracy than every alternative. Quality depends on the use case and must be evaluated."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "speed-to-market",
      "managed-service-benefits"
    ]
  },
  {
    "id": "t2-2.3-11",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A security reviewer asks how Amazon Bedrock treats customer data. Which statement is correct?",
    "choices": [
      {
        "id": "A",
        "text": "Customer prompts are shared with the model provider so that it can improve its models."
      },
      {
        "id": "B",
        "text": "Customer prompts are used to retrain the base foundation models over time."
      },
      {
        "id": "C",
        "text": "Customer data is stored unencrypted unless the customer builds its own encryption layer."
      },
      {
        "id": "D",
        "text": "Customer prompts and outputs are not used to train the base models, and data is encrypted."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "On Bedrock, prompts and completions are not used to train the base models, and data is encrypted. Access is controlled through IAM.",
    "whyWrong": {
      "A": "Bedrock does not share customer prompts or outputs with model providers.",
      "B": "Customer inputs are not used to retrain the base models.",
      "C": "Bedrock encrypts data in transit and at rest. Customers can additionally use their own AWS KMS keys."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "data-privacy",
      "security"
    ]
  },
  {
    "id": "t2-2.3-12",
    "domain": 2,
    "task": "2.3",
    "type": "multi",
    "difficulty": "easy",
    "source": "generated",
    "stem": "An auditor asks a company to prove that its GenAI workload meets compliance requirements. Which TWO AWS services help? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "AWS Artifact, to download AWS compliance reports and agreements."
      },
      {
        "id": "B",
        "text": "Amazon Translate, to localize the compliance report."
      },
      {
        "id": "C",
        "text": "Amazon Polly, to read the audit report aloud."
      },
      {
        "id": "D",
        "text": "AWS CloudTrail, to record the API activity in the account."
      },
      {
        "id": "E",
        "text": "SageMaker JumpStart, to supply compliance-approved models."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "AWS Artifact gives on-demand access to AWS compliance reports such as SOC and ISO. CloudTrail provides an auditable record of API calls.",
    "whyWrong": {
      "B": "Translate converts text between languages. It does not provide compliance evidence.",
      "C": "Polly converts text to speech. It does not provide compliance evidence.",
      "E": "JumpStart is a model hub. It does not certify models or produce audit evidence."
    },
    "services": [
      "AWS Artifact",
      "AWS CloudTrail"
    ],
    "tags": [
      "compliance",
      "auditability"
    ]
  },
  {
    "id": "t2-2.3-13",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which Amazon Bedrock capability lets a company block harmful content and denied topics in both prompts and responses, whichever model is used?",
    "choices": [
      {
        "id": "A",
        "text": "Provisioned Throughput"
      },
      {
        "id": "B",
        "text": "Bedrock Guardrails"
      },
      {
        "id": "C",
        "text": "Cross-Region inference"
      },
      {
        "id": "D",
        "text": "Batch inference"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Guardrails provides configurable safeguards such as content filters and denied topics. This is the built-in safety feature.",
    "whyWrong": {
      "A": "Provisioned Throughput reserves capacity for a model. It has no content filtering.",
      "C": "Cross-Region inference spreads traffic across Regions for throughput. It does not filter content.",
      "D": "Batch inference runs large offline jobs at lower cost. It is a pricing and processing mode, not a safety control."
    },
    "services": [
      "Amazon Bedrock Guardrails"
    ],
    "tags": [
      "guardrails",
      "safety"
    ]
  },
  {
    "id": "t2-2.3-14",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A startup is launching a chatbot with traffic that nobody can predict yet, and it wants to avoid long-term commitments. Which Bedrock pricing approach fits best?",
    "choices": [
      {
        "id": "A",
        "text": "Provisioned Throughput with a long commitment term."
      },
      {
        "id": "B",
        "text": "Batch inference for all interactive requests."
      },
      {
        "id": "C",
        "text": "On-demand, billed per input and output token."
      },
      {
        "id": "D",
        "text": "Training a custom model to lower token costs."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "On-demand pricing is per token with no commitment. It suits variable or unknown traffic.",
    "whyWrong": {
      "A": "Provisioned Throughput is billed hourly whether or not it is used, which wastes money when traffic is unknown.",
      "B": "Batch results arrive later, so it cannot serve a live chatbot.",
      "D": "Customization adds training and hosting cost. It does not suit an uncertain early-stage workload."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "on-demand-pricing",
      "token-pricing"
    ]
  },
  {
    "id": "t2-2.3-15",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A company fine-tuned a foundation model in Amazon Bedrock and now wants to serve it to production users. What is the usual way to host the customized model for inference?",
    "choices": [
      {
        "id": "A",
        "text": "Batch inference, because customized models can only process offline jobs."
      },
      {
        "id": "B",
        "text": "AWS Artifact, which hosts models for regulated workloads."
      },
      {
        "id": "C",
        "text": "On-demand token pricing, because every Bedrock model uses it."
      },
      {
        "id": "D",
        "text": "Provisioned Throughput, which reserves dedicated capacity billed by the hour."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Customized models on Bedrock typically need Provisioned Throughput to be invoked. This adds hosting cost to the training cost.",
    "whyWrong": {
      "A": "Customized models are not limited to offline jobs, and batch cannot serve live users.",
      "B": "Artifact provides compliance reports. It does not host or run models.",
      "C": "Customized models are normally not served on shared on-demand token pricing, so this assumption is wrong."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "provisioned-throughput",
      "custom-models"
    ]
  },
  {
    "id": "t2-2.3-16",
    "domain": 2,
    "task": "2.3",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company is considering cross-Region inference for an Amazon Bedrock application that has traffic bursts. Which TWO statements describe the trade-offs? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Data may be processed in another Region, so residency rules need checking."
      },
      {
        "id": "B",
        "text": "It guarantees that data is processed only in the Region where the request was sent."
      },
      {
        "id": "C",
        "text": "It can raise throughput and resilience by routing requests across Regions."
      },
      {
        "id": "D",
        "text": "It requires buying Provisioned Throughput in every Region in the profile."
      },
      {
        "id": "E",
        "text": "It always lowers latency compared with calling a single Region."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Cross-Region inference helps absorb bursts and improves availability. The trade-off is that requests may be processed in a different Region within the profile's geography.",
    "whyWrong": {
      "B": "This is the opposite of the trade-off. Requests can be routed outside the originating Region.",
      "D": "Cross-Region inference works with on-demand usage. It does not require Provisioned Throughput in each Region.",
      "E": "Routing can add network distance, so lower latency is not guaranteed. The main gain is capacity and resilience."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "cross-region-inference",
      "regional-coverage"
    ]
  },
  {
    "id": "t2-2.3-17",
    "domain": 2,
    "task": "2.3",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "Prompting and RAG did not reach the required quality, so a company will fine-tune a model in Amazon Bedrock. Which TWO costs should it plan for? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "The cost of the model customization (training) job."
      },
      {
        "id": "B",
        "text": "A separate subscription to AWS Artifact to run the model."
      },
      {
        "id": "C",
        "text": "A mandatory charge for every prompt that includes retrieved context."
      },
      {
        "id": "D",
        "text": "Provisioned Throughput to host and serve the customized model."
      },
      {
        "id": "E",
        "text": "A per-token royalty paid to the original model provider on every request."
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Customizing a model has a training cost, and serving it typically requires Provisioned Throughput. That is why customization is the highest-cost, highest-effort option.",
    "whyWrong": {
      "B": "Artifact is a compliance report portal. It has no role in running a model.",
      "C": "Retrieved context is an input to RAG and is billed as ordinary input tokens. It is not a separate charge tied to fine-tuning.",
      "E": "Bedrock customization does not add a per-request royalty to the original provider as a separate cost line."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "custom-models",
      "provisioned-throughput"
    ]
  },
  {
    "id": "t2-2.3-18",
    "domain": 2,
    "task": "2.3",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Overnight, a company must classify two million archived support tickets with a foundation model. Results are needed by the next morning and cost should be as low as possible. What is the most suitable approach?",
    "choices": [
      {
        "id": "A",
        "text": "Reserve Provisioned Throughput and send the tickets in real time overnight."
      },
      {
        "id": "B",
        "text": "Use Bedrock batch inference, which is discounted for work that can wait."
      },
      {
        "id": "C",
        "text": "Send every ticket individually with on-demand calls from a web front end."
      },
      {
        "id": "D",
        "text": "Fine-tune a new model first, then call it on demand."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Large offline jobs with no latency requirement are the batch inference case. It is cheaper per token, and results are delivered later.",
    "whyWrong": {
      "A": "Reserved capacity bills hourly and is aimed at steady real-time load, which makes it more costly for a one-off bulk job.",
      "C": "On-demand works technically but pays the full interactive token price for work that does not need it.",
      "D": "Fine-tuning adds training and hosting cost, and the task does not need a custom model."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "batch-inference",
      "cost-tradeoffs"
    ]
  },
  {
    "id": "t2-2.3-19",
    "domain": 2,
    "task": "2.3",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company wants its GenAI application to stay available if one AWS Region has a problem. Which TWO considerations apply? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Regional coverage varies by model, so the chosen Regions must offer the models needed."
      },
      {
        "id": "B",
        "text": "Every foundation model is offered in every Region, so any Region pair works."
      },
      {
        "id": "C",
        "text": "Multi-Region redundancy improves availability but adds cost and operational complexity."
      },
      {
        "id": "D",
        "text": "Redundancy across Regions costs nothing extra because Bedrock is serverless."
      },
      {
        "id": "E",
        "text": "Adding Regions removes the need to consider data residency requirements."
      }
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Higher availability through redundancy costs more and is harder to run. Model availability differs by Region, so the design must use Regions that offer the required models.",
    "whyWrong": {
      "B": "Not every model is available in every Region, so Regional coverage must be checked.",
      "D": "Duplicated resources, data replication and extra capacity still add cost, even with serverless services.",
      "E": "Placing data in more Regions makes residency rules more important, not less."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "redundancy",
      "regional-coverage"
    ]
  }
);
