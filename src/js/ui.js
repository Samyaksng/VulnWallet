import { walletState } from './walletState.js';


export function updateUI() {
  const walletInfo = document.getElementById('wallet-info');
  const createBtn = document.getElementById('create-wallet-btn');
  const importBtn = document.getElementById('import-wallet-btn');
  const balanceEth = document.getElementById('balance-eth');
  const balanceUsd = document.getElementById('balance-usd');
  const walletAddress = document.getElementById('wallet-address');
  const txList = document.getElementById('tx-list');
  const networkSelect = document.getElementById('network-select');

  if (walletState.address) {
    walletInfo.style.display = 'block';
    createBtn.style.display = 'none';
    importBtn.style.display = 'none';
    
    balanceEth.textContent = walletState.balance.toFixed(4);
    balanceUsd.textContent = (walletState.balance * 2000).toFixed(2); 
    walletAddress.textContent = walletState.address;
    networkSelect.value = walletState.network;

  
    updateTransactionList(txList);
  } else {
    walletInfo.style.display = 'none';
    createBtn.style.display = '';
    importBtn.style.display = '';
  }
}

function updateTransactionList(txList) {
  txList.innerHTML = '';
  walletState.transactions.slice(0, 5).forEach(tx => {
    const txEl = document.createElement('div');
    txEl.className = 'tx-item';
    txEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <span style="color:#b6b8d6;">${tx.status === 'pending' ? '⏳' : '✓'} ${tx.amount} ETH</span>
        <span style="font-size:0.9em;color:#b6b8d6;">${new Date(tx.timestamp).toLocaleTimeString()}</span>
      </div>
      <div style="font-size:0.9em;color:#b6b8d6;">To: ${tx.to.slice(0, 6)}...${tx.to.slice(-4)}</div>
      ${tx.memo ? `<div style="font-size:0.9em;color:#b6b8d6;margin-top:4px;">${tx.memo}</div>` : ''}
    `;
    txList.appendChild(txEl);
  });
}

export function toggleForm(formId, hideOtherFormId = null) {
  const form = document.getElementById(formId);
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
  
  if (hideOtherFormId) {
    document.getElementById(hideOtherFormId).style.display = 'none';
  }
}


export function updateDevStatus(message) {
  const statusEl = document.getElementById('dev-status');
  if (statusEl) {
    statusEl.textContent = message;
  }
}


export function toggleDevPanel() {
  const devContent = document.getElementById('dev-content');
  const toggleBtn = document.getElementById('toggle-dev');
  
  devContent.style.display = devContent.style.display === 'none' ? 'block' : 'none';
  toggleBtn.textContent = devContent.style.display === 'none' ? 'Show' : 'Hide';
} 