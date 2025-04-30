---
id: 11
title: The MetaWin Hack of November 2024 - A Deep Dive into the $4 Million Crypto Breach
protocol: MetaWin
protocolType: Game
exploitDate: 2024-11-03
amountStolen: 4_000_000
exploitType: Access Control
technique: Access control exploit targeting the platform’s frictionless withdrawal system.
auditor: HashEx
status: published
contributors:
  - username: Mira
    url: https://x.com/4k_mira
---

In early November 2024, MetaWin, a prominent online cryptocurrency casino operating on Ethereum and Solana blockchains, fell victim to a significant security breach that resulted in the theft of approximately $4 million in digital assets. This incident, reported on November 3, 2024, highlighted the persistent vulnerabilities in the decentralized finance (DeFi) and crypto gaming sectors, particularly those relying on hot wallets and frictionless withdrawal systems. This article provides a comprehensive overview of the MetaWin hack, detailing the events, the technical vulnerabilities exploited, the response from the platform, and the broader implications for the cryptocurrency industry. It also explores lessons learned and preventive measures for enhancing security in the crypto space.

___

## The Incident: What Happened?

On November 3, 2024, MetaWin suffered a devastating exploit targeting its hot wallets on both the Ethereum and Solana blockchains. According to MetaWin’s CEO, Richard “Skel” Skelhorn, the attacker exploited a vulnerability in the platform’s “frictionless withdrawal system,” a feature designed to streamline user withdrawals for a seamless gaming experience. This system, while user-friendly, inadvertently exposed the platform’s hot wallets-digital wallets connected to the internet for rapid transactions—to malicious actors.

The hack resulted in the theft of over $4 million in Ethereum (ETH) and Solana (SOL) tokens. Blockchain investigator ZachXBT, a well-known on-chain sleuth, flagged the incident on Telegram, noting that the attacker used more than 115 wallet addresses to obscure their activities. The stolen funds were quickly transferred to cryptocurrency exchanges KuCoin and a nested service on HitBTC, complicating efforts to trace and recover the assets. Despite the severity of the breach, the hacker’s identity and motives remain unknown as of the latest reports.

MetaWin promptly suspended all withdrawals to prevent further losses, a move that temporarily disrupted services for its users. CEO Skelhorn announced that the platform was working to restore account balances and that authorities had been notified to pursue the case. In a Discord message, Skelhorn struck a defiant tone, stating, “I just emptied my piggy bank … We keep building,” implying that he personally covered some of the losses to replenish user funds. By the time of the latest updates, MetaWin had restored withdrawal capabilities for approximately 95% of its users, minimizing service interruptions for most players

___

## Technical Details: The Vulnerability Exploited

The root cause of the MetaWin hack was a flaw in the platform’s frictionless withdrawal system, which prioritized user convenience over robust security controls. Hot wallets, by design, are always connected to the internet, making them inherently more vulnerable than cold wallets (offline storage solutions). MetaWin’s system allowed for rapid withdrawals with minimal checks, enabling the attacker to execute multiple transactions in quick succession, bypassing the platform’s security measures.

According to Halborn, a cybersecurity firm specializing in blockchain, the vulnerability likely stemmed from an unspecified issue in MetaWin’s code, either on-chain or off-chain, related to its withdrawal functions. Unlike other major DeFi hacks in November 2024, which involved faulty input validation or price oracle manipulation, the MetaWin breach was unique in exploiting a user-facing feature designed to enhance the gaming experience. The lack of stringent verification steps or rate-limiting mechanisms in the withdrawal process created an open invitation for exploitation.

Blockchain investigator ZachXBT’s analysis revealed the attacker’s sophistication in laundering the stolen funds. By distributing the assets across over 115 addresses and funneling them through exchanges like KuCoin, HitBTC, Binance, and ChangeNow, the hacker employed tactics commonly used to obscure the trail of illicit funds. This level of coordination suggests that the attack was premeditated and executed by an individual or group with significant technical expertise.

___

## MetaWin’s Response and Recovery Efforts
MetaWin’s response to the hack was swift and multifaceted, reflecting a commitment to user trust and platform resilience. Key actions included:

- Halting Withdrawals: Immediately after detecting the breach, MetaWin suspended all withdrawal operations to prevent further unauthorized access to its hot wallets. This decisive action limited the scope of the attack.

