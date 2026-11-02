---
title: "Anthropic S-1 Teardown: An Exceptional Business, and a Balance Sheet
  That Bets on Continued Hypergrowth"
date: 2026-11-02T16:09:00.000+04:00
description: The S-1 Filing That Nearly Broke My Brain
---

Source: Anthropic PBC S-1 (including exhibits), SM Analysis (OpenRouter, Ramp).

The detailed data behind this analysis is in the [accompanying deck here](https://anthropic-s1-teardown.substratesm.com/). I also built a financial model alongside it. If you'd like access to run your own revenue scenarios and see how they change the runway, get in touch.

## TLDR

**The business.** Revenue grew 9.4× in FY2024 and 11.9× in FY2025, then reached $16.3B in H1 2026, 14× the same period a year earlier. Q2 2026 was the first of the six quarters disclosed with an operating profit ($974M), and I estimate revenue will be running at about $88.5B a year by the end of 2026. Serving customers is already very profitable: gross margin was about 85% in H1 2026, and most of the compute bill goes into building the next models rather than serving today's customers (SM). The customer base is broad, and no customer exceeded 10% of revenue over the nine months to September 30, 2026. The financial statements, however, show one customer, Customer C, at 11% of H1 2026 revenue. Nearly half of revenue (48%) is sold through the cloud providers' marketplaces, and channel fees cost about 17% of revenue (SM). Adoption is still early, even at the largest companies: Anthropic's top 10 Fortune 500 customers spend, on average, less than 1% of their total expenses with it.

**The commitments.** To support that growth, Anthropic has taken on about $1 trillion of commitments (my total; the S-1 leaves its own aggregate blank). The cloud contracts get most of the attention, but runway depends more on the $321.4B of leases not yet commenced, which grew 6.4× in six months as Anthropic moved toward leasing and running its own capacity. At the current run-rate, cash on hand plus the cash the business generates can pay for the compute and hardware contracts alone through 2036, even with no growth. Once the leases are added, break-even revenue rises above today's level. Paying for everything disclosed would take about $201B of revenue a year from 2027, roughly 2.3× today, and even 5% quarterly growth runs out of cash in early 2028 without new capital. Four risks get less attention than they deserve: energy and grid access; take-or-pay and cross-default terms in the contracts; government action, including export controls and a supply-chain-risk designation upheld on appeal; and cloud providers that are at the same time Anthropic's customers, sales channel, compute suppliers, investors, lenders and competitors.

**The funding.** The capital Anthropic has lined up comes with conditions. Broadcom's notes can only be used to pay rent, Google's draws depend on TPU deliveries and revenue targets, and Amazon's depend on compute milestones, so the money is hardest to reach when it would be needed most. The funding agreements also link the risks together. A missed payment on one compute lease can end the Broadcom note facility and make its notes due automatically, and Google and Amazon funding stops if certain commercial agreements are terminated. Under stress, funding could dry up just as obligations accelerate.

**The equity.** Runway measures cash and doesn't capture all the metrics needed for valuation, as several large claims on the equity sit outside it:

- ≈$35.5B of IPO-linked stock compensation (SM sum).
- Preferred stock with a $136.3B liquidation preference, which converts into Class N common stock just before the IPO closes.
- Amazon convertible notes carried at $108.6B of fair value on $6.2B of principal. Fair value is ≈17.5× principal because the notes convert into shares at no more than $2.09 and $5.05 each (≈1.84B shares), so their main cost to shareholders is dilution rather than cash (SM).
- A Public Benefit Fund grant of 5% of fully diluted shares (≈847M shares), which the board may increase by up to 2% each time the share price rises 50% above the prior milestone.
- $82.0B of conditional, purpose-tied funding from Google, Amazon, Broadcom and AMD, issued as shares or convertible notes at or below the 30-day average share price. I don't count any of it in my runway.

Non-cash items dominate GAAP results: almost all of the $80.7B H1 2026 net loss comes from fair-value changes (SM). The IPO price, size and share counts are still blank, so dilution can't be measured yet. The funding partners' registration-rights agreements don't add lock-ups of their own, and Google's shares must be registered for resale within 60 days of each quarterly closing once Anthropic can use Form S-3. With the Founder LLC holding 50.1% of the votes, public shareholders will have little say over new commitments. Overall, this is an exceptional business, but its balance sheet depends on hypergrowth continuing, and its equity carries claims that the cash figures don't show.

## 1. Growth is accelerating and turning profitable, but it depends on usage and the newest models
**My take:** growth sped up in 2026, reaching 144% quarter over quarter as revenue hit $11.6B in Q2. Gross margin rose from 12% in H1 2025 to 85% in H1 2026, Q2 brought the first operating profit, and the number of customers spending ≥$100K grew ≈12.5× in the year to September. The growth depends on usage and on the newest models, though: 80% of H1 2026 revenue was consumption-based, over 80% of Q3 revenue came from models released in the prior six months, and the H1 2026 rise in receivables was larger than operating cash flow. Nearly half of revenue also comes through cloud marketplaces, and channel fees cost about 17% of total revenue (SM).

- **Annual revenue:** FY2023 $41M → FY2024 $386M (9.4×) → FY2025 $4,585M (11.9×) (p. 22; F-7).
- **H1 2026:** $16,286M, 14.0× H1 2025 ($1,163M).
- **Q2 2026:** $11,555M, 14.7× Q2 2025 ($787M) and 71% of H1 2026 (p. 157).
- **Quarter-over-quarter growth, Q2 2025 to Q2 2026:** 109%, 76%, 48%, 132%, 144% (p. 157).
    - After Opus 4.5 launched in November 2025, growth rose from 48% (Q4 2025) to 132% (Q1 2026). The S-1 attributes the jump to a combination of factors rather than to the launch alone (p. 195).
- **Q3 2026:** revenue is blank (p. 63).
    - The S-1 says Q3 2026 revenue was "86 times" Q4 2024's $197M (pp. 63, 183), which implies ≈$16.9B (SM).
- **Year-end 2026 run-rate ≈$88.5B (SM), estimated from Ramp spend and OpenRouter token data:**
    - Calculation: Q3 $16.8B × (1 + 31.6%) = Q4 $22.1B, × 4. For Q3 I use the $16.8B reported by Reuters on October 14, 2026, slightly below the ≈$16.9B the S-1 implies.
    - The S-1 defines "Run-Rate Revenue" (p. 3) but leaves its October 31, 2026 figure blank (p. 194).
- **Margins:**
    - The income statement no longer shows a gross margin. In 2025 Anthropic switched from grouping expenses by function (cost of revenue, R&D, sales & marketing, G&A) to grouping them by what was bought (compute, personnel, sales & marketing, other), and recast all prior periods (F-14).
    - The functional split is still disclosed in Note 8 (F-39), so gross margin can be calculated (SM): 85.4% in H1 2026 ($2,380M cost of revenue) vs. 12.4% in H1 2025 ($1,019M).
    - Compute & infrastructure fell from 160% of revenue (FY2025, $7,326M) to 55% (H1 2026, $8,945M) (p. 22).
    - At most ≈$2.4B of H1 2026's $8.9B compute bill went to serving paying customers. Most of the rest went to building models (R&D) and to free access (sales & marketing) (F-39; SM).
- **Operating income:**
    - Q2 2026 GAAP operating income was $974M, the first positive quarter of the six disclosed (p. 157).
    - H1 2026 was still a $(693)M GAAP operating loss. Adjusted operating income was $1,618M (p. 156).
- **Customer momentum:**
    - Customers with ≥$100K of TTM revenue: ≈20 (2023) → ≈200 (2024) → ≈1,500 (2025) → >11,900 (9/30/26) (p. 142).
    - That count grew from >950 to >11,900 in the year to 9/30/26, ≈12.5× (p. 134; SM ratio).
    - As of 9/30/26: >1,900 customers at ≥$1M and ≈250 at ≥$10M (p. 142). Net Revenue Retention was ≈900% (pp. 10, 135, 182).
    - Governments barely register: contracts with all U.S. and non-U.S. government agencies combined were ≈1% of revenue in each period presented (p. 70).
- **Quality flags:**
    - ≈5%–7% of revenue for the nine months ended 9/30/26 came from customers later found to violate Anthropic's usage policy or commercial terms. This is Anthropic's estimate, which it says "requires judgment", and the revenue is recognized before access is restricted (p. 145).
    - Model versions released in the six months ended 9/30/26 produced over 80% of Q3 2026 revenue (p. 143).
    - Consumption-based revenue was $13.1B, 80% of H1 2026 revenue (75% in FY2024, 83% in FY2025) (p. 138).
    - The H1 2026 increase in receivables ($4,982M) was larger than operating cash flow ($3,929M) (F-12).
    - **Cloud marketplaces:** sales through CSP marketplaces rose from ≈11% of revenue in FY2023 to 32% (FY2024), 47% (FY2025) and 48% (H1 2026; 44% in H1 2025). They made up 58% of net receivables at 6/30/26 (p. 56; F-16).
        - The platforms "bill end customers, collect payments on our behalf, and remit such amounts to us, net of applicable platform and other fees" (p. 56).
        - Anthropic contracts directly with these customers and pays each CSP a fee (p. 9).
    - **What the channel costs:** sales, marketing & partnerships was $3,168M, 19% of H1 2026 revenue (10% in H1 2025). The increase came mainly from a $2.7B rise in fees paid to channel partners, plus $273M more marketing and advertising (p. 149).
        - Channel fees were therefore ≈$2.7–2.9B, ≈17% of total revenue (SM).
        - If those fees relate mainly to CSP-marketplace sales, they equal ≈34–37% of the ≈$7.8B sold through them (SM inference; the S-1 doesn't disclose the fee rate).

## 2. The customer base is broad, but concentration is closer to the 10% line than the narrative suggests
**My take:** the S-1 says no customer exceeded 10% of revenue, and the top five's share is falling. That statement covers nine months, though. The financial statements show Customer C at 11% of H1 2026 revenue, above the 10% disclosure threshold, which means its share must have dropped below 10% in Q3 (SM). The customers above 10% change from period to period, receivables are more concentrated than revenue, and adoption is still early even at the largest companies. The S-1 confirms that the cloud providers buy Claude themselves, but doesn't say whether any of them is a top customer.

**Where the base is broad**

- No single customer was above 10% of revenue for the nine months ended 9/30/26 (pp. 56, 143). This is a nine-month measure; see Customer C below.
- **Top-five share:** ≈25% of revenue for the nine months ended 9/30/26 (p. 56).
    - Revenue from customers outside the top five rose from ≈64% (Q1 2026) to ≈79% (Q3 2026) (p. 143).
    - So the top five's quarterly share fell from ≈36% to ≈21% (SM).
- **Breadth:** about 40 million customers each spend under $100K on a TTM basis (p. 142).
    - Every Fortune 10 company, over 50% of the Fortune 500 and over 30% of the Global 2000 are ≥$100K customers (pp. 142, 194).

**Customer C: below 10% over nine months, above it in H1 2026**

- **Two different windows:**
    - The narrative says "no single customer represented more than 10% of our revenue for the nine months ended September 30, 2026" (pp. 56, 143).
    - The concentration-of-risk note in the financial statements shows Customer C at 11% of H1 2026 revenue and 10% of net receivables at 6/30/26 (F-15).
- **Disclosure:** measured over nine months, C falls below the 10% threshold and isn't mentioned in the narrative, even though it was above the threshold in H1 2026, the latest period in the financial statements. The S-1 doesn't name or describe C, or Customers A, B and D (F-15).
- **What the figures imply (SM):**
    - **Revenue:** C was ≈$18M in FY2023 (43% × $41M), under $116M in H1 2025 and ≈$1.71–1.87B in H1 2026 (a range, because 11% is rounded). That is growth of at least ≈14.7×.
    - **Receivables:** C held ≈$0.58B (10% × $5,833M).
    - **Q3 2026:** for C to be at or below 10% over nine months after 11% in H1, its Q3 share must have been below 10%. Its Q3 revenue was at most ≈$1.45–1.61B, ≈8.6–9.5% of the implied ≈$16.9B Q3.

**Diffusion is still a work in progress**

- In Q3 2026, revenue from ≥$100K Fortune 500 customers averaged <0.1% of their total expenses. For the top 10 Fortune 500 customers it averaged <1%, "over eight times" the average. Both measures cover only publicly traded Fortune 500 customers (pp. 142–143).
- ≥$100K customers were 90% / 57% / 76% of FY2023 / FY2024 / FY2025 revenue. The TTM share is blank (p. 142).
- Even with about 40 million customers, the top five accounted for ≈25% of nine-month revenue, and revenue from each of them reached a record high in Q3 2026 (pp. 56, 142–143).
- **Concentration rotates (F-15; customers at ≥10% of revenue):**
    - C: 43% of FY2023 → below 10% in FY2024, FY2025 and H1 2025 → 11% of H1 2026.
    - B: 12% of FY2025 and 18% of H1 2025 → below 10% in H1 2026.
    - A: 12% of FY2025 → below 10% in H1 2026.
    - D: 11% of FY2023 only.
- **Receivables are more concentrated than revenue:** at 6/30/26, A held 13% and C 10% of the $5,833M of net receivables, together 23% or ≈$1.34B (F-5, F-15; SM $). A was also 13% at 12/31/25.
- **Contracts:** "Many of our top customers are not subject to long-term contracts with us or have contracts with near-term expiration dates and are able to reduce or in some cases cease spending at any time." Some large customers also have flexible financial commitments, termination rights, indemnification and security obligations (p. 56).

**Who the biggest customers could be: the S-1 points to three groups**

- **The cloud providers themselves:** "These CSPs are also our customers, purchasing our intelligence service for internal use or for their own products and services" (p. 73).
    - Google has "a commercial agreement ... for the provision of intelligence service" (F-39).
    - Amazon's notes can be settled "by set-off against amounts Amazon owes the Company under certain commercial agreements with Amazon" (F-41). That shows Amazon owes Anthropic money, which may include marketplace collections; on its own it doesn't show that Amazon buys Claude for its own use (SM).
- **Software companies building on Claude:** the S-1 singles out software-as-a-service and other software companies "whose offerings may incorporate AI functionality similar to, or dependent on, the capabilities we provide". Some of these customers could "restrict our access to the compute we obtain from them" (p. 55).
- **Venture-funded companies:** the S-1 lists outside funding among the reasons revenue from top customers may not hold up: "our customers, particularly early-stage and high-growth companies, may depend on venture capital or other external financing" (p. 57).
- **Size (SM):** the top five held ≈21% of Q3 2026 revenue, ≈$3.5B for the quarter, or ≈$0.7B each on average.
- The S-1 doesn't name the top five or Customers A–D, or say whether any cloud provider is among them.

## 3. Leases are now the largest commitment, and they get less attention than compute
**My take:** when people talk about Anthropic's compute commitments, they usually mean the Google, Amazon and Microsoft contracts, which are minimums paid regardless of usage. The largest and fastest-growing category, though, is leases not yet commenced: $321.4B, up 6.4× in six months, with about half not tied to any counterparty the S-1 names (SM). These leases reflect the shift to "Anthropic Direct", in which Anthropic adds directly leased chips, hosted in dedicated facilities run on its behalf, to its cloud agreements. Payments can start before the compute is usable.

**Compute: the cloud minimums (pp. 170–171)**

| Contract | Amount | Term | Who can cancel |
|---|---|---|---|
| Google cloud | at least ≈$114.5B | Apr 2026–Jul 2033 | only on Google's uncured material breach |
| Amazon | at least $110.0B | May 2026–Apr 2036 | only on Amazon's uncured material breach |
| Microsoft | at least $44.9B | Nov 2026–May 2033 | on Microsoft's uncured material breach, or per tranche for undelivered tranches |

- **Spend floors:** all three are paid "regardless of actual usage". Google and Amazon also require a true-up for any shortfall.
- **SpaceXAI:** up to $120.5B over terms into 2029, ≈$3.1B a month once fully delivered (expected Dec 2026). The initial non-cancelable periods end Jan and Mar 2027; after that either party can cancel on 90 days' notice (p. 171).
- **Nscale and Lambda:** Nscale up to ≈$44.6B (into 2033) and Lambda ≈$41.3B (into 2034). Fees accrue only as capacity is delivered and accepted. Lambda's $34.9B August 2026 agreement can be ended if Lambda doesn't secure the facility lease in time (p. 171).
- **Estimates outside the S-1 table:**
    - TPU compute from Google and other TPU providers: ≈$125.0–150.0B, delivered 2028–2031 (p. 170; F-63).
    - AMD: no fixed dollar commitment, with the initial capacity tranche in calendar 2027. Spending is expected to exceed $20.0B over the term if fully procured, with an option for up to ≈the same amount again (p. 171).

**Leases**

- **Size and growth:** Note 7 leases not yet commenced were $321.4B at 6/30/26, up from $50.2B at 12/31/25, 6.4× in six months (F-35; SM ratio).
    - They commence 2026–2028, with terms from under one year to 20 years.
    - Some are "subject to certain contractual conditions being met" (F-35).
- **Largest category:** leases are ≈38% of the ≈$853B of dated commitments (SM).
- **Who they are with:**
    - Broadcom five-year master equipment leases: ≈$161.2B of rent excluding interest (p. 171). That includes the 2026 Lease Arrangement at ≈$125.2B (p. 74); the other ≈$36.0B is the difference (SM).
    - Finance-lease liabilities were only $443M at 6/30/26 (F-35), so almost none of the Broadcom rent had started.
    - ≈$160.2B of the $321.4B is not tied to a contract the S-1 names (SM: $321.4B − $161.2B). This assumes every Broadcom lease was signed by 6/30/26. If some were signed later, up to $36.0B shifts into post-June commitments, and the overall total stays the same.
- **Strategy shift, "Anthropic Direct":**
    - Anthropic is moving from cloud-only agreements to a hybrid model that adds leasing chips directly and hosting them in dedicated facilities run on its behalf. "A significant portion of this total committed spend relates to Anthropic Direct" (p. 137).
    - Capex and lease obligations "require significant upfront payments well in advance of the related compute becoming operational", and capex is expected to "increase significantly" (pp. 76, 161).
    - Some planned facilities rely on on-site natural-gas generation (p. 35).
- **What the S-1 leaves blank:**
    - The aggregate commitment total, the amount incurred before 12/31/2030 and the amount due in the next 12 months (pp. 6, 32, 137).
    - The contractual-obligations table and the lease-commencement amounts (pp. 169–170).

**My five-step commitment ladder (cumulative from Jul 2026; SM)**

- **Step 1, compute & hardware, $474.0B:** Google, Amazon, Microsoft, the Broadcom 2026 lease, Lambda and Nscale.
- **Step 2, + rest of the leases not yet commenced, +$196.2B → $670.2B:** the other Broadcom leases ($36.0B) and the unnamed $160.2B.
- **Step 3, + other dated commitments, +$67.8B → $738.0B:** the Note 17 short-term $21.0B (F-65) plus a $46.8B long-term remainder the S-1 does not itemize.
- **Step 4, + SpaceXAI = all dated commitments, +$115.0B → $853.0B.**
    - $853.0B = Note 13 $265.6B (F-58) + Note 7 leases not yet commenced $321.4B (F-35) + Note 17 post-June commitments $245B + Note 17 short-term $21B (F-65).
- **Step 5, + TPU estimate (midpoint $137.5B) + AMD ($20.0B) = everything disclosed, +$157.5B → ≈$1,010.5B.**
- **Checks against double counting (SM):**
    - The named contracts (≈$637B) sit inside the dated aggregates.
    - Note 16's $417B of post-12/31/25 commitments (F-63) also fits: $104.8B at 12/31/25 + $417B = $521.8B, within the $587.0B reported for Notes 13 and 7 at 6/30/26.

## 4. Runway: the compute contracts are fundable, but the full ≈$1T needs sustained hypergrowth or new capital
**My take:**

- **Compute and hardware:** at today's ≈$88.5B run-rate, cash plus operations cover them through 2036 even with zero growth.
- **Leases:** once they are added, the flat case runs out of cash in Oct 2030.
- **Everything disclosed** needs ≈$201B of revenue a year from 2027, about 2.3× today. Even 5% quarterly growth runs out in early 2028; only the bull case gets there without new capital.

**Core assumptions (SM)**

- **Starting cash:** $126.7B usable = $112.4B cash + $19.3B short-term investments − the $5.0B minimum-liquidity covenant, which applies from Q4 2026 (F-5; p. 163).
- **Revenue:** every case starts from my $88.5B year-end 2026 run-rate.
    - Bear: flat.
    - Base: +5% a quarter (≈21.6% a year), reaching a $193B exit run-rate in 2030.
    - Bull: quarterly growth starts from my Q4 2026 estimate of +31.6% and is cut 30% each year, never reaching zero. That gives +22.1% a quarter in 2027, 15.5% in 2028, 10.8% in 2029, 7.6% in 2030, 5.3% in 2031 and 0.9% in 2036, and a $709B exit run-rate in 2030.
- **Costs:**
    - Non-compute cash costs stay at their H1 2026 share of revenue, 35.9% in total: sales, marketing & partnerships 19.5%, personnel excluding SBC 5.9%, other operating & administrative 10.5% (p. 22).
    - Capex is $1.0B a year.
    - Commitments are paid as contracted, spread evenly between the S-1 start and end dates.
- **Timing:**
    - Unnamed leases start evenly from Jul 2026 to Dec 2028 on 10-year terms.
    - The long-term remainder is paid over 10 years.
    - TPU spending (midpoint) runs 2028–2031; AMD is paid in 2027.
- **Test:** monthly through Dec 2036. Break-even is the flat revenue from Jan 2027 that keeps cash at or above zero every month.
- **For reference:** management says existing cash, cash equivalents and short-term investments, together with the revolver, will cover working capital, lease payments and capex for at least the next 12 months (p. 162).

**When cash runs out (after all operating expenses and capex; SM)**

| Step | Bear ($88.5B flat) | Base (+5%/qtr) | Bull (+22.1%/qtr in 2027, cut 30% a year after) | Break-even revenue |
|---|---|---|---|---|
| 1 Compute & hardware ($474.0B) | Beyond 2036 | Beyond 2036 | Beyond 2036 | ≈$68.9B (0.78×) |
| 2 + rest of leases ($670.2B) | Oct 2030 | Beyond 2036 | Beyond 2036 | ≈$101.1B (1.14×) |
| 3 + other dated ($738.0B) | Oct 2029 | Beyond 2036 | Beyond 2036 | ≈$115.7B (1.31×) |
| 4 + SpaceXAI ($853.0B) | Apr 2028 | Jul 2028 | Beyond 2036 | ≈$152.7B (1.73×) |
| 5 + TPU, AMD (≈$1.0T) | Jan 2028 | Feb 2028 | Beyond 2036 | ≈$201.4B (2.28×) |

"Beyond 2036" means cash is still above zero in Dec 2036, where my test ends. Break-even multiples are relative to the $88.5B run-rate. On a simpler straight-line view, the bear case's runway falls from 8.7 years at Step 1 to 0.75 years at Step 5.

**Bull-case quarterly growth path (SM)**

| | Q4 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Quarterly growth | 31.6% | 22.1% | 15.5% | 10.8% | 7.6% | 5.3% | 3.7% | 2.6% | 1.8% | 1.3% | 0.9% |
| Q4 vs. prior Q4 | – | 123% | 78% | 51% | 34% | 23% | 16% | 11% | 7% | 5% | 4% |
| Exit run-rate | $88.5B | $197B | $350B | $529B | $709B | $872B | $1,009B | $1,119B | $1,203B | $1,265B | $1,311B |

Each year's quarterly growth rate is 70% of the prior year's (31.6% × 0.7 = 22.1%, and so on).

**What the scenarios show**

- **Compute & hardware alone pays for itself** at today's run-rate: break-even is ≈$68.9B, below $88.5B.
- **Adding the rest of the leases** (Step 2) lifts break-even above today's run-rate (≈$101.1B, 1.14×), and the bear case runs out in Oct 2030.
- **The full ≈$1T needs ≈$201.4B a year from 2027 (2.28×).** The base case still runs out in Feb 2028; only the bull case lasts.
- **Pro-forma cash flow at Step 4 (all dated commitments):**
    - Bear: free cash flow is never positive (−$75.4B in 2027), and cash runs out in Apr 2028.
    - Base: free cash flow turns positive only in 2030 ($17.1B), after a funding gap of ≈$56.3B by the end of 2029.
    - Bull: free cash flow is positive from 2028 and reaches $310.3B in 2030. If compute grows with usage, the 2030 figure is ≈$57.4B.
- **External funding:** at Steps 4–5, the bear and base cases need IPO proceeds and/or the contingent facilities, and those facilities depend on compute deliveries, revenue tests and commercial agreements staying in force (section 5).
- **Biggest sensitivities:**
    - Lease term: 5-year terms move the bear Step 2 date to Nov 2029; 20-year terms move it to Sep 2031.
    - Non-compute costs 5 points higher cut the straight-line Step 1 runway from 8.7 to 6.7 years.
    - If compute grows with usage, the bull case runs out at Step 5 in ≈Sep 2028.
    - The S-1's timing blanks (pp. 6, 32, 169–170) mean the dating of payments is my estimate.

## 5. Energy, contract terms, government action and the cloud providers' overlapping roles deserve more attention
**My take:** read together, the risk factors describe a company that is turning into an energy and infrastructure developer, with exposure to grid queues, gas supply, 20-year take-or-pay terms, guarantees and cross-defaults. On top of that come export controls and a supply-chain-risk designation that an appeals court has upheld. Amazon, Google and Microsoft are at once customers, a sales channel, compute suppliers, investors and competitors, and Amazon, Google and Broadcom are also lenders whose funding depends on the same contracts. These risks matter more than the headline revenue and commitment figures suggest.

**Energy and power**

- **Grid access:** interconnection queues for large new loads "have also lengthened substantially". Utilities and regulators may make Anthropic bear grid-upgrade or interconnection costs beyond those of serving its own facilities (p. 34).
- **Gas:** on-site gas-fired generation brings fuel-price and supply risk, with fuel costs passed through to Anthropic, plus pipeline and firm-transport constraints (p. 35).
- **Long-dated terms:** some dedicated power and data-center deals run 20 years, with annual escalators, take-or-pay compute payments and uncapped fuel pass-throughs "regardless of actual utilization" (p. 76).
- **State action:** New York has paused state permitting for new large facilities. Texas subjects large loads to curtailment or disconnection during grid emergencies (p. 37).
- **Community commitments:** Anthropic has made voluntary commitments to local communities and electricity ratepayers, including covering grid-upgrade costs, procuring new generation and investing in curtailment systems (p. 36).
- **Guarantees:**
    - Up to $500M under a provider's power-purchase contract (F-63).
    - Developer guarantees with maximum potential payments of up to $0.8B (F-59).
    - Certain VIE obligations (VIE liabilities $328M; F-35).

**The cloud providers play almost every role**

- **Customers:** they buy Claude "for internal use or for their own products and services" (p. 73).
- **Sales channel:** 48% of H1 2026 revenue was sold through their marketplaces, with channel fees at ≈17% of revenue (F-16; p. 149; SM).
- **Suppliers:** ≥$269.4B of cloud minimums from Google, Amazon and Microsoft (pp. 170–171; SM sum).
- **Investors and lenders:** each has made "significant equity investments" (p. 73), and certain CSPs hold non-voting preferred stock and convertible notes (F-16). Google and Amazon still have $35.0B of note purchase capacity (F-40, F-42).
- **Competitors:** each develops competing models. The distribution relationships "give them visibility into our pricing and commercial terms across the platforms they operate" (p. 73).
- **Scrutiny:** these relationships "have attracted and may in the future attract antitrust or competition law scrutiny" (p. 74).

**Contract terms**

- **Key-person clauses:** under certain supplier agreements, losing certain key personnel "could accelerate our obligations" (p. 38).
- **Cross-defaults:** a default under certain commercial agreements could trigger cross-defaults under the A&R Credit Agreement and certain convertible notes, accelerating "substantially all of our outstanding, and any future, indebtedness" (p. 32).
- **Paying before capacity is usable:**
    - Broadcom rent may start before "ready for service" (p. 171).
    - Completion guarantees may terminate on a lender foreclosure (p. 75).
- **Cash tied up:** $2.5B went into escrow in April 2026 (F-63), and Anthropic may have to restrict up to $10.0B more (F-36).
- **Broadcom notes (up to $42.0B):**
    - They can only finance quarterly rent on the 2026 Lease Arrangement, at 9.00% interest paid in kind.
    - Issuance depends on revenue-growth, minimum-liquidity and lease-performance conditions, and ends if these are unmet "for a sustained period".
    - Notes issued while the revenue conditions are missed carry 13.00% and convert at 85% (vs. 90%) of the 30-day VWAP (pp. 166–167).
    - Some rent is always paid in cash: notes cannot pay each Pod's first quarterly payment or any rent due before ready-for-service (Ex. 4.4 §2.1(a)).
    - If the notes are accelerated, the amount due includes interest to maturity (Ex. 4.4 §1(b)). An early buy-out is settled in cash if Broadcom makes no election (§2.2(h)).

**Lenders that are also suppliers**

- **Broadcom:** a missed Broadcom lease payment is an event of default. So is a missed payment, early termination or acceleration of any other compute lease that counts as material debt; in that case the facility ends and the notes fall due "immediately, automatically and without notice" (Ex. 4.4 §§6.1(e)–(f), 6.3(b)). During a default, Broadcom can sell the notes without Anthropic's consent (§10.2).
- **Liquidity:** the Broadcom agreement requires Anthropic to keep enough revolver-defined liquidity that the revolver's early (springing) maturity never applies (Ex. 4.4 §7.11). That maturity is triggered when more than $500M of scheduled cash principal falls due within 91 days without enough liquidity to pay it (p. 162).
- **Google:** no draw if an investor agreement has been terminated or materially breached, or if a compute or capacity agreement has been terminated (Ex. 4.5 §4.1(g)–(h)).
- **Amazon:** every closing requires that no "Atlas Agreement" (commercial agreements the filing doesn't name) has been terminated. Termination of one for Anthropic's material breach is an event of default under the form of note Amazon would receive after the IPO (Ex. 4.3 §7(d); Exhibit D §1(a)(iv)).
- A single supplier dispute could therefore cut off funding and accelerate obligations at the same time.

**Government and legal**

- **Export controls:** in June 2026 the U.S. Department of Commerce imposed worldwide export restrictions on the Fable 5 and Mythos 5 models. Anthropic disabled them for all customers until the restrictions were lifted (p. 51).
- **Department of War supply-chain-risk designation:**
    - The district court largely granted summary judgment in Anthropic's favor (F-64).
    - On 9/25/26 the D.C. Circuit upheld the Section 4713 designation 2–1. Anthropic has petitioned for rehearing en banc (p. 72).
- **Legal exposure:**
    - Some agreements require Anthropic to indemnify counterparties against IP claims "without a cap on our liability" (pp. 50, 93).
    - Accrued legal expenses were $1,309M at 6/30/26 (F-37).
    - The Bartz settlement cost $1.5B in FY2025 (p. 22).

**Compute economics**

- **Agentic workloads** use far more compute per interaction, so compute "could increase disproportionately relative to the associated revenue" (p. 30).
- **Timing mismatch:** compute is procured 12–18 months ahead (p. 159), so capacity can arrive out of step with demand. That creates "committed cash outflows that do not produce immediate revenue" (p. 31).

## 6. Dilution and other non-cash claims are large and can't be measured yet
**My take:** the runway analysis tracks cash only, so it leaves out several large claims on the equity:

- ≈$35.5B of IPO-linked stock compensation (SM sum)
- preferred stock with a $136.3B liquidation preference, which converts into Class N common stock just before the IPO closes
- Amazon convertible notes carried at $108.6B of fair value on $6.2B of principal
- a 5% Public Benefit Fund share grant (≈847M shares) that the board may increase
- $82.0B of conditional, purpose-tied equity-linked funding

Dilution can't be measured until the S-1 fills in the IPO price and share counts. The funding partners' registration-rights agreements don't add lock-ups of their own, and the governance structure leaves public shareholders with little say.

- **Stock-based compensation (SBC):** my runway and pro-forma figures are cash-based, so they exclude SBC ($2,185M in H1 2026, 13.4% of revenue; p. 156). That cost is paid through dilution.
- **IPO-linked SBC, ≈$35.5B (SM sum):**
    - $2.9B recognized at the IPO, with $23.7B unrecognized over ≈2.1 years (p. 64; F-52).
    - ≈$3.1B for other awards over ≈1.3 years (p. 64).
    - $5.8B for RSUs granted after 6/30/26 (F-64).
- **Claims ahead of IPO buyers:**
    - Preferred stock carrying a $136,286M liquidation preference (F-5). It converts to Class N immediately before the IPO closes (p. 19).
    - $108,566M of convertible notes on the balance sheet, recorded at fair value (F-5, F-30). All of them are Amazon rollover notes, so fair value is ≈17.5× principal (p. 164; SM).
    - Amazon rollover notes of $6,203M principal, convertible into ≈1.84B Class N shares at fixed prices, subject to Amazon's 12% ownership cap (p. 164).
        - They mature in March 2034 ($2,186M) and January, May and November 2035 ($4,017M) (p. 164).
        - Any balance not converted by maturity is payable in cash or, at Amazon's election, by set-off against amounts Amazon owes Anthropic under certain commercial agreements (p. 166; F-41). Set-off uses up a receivable instead of cash, so the cash effect is the same as repayment.
        - In my model, repaying all $6.2B in cash at maturity doesn't change the cash-out date in any case or step (SM). The more important point is that Amazon chooses how to settle, and could in effect repay itself out of money it owes Anthropic, which may include marketplace collections (SM).
- **Public Benefit Fund:** 846,840,960 Class N shares, 5% of fully diluted shares at 6/30/26, assuming full conversion of the Amazon notes (p. 12).
    - The board may, at its discretion, add up to 2% more each time the share price rises 50% above the prior milestone (p. 12).
    - The grant implies a fully diluted base of ≈16.9B shares (SM: 846.8M ÷ 5%).
- **Funding is equity-linked, conditional and purpose-tied:** $82.0B of remaining capacity, none of it counted in my runway (pp. 163, 165; F-40, F-42).
    - Google NPA $20.0B. The first tranche follows TPU capacity deliveries; a second opens only if redacted revenue targets are met, and Google can defer it. Google's ownership is capped at 14.99%, with any unconverted notes redeemed in cash. The amount may fall by up to $10.0B if Google buys in a concurrent private placement at the IPO, which replaces later draws rather than adding to them (F-40; Ex. 4.5 §§2.1, 2.2(e), 3).
    - Amazon NPA $15.0B, drawn on compute milestones. Without Amazon's consent a closing comes no earlier than 60 days after a draw request, and the draw period ends 30 months after the IPO (Ex. 4.3 §§2(a), 10).
    - Broadcom NPA $42.0B, usable for rent only.
    - AMD Class N purchase $5.0B, tied to delivery milestones.
    - Google, Amazon and AMD issue at the 30-day VWAP; Broadcom notes convert at 90%/85% of it.
- **Resale supply:** the Broadcom registration-rights agreement does not restrict transfers, and Google's shares must be registered for resale within 60 days of each quarterly closing once Anthropic can use Form S-3 (Ex. 4.6 §1.01; Ex. 4.7 §1.04). These agreements don't add lock-ups of their own; the IPO lock-up and market-standoff agreements cover holders of substantially all existing shares (p. 117). Shares issued under the facilities could therefore reach the market quickly.
- **GAAP results:** the H1 2026 net loss was $(80,748)M (p. 22).
    - Almost all of it (≈100%) is non-cash fair-value items (SM): a $(72.4)B change in the fair value of the convertible notes and derivative liabilities (p. 161), plus an $(8.7)B NPA mark-to-market (F-12).
    - Of the $132.9B accumulated deficit, $113.2B comes from fair-value changes since 2023 (p. 161).
- **Dilution can't be computed yet:** IPO size, price, proceeds, share counts and the Amazon conversion amount are blank (cover; p. 19).
- **Not in my cash model:**
    - GAAP lease accounting (finance-lease depreciation and interest).
    - IPO proceeds, interest income ($1,111M in H1 2026, ≈$2.2B a year; p. 22), the $15.0B revolver (F-64), taxes and working capital.
    - New commitments after October 2026, pricing and competition, and valuation multiples.
- **Governance:** Class F stock (held by the Founder LLC) carries 50.1% of the votes (cover; p. 13). Class T directors, elected by the Long-Term Benefit Trust (LTBT), form a board majority (p. 15). Public shareholders will have little say over new commitments.

## Notes on sources and method

- **Sources:** figures come from the Anthropic PBC S-1, including its exhibits, unless marked "(SM)". Many thresholds, caps and schedules in the exhibits are redacted. Two inputs come from outside the S-1: my year-end 2026 run-rate estimate, built from Ramp spend data and OpenRouter token data, and the $16.8B of Q3 2026 revenue reported by Reuters on October 14, 2026.
- **Page references** are to the S-1's printed page numbers, with "F-" pages in the financial statements. "Ex." refers to an exhibit filed with the S-1, cited by section.
- **"(SM)" = SM Analysis:** my own calculations, estimates and assumptions, such as sums, ratios, implied values and all scenario results.
- **Reporting periods:** the S-1 has audited years (FY2023–FY2025), six-month interim financials (H1 2025 and H1 2026), and some operating metrics for Q3 2026 or the nine months ended September 30, 2026 (January–September 2026). Q3 2026 revenue is blank, so nine-month and Q3 percentages are labelled with their period.
- **Commitment totals:** the S-1 leaves its own aggregate blank (p. 6). My ≈$853B of dated commitments is the sum of four S-1 figures, shown in Step 4 above. The ≈$1.0T adds the TPU midpoint and AMD estimates.
- **Payment timing:** where the S-1 gives only start and end dates, I spread payments evenly across them. The actual payment schedules may differ.
