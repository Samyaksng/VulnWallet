export const walletState = {
  address: null,
  balance: 0,
  network: 'ethereum',
  transactions: [],
  seedPhrase: null
};

export function initWallet() {
  const savedState = localStorage.getItem('walletState');
  if (savedState) {
    Object.assign(walletState, JSON.parse(savedState));
  }
}

export function saveWalletState() {
  localStorage.setItem('walletState', JSON.stringify(walletState));
}

export function updateWalletState(newState) {
  Object.assign(walletState, newState);
  saveWalletState();
} 