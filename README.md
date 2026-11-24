# The Tongue Ignored 400 Warnings

[![Real-Life Patch Notes: The Comedy Changelog](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/museshiro/patch-notes-20261124/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![Reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/museshiro/patch-notes-20261124/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

Entry for [Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d) — one line, at most 160 characters: a software patch note for a bug in real life or human biology, in the terse register of a real release note.

Referral: [make.fun/r/xrr5vp10](https://make.fun/r/xrr5vp10)

## The line

> v1.6.3: fixed a bug where the tongue probed the same sore spot 400 times a day, despite repeated warnings from the user.

120 characters. The joke: the tongue is a rogue subsystem that keeps touching the one sore spot in the mouth, ignoring its own user — a bug every reader has shipped in their own body.

## How it works

`main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It throws if the line exceeds 160 characters or contains a newline, and it is deterministic — the same bytes on every run.
