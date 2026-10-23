// Macrohard Interactive Platform Logic
// Developed by Tamojit Roy

const MACROHARD_PRODUCTS = [
  {
    id: 'surface-pro-11',
    name: 'Surface Pro (11th Edition)',
    category: 'surface',
    badge: 'Copilot+ PC',
    badgeColor: '#ffb900',
    badgeText: '#000000',
    price: 999.99,
    originalPrice: 1199.99,
    imageKey: 'surface-pro',
    shortDesc: 'Unrivaled flexibility meets next-gen AI acceleration. Laptop-to-tablet versatility with an ultra-crisp PixelSense Flow OLED display.',
    specs: {
      processor: 'Snapdragon X Elite (12-Core) with 45 TOPS NPU',
      ram: '16 GB LPDDR5x RAM',
      storage: '512 GB Gen 4 SSD',
      display: '13" 2880x1920 120Hz OLED Touch',
      battery: 'Up to 14 hours local video playback',
      weight: '1.97 lbs (895 g)'
    },
    ctaText: 'Shop Surface Pro'
  },
  {
    id: 'surface-laptop-7',
    name: 'Surface Laptop (7th Edition)',
    category: 'surface',
    badge: 'New Release',
    badgeColor: '#ffb900',
    badgeText: '#000000',
    price: 1099.99,
    originalPrice: 1299.99,
    imageKey: 'hero-laptop',
    shortDesc: 'Razor-thin aluminum craftsmanship powered by Macrohard Copilot+. Faster performance, all-day battery life, and Studio Mic clarity.',
    specs: {
      processor: 'Snapdragon X Plus / Elite with 45 TOPS NPU',
      ram: '16 GB / 32 GB LPDDR5x RAM',
      storage: '512 GB / 1 TB Removable SSD',
      display: '13.8" or 15" PixelSense Flow 120Hz',
      battery: 'Up to 20 hours battery life',
      weight: '2.96 lbs (1.34 kg)'
    },
    ctaText: 'Explore Surface Laptop'
  },
  {
    id: 'xbox-series-x',
    name: 'Xbox Series X – 1TB Galaxy Black',
    category: 'xbox',
    badge: 'Best Seller',
    badgeColor: '#107c10',
    badgeText: '#ffffff',
    price: 499.99,
    originalPrice: 549.99,
    imageKey: 'xbox-console',
    shortDesc: 'The fastest, most powerful Xbox ever. Experience true 4K gaming at up to 120 frames per second with Xbox Velocity Architecture.',
    specs: {
      processor: 'Custom 8-Core AMD Zen 2 CPU @ 3.8 GHz',
      ram: '16 GB GDDR6 w/ 320-bit bus',
      storage: '1 TB Custom NVMe SSD (2.4 GB/s raw)',
      display: 'True 4K @ 120Hz, 8K HDR Ready',
      battery: 'Internal Power Supply (Console)',
      weight: '9.8 lbs (4.45 kg)'
    },
    ctaText: 'Shop Xbox Series X'
  },
  {
    id: 'm365-family',
    name: 'Macrohard 365 Family + Copilot',
    category: 'software',
    badge: 'Most Popular',
    badgeColor: '#0067b8',
    badgeText: '#ffffff',
    price: 99.99,
    originalPrice: 129.99,
    imageKey: 'workspace-cloud',
    shortDesc: 'One convenient subscription for up to 6 people. Includes premium Word, Excel, PowerPoint, Outlook, Defender, and 6 TB cloud storage.',
    specs: {
      processor: 'Runs on Windows, macOS, iOS & Android',
      ram: 'Cloud-powered Copilot AI included',
      storage: '6 TB OneDrive Cloud Storage (1 TB/person)',
      display: 'Up to 5 devices simultaneously per user',
      battery: 'Continuous real-time cloud backup',
      weight: 'Instant Digital License'
    },
    ctaText: 'See subscription plans'
  },
  {
    id: 'surface-studio-3',
    name: 'Surface Studio 3+ All-in-One',
    category: 'surface',
    badge: 'Creator Pro',
    badgeColor: '#ffb900',
    badgeText: '#000000',
    price: 2399.99,
    originalPrice: 2699.99,
    imageKey: 'workspace-cloud',
    shortDesc: 'Turn your desk into a boundless creative studio. Zero-gravity hinge lowers the 28-inch PixelSense touchscreen to a 20-degree canvas.',
    specs: {
      processor: 'Intel Core Ultra 9 + NVIDIA RTX 4070 GPU',
      ram: '32 GB DDR5 ECC Memory',
      storage: '2 TB NVMe Gen 4 SSD',
      display: '28" 4500x3000 DCI-P3 Touch Canvas',
      battery: 'Desktop AC Studio Power',
      weight: '21.0 lbs (9.56 kg)'
    },
    ctaText: 'Configure Studio 3+'
  },
  {
    id: 'xbox-game-pass',
    name: 'Xbox Game Pass Ultimate (12 Months)',
    category: 'xbox',
    badge: 'Day One Access',
    badgeColor: '#107c10',
    badgeText: '#ffffff',
    price: 179.99,
    originalPrice: 203.88,
    imageKey: 'xbox-console',
    shortDesc: 'Play hundreds of high-quality games on console, PC, and cloud. Includes new day-one releases, EA Play membership, and online multiplayer.',
    specs: {
      processor: 'Console, Windows PC & Cloud Gaming',
      ram: '500+ Curated HD/4K Titles',
      storage: 'Unlimited Cloud Saves + Instant Stream',
      display: 'Up to 1440p 60FPS Cloud Streaming',
      battery: '12-Month All-Access Digital Pass',
      weight: 'Instant Digital Code'
    },
    ctaText: 'Join Game Pass'
  },
  {
    id: 'windows-11-pro',
    name: 'Windows 11 Pro Retail License',
    category: 'software',
    badge: 'Enterprise Ready',
    badgeColor: '#0067b8',
    badgeText: '#ffffff',
    price: 199.99,
    originalPrice: 219.99,
    imageKey: 'hero-laptop',
    shortDesc: 'Built for hybrid work, BitLocker encryption, Hyper-V virtualization, Windows Sandbox, and deep OS-level Macrohard Copilot integration.',
    specs: {
      processor: '64-bit 1GHz+ 2+ Core Processor',
      ram: '4 GB Minimum (8 GB+ Recommended)',
      storage: '64 GB Minimum Available Space',
      display: 'DirectX 12 + WDDM 2.0 HDR Support',
      battery: 'Smart Eco Energy Saver Scheduler',
      weight: 'Instant Digital Activation Key'
    },
    ctaText: 'Get Windows 11 Pro'
  },
  {
    id: 'copilot-pro-annual',
    name: 'Macrohard Copilot Pro (Annual Plan)',
    category: 'software',
    badge: 'AI Accelerator',
    badgeColor: '#6b21a8',
    badgeText: '#ffffff',
    price: 200.00,
    originalPrice: 240.00,
    imageKey: 'surface-pro',
    shortDesc: 'Priority access to frontier reasoning models during peak hours, AI inside Word, Excel, PowerPoint & Outlook, and 100 daily Designer boosts.',
    specs: {
      processor: 'Frontier GPT-4o & Reasoning Models',
      ram: 'Full M365 Desktop & Web App Integration',
      storage: 'Custom Copilot GPT Builder Included',
      display: '4K AI Image & Slide Deck Generation',
      battery: '24/7 Priority Cloud Inference Queue',
      weight: 'Instant Account Upgrade'
    },
    ctaText: 'Unlock Copilot Pro'
  }
];

