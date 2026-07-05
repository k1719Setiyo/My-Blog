---
title: Rethinking AI East Versus AI West
date: 2026-07-05T17:19:00.000+04:00
description: A post revisiting my 2025 US-China AI Thesis
---
In Jan 2025, I put out a [wide-ranging assessment](https://substratesm.com/post/2025-01-22-the-u-s-and-china-going-head-to-head-on-ai-in-2025-1) of the U.S.-China AI rivalry. It was followed by [an update](https://substratesm.com/post/2025-04-27-an-update-to-the-u-s-and-china-going-head-to-head-on-ai-in-2025) that April. Here’s the recap of what I argued:

* Chinese labs weren’t behind by 2 to 3 years and that China would level up within the year.
* The U.S. were obsessed with going big on everything (data, parameters, compute), but that was going to present a series of bottlenecks.
* China’s approaches (open source and a focus on efficiency) would be good enough for practical applications and at the very least winning the global south market. It was getting everything it needed.
* The U.S. wouldn’t get what it most wanted (ASI/AGI which itself is a definition no one can decide on and a goal post that keeps moving) soon because it was hitting the power ceiling. AI execs didn’t understand the needs of energy execs and vice versa.
* Huawei’s use of mega-clusters was savvy and provided more proof that China could close the hardware gap with ingenuity, not just by throwing cash and skirting export bans.
* Manus—with its breakout multi-model, multi-modal, multi-agent approach gave us a preview of just how disruptive agentic AI would be for the knowledge economy and service industries (this particular point was made in my April, 2025 note, not the Jan white paper).

So here we are mid-2026. What did or didn’t play out? Chinese labs continue to opt for applied, frontier-grade AI that gets deployed cheaply and everywhere. The U.S. labs most want the last increment of capability and fulfillment of the AGI dream. China aims to win on raw usage and cost. The U.S. aims to capture and hold high-margin spend on the hardest tasks. Which nation is more in control of its own destiny? 

My conclusion, then and now: Chinese companies—on scores of metrics across the stack, production frontier, and segments of market demand are still accelerating more rapidly toward realizing their vision than their U.S. counterparts were approaching their own. Among other measures, Chinese model share of token consumption on OpenRouter is up five-fold since December, crossing the 50% threshold a week ago, and now has a commanding position worldwide. So, I stand by my core thesis.

This post revisits that question with updated evidence and assesses where my forecasts agreed with, or diverged from, what came to pass. Further, it offers reflections on critical factors worth tracking over the coming year. 

**Open Has No Ceiling: An Outlier Call, Now Conventional Wisdom**

Nowhere has the progress of China’s companies been more striking than on the front of open-source model development and deployment. A movement led by a policy decision where open-source AI was explicitly called out as a priority in China’s previous 5-year plan (in the middle of COVID).

DeepSeek’s release in mid-January 2025 was a proof of concept in cost efficiency that sent a bracing warning through the tech world. The new “DeepSeek moment" everyone is hailing now is Zhipu’s release of GLM-5.2. The new model and its pricing update several weeks ago are solid confirmation that China is on to something bigger and more durable. The metrics are undeniable:

* On [Arena AI,](https://arena.ai/leaderboard/code/webdev) GLM-5.2 ranks No. 2 globally, ahead of closed models—every GPT-5.5 variant, every Gemini model, and several Claude Opus iterations, behind only Anthropic's Claude Fable 5.  
* On the A[rtificial Analysis Intelligence Index](https://artificialanalysis.ai/models/#intelligence-tabs), GLM-5.2 scores 51, making it the top open-weights model in the world, just behind the proprietary frontier of Claude Fable 5 (60), Claude Opus 4.8 (56), and GPT-5.5 (55).

In short, a cost-efficient high-performance model is no longer a single shocking data point. It informs market structure.

More broadly, the share of Chinese token consumption on OpenRouter surpassed 50% the week of June 22 - it stood at 10% in December. It’s still on track to be over 50% this week. \[Caveat: OpenRouter skews toward cost-sensitive developers, so  it somewhat overstates the open-weight share of total global inference.] China closed the gap precisely as I argued it would, through open-source diffusion, test-bed scale, and the efficiency that export controls had forced on it. 

![](/images/openrouter_dual_axis-2-.png)

Looking ahead, there are now signals that Zhipu will soon have a model with Mythos-level capability on cybersecurity tasks. In sum, Chinese models are not just clearing benchmarks, they are excelling in adversarial, high-stakes agentic environments.

**Open Weights versus Closed: The Strategic Divide**

I argued in the original paper that China’s embrace of open source was not charity but a strategy that was explicitly laid out in [China’s Five Year Plan](https://perma.cc/73AK-BUW2) covering 2021 - 2025. Open weights diffuse faster, attract global developer mindshare, set de facto standards, and build dependency on a Chinese-defined stack. Eighteen months on, that bet looks like the single most consequential structural difference between the strategies of the two rival nations. 

The U.S. frontier remains overwhelmingly closed (Anthropic, OpenAI, and Google are all proprietary at the top), while China puts genuinely frontier-grade models into the open-weights commons and is letting the world build on them.

The best open-weights models in the world are now Chinese. The strongest U.S. open-weights entry, NVIDIA's Nemotron 3 Ultra, sits far behind the leading models in the rankings of open source models, followed by Google’s Gemma 4 and OpenAI’s gpt-oss-120b by [Artificial Analysis](https://artificialanalysis.ai/models/open-source). NVIDIA’s recent [$26b commitment](https://www.techbuzz.ai/articles/nvidia-bets-26b-on-open-weight-ai-models-to-challenge-openai) to open source models, of course, is a ray of hope and should not be discounted. For now, however, the open-source frontier is not just Chinese-led, it is Chinese-dominated. 

Beneath GLM-5.2, the entire open-weights tier is Chinese: MiniMax-M3 (44), DeepSeek V4 Pro (44), Kimi K2.6 (43), Xiaomi MiMo-V2.5-Pro (42), DeepSeek V4 Flash (40), Qwen3.5 (34). The U.S. open-weights track record is thin by comparison.

Licensing makes a difference, too. GLM-5.2 ships under MIT, DeepSeek, and Qwen under permissive terms, and Kimi is under a modified-MIT license. These are not look-but-don't-touch releases. They are built for commercial adoption, which is exactly why developers are standardizing on them.

**Practical AI versus the Pursuit of AGI**

Open source is already paying real dividends. Chinese companies are rapidly monetizing these models for multiple layers of market demand. They are pulling down inference costs, commanding premium prices for higher use-cases (coding, agents, enterprise workflow automation, and long-context tasks), challenging brand loyalty, and retooling business models. Agentic AI, alone, is proving to be cataclysmic for some legacy industries.  

For those who know me well, fair to say I was immediately a huge fan of Manus’ release in March,2025 and was enthusiastically recommending that anyone who would listen to me, try it. It could do more than distill info into insight - it could already extract data from hard-to-unpack docs, websites and APIs. It had tool calling capabilities in a way that no other product was offering at the time. It gave me a glimpse of the future and it was clear that agentic AI was much closer than most realized and that it would be hugely disruptive to many industries. 

OpenClaw’s headfirst plunge into local-first open-source agents, followed quickly by Hermes Agent, brought agentic work out of coders’ dreams in the labs and squarely into the workflow of end users. And what do you know: Accenture’s stock price as of this note was down 52% for the year.

![](/images/aa_cost_per_task-1-.png)

Put simply, China is delivering practical AI at the frontier, often the same frontier many U.S. labs occupy, at radically lower cost and at enormous deployment scale. U.S. labs, meanwhile, are pursuing AGI and the absolute ceiling of capability. GLM-5.2 reaching Claude Fable-level intelligence is not China maturing into a cheaper second tier. It is frontier parity, priced for the world market. 

![](/images/aa_blended_price-1-.png)

The bottom line: Chinese open-source models are increasingly the default substrate developers build on while routing to closed models only when it’s an absolute must, and Chinese companies are monetizing that open layer better than most realize. For example, GLM-5.2 effectively *raised* its blended API prices by removing its lower tier. This means that genuine open-source frontier upgrades can command higher prices even as commoditized, good-enough AI deflates. Ziphu started 2026 off with barely recognizable ARR , got to $250 million in ARR by March and is already on a $1bn ARR run rate for 2026. Same goes for MiniMax.

This underscores the strategic asymmetry between the U.S. and Chinese labs. The U.S. monetizes capability behind an API and keeps the weights. China gives the weights away and monetizes scale, services, and ecosystem gravity. The open approach also allows for data ownership and sovereignty in a way closed models can't.

Closed frontier models, of course, still capture the high-margin spend, so the idea that “open is winning” may be true on diffusion and volume, but it is not yet true with respect to revenue. That is a live question, not a settled one.

Enthusiasts of Chinese companies are crowing, citing West-to-East company migrations—some complete, some exploratory—that include heavyweights such Microsoft and Siemens as well as high-profile brands such as AirBnB, Shopify, UberEats, and Coinbase. It turns out that brand stickiness is not so sticky after all. If anything, I underweighted this possibility.

**Chipping Away At Export Bans**

One is tempted to say, as of the summer of 2026, that U.S. export bans of chip technology have had more changes in direction than a World Cup match. But there’s no need to be cheeky. Three converging trends tell us everything we need to know about the general direction of this game.

* Since 2025, the Trump Administration has been in a strategic (albeit selective) retreat from expansive bans, partly due to industry opposition and partly due to China’s rare earths monopoly.
* Nations and companies in the global South are increasingly attracted to China’s AI models and technology because of their cost-efficiency, raising the prospect that they will become permanently wedded to the East, not the West.
* Every time it seems the U.S. chip industry has boasted of a moat around its chip technology, China seems to find another way around it. Meituan’s LongCat-2.0—1.6 trillion parameters in a MoE layout—just pulled off a full pre‑training run and deployment on a cluster of about 50,000 domestic accelerators. Read: no NVIDIA necessary.

All this points toward the same conclusion: China’s AI hardware development is a force that will not be stopped.

**For End Users: An Inference Explosion and ROI Problem**

The move to agentic workflows broke the old token-economics model. Usage is exploding faster than per-token prices are falling, and that is colliding with real enterprise budgets. Add the lack of model loyalty and the rise of orchestration, and the question changes. The old question was, “Is the model we have chosen good enough?" The new question is, "Can we afford to run our model at the volume we need?" Agentic workloads consume \~23.4x more tokens than conversational ones. Other estimates put the range at 5 to 30x. Token usage, in a word, is going “vertical”. Google recently disclosed monthly token usage up \~7x year-over-year to 3.2 quadrillion. 

That said, everyone now agrees that not all tokens are created equal. Higher token consumption doesn’t necessarily mean better or more productive…it simply means higher. The paradigm is now shifting to better measuring token use relative to usefulness/productivity. It’s also where the shift of using a combination of more expensive closed models alongside open ones makes sense. As Coinbase CEO Brian Anderson shared a few days ago, “How to keep AI spend flat while token usage grows exponentially: Not with friction and spend alerts. With better defaults, routing, and caching.” Yes, yes, and yes.

![](/images/screenshot-2026-07-05-at-5.35.52 pm.png)

Enterprises are now blowing through annual AI budgets. For example, earlier this year, Uber’s COO said the company drained its full AI budget [in just four months](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/). The affordability ceiling is real even as per-token costs fall.

**America’s Physical Reality: Energy, Infrastructure, and Capital**

My initial thesis called electricity and supply chain delays the most concerning deficit faced by the U.S. My call on that point is even more emphatic now. American model scaling is relentlessly voracious for energy, and demand keeps climbing. However, it is worth noting U.S. companies thus far have not been letting energy bottlenecks appreciably slow their buildout. They are using an unprecedented wave of brute-force capital. China, by contrast, is scaling through state-directed infrastructure policy. The specifics:

* Grid interconnection in U.S. queues are up to 7 years vs. a 2- to 3-year build cycle. Hyperscalers are pivoting to behind-the-meter gas, co-location, and build-to-transfer; gas turbines are largely not arriving until ~2029; and skilled labor (powerline electricians) are now an emerging constraint too.
* For the U.S., JP Morgan forecasts $5.5T total AI capex through 2030, $4.1T of it debt-financed; hyperscaler capex ~$650B in 2026 heading above $1.1T in 2027; and $3T+ in chip/accelerator financing on top. GS figures provide a wide-angle lens the brute force capex differential at work where annual capex spend of Chinese hyperscalers is a mere 10% of what US hyperscalers are spending.

![](/images/hyperscaler_capex-1-.png)

* Goldman Sachs forecasts China data center demand at a 20% CAGR (2025 to 28E). Power is far less of a constraint than in the U.S.; the binding mechanism is power-quota approvals, which are pushing operators into power-rich western hubs under the "East Data, West Computing" national strategy. China hyperscaler capex still runs well below U.S. peers, leaving room to grow.

In any case, the global toplines remain eye-popping. Global data center demand is \~74 GW (4Q25) heading to \~110 GW by 2030 in Goldman Sachs’ base case, with AI rising to ~40% of the mix. McKinsey puts compute demand at 260 to 300 GW by 2030, far above plausible supply. JPM expects 138 GW of U.S. capacity growth through 2030. My original 171 to 219 GW global figure now reads as reasonable-to-conservative.

**Conclusion: The New Substrate(s)**

The strategies and stakes—multi-generational, multi-sector, multi-trillion dollar—have never been higher and never more rapidly revised. The U.S. is pursuing AGI and the capability ceiling, financing its way around a hard physical-energy wall. China is delivering practical, frontier-grade AI at a fraction of the cost and deploying it at a scale the U.S. ecosystem can't match on price. 

The interesting question ahead isn’t who reaches the frontier first, since both are very close to it, but whose strategy compounds: brute-force capability at premium cost, or frontier capability priced for everyone. As a power user of AI that likes to minimize my bills and deeply cares about equitable access, I’m rooting for the latter. 

More broadly, these are some of the metrics I’ll be keeping a close eye on and will be writing about:

* AI diffusion and its implications.
* ROI by sector: retail, financial services, software.
* Pressure-release valves: model orchestration and model routing, early signs of continual learning, inference on the edge.
* And as open weight models increase pricing and consumer device hardware continues to evolve, the increasing move to local AI and the rise of the sovereign edge.
