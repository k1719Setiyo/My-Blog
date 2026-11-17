---
title: I Built Myself an AI Investment Research Analyst Team
date: 2026-11-16T19:18:00.000-05:00
description: Signal Desk
---
I built Signal Desk as a personal investment research app that uses a team of AI agents to extract signals from noise. I designed and built it with a separate team of agents who now maintain and update it.

I started this as an experiment in building a product that was model-agnostic from day one, so I could choose and change the models doing the work. Finance gave me a domain I know well to test their capabilities and experiment with agentic workflows. I wanted to judge performance through research I could evaluate and use, rather than generic benchmarks. There’s still plenty I want to improve, but I’m already getting a lot of value from it.

**How I use Signal Desk.** I set the investment policy the app works within. For each thesis run or single-company report, I can choose a different investment horizon and adjust limits such as company size, liquidity and eligible markets.

I start with a thesis or company, and the agents work as an analyst team. For a thesis, they map relevant industries and roles, then screen qualifying companies across 24 exchanges in the US, the UK, Europe, Hong Kong, Japan, South Korea and Taiwan. They cross-check financials, compare companies and research likely beneficiaries and companies at risk. Single-company research can assess a new idea or revisit a position I hold.

**How I divide the work across agents and models.** A single thesis run uses six or seven models across the different agent roles. These cover mapping the thesis, screening companies, re-checking close calls, reading documents, writing research, challenging it and judging the competing arguments. I choose the model for each job, using the most capable ones for important judgments and faster, cheaper ones for screening large numbers of companies.

Signal Desk is model-agnostic. I choose and change models directly in the app, with OpenRouter providing access to them. Each run shows its cost and the models used, helping me judge the value I get.

The writer, skeptic and judge are three roles within that wider team, and they use models from three different companies. This keeps the final judgment independent of both the original research and the challenge to it, and makes it less likely that one model’s blind spots go untested.

**What I get from one thesis run.** Each run produces a research pack that shows the total cost and which model handled each role. I weigh the quality and usefulness of the research against what I spent, and use that to refine my model choices for future runs. 

It opens with the thesis map: who could win or lose, the chain of cause and effect, the measures to watch and what would prove the thesis wrong. A funnel shows how companies were narrowed to a scored shortlist. The closest screening decisions are re-checked by a stronger model, using business segment revenues where available to judge how much of each company the thesis touches.

Deep research focuses on the 12 long candidates best placed in the thesis and up to 12 companies most at risk, with up to three additional reports on relevant companies worth at least $100 billion. I can request equivalent research for any other company that’s been scored.

Each report covers the case for and against, catalysts, valuation against peers and disruption risks. Trailing and forward P/E appear together, and companies still losing money are assessed on revenue and growth. Each report states its research confidence and what would prove the case wrong. It also includes relevant points from recent earnings calls where available, with sources for every figure.

The skeptic tests the case, checks the figures and asks what the price already assumes. The writer answers its objections, and the judge weighs both sides, including whether the valuation is justified and which unresolved concerns change the conclusion. For companies at risk, it also considers the seriousness and timing of the threat and whether the price already reflects it. Fixed rules combine those judgments with scores, data checks and research confidence to set a rating. The judge cannot override those checks.

The result can be a Buy, Not a buy, Sell or a watch decision, with the reasons made clear. A Buy also requires the thesis to affect a meaningful share of the company’s business, so strong financials alone are not enough. A Sell faces additional risk checks before it qualifies as a short candidate. The run also includes comparisons across the researched companies, spread trade ideas and ETFs with overlapping holdings. Spread recommendations need the judge’s backing; other candidates are shown as spreads to watch.

**What the reports are built from.** I use one financial data provider for the prices, financial statements, analyst estimates, business segment revenues and other figures behind the scores. Those figures are checked against official filings wherever possible, including SEC filings, European annual reports and Taiwan’s official quarterly figures.

The agents also read earnings call transcripts, company announcements and news from selected global and local publications. Recent arXiv papers and posts from X accounts I follow and closely connected accounts help surface new technology, private challengers and threats that may not yet show up in financial results.

News, research papers and X posts are leads to investigate. They never change the financial figures or scores. The writer and skeptic each assess what the research papers mean for a company; either reading can hold a rating back, but cannot raise one. Every figure shows its source, and the reports cite the documents behind their claims, with links to the originals where available.