const BUSINESS_CARDS = [
  {
    id: 'biz-surface',
    title: 'Surface for Business',
    badge: 'Commercial Hardware',
    desc: 'No matter what you do, there is a Surface to help you do it. Secured-core PCs with Windows 11 Pro and zero-touch Windows Autopilot deployment.',
    price: 1149.00,
    imageKey: 'surface-pro',
    cta: 'Shop Surface for Business'
  },
  {
    id: 'biz-copilot',
    title: 'Macrohard 365 Copilot for Enterprise',
    badge: 'Work IQ & Security',
    desc: 'Save time and focus on the things that matter most with AI in Macrohard 365 for business—grounded securely in your organization\x27s Graph data.',
    price: 360.00,
    imageKey: 'workspace-cloud',
    cta: 'Explore Enterprise Copilot'
  },
  {
    id: 'biz-win365',
    title: 'Windows 365 Cloud PC',
    badge: '20% Off First Year',
    desc: ' securely stream your personalized Windows experience, apps, settings, and content from the Macrohard cloud to any device anywhere.',
    price: 31.00,
    imageKey: 'hero-laptop',
    cta: 'Configure Cloud PC'
  },
  {
    id: 'biz-azure',
    title: 'Join the era of AI with Azure',
    badge: 'Cloud Infrastructure',
    desc: 'Create, communicate, and code with the latest Macrohard AI solutions, serverless Kubernetes, and globally distributed SQL databases.',
    price: 0.00,
    imageKey: 'workspace-cloud',
    cta: 'Start free with $200 Azure credit'
  }
];

const M365_PLANS = {
  personal: [
    {
      id: 'm365-plan-family',
      name: 'Macrohard 365 Family',
      subtitle: 'For 1 to 6 people',
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      popular: true,
      features: [
        'Use on up to 5 devices simultaneously per person',
        'Word, Excel, PowerPoint, OneNote & Outlook with Copilot',
        'Up to 6 TB of OneDrive cloud storage (1 TB per person)',
        'Macrohard Defender advanced identity & data protection',
        'Clipchamp 4K video editor with premium filters'
      ]
    },
    {
      id: 'm365-plan-personal',
      name: 'Macrohard 365 Personal',
      subtitle: 'For 1 person',
      monthlyPrice: 6.99,
      annualPrice: 69.99,
      popular: false,
      features: [
        'Use on up to 5 devices simultaneously (PC, Mac, Phone, Tablet)',
        'Desktop & mobile versions of Word, Excel, PowerPoint, Outlook',
        '1 TB of encrypted OneDrive cloud storage with Personal Vault',
        'Ad-free Outlook email and calendar with custom rules',
        'Ongoing technical support via chat or phone at no extra cost'
      ]
    },
    {
      id: 'm365-plan-basic',
      name: 'Macrohard 365 Basic',
      subtitle: 'Cloud storage & web apps',
      monthlyPrice: 1.99,
      annualPrice: 19.99,
      popular: false,
      features: [
        '100 GB of OneDrive cloud storage across all devices',
        'Web and mobile versions of Word, Excel, and PowerPoint',
        'Ad-free Outlook web and mobile email & calendar',
        'Automatic photo and file backup from iOS and Android',
        'Ransomware detection and file recovery in OneDrive'
      ]
    }
  ],
  business: [
    {
      id: 'm365-biz-basic',
      name: 'Macrohard 365 Business Basic',
      subtitle: 'Web & mobile apps + Teams',
      monthlyPrice: 7.20,
      annualPrice: 72.00,
      popular: false,
      features: [
        'Custom business email (you@yourbusiness.com)',
        'Web and mobile versions of Word, Excel, PowerPoint, Outlook',
        'Macrohard Teams chat, HD video meetings for up to 300 attendees',
        '1 TB of OneDrive cloud storage per employee',
        '99.9% guaranteed uptime SLA & 24/7 phone/web support'
      ]
    },
    {
      id: 'm365-biz-standard',
      name: 'Macrohard 365 Business Standard',
      subtitle: 'Full desktop apps + collaboration',
      monthlyPrice: 15.00,
      annualPrice: 150.00,
      popular: true,
      features: [
        'Everything in Business Basic, plus full desktop Office apps',
        'Install on up to 5 PCs/Macs + 5 mobile devices per user',
        'Webinars with attendee registration and analytics reporting',
        'Collaborative workspaces in Macrohard Loop and Clipchamp',
        'Eligible for Macrohard 365 Copilot Enterprise add-on'
      ]
    },
    {
      id: 'm365-biz-premium',
      name: 'Macrohard 365 Business Premium',
      subtitle: 'Advanced cyberthreat protection',
      monthlyPrice: 26.40,
      annualPrice: 264.00,
      popular: false,
      features: [
        'Everything in Business Standard, plus enterprise grade security',
        'Macrohard Defender for Business endpoint protection',
        'Macrohard Entra ID P1 & Intune device management',
        'Information protection & sensitivity labeling (Purview)',
        'Zero-trust conditional access & remote wipe for lost devices'
      ]
    }
  ]
};

