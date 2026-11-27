window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t5-5.2-01",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which AWS service records the configuration history of resources and evaluates it against rules, such as \"every S3 bucket must be encrypted\"?",
    "choices": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Config"
      },
      {
        "id": "D",
        "text": "AWS Artifact"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "AWS Config tracks resource configuration over time and checks it against rules, flagging noncompliant resources. The deciding concept is configuration state, not API activity.",
    "whyWrong": {
      "A": "CloudTrail records who made API calls. It does not evaluate resource settings against compliance rules.",
      "B": "Inspector scans workloads for software vulnerabilities, not for configuration rule compliance.",
      "D": "Artifact is a download portal for AWS compliance reports and agreements. It does not evaluate your resources."
    },
    "services": [
      "AWS Config"
    ],
    "tags": [
      "governance-services",
      "config"
    ]
  },
  {
    "id": "t5-5.2-02",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A security team needs automated scanning of Lambda functions and container images for known software vulnerabilities. Which service should it use?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon Inspector"
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "C",
        "text": "AWS Config"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Amazon Inspector is the automated vulnerability scanning service for EC2 instances, container images, and Lambda functions.",
    "whyWrong": {
      "B": "Trusted Advisor gives best-practice recommendations across categories such as cost and security. It does not scan code or images for vulnerabilities.",
      "C": "Config records and evaluates resource configuration. It does not detect software vulnerabilities.",
      "D": "CloudWatch collects metrics, logs, and alarms. It does not scan for vulnerabilities."
    },
    "services": [
      "Amazon Inspector"
    ],
    "tags": [
      "governance-services",
      "inspector"
    ]
  },
  {
    "id": "t5-5.2-03",
    "domain": 5,
    "task": "5.2",
    "type": "multi",
    "difficulty": "easy",
    "source": "generated",
    "stem": "An auditor asks a company for evidence of AWS's own compliance posture before it approves an AI workload on AWS. Which TWO items can the company obtain on demand from AWS Artifact? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "AWS compliance reports, such as SOC and ISO reports"
      },
      {
        "id": "B",
        "text": "Configuration compliance results for the company's S3 buckets"
      },
      {
        "id": "C",
        "text": "A list of vulnerabilities in the company's container images"
      },
      {
        "id": "D",
        "text": "Agreements with AWS, such as a business associate addendum"
      },
      {
        "id": "E",
        "text": "A history of API calls made in the company's own account"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "explanation": "Artifact is the portal for AWS compliance reports and agreements. It describes AWS's compliance, not the state of the customer's own resources.",
    "whyWrong": {
      "B": "Configuration compliance results for your own resources come from AWS Config.",
      "C": "Vulnerability findings for your own images come from Amazon Inspector.",
      "E": "The record of API calls in the account comes from CloudTrail."
    },
    "services": [
      "AWS Artifact"
    ],
    "tags": [
      "governance-services",
      "artifact"
    ]
  },
  {
    "id": "t5-5.2-04",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Last week someone deleted a custom model in the company's AWS account. An investigator needs to know which IAM identity made the call, when, and from which source IP address. Which service holds this record?",
    "choices": [
      {
        "id": "A",
        "text": "AWS Config"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Artifact"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "CloudTrail logs API calls and account activity, including the caller identity, time, and source IP. \"Who did what, when, from where\" points at CloudTrail.",
    "whyWrong": {
      "A": "Config can show that a resource changed, but its job is configuration history, not the detailed record of the API caller.",
      "C": "Trusted Advisor reports on best-practice checks. It keeps no log of individual actions.",
      "D": "Artifact provides AWS compliance documents and has no record of activity in your account."
    },
    "services": [
      "AWS CloudTrail"
    ],
    "tags": [
      "governance-services",
      "cloudtrail"
    ]
  },
  {
    "id": "t5-5.2-05",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which of the following statements about AWS governance services is NOT correct?",
    "choices": [
      {
        "id": "A",
        "text": "AWS Config can evaluate resource configurations against rules and report noncompliant resources."
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor provides best-practice checks in areas such as cost, security, and service limits."
      },
      {
        "id": "C",
        "text": "Amazon Inspector can scan container images and Lambda functions for known vulnerabilities."
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor records each API call, with the caller identity, for audit purposes."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Recording API calls for audit is the role of AWS CloudTrail. Trusted Advisor only reports best-practice recommendations.",
    "whyWrong": {
      "A": "This is correct. Rule evaluation and noncompliance reporting is what Config does.",
      "B": "This is correct. Cost, performance, security, fault tolerance, and service limits are Trusted Advisor categories.",
      "C": "This is correct. Inspector scans EC2 instances, container images, and Lambda functions."
    },
    "services": [
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "AWS Config",
      "Amazon Inspector"
    ],
    "tags": [
      "governance-services",
      "trusted-advisor"
    ]
  },
  {
    "id": "t5-5.2-06",
    "domain": 5,
    "task": "5.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A compliance team finds that an S3 bucket holding training data lost its encryption setting. It must identify the bucket's configuration change history and the IAM identity that made the change. Which TWO services should it use together? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "AWS Artifact"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "Amazon Inspector"
      },
      {
        "id": "E",
        "text": "AWS CloudTrail"
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Config shows what the bucket configuration was and when it changed. CloudTrail shows which identity made the API call.",
    "whyWrong": {
      "A": "Artifact supplies AWS compliance reports. It holds nothing about your bucket.",
      "C": "Trusted Advisor can flag best-practice gaps but does not provide change history or caller identity.",
      "D": "Inspector looks for software vulnerabilities, not for configuration history of a bucket."
    },
    "services": [
      "AWS Config",
      "AWS CloudTrail"
    ],
    "tags": [
      "governance-services",
      "audit"
    ]
  },
  {
    "id": "t5-5.2-07",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An operations team wants an alarm to fire when the number of calls to its Amazon Bedrock models rises sharply within minutes. Which service is the best fit?",
    "choices": [
      {
        "id": "A",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail trails"
      },
      {
        "id": "C",
        "text": "AWS Config rules"
      },
      {
        "id": "D",
        "text": "AWS Artifact reports"
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "CloudWatch collects metrics, including Bedrock usage, and supports alarms. It answers \"what is it doing now\", while CloudTrail answers \"who called what\".",
    "whyWrong": {
      "B": "CloudTrail records API activity for audit. It is not the service for metric alarms on call volume.",
      "C": "Config evaluates configuration compliance, not runtime usage rates.",
      "D": "Artifact is a document portal and does not monitor anything."
    },
    "services": [
      "Amazon CloudWatch",
      "Amazon Bedrock"
    ],
    "tags": [
      "monitoring",
      "cloudwatch"
    ]
  },
  {
    "id": "t5-5.2-08",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "What does data lifecycle management mean in the context of data governance for an AI system?",
    "choices": [
      {
        "id": "A",
        "text": "Encrypting every dataset with one shared key for as long as the data exists."
      },
      {
        "id": "B",
        "text": "Splitting a dataset into training, validation, and test portions before model training."
      },
      {
        "id": "C",
        "text": "Selecting the Region where the model endpoint runs and where requests are served."
      },
      {
        "id": "D",
        "text": "Defining the stages data passes through, from collection to deletion, with owners and rules."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Data lifecycle management defines how data is collected, stored, used, archived, and deleted, and who is responsible at each stage.",
    "whyWrong": {
      "A": "Encryption protects data but is one control, not the definition of its stages.",
      "B": "Splitting a dataset is an ML preparation step and says nothing about governance of data over time.",
      "C": "Choosing a Region relates to data residency, a separate governance topic."
    },
    "services": [],
    "tags": [
      "data-governance",
      "data-lifecycle"
    ]
  },
  {
    "id": "t5-5.2-09",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A company is contractually required to keep all customer data used by its generative AI application inside a specific geographic area. Which action addresses this data residency requirement?",
    "choices": [
      {
        "id": "A",
        "text": "Apply an S3 lifecycle rule that moves older objects to S3 Glacier after 90 days."
      },
      {
        "id": "B",
        "text": "Use only approved Regions, and keep cross-Region inference within them."
      },
      {
        "id": "C",
        "text": "Encrypt all of the data with a customer managed AWS KMS key at rest."
      },
      {
        "id": "D",
        "text": "Set a retention period on the CloudWatch log groups for audit logs."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Residency is about where data is stored and processed, so the control is deliberate Region choice, including where cross-Region inference may route requests.",
    "whyWrong": {
      "A": "Lifecycle rules change storage class over time. They do not control geography.",
      "C": "Encryption protects confidentiality but does not decide where the data physically resides.",
      "D": "Log retention controls how long logs are kept, which is a retention matter, not a location control."
    },
    "services": [
      "Amazon S3",
      "Amazon CloudWatch"
    ],
    "tags": [
      "data-governance",
      "data-residency"
    ]
  },
  {
    "id": "t5-5.2-10",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A regulation requires a company to keep AI audit data for 7 years and then remove it, but the company also wants to avoid paying for long-term storage in the most expensive tier. Which approach meets both goals?",
    "choices": [
      {
        "id": "A",
        "text": "Keep the data in S3 Standard indefinitely and delete it manually when someone remembers to."
      },
      {
        "id": "B",
        "text": "Turn off logging after 7 years so that no new data accumulates in the bucket."
      },
      {
        "id": "C",
        "text": "Use S3 lifecycle rules to archive data to S3 Glacier and expire it after 7 years."
      },
      {
        "id": "D",
        "text": "Use AWS Config rules to delete any object older than one year in the bucket."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Retention means keeping data as long as required and no longer. Lifecycle rules can transition data to cheaper archive storage and then expire it automatically at the end of the period.",
    "whyWrong": {
      "A": "Manual deletion is unreliable, and S3 Standard is the costly choice for rarely accessed data.",
      "B": "Stopping new logs does nothing about existing data, and it would remove the audit trail.",
      "D": "Config evaluates configuration compliance. A one-year deletion would also break the 7-year retention requirement."
    },
    "services": [
      "Amazon S3"
    ],
    "tags": [
      "data-governance",
      "data-retention"
    ]
  },
  {
    "id": "t5-5.2-11",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A governance policy says the full text of prompts and model responses for a Bedrock application must be recorded for later review. Which capability meets this?",
    "choices": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor security checks"
      },
      {
        "id": "B",
        "text": "AWS Config rules on the Bedrock resources"
      },
      {
        "id": "C",
        "text": "AWS CloudTrail event history alone"
      },
      {
        "id": "D",
        "text": "Amazon Bedrock model invocation logging"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Model invocation logging captures the request and response data of model calls and delivers it to destinations such as CloudWatch Logs or S3. CloudTrail records API activity metadata, not prompt and response text.",
    "whyWrong": {
      "A": "Trusted Advisor reports best-practice gaps and does not record model calls.",
      "B": "Config evaluates how resources are configured and does not capture prompt content.",
      "C": "CloudTrail shows who called which API, but not the full prompt and response text."
    },
    "services": [
      "Amazon Bedrock",
      "AWS CloudTrail"
    ],
    "tags": [
      "data-governance",
      "logging"
    ]
  },
  {
    "id": "t5-5.2-12",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Why do governance programs require continuous monitoring of a deployed AI system, rather than only testing before launch?",
    "choices": [
      {
        "id": "A",
        "text": "Usage, outputs, and policy violations can change after launch, so issues must be caught early."
      },
      {
        "id": "B",
        "text": "Pre-launch testing is not permitted under most governance policies and standards."
      },
      {
        "id": "C",
        "text": "Monitoring removes the need for written policies and periodic reviews."
      },
      {
        "id": "D",
        "text": "Monitoring makes the model retrain itself automatically after each request."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Observation and monitoring continue after deployment because real-world behavior and risks change over time. It complements, not replaces, testing and policy.",
    "whyWrong": {
      "B": "Pre-launch testing is a standard governance practice, not a prohibited one.",
      "C": "Monitoring supports policies and reviews. It does not replace them.",
      "D": "Monitoring only observes. It does not retrain a model."
    },
    "services": [],
    "tags": [
      "data-governance",
      "monitoring"
    ]
  },
  {
    "id": "t5-5.2-13",
    "domain": 5,
    "task": "5.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A company runs scheduled quarterly reviews of its AI systems. Which TWO events should also trigger an additional, event-driven governance review? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "A routine renewal of the office lease"
      },
      {
        "id": "B",
        "text": "A new employee joining the marketing department"
      },
      {
        "id": "C",
        "text": "A security or safety incident involving the AI system"
      },
      {
        "id": "D",
        "text": "The end of the calendar quarter"
      },
      {
        "id": "E",
        "text": "A switch to a different model version for a production application"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Review cadence combines scheduled reviews with event-driven ones. Incidents and changes to the model itself change the risk profile and warrant a review before the next scheduled date.",
    "whyWrong": {
      "A": "A lease renewal has no bearing on AI risk.",
      "B": "A hire in an unrelated team does not change the AI system's risk.",
      "D": "Quarter end is the scheduled review, not an additional event-driven one."
    },
    "services": [],
    "tags": [
      "governance-processes",
      "review-cadence"
    ]
  },
  {
    "id": "t5-5.2-14",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company builds an assistant that calls a pre-trained foundation model through Amazon Bedrock. It adds retrieval over its own documents to ground answers, and it does not train or fine-tune the model. Which scope of the Generative AI Security Scoping Matrix applies?",
    "choices": [
      {
        "id": "A",
        "text": "Scope 1, consumer app"
      },
      {
        "id": "B",
        "text": "Scope 2, enterprise app"
      },
      {
        "id": "C",
        "text": "Scope 3, pre-trained models"
      },
      {
        "id": "D",
        "text": "Scope 4, fine-tuned models"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Building your own application on an existing pre-trained model is Scope 3, and retrieval supplies context at query time without changing model weights. Scope 4 starts only when you customize the model with your data.",
    "whyWrong": {
      "A": "Scope 1 is staff using a public consumer GenAI app, not a custom application.",
      "B": "Scope 2 is using a vendor's GenAI-enabled business application, not building your own.",
      "D": "Scope 4 requires fine-tuning the model on your data. Retrieval leaves the model unchanged."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "scoping-matrix",
      "governance-frameworks"
    ]
  },
  {
    "id": "t5-5.2-15",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A team wants a standard document that records a model's intended use, training data summary, evaluation results, and known limitations so that it can be shared with reviewers. Which is the best fit?",
    "choices": [
      {
        "id": "A",
        "text": "An AWS CloudTrail trail"
      },
      {
        "id": "B",
        "text": "An Amazon SageMaker Model Card"
      },
      {
        "id": "C",
        "text": "An Amazon Inspector finding"
      },
      {
        "id": "D",
        "text": "An AWS Trusted Advisor check"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Model cards are a transparency standard for documenting a model's purpose, data, performance, and limits. Amazon SageMaker Model Cards provides this documentation.",
    "whyWrong": {
      "A": "A trail logs API activity and does not describe a model's purpose or limits.",
      "C": "A finding reports a vulnerability and is not model documentation.",
      "D": "A Trusted Advisor check is a best-practice recommendation, not documentation of a model."
    },
    "services": [
      "Amazon SageMaker AI"
    ],
    "tags": [
      "transparency",
      "model-cards"
    ]
  },
  {
    "id": "t5-5.2-16",
    "domain": 5,
    "task": "5.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Despite a policy against it, employees keep pasting confidential customer data into a public consumer chatbot. Which TWO actions would best address the root cause? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Add an S3 lifecycle rule to the customer data bucket."
      },
      {
        "id": "B",
        "text": "Train staff on the acceptable-use policy and the risks of consumer GenAI tools."
      },
      {
        "id": "C",
        "text": "Provide an approved internal GenAI tool and update the policy to name it."
      },
      {
        "id": "D",
        "text": "Check the account with AWS Trusted Advisor each month."
      },
      {
        "id": "E",
        "text": "Enable Amazon Inspector on the corporate laptops' browsers."
      }
    ],
    "answer": [
      "B",
      "C"
    ],
    "explanation": "This is a Scope 1 risk driven by people and process. Team training plus a clear policy with an approved alternative addresses the behavior.",
    "whyWrong": {
      "A": "Lifecycle rules manage storage retention, not what employees send to external tools.",
      "D": "Trusted Advisor checks the AWS account and cannot see employee use of consumer apps.",
      "E": "Inspector scans for vulnerabilities in workloads and does not control what staff paste into a web app."
    },
    "services": [],
    "tags": [
      "governance-processes",
      "team-training"
    ]
  },
  {
    "id": "t5-5.2-17",
    "domain": 5,
    "task": "5.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A company has dozens of AI use cases, ranging from an internal meeting summarizer to an automated loan decision system. Leadership wants consistent oversight without slowing low-risk projects. Which governance approach fits best?",
    "choices": [
      {
        "id": "A",
        "text": "Require every project to pass the same full review by a single approver before launch."
      },
      {
        "id": "B",
        "text": "Let each team set and follow its own review rules for its projects."
      },
      {
        "id": "C",
        "text": "Review all AI systems only once a year through an external audit."
      },
      {
        "id": "D",
        "text": "Use a cross-functional board that applies deeper reviews to higher-risk systems."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Risk-tiered approval overseen by a cross-functional board (legal, security, product, ethics) gives consistent standards and puts effort where the risk is.",
    "whyWrong": {
      "A": "A uniform full review for all projects slows low-risk work and creates a bottleneck at one approver.",
      "B": "Team-by-team rules produce inconsistent standards and gaps for high-risk systems.",
      "C": "A yearly audit is too infrequent and does not give approval or oversight before launch."
    },
    "services": [],
    "tags": [
      "governance-processes",
      "governance-frameworks"
    ]
  }
);
