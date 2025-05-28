import { initWallet } from './walletState.js';
import { updateUI } from './ui.js';
import { initEventHandlers } from './eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
  initWallet();
  

  updateUI();
  

  initEventHandlers();
}); 