# Filecoin-Bim

Filecoin-Bim is a decentralized application built on the Filecoin Onchain Cloud Alpha Cohort framework, reimagining decentralized storage and on-chain services. It integrates FilecoinWarmStorageService for warm data storage, Filecoin Pay for secure FIL/ERC-20 payments, FilCDN for fast content delivery, and the Synapse SDK for developer-friendly interactions. With a modern UI powered by Next.js, Tailwind CSS, and TypeScript, it offers trading options, wallet management, token transfers, and real-time market charts.

---

## What It Does

Filecoin-Bim empowers users and developers with:
- **Trading Options**: Buy and sell call/put options with FIL-based premiums.
- **Wallet Management**: Connect MetaMask to manage FIL balances and portfolios.
- **Token Transfers**: Seamlessly transfer FIL using Filecoin Pay.
- **Warm Storage**: Store and retrieve data via FilecoinWarmStorageService with Proof of Data Possession (PDP) verification.
- **Market Insights**: Visualize FIL price trends with interactive charts.
- **Content Delivery**: Leverage FilCDN for optimized data retrieval (simulated).

This app transforms Filecoin from a cold-archive storage solution into a composable on-chain cloud platform, enabling reusable services with the ease of smart contract deployment.

---

## The Problem It Solves

Centralized cloud storage platforms often compromise data sovereignty, scalability, and cost-efficiency. Filecoin-Bim addresses these by:
- Providing a decentralized alternative with economic incentives for reliable data storage.
- Offering warm storage and payment rails to bridge the gap between cold archiving and active cloud services.
- Simplifying access for Web3 developers through standardized SLAs, on-chain payments, and CDN interfaces.
- Ensuring data accessibility and security in a peer-to-peer network, solving reliability issues in traditional systems.

---

## Challenges I Ran Into

Building Filecoin-Bim presented several technical hurdles:
- **Contract Integration**: Simulating FilecoinWarmStorageService, Filecoin Pay, and FilCDN without deployed contracts required robust mocking and error handling.
- **Chain Compatibility**: Aligning the app with Filecoin Mainnet (Chain ID 314) and ensuring MetaMask compatibility demanded careful network switching logic.
- **Performance Optimization**: Rendering real-time charts with Chart.js in a Next.js SSR environment required client-side hydration adjustments.
- **UI-Technical Balance**: Maintaining the teal-to-purple gradient design while ensuring responsive performance under Tailwind CSS posed iterative design challenges.
- **SDK Placeholder**: Integrating the Synapse SDK as a placeholder highlighted the need for future API refinement.

---

## Technologies I Used

- **Next.js**: A React framework for server-side rendering and static site generation, ensuring fast load times and SEO optimization.
- **TypeScript**: Added type safety and scalability to the codebase, enhancing developer experience.
- **Tailwind CSS**: Provided a utility-first approach for a responsive, dark-themed UI with teal-to-purple gradients.
- **Ethers.js**: Facilitated Ethereum-compatible smart contract interactions with Filecoin’s network.
- **Chart.js**: Enabled dynamic, real-time FIL price visualizations within a canvas element.
- **Filecoin Onchain Cloud**: Utilized FilecoinWarmStorageService, Filecoin Pay, FilCDN, and Synapse SDK for decentralized storage and payment features.

---

## How We Built It

1. **Project Setup**:
   - Initialized a Next.js project with TypeScript using `npx create-next-app@latest --ts filecoin-bim`.
   - Installed dependencies: `npm install ethers chart.js` and Tailwind CSS with `npm install -D tailwindcss postcss autoprefixer`.

2. **UI Development**:
   - Designed a dark-themed interface with Tailwind CSS, incorporating gradients and a sidebar navigation.
   - Integrated Chart.js for market charts, ensuring client-side rendering with `"use client"` directives.

3. **Blockchain Integration**:
   - Configured Ethers.js to connect to Filecoin Mainnet (Chain ID 314) via MetaMask.
   - Simulated FilecoinWarmStorageService for data storage/retrieval and Filecoin Pay for transactions using placeholder contract ABIs.
   - Added network switching logic in `ethersSetup.ts` to handle Filecoin chain compatibility.