- Fund Replenishment: CEO Skelhorn announced that the platform had “topped off” affected wallets, ensuring that user balances were restored. Reports suggest that Skelhorn personally contributed funds to cover the losses, a rare move that underscored his dedication to the platform’s community.

- Restoring Services: By November 4, 2024, MetaWin had restored withdrawal capabilities for 95% of its users, minimizing disruptions for the majority of its player base. The platform also committed to implementing additional security controls for new users while maintaining a seamless experience for trusted community members.

- Engaging Authorities: MetaWin involved law enforcement and other investigative entities to track the stolen funds and pursue the perpetrator. Skelhorn confirmed that the case was “in the hands of the feds,” signaling a proactive approach to seeking justice.

- Community Communication: Through Discord and other channels, Skelhorn maintained open communication with MetaWin’s user base, providing updates on the recovery process and reassuring players of the platform’s commitment to security. His pragmatic yet optimistic messaging helped mitigate panic and maintain community trust.

Additionally, an X post from November 26, 2024, revealed an unconventional effort to identify the hacker: Skelhorn offered his Bugatti as a reward for information leading to the culprit’s capture. This gesture, while unconventional, underscored the platform’s determination to hold the attacker accountable.

___

## Context: A Wave of Crypto Hacks in 2024

The MetaWin hack was not an isolated incident but part of a broader wave of cybersecurity breaches plaguing the cryptocurrency industry in 2024. According to blockchain security firm CertiK, losses from digital asset scams and hacks reached $129.6 million in October 2024 alone, with 20 major exploits reported. The year-to-date losses from 179 incidents surpassed $1.4 billion, highlighting the growing sophistication and audacity of cybercriminals.

Notable incidents in the months leading up to the MetaWin hack included:

- Radiant Capital: In mid-October 2024, this decentralized lending platform lost $58 million due to vulnerabilities in its multi-signature wallets on the BNB Chain and Arbitrum networks.

- M2 Exchange: Just days before the MetaWin breach, the M2 exchange was hacked for $13.7 million through a hot wallet exploit, mirroring the vulnerabilities seen in the MetaWin case.

- Lottie Player Phishing Attack: On October 30, 2024, a phishing campaign targeting the Lottie Player animation library compromised platforms like 1inch and TEN Finance, draining user wallets through malicious links.

- DMM Bitcoin: In May 2024, a Japanese crypto exchange lost $308 million in a massive hack, underscoring the vulnerability of platforms reliant on hot wallets.

These incidents collectively exposed systemic weaknesses in the crypto industry, particularly in hot wallet management, private key security, and smart contract auditing. The MetaWin hack, while smaller in scale than some of these breaches, served as a stark reminder of the trade-offs between user convenience and Jonas of the crypto industry, particularly in hot wallet management, private key security, and smart contract auditing. The MetaWin hack, while smaller in scale than some of these breaches, served as a stark reminder of the trade-offs between user convenience and security.

___

## Implications and Lessons Learned

The MetaWin hack underscored several critical lessons for the cryptocurrency and DeFi sectors:

- Frictionless Systems Require Robust Checks: The convenience of frictionless withdrawal systems must be balanced with stringent security measures, such as multi-signature wallets, rate-limiting mechanisms, and real-time transaction monitoring. MetaWin’s reliance on a low-friction approach without adequate safeguards created a critical vulnerability.

- Hot Wallet Vulnerabilities: Hot wallets, while essential for rapid transactions, are prime targets for hackers due to their constant internet connectivity. Platforms must limit the funds stored in hot wallets, implement multi-factor authentication, and consider hybrid solutions that combine the speed of hot wallets with the security of cold storage.

- Code Auditing is Non-Negotiable: The MetaWin hack, like many DeFi breaches in November 2024, highlighted the importance of thorough smart contract and codebase audits before deployment. Failure to conduct platform-specific audits, as seen in other cases like Polter Finance, can lead to catastrophic losses.

- Incident Response Planning: MetaWin’s swift response—halting withdrawals, replenishing funds, and engaging authorities—demonstrated the value of a well-prepared incident response plan. Platforms must have clear protocols for detecting, containing, and recovering from security breaches.

- User Education and Self-Custody: Experts recommend that users avoid keeping large amounts of funds on exchanges or gaming platforms, instead opting for self-custody solutions like multi-signature wallets. Educating users about the risks of centralized platforms can reduce the impact of future breaches.

___

## Preventive Measures for the Future

