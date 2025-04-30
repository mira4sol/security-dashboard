---
id: 13
title: Solana Web3.js Supply Chain Attack - A Detailed Analysis
protocol: Solana
protocolType: Wallet
exploitDate: 2024-11-03
amountStolen: 190_000 
exploitType: Other
technique: Spear-phishing campaign that compromised a developer's npm credentials.
auditor: N/A
status: published
contributors:
  - username: Mira
    url: https://x.com/4k_mira
---

On December 3, 2024, the Solana blockchain ecosystem faced a significant security breach involving its widely used `@solana/web3.js` JavaScript library. This incident, identified as a sophisticated supply chain attack, compromised versions 1.95.6 and 1.95.7 of the library, exposing private keys and resulting in approximately $160,000 to $190,000 in stolen cryptocurrency assets. The attack highlighted vulnerabilities in open-source software supply chains and underscored the need for robust security practices in blockchain development. This article provides a comprehensive overview of the attack, its impact, the response from the Solana community, and lessons learned, along with actionable recommendations for developers.

___

## Background on @solana/web3.js
The `@solana/web3.js` library is a critical component of the Solana ecosystem, enabling developers to build decentralized applications (dApps) that interact with the Solana blockchain. With over 350,000 to 450,000 weekly downloads on the npm registry, it is a cornerstone for developers creating Node.js, web, and React Native applications. The library facilitates communication between dApps and Solana accounts or programs, making it a high-value target for attackers seeking to exploit its widespread use.

___

## The Attack: How It Happened

###Timeline and Attack Window

The supply chain attack occurred on December 2, 2024, with malicious versions of the @solana/web3.js library available for download between 3:20 PM UTC and 8:25 PM UTC—a window of approximately five hours. During this period, attackers published unauthorized versions 1.95.6 and 1.95.7 to the npm registry, embedding malicious code designed to steal private keys.

### Method of Compromise

The attack was facilitated through a spear-phishing campaign targeting a developer with publish-access privileges to the @solana/web3.js npm package. According to Anza, a Solana-focused research and development firm, the attacker sent multiple emails inviting the developer to collaborate on a private package, ultimately stealing their npm credentials and two-factor authentication (2FA) code. This social engineering tactic allowed the attacker to gain control of the npm publishing account and upload the malicious versions.

### Malicious Code

The compromised versions contained a backdoor function named `addToQueue`, which exfiltrated private keys to a hardcoded Solana address: `FnvLGtucz4E1ppJHRTev6Qv4X7g8Pw6WPStHCcbAKbfx`. Security researcher Christophe Tafani-Dereeper from Datadog noted that this function was strategically injected into legitimate code paths that accessed private keys, using seemingly legitimate CloudFlare headers to mask its malicious activity. The associated command-and-control (C2) server, `sol-rpc[.]xyz`, was registered on November 22, 2024, via NameSilo and hosted behind CloudFlare, though it was taken offline shortly after the attack was detected.
The malicious code was designed to capture and transmit private keys, enabling attackers to drain funds from vulnerable dApps, particularly those handling private keys directly, such as backend bots. The attack’s obfuscation techniques made it difficult to detect without thorough code inspection.


### CVE Assignment

The incident was formally assigned the CVE identifier CVE-2024-54134 with a CVSS score of 8.3 (High), reflecting its severity due to the potential for significant financial loss and compromise of sensitive cryptographic material.

___

## Impact of the Attack

### Financial Losses

Estimates of the financial damage vary slightly, with sources reporting losses between $160,000 and $190,000 in stolen assets, including SOL tokens and other cryptocurrencies such as Irish Pepe, Star Atlas, Jupiter, USD Coin, Santa Hat, Pepe on Fire, Bonk, catwifhat, and Genopets Ki tokens. The attacker’s wallet, tracked via Solscan, accumulated approximately 674.86 SOL during the incident.

### Affected Systems

The attack primarily impacted projects that:
- Directly handled private keys (e.g., backend bots or server-side applications).
- Updated to versions 1.95.6 or 1.95.7 during the five-hour attack window.

Non-custodial wallets, such as Phantom, Solflare, Backpack, Coinbase, Exodus, and Kamino, were unaffected because they do not expose private keys during transactions. Major Solana dApps, including Drift and Helium, also confirmed they were not impacted, as they either did not use the compromised versions or had not updated during the attack window.

### Scope of Exposure

Given the library’s high download rate, the potential exposure was significant. However, the short attack window and rapid response from the Solana community limited the number of affected projects. Developers using automated dependency updates or those who pinned their dependencies to the latest version were at higher risk if they pulled the malicious versions during the attack window.

___

## Response and Mitigation

###Immediate Actions

The Solana community, led by Anza and other key stakeholders, responded rapidly to mitigate the supply chain attack on versions 1.95.6 and 1.95.7 of the @solana/web3.js library, which occurred on December 2, 2024. The following actions were taken within hours of detection to contain the breach and protect the ecosystem:

