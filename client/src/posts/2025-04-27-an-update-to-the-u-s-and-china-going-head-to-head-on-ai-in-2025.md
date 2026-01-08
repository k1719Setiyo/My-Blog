---
title: "An Update (to) The U.S. and China: Going Head-to-Head on AI in 2025"
date: 2025-04-27T23:08:00.000+04:00
description: An update of some key developments since Jan
---
### Model Releases in 2025

If there's one thing everyone can agree on, it's that DeepSeek ignited unprecedented competition among AI leaders. The pace of releases from frontier model companies around the world has accelerated significantly compared to the second half of 2024.

While we've seen notable releases from Anthropic (Claude Sonnet 3.7), OpenAI (O3, O3-mini, O4-mini, and GPT 4.5), Google (Gemini 2.0 Pro and Flash, 2.5 Pro and Flash), Grok (Grok 3 with its much-anticipated 200k GPU cluster), and Meta (Llama 4), the performance-to-cost ratio remains a significant concern. For instance, despite Grok 3's massive 200k GPU training infrastructure, its performance has been underwhelming relative to its enormous investment—representing poor value for money. Meta experienced a problematic Llama 4 launch when post-release evaluations revealed the model underperformed compared to initial claims—particularly disappointing as it's currently the only open-source frontier model available from the US. Nevertheless, companies like Anthropic, OpenAI, and Google continue delivering impressive frontier models, albeit with closed architectures and substantial cost structures.

In China, while DeepSeek and Manus have captured headlines, it's worth noting that 21 models have been released—14 open-source and 7 closed. Additionally, two powerful agentic systems have emerged: Manus (developed by Butterfly Effect) and UI-TARS 1.5 (from ByteDance). Although DeepSeek's monthly active user numbers have declined dramatically since launch, industry rumors suggest DeepSeek R2's imminent release—featuring 97% cheaper training costs and exclusive operation on Huawei chips, plus free agent and operator capabilities. Despite the rapid pace of Chinese model releases, US models continue to enjoy higher adoption rates. As AI inference workloads become increasingly sophisticated and compute-intensive, this adoption differential will be a crucial metric to monitor.

![](/images/an-update-us-china-blog.png)

### Spotlight on Manus

Those of you I've spoken to over the past month know that I've been raving about Manus and telling anyone who would listen to pay attention—regardless of mixed online reviews.

Manus is the first general purpose agent to genuinely blow me away. Much of its magic lies in being a multi-model system (using Claude Sonnet 3.7 and fine-tuned Qwen LLMs), multimodal, and multi-agent system that leverages over 29 tools. Altogether, Manus has delivered my favorite AI experience to date.

What sets it apart is its ability to do what no other product can—including Code Interpreter from OpenAI and Deep Research products from OpenAI, Perplexity, DeepSeek, and others. With integrated tools such as Selenium and Puppeteer, it can control web browsers and produce analytical charts with relevant, real-time, refreshable data. While most other systems can run analysis and provide interesting insights, none can generate charts by dynamically extracting data from various websites and APIs the way an analyst at one of the world's most sophisticated hedge funds would.

To test its capabilities, I prompted it to pull in very messy datasets in tricky formats and multiple languages, then create live dashboards capable of complex stock price analysis (which you can see in the cited public examples). Not only was it able to run sophisticated analyses, but it also generated 80+ page reports including annotated charts with detailed methodology notes.

I particularly appreciate that Manus shares not just its thinking but its entire computer with you, allowing you to redirect or take over at any point. This truly interactive, transparent, and human-in-the-loop process enables high-quality outputs for those willing to put in the work.

I've tested Manus extensively and stretched its limits nonstop for the past 1.5 months, and I remain incredibly impressed and excited. I've used it as my analyst (for agriculture, climate, market research, etc.), designer, systems architect, engineer, and data scientist all in one. Were there a few quirks and bugs? Sure. Was the system less than 100% stable? Absolutely. But the value Manus delivered was nonetheless mind-blowing. It's already worth the money if you remember the absolutely critical fact that validating its output and redirecting it along the way directly correlates to the quality of results you receive.

Manus leads me to believe that a major disruption to the services and knowledge industries is coming much sooner than most people realize. Access to high-quality datasets will continue to be a make-or-break factor, of course. But as analytical capabilities become more accessible and commoditized, being a domain expert or high-caliber prompt engineer will be more important than ever. These skill sets will spell the difference between truly amazing results and those that are merely adequate.

I've never cared much for the question of when we'll reach AGI/ASI, but I have cared deeply about when we'll have real agentic systems that are truly disruptive. I would argue that we're just six months away from that reality, especially considering the further innovation that Manus's release has spurred among competitor companies and frontier model developers.

I've attached a sample output in PDF (entirely generated by Manus) which includes my original prompt along with my test intentions and goals. This is one of many different tasks I’ve run on Manus that range in complexity from generating strategy reports to converting a version of what you see in the attachment to a system that dynamically updates on a daily basis.

### Huawei's Latest AI Advances

Huawei has recently unveiled significant advances across hardware platforms, individual chips, and LLMs. This progress will markedly advance China's push to create domestic alternatives to competing technologies worldwide and prospects for self-sufficiency.

