---
title: DOE Sounds Grid Alarm, 1GW+ Clusters, and the Overlooked Infrastructure
  Bottleneck
date: 2025-07-17T00:37:00.000+04:00
description: DOE says risk of power outages to increase by 100x in 2030 while
  Meta doubles down on superintelligence
image: /images/hero-minimalist-desk.jpg
---
Earlier this month, the[ DOE sounded major alarms on grid reliability](https://www.energy.gov/sites/default/files/2025-07/DOE%20Final%20EO%20Report%20%28FINAL%20JULY%207%29.pdf). ***The DOE concluded that retirements of old power plants plus load growth will increase risk of power outages by 100x in 2030. Even assuming no retirements and projected load growth—which is more conservative than tech industry estimates—there will be a 34x increase in outage risk.*** This comes as Texas, positioning itself as the new Virginia for data centers, recently passed legislation allowing the grid operator to forcibly disconnect data centers during power emergencies.

Meanwhile, Meta is doubling down on superintelligence with its confirmed 1 GW Prometheus cluster in Ohio (coming online in 2026) and Hyperion in Louisiana, which will deliver over 1.5 GW by end-2027 and scale up to 5 GW. Google just announced a major 3 GW hydro framework agreement with Brookfield—the world's largest corporate clean power deal for hydroelectricity—focusing on relicensing, overhauling, and upgrading existing hydroelectric assets.

I built a[ dashboard](https://36889091.streaklinks.com/CgRwoQ4fH6y2vn7RjQRguKvm/https%3A%2F%2Fnrytnqnm.manussite.space%2F) to track these dynamics. The directional trends aren't shocking—but the scale of the bottlenecks and what's coming absolutely is. Here’s what the data reveals.

**Seven Insights** 

1. **The US power industry hasn't experienced real growth in over 25 years**. Reigniting an industry with a 5-year CAGR of 0.5-1% for the past 20+ years won't happen overnight. For context: China is growing at double-digit rates.
2. **Grid investment needs are under appreciated**. Two key statistics illustrate the scale of what's needed: 

   * TD Securities analysis finds that the Dallas-area grid can no longer reliably provide power for local data centers; Northern Virginia may exceed reliability thresholds by 2027; and New Albany, Ohio will run out of reliability-rated power in summer 2028 (where Meta is building its Prometheus cluster).
   * Goldman Sachs forecasts that beyond hyperscaler capex, another $720 billion in grid capex (transmission and distribution alone) will be needed to support the current data center project pipeline.
3. **The power plants themselves are dangerously outdated**. The top 10 power plants by capacity or generation have a capacity/generation weighted average age of over 50 years. An old grid plus old power plants is a recipe for trouble. Upgrading existing plants will be as critical as (and cheaper than) building new ones.
4. **The power plant pipeline shows healthy project flow**, but baseload power isn't coming online fast enough to replace scheduled coal and gas retirements.
5. **Energy storage remains nascent**. Total current capacity sits at 29 GW—less than solar capacity added last year alone and about 10% of total solar and wind capacity. The pipeline looks promising but needs to deliver to support retirements.
6. **The industry remains overly optimistic about execution**. In April 2024, the American Public Power Association forecast 46 GW of additional capacity would come online in 2024. Actual: 37 GW.
7. **Announced projects have a terrible conversion rate**. From 2017-2024, 336 GW of projects were cancelled while 265 GW was added, but only 130 GW came online net of retirements. This should temper any demand forecasting based on announcements—if we can't get it right halfway through the year, we won't get it right based on headlines.

**Strategic Implications**

1. **All in energy and capex costs for hyperscalers could be over 2x higher per MW** than what they've had to pay over the past 5 years if they want what they want, when they want it by. They'll be forced to fund grid infrastructure buildout, transmission upgrades, and potentially even new baseload generation—fundamentally shifting from power procurement to becoming quasi-utilities. Question is will they be willing to bear the cost over the long-run?
2. **Meta's 1GW and 5GW data center plans will encounter substantial obstacles** in actually coming online, with even greater obstacles to training a single model on a 1GW cluster. For example, New Albany, Ohio (where Meta is building out Prometheus) is forecast to run out of reliability-rated power by the summer of 2028.
3. **We'll need to optimize what exists**. Both grid optimization and plant upgrades are essential. Companies like GridCare, EmeraldAI, and Tapestry (Google X) are emerging to address these needs. Also expect more of what Google and Microsoft are doing: upgrading existing infrastructure—both grid and power plants. 
4. **We desperately need architectural breakthroughs** that make models less energy-hungry. Recent efficiency advances show promise, but the gap between energy demand growth and efficiency gains remains massive. The scale of this challenge becomes clear when you consider that estimates suggest we need a 5 GW cluster for a ChatGPT2-to-ChatGPT4 intelligence leap using existing model architecture, with many hoping this would happen before 2030. We'll continue making progress, but AGI may be a dream deferred if we can't make the necessary architectural breakthroughs or get through energy bottlenecks.
5. **Distributed model training** is becoming increasingly viable, though latency and coordination challenges remain significant hurdles. Companies like Prime Intellect, Nous Research, and Pluralis Research are making real progress on these technical problems and deserve attention.
6. **This reinforces a critical geopolitical question** from my January US-China analysis: if the US gets bottlenecked by power constraints while China has abundant power supply but hardware constraints (that it will eventually overcome), we're not talking competitive disadvantage—we're talking technological leapfrogging in AI development.