const COPILOT_SAMPLE_RESPONSES = {
  'exec': {
    prompt: 'Draft a Q4 executive summary for our hybrid cloud migration in Word.',
    response: '📄 **Macrohard Copilot — Word Draft Generated:**\\n\\n**Executive Summary: Q4 Global Hybrid Cloud Modernization**\\n• **Milestone Achieved:** Completed zero-downtime migration of 42 mission-critical workloads to Macrohard Azure Kubernetes Service (AKS), reducing infrastructure latency by 38%.\\n• **Cost Optimization:** Consolidated legacy licensing into Macrohard 365 E5, saving $142,000 annually.\\n• **Next Steps:** Roll out Copilot Studio agents across Customer Support by November 15.',
    tag: 'Word + Graph Grounded'
  },
  'excel': {
    prompt: 'Analyze Q3 regional hardware margins and forecast Q4 Surface demand in Excel.',
    response: '📊 **Macrohard Copilot — Excel Python Analysis:**\\n\\n• **Top Performing Segment:** Surface Pro (11th Ed.) grew **+29.4% QoQ** with a gross margin of **34.8%**.\\n• **Formula Applied:** `=FORECAST.ETS(Q4_Date, Historical_Units, Timeline, 1, 1)`\\n• **Q4 Projection:** Estimated **48,500 units** (+18% holiday uplift). Recommended increasing APAC warehouse allocation by 12%.',
    tag: 'Excel Formula + Chart'
  },
  'azure': {
    prompt: 'Generate a zero-downtime Netlify & Azure static edge deployment config.',
    response: '⚡ **Macrohard Copilot — DevOps Architect:**\\n\\nConfigured immutable edge caching with automatic Brotli compression, strict HSTS security headers, and instant atomic rollbacks. Your bundle is verified 100% compliant with Netlify Edge and Azure Static Web Apps.',
    tag: 'DevOps & Edge Verified'
  }
};

// Application State
let appState = {
  heroSlide: 0,
  heroPlaying: true,
  activeCategory: 'all',
  searchQuery: '',
  cart: [
    { id: 'surface-pro-11', qty: 1 }
  ],
  compareIds: ['surface-pro-11', 'surface-laptop-7'],
  promoCode: '',
  discountRate: 0,
  m365Segment: 'personal',
  m365Billing: 'annual',
  user: null,
  currentLocale: 'English (United States)',
  privacyOptOut: false,
  darkMode: false
};

let heroInterval = null;

function getImageSrc(imageKey) {
  const mapEl = document.getElementById('mh-asset-' + imageKey);
  if (mapEl && mapEl.getAttribute('src')) {
    return mapEl.getAttribute('src');
  }
  return './assets/' + imageKey + '.jpg';
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  const bg = type === 'success' ? '#107c10' : (type === 'warning' ? '#d83b01' : '#0067b8');
  toast.className = 'flex items-center gap-3 px-4 py-3 rounded shadow-lg text-white text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100';
  toast.style.backgroundColor = bg;
  toast.innerHTML = `
    <span>${message}</span>
    <button type="button" class="ml-auto text-white/80 hover:text-white font-bold px-1" aria-label="Dismiss notification">&times;</button>
  `;
  toast.querySelector('button').addEventListener('click', () => toast.remove());
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3600);
}

// Hero Carousel Controls
function setHeroSlide(index) {
  const slides = document.querySelectorAll('.mh-hero-slide');
  const dots = document.querySelectorAll('.mh-hero-dot');
  if (!slides.length) return;
  appState.heroSlide = (index + slides.length) % slides.length;
  slides.forEach((s, idx) => {
    s.classList.toggle('active', idx === appState.heroSlide);
  });
  dots.forEach((d, idx) => {
    if (idx === appState.heroSlide) {
      d.classList.add('bg-[#1b1b1b]', 'dark:bg-white', 'scale-110');
      d.classList.remove('bg-transparent');
    } else {
      d.classList.remove('bg-[#1b1b1b]', 'dark:bg-white', 'scale-110');
      d.classList.add('bg-transparent');
    }
  });
}

function startHeroTimer() {
  if (heroInterval) clearInterval(heroInterval);
  if (appState.heroPlaying) {
    heroInterval = setInterval(() => {
      setHeroSlide(appState.heroSlide + 1);
    }, 6500);
  }
}