**Overview of Key Developments.** Huawei's flagship rack-scale AI computing cluster—the CloudMatrix 384—is designed to compete with high-performance systems such as NVIDIA’s GB 200 NVL72 by using 384 Ascend 910C chips and distributing compute across 16 racks (12 compute racks of 32 GPUs each and 4 scale-up switch racks.

The sophisticated all-to-all optical mesh network topology uses a proprietary High-Speed Inter-Processor (HiSIP) interconnected technology and relies heavily on 400G LPO (Linear Drive Pluggable Optics) transceivers for high-bandwidth communication.

Each Ascend chip includes HBM memory which means that the platform as a whole has more aggregate memory capacity and memory bandwidth than Nvidia's GB200 NVL72. How much more? [Estimates from SemiAnalysis](https://newsletter.semianalysis.com/p/huawei-ai-cloudmatrix-384-chinas-answer-to-nvidia-gb200-nvl72) 300 PFLOPs of dense BF16 compute performance— double the throughput of Nvidia's GB200 NVL72. Altogether, this requires approximately 4x the power of NVIDIA's GB200 NVL72 system.

In a head-to-head comparison, here’s how it stacks up against NVIDIA's GB200 NVL72. We are talking about 384 chips vs. NVL72's 72 GB200 Grace Blackwell chips. In raw computing power, one is using chip count to achieve higher aggregate performance albeit with less power efficiency. While the software system may be less mature than NVIDIA’s CUDA, Huawei is now developing its Ascend Computing Programming (ACP). The memory architecture will have a different chip-to-chip communication approach than NVIDIA’s NVLink.

All this has implications for the innovation race. It demonstrates China's ability to build massive AI clusters—despite trade restrictions—simply by using components from its own restricted supply chain. HiSIP interconnect represents genuine progress in chip-to-chip communication, and the scale-out approach compensates for per-chip performance gaps.

**Let’s talk about Pangu Ultra.** This is another step forward, showcasing China’s domestic hardware capabilities and Huawei's advances in LLMs. We have a dense transformer architecture of 135 billion parameters trained on a cluster of 8,192 Ascend Neural Processing Units (NPUs)—Huwaei’s proprietary infrastructure. The pretraining: 13.2 trillion diverse, high-quality tokens that incorporate extensive language data resources.

Training combines several methodologies: depth-scaled sandwich normalization to prevent loss spikes; system optimizations for efficient large-scale training on Ascend hardware; architectural refinements like Depth-Scaled Sandwich-Norm and TinyInit; domain-aware vocabulary strategy for the tokenizer; and hardware-software co-optimizations like NPU Fusion Attention (NFA) and kernel fusion.

Here again, this demonstrates Huawei's ability to compete on reasoning and language tasks, and it narrows the gap between Chinese and Western frontier models. Algorithmic innovations over previous Pangu models. Check. Strength in logical reasoning and solving mathematical problems. Check. Enhanced multilingual capabilities (while maintaining excellence in Chinese). 

Chinese companies now have in hand a locally accessible frontier model that reduces their reliance on companies such as OpenAI and Anthropic. And their increased expertise in large-scale model training and optimization has allowed them to achieve data sovereignty despite training data within China’s regulatory framework. 

**As for Ascend 910C, what do we have?** The goal of Ascend 910C mass production, of course, is to make Huawei’s hardware widely accessible across the domestic market. Mass shipments to Chinese customers are expected to begin in May, and some initial deliveries are reportedly underway.

This is a next-generation iteration of the 910B that combines two 910B processors into one package. It features HBM memory technology that is designed for AI-specific workloads, and it delivers approximately 60% of NVIDIA H100's inference performance.

The downside is that the 910C requires code adaptation from CUDA-based applications, and it is less power-efficient than NVIDIA counterparts. Its performance varies significantly across different AI benchmark tasks.

Having said that, the 910C will provide Chinese companies with H100-class alternatives, offer domestic clients competitive pricing, and over time reduced dependency on restricted U.S. technology. Look for this to be integrated into domestic clouds in a major way.

**The drive to bring the more-powerful, next-generation Ascend 920 to market is intriguing.** We will be looking at advanced AI architecture that is well-positioned for training and inference, enough firepower to fill the void left by restricted access to NVIDIA’s advanced chips. As this will coincide with the maturity of Huawei’s software stack, it may well cement Huawei’s position as China’s premier AI chip provider and allow it to credibly compete with NVIDIA’s H200/B100 performances. While the 920 will be optimized for Chinese AI applications and workloads, it nonetheless will represent accelerated, competitive development under adverse conditions.

The specs are as follows: fabrication using a 6nm process node; design using HBM3 memory (4 TB/s bandwidth); and performance that is anticipated to exceed a more-than-respectable 900 TFLOPs per card (precision likely BF16 or FP16). Mass production is anticipated in the latter half of this year.

**There are several bottom lines worth noting.** Global technology bifurcation is accelerating parallel technology stacks and creating distinct AI hardware ecosystems, and this may lead to divergent AI model development. Competition is driving rapid advancement in innovative AI hardware design, yielding novel approaches, and creating pressure for efficiency improvements. In the marketplace, Chinese cloud providers are gaining a greater foothold in domestic hardware—even as domestic price competition intensifies and Western providers notch performance/efficiency advantages.

