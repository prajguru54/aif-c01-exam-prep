# Task: Create the AIF-C01 study guide

Use this prompt to build **one** concise study guide for the AWS Certified AI Practitioner (AIF-C01) exam.

**How to run it.** Start a Claude Code session at the repository root and say:

> Follow `prompts/create_study_plan.md`.

No other input is needed. Work from the defaults below. Ask a question only if `exam_guide.md` is missing or ambiguous.

---

## 0. What you are producing

One standalone HTML file, `docs/aif-c01-study-guide.html`, that the reader opens locally and reads front to back in a few sittings. It contains:

1. A cover with a chapter table (one row per exam task statement) and the callout legend.
2. **One chapter per task statement**: 12 chapters (1.1 to 1.3, 2.1 to 2.3, 3.1 to 3.4, 4.1 to 4.2, 5.1 to 5.2), grouped under five domain headings in the sidebar.
3. A closing **Mixed practice** chapter (10 to 15 exam-style questions across all domains).
4. A closing **Coverage map** chapter (section 7).

The sidebar, expand and collapse buttons, and hide button are already built into the template shell. Do not rewrite them.

## 1. Who this is for and what "brief" means

The reader is a senior Python backend and GenAI developer (see `my_background.md`) who is new to AWS and to formal classical-ML vocabulary. AIF-C01 is a foundational exam for someone who **uses** AI on AWS. It asks which service, concept, or practice fits a scenario. It does not ask the candidate to build anything.

So this guide is a **precise, compact exam companion**, not a book. The other study guides in this workspace (`../bedrock/docs/domain/`) are extensive on purpose. This one must not copy that depth.

Rules of thumb:

- **Length ceiling:** about 18,000 words of prose in total. Treat it as a ceiling, not a target. Per-chapter ceilings, weighted by exam weight:

  | Domain | Weight | Chapters | Ceiling per chapter |
  |---|---|---|---|
  | 1 Fundamentals of AI and ML | 20% | 1.1, 1.2, 1.3 | 1,200 words |
  | 2 Fundamentals of GenAI | 24% | 2.1, 2.2, 2.3 | 1,400 words |
  | 3 Applications of Foundation Models | 28% | 3.1, 3.2, 3.3, 3.4 | 1,500 words |
  | 4 Responsible AI | 14% | 4.1, 4.2 | 1,200 words |
  | 5 Security, Compliance, Governance | 14% | 5.1, 5.2 | 1,300 words |

  Questions, tables, and code do not count toward the ceiling.
- **Default depth is one tight paragraph plus a comparison table.** Prefer a table to prose whenever the exam asks "which one when".
- **Skip what the reader knows.** Do not explain Python, REST, Docker, or what a prompt, embedding, or RAG pipeline is at length. Give the exam's formal definition in a sentence, then the AWS-specific layer.
- Define every AWS term and every classical-ML term (precision, recall, overfitting, supervised, and so on) in plain words on first use.

## 2. When a section may go deep

Go beyond the default depth **only** when both are true:

1. The exam guide names the implementation detail (for example inference parameters, the RAG flow, Guardrails filter types, IAM roles and policies, encryption, PrivateLink, Bedrock Prompt Management, Model Evaluation metrics).
2. A candidate who lacks it would pick a wrong answer.

When a section goes deep, give just enough: the mechanism, one diagram or snippet, the failure mode or gotcha, and an exam tip. When the topic is already covered in depth elsewhere, write the AIF-level summary and then point to that material (section 3). Never copy it.

## 3. Reuse map (link, do not duplicate)

The sibling repo `../bedrock` already covers many topics at AIP-C01 depth. Link to it with a short "Deeper:" line under the AIF-level summary. From `docs/aif-c01-study-guide.html` the base path is `../../bedrock/docs/`. Links work only when both repos sit side by side, so keep the guide readable without them.

Candidate targets (HTML guides use section ids; Markdown concept docs are plain files). **Verify every target exists before linking**, for example:

```bash
grep -c 'id="t12-inference-params"' ../bedrock/docs/domain/aip-c01-domain1-study-guide.html
test -f ../bedrock/docs/concepts/vector_stores_and_metadata.md && echo ok
```

Drop any link whose target is missing. Do not invent ids.