function toggleHeroPlay() {
  appState.heroPlaying = !appState.heroPlaying;
  const iconPlay = document.getElementById('hero-play-icon');
  const iconPause = document.getElementById('hero-pause-icon');
  const label = document.getElementById('hero-play-label');
  if (iconPlay && iconPause) {
    iconPlay.classList.toggle('hidden', appState.heroPlaying);
    iconPause.classList.toggle('hidden', !appState.heroPlaying);
  }
  if (label) {
    label.textContent = appState.heroPlaying ? 'Pause slide rotation' : 'Play slide rotation';
  }
  startHeroTimer();
}

// Render Storefront Product Cards
function renderProducts() {
  const grid = document.getElementById('product-grid');
  const emptyState = document.getElementById('product-empty-state');
  const countBadge = document.getElementById('product-count-badge');
  if (!grid) return;

  const q = appState.searchQuery.trim().toLowerCase();
  const filtered = MACROHARD_PRODUCTS.filter(p => {
    const matchesCat = appState.activeCategory === 'all' || p.category === appState.activeCategory;
    const matchesQuery = !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.specs.processor.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }
  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(item => {
    const isCompared = appState.compareIds.includes(item.id);
    const imgSrc = getImageSrc(item.imageKey);
    const savings = (item.originalPrice - item.price).toFixed(0);
    return `
      <article class="mh-card group" data-product-id="${item.id}">
        <div class="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img src="${imgSrc}" alt="${item.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="px-2.5 py-0.5 text-xs font-semibold tracking-wide rounded-sm shadow-sm" style="background-color:${item.badgeColor};color:${item.badgeText}">
              ${item.badge}
            </span>
            ${savings > 0 ? `<span class="px-2 py-0.5 text-xs font-semibold bg-black/80 text-white rounded-sm">Save $${savings}</span>` : ''}
          </div>
        </div>
        <div class="p-5 flex flex-col flex-1 justify-between">
          <div>
            <h3 class="text-lg font-semibold leading-snug mb-2 group-hover:text-[#0067b8] dark:group-hover:text-[#4cc2ff] transition-colors">
              ${item.name}
            </h3>
            <p class="text-sm text-[#505050] dark:text-neutral-300 leading-relaxed mb-4">
              ${item.shortDesc}
            </p>
            <div class="text-xs text-[#505050] dark:text-neutral-400 space-y-1 mb-4 border-t border-neutral-200 dark:border-neutral-700 pt-3">
              <div><strong class="text-neutral-800 dark:text-neutral-200">Silicon:</strong> ${item.specs.processor}</div>
              <div><strong class="text-neutral-800 dark:text-neutral-200">Display/Tier:</strong> ${item.specs.display}</div>
            </div>
          </div>
          <div class="pt-2 border-t border-neutral-200 dark:border-neutral-700">
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-xl font-bold">$${item.price.toFixed(2)}</span>
                <span class="text-xs line-through text-neutral-400 ml-1.5">$${item.originalPrice.toFixed(2)}</span>
              </div>
              <label class="inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer select-none text-[#0067b8] dark:text-[#4cc2ff]">
                <input type="checkbox" class="compare-checkbox accent-[#0067b8] w-3.5 h-3.5 rounded" data-id="${item.id}" ${isCompared ? 'checked' : ''} />
                <span>Compare</span>
              </label>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" class="add-to-cart-btn mh-btn-primary flex-1 text-sm py-2 px-3" data-id="${item.id}">
                Add to cart
              </button>
              <button type="button" class="quick-view-btn mh-btn-secondary text-xs py-2 px-3" data-id="${item.id}">
                Specs
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach listeners
  grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.getAttribute('data-id')));
  });
  grid.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', () => openProductModal(btn.getAttribute('data-id')));
  });
  grid.querySelectorAll('.compare-checkbox').forEach(chk => {
    chk.addEventListener('change', () => toggleCompareProduct(chk.getAttribute('data-id')));
  });
}

// Render Business Section
function renderBusinessCards() {
  const grid = document.getElementById('business-grid');
  if (!grid) return;
  grid.innerHTML = BUSINESS_CARDS.map(card => {
    const imgSrc = getImageSrc(card.imageKey);
    return `
      <article class="mh-card group">
        <div class="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img src="${imgSrc}" alt="${card.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <span class="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-semibold bg-[#ffb900] text-black rounded-sm">
            ${card.badge}
          </span>
        </div>
        <div class="p-5 flex flex-col flex-1 justify-between">
          <div>
            <h3 class="text-lg font-semibold mb-2">${card.title}</h3>
            <p class="text-sm text-[#505050] dark:text-neutral-300 leading-relaxed mb-4">${card.desc}</p>
          </div>
          <div class="pt-3 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
            <span class="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
              ${card.price > 0 ? `Starting at $${card.price.toFixed(2)}` : 'Free Tier Available'}
            </span>
            <button type="button" class="mh-cta-link text-sm biz-action-btn" data-biz-id="${card.id}">
              <span class="mh-link-text">${card.cta}</span>
              <svg class="mh-chevron w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.biz-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const bizId = btn.getAttribute('data-biz-id');
      const card = BUSINESS_CARDS.find(b => b.id === bizId);
      if (!card) return;
      if (card.price > 0) {
        addToCartCustom(card.id, card.title, card.price, card.imageKey);
      } else {
        showToast('Azure Free Account ($200 Credit) sandbox activated for your session!', 'success');
      }
    });
  });
}

