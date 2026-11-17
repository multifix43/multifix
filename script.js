tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
            navy: {
              950: '#061526',
              900: '#0a2239',
              800: '#103152',
              700: '#174470',
            },
            brandOrange: {
              500: '#ff5a1f',
              600: '#e04810',
            },
            flipkartBlue: {
              600: '#2874f0',
              700: '#1d5ec9',
            }
          }
        }
      }
    }
  

// =========================================================
    // DATA 1: APPLIANCES WE SERVICE CATEGORY TILES (REF #8)
    // =========================================================
    const applianceCategories = [
      { name: 'AC', eta: '44 mins', icon: 'fa-snowflake', color: 'text-sky-600 bg-sky-50', bookingVal: 'AC Service - ₹459' },
      { name: 'Washing Machine Repair', eta: '60 mins', icon: 'fa-soap', color: 'text-indigo-600 bg-indigo-50', bookingVal: 'Washing Machine Service - ₹399' },
      { name: 'Refrigerator', eta: '60 mins', icon: 'fa-temperature-low', color: 'text-cyan-600 bg-cyan-50', bookingVal: 'Fridge Service Charge - ₹399' },
      { name: 'Television Repair', eta: '60 mins', icon: 'fa-tv', color: 'text-slate-700 bg-slate-100', bookingVal: 'Television / Chimney / Microwave / Geyser Repair' },
      { name: 'Chimney Repair', eta: '44 mins', icon: 'fa-wind', color: 'text-amber-600 bg-amber-50', bookingVal: 'Television / Chimney / Microwave / Geyser Repair' },
      { name: 'Microwave', eta: '44 mins', icon: 'fa-fire-burner', color: 'text-orange-600 bg-orange-50', bookingVal: 'Television / Chimney / Microwave / Geyser Repair' },
      { name: 'Laptop Repair', eta: '60 mins', icon: 'fa-laptop', color: 'text-blue-600 bg-blue-50', bookingVal: 'Television / Chimney / Microwave / Geyser Repair' },
      { name: 'Water Purifier Service & Installation', eta: '44 mins', icon: 'fa-droplet', color: 'text-teal-600 bg-teal-50', bookingVal: 'Water Purifier Service - ₹399' },
      { name: 'Geyser Service & Repair', eta: '60 mins', icon: 'fa-shower', color: 'text-rose-600 bg-rose-50', bookingVal: 'Television / Chimney / Microwave / Geyser Repair' },
      { name: 'Air Cooler Service & Repair', eta: '60 mins', icon: 'fa-fan', color: 'text-emerald-600 bg-emerald-50', bookingVal: 'Visiting Charge - ₹259' }
    ];

    // =========================================================
    // DATA 2: URBAN COMPANY-STYLE SERVICES + DETAIL SHEET DATA (REF #9, #11, #12)
    // =========================================================
    const ucServices = [
      {
        id: 'ac-service',
        title: 'AC Service',
        price: '₹459',
        originalPrice: '₹599',
        rating: '4.86',
        reviewsCount: '1.8K reviews',
        duration: '45 mins',
        badge: 'Jet Wash',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x420/0f2942/38bdf8?text=AC+Service+%E2%82%B9459',
        bookingValue: 'AC Service - ₹459',
        highlights: [
          'Applicable for both Split & Window ACs',
          'High-pressure water jet cleaning of cooling coils & filters',
          'Complete drain tray flush & cooling gas pressure check'
        ],
        included: [
          'Pre-service AC health & gas pressure check',
          'Indoor cooling coil, filter & blower jet cleaning',
          'Outdoor condenser unit water wash',
          'Final cooling test & complete workspace cleanup'
        ],
        notIncluded: [
          'Gas refilling or spare parts (quoted separately if needed)',
          'Ladder/stool arrangement for high wall units'
        ],
        process: [
          { step: '1. Pre-service check', desc: 'Technician inspects cooling output, amp draw, and refrigerant pressure.' },
          { step: '2. Jacket setup & jet wash', desc: 'Protective splash jacket fitted before deep-cleaning indoor coils.' },
          { step: '3. Outdoor unit & cleanup', desc: 'Condenser fins washed, drain pipe cleared, and area wiped spotless.' }
        ],
        sampleReview: { user: 'Subhajit Roy', text: 'Very neat work with protective AC cover bag. Airflow improved immediately!' }
      },
      {
        id: 'ac-foam-service',
        title: 'AC Foam-Jet Service',
        price: '₹699',
        originalPrice: '₹899',
        rating: '4.92',
        reviewsCount: '3.2K reviews',
        duration: '60 mins',
        badge: 'Most Booked',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x420/0284c7/ffffff?text=AC+Foam+Service+%E2%82%B9699',
        bookingValue: 'AC Foam-Jet Service - ₹699',
        highlights: [
          '2X deeper dust & mold removal with active foaming agent',
          'Restores peak cooling & lowers electricity consumption',
          'Covers both indoor evaporator & outdoor condenser units'
        ],
        included: [
          'Active foam spray application on indoor cooling coils',
          'High-pressure jet rinse with 100% spill-proof AC jacket',
          'Anti-bacterial blower & filter sanitization',
          'Outdoor unit jet wash & digital cooling temperature check'
        ],
        notIncluded: [
          'Refrigerant gas top-up or PCB spare replacements',
          'Core drilling or copper pipe extension'
        ],
        process: [
          { step: '1. Digital diagnosis', desc: 'Check airflow temperature, compressor load, and gas levels.' },
          { step: '2. Foam-jet deep clean', desc: 'Dense foam lifts stubborn grease & dust from evaporator fins.' },
          { step: '3. Sanitize & test run', desc: 'High-pressure rinse, blower sanitization, and post-service cooling test.' }
        ],
        sampleReview: { user: 'Rahul Chatterjee', text: 'Foam wash removed years of dust. Cooling became ice-cold within 5 minutes!' }
      },
      {
        id: 'fridge-service',
        title: 'Fridge Service Charge',
        price: '₹399',
        originalPrice: '₹499',
        rating: '4.84',
        reviewsCount: '1.4K reviews',
        duration: '45 mins',
        badge: 'All Models',
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x420/0f2942/38bdf8?text=Fridge+Service+%E2%82%B9399',
        bookingValue: 'Fridge Service Charge - ₹399',
        highlights: [
          'Single Door, Double Door, Side-by-Side & Inverter Fridges',
          'Complete cooling failure, water leakage & noise diagnosis',
          '30-day warranty on service & replaced spare parts'
        ],
        included: [
          'Compressor, relay, OLP & thermostat testing',
          'Defrost heater, sensor & fan motor inspection',
          'Door magnetic gasket & drain line check',
          'Transparent repair quote before any part replacement'
        ],
        notIncluded: [
          'Spare parts (compressor, PCB, sensor) or gas charging cost',
          'Body painting or external dent repair'
        ],
        process: [
          { step: '1. Root-cause diagnosis', desc: 'Inspect cooling coil frost pattern, compressor start, and sensors.' },
          { step: '2. Quote approval', desc: 'Technician shares fixed rate-card quote before replacing any part.' },
          { step: '3. Repair & cooling verify', desc: 'Fault resolved and cabinet temperature verified.' }
        ],
        sampleReview: { user: 'Ananya Mondal', text: 'Fixed our double-door refrigerator defrost issue on the very same day.' }
      },
      {
        id: 'washing-machine',
        title: 'Washing Machine',
        price: '₹399',
        originalPrice: '₹499',
        rating: '4.85',
        reviewsCount: '1.9K reviews',
        duration: '50 mins',
        badge: 'Front & Top',
        image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x420/0f2942/38bdf8?text=Washing+Machine+%E2%82%B9399',
        bookingValue: 'Washing Machine Service - ₹399',
        highlights: [
          'Front Load, Top Load & Semi-Automatic Washing Machines',
          'Fixes drainage errors, spin vibration, noise & power faults',
          '30-day MultiFix workmanship warranty included'
        ],
        included: [
          'Drain pump, inlet solenoid valve & pressure sensor check',
          'Drum suspension, belt & motor load inspection',
          'Error code diagnosis & minor calibration',
          'Complete spin & rinse cycle test'
        ],
        notIncluded: [
          'Spare parts (drum bearings, PCB, drain motor, inlet pipe)',
          'Plumbing tap installation'
        ],
        process: [
          { step: '1. Inspection & error scan', desc: 'Check water inlet, drainage speed, drum balance, and PCB.' },
          { step: '2. Approval & repair', desc: 'Transparent spare quote shared if parts are required.' },
          { step: '3. Full cycle test', desc: 'Run wash & high-speed spin test to verify zero noise or leaks.' }
        ],
        sampleReview: { user: 'Ashok Kumar', text: 'Solved our front-load drainage error quickly. Very polite and skilled technician.' }
      },
      {
        id: 'water-purifier',
        title: 'Water Purifier Service',
        price: '₹399',
        originalPrice: '₹499',
        rating: '4.88',
        reviewsCount: '1.1K reviews',
        duration: '45 mins',
        badge: 'RO / UV / UF',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x420/0f2942/38bdf8?text=Water+Purifier+%E2%82%B9399',
        bookingValue: 'Water Purifier Service - ₹399',
        highlights: [
          'All RO, UV, UF & Alkaline Water Purifier brands serviced',
          'Digital TDS meter water purity testing included',
          'Storage tank sanitization & leakage fixing'
        ],
        included: [
          'Input & purified water TDS level measurement',
          'Sediment & carbon filter flushing + RO membrane check',
          'Storage tank cleaning & auto-cut float valve check',
          'Pipe connector & elbow leakage inspection'
        ],
        notIncluded: [
          'New filter candles, RO membrane, UV lamp, or booster pump',
          'External pre-filter housing replacement'
        ],
        process: [
          { step: '1. TDS & flow check', desc: 'Measure raw vs purified TDS and pump pressure.' },
          { step: '2. Tank & filter service', desc: 'Sanitize storage tank and flush sediment/carbon stages.' },
          { step: '3. Taste & TDS verification', desc: 'Calibrate TDS controller for safe, sweet drinking water.' }
        ],
        sampleReview: { user: 'Farhana Khatun', text: 'Checked TDS right in front of us and fixed a slow water flow issue.' }
      },
      {
        id: 'visiting-charge',
        title: 'Visiting Charge',
        price: '₹259',
        originalPrice: '₹349',
        rating: '4.83',
        reviewsCount: '2.5K reviews',
        duration: '30 mins',
        badge: 'Checkup',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x420/1e293b/38bdf8?text=Visiting+Charge+%E2%82%B9259',
        bookingValue: 'Visiting Charge - ₹259',
        highlights: [
          'Doorstep inspection for Geyser, Chimney, Microwave, TV & Wiring',
          'Exact fault detection & upfront repair estimate',
          '30-day warranty on completed repairs'
        ],
        included: [
          'Doorstep technician visit within 60 minutes',
          'Complete electrical & component fault testing',
          'Written/verbal transparent repair quotation'
        ],
        notIncluded: [
          'Major component replacement or heavy rewiring materials'
        ],
        process: [
          { step: '1. Doorstep arrival', desc: 'Verified engineer arrives at your scheduled time slot.' },
          { step: '2. Fault diagnosis', desc: 'Pinpoints exact electrical or mechanical issue.' },
          { step: '3. Transparent quote', desc: 'Clear estimate provided before any further work.' }
        ],
        sampleReview: { user: 'Pradip Sen', text: 'Honest diagnosis for our kitchen chimney and geyser without overcharging.' }
      }
    ];// Supported Appliance Brands (Ref #11 & #12)
    const supportedBrands = [
      'LG', 'Samsung', 'Voltas', 'Daikin', 'Whirlpool', 'IFB',
      'Bosch', 'Godrej', 'Haier', 'Hitachi', 'Panasonic', 'Blue Star',
      'Kent RO', 'Aquaguard', 'AO Smith', 'Bajaj'
    ];

    // =========================================================
    // DATA 3: FLIPKART-STYLE PRODUCT STORE DATA (FIX #4)
    // =========================================================
    const flipkartProducts = [
      {
        id: 'prod-ac',
        name: '1.5 Ton 5-Star Inverter Split AC (Copper Condenser)',
        shortName: 'Air Conditioner (AC)',
        rating: '4.6',
        ratingsText: '1,420 Ratings',
        price: '₹34,990',
        mrp: '₹48,500',
        discount: '27% off',
        badge: 'Bestseller',
        shortSpec: '5-in-1 Convertible • 100% Copper • PM 2.5 Filter',
        image: 'https://images.unsplash.com/photo-1614631446501-abcf76949eca?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x450/e0f2fe/0369a1?text=Split+Inverter+AC',
        bookingValue: 'Buy New Split Inverter AC (1.5 Ton)',
        highlights: [
          '1.5 Ton Capacity — Ideal for rooms up to 180 sq.ft',
          '5-Star BEE Rating — Saves up to 25% annual electricity',
          '100% Grooved Copper Condenser with Anti-Corrosive Blue Fins',
          'Turbo Cool Mode & Stabilizer-Free Operation (130V–285V)'
        ],
        specs: [
          { label: 'Cooling Capacity', value: '5050 W (1.5 Ton)' },
          { label: 'Compressor Type', value: 'Dual Rotary Inverter' },
          { label: 'Condenser Coil', value: '100% Pure Copper' },
          { label: 'Warranty', value: '1 Yr Comprehensive + 10 Yrs Compressor' },
          { label: 'Installation', value: 'Same-Day MultiFix Pro Installation Available' }
        ]
      },
      {
        id: 'prod-fridge',
        name: '260L 3-Star Frost-Free Double Door Refrigerator',
        shortName: 'Refrigerator (Fridge)',
        rating: '4.5',
        ratingsText: '980 Ratings',
        price: '₹24,490',
        mrp: '₹32,900',
        discount: '25% off',
        badge: 'Top Rated',
        shortSpec: 'Convertible Freezer • Toughened Glass • Smart Inverter',
        image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x450/e0f2fe/0369a1?text=Double+Door+Fridge',
        bookingValue: 'Buy New Frost-Free Double Door Fridge (260L)',
        highlights: [
          '260 Litres Capacity — Best for families of 3 to 5 members',
          'Frost-Free Auto Defrost prevents ice build-up automatically',
          'Convertible Freezer converts into extra fridge space in 1 touch',
          'Toughened Glass Shelves hold heavy utensils up to 175 kg'
        ],
        specs: [
          { label: 'Total Capacity', value: '260 Litres (Double Door)' },
          { label: 'Defrost System', value: 'Frost-Free Multi Air Flow' },
          { label: 'Compressor', value: 'Smart Digital Inverter' },
          { label: 'Warranty', value: '1 Yr Product + 10 Yrs Compressor' },
          { label: 'Delivery', value: 'Free Doorstep Delivery & Demo' }
        ]
      },
      {
        id: 'prod-washer',
        name: '7 kg 5-Star Fully Automatic Front Load Washing Machine',
        shortName: 'Washing Machine',
        rating: '4.7',
        ratingsText: '1,150 Ratings',
        price: '₹26,990',
        mrp: '₹35,490',
        discount: '23% off',
        badge: 'Steam Wash',
        shortSpec: '1200 RPM Spin • Built-in Heater • Hygiene Steam',
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x450/e0f2fe/0369a1?text=Front+Load+Washer',
        bookingValue: 'Buy New Front Load Washing Machine (7 kg)',
        highlights: [
          '7 kg Capacity with Stainless Steel Honeycomb Care Drum',
          '1200 RPM High-Speed Spin for faster drying even in monsoon',
          'Built-in Water Heater & Anti-Allergen Hygiene Steam Wash',
          'Direct Drive Inverter Motor for silent, vibration-free wash'
        ],
        specs: [
          { label: 'Wash Capacity', value: '7.0 kg (Fully Automatic Front Load)' },
          { label: 'Max Spin Speed', value: '1200 RPM' },
          { label: 'Energy Rating', value: '5-Star BEE Certified' },
          { label: 'Warranty', value: '2 Yrs Comprehensive + 10 Yrs Motor' },
          { label: 'Installation', value: 'Free Inlet/Drain Setup by MultiFix' }
        ]
      },
      {
        id: 'prod-geyser',
        name: '15L 5-Star Storage Electric Water Heater (Geyser)',
        shortName: 'Geyser (Water Heater)',
        rating: '4.6',
        ratingsText: '860 Ratings',
        price: '₹6,499',
        mrp: '₹9,200',
        discount: '29% off',
        badge: 'Fast Heating',
        shortSpec: '2000W Copper Element • 8-Bar Pressure • Rust-Proof',
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=700&q=80',
        fallback: 'https://placehold.co/600x450/e0f2fe/0369a1?text=15L+Storage+Geyser',
        bookingValue: 'Buy New Storage Water Geyser (15L)',
        highlights: [
          '15 Litre Tank Capacity with Glassline Anti-Rust Coating',
          '2000W High-Efficiency Copper Heating Element for instant hot water',
          '8-Bar Pressure Rating — Suitable for high-rise buildings & pumps',
          'Triple Safety Valve + Auto Thermal Cut-Off Protection'
        ],
        specs: [
          { label: 'Tank Capacity', value: '15 Litres Vertical Storage' },
          { label: 'Rated Power', value: '2000 Watts (5-Star PUF Insulation)' },
          { label: 'Pressure Rating', value: '8 Bar Multi-Function Safety Valve' },
          { label: 'Warranty', value: '2 Yrs Product + 7 Yrs Inner Tank' },
          { label: 'Installation', value: 'Wall Mounting & Pipe Connection Available' }
        ]
      }
    ];

    // =========================================================
    // DATA 4: VIDEO REELS / CURATIONS DATA (FIX #13)
    // =========================================================
    const videoReels = [
      {
        id: 'vid-1',
        title: 'AC Foam-Jet Deep Wash',
        subtitle: 'Live indoor coil cleaning',
        duration: '0:45',
        thumbnail: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=500&q=80',
        fallback: 'https://placehold.co/400x700/0a2239/38bdf8?text=AC+Foam+Wash+Demo',
        description: 'Watch how our technician fits a 100% spill-proof splash jacket, applies active cooling coil foam, and restores icy airflow in 45 minutes.',
        bookingValue: 'AC Foam-Jet Service - ₹699'
      },
      {
        id: 'vid-2',
        title: 'Fridge Gas & Cooling Check',
        subtitle: 'Digital pressure test',
        duration: '0:38',
        thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80',
        fallback: 'https://placehold.co/400x700/0a2239/34d399?text=Fridge+Cooling+Test',
        description: 'See how MultiFix engineers inspect compressor amp load, defrost sensors, and refrigerant levels before recommending any repair.',
        bookingValue: 'Fridge Service Charge - ₹399'
      },
      {
        id: 'vid-3',
        title: 'Front-Load Drum Service',
        subtitle: 'Vibration & drain fix',
        duration: '0:52',
        thumbnail: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=500&q=80',
        fallback: 'https://placehold.co/400x700/0a2239/fbbf24?text=Washer+Drum+Service',
        description: 'Step-by-step look at drain pump filter cleaning, shock absorber inspection, and spin-cycle balancing for front & top load washers.',
        bookingValue: 'Washing Machine Service - ₹399'
      },
      {
        id: 'vid-4',
        title: 'RO Water TDS Calibration',
        subtitle: 'Pure drinking water',
        duration: '0:41',
        thumbnail: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=500&q=80',
        fallback: 'https://placehold.co/400x700/0a2239/f472b6?text=RO+Water+TDS+Check',
        description: 'Learn how we sanitize RO storage tanks, flush sediment/carbon filters, and calibrate TDS levels for healthy family hydration.',
        bookingValue: 'Water Purifier Service - ₹399'
      }
    ];

    // =========================================================
    // RENDER FUNCTIONS FOR ALL DYNAMIC GRIDS & MODALS
    // =========================================================
    function renderApplianceCategories() {
      const container = document.getElementById('appliance-category-grid');
      if (!container) return;
      container.innerHTML = applianceCategories.map(item => `
        <button 
          onclick="openBookingPage('${item.bookingVal}')" 
          class="hover-lift bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-sky-400 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition group"
        >
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} flex items-center justify-center text-xl sm:text-2xl mb-2.5 group-hover:scale-105 transition">
            <i class="fa-solid ${item.icon}"></i>
          </div>
          <span class="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded-md mb-1.5">
            ${item.eta}
          </span>
          <span class="font-bold text-xs sm:text-sm text-navy-900 leading-snug line-clamp-2">
            ${item.name}
          </span>
        </button>
      `).join('');
    }

    function renderUCServices() {
      const container = document.getElementById('uc-services-grid');
      if (!container) return;
      container.innerHTML = ucServices.map(srv => `
        <div 
          onclick="openServiceModal('${srv.id}')" 
          class="cursor-pointer hover-lift bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs flex flex-col justify-between group"
        >
          <div>
            <div class="relative aspect-[4/3] bg-slate-100 overflow-hidden">
              <img 
                src="${srv.image}" 
                onerror="this.src='${srv.fallback}'" 
                alt="${srv.title}" 
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span class="absolute top-2 left-2 bg-navy-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                ${srv.badge}
              </span>
              <button 
                type="button"
                onclick="event.stopPropagation(); openBookingPage('${srv.bookingValue}')"
                class="absolute bottom-2 right-2 bg-white hover:bg-sky-600 text-sky-700 hover:text-white border border-sky-200 font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md transition"
              >
                Add
              </button>
            </div>
            <div class="p-3 sm:p-3.5">
              <h3 class="font-display font-bold text-sm sm:text-[15px] text-navy-900 leading-snug group-hover:text-sky-600 transition">
                ${srv.title}
              </h3>
              <div class="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                <i class="fa-solid fa-star text-amber-400"></i>
                <span class="font-bold text-slate-700">${srv.rating}</span>
                <span>(${srv.reviewsCount})</span>
              </div>
              <div class="mt-2 flex items-baseline gap-1.5">
                <span class="font-display font-extrabold text-sm sm:text-base text-navy-900">${srv.price}</span>
                <span class="text-[11px] text-slate-400 line-through">${srv.originalPrice}</span>
              </div>
            </div>
          </div>
          <div class="px-3 pb-3 pt-0">
            <span class="block text-[10px] font-semibold text-sky-600 group-hover:underline">
              View Details &amp; Process &rarr;
            </span>
          </div>
        </div>
      `).join('');
    }

    function renderFlipkartProducts() {
      const container = document.getElementById('flipkart-products-grid');
      if (!container) return;
      container.innerHTML = flipkartProducts.map(prod => `
        <div 
          onclick="openProductModal('${prod.id}')" 
          class="cursor-pointer hover-lift bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs flex flex-col justify-between group"
        >
          <div>
            <!-- Product Image Box -->
            <div class="relative aspect-[4/3] bg-slate-50 overflow-hidden border-b border-slate-100">
              <img 
                src="${prod.image}" 
                onerror="this.src='${prod.fallback}'" 
                alt="${prod.shortName}" 
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span class="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
                ${prod.badge}
              </span>
            </div>

            <!-- Flipkart-style Product Info -->
            <div class="p-3.5 sm:p-4 space-y-1.5">
              <p class="text-[11px] font-bold uppercase tracking-wider text-slate-400">${prod.shortName}</p>
              <h3 class="font-semibold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-2 group-hover:text-flipkartBlue-600 transition">
                ${prod.name}
              </h3>
<!-- Flipkart Green Rating Pill -->
              <div class="flex items-center gap-1.5 pt-0.5">
                <span class="inline-flex items-center gap-1 bg-emerald-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                  <span>${prod.rating}</span>
                  <i class="fa-solid fa-star text-[8px]"></i>
                </span>
                <span class="text-[11px] text-slate-500">(${prod.ratingsText})</span>
              </div>

              <p class="text-[11px] text-slate-500 line-clamp-1 pt-0.5">${prod.shortSpec}</p>

              <!-- Price & Discount -->
              <div class="pt-1 flex flex-wrap items-baseline gap-1.5">
                <span class="font-display font-extrabold text-base sm:text-lg text-slate-900">${prod.price}</span>
                <span class="text-xs text-slate-400 line-through">${prod.mrp}</span>
                <span class="text-xs font-extrabold text-emerald-600">${prod.discount}</span>
              </div>
              <p class="text-[10px] font-semibold text-slate-500">Free doorstep delivery &amp; setup</p>
            </div>
          </div>

          <!-- Flipkart-Style Bottom Book Now CTA -->
          <div class="p-3 sm:p-3.5 pt-0">
            <button 
              type="button"
              onclick="event.stopPropagation(); openBookingPage('${prod.bookingValue}')"
              class="w-full py-2.5 px-3 rounded-xl bg-brandOrange-500 hover:bg-brandOrange-600 text-white font-extrabold text-xs sm:text-sm shadow-sm transition flex items-center justify-center gap-1.5"
            >
              <i class="fa-solid fa-bolt text-xs"></i>
              <span>Book Now</span>
            </button>
          </div>
        </div>
      `).join('');
    }

    function renderVideoReels() {
      const container = document.getElementById('video-reels-grid');
      if (!container) return;
      container.innerHTML = videoReels.map(vid => `
        <div 
          onclick="openVideoModal('${vid.id}')" 
          class="cursor-pointer group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[9/14] bg-navy-900 shadow-md border border-slate-200"
        >
          <img 
            src="${vid.thumbnail}" 
            onerror="this.src='${vid.fallback}'" 
            alt="${vid.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/15"></div>

          <!-- Top Duration Pill -->
          <span class="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            ${vid.duration}
          </span>

          <!-- Center Play Button -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 group-hover:bg-brandOrange-500 text-navy-900 group-hover:text-white flex items-center justify-center shadow-xl transition transform group-hover:scale-110">
              <i class="fa-solid fa-play text-base sm:text-lg ml-0.5"></i>
            </div>
          </div>

          <!-- Bottom Caption -->
          <div class="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-white">
            <p class="text-[10px] font-bold uppercase tracking-wider text-cyan-300">${vid.subtitle}</p>
            <h3 class="font-display font-extrabold text-sm sm:text-base leading-snug mt-0.5">${vid.title}</h3>
          </div>
        </div>
      `).join('');
    }

    // =========================================================
    // MODAL HANDLERS: FLIPKART PRODUCT DETAILS
    // =========================================================
    function openProductModal(productId) {
      const prod = flipkartProducts.find(p => p.id === productId);
      if (!prod) return;

      const body = document.getElementById('product-modal-body');
      body.innerHTML = `
        <div class="grid sm:grid-cols-12 gap-6 items-start">
          <div class="sm:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3]">
            <img src="${prod.image}" onerror="this.src='${prod.fallback}'" alt="${prod.name}" class="w-full h-full object-cover" />
          </div>
          <div class="sm:col-span-7 space-y-2.5">
            <span class="inline-block text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
              ${prod.badge} &bull; In Stock
            </span>
            <h3 class="font-display font-extrabold text-lg sm:text-xl text-slate-900 leading-snug">${prod.name}</h3>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1 bg-emerald-600 text-white text-xs font-extrabold px-2 py-0.5 rounded">
                ${prod.rating} <i class="fa-solid fa-star text-[9px]"></i>
              </span>
              <span class="text-xs text-slate-500">${prod.ratingsText} &amp; Verified Buyers</span>
            </div>
            <div class="pt-1 flex items-baseline gap-2.5">
              <span class="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">${prod.price}</span>
              <span class="text-sm text-slate-400 line-through">${prod.mrp}</span>
              <span class="text-sm font-extrabold text-emerald-600">${prod.discount}</span>
            </div>
            <p class="text-xs text-slate-500">Inclusive of all taxes &bull; Doorstep installation by MultiFix engineers</p>
          </div>
        </div>

        <!-- Highlights -->
        <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">Key Highlights</h4>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-700">
            ${prod.highlights.map(h => `<li class="flex items-start gap-2"><i class="fa-solid fa-circle-check text-emerald-600 mt-0.5 shrink-0"></i><span>${h}</span></li>`).join('')}
          </ul>
        </div>

        <!-- Technical Specifications Table -->
        <div>
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">Technical Specifications</h4>
          <div class="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200 text-xs sm:text-sm">
            ${prod.specs.map(s => `
              <div class="grid grid-cols-12 px-4 py-2.5 bg-white">
                <span class="col-span-5 text-slate-500 font-medium">${s.label}</span>
                <span class="col-span-7 text-slate-900 font-semibold">${s.value}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Sticky Bottom Book Now Button -->
        <div class="pt-2 flex flex-col sm:flex-row gap-3">
          <button 
            onclick="hideProductModal(); openBookingPage('${prod.bookingValue}')" 
            class="w-full py-3.5 px-6 rounded-xl bg-brandOrange-500 hover:bg-brandOrange-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-bolt"></i>
            <span>Book Now — ${prod.price}</span>
          </button>
        </div>
      `;

      document.getElementById('product-detail-modal').classList.remove('hidden');
    }

    function hideProductModal() {
      document.getElementById('product-detail-modal').classList.add('hidden');
    }

    function closeProductModal(e) {
      if (e.target.id === 'product-detail-modal') hideProductModal();
    }
// =========================================================
    // MODAL HANDLERS: URBAN COMPANY SERVICE DETAIL SHEET (REF #11 & #12)
    // =========================================================
    function openServiceModal(serviceId) {
      const srv = ucServices.find(s => s.id === serviceId);
      if (!srv) return;

      const body = document.getElementById('service-modal-body');
      body.innerHTML = `
        <!-- Top Banner Image -->
        <div class="relative h-48 sm:h-56 bg-slate-900">
          <img src="${srv.image}" onerror="this.src='${srv.fallback}'" alt="${srv.title}" class="w-full h-full object-cover opacity-85" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"></div>
          <div class="absolute bottom-4 left-5 right-5 text-white flex flex-wrap items-end justify-between gap-3">
            <div>
              <span class="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-sky-500 px-2.5 py-0.5 rounded-md mb-1">
                ${srv.badge} &bull; ${srv.duration}
              </span>
              <h3 class="font-display font-extrabold text-2xl sm:text-3xl">${srv.title}</h3>
              <p class="text-xs text-slate-200 mt-0.5">★ ${srv.rating} (${srv.reviewsCount})</p>
            </div>
            <div class="text-right">
              <span class="block font-display font-extrabold text-2xl text-cyan-300">${srv.price}</span>
              <span class="text-xs text-slate-300 line-through">${srv.originalPrice}</span>
            </div>
          </div>
        </div>

        <div class="p-5 sm:p-6 space-y-6">
          <!-- Primary Book CTA + 30-Day Warranty Banner -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <i class="fa-solid fa-shield-halved text-lg"></i>
              </div>
              <div>
                <p class="font-extrabold text-sm text-navy-900">30-Day MultiFix Service Warranty</p>
                <p class="text-xs text-slate-600">Free re-visit if the same issue recurs within 30 days</p>
              </div>
            </div>
            <button 
              onclick="hideServiceModal(); openBookingPage('${srv.bookingValue}')" 
              class="w-full sm:w-auto shrink-0 px-5 py-2.5 rounded-xl bg-brandOrange-500 hover:bg-brandOrange-600 text-white font-extrabold text-xs sm:text-sm shadow-md transition"
            >
              Book Now (${srv.price})
            </button>
          </div>

          <!-- Highlights -->
          <div>
            <h4 class="font-display font-bold text-sm uppercase tracking-wider text-navy-900 mb-2.5">Service Highlights</h4>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-700">
              ${srv.highlights.map(h => `<li class="flex items-start gap-2"><i class="fa-solid fa-sparkles text-sky-500 mt-0.5"></i><span>${h}</span></li>`).join('')}
            </ul>
          </div>

          <!-- What's Included & Excluded -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
              <h4 class="font-bold text-xs uppercase tracking-wider text-emerald-700 mb-2.5">What's Included</h4>
              <ul class="space-y-2 text-xs text-slate-700">
                ${srv.included.map(inc => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-600 mt-0.5 shrink-0"></i><span>${inc}</span></li>`).join('')}
              </ul>
            </div>
            <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
              <h4 class="font-bold text-xs uppercase tracking-wider text-rose-700 mb-2.5">What's Not Included</h4>
              <ul class="space-y-2 text-xs text-slate-700">
                ${srv.notIncluded.map(exc => `<li class="flex items-start gap-2"><i class="fa-solid fa-xmark text-rose-500 mt-0.5 shrink-0"></i><span>${exc}</span></li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Our Process -->
          <div>
            <h4 class="font-display font-bold text-sm uppercase tracking-wider text-navy-900 mb-3">Our Step-by-Step Process</h4>
            <div class="space-y-3">
              ${srv.process.map(p => `
                <div class="p-3.5 rounded-2xl border border-slate-200 bg-white flex items-start gap-3">
                  <span class="w-7 h-7 rounded-full bg-sky-100 text-sky-700 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    <i class="fa-solid fa-wrench"></i>
                  </span>
                  <div>
                    <p class="font-bold text-xs sm:text-sm text-navy-900">${p.step}</p>
                    <p class="text-xs text-slate-600 mt-0.5">${p.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- We Service All Brands -->
          <div>
            <h4 class="font-display font-bold text-sm uppercase tracking-wider text-navy-900 mb-2.5">We Service All Major Brands</h4>
            <div class="grid grid-cols-4 gap-2">
              ${supportedBrands.map(b => `
                <div class="py-2 px-2 rounded-xl border border-slate-200 bg-slate-50 text-center font-bold text-[11px] text-slate-700">
                  ${b}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Verified Customer Review Snippet -->
          <div class="bg-navy-900 text-white rounded-2xl p-4">
            <div class="flex items-center justify-between text-xs mb-1.5">
              <span class="font-bold text-cyan-300">Top Verified Review</span>
              <span class="text-amber-400">★★★★★</span>
            </div>
            <p class="text-xs text-slate-200 italic">"${srv.sampleReview.text}"</p>
            <p class="text-[11px] font-bold text-white mt-2">— ${srv.sampleReview.user}</p>
          </div>

          <button 
            onclick="hideServiceModal(); openBookingPage('${srv.bookingValue}')" 
            class="w-full py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-sky-600 text-white font-extrabold text-sm shadow-lg transition"
          >
            Proceed to Book ${srv.title} (${srv.price}) &rarr;
          </button>
        </div>
      `;

      document.getElementById('service-detail-modal').classList.remove('hidden');
    }

    function hideServiceModal() {
      document.getElementById('service-detail-modal').classList.add('hidden');
    }

    function closeServiceModal(e) {
      if (e.target.id === 'service-detail-modal') hideServiceModal();
    }

    // =========================================================
    // MODAL HANDLERS: VIDEO REEL PREVIEW (REF #13)
    // =========================================================
    function openVideoModal(videoId) {
      const vid = videoReels.find(v => v.id === videoId);
      if (!vid) return;

      document.getElementById('video-modal-title').textContent = vid.title;
      document.getElementById('video-modal-content').innerHTML = `
        <div class="relative rounded-2xl overflow-hidden aspect-[9/12] bg-black border border-white/10">
          <img src="${vid.thumbnail}" onerror="this.src='${vid.fallback}'" alt="${vid.title}" class="w-full h-full object-cover opacity-80" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-4">
            <span class="self-start inline-flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
              <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span> MultiFix Live Demo
            </span>
            <div class="space-y-2">
              <p class="text-xs text-cyan-300 font-bold uppercase">${vid.subtitle} (${vid.duration})</p>
              <p class="text-xs sm:text-sm text-slate-100 leading-relaxed">${vid.description}</p>
            </div>
          </div>
        </div>
        <button 
          onclick="hideVideoModal(); openBookingPage('${vid.bookingValue}')" 
          class="w-full py-3 px-4 rounded-xl bg-brandOrange-500 hover:bg-brandOrange-600 text-white font-extrabold text-xs sm:text-sm transition"
        >
          Book This Service Now &rarr;
        </button>
      `;

      document.getElementById('video-reel-modal').classList.remove('hidden');
    }

    function hideVideoModal() {
      document.getElementById('video-reel-modal').classList.add('hidden');
    }

    function closeVideoModal(e) {
      if (e.target.id === 'video-reel-modal') hideVideoModal();
    }

    // =========================================================
    // HERO BANNER 3-SLIDE AUTO-ROTATOR (EVERY 3 SECONDS)
    // =========================================================
    let currentHeroIndex = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    let heroInterval = null;

    function updateHeroCarousel(index) {
      currentHeroIndex = (index + heroSlides.length) % heroSlides.length;

      heroSlides.forEach((slide, idx) => {
        if (idx === currentHeroIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      heroDots.forEach((dot, idx) => {
        if (idx === currentHeroIndex) {
          dot.classList.remove('w-2', 'bg-white/30');
          dot.classList.add('w-7', 'bg-cyan-400');
        } else {
          dot.classList.remove('w-7', 'bg-cyan-400');
          dot.classList.add('w-2', 'bg-white/30');
        }
      });
    }function nextHeroSlide() {
      updateHeroCarousel(currentHeroIndex + 1);
      resetHeroTimer();
    }

    function prevHeroSlide() {
      updateHeroCarousel(currentHeroIndex - 1);
      resetHeroTimer();
    }

    function goToHeroSlide(index) {
      updateHeroCarousel(index);
      resetHeroTimer();
    }

    function startHeroTimer() {
      heroInterval = setInterval(() => {
        updateHeroCarousel(currentHeroIndex + 1);
      }, 3000);
    }

    function resetHeroTimer() {
      clearInterval(heroInterval);
      startHeroTimer();
    }

    // =========================================================
    // CUSTOMER FEEDBACK AUTO-ROTATOR (HOME + BOOKING PAGE)
    // =========================================================
    const customerFeedbacks = [
      {
        text: '"Booked the ₹699 AC Foam-Jet Service and my split AC is cooling like brand new again! The MultiFix technician arrived within 50 minutes and kept everything spotless."',
        author: '— Rahul Chatterjee, Bhebia',
        service: 'AC Foam-Jet Service (₹699)'
      },
      {
        text: '"Our double-door refrigerator stopped cooling suddenly. MultiFix diagnosed the sensor issue for just ₹399 service charge and fixed it the very same afternoon."',
        author: '— Ananya Mondal, Deganga',
        service: 'Fridge Service Charge (₹399)'
      },
      {
        text: '"Sold our old non-working washing machine and damaged AC through MultiFix Scrap Pickup. They came right to our doorstep, lifted everything safely, and paid instantly."',
        author: '— Subrata Das, Barasat',
        service: 'Old Appliance Scrap Pickup'
      },
      {
        text: '"Very polite staff and honest pricing. We also purchased a new 15L geyser from MultiFix and got same-day wall installation with official warranty."',
        author: '— Farhana Khatun, Bhebia Chowmatha',
        service: 'New Storage Geyser & Installation'
      }
    ];

    let currentFeedbackIndex = 0;
    let feedbackInterval = null;

    function renderFeedback(index) {
      currentFeedbackIndex = (index + customerFeedbacks.length) % customerFeedbacks.length;
      const item = customerFeedbacks[currentFeedbackIndex];

      const homeCard = document.getElementById('home-feedback-card');
      const bookingCard = document.getElementById('booking-feedback-card');
      const fbDots = document.querySelectorAll('.fb-dot');

      if (homeCard) homeCard.style.opacity = '0.25';
      if (bookingCard) bookingCard.style.opacity = '0.25';

      setTimeout(() => {
        // Update Home Feedback Card
        const hText = document.getElementById('home-feedback-text');
        const hAuthor = document.getElementById('home-feedback-author');
        const hBadge = document.getElementById('home-feedback-badge');
        if (hText) hText.textContent = item.text;
        if (hAuthor) hAuthor.textContent = item.author;
        if (hBadge) hBadge.textContent = item.service;
// Update Booking Page Feedback Card
        const bText = document.getElementById('booking-feedback-text');
        const bAuthor = document.getElementById('booking-feedback-author');
        const bBadge = document.getElementById('booking-feedback-badge');
        if (bText) bText.textContent = item.text;
        if (bAuthor) bAuthor.textContent = item.author;
        if (bBadge) bBadge.textContent = item.service;

        fbDots.forEach((dot, idx) => {
          if (idx === currentFeedbackIndex) {
            dot.classList.remove('w-2', 'bg-white/30');
            dot.classList.add('w-7', 'bg-cyan-400');
          } else {
            dot.classList.remove('w-7', 'bg-cyan-400');
            dot.classList.add('w-2', 'bg-white/30');
          }
        });

        if (homeCard) homeCard.style.opacity = '1';
        if (bookingCard) bookingCard.style.opacity = '1';
      }, 180);
    }

    function nextFeedback() {
      renderFeedback(currentFeedbackIndex + 1);
      resetFeedbackTimer();
    }

    function prevFeedback() {
      renderFeedback(currentFeedbackIndex - 1);
      resetFeedbackTimer();
    }

    function goToFeedback(idx) {
      renderFeedback(idx);
      resetFeedbackTimer();
    }

    function startFeedbackTimer() {
      feedbackInterval = setInterval(() => {
        renderFeedback(currentFeedbackIndex + 1);
      }, 3500);
    }

    function resetFeedbackTimer() {
      clearInterval(feedbackInterval);
      startFeedbackTimer();
    }

    // =========================================================
    // PAGE NAVIGATION & BOOKING FORM HANDLING
    // =========================================================
    function switchPage(pageName) {
      const homeView = document.getElementById('home-view');
      const bookingView = document.getElementById('booking-page-view');
      const backBtn = document.getElementById('nav-back-home-btn');

      if (pageName === 'booking') {
        homeView.classList.add('hidden');
        bookingView.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        backBtn.classList.add('inline-flex');
      } else {
        bookingView.classList.add('hidden');
        homeView.classList.remove('hidden');
        backBtn.classList.add('hidden');
        backBtn.classList.remove('inline-flex');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function openBookingPage(preselectedService = '') {
      switchPage('booking');
      const selectEl = document.getElementById('service-select');
      if (preselectedService && selectEl) {
        for (let i = 0; i < selectEl.options.length; i++) {
          if (selectEl.options[i].value === preselectedService) {
            selectEl.selectedIndex = i;
            break;
          }
        }
      }
    }

    function navigateToSection(pageName, sectionId) {
      switchPage(pageName);
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }

    function toggleMobileMenu() {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    }

    function handleBookingSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('customer-name').value.trim();
      const phone = document.getElementById('customer-phone').value.trim();
      const service = document.getElementById('service-select').value;
      const pincode = document.getElementById('customer-pincode').value.trim();
      const address = document.getElementById('customer-address').value.trim();

      const summaryEl = document.getElementById('modal-summary-text');
      summaryEl.innerHTML = `
        Thank you, <strong>${escapeHtml(name)}</strong>! Your booking for 
        <span class="text-sky-700 font-bold">${escapeHtml(service)}</span> at 
        <strong>${escapeHtml(address)} (${escapeHtml(pincode)})</strong> has been received. 
        Our MultiFix coordinator will call you shortly on <strong>${escapeHtml(phone)}</strong>.
      `;

      document.getElementById('confirmation-modal').classList.remove('hidden');
      document.getElementById('booking-form').reset();
    }

    function closeModalAndGoHome() {
      document.getElementById('confirmation-modal').classList.add('hidden');
      switchPage('home');
    }
function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    // Initialize Grids & Auto-Rotators on Load
    window.addEventListener('DOMContentLoaded', () => {
      renderApplianceCategories();
      renderUCServices();
      renderFlipkartProducts();
      renderVideoReels();
      startHeroTimer();
      startFeedbackTimer();
    });