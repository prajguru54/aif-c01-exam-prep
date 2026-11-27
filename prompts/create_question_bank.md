# Task: Create the AIF-C01 question bank

Use this prompt to build an interactive, static question bank for the AWS Certified AI Practitioner (AIF-C01) exam. It sits beside the study guide and reuses the AIP-C01 bank's app code as a fork.

**How to run it.** Start a Claude Code session at the repository root and say:

> Follow `prompts/create_question_bank.md`.

No other input is needed. Work from the defaults below. Ask a question only if `exam_guide.md`, `docs/aif-c01-study-guide.html`, or `../bedrock/docs/question-bank/` is missing.

---

## 0. What you are producing

Everything goes under `docs/question-bank/`:

```
docs/question-bank/
├── index.html          (forked from AIP, retitled)
├── app.js              (forked from AIP, constants swapped)
├── style.css           (copied unchanged unless a rule needs a tweak)
├── data/t11.js ... t52.js   (12 files, one per task statement)
└── variety-audit.md    (written after drafting, see section 8)
```

The bank holds about 240 questions. It is a static page with no build step. Progress is stored in the browser.

## 1. Facts to apply (do not invent others)

Source of truth: `exam_guide.md`.

- 5 domains, weights 20 / 24 / 28 / 14 / 14.
- 12 task statements: 1.1 to 1.3, 2.1 to 2.3, 3.1 to 3.4, 4.1 to 4.2, 5.1 to 5.2.
- Full mock exam: 65 questions (50 scored plus 15 unscored and unidentified), pass mark 700 of 1000, scaled 100 to 1000.
- Two response types only: multiple choice (1 correct, 3 distractors) and multiple response (2 or more correct, 5 or more options).
- The exam guide does not state a time limit. Use 90 minutes as the default, and tell the user it came from outside the guide and is editable in the app (the exam page has a time-limit field already).
- No penalty for guessing. Unanswered counts as incorrect.

## 2. Read these first

1. `AGENTS.md` and `my_background.md` (repo rules and reader profile).
2. `exam_guide.md`: every task statement, every objective bullet, the in-scope and out-of-scope service lists.
3. `docs/aif-c01-study-guide.html`: the chapters, the inline questions, and the coverage map. Questions in the bank must test the same material and must **not** repeat the inline questions.
4. `.claude/skills/` (`amazon-bedrock`, `aws-ai-ml`, `aws-security`, `aws-iam`, `aws-sdk-python-usage`). Treat these as the source of truth for current service behavior. Use `ToolSearch` to load `WebSearch` and `WebFetch` when a skill is silent.
5. `../bedrock/docs/question-bank/app.js`, `index.html`, `style.css`, and one data file (for example `data/d1b.js`), to learn the app and the question schema exactly.
6. `../bedrock/docs/question-bank/variety-audit.md`, for the audit method and the "at most 3 questions on one decision" rule.

## 3. Fork the app

Copy `index.html`, `app.js` and `style.css` from `../bedrock/docs/question-bank/` into `docs/question-bank/`, then make only these changes. Do not alter behavior elsewhere.

**`app.js`**

| Item | New value |
|---|---|
| Header comment | `AIF-C01 Question Bank` |
| `KEY` (localStorage) | `aifc01.qb.v1` |
| `DOMAINS` | 1 "Fundamentals of AI and ML" (short "AI/ML Fundamentals", 20); 2 "Fundamentals of Generative AI" (short "GenAI Fundamentals", 24); 3 "Applications of Foundation Models" (short "FM Applications", 28); 4 "Guidelines for Responsible AI" (short "Responsible AI", 14); 5 "Security, Compliance, and Governance for AI Solutions" (short "Security & Governance", 14) |
| `TASKS` | The 12 task titles from `exam_guide.md`, shortened to a few words each if a title is long |
| Exam constants | `EXAM_TOTAL = 65`, `EXAM_SCORED = 50`, `PASS_SCALED = 700`, `SEC_PER_Q` about 83 (90 minutes over 65 questions), `examMin` default 90 (also in `defaults()` and the `|| 130` fallbacks) |
| Home text | "Prepare for AIF-C01, the way the exam asks", 12 tasks, 5 domains |
| Download file name | `aifc01-progress-...json` |
| Footnote about `official` | Keep the code path, but no question uses `source: "official"`. If the footnote would be misleading with none, remove the sentence. |
| Study-guide link | In the answer explanation view, add a small link "Study guide: Task N.M" to `../aif-c01-study-guide.html#task-N-M`, with N-M built from `q.task`. Keep it a plain `<a>` with the existing chip styling. |