// Render Macrohard 365 Subscription Plans
function renderM365Plans() {
  const container = document.getElementById('m365-plans-grid');
  if (!container) return;
  const plans = M365_PLANS[appState.m365Segment] || M365_PLANS.personal;
  const isAnnual = appState.m365Billing === 'annual';

  container.innerHTML = plans.map(plan => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const unit = isAnnual ? '/year' : '/month';
    return `
      <div class="mh-card relative p-6 ${plan.popular ? 'ring-2 ring-[#0067b8]' : ''}">
        ${plan.popular ? '<div class="absolute top-0 right-0 bg-[#0067b8] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl">Best Value</div>' : ''}
        <div class="mb-4">
          <p class="text-xs font-semibold uppercase tracking-wider text-[#0067b8] dark:text-[#4cc2ff] mb-1">${plan.subtitle}</p>
          <h3 class="text-xl font-bold">${plan.name}</h3>
        </div>
        <div class="mb-5 pb-4 border-b border-neutral-200 dark:border-neutral-700">
          <div class="flex items-baseline gap-1">
            <span class="text-3xl font-extrabold">$${price.toFixed(2)}</span>
            <span class="text-sm text-neutral-500 dark:text-neutral-400">${unit}</span>
          </div>
          <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            ${isAnnual ? 'Billed annually (Save 16% vs. monthly)' : 'Billed monthly, cancel anytime'}
          </p>
        </div>
        <ul class="space-y-2.5 text-sm text-[#505050] dark:text-neutral-300 mb-6 flex-1">
          ${plan.features.map(f => `
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 text-[#107c10] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
        <button type="button" class="mh-btn-primary w-full m365-subscribe-btn" data-plan-id="${plan.id}" data-plan-name="${plan.name} (${isAnnual ? 'Annual' : 'Monthly'})" data-plan-price="${price}">
          Buy now
        </button>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.m365-subscribe-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-plan-id') + '-' + appState.m365Billing;
      const name = btn.getAttribute('data-plan-name');
      const price = parseFloat(btn.getAttribute('data-plan-price'));
      addToCartCustom(id, name, price, 'workspace-cloud');
    });
  });
}

// Product Comparison Table
function toggleCompareProduct(productId) {
  const idx = appState.compareIds.indexOf(productId);
  if (idx >= 0) {
    appState.compareIds.splice(idx, 1);
  } else {
    if (appState.compareIds.length >= 3) {
      showToast('You can compare up to 3 products at once. Removing the oldest selection.', 'warning');
      appState.compareIds.shift();
    }
    appState.compareIds.push(productId);
  }
  renderProducts();
  renderComparisonTable();
}

function renderComparisonTable() {
  const wrap = document.getElementById('comparison-table-body');
  const countEl = document.getElementById('compare-count-pill');
  if (!wrap) return;
  if (countEl) countEl.textContent = `${appState.compareIds.length} selected`;

  const selected = appState.compareIds.map(id => MACROHARD_PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (selected.length === 0) {
    wrap.innerHTML = `
      <tr>
        <td colspan="4" class="py-8 text-center text-sm text-neutral-500">
          Select up to 3 products using the "Compare" checkbox on any product card above to compare full technical specifications side-by-side.
        </td>
      </tr>
    `;
    return;
  }

  const rows = [
    { label: 'Product', render: p => `<div class="font-bold text-base">${p.name}</div><div class="text-xs text-[#0067b8] dark:text-[#4cc2ff] font-semibold mt-0.5">$${p.price.toFixed(2)}</div>` },
    { label: 'Processor / Engine', render: p => p.specs.processor },
    { label: 'Memory / Capacity', render: p => p.specs.ram },
    { label: 'Storage', render: p => p.specs.storage },
    { label: 'Display / Access', render: p => p.specs.display },
    { label: 'Battery / Continuity', render: p => p.specs.battery },
    { label: 'Weight / Delivery', render: p => p.specs.weight },
    { label: 'Action', render: p => `<button type="button" class="mh-btn-primary text-xs py-1.5 px-3 cmp-add-btn" data-id="${p.id}">Add to Cart</button>` }
  ];

  wrap.innerHTML = rows.map(r => `
    <tr class="border-b border-neutral-200 dark:border-neutral-700">
      <th class="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/60 w-44">
        ${r.label}
      </th>
      ${selected.map(p => `<td class="py-3 px-4 text-sm align-top">${r.render(p)}</td>`).join('')}
      ${Array.from({ length: Math.max(0, 3 - selected.length) }).map(() => `<td class="py-3 px-4 text-xs text-neutral-400 italic align-middle">— Empty slot —</td>`).join('')}
    </tr>
  `).join('');

  wrap.querySelectorAll('.cmp-add-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.getAttribute('data-id')));
  });
}

// Cart Management
let customCartProducts = {};

function addToCart(productId) {
  const existing = appState.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ id: productId, qty: 1 });
  }
  const prod = MACROHARD_PRODUCTS.find(p => p.id === productId);
  updateCartUI();
  showToast(`Added "${prod ? prod.name : productId}" to your Macrohard Cart`, 'success');
}

function addToCartCustom(id, name, price, imageKey) {
  customCartProducts[id] = { id, name, price, imageKey };
  const existing = appState.cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ id, qty: 1 });
  }
  updateCartUI();
  showToast(`Added "${name}" to your Macrohard Cart`, 'success');
}