To prevent similar incidents, crypto platforms like MetaWin can adopt the following security enhancements:

- Multi-Signature Wallets: Requiring multiple approvals for withdrawals adds an extra layer of security, making it harder for attackers to drain funds.

- Real-Time Monitoring Tools: Implementing tools to monitor and classify blockchain addresses in real-time can help detect suspicious activity early, potentially preventing large-scale theft.

- Enhanced Verification Steps: Introducing delays, secondary approvals, or behavioral analysis for large withdrawals can deter attackers exploiting frictionless systems.

- Regular Security Audits: Conducting frequent, platform-specific audits of smart contracts and withdrawal protocols can identify vulnerabilities before they are exploited.

- Collaboration with Experts: Partnering with blockchain security firms like Halborn, CertiK, or PeckShield can provide insights into emerging threats and recovery strategies.

- Insurance Funds: Establishing reserve funds or insurance pools to cover potential losses can protect users and maintain trust in the event of a breach.

___

## The Bigger Picture: Security in the Crypto Industry

The MetaWin hack is a microcosm of the broader challenges facing the cryptocurrency industry as it scales. With a market capitalization of $2.25 trillion as of November 4, 2024, and over $1.7 billion lost to hacks in 179 incidents throughout the year, the stakes have never been higher. The average loss per hack in 2024 was $5.93 million, reflecting the increasing sophistication of attackers and the growing value of digital assets.

As the crypto space evolves, platforms must prioritize security over convenience, invest in cutting-edge defenses, and foster a culture of transparency and accountability. Regulatory frameworks, while still nascent, may also play a role in enforcing minimum security standards across the industry. For users, the MetaWin incident serves as a reminder to exercise caution, diversify storage solutions, and stay informed about the risks of participating in DeFi and crypto gaming platforms.

___

## Conclusion

The MetaWin hack of November 2024 was a costly but instructive lesson for the cryptocurrency industry. By exploiting a vulnerability in the platform’s frictionless withdrawal system, a hacker stole $4 million from MetaWin’s hot wallets, exposing the fragility of user-friendly designs in the face of determined attackers. MetaWin’s rapid response—suspending withdrawals, replenishing funds, and engaging authorities—mitigated the damage and preserved user trust, but the incident underscored the need for stronger security measures in the crypto space.

As the industry grapples with a relentless wave of hacks, the MetaWin breach serves as a wake-up call for platforms to rethink their approach to hot wallet management, code auditing, and user protections. By implementing robust security protocols and fostering collaboration with experts, the crypto ecosystem can better safeguard its users and build a more resilient future. For now, the MetaWin hack remains a cautionary tale of the delicate balance between convenience and security in the fast-evolving world of decentralized finance.

___

## References

- https://www.cryptopolitan.com/crypto-casino-metawin-gets-hacked-over-4-million-stolen-in-sol-and-eth/
- https://www.crypto-news-flash.com/metawin-hit-by-4m-crypto-breach-users-reassured/
- https://bravenewcoin.com/insights/crypto-casino-platform-metawin-hacked
- https://www.cryptotimes.io/2024/11/04/crypto-casino-metawin-loses-4-million-in-cyber-hack/
- https://www.halborn.com/blog/post/explained-the-metawin-hack-november-2024
- https://casinozonderregistratie.net/nieuws/metawin-casino-verliest-4-miljoen-door-hack/
- https://www.halborn.com/blog/post/month-in-review-top-defi-hacks-of-november-2024
- https://cryptorobotics.ai/news/metawin-hack-lessons-secure-crypto-platforms/
- https://coinpaper.com/5920/meta-win-suffers-4-million-hack-ceo-confirms-fund-recovery
- https://www.crypto-news-flash.com/metawin-hit-by-4m-crypto-breach-users-reassured/
- https://cointelegraph.com/news/online-casino-metawin-hacked-4-million-zack-xbt
- https://www.fxleaders.com/news/2024/11/04/daily-crypto-roundup-metawin-hack-major-token-unlocks-and-industry-developments/
- https://bravenewcoin.com/insights/crypto-casino-platform-metawin-hacked
- https://www.cryptotimes.io/2024/11/04/crypto-casino-metawin-loses-4-million-in-cyber-hack/
- https://ihodl.com/topnews/2024-11-04/hacker-steals-4m-crypto-casino-metawin/
- https://www.bankinfosecurity.com/cryptohack-roundup-m2-metawin-exploits-a-26750