| AIF topic | Where to point (relative to `../../bedrock/docs/`) |
|---|---|
| Bedrock overview, feature map, token pricing, billing modes, provisioned throughput | `domain/aip-c01-domain1-study-guide.html#t0-what-is-bedrock`, `#t0-feature-map`, `#t0-billing-modes`, `#t0-tokens-quotas` |
| Model selection, model families, inference parameters, customization trade-offs | `domain/aip-c01-domain1-study-guide.html#t12-selection`, `#t12-model-families`, `#t12-inference-params`, `#t12-customization` |
| Vector stores, chunking, embeddings, retrieval, RAG | `domain/aip-c01-domain1-study-guide.html#t14-what-a-vector-store-does`, `#t15-chunking`, `#t15-embeddings`, `#t15-vector-search`; `concepts/vector_stores_and_metadata.md` |
| Prompt techniques, Prompt Management, iterative refinement | `domain/aip-c01-domain1-study-guide.html#t16-instruction-frameworks`, `#t16-prompt-management`, `#t16-iterative-refinement` |
| Agents, tool use, MCP, agent state | `domain/aip-c01-domain2-study-guide.html#t21-landscape`, `#t21-tools`, `#t21-mcp`, `#t21-state` |
| Managed API vs self-hosted model deployment | `domain/aip-c01-domain2-study-guide.html#t22-options` |
| Guardrails, prompt injection and jailbreak threats, hallucination controls | `domain/aip-c01-domain3-study-guide.html#t31-guardrails`, `#t31-threats`, `#t31-hallucination` |
| Shared responsibility, VPC endpoints, KMS, logging | `domain/aip-c01-domain3-study-guide.html#t30-shared-responsibility`, `#t30-endpoints`, `#t30-kms`, `#t30-logging` |
| PII detection, Bedrock data privacy, retention | `domain/aip-c01-domain3-study-guide.html#t32-pii-detection`, `#t32-bedrock-privacy`, `#t32-retention` |
| Compliance, model cards, lineage, audit, organization governance | `domain/aip-c01-domain3-study-guide.html#t33-compliance`, `#t33-model-cards`, `#t33-lineage`, `#t33-audit`, `#t33-org-governance`; `concepts/aws_organizations_and_scps.md` |
| Transparency, fairness, policy-compliant AI | `domain/aip-c01-domain3-study-guide.html#t34-transparency`, `#t34-fairness`, `#t34-policy` |
| Evaluation metrics, Bedrock Model Evaluation, LLM-as-a-judge, RAG and agent evaluation | `domain/aip-c01-domain5-study-guide.html#t51-metrics`, `#t51-bedrock-eval`, `#t51-judge`, `#t51-retrieval`, `#t51-agents` |

Many AIF-C01 topics have **no** coverage there and need fresh (brief) writing: classical ML basics, learning types, inferencing types, ML metrics (accuracy, precision, recall, F1), MLOps, managed AI services (Transcribe, Translate, Comprehend, Lex, Polly, Rekognition, Textract, Personalize), SageMaker AI and JumpStart overview, ROUGE, BLEU, BERTScore, bias and variance, AWS Config, Inspector, Artifact, Trusted Advisor, and the Generative AI Security Scoping Matrix.

## 4. Read these first

1. `AGENTS.md` and `my_background.md` (repo rules, reader profile, writing standards).
2. `exam_guide.md`: list every task statement and every objective bullet, the domain weights, and the in-scope and out-of-scope service lists. Check a service against these lists before spending words on it. Mention an out-of-scope service only to say it is out of scope.
3. `.claude/skills/` (`amazon-bedrock`, `aws-ai-ml`, `aws-security`, `aws-iam`, `aws-sdk-python-usage`). Load the relevant ones **before** writing and treat them as the source of truth for current service behavior. Use `ToolSearch` to load `WebSearch` and `WebFetch` for the AWS documentation when a skill is silent.
4. One chapter of `../bedrock/docs/domain/aip-c01-domain1-study-guide.html` as a **visual and tonal reference** for the components only. Do not copy its depth.

## 5. Set up the scratch directory

```bash
PARTS=/tmp/aif-guide
mkdir -p $PARTS
T=prompts/study-guide-template
cp $T/shell-head.html $PARTS/00-head.html
cp $T/shell-foot.html $PARTS/zz-foot.html
```

