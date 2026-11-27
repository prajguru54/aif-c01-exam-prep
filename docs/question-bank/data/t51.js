window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t5-5.1-01",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A Lambda function must call exactly one Amazon Bedrock foundation model. Which setup follows the principle of least privilege?",
    "choices": [
      {
        "id": "A",
        "text": "Attach the AdministratorAccess managed policy to the function's execution role so calls never fail."
      },
      {
        "id": "B",
        "text": "Give the function's IAM role a policy that allows bedrock:InvokeModel only on that model's ARN."
      },
      {
        "id": "C",
        "text": "Create an IAM user with long-lived access keys and store the keys in the function's environment variables."
      },
      {
        "id": "D",
        "text": "Give the function's IAM role a policy that allows bedrock:* on all resources in the account."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Least privilege means granting only the actions and resources the workload needs. An IAM role scoped to one action on one model ARN does that, and roles avoid long-lived keys.",
    "whyWrong": {
      "A": "Administrator access grants every action on every resource, which is the opposite of least privilege.",
      "C": "Long-lived keys in environment variables are a credential-handling risk. A role gives temporary credentials instead.",
      "D": "Allowing every Bedrock action on every resource is far broader than the single invoke call the function needs."
    },
    "services": [
      "AWS IAM",
      "Amazon Bedrock"
    ],
    "tags": [
      "iam",
      "least-privilege"
    ]
  },
  {
    "id": "t5-5.1-02",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A compliance team requires that the S3 data used for model customization is encrypted with a key the company controls, rotated, and audited. Which approach meets this?",
    "choices": [
      {
        "id": "A",
        "text": "Rely on TLS between the client and S3 to protect the stored objects."
      },
      {
        "id": "B",
        "text": "Store the data in a bucket that has no public access policy."
      },
      {
        "id": "C",
        "text": "Compress the training files with a password before uploading them."
      },
      {
        "id": "D",
        "text": "Encrypt the data at rest with an AWS KMS customer managed key."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "AWS KMS customer managed keys give the customer control over key policy, rotation, and usage auditing for data at rest.",
    "whyWrong": {
      "A": "TLS protects data in transit only. It does not encrypt the objects once they are stored.",
      "B": "Blocking public access limits who can reach the bucket but is not encryption and gives no key control.",
      "C": "A password on a file is not a managed key. It offers no central rotation, key policy, or audit trail."
    },
    "services": [
      "AWS KMS",
      "Amazon S3"
    ],
    "tags": [
      "encryption",
      "kms"
    ]
  },
  {
    "id": "t5-5.1-03",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which AWS service discovers and classifies sensitive data such as personally identifiable information (PII) stored in Amazon S3 buckets?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Macie"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Glue DataBrew"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Amazon Macie uses machine learning and pattern matching to find and classify sensitive data in S3, for example before that data feeds a training set or knowledge base.",
    "whyWrong": {
      "B": "Inspector scans compute resources and container images for software vulnerabilities, not data content.",
      "C": "DataBrew profiles and cleans data for quality. It is not a sensitive-data discovery service for S3 buckets.",
      "D": "CloudWatch collects metrics and logs. It does not classify the contents of stored objects."
    },
    "services": [
      "Amazon Macie",
      "Amazon S3"
    ],
    "tags": [
      "macie",
      "pii"
    ]
  },
  {
    "id": "t5-5.1-04",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Application servers run in private subnets that have no internet gateway and no NAT gateway. They must call the Amazon Bedrock runtime API. What should the team create?",
    "choices": [
      {
        "id": "A",
        "text": "A NAT gateway in a public subnet with a restrictive route table."
      },
      {
        "id": "B",
        "text": "A gateway VPC endpoint for Amazon S3 attached to the route table."
      },
      {
        "id": "C",
        "text": "An interface VPC endpoint for Amazon Bedrock, powered by AWS PrivateLink."
      },
      {
        "id": "D",
        "text": "An internet gateway with a security group that allows only Bedrock addresses."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "PrivateLink interface endpoints give private connectivity from a VPC to a supported AWS service without sending traffic over the public internet.",
    "whyWrong": {
      "A": "A NAT gateway sends the traffic out to the internet, which the design explicitly rules out.",
      "B": "A gateway endpoint for S3 only covers S3 traffic. It does not provide a path to the Bedrock API.",
      "D": "An internet gateway exposes the subnets to the public internet path, and a security group does not change that."
    },
    "services": [
      "AWS PrivateLink",
      "Amazon VPC",
      "Amazon Bedrock"
    ],
    "tags": [
      "privatelink",
      "network-security"
    ]
  },
  {
    "id": "t5-5.1-05",
    "domain": 5,
    "task": "5.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A company uses foundation models through Amazon Bedrock. Under the AWS shared responsibility model, which responsibilities belong to the customer? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Maintaining the hypervisor under the managed service"
      },
      {
        "id": "B",
        "text": "Configuring guardrails and protecting the data placed in prompts"
      },
      {
        "id": "C",
        "text": "Patching the servers that host the foundation models"
      },
      {
        "id": "D",
        "text": "Securing the physical data centers that host the models"
      },
      {
        "id": "E",
        "text": "Defining IAM permissions that control who can invoke models"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "On a managed service such as Bedrock, AWS secures the infrastructure and model hosting. The customer controls access, its own data, and configuration such as guardrails.",
    "whyWrong": {
      "A": "The hypervisor and underlying platform are part of the infrastructure AWS runs.",
      "C": "Bedrock is managed, so AWS patches and operates the model hosts. This would be the customer's task only on self-managed compute.",
      "D": "Physical security of data centers is always AWS's side of the model."
    },
    "services": [
      "Amazon Bedrock",
      "AWS IAM"
    ],
    "tags": [
      "shared-responsibility",
      "iam"
    ]
  },
  {
    "id": "t5-5.1-06",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A RAG assistant returns the document names and passages that support each answer. What does this source citation primarily give the user?",
    "choices": [
      {
        "id": "A",
        "text": "A guarantee that the model never produces an incorrect statement."
      },
      {
        "id": "B",
        "text": "A way to trace and verify each claim against the original documents."
      },
      {
        "id": "C",
        "text": "Automatic retraining of the model on the cited documents."
      },
      {
        "id": "D",
        "text": "Encryption of the retrieved passages while they are in transit."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Source citation shows which documents back an answer, so readers can verify it. This supports trust and audits, though it does not make errors impossible.",
    "whyWrong": {
      "A": "Citations help detect errors but do not guarantee correctness. The model can still misread a source.",
      "C": "RAG retrieves documents at query time. Citing them does not change the model weights.",
      "D": "Encryption in transit is provided by TLS and is unrelated to citing sources."
    },
    "services": [
      "Amazon Bedrock Knowledge Bases"
    ],
    "tags": [
      "source-citation",
      "rag"
    ]
  },
  {
    "id": "t5-5.1-07",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A data governance team needs a central inventory of training datasets that records each dataset's schema, location, and owner, so analysts can find and trace data origins. Which AWS service fits?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon SageMaker Model Cards"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Amazon Macie"
      },
      {
        "id": "D",
        "text": "AWS Glue Data Catalog"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Data cataloging is an inventory of datasets with their metadata. The AWS Glue Data Catalog stores that metadata centrally, and it supports tracing where data came from.",
    "whyWrong": {
      "A": "Model Cards document a model's intended use, training data, and evaluation. They do not inventory datasets.",
      "B": "CloudTrail records API calls. It does not hold dataset schemas or ownership.",
      "C": "Macie finds sensitive data in S3. It is not a metadata catalog."
    },
    "services": [
      "AWS Glue"
    ],
    "tags": [
      "data-lineage",
      "data-catalog"
    ]
  },
  {
    "id": "t5-5.1-08",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which feature is designed to record a model's intended use, training data details, and evaluation results in one standard document?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon SageMaker Model Cards"
      },
      {
        "id": "B",
        "text": "AWS KMS key policies"
      },
      {
        "id": "C",
        "text": "Amazon VPC security groups"
      },
      {
        "id": "D",
        "text": "AWS Secrets Manager secrets"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "SageMaker Model Cards capture model documentation such as intended use, training data, and evaluation, which supports governance and audits.",
    "whyWrong": {
      "B": "Key policies control who can use encryption keys. They do not document a model.",
      "C": "Security groups filter network traffic and hold no model documentation.",
      "D": "Secrets Manager stores credentials such as API keys, not model descriptions."
    },
    "services": [
      "Amazon SageMaker AI"
    ],
    "tags": [
      "model-cards",
      "documentation"
    ]
  },
  {
    "id": "t5-5.1-09",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Before training, a data analyst wants to visually profile a dataset for missing values and inconsistent formats, then apply cleaning steps without writing code. Which service should the analyst use?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Macie"
      },
      {
        "id": "B",
        "text": "AWS Lake Formation"
      },
      {
        "id": "C",
        "text": "AWS Glue DataBrew"
      },
      {
        "id": "D",
        "text": "Amazon SageMaker Model Cards"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Assessing data quality means checking completeness, accuracy, and consistency. AWS Glue DataBrew profiles data and applies cleaning transforms through a visual interface.",
    "whyWrong": {
      "A": "Macie looks for sensitive data in S3. It does not assess completeness or format consistency.",
      "B": "Lake Formation manages permissions on data lakes. It is not a profiling and cleaning tool.",
      "D": "Model Cards document a finished model, not the quality of a dataset."
    },
    "services": [
      "AWS Glue DataBrew",
      "AWS Glue"
    ],
    "tags": [
      "data-quality",
      "data-engineering"
    ]
  },
  {
    "id": "t5-5.1-10",
    "domain": 5,
    "task": "5.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A bank wants to train a model on customer records without exposing raw identifiers to the data science team. Which techniques are privacy-enhancing technologies that meet this goal? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Add more customer records so identifiers become less noticeable"
      },
      {
        "id": "B",
        "text": "Tokenize account numbers before the data enters the training set"
      },
      {
        "id": "C",
        "text": "Pseudonymize names, keeping the mapping in a separate protected store"
      },
      {
        "id": "D",
        "text": "Copy the full customer table to the development account unchanged"
      },
      {
        "id": "E",
        "text": "Turn off audit logging on the training bucket to reduce stored data"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Tokenization and pseudonymization replace direct identifiers with substitutes, so people working with the data do not see the raw values. Masking, anonymization, and encryption are in the same family.",
    "whyWrong": {
      "A": "More records do not hide identifiers. Each record still carries its original values.",
      "D": "Copying the table unchanged exposes every raw identifier to more people.",
      "E": "Disabling audit logging removes oversight and does nothing to de-identify the data."
    },
    "services": [],
    "tags": [
      "privacy-enhancing-technologies",
      "data-engineering"
    ]
  },
  {
    "id": "t5-5.1-11",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A fraud-detection team keeps training data in Amazon S3. They worry that someone with write access could quietly alter or delete records (data poisoning) and that the change would go unnoticed. Which measure best protects data integrity?",
    "choices": [
      {
        "id": "A",
        "text": "Run Amazon Macie on the bucket to classify the stored objects by sensitivity."
      },
      {
        "id": "B",
        "text": "Enable S3 versioning, limit write access to a few roles, and review audit logs."
      },
      {
        "id": "C",
        "text": "Encrypt the bucket with a KMS key and give all data scientists write access."
      },
      {
        "id": "D",
        "text": "Register the dataset in the AWS Glue Data Catalog and publish its schema for analysts."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Integrity means preventing and detecting unauthorized change. Versioning allows recovery, narrow write permissions reduce who can poison data, and audit logs show what changed and who changed it.",
    "whyWrong": {
      "A": "Classification finds sensitive content but does not stop or reveal tampering.",
      "C": "Encryption protects confidentiality. Broad write access leaves the poisoning risk fully open.",
      "D": "A catalog entry describes the data. It neither blocks changes nor records them."
    },
    "services": [
      "Amazon S3",
      "AWS KMS",
      "AWS CloudTrail"
    ],
    "tags": [
      "data-integrity",
      "access-control"
    ]
  },
  {
    "id": "t5-5.1-12",
    "domain": 5,
    "task": "5.1",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A customer-support chatbot built on Amazon Bedrock can call internal tools. Attackers embed text such as \"ignore previous instructions\" in their messages. Which measures help defend against this prompt injection? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Set temperature to 0 so the model cannot be influenced by user text"
      },
      {
        "id": "B",
        "text": "Enable the prompt attack filter in Amazon Bedrock Guardrails"
      },
      {
        "id": "C",
        "text": "Put the system prompt and the API keys together in the prompt template"
      },
      {
        "id": "D",
        "text": "Raise the maximum token limit so the model has more room to refuse"
      },
      {
        "id": "E",
        "text": "Give the tools least-privilege permissions and treat model output as untrusted"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Guardrails can detect prompt attacks, and least-privilege tools plus untrusted treatment of output limit the damage if an injection succeeds. Both are layered defenses.",
    "whyWrong": {
      "A": "Temperature affects randomness, not whether the model follows injected instructions.",
      "C": "Placing keys in the prompt makes them extractable by an injection. Secrets belong in Secrets Manager.",
      "D": "Token limits control response length. They do not detect or block malicious instructions."
    },
    "services": [
      "Amazon Bedrock Guardrails",
      "AWS IAM"
    ],
    "tags": [
      "prompt-injection",
      "guardrails"
    ]
  },
  {
    "id": "t5-5.1-13",
    "domain": 5,
    "task": "5.1",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "An internal RAG assistant sometimes shows one department's confidential documents to another, and occasionally repeats customer phone numbers in its replies. Which TWO changes best prevent this data leakage? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Grant the application role bedrock:* on all resources to simplify access"
      },
      {
        "id": "B",
        "text": "Apply Amazon Bedrock Guardrails sensitive information filters to model responses"
      },
      {
        "id": "C",
        "text": "Restrict retrieval so each user only gets documents they are authorized to read"
      },
      {
        "id": "D",
        "text": "Store a shared service credential in the system prompt so the model can reach every data source"
      },
      {
        "id": "E",
        "text": "Lower the number of retrieved passages and leave the other settings alone"
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "Leakage has two paths here. Access controls on retrieval sources stop unauthorized documents from reaching the model, and PII filters on output stop personal data from being displayed.",
    "whyWrong": {
      "A": "Broader permissions increase exposure. They do not control which content a user sees.",
      "D": "Secrets in a prompt can be extracted and widen access rather than narrowing it.",
      "E": "Fewer passages may reduce volume, but unauthorized and sensitive content can still be retrieved and shown."
    },
    "services": [
      "Amazon Bedrock Guardrails",
      "Amazon Bedrock Knowledge Bases"
    ],
    "tags": [
      "data-leakage",
      "guardrails",
      "access-control"
    ]
  },
  {
    "id": "t5-5.1-14",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An agent built on Amazon Bedrock AgentCore must call a third-party SaaS API on behalf of each signed-in user. The team does not want to hard-code per-user credentials in the agent. Which capability fits?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Bedrock Guardrails sensitive information filters"
      },
      {
        "id": "B",
        "text": "Amazon Bedrock AgentCore Policy rules on tool calls"
      },
      {
        "id": "C",
        "text": "AWS KMS customer managed keys on the agent's logs"
      },
      {
        "id": "D",
        "text": "Amazon Bedrock AgentCore Identity for agent authentication"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "AgentCore Identity manages agent identity and lets agents access external services on behalf of users. AgentCore Policy, by contrast, limits which actions an agent may take.",
    "whyWrong": {
      "A": "Guardrails filter content in prompts and responses. They do not handle authentication to external services.",
      "B": "Policy restricts what actions and tool calls an agent is allowed to make. It does not obtain or store user credentials.",
      "C": "KMS encrypts data at rest. It does not authenticate an agent to a SaaS API."
    },
    "services": [
      "Amazon Bedrock AgentCore"
    ],
    "tags": [
      "agentcore",
      "agent-identity"
    ]
  },
  {
    "id": "t5-5.1-15",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A public-facing assistant must block hateful or violent replies without retraining the foundation model. Which capability should be used?",
    "choices": [
      {
        "id": "A",
        "text": "AWS KMS customer managed keys"
      },
      {
        "id": "B",
        "text": "AWS PrivateLink interface endpoints"
      },
      {
        "id": "C",
        "text": "Content filters in Amazon Bedrock Guardrails"
      },
      {
        "id": "D",
        "text": "S3 versioning on the knowledge base bucket"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Guardrails content filters screen inputs and outputs for categories such as hate and violence, and they work on top of any model without retraining.",
    "whyWrong": {
      "A": "KMS protects data with encryption and does not evaluate the content of replies.",
      "B": "PrivateLink gives private network paths and has no effect on what a model says.",
      "D": "Versioning preserves object history and has no role in filtering model output."
    },
    "services": [
      "Amazon Bedrock Guardrails"
    ],
    "tags": [
      "toxicity",
      "guardrails"
    ]
  },
  {
    "id": "t5-5.1-16",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which statement best describes why retrieval-augmented generation (RAG) reduces hallucinations?",
    "choices": [
      {
        "id": "A",
        "text": "It supplies authoritative source passages in the prompt so answers use that text."
      },
      {
        "id": "B",
        "text": "It permanently changes the model weights to include the company's documents."
      },
      {
        "id": "C",
        "text": "It increases randomness so the model explores more candidate answers."
      },
      {
        "id": "D",
        "text": "It removes the need for any human review of the model's answers."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "RAG grounds generation in retrieved text. The model answers from supplied evidence instead of relying only on what it memorized in training.",
    "whyWrong": {
      "B": "RAG leaves the weights unchanged. Changing weights is fine-tuning or continued pre-training.",
      "C": "Higher randomness tends to increase fabricated content, not reduce it.",
      "D": "Grounding lowers error rates but does not eliminate them, so review still matters for high-stakes answers."
    },
    "services": [
      "Amazon Bedrock Knowledge Bases"
    ],
    "tags": [
      "rag",
      "hallucination"
    ]
  },
  {
    "id": "t5-5.1-17",
    "domain": 5,
    "task": "5.1",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A generative AI service drafts refund amounts for customers. Occasionally the model states an amount that does not match the order system. The team wants to stop wrong values reaching customers while keeping most refunds automatic. What is the best design?",
    "choices": [
      {
        "id": "A",
        "text": "Lower the temperature and shorten the prompt, then send all amounts straight to customers."
      },
      {
        "id": "B",
        "text": "Validate each amount in code against the order system, and send doubtful cases to a human."
      },
      {
        "id": "C",
        "text": "Add an Amazon Bedrock Guardrails PII filter and trust the output of the model after that."
      },
      {
        "id": "D",
        "text": "Encrypt the model's responses with a KMS key before they are stored in a database."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Output validation checks values against an authoritative source before use, and confidence scoring routes uncertain cases to a person. This keeps routine cases automatic while catching hallucinated figures.",
    "whyWrong": {
      "A": "Tuning generation settings may reduce errors but cannot prove a figure is correct, and nothing verifies it before sending.",
      "C": "A PII filter masks personal data. It does not check whether a refund amount is correct.",
      "D": "Encrypting responses protects stored data but does nothing about whether the amount is accurate."
    },
    "services": [
      "Amazon Bedrock Guardrails"
    ],
    "tags": [
      "output-validation",
      "hallucination",
      "confidence-scoring"
    ]
  }
);
