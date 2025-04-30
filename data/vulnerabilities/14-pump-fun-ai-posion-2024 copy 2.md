---
id: 14
title: The Alleged $80M Solana Memecoin Casino Exploit  Unraveling the Pump.Fun Attack 
protocol: Pump Fun
protocolType: AMM
exploitDate: 2024-05-16
amountStolen: 1_900_000 
exploitType: Other
technique: exploited unauthorized access to the platform's withdraw authority
auditor: N/A
status: published
contributors:
  - username: Mira
    url: https://x.com/4k_mira
---

On May 16, 2024, the Solana blockchain, a hub for memecoin trading and decentralized applications, was rocked by a high-profile exploit targeting Pump.Fun, a popular memecoin launchpad. Initial reports on social media platforms, particularly X, claimed losses as high as $80 million, sparking widespread concern about the security of Solana’s memecoin ecosystem. However, official statements from Pump.Fun later clarified that the actual damage amounted to approximately $1.9 million. This article delves into the details of the exploit, its mechanics, the alleged perpetrator, and its broader implications for the Solana blockchain and the crypto industry.


## The Exploit: How It Happened

Pump.Fun, launched in January 2024, is a Solana-based platform that simplifies the creation and trading of memecoins, enabling users to deploy tokens with minimal technical expertise. By May 2024, it had facilitated the creation of over six million memecoins, cementing its role as a cornerstone of Solana’s memecoin economy. However, its rapid growth also made it a prime target for exploits.

The attack, which unfolded between 3:21 PM and 5:00 PM UTC on May 16, 2024, was allegedly orchestrated by a former Pump.Fun employee. According to the platform’s official statement, the ex-employee exploited their “privileged position” to gain unauthorized access to a “withdraw authority” within the protocol’s internal systems. This access allowed the attacker to manipulate Pump.Fun’s bonding curve contracts, which are used to determine token prices based on trading activity.

The attacker employed a sophisticated strategy involving flash loans, a type of uncollateralized loan available on Solana’s lending protocol, Raydium. Flash loans allow users to borrow large amounts of assets (in this case, Solana’s native SOL token) within a single transaction, provided the loan is repaid before the transaction completes. The attacker borrowed approximately 12,300 SOL (valued at $1.9 million) and used these funds to purchase as many memecoins as possible on Pump.Fun. By driving these tokens to 100% on their bonding curves, the attacker gained access to the liquidity locked in those curves, siphoned off the funds, and repaid the flash loans, pocketing the difference.

Of the $45 million in total liquidity held in Pump.Fun’s bonding curve contracts, only $1.9 million was stolen, far less than the $80 million initially reported on X. The discrepancy likely arose from early speculation and misinformation, amplified by the crypto community’s rapid reaction on social media. Pump.Fun quickly paused trading to contain the damage and upgraded its contracts to prevent further losses. By 5:00 PM UTC, trading resumed with enhanced security measures, and the platform assured users that its smart contracts were safe.

## The Alleged Perpetrator: Jarett Dunn ([@STACCoverflow](https://x.com/i/grok?conversation=1917616603782603209#:~:text=Perpetrator%3A%20Jarett%20Dunn%20(-,%40STACCoverflow,-)))

