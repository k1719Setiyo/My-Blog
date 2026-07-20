---
title: The Revenue Race and the People Race
date: 2026-07-20T21:17:00.000+02:00
description: Closed labs are winning the revenue race. Open models, most of them
  Chinese, are winning the people race. Which one decides the future of AI?
---
On Friday, Xi Jinping used his keynote address to make a commitment: over the next five years, China will provide developing countries with 5,000 opportunities in AI training and seminar programs, and will build international AI application cooperation centers with ASEAN, the League of Arab States, the African Union, the Community of Latin American and Caribbean States, the Shanghai Cooperation Organization, and BRICS.

For most world leaders, that could pass as yet another conference pledge that never gets followed through on. For China, it's different. What Xi announced is effectively in line with the [15th Five-Year Plan](https://www.wko.at/ktn/aussenwirtschaft/euclera-translation-15th-five-year-plan-2026-2030-.pdf) passed in March of this year, and it is probably the first step toward the plan's stated ambition:

***"We will promote the establishment of a World Artificial Intelligence Cooperation Organization, build a multilateral AI cooperation platform under the Belt and Road Initiative, and establish an International AI Application Cooperation Centre. Countries concerned will be encouraged to jointly develop regulatory frameworks, technical standards, and ethical guidelines. Efforts will also be made to accelerate the development of globally open-source technology systems and community ecosystems."***