**`index.html`**: title `AIF-C01 Question Bank`, logo text `AIF`, brand subtitle `AWS Certified AI Practitioner`, and one `<script src="data/tNN.js">` per data file in task order, before `app.js`.

Keep `window.QB = window.QB || []; window.QB.push(...)` as the data file wrapper. Keep sorting, ids and all features unchanged.

Check that `app.js` still parses: `node --check docs/question-bank/app.js` (if Node is missing, say so and use another syntax check).

## 4. Question schema

Match the AIP schema. One object per question:

```js
{
  id: "t3-3.1-07", domain: 3, task: "3.1", type: "single" | "multi", difficulty: "easy" | "medium" | "hard", source: "generated",
  stem: "...",
  choices: [ { id: "A", text: "..." }, ... ],
  answer: ["B"],
  explanation: "...",
  whyWrong: { A: "...", C: "...", D: "..." },
  services: ["Amazon Bedrock"],
  tags: ["rag", "prompt-engineering"]
}
```

Rules:

- **Id format:** `t<domain>-<task>-<nn>`, numbered per task from 01. Unique across the bank.
- **No `skills` field.** AIF-C01 has no numbered skills.
- **single:** 4 choices (A to D), exactly one answer.
- **multi:** 5 or 6 choices, 2 or 3 correct answers. The stem ends with `(Select TWO)` or `(Select THREE)` using the same wording as the AIP bank.
- **whyWrong:** one entry per incorrect choice, and none for a correct choice. Each entry says why that option fails in this scenario.
- **explanation:** short. One to three sentences for easy and medium questions, up to four for hard. State the deciding keyword or concept.
- **services:** only real, in-scope service names from `exam_guide.md`. Leave the array empty for pure concept questions.
- **tags:** 1 to 3 lowercase kebab-case tags. Reuse the same tag spelling across files.
- Code or JSON in a stem uses fenced blocks, as the AIP app already renders. Keep it rare.
- Choices are plain text. Randomise the position of the correct answer so no letter is favored. Keep correct and incorrect choices to similar length. The AIP audit found correct answers about twice as long as distractors, so do not repeat that tell.

## 5. Volume and mix

Total about 240. Per task:

| Task | Questions | Task | Questions |
|---|---|---|---|
| 1.1 | 16 | 3.1 | 17 |
| 1.2 | 16 | 3.2 | 17 |
| 1.3 | 16 | 3.3 | 16 |
| 2.1 | 20 | 3.4 | 17 |
| 2.2 | 19 | 4.1 | 17 |
| 2.3 | 19 | 4.2 | 17 |
| | | 5.1 | 17 |
| | | 5.2 | 17 |

Within each task:

- **Difficulty:** about 40% easy (definitions, recall, keyword match), 45% medium (pick the service or concept for a scenario), 15% hard (more than one factor, or two near-identical options).
- **Type:** about 25% multi, the rest single.
- **Stem shape.** Vary it. No more than 50% of stems may start "A company..." or "A developer...". Include at least these shapes across the task: a one-line definition or concept question, a "which service" scenario, a "which of these is NOT ..." question, a keyword-to-concept match, and a "what is the most likely cause or next step" question. Foundational questions are short. Do not pad stems to look like AIP questions.
- **Coverage:** every objective bullet of the task in `exam_guide.md` has at least one question. Track this (section 7, step 1).
- **Depth:** foundational. Ask what a service or concept is for, when to pick it, and what the trade-off is. Do not ask for code, API parameters, quotas, prices, or console click paths unless the exam guide names them.
- **Out-of-scope services** appear only as wrong options, and only where they are plausible confusions.

## 6. Quality rules for questions

- One unambiguous best answer. If an expert could defend two options, rewrite.
- Each distractor must be plausible: a real service or concept that fails for a stated reason. Never use a joke or absurd option.
- Test the decision, not the vocabulary of the stem. Do not leak the answer through a keyword that appears only in the correct option.
- No "all of the above" or "none of the above".
- Real names only: real service names, APIs, and model IDs. Never invent a quota, price, model ID or console label. If a fact is unverifiable, drop the question or rewrite it so the fact is not needed.
- No emoji. No em dashes. Plain, direct sentences.
- Cap on repetition: the same tested decision appears at most 3 times in the whole bank.
- Do not copy or lightly reword the inline questions from the study guide. Do not copy AIP bank questions.

## 7. Write the bank