Suspicion quickly fell on Jarett Dunn, known online as [@STACCoverflow](https://x.com/i/grok?conversation=1917616603782603209#:~:text=Perpetrator%3A%20Jarett%20Dunn%20(-,%40STACCoverflow,-)), a former Pump.Fun employee. Prior to the exploit, Dunn posted cryptic messages on X, including, “Everybody be cool, this is a robbery... I’m about to change the course of history,” and “I’ve been completely doxed.” These posts, combined with his claim of intending to redistribute stolen funds to certain Solana token holders, fueled speculation about his involvement.

Igor Igamberdiev, head of research at cryptocurrency market maker Wintermute, suggested that the exploit stemmed from an internal private key leak, pointing to Dunn as the likely culprit. Dunn’s actions appeared to be a mix of malicious intent and performative protest. In a series of X posts, he claimed to be motivated by personal grievances, citing mental health struggles and grief, and stated his intention to airdrop the stolen funds to holders of specific Solana-based tokens and NFTs, such as Slerf, Saga, and Risklol. However, there is no evidence that these airdrops occurred on a significant scale.

On May 18, 2024, Dunn was arrested in London’s Middle Eight Hotel in Covent Garden following a 26-hour intelligence operation led by a private firm hired by a third-party stakeholder. The operation tracked Dunn’s movements, leading to his apprehension by local authorities. He was later released on bail, with Pump.Fun confirming it was cooperating with law enforcement. Dunn’s arrest marked a swift response to the exploit, but it also raised questions about internal security practices at Pump.Fun, particularly regarding the management of privileged access for former employees.

## Impact and Response

The exploit sent shockwaves through the Solana ecosystem, which had already faced scrutiny for its association with memecoin scams and rug pulls. While Pump.Fun minimized the financial impact, restoring 100% or more of the affected liquidity to users within 24 hours, the incident highlighted vulnerabilities in the platform’s security framework. Critics argued that Pump.Fun should have revoked the former employee’s access immediately after their departure, a standard practice in cybersecurity.

The broader Solana memecoin market, often likened to a “casino” due to its speculative nature, faced renewed criticism. Posts on X reflected mixed sentiments, with some users questioning Solana’s resilience and others downplaying the exploit as a minor setback. The incident coincided with a period of intense memecoin activity on Solana, driven by tokens like BONK, WIF, and the controversial LIBRA, which had been linked to Argentine President Javier Milei and a subsequent rug pull scandal.

Despite the exploit, Pump.Fun’s rapid recovery and transparency helped mitigate long-term damage to its reputation. The platform waived trading fees for seven days and redeployed liquidity pools for affected tokens, ensuring users could resume trading without significant losses. However, the incident underscored the risks of centralized control in decentralized systems, particularly for platforms handling millions in liquidity.

## Broader Implications for Solana and Memecoins

The Pump.Fun exploit is part of a broader pattern of security challenges facing Solana. In 2022, the blockchain suffered a major wallet hack that drained over $5 million from nearly 8,000 wallets, and in 2024, scams like the “Bonk Killer” honeypot and the CAT memecoin manipulation further tarnished its reputation. The Lazarus Group, a North Korean cybercrime unit, was also linked to memecoin scams on Pump.Fun, raising concerns about the platform’s role in facilitating illicit activities.

Solana’s appeal lies in its low transaction fees and high throughput, making it a breeding ground for memecoins and speculative trading. However, these same features attract bad actors, from disgruntled insiders to sophisticated hacking groups. The Pump.Fun exploit exposed the fragility of trust in platforms that democratize token creation, where ease of access can also enable exploitation.

For the crypto industry, the incident serves as a reminder of the need for robust security practices, especially in the memecoin sector, which often prioritizes hype over fundamentals. Platforms like Pump.Fun must balance accessibility with stringent safeguards, such as multi-signature wallets, regular audits, and immediate revocation of access for former employees. Investors, meanwhile, are urged to exercise due diligence, scrutinizing tokenomics and developer credibility before participating in memecoin launches.

## Conclusion

The alleged $80 million Pump.Fun exploit of May 16, 2024, was a stark wake-up call for the Solana ecosystem, revealing both the opportunities and risks of its memecoin-driven economy. While the actual losses were limited to $1.9 million, the incident exposed vulnerabilities in Pump.Fun’s internal controls and sparked a broader debate about the sustainability of Solana’s “casino-like” memecoin market. The swift arrest of Jarett Dunn and Pump.Fun’s rapid response mitigated some of the damage, but the exploit underscored the need for enhanced security and vigilance in the fast-evolving world of decentralized finance.

As Solana continues to dominate decentralized exchange (DEX) volumes and attract institutional interest, incidents like the Pump.Fun exploit highlight the growing pains of a blockchain striving to balance innovation with integrity. For investors and developers alike, the lesson is clear: in the high-stakes world of memecoins, caution and accountability are as critical as creativity and ambition.