The speech was also not the only thing making noise that day, as Friday saw the launch of Kimi 3, which rattled cages across the industry, and [Axios is now reporting that Washington is looking for ways to curtail the use of Chinese models](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi), whether through Entity List threats, procurement rules, or public pressure campaigns. A ban of that sort would undoubtedly hurt the U.S. startup ecosystem, which has been leaning on these models precisely because they are cheaper and, increasingly, just about as good. There are glimpses of hope for American open weights, however: just days earlier, Thinking Machines Lab [released Inkling, its first open-weights model](https://thinkingmachines.ai/news/introducing-inkling/), the strongest American entry in the open frontier to date and a reminder that the open-versus-closed divide need not map neatly onto national borders.

Xi Jinping's speech landed right in the middle of a series of conversations that [my last post](https://substratesm.com/post/2026-07-05-rethinking-ai-east-versus-ai-west) triggered about what the rapid adoption of open models means for the bottom lines of closed labs, which currently generate far more revenue than their open-model counterparts. The tension shows up in the numbers, where in coding, arguably the highest-value AI use case today, Chinese models account for well over 50% of usage on OpenRouter but only 16% of revenue.

In other words, in the single most commercially proven AI workload, the models winning on usage and the models winning on revenue are not the same models. That is no rounding error but rather a reflection of two competing definitions of what winning means: diffusion for closed model labs has meant revenue, while diffusion for open model labs, most of them Chinese, has meant people. The debate tends to get framed as U.S. versus China, largely because open-weights efforts in the U.S. have been limited to date, but the more useful lens is open versus closed. This post is my attempt to put numbers behind that distinction.

## **A new scoreboard for AI adoption**

In May, Microsoft's AI Economy Institute published its [Global AI Diffusion Report](https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/), one of the first serious attempts to measure AI adoption consistently across countries. Diffusion, as they define it, is the share of people aged 15 to 64 who used a generative AI product during the period, derived from aggregated and anonymized Microsoft telemetry and adjusted for differences in OS and device market share, internet penetration, and country population.

One conclusion that stands out from the report is that the gap between the Global North and Global South continues to widen. Adoption in the Global North hit 27.5% of the working-age population in Q1 2026 versus 15.4% in the South, and the gap between the two has grown from 9.8 percentage points at the start of 2025 to 12.1 points today. Put simply, the North is not just pulling away, it is pulling away at an accelerating pace.

Here is Microsoft's leaderboard, ranked the way they rank it, by diffusion rate:

![](/images/table1_diffusion_rate.png)

A quick look at the top three tells you a lot, as the UAE (70.1%), Singapore (63.4%), and Norway (48.6%) are all wealthy, all small, and all running their own flavor of state-funded diffusion programs. Under its Stargate partnership with OpenAI, the UAE became [the first country to enable ChatGPT nationwide](https://openai.com/index/introducing-stargate-uae/), a rollout reported to include free ChatGPT Plus for citizens and residents, and it has set aggressive AI targets for government, including [a plan for half of government services to be powered by AI within two years](https://www.thenationalnews.com/news/uae/2026/04/23/uae-to-launch-new-ai-powered-government-model-within-two-years/). Norway's government has [set a target of 80% of the public sector adopting AI by the end of 2025](https://www.regjeringen.no/en/whats-new/opening-address-bye-the-prime-minister-at-the-cutting-edge-ai-seminar-at-the-university-of-oslo/id3052991/), up from roughly one in four agencies when the target was announced. Singapore has [allocated funds to give citizens aged 25 and up six months of free premium AI subscriptions](https://www.straitstimes.com/singapore/politics/singaporeans-to-receive-free-premium-ai-subscriptions-from-second-half-of-2026) if they take selected SkillsFuture AI courses, rolling out in the second half of 2026.

This matters for reasons that go well beyond trivia, because the top of the leaderboard is proof that subsidized diffusion works. When the state absorbs the cost of access, adoption rates run at roughly double the rich-world average. The catch is that paying retail for subscriptions only scales if you are small and rich; the UAE can buy ChatGPT for 6.6 million working-age people, but nobody can buy it for a billion.

The other thing that jumps out of that table is that the U.S., China, and India are nowhere to be found in the top 20.

## **Rank by people instead, and you get Xi Jinping's guest list**

Diffusion expressed as a percentage of the working-age population obscures a different but equally important statistic, which is the number of people actually using AI. So I took Microsoft's diffusion rates and converted them into absolute users aged 15 to 64, and the same data with a different denominator produces a completely different map:

![](/images/table2_absolute_users.png)

India is #1 with roughly 176 million working-age AI users. China is #2 with 161 million. The U.S. is #3 with 69 million, followed by Brazil and Indonesia. The top 20 now includes Pakistan, Nigeria, Egypt, and South Africa. Nigeria has a diffusion rate of just 10.1%, but with 134 million working-age people, that is 13.5 million AI users, more than Sweden, Austria, and Hungary combined.

The divergence becomes even clearer when you compare the two lists directly, because the top 20 by diffusion rate and the top 20 by absolute users share only four countries. France, Spain, the United Kingdom, and South Korea (the bolded rows in both tables) are the only economies big enough and rich enough to make both lists. The other sixteen slots belong to two different worlds, which is to say these are not two views of the same leaderboard so much as two different competitions altogether.

Going back to Xi's speech, the groups he named, ASEAN, the Arab League, the African Union, Latin America, the SCO, and BRICS, are no abstract diplomatic flourish; they are, almost line for line, the highlighted rows of this table. Rank the world by diffusion rate and you get a list of small, rich countries that can afford to subsidize their own adoption. Rank it by people and you get the map Chinese policymakers are actually looking at.

And the last column of the table explains why the two sides are playing different games. The 69 million American users sit on top of roughly $9.6 trillion in AI-exposed GDP. India's 176 million users sit on about $696 billion. Egypt's 11 million sit on $54 billion. If you are a U.S. lab optimizing for revenue, targeting the American user is the rational play; each one is worth an order of magnitude more in monetizable economic activity. But that same logic means the majority of the world's AI users, the ones clustered in the bottom-right of this table with huge populations and thin GDP exposure, are commercially unattractive to closed labs almost by definition. They are not being ignored by accident; they are being ignored because of the economics.

## **Open weights as the subsidy that scales**

All of which brings us back to the top of the first table. If subsidized access is what drives adoption, and per-seat subscription subsidies only work for small rich states, then the only way to subsidize diffusion for the other six billion people is to give the model away.

Open-weight models are China's version of the UAE program, restructured for Global South scale. The state does not need to buy anyone a subscription; it needs to make sure capable models are free to download, cheap to serve, and legal to localize. That is exactly what the Five-Year Plan language about "globally open-source technology systems and community ecosystems" is describing, and it is why the 5,000 training programs and cooperation centers are not charity so much as the distribution mechanism.

And the demand side is already plainly visible when you look at who actually uses Chinese open-weight models today:

* **Budget-conscious startups**, for whom the API bill can make or break their runway. These are the same price-sensitive users driving that 50%-of-usage, 16%-of-revenue split on OpenRouter.
* **AI enthusiasts going local-first**, who want control over their own data and their own costs. They are early, but they are early the way Linux users were early.
* **Enterprises with sophisticated engineering teams** doing model routing and proprietary internal benchmarking of their workflows, oftentimes led by AI-pilled management. Routing is the tell here, because once a company evaluates models empirically instead of by brand, an open model only has to win on price-performance for a given task, not on reputation.
* **Enterprises that care about real data sovereignty.** [The Information recently reported](https://www.theinformation.com/newsletters/applied-ai/ai-providers-threat-customers) that while OpenAI and Anthropic say they don't train on enterprise customers' prompts, businesses still face exposure through employee chatbot use, feedback tools, and retained usage data.

The connection I think most commentary misses is that these four groups are not four separate stories but the same story at four different scales. Cost sensitivity, control, empirical model-picking, and sovereignty are all versions of the same underlying preference of not wanting your AI capability to depend on a closed model company's pricing and data practices. Startups feel it as a bill, enterprises feel it as legal exposure, and nation-states feel it as strategic dependence, which is precisely the anxiety Xi's proposal is built to serve. The cooperation centers, the joint regulatory frameworks, and the shared technical standards amount to data sovereignty packaged as foreign policy, offered to exactly the countries in the second table.

## **The willingness-to-pay problem is everywhere**

If you think low willingness to pay is a Global South problem, the U.S. data should give you pause. Only 2.2% of U.S. households are paying for AI, up from 1.5% in Q4 2025, with average monthly spend rising from about $25 to $31 over the same period, per [PNC's June 2026 Consumer Health Check](https://www.pnc.com/content/dam/pnc-com/pdf/aboutpnc/EconomicReports/consumer_health_check/PNC_Research_Consumer_Health_Check_June_2026.pdf). Meanwhile, diffusion in the U.S. working-age population is a little over 31%.

Running those numbers side by side, nearly a third of working-age Americans use AI while only about one in fifty households pays for it. Even in the richest, most monetizable AI market on earth, the overwhelming majority of usage is free usage, which means the marginal AI user, everywhere on the planet, is a non-paying user. Closed labs are betting they can eventually convert that free usage into revenue, while China is betting that serving the non-payer *is* the strategy, because the payer was never the point.

## **Early innings, familiar playbook**

We are still in the early innings, but subsidized diffusion will clearly be difficult for U.S. labs to match when their capex costs alone are running roughly 10x what Chinese hyperscalers are spending, and you simply cannot win a giveaway war while carrying the higher cost structure.

China is doing with AI diffusion what American internet companies did with search and social media, which is to capture the audience first and let monetization follow. Google and Facebook did not win by having the most paying customers in 2004; they won by becoming the default for billions of people, and the economics arrived later. Capturing an audience early matters, because defaults harden into standards, and standards harden into infrastructure.

The closed labs are winning the revenue race, and it isn't close. China, for its part, is trying to build the people race by making sure the next generation of AI-native products, wherever they emerge, is built on its stack from the get-go. And while today that contest gets framed as U.S. versus China, the real dividing line is open versus closed, and where American open-weight labs land on it will matter just as much as anything happening in Beijing. The open question, the one the second table keeps asking, is which race decides the outcome.