- Detection and Public Alert:
  - Anza engineer [@trentdotsol](https://x.com/trentdotsol) was among the first to identify the compromise, posting a public alert on X at 22:05 CET on December 3, 2024. The post warned developers that versions 1.95.6 and 1.95.7 contained a "secret stealer" leaking private keys and urged immediate upgrades to version 1.95.8 (or use of unaffected version 1.95.5). The post also recommended blacklisting the attacker’s Solana address: `FnvLGtucz4E1ppJHRTev6Qv4X7g8Pw6WPStHCcbAKbfx`. This rapid notification was critical in raising awareness across the ecosystem.
  - The detection was triggered when a core contributor received a report from an ecosystem team that had deployed a malicious version and noticed unauthorized asset transfers, prompting an immediate investigation by Anza.
- Deprecation and Removal of Malicious Versions:
  - The compromised versions (1.95.6 and 1.95.7) were deprecated on the npm registry at approximately 8:52 PM UTC on December 2, 2024, to prevent package managers (e.g., npm, pnpm, Yarn) from installing them. By 12:22 AM UTC on December 4, 2024, both versions were completely removed from the npm registry, closing the attack window.
  - Version 1.95.5 was temporarily restored as the "latest" version on npm to ensure package managers defaulted to a safe version while the patched version was prepared.
- Revocation of Compromised Credentials:
  - The attacker’s access to the npm publishing account was revoked immediately after the breach was identified, preventing further unauthorized publications. This was a critical step to secure the @solana/web3.js package and restore trust in the npm registry.
- Release of Patched Version:
  - A clean version, 1.95.8, was published to the npm registry, removing the malicious addToQueue backdoor function. Developers were urged to upgrade to this version immediately to eliminate the risk of private key exposure. Anza and other Solana maintainers communicated this through official channels, including X and their blog.
- Developer Guidance and Key Rotation:
  - Anza issued clear instructions for developers to audit their package-lock.json or yarn.lock files to check for usage of versions 1.95.6 or 1.95.7. They recommended either upgrading to 1.95.8 or rolling back to a safe version like 1.95.5.
  - Developers were advised to rotate any potentially compromised authority keys, including multisigs, program authorities, and server keypairs, as a precautionary measure. This was particularly critical for projects handling private keys directly, such as backend bots.
- Community and Ecosystem Communication:
  - Anza posted an official statement on X at 00:12 CET on December 4, 2024, clarifying that the attack was isolated to the @solana/web3.js library and did not affect the Solana protocol or non-custodial wallets. This helped maintain user trust and prevent panic.
  - Major Solana ecosystem players, including Phantom, Solflare, Drift, Backpack, Coinbase, Exodus, and Kamino, confirmed they were unaffected, as they either did not use the compromised versions or had not updated during the attack window. These statements reassured users and limited the scope of perceived damage.
- Engagement with Security Researchers:
  - The Solana team collaborated with security researchers, such as Christophe Tafani-Dereeper from Datadog, who provided technical analysis of the backdoor’s addToQueue function and its use of CloudFlare headers for obfuscation. This helped developers understand the attack’s mechanics and verify the safety of version 1.95.8.
  - Instructions for reporting vulnerabilities were shared via the @solana/web3.js GitHub repository’s SECURITY.md file, encouraging responsible disclosure through secure channels.

___

## References

- [@trentdotsol](https://x.com/trentdotsol). (2024, December 3). X post warning about compromised `@solana/web3.js` versions 1.95.6 and 1.95.7. 

- [@anza_xyz](https://x.com/anza_xyz). (2024, December 4). X post announcing the compromise of `@solana/web3.js` publish-access account.

- Socket.dev. (2024, December 3). "Supply Chain Attack Detected in Solana’s web3.js Library."

- SolanaFloor. (2024, December 4). "Hacker Steals $160k in Solana Supply Chain Attack."

- TheSecMaster. (2024, December 4). "Solana Web3.js Hack: $160K Lost in Supply Chain Attack."

- Cyfrin.io. (2024, December 4). "Security Advisory: `@solana/web3.js` v1.95.6 & v1.95.7 are compromised."

- Reddit r/solana. (2024, December 4). "Anza - solana/web3.js - This Issue Should Not Affect Non-custodial Wallets."

- Anza. (2024, December 5). "web3.js Exploit: Root Cause Analysis."


- Cointelegraph. (2024). ["Solana’s Web3.js Library Hit by Supply Chain Attack, $190K Stolen."](https://cointelegraph.com/news/solana-web3-js-supply-chain-attack-190k-stolen)

- Anza. (2024). ["Security Incident Report:` @solana/web3.js` (Dec. 2, 2024)."](https://anza.xyz/blog/security-incident-report-solana-web3-js-dec-2-2024)