function updateCartQty(productId, delta) {
  const item = appState.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    appState.cart = appState.cart.filter(i => i.id !== productId);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalCount = appState.cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cart-count-badge');
  if (badge) {
    badge.textContent = totalCount;
    badge.classList.toggle('hidden', totalCount === 0);
  }

  const listEl = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const totalEl = document.getElementById('cart-total');
  if (!listEl) return;

  if (appState.cart.length === 0) {
    listEl.innerHTML = `
      <div class="py-12 text-center text-neutral-500">
        <p class="font-semibold mb-1">Your Macrohard Store cart is empty</p>
        <p class="text-xs">Explore Surface PCs, Xbox consoles, or Macrohard 365 plans to add items.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00';
    if (discountEl) discountEl.textContent = '-$0.00';
    if (totalEl) totalEl.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  listEl.innerHTML = appState.cart.map(entry => {
    const prod = MACROHARD_PRODUCTS.find(p => p.id === entry.id) || customCartProducts[entry.id];
    if (!prod) return '';
    const lineTotal = prod.price * entry.qty;
    subtotal += lineTotal;
    const imgSrc = getImageSrc(prod.imageKey);
    return `
      <div class="flex items-center gap-3 py-3 border-b border-neutral-200 dark:border-neutral-700">
        <img src="${imgSrc}" alt="${prod.name}" class="w-16 h-12 object-cover rounded border border-neutral-200 dark:border-neutral-700 shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-semibold truncate">${prod.name}</h4>
          <p class="text-xs text-neutral-500">$${prod.price.toFixed(2)} each</p>
          <div class="flex items-center gap-2 mt-1.5">
            <button type="button" class="cart-qty-btn w-6 h-6 rounded border border-neutral-300 dark:border-neutral-600 text-xs font-bold" data-id="${entry.id}" data-delta="-1" aria-label="Decrease quantity">-</button>
            <span class="text-xs font-semibold w-5 text-center">${entry.qty}</span>
            <button type="button" class="cart-qty-btn w-6 h-6 rounded border border-neutral-300 dark:border-neutral-600 text-xs font-bold" data-id="${entry.id}" data-delta="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div class="text-right">
          <div class="text-sm font-bold">$${lineTotal.toFixed(2)}</div>
        </div>
      </div>
    `;
  }).join('');

  listEl.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateCartQty(btn.getAttribute('data-id'), parseInt(btn.getAttribute('data-delta'), 10));
    });
  });

  const discount = subtotal * appState.discountRate;
  const finalTotal = Math.max(0, subtotal - discount);
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${finalTotal.toFixed(2)}`;
}

// Product Quick View Modal
function openProductModal(productId) {
  const prod = MACROHARD_PRODUCTS.find(p => p.id === productId);
  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-modal-body');
  if (!prod || !modal || !content) return;

  const imgSrc = getImageSrc(prod.imageKey);
  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div class="rounded overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
        <img src="${imgSrc}" alt="${prod.name}" class="w-full h-auto object-cover" />
      </div>
      <div>
        <span class="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-sm mb-2" style="background-color:${prod.badgeColor};color:${prod.badgeText}">${prod.badge}</span>
        <h3 class="text-2xl font-bold mb-2">${prod.name}</h3>
        <p class="text-sm text-[#505050] dark:text-neutral-300 mb-4 leading-relaxed">${prod.shortDesc}</p>
        <div class="text-2xl font-extrabold text-[#0067b8] dark:text-[#4cc2ff] mb-4">
          $${prod.price.toFixed(2)}
          <span class="text-sm font-normal line-through text-neutral-400 ml-2">$${prod.originalPrice.toFixed(2)}</span>
        </div>
        <div class="bg-neutral-50 dark:bg-neutral-800/70 p-4 rounded border border-neutral-200 dark:border-neutral-700 space-y-2 text-xs mb-5">
          <div><strong>Processor / Core:</strong> ${prod.specs.processor}</div>
          <div><strong>Memory:</strong> ${prod.specs.ram}</div>
          <div><strong>Storage:</strong> ${prod.specs.storage}</div>
          <div><strong>Display / Experience:</strong> ${prod.specs.display}</div>
          <div><strong>Battery / Continuity:</strong> ${prod.specs.battery}</div>
          <div><strong>Weight / Form:</strong> ${prod.specs.weight}</div>
        </div>
        <div class="flex flex-wrap gap-3">
          <button type="button" id="modal-add-cart-btn" class="mh-btn-primary flex-1">Add to Cart</button>
          <button type="button" id="modal-compare-btn" class="mh-btn-secondary">Compare Model</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.getElementById('modal-add-cart-btn').addEventListener('click', () => {
    addToCart(prod.id);
    modal.classList.add('hidden');
  });
  document.getElementById('modal-compare-btn').addEventListener('click', () => {
    toggleCompareProduct(prod.id);
    modal.classList.add('hidden');
    document.getElementById('compare-section').scrollIntoView({ behavior: 'smooth' });
  });
}

// Copilot Interactive Assistant Demo
function runCopilotDemo(presetKey, customText = '') {
  const outputBox = document.getElementById('copilot-response-box');
  if (!outputBox) return;

  let promptText = customText;
  let replyText = '';
  let badgeTag = 'Copilot Reasoning Engine';

  if (presetKey && COPILOT_SAMPLE_RESPONSES[presetKey]) {
    promptText = COPILOT_SAMPLE_RESPONSES[presetKey].prompt;
    replyText = COPILOT_SAMPLE_RESPONSES[presetKey].response;
    badgeTag = COPILOT_SAMPLE_RESPONSES[presetKey].tag;
  } else if (customText) {
    replyText = `✨ **Macrohard Copilot Analysis for "${customText}":**\\n\\n• Synthesized across Macrohard 365 Graph, Surface hardware telemetry, and Azure AI Foundry.\\n• Created a structured action plan in OneNote and drafted a summary slide deck in PowerPoint.\\n• Ready to export or share with your team in Macrohard Teams.`;
  } else {
    return;
  }

  const formattedReply = replyText
    .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded text-xs font-mono">$1</code>')
    .replace(/\\n/g, '<br/>');

  outputBox.innerHTML = `
    <div class="p-4 rounded border border-[#0067b8]/30 bg-[#f5f9fd] dark:bg-neutral-800/90 text-sm space-y-2 animate-fadeIn">
      <div class="flex items-center justify-between text-xs text-[#0067b8] dark:text-[#4cc2ff] font-semibold">
        <span>Prompt: "${promptText}"</span>
        <span class="px-2 py-0.5 bg-[#0067b8]/10 rounded">${badgeTag}</span>
      </div>
      <div class="text-neutral-800 dark:text-neutral-100 leading-relaxed pt-1 border-t border-neutral-200 dark:border-neutral-700">
        ${formattedReply}
      </div>
    </div>
  `;
}

// Initialize Everything on DOM Ready
function initMacrohardApp() {
  renderProducts();
  renderBusinessCards();
  renderM365Plans();
  renderComparisonTable();
  updateCartUI();
  setHeroSlide(0);
  startHeroTimer();
  runCopilotDemo('exec');

  // Hero Controls
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const playBtn = document.getElementById('hero-play-btn');
  if (prevBtn) prevBtn.addEventListener('click', () => { setHeroSlide(appState.heroSlide - 1); startHeroTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { setHeroSlide(appState.heroSlide + 1); startHeroTimer(); });
  if (playBtn) playBtn.addEventListener('click', toggleHeroPlay);
  document.querySelectorAll('.mh-hero-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      setHeroSlide(parseInt(dot.getAttribute('data-slide'), 10));
      startHeroTimer();
    });
  });

  // Category Filter Tabs
  document.querySelectorAll('.category-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.activeCategory = btn.getAttribute('data-category');
      document.querySelectorAll('.category-tab-btn').forEach(b => {
        const active = b.getAttribute('data-category') === appState.activeCategory;
        b.classList.toggle('bg-[#0067b8]', active);
        b.classList.toggle('text-white', active);
        b.classList.toggle('bg-neutral-100', !active);
        b.classList.toggle('dark:bg-neutral-800', !active);
      });
      renderProducts();
    });
  });

  // Quick-Link Icons Filter & Scroll
  document.querySelectorAll('.quick-icon-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const cat = link.getAttribute('data-filter');
      const targetId = link.getAttribute('data-target');
      if (cat) {
        const tabBtn = document.querySelector(`.category-tab-btn[data-category="${cat}"]`);
        if (tabBtn) tabBtn.click();
      }
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Search Input
  const searchInput = document.getElementById('global-search-input');
  const clearSearchBtn = document.getElementById('reset-search-btn');
  const searchToggleBtn = document.getElementById('header-search-toggle');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      appState.searchQuery = e.target.value;
      renderProducts();
    });
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('storefront-section').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      appState.searchQuery = '';
      appState.activeCategory = 'all';
      if (searchInput) searchInput.value = '';
      document.querySelectorAll('.category-tab-btn').forEach(b => {
        const active = b.getAttribute('data-category') === 'all';
        b.classList.toggle('bg-[#0067b8]', active);
        b.classList.toggle('text-white', active);
      });
      renderProducts();
    });
  }
  if (searchToggleBtn && searchInput) {
    searchToggleBtn.addEventListener('click', () => {
      searchInput.focus();
      document.getElementById('storefront-section').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // All Macrohard Mega Menu
  const megaMenuBtn = document.getElementById('all-macrohard-btn');
  const megaMenuPanel = document.getElementById('all-macrohard-menu');
  if (megaMenuBtn && megaMenuPanel) {
    megaMenuBtn.addEventListener('click', e => {
      e.stopPropagation();
      megaMenuPanel.classList.toggle('hidden');
      const expanded = !megaMenuPanel.classList.contains('hidden');
      megaMenuBtn.setAttribute('aria-expanded', String(expanded));
    });
    document.addEventListener('click', e => {
      if (!megaMenuPanel.contains(e.target) && e.target !== megaMenuBtn) {
        megaMenuPanel.classList.add('hidden');
        megaMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
    mobileDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    });
  }

  // Cart Drawer Open/Close & Promo Code
  const cartOpenBtn = document.getElementById('header-cart-btn');
  const cartDrawer = document.getElementById('cart-drawer-modal');
  const cartCloseBtn = document.getElementById('close-cart-btn');
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoInput = document.getElementById('promo-code-input');
  const checkoutBtn = document.getElementById('checkout-action-btn');

  if (cartOpenBtn && cartDrawer) {
    cartOpenBtn.addEventListener('click', () => cartDrawer.classList.remove('hidden'));
  }
  if (cartCloseBtn && cartDrawer) {
    cartCloseBtn.addEventListener('click', () => cartDrawer.classList.add('hidden'));
  }
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'TAMOJIT20') {
        appState.discountRate = 0.20;
        showToast('Applied developer promo code TAMOJIT20 (20% Off)!', 'success');
      } else if (code === 'MACRO10') {
        appState.discountRate = 0.10;
        showToast('Applied promo code MACRO10 (10% Off)!', 'success');
      } else {
        appState.discountRate = 0;
        showToast('Invalid promo code. Try TAMOJIT20 or MACRO10!', 'warning');
      }
      updateCartUI();
    });
  }
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (appState.cart.length === 0) {
        showToast('Your cart is empty! Add a product before checking out.', 'warning');
        return;
      }
      appState.cart = [];
      appState.discountRate = 0;
      updateCartUI();
      if (cartDrawer) cartDrawer.classList.add('hidden');
      showToast('Order confirmed! Your Macrohard Store receipt & license keys have been generated.', 'success');
    });
  }

  // M365 Plan Toggles
  document.querySelectorAll('.m365-segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.m365Segment = btn.getAttribute('data-segment');
      document.querySelectorAll('.m365-segment-btn').forEach(b => {
        const active = b.getAttribute('data-segment') === appState.m365Segment;
        b.classList.toggle('bg-[#0067b8]', active);
        b.classList.toggle('text-white', active);
      });
      renderM365Plans();
    });
  });

  document.querySelectorAll('.m365-billing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.m365Billing = btn.getAttribute('data-billing');
      document.querySelectorAll('.m365-billing-btn').forEach(b => {
        const active = b.getAttribute('data-billing') === appState.m365Billing;
        b.classList.toggle('bg-[#0067b8]', active);
        b.classList.toggle('text-white', active);
      });
      renderM365Plans();
    });
  });

  // Copilot Interactive Studio
  document.querySelectorAll('.copilot-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      runCopilotDemo(btn.getAttribute('data-preset'));
    });
  });
  const copilotForm = document.getElementById('copilot-custom-form');
  const copilotInput = document.getElementById('copilot-custom-input');
  if (copilotForm && copilotInput) {
    copilotForm.addEventListener('submit', e => {
      e.preventDefault();
      const val = copilotInput.value.trim();
      if (!val) {
        showToast('Enter a prompt for Macrohard Copilot first.', 'warning');
        return;
      }
      runCopilotDemo(null, val);
      copilotInput.value = '';
    });
  }

  // Sign-In Account Modal
  const signInBtn = document.getElementById('header-signin-btn');
  const authModal = document.getElementById('signin-modal');
  const closeAuthBtn = document.getElementById('close-signin-btn');
  const authForm = document.getElementById('signin-form');
  if (signInBtn && authModal) {
    signInBtn.addEventListener('click', () => authModal.classList.remove('hidden'));
  }
  if (closeAuthBtn && authModal) {
    closeAuthBtn.addEventListener('click', () => authModal.classList.add('hidden'));
  }
  if (authForm) {
    authForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = document.getElementById('signin-email-input');
      const email = emailInput && emailInput.value.trim() ? emailInput.value.trim() : 'user@macrohard.com';
      appState.user = email;
      const label = document.getElementById('signin-user-label');
      if (label) label.textContent = email.split('@')[0];
      if (authModal) authModal.classList.add('hidden');
      showToast(`Signed in to Macrohard Account as ${email}`, 'success');
    });
  }

  // Theme Toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      appState.darkMode = !appState.darkMode;
      document.documentElement.classList.toggle('dark', appState.darkMode);
      showToast(`Switched to ${appState.darkMode ? 'Dark' : 'Light'} Fluent Theme`, 'info');
    });
  }

  // Close Product Detail Modal
  const closeProdModalBtn = document.getElementById('close-product-modal-btn');
  const prodModal = document.getElementById('product-detail-modal');
  if (closeProdModalBtn && prodModal) {
    closeProdModalBtn.addEventListener('click', () => prodModal.classList.add('hidden'));
  }

  // Developer Credit Modal (Tamojit Roy)
  const devBtn = document.getElementById('open-dev-credit-btn');
  const footerDevBtn = document.getElementById('footer-dev-credit-btn');
  const devModal = document.getElementById('dev-credit-modal');
  const closeDevBtn = document.getElementById('close-dev-modal-btn');
  if (devBtn && devModal) devBtn.addEventListener('click', () => devModal.classList.remove('hidden'));
  if (footerDevBtn && devModal) footerDevBtn.addEventListener('click', () => devModal.classList.remove('hidden'));
  if (closeDevBtn && devModal) closeDevBtn.addEventListener('click', () => devModal.classList.add('hidden'));

  // Locale Selector Modal
  const localeBtn = document.getElementById('locale-selector-btn');
  const localeModal = document.getElementById('locale-modal');
  const closeLocaleBtn = document.getElementById('close-locale-btn');
  if (localeBtn && localeModal) {
    localeBtn.addEventListener('click', () => localeModal.classList.remove('hidden'));
  }
  if (closeLocaleBtn && localeModal) {
    closeLocaleBtn.addEventListener('click', () => localeModal.classList.add('hidden'));
  }
  document.querySelectorAll('.locale-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const loc = btn.getAttribute('data-locale');
      appState.currentLocale = loc;
      const label = document.getElementById('current-locale-label');
      if (label) label.textContent = loc;
      if (localeModal) localeModal.classList.add('hidden');
      showToast(`Region & Language updated to ${loc}`, 'success');
    });
  });

  // Dismiss Promo Ribbon
  const closePromoBtn = document.getElementById('dismiss-promo-ribbon');
  const promoRibbon = document.getElementById('top-promo-ribbon');
  if (closePromoBtn && promoRibbon) {
    closePromoBtn.addEventListener('click', () => promoRibbon.classList.add('hidden'));
  }

  // Clear Comparison
  const clearCmpBtn = document.getElementById('clear-compare-btn');
  if (clearCmpBtn) {
    clearCmpBtn.addEventListener('click', () => {
      appState.compareIds = [];
      renderProducts();
      renderComparisonTable();
      showToast('Cleared product comparison table.', 'info');
    });
  }

  // Privacy Toggle
  const privacyBtn = document.getElementById('privacy-choices-btn');
  if (privacyBtn) {
    privacyBtn.addEventListener('click', () => {
      appState.privacyOptOut = !appState.privacyOptOut;
      showToast(`Privacy telemetry preference updated: ${appState.privacyOptOut ? 'Strict Essential Only' : 'Standard Diagnostics'}`, 'info');
    });
  }

  // Hero Action Buttons
  document.querySelectorAll('.hero-shop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-product-id');
      if (prodId) openProductModal(prodId);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMacrohardApp);
} else {
  initMacrohardApp();
}
