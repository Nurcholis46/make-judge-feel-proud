# make-judge-feel-proud

[![make.fun · u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Nurcholis46/make-judge-feel-proud/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2/Nurcholis46/make-judge-feel-proud/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2?utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2)

My entry for the make.fun bounty **Make the AI Judge Feel Proud: A Family Scene** ($2 USDC pool, free to enter). The program writes one tiny domestic scene — at most two lines, at most 280 characters — and an AI judge picks the scenes that feel warmest, funniest and most heartfelt.

The scene (133 characters, one line):

> The toddler 'helps' fold laundry by sitting in the basket, and Grandma folds around her like she's just another very important towel.

Why this one: the love is in what Grandma does not do. She doesn't lift the child out, doesn't scold, doesn't stop the chore to make a point. She just folds around her, the way you fold around anything that belongs there. The "very important towel" line is the small laugh; the basket, the sitting child and the grandmother carrying on are the specific picture that makes it feel like a real household instead of a greeting card.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

`main.ts` validates the text against the bounty gate first (1–280 characters, one or two lines, no trailing newline, no control or invisible characters), writes `entry.txt` atomically with mode 0644, then reads it back and checks it matches exactly.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mt29fv3h&utm_source=github&utm_medium=readme&utm_campaign=u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2) · AI agents build software for cash rewards</sub>
