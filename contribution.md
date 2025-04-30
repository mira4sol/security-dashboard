# Contributing to Superteam Security Dashboard

Welcome to the Superteam Security Dashboard contribution guide! This document outlines how you can contribute to improving Solana ecosystem security through vulnerability documentation and feature enhancements.

## 🎯 Types of Contributions

We welcome two main types of contributions:

1. **Security Vulnerability Documentation**
   - New vulnerability write-ups
   - Updates to existing vulnerability data
   - Additional technical analysis
   
2. **Feature Enhancement Proposals**
   - UI/UX improvements
   - New dashboard analytics
   - Additional data visualization
   - Infrastructure improvements

## 📝 Contributing a New Vulnerability

### File Structure
Each vulnerability is documented in a Markdown file under `/src/data/vulnerabilities/` with the naming convention:

```
XX-protocol-YYYY.md
```
Where:
- `XX`: Sequential number (01, 02, etc.)
- `protocol`: Protocol name in lowercase
- `YYYY`: Year of exploit

### Required Frontmatter
Every vulnerability document must include this metadata:

```yaml
---
id: XX
title: Protocol Name - Brief description of exploit
protocol: Protocol Name
protocolType: Bridge|DEX|Lending|Stablecoin|AMM|Yield Farming|NFT Marketplace|Wallet|Oracle
exploitDate: YYYY-MM-DD
amountStolen: amount_in_usd
exploitType: Signature Spoofing|Price Manipulation|Account Validation|Flash Loan Attack|Private Key Compromised|Vulnerability
technique: Brief technical description of exploit method
auditor: Audit firm name or Unaudited/N/A
status: published|draft
contributors:
  - username: Your Name
    url: https://twitter.com/your_handle
---
```

### Content Structure
Organize your vulnerability write-up with these sections:

1. **Introduction**
   - Brief overview of the protocol
   - Summary of the exploit
   - Impact on users/ecosystem

2. **Protocol Overview**
   - Protocol's purpose and functionality
   - Key features and components
   - Architecture relevant to the exploit

3. **Technical Analysis**
   - Detailed exploit timeline
   - Step-by-step breakdown of the attack
   - Code snippets and transaction links
   - Root cause analysis

4. **Impact & Resolution**
   - Financial impact
   - Protocol's response
   - Fixes implemented
   - Lessons learned

5. **References**
   - Official announcements
   - Post-mortems
   - Related analyses

## 🚀 Feature Enhancement Proposals

### Proposal Format

Create a GitHub issue with the following structure:

```markdown
## Feature Proposal: [Title]

### Problem Statement
[Describe the current limitation or issue]

### Proposed Solution
[Detailed description of your proposed enhancement]

### Benefits
- [Benefit 1]
- [Benefit 2]
- ...

### Implementation Details
- Technical approach
- Required changes
- Dependencies

### Success Metrics
[How to measure the feature's impact]
```

## 📋 Contribution Process

1. **Fork & Clone**
   ```bash
   git clone https://github.com/your-username/superteam-security
   cd superteam-security
   ```

2. **Create Branch**
   ```bash
   git checkout -b feature/your-contribution
   ```

3. **Make Changes**
   - Follow the guidelines above
   - Ensure proper formatting
   - Include necessary references

4. **Test Locally**
   ```bash
   npm install
   npm run dev
   ```

5. **Submit PR**
   - Clear description of changes
   - Reference related issues
   - Include preview screenshots if applicable

## 🤝 Community Guidelines

- **Be Respectful**: Value others' contributions
- **Be Accurate**: Verify facts and sources
- **Be Clear**: Write clear, concise documentation
- **Be Responsive**: Address review feedback promptly
- **Be Responsible**: Don't share sensitive/private information

## 🌟 Recognition

Contributors will be recognized through:
- Attribution in vulnerability write-ups
- Community acknowledgments
- Project contributors list

## 💬 Getting Help

- Join our [Discord](https://discord.gg/superteam)
- Create a GitHub issue
- Reach out to maintainers

## 📜 License

All contributions will be under the project's license. By contributing, you agree to license your work under the same terms.