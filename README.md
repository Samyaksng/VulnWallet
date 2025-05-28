# VulnWallet - Deliberately vulnerable cryptocurrency wallet

![Banner](/icons/banner.png)


## 🔐 Introduction

**VulnWallet** is a deliberately insecure cryptocurrency wallet implemented as a browser extension. It is designed specifically for **educational and demonstration** purposes to highlight common security vulnerabilities in cryptocurrency wallets and browser extensions.

> ⚠️ **WARNING**: This wallet is intentionally vulnerable. Never use it with real cryptocurrency or on production systems.


---

## 🧾 Overview

VulnWallet simulates the core features of a cryptocurrency wallet while embedding intentional vulnerabilities. It aims to educate:

* Developers on secure wallet implementation
* Security researchers on common attack vectors
* Students learning about crypto and browser extension security

---

## 🎯 Features

### 🔐 Wallet Management

* Create new wallets with generated seed phrases
* Import wallets via seed phrase
* View public address and current ETH balance
* Network toggle (Ethereum-based)

### 💸 Transaction Operations

* Send ETH with optional memos
* Receive ETH via public address and QR code
* View transaction history with memo annotations

### 🖼️ UI Components

* Responsive, mobile-friendly design
* USD conversion for ETH balance
* Transaction feed
* Quick-action buttons
* Developer panel for demos

---

## 🐞 Vulnerability Showcase

Each category below is **intentionally implemented** to mimic real-world security flaws found in poorly secured wallets:

### 1. **Insecure Data Storage**

* Seed phrases and private keys stored in plaintext
* No encryption or secure key management
* Reliance on `localStorage` and `sessionStorage`

### 2. **Cross-Site Scripting (XSS)**

* Memo fields do not sanitize input
* Script injection possible in transaction logs

### 3. **Data Exfiltration**

* Simulated outbound connections to untrusted endpoints
* Potential for clipboard and keystroke exfiltration
* Covert WebSocket transmissions

### 4. **Man-in-the-Middle (MitM) Attacks**

* HTTP API calls without HTTPS/TLS
* Vulnerable price fetch logic allows fake exchange rates
* Susceptible to DNS and proxy-based tampering

### 5. **Excessive Permissions Abuse**

* Clipboard read/write without user interaction
* Access to `tabs`, `cookies`, and `history`
* Demonstrates overpermissioned `manifest.json`

---

## 🛠️ Installation

### 📥 Clone the Repository

```bash
git clone https://github.com/Samyaksng/Vulnwallet.git
cd VulnWallet
```

### 🌐 Load in Chrome

1. Open Chrome and navigate to `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the `src/` directory

---

## 🚀 Usage Guide

### 1. Creating a Wallet

* Click **Create Wallet**
* A seed phrase is generated and displayed
* Wallet initializes with 1.0 ETH for testing

### 2. Importing a Wallet

* Click **Import Wallet**
* Enter a valid seed phrase
* Your wallet will be restored

### 3. Sending ETH

* Click **Send**
* Enter destination address, amount, and memo (optional)
* Click **Confirm**

### 4. Receiving ETH

* Click **Receive**
* View wallet address and shareable QR code

---

## 🧪 Developer Tools

Use the **Developer Panel** for security demonstrations:

| Demo Feature             | Description                                 |
| ------------------------ | ------------------------------------------- |
| `Exfiltrate Seed`        | Simulates data exfiltration                 |
| `Show Seed Phrase`       | Reveals plaintext seed                      |
| `Demo Permissions Abuse` | Shows abuse of extension permissions        |
| `Demo MitM Attack`       | Demonstrates insecure API use               |
| `Demo XSS`               | Tests script injection vulnerability        |
| `Demo Exfiltration`      | Sends sensitive data to simulated endpoints |
| `Demo Insecure Storage`  | Reveals sensitive data stored in plain form |

---

## 🧱 Technical Architecture

### 🧩 Key Components

#### Wallet State Management

* Implemented using plain JS and `localStorage`
* Tracks address, balance, and transactions

#### UI

* Built using vanilla JS, HTML, and CSS
* Responsive and mobile-friendly

#### Vulnerability Modules

* All demos housed in `popup.js` and accessible from UI
* Simulated vulnerabilities follow real-world patterns

---

## 🔒 Security Considerations

VulnWallet is a **controlled learning environment**. Use it only on **isolated systems**.

| Risk Area                  | Detail                                       |
| -------------------------- | -------------------------------------------- |
| **Data Exposure**          | No encryption; plaintext seed/private keys   |
| **Permission Overreach**   | Excessive access to tabs, cookies, clipboard |
| **Insecure Communication** | API requests are non-TLS                     |
| **Injected Scripts**       | XSS vulnerabilities are active               |

---

## 🤝 Contributing

We welcome contributions! Please follow the steps below:

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes

   ```bash
   git commit -m "Add YourFeatureName"
   ```
4. Push to GitHub

   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a Pull Request and describe your changes

---


## ⚠️ Disclaimer

This project is provided **as-is** and for **educational use only**.
The authors are **not responsible** for any damage, misuse, or unauthorized deployment of this software.

> **NEVER** use VulnWallet with real cryptocurrency or store any sensitive data.

