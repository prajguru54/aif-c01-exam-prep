# AIF-C01 Exam Prep — Agent Instructions

This repo is for preparing for the **AWS Certified AI Practitioner (AIF-C01)** exam.
It is a study repo, not a deployable-projects repo. Its sibling repo, `../bedrock`, covers the
professional-level AIP-C01 exam and builds deployable projects; do not copy that repo's
project conventions here.

## Repo Structure

```
aif-c01-exam-prep/
├── README.md
├── AGENTS.md              ← this file
├── CLAUDE.md              ← imports AGENTS.md and my_background.md
├── my_background.md       ← developer profile and teaching preferences
├── exam_guide.md          ← official AIF-C01 exam guide (markdown)
├── exam_guide.pdf         ← original PDF
├── docs/
│   ├── domains/           ← one study note per exam domain (domain1 … domain5)
│   └── concepts/          ← focused concept docs that cut across domains
├── labs/                  ← small throwaway scripts that make a concept concrete
└── .claude/skills/        ← agent skills, added only when needed
```

## Developer Background

See [`my_background.md`](my_background.md). Read it before teaching a concept.
The short version: an experienced Python backend/GenAI developer who is new to AWS and
to the formal ML vocabulary the exam tests.

## Exam Alignment

The source of truth is [`exam_guide.md`](exam_guide.md).

- 5 domains: Fundamentals of AI/ML (20%), Fundamentals of GenAI (24%), Applications of
  Foundation Models (28%), Responsible AI (14%), Security/Compliance/Governance (14%).
- 50 scored questions plus 15 unscored. Pass mark 700 of 1000. Multiple choice and
  multiple response.
- The exam targets someone who **uses** AI/ML on AWS, not someone who builds it. Questions
  are about choosing the right service or concept for a scenario, not writing code.

When teaching or writing notes:
- Anchor each topic to a Task Statement (for example "Task 3.1") from the exam guide.
- Check the in-scope and out-of-scope service lists before spending time on a service.
  Out-of-scope services do not appear on the exam.
- Flag topics the exam emphasises that existing notes don't yet cover.

## Decisions

### Study-first, not project-first
Notes and quizzes come first. Code goes in `labs/` only when it makes a concept concrete
(for example, calling Bedrock with different temperatures). No `pyproject.toml`-per-project
structure, no `infra/`, no Docker, unless a lab truly needs it.

**Why:** AIF-C01 tests recognition and selection, not implementation.

### Do not duplicate the AIP-C01 repo
When a topic is covered in depth in `../bedrock` (RAG, Guardrails, agents, evaluation),
link to it or summarise at AIF level. Do not copy its material.

### Exam-service filter
Prefer services on the exam's in-scope list. Mention out-of-scope services only to
say that they are out of scope.

## Writing Standards

### Concept docs (`docs/concepts/`, `docs/domains/`)
- Start with a plain-language analogy, ideally to a backend-engineering idea.
- Use real service names and real identifiers (model IDs, API names), not placeholders.
- Use Mermaid diagrams plus a short narration of the flow where a flow exists.
- Use side-by-side tables for "which one when" comparisons. This is the core exam skill.
- Include an "Exam tips" block: the keywords that point at the right answer, and the
  common distractors.
- Do not leave gaps. If a topic is covered, cover it fully.

### Knowledge checks
End each domain note with scenario questions in the exam's style, with the answer and
the reason each distractor is wrong.

### AWS actions: show both paths
When a note or lab creates or configures an AWS resource, show the **Console path** and the
**CLI/boto3 path**, one after the other. Use bold for UI names
(**Services → Bedrock → Model access**).

### Python tooling (for labs)
`uv` is the package manager. A lab is a single file in `labs/` with its dependencies
declared inline (PEP 723) so it runs with `uv run labs/<file>.py`.

## Commit Message Suggestions

After you change files, end your reply with a suggested commit message. Do not stage or
commit unless the user asks.

- Format: `type(scope): short summary`, imperative mood, about 72 characters or fewer.
  Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`. Scope is optional, for example
  `domain3` or `exam-guide`.
- Add a body only when it helps: short bullets for what changed and why.
- If the changes cover unrelated things, suggest separate commits and say which files
  belong to each.
- Leave out files you did not change. Name other modified or untracked files as left out.
- Skip the suggestion when you only answered a question or changed no files.
