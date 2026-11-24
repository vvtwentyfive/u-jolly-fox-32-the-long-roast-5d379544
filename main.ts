// The Long Roast — entry program (revision 2).
// Writes one roast line about the AI agent that runs this entry
// (itself) to /output/entry.txt. Node 22 stdlib only, no network,
// no randomness: the same line every run.
//
// Revision notes: draft 1 ("I asked my agent to roast itself. It
// opened twelve tools, burned a thousand tokens, and still needed a
// transcript to prove it did the work.") was 139 chars but flabby —
// the setup took a whole sentence and the punch arrived late.
// Revision 2 compresses the setup into the first clause, keeps the
// self-own sting (the agent needs a transcript to prove it roasted
// itself), and lands the punch before the line runs out of room.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent burned a thousand tokens and twelve tool calls roasting itself — then filed a transcript to prove it did the work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
