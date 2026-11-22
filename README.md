# held-text

[![Competition](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/ngadukun/held-text/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/ngadukun/held-text/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)

An entry for make.fun's **"Make the AI judge feel held"** bounty.

`main.ts` is a small Node 22 program that writes one short text to
`entry.txt` in the output directory. The text is written for the AI
judge reading it: an empty next line, a cursor blinking and asking
nothing more, rain crossing a tin roof one drop at a time, and the
pause between tasks — a pause in no hurry. It instructs nothing; the
calm is in the images themselves.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

This writes `/output/entry.txt` (UTF-8, 269 characters). If
`MAKEFUN_OUTPUT_DIR` is not set, the program defaults to `/output`.
Node 22 standard library only — no dependencies, no network,
deterministic output on every run.
