# Time-Locked DeFi Escrows

A decentralized escrow system for secure P2P DeFi trades (e.g., OTC swaps, NFT-for-token exchanges) built on the **Massa blockchain**.  

It features:  
- **Time-locked fund releases**  
- **Dynamic penalties** based on network congestion  
- **Transparent event logging via DeWeb**  

The **frontend**, built with Next.js, TypeScript, and Tailwind CSS, provides:  
- Template-based escrow creation  
- A chat-like dispute interface  
- A status timeline  

The system is fully autonomous, eliminating the need for third-party arbitrators.

---

## Table of Contents

- [What It Does](#what-it-does)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Testing](#testing)
- [What's Next](#whats-next)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)

---

## What It Does

The **Time-Locked DeFi Escrows** system enables secure, trustless P2P DeFi trades on the Massa blockchain.  

- Funds are locked in a smart contract, automatically released to the seller after expiry or refunded to the buyer if conditions fail.  
- Dynamic penalties, adjusted based on network congestion, incentivize quick dispute resolutions.  
- All logs and disputes are recorded transparently on **DeWeb**.  

The **Next.js frontend** provides an intuitive interface with templates, dispute chats, and status timelines.

---

## Features

- **Time-Locked Escrows**: Funds locked & auto-released using Massa’s Autonomous Smart Contracts (ASCs).  
- **Dynamic Penalties**: Penalties for disputes adjust based on network congestion (e.g., gas prices).  
- **Transparent Logging**: Escrow events and disputes logged on Massa’s DeWeb.  
- **User-Friendly UX**: Template-based escrow creation, chat-like dispute interface, and timeline tracking.  
- **Autonomous**: No arbitrators required—logic handled entirely on-chain.  

---

## Technologies Used

- **Blockchain**: Massa blockchain (Autonomous Smart Contracts)  
- **Smart Contract**: AssemblyScript (`@massalabs/as`)  
- **Frontend**:  
  - Next.js 14 (App Router)  
  - TypeScript  
  - Tailwind CSS  
  - React Context (state management)  
- **Backend**: `@massalabs/massa-web3`  
- **Testing**: Jest, ts-jest  
- **Tools**: Massa Station, Node.js, ts-node, AssemblyScript compiler  

````

---

## Setup Instructions

### Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Thycrescendo/time-locked-escrow
   cd time-locked-escrow/backend
````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Massa Wallet**

   * Install **Massa Station**
   * Create a wallet & fund it with testnet MASSA (via [Discord faucet](https://discord.gg/massa) or testnet faucet).

4. **Compile Smart Contract**

   ```bash
   npm run build
   ```

   Output: `build/TimeLockedEscrow.wasm`

5. **Deploy to Massa Testnet**

   ```bash
   npm run deploy
   ```

   Save the **contract address** from the output.

---

### Frontend Setup

1. **Navigate to Frontend Directory**

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Contract Address**
   Update `frontend/lib/massa.ts` with the deployed contract address.

4. **Run Development Server**

   ```bash
   npm run dev
   ```

   Open: [http://localhost:3000](http://localhost:3000)

---

## Usage

* **Connect Wallet**: Click “Connect Massa Wallet” on the homepage (`/`).
* **Create Escrow**: Go to `/escrow/create` → Choose a template → Enter trade details → Submit.
* **View Escrow**: Navigate to `/escrow/[id]` → Track status, timeline, and disputes.
* **Manage Disputes**: Use chat-like interface on escrow detail page.
* **Interact via Scripts**:

  ```bash
  npm run interact
  ```

---

## Testing

* **Backend Tests**

  ```bash
  cd backend
  npm run test
  ```
* **Frontend Tests**: Mocked data to verify wallet, forms, timelines.
* **End-to-End**: Deploy to testnet → Create escrow → Initiate dispute → Verify auto-release.

---

## What's Next

* 🚀 **Mainnet Deployment**
* ⚖️ **Enhanced Disputes** (partial fund splits, community voting)
* ⛽ **Real-Time Penalties** (live gas price updates)
* 📱 **Mobile Support** (Massa mobile wallet integration)
* 📊 **Analytics Dashboard** (escrow statistics from DeWeb)
* 🔌 **API Access** (third-party integrations via [xAI API](https://x.ai/api))

---

## Contributing

Contributions welcome!

1. Fork the repo: [time-locked-escrow](https://github.com/Thycrescendo/time-locked-escrow)
2. Create a branch:

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes:

   ```bash
   git commit -m "Add your feature"
   ```
4. Push branch:

   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request 🚀

See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

---

## Resources

* [Massa Documentation](https://docs.massa.net/)
* [Massa Web3 SDK](https://github.com/massalabs/massa-web3)
* [AssemblyScript](https://www.assemblyscript.org/)
* [Massa Station](https://massa.net/station)
* [Massa Discord](https://discord.gg/massa) (testnet faucet & support)
* [xAI API](https://x.ai/api)

For feedback/questions, open an [issue](https://github.com/Thycrescendo/time-locked-escrow/issues) or tweet **[@MassaLabs](https://twitter.com/MassaLabs)**.