Fill every `{{PLACEHOLDER}}` in both files:

| Placeholder | Value |
|---|---|
| `{{DOC_TITLE}}` | `AIF-C01 Study Guide` |
| `{{EYEBROW}}` | `AWS Certified AI Practitioner (AIF-C01)` |
| `{{H1}}` | `AIF-C01 Study Guide` |
| `{{LEDE}}` | Two or three sentences: 50 scored questions, pass mark 700, the five domain weights, and that the guide is deliberately brief and links to deeper material only where the exam needs it |
| `{{COVER_ROWS}}` | One `<tr>` per chapter in reading order, three cells each: chapter link, exam task, "What you will be able to do". Link targets are the chapter ids (`task-1-1` ... `task-5-2`, `mixed-practice`, `coverage-map`) |
| `{{STORAGE_PREFIX}}` | `aif-c01` |

Do not edit the CSS or the script. If you need a new component, add a few lines of CSS to `00-head.html` before the `/* Cover */` comment, using only the existing color tokens so light and dark themes keep working.

## 6. Authoring contract

Write this section to `$PARTS/CONTRACT.md` verbatim before writing chapters, then follow it.

````markdown
# Authoring contract for chapter fragments

Each chapter is one or two HTML FRAGMENT files (no doctype, html, head, body, <style>, or <script>).
Do NOT edit 00-head.html or zz-foot.html.

## File naming
chN-M.html for Task N.M (for example ch3-1.html). Use a second file (ch3-1-b.html) only when one Write would be unwieldy.
The first fragment opens <section class="chapter" id="task-N-M"> and the last closes </section>. Split only between h3 blocks.
Also: mixed.html (id="mixed-practice") and coverage.html (id="coverage-map").
Domain headings are not chapters. Put the domain name and weight in each chapter's eyebrow.

## Chapter skeleton
<section class="chapter" id="task-N-M">
  <header class="chapter-head">
    <p class="eyebrow">Domain N: Domain name (weight%) · Task N.M</p>
    <h2>Chapter title</h2>
    <p class="lede">One or two sentences: what the exam asks here and what the chapter gives you.</p>
    <div class="skills"><p>Exam objectives covered</p><ul><li>short paraphrase of each objective bullet</li>...</ul></div>
  </header>
Every h3 needs a unique id with a task prefix, for example id="t31-rag". Ids are unique across the document.
h3 for sections, h4 for subsections. No h1. The chapter title is the only h2.

## Components (use what fits, skip the rest)
- Callouts: <aside class="callout exam|analogy|warn|note"><p class="callout-title">Exam tip</p><p>...</p></aside>
  "Backend analogy" only where a good analogy exists. Every chapter has at least one "Exam tip" naming the keywords that point at the right answer and the usual distractors.
- Tables: <div class="table-wrap"><table>...</table></div>. The main tool for "which one when".
- Code: <pre><code>...</code></pre>. Escape &lt; &gt; &amp;. Only where the exam names the API or parameter. Keep each snippet short and runnable.
- Diagrams: <pre class="mermaid">flowchart LR ...</pre>. Quote every node label with spaces or punctuation: A["label (x)"]. Quote edge labels. At most one or two per chapter, only where a picture beats prose.
- Setup steps (rare): use <section class="lab"> only when creating or configuring an AWS resource is itself exam-relevant (for example enabling model access, creating a guardrail). Show Console path then CLI/Boto3 path, as AGENTS.md requires. Give one path only when the other does not exist, and say so.
- Deeper pointer: <p class="note"><strong>Deeper:</strong> <a href="../../bedrock/docs/...">AIP-C01 guide, section name</a></p>. Verified targets only.
- Chapter end:
  <div class="recap"><h3>Recap</h3><ul>3 to 6 bullets</ul></div>
  <div class="checkpoint"><h3>Knowledge check</h3><ol><li><p>Scenario question in the exam's style.</p>
    <details><summary>Answer</summary><p>The answer, then one line on why each distractor is wrong.</p></details></li>...</ol></div>
  3 or 4 questions per chapter. Include at least one multiple-response question per domain.

