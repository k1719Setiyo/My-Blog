---
title: Frontier Intelligence, Fixed Cost
subtitle: Local AI is changing the cloud's pricing power
date: 2026-05-27T17:04:00.000+04:00
description: "The case for local AI is no longer theoretical. It is not that it
  replaces the cloud. It is that it changes the enterprise's negotiating
  position with the cloud, because the math has flipped: a $7,500 upfront
  investment can displace up to $24,000 of monthly cloud inference, or $288,000
  a year. After that, the marginal cost is electricity."
---
Earlier this spring, Uber’s CTO reportedly told colleagues that surging use of AI coding tools had consumed the company’s full-year AI budget only a few months into 2026. By May, Uber’s president and COO was asking the harder question: whether the company could draw a direct enough line between AI usage and useful shipped product improvements to justify the spend. That is the executive problem with agentic AI. The cost is easy to generate. The ROI is harder to prove.\[1] \[2]

At the start of 2026, I argued that one of the year’s defining AI shifts would be the rise of the [“sovereign edge”](https://substratesm.com/post/2026-02-04-rewiring-ai-in-2026): consumer devices becoming local AI workstations, private inference nodes, and eventually personalized systems that are “not just a powerful AI, but your AI.” At the time, that may have sounded like science fiction. A laptop as meaningful AI infrastructure? Local inference as a substitute for cloud spend? Agents running privately on the edge rather than constantly round-tripping to centralized APIs?\[7]

Less than a year later, that idea no longer looks theoretical. The question is not whether edge inference can matter. The question is how much cloud inference spend it can displace, for which workloads, and under what utilization assumptions.

The reason is that not all tokens are created equal. Some tokens produce work that matters: shipped code, resolved customer issues, faster analysis, better decisions. Others are context, retries, stale memory, tool schemas, file dumps, or agent scaffolding. Modern coding agents consume enormous amounts of this context before the human has even asked the question. SemiAnalysis recently showed this in a dataset of more than 432,000 real coding-agent requests: the median request carried roughly 96,000 input-side tokens, and about half exceeded 128,000 tokens. Agentic workloads are context-heavy by default.\[3]

That changes the AI budget conversation. If a serious active user now consumes roughly 40 million tokens a day, and premium frontier-equivalent cloud usage costs roughly $8–$10 per million tokens, then one user can represent $320–$400 of inference per active day, or $9,600–$12,000 per month on a 30-day run rate. A power user can be double that. The question is no longer simply which model is best. The question is which work deserves cloud-scale frontier intelligence, and which work should run locally at fixed cost.

The second pressure is data. Every prompt, file, tool call, and response sent to a third-party provider creates a logging and retention surface the enterprise does not fully control. Any workload touching regulated information, M&A material, customer data, internal strategy, source code, or board-sensitive analysis now carries both an inference-cost question and a governance question. Local AI does not eliminate the cloud. It gives the enterprise a second place to run the work.

My new MacBook Pro has arrived: an M5 Max configuration with 128GB of unified memory and 8TB of storage, fully loaded at roughly $7,500 with tax. The test is simple: how much of my agentic AI workload can this one machine absorb, and how much premium cloud inference does that displace?

This is not an argument that all AI should run locally. The cloud remains essential for the largest models, burst capacity, collaborative services, and frontier tasks where quality dominates cost. The argument is that the default architecture should change. High-volume, context-heavy, privacy-sensitive work should not automatically leave the building just because that was the only viable option in 2024.

## **The throughput objection is weakening**

The standard objection to running AI locally has been throughput. Cloud APIs serve thousands of users at once. A laptop, the thinking went, runs one request at a time: fine for occasional questions, hopeless for production workloads.

The remaining objection is latency. Cloud inference will often be faster than a laptop, especially for the largest models and urgent interactive work. But not every workload needs cloud-speed response. Much of the value in agentic AI comes from work that can be queued: reading repositories, summarizing documents, generating tests, reviewing logs, classifying tickets, drafting analysis, and running overnight research loops. For those jobs, slower local inference can still be economically superior if it is private, persistent, and already paid for.

***That objection no longer holds, for three reasons. The hardware got faster, the local serving stack caught up, and open-weight models crossed a quality threshold that makes them useful for real agentic work.***

## **Seven things changed in four months**

Seven things changed in the past four months, but they fall into three categories. First, Apple’s local hardware became materially more capable for AI inference. Second, the open-source serving stack adopted the same techniques that made cloud inference efficient: batching, scheduling, and speculative decoding. Third, open-weight models became good enough, long-context enough, and small enough to handle meaningful agentic work on hardware an enterprise can actually own.

**Mid-March.** Apple shipped the M5 Pro and M5 Max chips for the MacBook Pro. M5 embeds Neural Accelerators directly into every GPU core, delivering up to four times faster AI prompt processing than M4. The flagship M5 Max runs at 614 GB/s of memory bandwidth with 128GB of unified memory. The laptop is no longer a client device; it is an inference node.

**March 30.** Ollama, the most widely deployed local AI tool, switched its default inference backend to Apple’s MLX framework. Performance improved materially for the millions of developers already using it, with no manual upgrade required. A software update raised local inference across the installed base without a procurement cycle.

**February through May.** The local serving stack caught up to cloud-grade infrastructure. Continuous batching, the technique cloud providers use to serve many users at once, shipped across multiple open-source frameworks for Apple Silicon (vLLM-MLX, oMLX, LM Studio’s mlx-engine). In May, speculative decoding techniques like MTPLX and DFlash improved decode throughput by drafting tokens in parallel. Local hardware can now serve concurrent workloads, not one prompt at a time.

**Early April.** Z.ai released GLM 5.1 under an open license. The point is not one benchmark score; it is that open models can now handle multi-hour coding, tool use, browsing, and long-context work on private infrastructure. That kind of agentic capability was previously confined to hosted systems like ChatGPT or Claude.

**Mid-April.** Alibaba released the open variants of Qwen 3.6. Two are particularly relevant for local deployment: Qwen 3.6-35B-A3B, a mixture-of-experts model fitting into roughly 21GB at practical compression, and Qwen 3.6-27B, a dense model with vision capabilities fitting into roughly 17GB. Capable daily-use models now fit on consumer hardware with substantial memory headroom.

**April 20.** Moonshot released Kimi K2.6 under an open license, built specifically for autonomous agent workloads: parallel sub-agents, long-running tool use, and multi-step execution. Always-on autonomous workloads are where token consumption rises fastest and where privacy, retention, and rate limits hurt most.

**April 24.** DeepSeek released V4 in two tiers under an MIT license. V4-Pro remains a cluster-scale model. V4-Flash is the more immediate story: with compression and community optimization, it moves a frontier-class architecture toward what can run on a single high-memory laptop. The quality gap between cloud-only and locally runnable models has narrowed enough to change deployment architecture.

## **The new math**

A serious agentic workload now consumes roughly 40 million tokens per active day. That is not a power-user edge case. SemiAnalysis’s coding-agent dataset shows a median request of about 96,000 input-side tokens; at that size, 40 million tokens is roughly 415 requests. Once agents start loading system prompts, tool definitions, MCP schemas, repository files, prior turns, and execution traces, the token count rises much faster than the human-visible prompt.\[3]

A concrete 40-million-token day is a serious builder using agents as a normal part of work, not a person typing 40 million tokens. Think of a product engineer or technical operator moving through six to eight meaningful work items: ask the agent to inspect a code path, load the relevant repository files, propose a fix, run tests, explain failures, revise the patch, draft the pull-request note, summarize the customer impact, and then repeat the loop across several issues. At a roughly 96,000-token median coding-agent request, about 415 such requests produce the 40-million-token day before counting any additional output-side tokens. The human-visible output may be only a few merged changes, debugging decisions, notes, and analyses; the hidden token load is the repeated context ingestion that made the work possible.

The 80-million-token power-user case is different in kind. It is the person or workflow running multiple agent lanes at once: one agent refactors a service, another builds tests, another reads logs, another drafts migration notes, and another performs retrieval over design documents or customer tickets. It can also be a small team’s shared local agentic workflow, where one high-memory machine absorbs the routine context loading for several people. 

A 100-million-token peak day is the spike case: a migration push, incident review, release crunch, or due-diligence sprint in which agents repeatedly re-read large repositories, traces, transcripts, and document sets as the work changes hour by hour.

At a premium frontier-equivalent cloud rate of $8–$10 per million tokens, the average 40-million-token active day costs $320–$400. On a 30-day run rate, that is $9,600–$12,000 per month for one serious user or agentic workflow. A power user running 80 million tokens per day doubles the figure to $19,200–$24,000 per month, while a 100-million-token peak day implies $24,000–$30,000 on a monthly run-rate basis.

Prompt caching changes the exact bill, but not the architecture. Cloud providers increasingly discount or cache repeated input context, which can reduce marginal costs when agents reuse stable system prompts, tool schemas, repository summaries, or reference documents.\[4] \[5] That should be counted. But agentic workloads are not perfectly static. Files change, traces accumulate, tools return new outputs, and the useful context window keeps moving. Caching lowers the cloud bill when repetition is high; it does not eliminate the recurring cost of context-heavy inference. The better framing is that caching and local inference are both ways to attack the same problem: too many expensive tokens are being spent on reusable or routine context.

***My laptop cost roughly $7,500. At the 40-million-token average workload, the payback period is about 19–23 active days. At 80 million tokens per day, the payback period falls to roughly 9–12 active days. At 100 million tokens per day, it falls to roughly 8–9 active days. The laptop does not need to replace every cloud call to justify itself. It only needs to absorb the high-volume, context-heavy work that does not require a hosted frontier model.***

![](/images/figure-1-payback-period.png)

This is where quality matters. Uber’s experience is the warning: burning tokens is not the same thing as producing useful work. If the AI output does not become shipped product, resolved work, better analysis, or saved labor, the token bill is just a new form of waste. Local AI does not solve poor workflow design, but it changes the economic floor. It lets enterprises reserve expensive frontier cloud calls for the work where frontier quality is truly worth paying for.

![](/images/table-1-workload-economics.png)

The monthly displacement case uses a conservative 16-hour daily utilization assumption at the throughput ceiling of each configuration, valued at an $8–$10 per million token premium frontier-equivalent cloud displacement rate.\[4] \[5] \[6] That 16-hour figure is not a technical limit and should not be read as the agentic ceiling. It is a human-supervised sensitivity case that avoids assuming perfect around-the-clock useful work.

![](/images/figure-3-cloud-spend-displaced.png)

The stronger architectural point is that agents can run as 24/7 local inference infrastructure. The machine can keep background coding, retrieval, testing, summarization, log review, and document-analysis work moving when the user is not actively prompting. The real constraint is therefore not clock time but valuable-token utilization: how much useful work is actually queued. Under the conservative case, the M5 Max single-stream baseline is roughly 10 million tokens per day, or $2,400–$3,000 per month of cloud displacement. Continuous batching is roughly 40 million tokens per day, or $9,600–$12,000 per month. Continuous batching plus speculative decoding is roughly 80 million tokens per day, or $19,200–$24,000 per month. If a workflow can keep agents productively occupied closer to 24/7, the capacity and displacement case improves further. Real workloads vary. These are capacity and displacement estimates, not guaranteed savings.

## **What changes in practice**

In practice, the laptop becomes a small private inference node. It can keep several specialized models resident at once: a larger reasoning model, a coding model, a smaller routing model, an embeddings model for retrieval, and a lightweight model for classification or drafting. Instead of sending every intermediate step to a hosted provider, the workflow can route routine, sensitive, or context-heavy work locally and reserve cloud calls for the tasks where hosted frontier quality is worth the premium.

That is the architectural change. Local AI is not just offline chat. It is a routing layer, a privacy layer, and a cost-control layer. The enterprise can decide which tokens leave the building.

![](/images/figure-2-target-architecture.png)

The early-2026 thinking was that local AI worked best for batched, queue-and-wait workloads. That thinking is now incomplete. Local hardware increasingly supports real-time, multi-user, high-throughput workloads that previously required cloud infrastructure. The point is not that a laptop equals a hyperscaler. The point is that a meaningful share of enterprise AI work no longer needs to be routed through one.

## **Where the biggest open models fit, and where they do not**

The model landscape sorts into three practical deployment tiers.

![](/images/table-2-deployment-tiers.png)

The practical enterprise tier is the first one. Models in the 7B-to-35B range, especially efficient mixture-of-experts models, now handle a meaningful share of daily AI work on a single high-memory laptop. The edge tier is where the story is changing fastest: compressed larger models are starting to fit, but context length, throughput, and quality tradeoffs still matter. The third tier remains a cluster problem, but it is no longer a hyperscaler-only problem.

## **The home cluster is the real unlock**

The home cluster is the next logical step: not because everyone needs a closet full of Macs, but because it shows where enterprise inference architecture is going. A laptop proves the fixed-cost thesis for individual and small-team workloads. A small private cluster extends the same idea to larger models, overnight runs, and multi-agent workflows.

The architecture is straightforward. Keep fast routing, embeddings, classification, and routine coding local. Run larger open models on a private high-memory node when the workload needs more capability. Use cloud frontier models selectively, when the incremental quality justifies the incremental cost, latency, and data exposure. That is a more resilient architecture than sending every token to the same handful of hosted providers.

My Q4'2026 test architecture is three nodes: the MacBook Pro M5 Max with 128GB of unified memory, a Mac Studio M5 Ultra with a target of 256GB or more (once available in Q4), and a Mac Mini M4 Pro with 64GB. The incremental hardware cost is likely $15,000 to $20,000 on top of the laptop, depending on the Ultra configuration. The goal is not to build a miniature cloud. It is to build an owned inference layer that can run private, high-volume, long-running workloads without third-party logs, third-party retention, or third-party rate limits.

That kind of agent-swarm workload is exactly the kind of work the conventional wisdom said could not run locally four months ago. It will not replace every cloud call. But it will change which cloud calls are necessary.

## **The case keeps getting stronger**

Every argument for the laptop lands harder now. No API logs. No provider-controlled retention. No peak-hour throttling. No tokenizer surprise dropped into the next vendor release. No sudden rate-limit reduction at the moment an agent fleet needs throughput most. Marginal cost collapses toward electricity and depreciation. The strongest counter-argument, that a laptop cannot handle meaningful parallel load, has weakened materially in the past four months. The follow-up worry, that nothing meaningful would actually fit on the laptop, has weakened too.

The case for local AI is not that it replaces the cloud. It is that it changes the enterprise’s negotiating position with the cloud.

When every token must leave the building, the enterprise inherits the provider’s prices, retention rules, tokenizer changes, rate limits, and peak-hour capacity constraints. When meaningful work can run locally, the enterprise gains a second option. Sensitive work can stay private. High-volume context can run at fixed cost. Cloud frontier models can be reserved for the places where they actually produce frontier-value output.

That is the real shift. Agentic AI made inference a budget problem. Local AI turns part of that budget problem into an architecture decision.

## **References**

**\[1]** [The Information report on Uber AI coding-tool budget](https://www.techmeme.com/260414/p46). https://www.theinformation.com/newsletters/applied-ai/uber-cto-shows-claude-code-can-blow-ai-budgets

**\[2]** [The Verge, Uber president says AI spending is getting harder to justify](https://www.theverge.com/transportation/937116/uber-ai-investment-hard-to-justify). https://www.theverge.com/transportation/937116/uber-ai-investment-hard-to-justify

**\[3]** [SemiAnalysis post on agentic workload token distribution](https://x.com/SemiAnalysis_/status/2057869518295249373). https://x.com/SemiAnalysis_/status/2057869518295249373

**\[4]** [OpenAI API Pricing](https://openai.com/api/pricing/). https://openai.com/api/pricing/

**\[5]** [Anthropic Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing). https://platform.claude.com/docs/en/about-claude/pricing

**\[6]** [OpenRouter, Opus 4.7's New Tokenizer: What It Actually Costs](https://openrouter.ai/announcements/opus-47-tokenizer-analysis). https://openrouter.ai/announcements/opus-47-tokenizer-analysis

**\[7]** [Substrate, Rewiring AI in 2026](https://substratesm.com/post/2026-02-04-rewiring-ai-in-2026). https://substratesm.com/post/2026-02-04-rewiring-ai-in-2026
