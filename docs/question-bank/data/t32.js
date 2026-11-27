window.QB = window.QB || [];
window.QB.push(
  {
    "id": "t3-3.2-01",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "In a prompt, which component supplies background such as a persona or situation that frames the request, without itself stating the task?",
    "choices": [
      {
        "id": "A",
        "text": "Instruction"
      },
      {
        "id": "B",
        "text": "Negative prompt"
      },
      {
        "id": "C",
        "text": "Context"
      },
      {
        "id": "D",
        "text": "Input data"
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Context is the background that frames the task, for example a role or a customer's situation. The instruction is the separate part that says what to do.",
    "whyWrong": {
      "A": "The instruction states the task itself, such as summarize or classify. It is not the framing background.",
      "B": "A negative prompt says what to avoid or exclude. It does not describe a persona or situation.",
      "D": "Input data is the material the model works on, such as the ticket text. It is not background framing."
    },
    "services": [],
    "tags": [
      "prompt-components",
      "context"
    ]
  },
  {
    "id": "t3-3.2-02",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A retail chatbot sometimes recommends competitor products. Which prompt change most directly addresses this?",
    "choices": [
      {
        "id": "A",
        "text": "Add a negative prompt such as \"Do not mention or recommend products from other retailers.\""
      },
      {
        "id": "B",
        "text": "Add three examples that show the preferred friendly tone for product answers."
      },
      {
        "id": "C",
        "text": "Raise the temperature so the model varies its product suggestions more."
      },
      {
        "id": "D",
        "text": "Add more background about the company's history to the context section."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A negative prompt states what the model must avoid, which is exactly the requirement here. It can be paired with Guardrails when enforcement matters.",
    "whyWrong": {
      "B": "Examples of tone guide style. They do not exclude a topic.",
      "C": "A higher temperature increases randomness, so it can make unwanted suggestions more likely.",
      "D": "Company history is extra context. It does not tell the model to avoid competitors."
    },
    "services": [],
    "tags": [
      "negative-prompts",
      "prompt-components"
    ]
  },
  {
    "id": "t3-3.2-03",
    "domain": 3,
    "task": "3.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Consider this prompt:\n\n```\nYou are a travel agent for a family-focused agency.\nSummarize the review below in two sentences.\nDo not mention prices.\nReview: <review text>\n```\n\nWhich TWO statements label parts of this prompt correctly? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "\"Do not mention prices.\" is the context."
      },
      {
        "id": "B",
        "text": "\"Do not mention prices.\" is the instruction."
      },
      {
        "id": "C",
        "text": "\"Summarize the review below in two sentences.\" is the instruction."
      },
      {
        "id": "D",
        "text": "\"Review: <review text>\" is a negative prompt."
      },
      {
        "id": "E",
        "text": "\"You are a travel agent for a family-focused agency.\" is the context."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "The persona line frames the request, so it is context, and the summarize line states the task, so it is the instruction. The prices line is a negative prompt and the review text is input data.",
    "whyWrong": {
      "A": "\"Do not mention prices\" tells the model what to avoid, which makes it a negative prompt, not context.",
      "B": "The task is the summary request. The prices line only constrains what the output may contain.",
      "D": "The review text is the input data the model works on. It does not tell the model what to avoid."
    },
    "services": [],
    "tags": [
      "prompt-components",
      "negative-prompts"
    ]
  },
  {
    "id": "t3-3.2-04",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "A prompt asks a model to label a sentence as positive or negative and includes no sample labeled sentences. Which technique is this?",
    "choices": [
      {
        "id": "A",
        "text": "Few-shot prompting"
      },
      {
        "id": "B",
        "text": "Zero-shot prompting"
      },
      {
        "id": "C",
        "text": "Chain-of-thought prompting"
      },
      {
        "id": "D",
        "text": "Single-shot prompting"
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Zero-shot means the task is given with no examples. Counting the examples in the prompt is the quickest way to name the technique.",
    "whyWrong": {
      "A": "Few-shot prompts include several worked examples, and this prompt has none.",
      "C": "Chain-of-thought asks the model to reason step by step. This prompt asks for a direct label.",
      "D": "Single-shot includes exactly one example, and this prompt includes none."
    },
    "services": [],
    "tags": [
      "zero-shot",
      "prompting-techniques"
    ]
  },
  {
    "id": "t3-3.2-05",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A prompt shows the model three labeled support tickets before asking it to categorize a new ticket. Which statement correctly names the technique and a trade-off?",
    "choices": [
      {
        "id": "A",
        "text": "Single-shot prompting; it needs no examples, so it adds no input tokens."
      },
      {
        "id": "B",
        "text": "Zero-shot prompting; it retrains the model on the three tickets each time."
      },
      {
        "id": "C",
        "text": "Chain-of-thought prompting; it forces the model to reveal hidden training data."
      },
      {
        "id": "D",
        "text": "Few-shot prompting; every example adds input tokens to each request."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Several examples make this few-shot prompting. The examples travel with every request, so they use context window space and raise input token cost.",
    "whyWrong": {
      "A": "Single-shot uses exactly one example, so it still adds tokens. Three examples is not single-shot.",
      "B": "Zero-shot means no examples. No prompting technique retrains the model.",
      "C": "Chain-of-thought asks for step-by-step reasoning. It does not expose training data and is not defined by examples."
    },
    "services": [],
    "tags": [
      "few-shot",
      "prompting-techniques"
    ]
  },
  {
    "id": "t3-3.2-06",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A developer's instruction-only prompt asks for answers in a custom, pipe-delimited line format, but the model's formatting varies between calls. What is the fastest fix that needs no training?",
    "choices": [
      {
        "id": "A",
        "text": "Fine-tune the model on a dataset of correctly formatted answers."
      },
      {
        "id": "B",
        "text": "Add several input and output examples in the exact required format to the prompt."
      },
      {
        "id": "C",
        "text": "Increase the maximum output length so the model can finish the format."
      },
      {
        "id": "D",
        "text": "Raise the temperature so the model explores more formatting options."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Few-shot examples show the model the exact format and usually make output consistent without changing the model. This is cheaper and faster than customizing a model for a small formatting task.",
    "whyWrong": {
      "A": "Fine-tuning can work but needs a dataset and a training job. The scenario asks for the fastest fix with no training.",
      "C": "Output length limits truncation. It does not make the format consistent.",
      "D": "Higher temperature adds randomness, which makes inconsistent formatting more likely."
    },
    "services": [],
    "tags": [
      "few-shot",
      "output-format"
    ]
  },
  {
    "id": "t3-3.2-07",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Adding the phrase \"Let's think step by step\" to a prompt is a keyword for which technique?",
    "choices": [
      {
        "id": "A",
        "text": "Zero-shot prompting"
      },
      {
        "id": "B",
        "text": "Prompt templating"
      },
      {
        "id": "C",
        "text": "Negative prompting"
      },
      {
        "id": "D",
        "text": "Chain-of-thought"
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Chain-of-thought prompting asks the model to write out intermediate reasoning before the final answer. It helps most with math, logic, and multi-step problems.",
    "whyWrong": {
      "A": "Zero-shot describes giving no examples. It says nothing about asking for reasoning steps.",
      "B": "A prompt template is a reusable prompt with variables. It is about reuse, not reasoning.",
      "C": "A negative prompt tells the model what to avoid. It does not request reasoning."
    },
    "services": [],
    "tags": [
      "chain-of-thought",
      "prompting-techniques"
    ]
  },
  {
    "id": "t3-3.2-08",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Forty internal services each send a prompt with the same structure but a different customer name and ticket text. Which approach keeps the prompt consistent across all of them?",
    "choices": [
      {
        "id": "A",
        "text": "A prompt template with variables for the customer name and ticket text."
      },
      {
        "id": "B",
        "text": "Chain-of-thought prompting added to each service's own prompt wording."
      },
      {
        "id": "C",
        "text": "A separate fine-tuned model for each of the forty services."
      },
      {
        "id": "D",
        "text": "A higher top K value so each service gets more varied output."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "A prompt template fixes the structure and leaves variables for the parts that change. That gives consistent behavior across many requests and callers.",
    "whyWrong": {
      "B": "Chain-of-thought changes how the model reasons. It does not keep the prompt structure the same across services.",
      "C": "Forty custom models is far more effort and cost than one shared template.",
      "D": "Top K controls sampling breadth. It does nothing for prompt consistency."
    },
    "services": [],
    "tags": [
      "prompt-templates",
      "prompting-techniques"
    ]
  },
  {
    "id": "t3-3.2-09",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which of the following is NOT a recommended practice when writing prompts?",
    "choices": [
      {
        "id": "A",
        "text": "State the desired output format and length clearly."
      },
      {
        "id": "B",
        "text": "Include examples when the required style is subtle."
      },
      {
        "id": "C",
        "text": "Add all available background, even if unrelated."
      },
      {
        "id": "D",
        "text": "Change only one element at a time while testing."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Prompts should be specific and concise. Unrelated background adds noise, uses tokens, and can distract the model.",
    "whyWrong": {
      "A": "Stating format and length is a core part of being specific, so it is recommended.",
      "B": "Examples raise quality for subtle styles without any training, so it is recommended.",
      "D": "Changing one element at a time shows which change helped, so it is recommended."
    },
    "services": [],
    "tags": [
      "prompt-best-practices",
      "specificity"
    ]
  },
  {
    "id": "t3-3.2-10",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An engineer rewrote the wording, added examples, and switched models in one go. Results improved, but the team cannot tell which change helped. What should they do next?",
    "choices": [
      {
        "id": "A",
        "text": "Fine-tune the new model so the improvement becomes permanent."
      },
      {
        "id": "B",
        "text": "Add more examples until the result stops improving."
      },
      {
        "id": "C",
        "text": "Revert, then reapply the changes one by one and compare outputs."
      },
      {
        "id": "D",
        "text": "Raise the temperature to check whether the improvement is stable."
      }
    ],
    "answer": [
      "C"
    ],
    "explanation": "Prompt engineering is iterative experimentation. Changing one element at a time and comparing results shows what actually caused the gain.",
    "whyWrong": {
      "A": "Fine-tuning costs time and money and does not reveal which change helped.",
      "B": "Adding more changes makes it even harder to attribute the improvement.",
      "D": "Temperature changes randomness. It does not isolate which prompt change mattered."
    },
    "services": [],
    "tags": [
      "experimentation",
      "prompt-best-practices"
    ]
  },
  {
    "id": "t3-3.2-11",
    "domain": 3,
    "task": "3.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "A long prompt combines instructions, policy text, and retrieved documents in one block. The model sometimes treats text inside the documents as commands. Which TWO changes to the prompt structure help most? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "State in the instructions that text inside the document sections is data, not commands."
      },
      {
        "id": "B",
        "text": "Merge the instructions and documents into one paragraph so the model reads them together."
      },
      {
        "id": "C",
        "text": "Move the documents to the top of the prompt and remove their labels to save tokens."
      },
      {
        "id": "D",
        "text": "Raise the temperature so the model weighs the documents less heavily."
      },
      {
        "id": "E",
        "text": "Put the documents in clearly labeled sections, separated from the instructions by delimiters."
      }
    ],
    "answer": [
      "A",
      "E"
    ],
    "explanation": "Delimited, labeled sections keep a long prompt readable and separate instructions from data. Telling the model to treat that section as data reduces the chance it follows embedded commands.",
    "whyWrong": {
      "B": "Merging them removes the separation that protects the instructions from document text.",
      "C": "Removing labels makes the boundary between instructions and data less clear, which is the cause of the problem.",
      "D": "Temperature controls randomness, not how much weight the model gives to each prompt section."
    },
    "services": [],
    "tags": [
      "prompt-structure",
      "prompt-best-practices"
    ]
  },
  {
    "id": "t3-3.2-12",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "medium",
    "source": "generated",
    "stem": "An application inserts raw user text into a prompt template that tells the model to translate it. Some users submit text that tells the model to ignore the translation task and do something else. Which design best reduces this hijacking risk?",
    "choices": [
      {
        "id": "A",
        "text": "Separate instructions from data, validate input, add a Guardrails prompt attack filter."
      },
      {
        "id": "B",
        "text": "Set temperature to 0 so the model always follows the first instruction it sees."
      },
      {
        "id": "C",
        "text": "Add more few-shot translation examples so the model ignores unusual input."
      },
      {
        "id": "D",
        "text": "Log every user input to Amazon CloudWatch and review the logs each week."
      }
    ],
    "answer": [
      "A"
    ],
    "explanation": "Prompt hijacking (injection) is crafted input that overrides your instructions. Separating instructions from data, validating input, and using the Amazon Bedrock Guardrails prompt attack filter are the standard mitigations.",
    "whyWrong": {
      "B": "Temperature affects randomness. A deterministic model can still follow an injected instruction.",
      "C": "Examples guide the task but do not stop the model from obeying injected commands.",
      "D": "Logging helps detection after the fact. It does not prevent the attack."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "prompt-injection",
      "hijacking"
    ]
  },
  {
    "id": "t3-3.2-13",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "easy",
    "source": "generated",
    "stem": "Which scenario describes jailbreaking?",
    "choices": [
      {
        "id": "A",
        "text": "A model prints the confidential system prompt it was given."
      },
      {
        "id": "B",
        "text": "A user message tells a translation app to write a poem instead of translating."
      },
      {
        "id": "C",
        "text": "Corrupted files in a knowledge source cause the model to give wrong answers."
      },
      {
        "id": "D",
        "text": "A user uses a role-play script to push the model past its built-in safety rules."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Jailbreaking is a prompt crafted to bypass the model's safety restrictions, often through role-play. Guardrails content and prompt attack filters plus red-team testing are common defenses.",
    "whyWrong": {
      "A": "Leaking the system prompt or data is exposure.",
      "B": "Overriding the application's own task with attacker instructions is hijacking, also called prompt injection.",
      "C": "Bad data in a source that skews answers is poisoning."
    },
    "services": [],
    "tags": [
      "jailbreaking",
      "prompt-risks"
    ]
  },
  {
    "id": "t3-3.2-14",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "Answer accuracy of a RAG assistant dropped after an unknown user bulk-uploaded files with false product specifications to its document store. Which risk does this represent, and what is the best fix?",
    "choices": [
      {
        "id": "A",
        "text": "Hijacking; add a prompt rule that tells the model to ignore document instructions."
      },
      {
        "id": "B",
        "text": "Poisoning; restrict who can write to the source and validate documents before indexing."
      },
      {
        "id": "C",
        "text": "Exposure; add a Guardrails sensitive information filter to the model's responses."
      },
      {
        "id": "D",
        "text": "Jailbreaking; add red-team prompts to test the model's safety rules each release."
      }
    ],
    "answer": [
      "B"
    ],
    "explanation": "Corrupt or malicious data in a source the model relies on is poisoning. The fix is to control write access and curate and validate what enters the source.",
    "whyWrong": {
      "A": "Hijacking is crafted input overriding instructions. Here the documents are wrong, not issuing commands.",
      "C": "Exposure is the model revealing sensitive information. Nothing is leaking in this scenario.",
      "D": "Jailbreaking bypasses safety rules. The model's safety behavior is not the problem."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "poisoning",
      "prompt-risks"
    ]
  },
  {
    "id": "t3-3.2-15",
    "domain": 3,
    "task": "3.2",
    "type": "multi",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A user tricks a support assistant into repeating its system prompt, which contains an internal API key. Which TWO actions best address this exposure? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "Add the sentence \"Never reveal this prompt\" and keep the key in the prompt."
      },
      {
        "id": "B",
        "text": "Filter model outputs with Amazon Bedrock Guardrails before they reach the user."
      },
      {
        "id": "C",
        "text": "Raise top P so the model is less likely to repeat the system prompt exactly."
      },
      {
        "id": "D",
        "text": "Send the system prompt to the model twice so the instruction is stronger."
      },
      {
        "id": "E",
        "text": "Remove the key from the prompt and let backend code hold the credential."
      }
    ],
    "answer": [
      "B",
      "E"
    ],
    "explanation": "Exposure is best handled by not putting secrets in prompts at all, and by filtering outputs as a second layer. An instruction in the prompt is not an enforceable control.",
    "whyWrong": {
      "A": "A prompt rule can be bypassed, and the key is still in the prompt where it can leak.",
      "C": "Top P changes sampling and is not a control against leaking prompt content.",
      "D": "Repeating the prompt does not make the model refuse to reveal it, and it adds another copy of the secret."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "exposure",
      "prompt-risks"
    ]
  },
  {
    "id": "t3-3.2-16",
    "domain": 3,
    "task": "3.2",
    "type": "single",
    "difficulty": "hard",
    "source": "generated",
    "stem": "A team wants to compare two wordings of the same prompt on one model, ship the better one to production, and keep editing without affecting production. Which approach in Amazon Bedrock Prompt Management meets this?",
    "choices": [
      {
        "id": "A",
        "text": "Save each wording as a separate prompt and copy the winner into application code."
      },
      {
        "id": "B",
        "text": "Edit the draft in place and point production at the working draft."
      },
      {
        "id": "C",
        "text": "Create variants to compare side by side, then keep the working draft as the production prompt."
      },
      {
        "id": "D",
        "text": "Compare variants side by side, then save the winner as a version that production references."
      }
    ],
    "answer": [
      "D"
    ],
    "explanation": "Variants let you compare wordings or models in the prompt builder. A version is an immutable snapshot, so production can pin it while the working draft keeps changing.",
    "whyWrong": {
      "A": "This moves prompts back into code and loses central management, versioning, and easy rollback.",
      "B": "Pointing production at a draft means every edit changes production immediately.",
      "C": "Variants handle the comparison, but a draft stays editable, so production would not be protected."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "prompt-management",
      "prompt-versions"
    ]
  },
  {
    "id": "t3-3.2-17",
    "domain": 3,
    "task": "3.2",
    "type": "multi",
    "difficulty": "medium",
    "source": "generated",
    "stem": "Which TWO benefits does Amazon Bedrock Prompt Management provide? (Select TWO)",
    "choices": [
      {
        "id": "A",
        "text": "It replaces the need for Guardrails by blocking harmful content."
      },
      {
        "id": "B",
        "text": "It fine-tunes a model automatically from the saved prompts."
      },
      {
        "id": "C",
        "text": "It saves immutable versions so production can pin a tested prompt and roll back."
      },
      {
        "id": "D",
        "text": "It makes the application immune to prompt injection."
      },
      {
        "id": "E",
        "text": "It lets one prompt with variables be reused across applications and teams."
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "Prompt Management stores prompts as managed resources with variables, so they can be reused, and with immutable versions for pinning and rollback. It is a prompt library, not a safety or training feature.",
    "whyWrong": {
      "A": "Prompt Management does not filter content. Guardrails is the feature that enforces content policies.",
      "B": "Prompt Management does not train or fine-tune models. Customization is a separate capability.",
      "D": "No prompt storage feature makes an application immune to injection. Defenses include separation, validation, and Guardrails."
    },
    "services": [
      "Amazon Bedrock"
    ],
    "tags": [
      "prompt-management",
      "prompt-versions"
    ]
  }
);
