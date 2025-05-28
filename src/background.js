
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('VulnWallet extension installed');

    chrome.storage.local.set({
      walletAddress: '',
      transactions: [],
      isInitialized: false
    });
  }
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background script received message:', request);
  
 
  switch (request.type) {
    case 'GET_WALLET_INFO':
      chrome.storage.local.get(['walletAddress', 'transactions'], (result) => {
        sendResponse(result);
      });
      break;
      
    case 'UPDATE_WALLET':
      chrome.storage.local.set({ walletAddress: request.address }, () => {
        sendResponse({ success: true });
      });
      break;
      
    case 'ADD_TRANSACTION':
      chrome.storage.local.get(['transactions'], (result) => {
        const transactions = result.transactions || [];
        transactions.push(request.transaction);
        chrome.storage.local.set({ transactions }, () => {
          sendResponse({ success: true });
        });
      });
      break;
      
    default:
      sendResponse({ error: 'Unknown message type' });
  }
  

  return true;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.startsWith('http')) {

    console.log('Tab updated:', tab.url);
  }
}); 