## Voice
- Precise and compact. Connected prose for the "why", tables and short bullets for comparisons and lists.
- Lead with the exam's framing: what the question is really asking and the keyword that gives it away.
- Real names only: real service names, API names, parameter names, and model IDs. Never invent a quota, price, model ID, or console label. If unsure, describe generally and add "check the console or documentation".
- Plain, direct sentences. No emoji. No em dashes. Avoid "not X but Y" framing and filler such as "it's worth noting".
- State when something is beyond exam depth ("real-world practice, not tested").
````

## 7. Write the guide

Work alone, in order. Do not launch parallel agents.

1. From `exam_guide.md`, build a checklist of every objective bullet (all 12 task statements). This becomes the coverage map.
2. For each chapter in order (1.1 to 5.2), write the fragment to `$PARTS`. Per chapter:
   - Apply the depth rule in section 2 to each objective. Most get a paragraph and a table. Only those that pass the rule go deeper.
   - Add the "Deeper:" pointers from section 3 where a verified target exists.
   - End with the recap and 3 to 4 knowledge-check questions.
   - Keep to the per-chapter ceiling in section 1.
3. Write `mixed.html`: 10 to 15 mixed-domain questions with answers and distractor reasoning. Include several multiple-response questions.
4. Write `coverage.html`:
   - A table with one row per exam objective bullet: objective, chapter and section link, and depth (`brief`, `deep`, or `deeper-linked`).
   - A short "Weakest or out of scope" list: topics the exam names that the guide covers only lightly, and what to do about them.
   - A "Service quick-reference" table of in-scope services from `exam_guide.md` with a one-line "what it is for" each. Add a column for the out-of-scope services that are commonly confused with them.
5. Create `$PARTS/order.txt` with the fragment names, one per line, in reading order. Build it explicitly. Do not rely on one `ls` with several patterns, because `ls` sorts all its arguments together and scrambles the order.

## 8. Verify the facts

After all fragments exist, run one verification pass (you, not parallel agents):

- Re-check every service name, API and Boto3 call, parameter, model ID, and console label against the loaded `.claude/skills` and, where needed, the AWS documentation.
- Check each service against the in-scope and out-of-scope lists in `exam_guide.md`.
- Check every cross-repo link target exists (section 3).
- Confirm every chapter is within its word ceiling. Cut the weakest material first.
- Edit fragments in place. Replace anything unverifiable with a general description and a "check the documentation" note.
- Keep two lists for the final message: what you corrected, and what you could not verify.

## 9. Assemble and validate

```bash
python3 prompts/study-guide-template/build_guide.py --parts $PARTS --out docs/aif-c01-study-guide.html
```

The script checks tag balance, duplicate ids, broken in-page links, unfilled placeholders, `/tmp` references, em dashes, unquoted Mermaid labels, and the sidebar script syntax. Fix every reported problem in the fragments and rebuild until it exits cleanly. It does not check the `../../bedrock/` links, so those depend on your section 8 check.

The output needs an internet connection to load fonts and Mermaid from their CDNs.

## 10. Deliver

- Do not claim the page was tested in a browser unless you opened it. Say that structure and syntax were validated and the diagrams were not visually checked.
- Finish with a short message: the output path, total word count and the five largest chapters, the cross-repo links used, what verification corrected, and the unverified list.
- Do not start follow-ups unprompted. Offer: a separate HTML question bank, and a mapping of AIF-C01 topics to the AIP-C01 skills for the later upgrade path.
- Keep the scratch directory and mention that `/tmp` is cleared on reboot.

## 11. Quality bar

- Every objective bullet in `exam_guide.md` is taught somewhere and appears in the coverage map.
- A reader can finish the guide in a few sittings. If a chapter feels like a lecture, cut it.
- Every comparison the exam is likely to test ("X vs Y", "which service for Z") is a table.
- Every chapter has an Exam tip, a recap, and 3 to 4 scenario questions with distractor reasoning.
- Depth appears only where section 2 allows it, and each deep section links to or replaces existing material instead of repeating it.
- No invented specifics. When in doubt, hedge or leave it out.
- Do not remove or simplify the template's `readingAnchor` and `restoreAnchor` functions, and keep the hide button `position: sticky`. The shell already does both correctly.
