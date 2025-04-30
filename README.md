# Superteam Security Dashboard

A comprehensive security dashboard for documenting and analyzing vulnerabilities in the Solana ecosystem. The dashboard provides insights into past exploits, technical analysis, and security best practices.

![Dashboard Preview](https://res.cloudinary.com/dizyob2oz/image/upload/v1745697154/dnodu2quzbvrcv89m76h.png)

## Features

- 📊 Interactive dashboard with vulnerability statistics
- 📝 Detailed vulnerability write-ups and analysis
- 📈 Analytics and trend visualization
- 🔍 Search and filter capabilities
- 🎓 Educational resources and security guides
- 🤝 Community-driven content

## Architecture Decision

### Why Markdown with Frontmatter over a Traditional Server and Database?

After initially starting this project with an Express server, Drizzle ORM, and a Postgres database, I decided to pivot to a Markdown-based content system for several reasons:

1. **Simplicity & Maintainability**
   - No database setup or maintenance required
   - No server infrastructure to manage
   - Single source of truth in version control
   - Easy backup and version tracking through Git

2. **Next.js Server API Synergy** 
   Next.js’s server components and API routes allow us to efficiently load and serve Markdown content on-demand, without the need for a separate backend server. This reduces operational complexity and leverages the power of Next.js’s built-in serverless infrastructure.

3. **Developer Experience**
   - Write content in familiar Markdown syntax
   - Edit content directly in code editor
   - Preview changes locally instantly
   - Use existing Git workflow for contributions

4. **Performance & Cost**
   - Static file generation enables faster page loads
   - Free hosting on platforms like GitHub Pages or Vercel
   - No ongoing database hosting costs
   - Reduced infrastructure complexity

5. **Content Management**
   - Structured metadata through frontmatter
   - Git-based content workflow
   - Easy collaboration through pull requests
   - Built-in version control and change tracking

6. **Security**
   - No database vulnerabilities to manage
   - No server-side code to secure
   - Content validated through pull requests
   - Immutable deployment artifacts

---

## API Usage

You can fetch vulnerability data from the following API endpoints. All endpoints return JSON.

### 1. Get All Vulnerabilities

**Endpoint:**  
`GET /api/vulnerabilities`

**Example:**
```bash
curl https://superteam-security.vercel.app/api/vulnerabilities
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Example Vulnerability",
    "protocol": "Example Protocol",
    "...": "..."
  },
  ...
]
```

---

### 2. Get Vulnerability Statistics

**Endpoint:**  
`GET /api/stats`

**Example:**
```bash
curl https://superteam-security.vercel.app/api/stats
```

**Response:**
```json
{
  "totalAmountStolen": 123456,
  "totalExploits": 10,
  "exploitTypeDistribution": { "reentrancy": 3, "oracle": 2 },
  "monthlyTrend": { "2023-1": 10000 },
  "auditedProtocolsPercent": 70
}
```

---

### 3. Get a Single Vulnerability by ID

**Endpoint:**  
`GET /api/vulnerabilities/[id]`

Replace `[id]` with the numeric ID of the vulnerability.

**Example:**
```bash
curl https://superteam-security.vercel.app/api/vulnerabilities/3
```

**Response:**
```json
{
  "id": 3,
  "title": "Mango Markets Exploit",
  "protocol": "Mango",
  "...": "..."
}
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mira4sol/security-dashboard
cd security-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application should now be running at `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](./contribution.md) for details.

### Adding a New Vulnerability

1. Create a new markdown file in `/src/data/vulnerabilities/` following the naming convention:
```
XX-protocol-YYYY.md
```

2. Include the required frontmatter:
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

3. Structure your content using the following sections:
- Introduction
- Protocol Overview
- Technical Analysis
- Impact & Resolution
- References

### Feature Enhancement Proposals

Create a GitHub issue using this template:

```markdown
## Feature Proposal: [Title]

### Problem Statement
[Describe the current limitation or issue]

### Proposed Solution
[Detailed description of your proposed enhancement]

### Benefits
- [Benefit 1]
- [Benefit 2]

### Implementation Details
- Technical approach
- Required changes
- Dependencies

### Success Metrics
[How to measure the feature's impact]
```

## Project Structure

```
superteam-security/
├── src/
│   ├── components/        # React components
│   ├── data/
│   │   └── vulnerabilities/  # Vulnerability markdown files
│   ├── lib/              # Utilities and helpers
│   ├── pages/            # Page components
│   └── styles/           # CSS and styling
├── public/               # Static assets
├── contribution.md       # Contribution guidelines
└── package.json         # Project dependencies
```

## Tech Stack

- Next 15
- TypeScript
- Tailwind CSS
- Tanstack Query
- Radix UI Components
- Chart.js
- Markdown Processing

## Community

- Join our [Discord](https://discord.gg/superteam)
- Follow us on [Twitter](https://twitter.com/superteam)
- Create [GitHub Issues](https://github.com/mira4sol/security-dashboard/issues)

## License

This project is licensed under the [MIT License](LICENSE).