These developments underscore Huawei's strategic role in enabling China's ambition to establish resilient, alternative supply chains. By developing advanced AI chips, scaling them into powerful clusters, and building large-scale models, Huawei is propelling China toward a self-sufficient domestic AI ecosystem. In sum, China will have more and better capacity to innovate than ever before. It will need the West less.

### China's Hardware Breakthrough: 1-Nanometer RISC-V Chip Using 2D Materials

[Chinese researchers](https://spectrum.ieee.org/2d-semiconductors-molybdenum-disulfide) have achieved a significant semiconductor breakthrough with the development of the WUJI chip, a 32-bit RISC-V microprocessor utilizing two-dimensional (2D) materials like molybdenum disulfide (MoS2). Notably thin at less than one nanometer, this chip demonstrates a potential path to creating transistors at scales where traditional silicon faces fundamental physical limits. As silicon-based transistors approach sizes of around 3nm to 5nm, they encounter significant challenges such as quantum tunneling and increased electron leakage, hindering further miniaturization and performance improvements. Crucially, the fabrication process for the WUJI chip reportedly does not rely on advanced Extreme Ultraviolet (EUV) lithography technology, which is currently a monopoly held by the Dutch company ASML and subject to export controls.

The use of 2D materials offers distinct advantages at these minuscule scales. Unlike silicon, which is a 3D material, 2D materials are atomically thin, allowing for better electrostatic control and reduced leakage at very small transistor dimensions. These materials also possess unique electrical properties and the potential for improved electron mobility, which could lead to more energy-efficient and potentially faster operations compared to silicon at similar small scales. The Wuji chip, integrating 5,900 transistors, demonstrates a notable level of complexity achieved using this nascent 2D semiconductor technology.

This development carries significant strategic weight for China. By employing open-source RISC-V architecture and developing manufacturing methods that circumvent the need for restricted EUV technology, China is actively pursuing a strategy to enhance its semiconductor self-reliance and reduce dependence on foreign technology and suppliers like ASML. While the Wuji chip is currently in the early phase of preparing for pilot-scale production, this breakthrough underscores the potential of alternative materials and manufacturing approaches to overcome current technological bottlenecks and could signal a long-term shift in the global semiconductor industry landscape.

### One Step Closer to Truly Open Source? Intellect 2

Prime Intellect trained its Intellect-1 model on 10 billion parameters and released it four months ago. Now we have Intellect-2, and my view is that—if this 100 billion-parameter model completes its current runs successfully by the end of this year—it will be the most exciting update the world of open source has ever seen. 

Instead of relying on massive, centralized computing resources, Intellect-2 operates with a decentralized approach, allowing anyone (including those using consumer-grade GPUs) to contribute their compute to the training process of a 32-billion-parameter reasoning model. By enabling permissionless participation, Intellect-2 will foster transparency and community-driven collaboration, allowing greater control over large-scale AI development. In short, this could well democratize advances in AI, lower barriers to entry, and reduce market concentration in AI research and development.

Prime Intellect is essentially aiming to build a truly sovereign open-source AI ecosystem. Key technical features such as controllable thinking budgets and verifiable inference mechanisms support this distributed training environment, ensuring both focused reasoning capabilities and the integrity of the collective effort. 

More broadly, distributed model training means that we are headed from a world of mega-clusters in single locations to a much more globally distributed infrastructure model, one that reduces the risk of hyperscalers over-investing in the U.S. (That said, one of the major hurdles to overcome on that front will be the ever-evolving landscape of export controls which will be even harder to manage in this context).

### Data Center Demand and Compute

Do not be misled by blaring headlines about the likes of AWS and Microsoft cancelling data center projects. Only projects that did not have guaranteed power supplies are being axed. What we are seeing is simply more emphasis on locations with uninterruptible power supplies. By locations, I don’t mean different states. I mean different countries.

As evidenced by the [latest earnings report from Alphabet,](https://www.reuters.com/business/google-parent-alphabet-beats-quarterly-revenue-estimates-2025-04-24/) capex spending continues to grow at record pace and capacity constraints continue to be a barrier to further revenue growth. Notably, Alphabet’s capex grew 43% relative to the same quarter last year, and Alphabet reaffirmed its capex budget of $75 billion this year.

Hyperscalers are coming to three realizations. A single closed model might never rule the day. Open-source models can often perform just as well as proprietary models. And fully decentralized model training (where even servers across multiple continents can be used) is viable within the short term. 

The implication? Focusing on infrastructure that is distributed according to inference demand is a better bet than, say, building a single 5GW cluster in TX that may or may not be completed within a reasonable timeframe.

Goldman forecasted in January that data center power demand would increase by 160-165% by 2030 relative to 2023 levels. They issued an update a few weeks ago in which they envision a less constrained market in 2026 (due to more supply coming online), and they reaffirmed their demand outlook for the next five years. They did not, however, address the distribution of demand, which I believe is equally critical for understanding where we are headed.
