// script.js
const products = [
  {
    name: "Split Inverter AC (1.5 Ton)",
    price: "₹32,990",
    img: "https://images.unsplash.com/photo-1614631446501-abcf76949eca?w=500",
    details: "5-Star Energy Saving Copper Condenser Split AC with Free Standard Installation & 1-Year Comprehensive Warranty."
  },
  {
    name: "Double Door Refrigerator (260L)",
    price: "₹24,490",
    img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500",
    details: "Frost-Free Smart Inverter Refrigerator with Convertible Freezer and 10-Year Compressor Warranty."
  },
  {
    name: "Front Load Washing Machine (7kg)",
    price: "₹26,990",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500",
    details: "Fully Automatic Front Load Washer with In-Built Heater, Hygiene Steam, and Silent Inverter Motor."
  },
  {
    name: "Storage Water Geyser (15L)",
    price: "₹6,490",
    img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500",
    details: "5-Star Rated Rust-Proof Tank Water Heater with Auto Thermal Cut-off & Free Wall Mounting."
  }
];

const services = [
  {
    name: "AC Service",
    price: "₹459",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500",
    details: "Includes indoor filter & cooling coil cleaning, drain tray flush, gas pressure check, and 30-day warranty."
  },
  {
    name: "AC Foam Service",
    price: "₹699",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500",
    details: "Deep foam-jet wash for indoor & outdoor units, blower sanitization, and 2X better cooling performance."
  },
  {
    name: "Fridge Service Charge",
    price: "₹399",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
    details: "Complete cooling checkup, thermostat & relay testing, gas leak inspection, and 30-day service warranty."
  },
  {
    name: "Washing Machine Service",
    price: "₹399",
    img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500",
    details: "Drum spin check, drain pump cleaning, motor & PCB diagnosis for Top & Front load machines."
  },
  {
    name: "Water Purifier Service",
    price: "₹399",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500",
    details: "Complete RO/UV filter checkup, TDS level calibration, membrane inspection, and leakage repair."
  },
  {
    name: "Visiting Charge",
    price: "₹259",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500",
    details: "Doorstep engineer inspection & exact repair quote. Adjusted in final bill if you proceed with repair."
  }
];

function renderCards() {
  const prodContainer = document.getElementById("product-list");
  if (prodContainer) {
    products.forEach((p, index) => {
      prodContainer.innerHTML += `
        <div class="item-card" onclick="showDetails('product', ${index})">
          <img src="${p.img}" alt="${p.name}">
          <h4>${p.name}</h4>
          <div class="price-tag">${p.price}</div>
          <button class="book-btn" onclick="event.stopPropagation(); openBooking('${p.name} (${p.price})')">Book Now</button>
        </div>
      `;
    });
  }

  const servContainer = document.getElementById("service-list");
  if (servContainer) {
    services.forEach((s, index) => {
      servContainer.innerHTML += `
        <div class="item-card" onclick="showDetails('service', ${index})">
          <img src="${s.img}" alt="${s.name}">
          <h4>${s.name}</h4>
          <div class="price-tag">${s.price}</div>
          <button class="book-btn" onclick="event.stopPropagation(); openBooking('${s.name} (${s.price})')">Book Service</button>
        </div>
      `;
    });
  }
}
renderCards();

const banners = [
  {
    title: "Appliance Repair at Your Doorstep",
    desc: "Fast, reliable repair for AC, Refrigerator, Washing Machine & Geyser with 30-day warranty.",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600"
  },
  {
    title: "Buy Brand New Home Appliances",
    desc: "Best deals on Inverter ACs, Double Door Fridges, Washing Machines & Geysers.",
    img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600"
  },
  {
    title: "Sell Old & Damaged Appliances",
    desc: "Get instant cash or exchange discount for old, broken, or dead home electronics.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600"
  }
];
let bannerIndex = 0;
setInterval(() => {
  bannerIndex = (bannerIndex + 1) % banners.length;
  const bt = document.getElementById("banner-title");
  const bd = document.getElementById("banner-desc");
  const bi = document.getElementById("banner-img");
  if (bt && bd && bi) {
    bt.innerText = banners[bannerIndex].title;
    bd.innerText = banners[bannerIndex].desc;
    bi.src = banners[bannerIndex].img;
  }
}, 3000);

const feedbacks = [
  { text: '"Very fast AC foam service! Cooling improved immediately. Highly recommended."', author: "— Rahul Sharma ⭐⭐⭐⭐⭐" },
  { text: '"Transparent rate card and polite technician. Fixed my washing machine in 40 minutes."', author: "— Priya Das ⭐⭐⭐⭐⭐" },
  { text: '"Sold my old broken fridge at a great price. Instant UPI payment at my doorstep!"', author: "— Amitava Roy ⭐⭐⭐⭐⭐" }
];
let fbIndex = 0;
setInterval(() => {
  fbIndex = (fbIndex + 1) % feedbacks.length;
  const ft = document.getElementById("feedback-text");
  const fa = document.getElementById("feedback-author");
  if (ft && fa) {
    ft.innerText = feedbacks[fbIndex].text;
    fa.innerText = feedbacks[fbIndex].author;
  }
}, 3500);

function showDetails(type, index) {
  const item = type === 'product' ? products[index] : services[index];
  document.getElementById("modal-title").innerText = item.name;
  document.getElementById("modal-price").innerText = item.price;
  document.getElementById("modal-desc").innerText = item.details;
  document.getElementById("modal-book-btn").onclick = () => {
    closeModal();
    openBooking(`${item.name} (${item.price})`);
  };
  document.getElementById("detail-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("detail-modal").style.display = "none";
}

function openBooking(serviceName) {
  document.getElementById("cust-service").value = serviceName;
  document.getElementById("booking-section").scrollIntoView({ behavior: "smooth" });
}

function submitBooking(e) {
  e.preventDefault();
  const name = document.getElementById("cust-name").value;
  const service = document.getElementById("cust-service").value;
  alert(`Thank you, ${name}! Your booking for "${service}" has been received. Our team will contact you shortly.`);
  e.target.reset();
}
