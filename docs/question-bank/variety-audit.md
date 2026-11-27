# AIF-C01 Question Bank - Variety Audit

Scope: 241 questions in `data/t11.js` to `data/t52.js` (182 single, 59 multi). Counts come from a script run after verification and the final fixes. Rule applied: the same tested decision appears at most 3 times.

## 1. Counts

| Domain | Questions | Task | Questions | easy / medium / hard |
|---|---|---|---|---|
| 1 | 48 | 1.1 | 16 | 6 / 8 / 2 |
| | | 1.2 | 16 | 6 / 7 / 3 |
| | | 1.3 | 16 | 6 / 7 / 3 |
| 2 | 58 | 2.1 | 20 | 8 / 9 / 3 |
| | | 2.2 | 19 | 8 / 8 / 3 |
| | | 2.3 | 19 | 8 / 8 / 3 |
| 3 | 67 | 3.1 | 17 | 7 / 8 / 2 |
| | | 3.2 | 17 | 7 / 7 / 3 |
| | | 3.3 | 16 | 6 / 8 / 2 |
| | | 3.4 | 17 | 8 / 6 / 3 |
| 4 | 34 | 4.1 | 17 | 8 / 7 / 2 |
| | | 4.2 | 17 | 7 / 7 / 3 |
| 5 | 34 | 5.1 | 17 | 6 / 8 / 3 |
| | | 5.2 | 17 | 7 / 7 / 3 |

Totals: easy 98 (41%), medium 105 (44%), hard 38 (16%). Single 182 (76%), multi 59 (24%). Every task is on its target count.

Stem shape: 66 stems (27%) start "A company/developer/team", under the 50% cap. 11 stems are "NOT / LEAST / EXCEPT" items, 65 are short or long "Which / What / How" questions, and the rest are definitions, keyword matches and cause-or-next-step questions.

## 2. Same-decision clusters

No decision exceeds 3 questions. Closest cases, all checked:

| Topic | Questions | Note |
|---|---|---|
| RAG as the answer or in the stem | 9 stems mention RAG | Different decisions: definition (3.1-09), RAG vs fine-tuning (3.1-10), prompt-injection context (3.2-14), RAG evaluation (3.4-12), grounding (4.1-06, 5.1-16), KB data access (5.1-06, 5.1-13), cost tradeoff (2.3-17). Hallucination appears in three questions, each a different decision: definition (2.2-05), Guardrails contextual grounding check (4.1-06), why RAG reduces it (5.1-16). Under the cap. |
| Fine-tuning | 13 stems | Task 3.3 is about it, and each question tests a different element (data prep, RLHF, instruction tuning, and so on). |
| Guardrails | 2 stems, 8 services tags | Different decisions (denied topics, PII/filters, grounding check, injection, output filtering). |

An earlier overlap, an AWS CloudTrail "who invoked" question in 5.1, duplicated 5.2-04 and was replaced by an AgentCore Identity question.

## 3. Answer-key balance

- Single-answer correct letter: A 45 (25%), B 47 (26%), C 42 (23%), D 48 (26%). All inside the 20 to 30% band.
- Multi-select: the first author batch put answers mostly on A and C (A 41, C 32, B 17, D 18, E 12). Choices were shuffled by script, after which A 17, B 28, C 23, D 22, E 29, F 2. The letters are not referenced in any stem or explanation, so the shuffle did not break any text.
- Choice length: median correct 70 characters, median distractor 64. Mean correct/distractor length ratio on single questions is 1.01, and none exceeds 1.25 (31 did before a rebalance). The correct choice is still the longest in 71 of 182 single questions (39%) against a 25% chance baseline, which is a small remaining tell.

## 4. Objectives with exactly one question or light coverage

- Task 2.1 "context engineering" and Task 2.3 "Amazon Quick" and "Strands Agents" each have one or two questions.
- Task 5.1 AgentCore Policy has no question; AgentCore Identity has one (5.1-14).
- Task 1.1 "agentic AI" differences has one question, and the multi-agent patterns in 2.1 have one or two.
- In-scope services that never appear in a `services` tag: AWS Data Exchange, Amazon EMR, Amazon Redshift, AWS Cost Explorer, Amazon DynamoDB, Amazon CloudFront, Amazon DocumentDB, Amazon ElastiCache, Amazon ECS, Amazon EKS. Several others (Lake Formation, Budgets, Lambda, EC2, Secrets Manager, Transform) appear only as distractors. Most are peripheral to AI topics and low priority for the exam.

## 5. Caveats

- The "strictly one defensible answer" and fact checks were done by independent verifier agents against the exam guide, study guide and skills. Web lookups were used only where noted by the verifiers; model-behaviour claims such as "customized models typically need Provisioned Throughput" follow the study guide's own hedge.
- The 14 task statements (not 12 as the build prompt says) and the 241-question target come from the exam guide and the prompt's table.