4. **Feature Implementation**:
   - Built trading, transfer, and wallet features, adapting from the previous "citrea-vim" codebase.
   - Added a "Storage" section for warm data management, leveraging simulated contract calls.
   - Used Synapse SDK placeholders for future API integration.

5. **Testing and Optimization**:
   - Tested with MetaMask on localhost, ensuring wallet connectivity and balance updates.
   - Optimized performance by minimizing re-renders and caching simulated data.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Thycrescendo/Filecoin-Bim.git
   cd filecoin-bim
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npm install ethers chart.js
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS**:
   - Update `tailwind.config.js`:
     ```js
     /** @type {import('tailwindcss').Config} */
     module.exports = {
       content: ["./src/**/*.{js,ts,jsx,tsx}"],
       theme: { extend: {} },
       plugins: [],
     };
     ```
   - Add to `src/app/globals.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.
   - Connect MetaMask to Filecoin Mainnet or a testnet.

---

## Usage

- **Connect Wallet**: Click "Connect Wallet" to link MetaMask and switch to Filecoin network.
- **Navigate**: Use the sidebar to access Home (options), Trade (charts), Transfer (FIL), Storage (data), and Settings.
- **Trade Options**: Select an option, set quantity, and confirm trade using Filecoin Pay.
- **Store/Retrieve Data**: Input data in the Storage section to simulate warm storage and retrieval.
- **Monitor Market**: View real-time FIL price trends in the Trade section.

---

## What We Learned

- **Decentralized Architecture**: Gained expertise in Filecoin’s on-chain cloud model, balancing decentralization with usability.
- **Web3 Integration**: Mastered Ethers.js for cross-chain interactions and simulated contract workflows.
- **UI Performance**: Learned to optimize Next.js SSR with client-side components for charts and wallets.
- **Design Adaptability**: Refined Tailwind CSS usage to align with Filecoin’s branding while maintaining performance.
- **Future Potential**: Recognized the value of Synapse SDK for scalable developer tools.

---

## What's Next for Filecoin-Bim

- **Real Contract Deployment**: Deploy FilecoinWarmStorageService and Filecoin Pay contracts on Filecoin testnet/mainnet.
- **Synapse SDK Integration**: Fully implement the Synapse SDK for robust API support.
- **Advanced Analytics**: Add predictive market tools and storage usage metrics.
- **FilCDN Expansion**: Enhance CDN capabilities for global data delivery optimization.
- **Community Features**: Introduce governance voting and ecosystem partnerships.
- **Security Audits**: Conduct thorough testing to ensure contract and UI security.

---

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. Ensure tests pass and adhere to TypeScript standards.

---


# Filecoin-Bim Roadmap: A Journey to Decentralized Excellence

Welcome to the visionary roadmap for **Filecoin-Bim**, a decentralized application redefining storage and on-chain services. This roadmap spans four waves, each marked by innovative milestones, stunning design, and technical prowess. Below, we outline the journey with beautiful illustrations and plans, guiding us from the current state to a fully realized ecosystem.

---

## Roadmap Overview

```
🌌═══════════════════════ Filecoin-Bim Roadmap ═══════════════════════🌌
│                                                                    │
│  🌊 Wave 1: Foundation     🌊 Wave 2: Expansion │
│  🌊 Wave 3: Optimization   🌊 Wave 4: Ascension  │
│                                                                    │
╰════════════════════════════════════════════════════════════════════╯
```

- **Theme**: A cosmic journey through a decentralized galaxy, with each wave represented by a vibrant nebula (teal-to-purple gradients) and orbiting planets symbolizing milestones.
- **Design**: Elegant typography with glowing accents, interconnected nodes, and a futuristic timeline bar.

---

## Wave 1: Foundation 
**Status**: Current Wave  
**Theme**: Laying the Galactic Core  
**Color**: Teal Nebula (#008080)

### Illustration
```
🌍 [Foundation Nebula] 🌌
   ✨ [Milestone 1] ---- ✨ [Milestone 2] ---- ✨ [Milestone 3]
   |                   |                   |
   v                   v                   v