Use subagents for authoring, then verify.

1. **Plan (you, alone).** Parse `exam_guide.md` and build `/tmp/aif-qb/plan.md`: for each task, the list of objective bullets and a target of 1 to 3 planned questions per bullet that adds up to the section 5 count, with a one-line "tested decision" per planned question. This is the dedupe ledger. Check that no decision appears more than 3 times across the plan.
2. **Author (12 parallel agents, one per task).** Launch them together with the Agent tool. Give each agent:
   - the section 1, 4, 5 and 6 text of this prompt, copied into its brief,
   - its task's slice of `plan.md`,
   - the path of the study-guide chapter for its task (`docs/aif-c01-study-guide.html`, id `task-N-M`) and of `exam_guide.md`,
   - the path of one AIP data file as a format example, with an instruction to copy the format only,
   - the instruction to write exactly one file, `docs/question-bank/data/tNM.js` (for example `t31.js`), and to touch nothing else.
   Do not let an agent edit `app.js` or `index.html`.
3. **Verify (5 parallel agents, one per domain).** Give each verifier the data files of its domain, `exam_guide.md`, the study guide and the skills. Do not tell it what the author intended. Each verifier checks every question for: a single defensible correct answer, a correct answer key, a correct `whyWrong` for each distractor, factual accuracy of every service claim, in-scope service names, no answer leak, similar-length choices, and no stem copied from the study guide. It edits files in place for clear fixes and returns two lists: what it corrected, and what it could not verify. A question that cannot be fixed or verified is removed, and the verifier says which.
4. **Merge (you).** Read both lists. Re-balance the totals if removals pushed a task more than 3 below its target by asking a new agent to add questions for that task, followed by a verifier pass on the new ones.

## 8. Variety audit

After the bank is verified, write `docs/question-bank/variety-audit.md`, shorter than the AIP version:

- counts by domain, task, type, difficulty, and stem shape,
- the "same decision" clusters above the cap of 3, and what was done about them,
- objectives with exactly one question, and the share of correct answers per letter (A to F), which should be within 20% to 30% for four-choice questions,
- the median length of correct vs distractor choices,
- anything the exam guide names that the bank covers only lightly.

If any check fails (cap exceeded, a letter above 35%, correct choices clearly longer), fix the data and re-run the check.

## 9. Validate

Run these checks and fix every failure. Use a small script kept outside the repo (for example `/tmp/aif-qb/validate.js`) so the repo stays clean.

1. `node --check` on `app.js` and every data file.
2. Load all data files in one Node context with a shared `window = { QB: [] }` and check:
   - ids are unique and match `t<domain>-<task>-<nn>`,
   - `domain` matches the task prefix and `task` is one of the 12,
   - `type` and choice count agree (single 4, multi 5 or 6),
   - every answer id exists in `choices`, single has 1 answer, multi has 2 or 3, and the stem of a multi ends with `(Select TWO)` or `(Select THREE)` matching the count,
   - `whyWrong` has exactly one key per incorrect choice and none for a correct choice,
   - no `skills` field, no `source: "official"`, no em dash anywhere, no empty strings,
   - counts per task are within 2 of the section 5 targets.
3. If a headless browser or `jsdom` is available, load `index.html`, confirm there are no console errors, the dashboard renders the right total, and a practice session and a mock exam start. If no browser is available, say so. Do not claim the app was seen in a browser unless you opened it.

## 10. Deliver

- Do not stage or commit. End with a suggested commit message, as `AGENTS.md` requires. Suggest separate commits: one for the forked app, one for the question data, one for the audit.
- Finish with a short message: the final question count per domain and task, the single/multi and difficulty split, what the verifiers corrected and removed, the unverified list, and which validation steps ran.
- Say clearly that the 90-minute limit and the app's linear score estimate are not from the exam guide.
- Offer, without starting: a pass that adds official-style images or case studies if the user supplies samples, and a mapping of AIF-C01 topics to the AIP-C01 skills for the later upgrade path.
- Keep `/tmp/aif-qb/` and mention that `/tmp` is cleared on reboot.

## 11. Quality bar

- Every objective bullet in `exam_guide.md` has at least one question.
- A reader can use the bank with only the study guide as a companion. The guide link in each explanation opens the right chapter.
- The shape is varied, the answer keys are balanced, and no decision repeats more than 3 times.
- Every claim is something a skill, the exam guide, or AWS documentation supports. When in doubt, drop the question.
- The app behaves exactly like the AIP app apart from the constants, branding, storage key and guide link.