[UI Launch]      [Contract Sims]     [Market Charts]
```

- **Visual**: A teal nebula with a glowing core, surrounded by three orbiting planets representing milestones. Each planet pulses with a soft light, connected by shimmering orbital paths.

### Plans
- **UI Launch**: Deploy the initial Next.js app with Tailwind CSS, featuring a dark-themed, gradient-rich interface for trading, wallet, and storage.
- **Contract Simulations**: Implement simulated FilecoinWarmStorageService, Filecoin Pay, and FilCDN contracts using Ethers.js, with placeholder ABIs.
- **Market Charts**: Integrate Chart.js for real-time FIL price visualizations, ensuring client-side hydration in Next.js.

### Goals
- Test wallet connectivity with MetaMask on Filecoin Mainnet.

---

## Wave 2: Expansion (January 2026 - June 2026)
**Theme**: Building the Stellar Network  
**Color**: Teal-Purple Gradient (#008080 to #800080)

### Illustration
```
🌠 [Expansion Nebula] 🌌
   ✨ [Milestone 1] ---- ✨ [Milestone 2] ---- ✨ [Milestone 3]
   |                   |                   |
   v                   v                   v
[Real Contracts]  [Synapse SDK]     [FilCDN Live]
```

- **Visual**: A sprawling nebula with a gradient shift from teal to purple, featuring a network of stars and planets. Milestones are depicted as luminous stars connected by a web of light, symbolizing expansion.

### Plans
- **Real Contracts**: Deploy FilecoinWarmStorageService and Filecoin Pay on Filecoin testnet (e.g., Calibration Net), replacing simulations.
- **Synapse SDK Integration**: Fully implement the Synapse SDK for a robust JavaScript/TypeScript interface, enabling developer access.
- **FilCDN Live**: Launch a basic FilCDN implementation for optimized data retrieval, partnering with Filecoin nodes.

### Goals
- Achieve testnet deployment by March 2026.
- Onboard 50 developers to the SDK by June 2026.

---

## Wave 3: Optimization
**Theme**: Refining the Cosmic Orbit  
**Color**: Deep Purple Nebula (#800080)

### Illustration
```
🌌 [Optimization Nebula] 🌠
   ✨ [Milestone 1] ---- ✨ [Milestone 2] ---- ✨ [Milestone 3]
   |                   |                   |
   v                   v                   v
[Analytics]       [Security Audit]   [Global CDN]
```

- **Visual**: A deep purple nebula with orbiting rings, each ring representing a milestone. The rings are adorned with intricate patterns, symbolizing refined processes, and glow with a subtle aura.

### Plans
- **Analytics**: Add advanced market trend predictions and storage usage metrics using machine learning integrations.
- **Security Audit**: Conduct a third-party audit of smart contracts and UI to ensure robustness against attacks.
- **Global CDN**: Expand FilCDN to a global network, optimizing retrieval speeds with Filecoin node partnerships.

### Goals
- Launch analytics dashboard by September 2025.
- Achieve 99.9% uptime for FilCDN by October 2025.

---

## Wave 4: Ascension 
**Theme**: Galactic Dominion  
**Color**: Teal-Purple Fusion (#4A90E2 to #D81B60)

### Illustration
```
🌠 [Ascension Nebula] 🌌
   ✨ [Milestone 1] ---- ✨ [Milestone 2] ---- ✨ [Milestone 3]
   |                   |                   |
   v                   v                   v
[Governance]      [Ecosystem]        [Mainnet]
```

- **Visual**: A majestic nebula blending teal and purple, with a central supernova representing the final milestone. Surrounding planets are interconnected by a golden lattice, symbolizing a thriving ecosystem.

### Plans
- **Governance**: Introduce community voting for feature prioritization and resource allocation via on-chain DAOs.
- **Ecosystem**: Partner with Filecoin projects and Web3 communities to expand use cases (e.g., compute-over-data).
- **Mainnet Launch**: Fully deploy Filecoin-Bim on Filecoin Mainnet, scaling to support global users.

### Goals
- Establish a DAO with 1,000 members by March 2027.
- Achieve 10,000 active users by June 2027.

---

---

## Get Involved

- **Contribute**: Fork [https://github.com/Thycrescendo/Filecoin-Bim](https://github.com/Thycrescendo/Filecoin-Bim) and submit PRs.
---

### Inspiration
This roadmap is inspired by the vastness of the Filecoin network, mirroring its decentralized, peer-to-peer essence with a celestial narrative. Each wave builds toward a future where Filecoin-Bim ascends as a cornerstone of the Web3 cloud ecosystem.
