// ============================================
// NexaHome - Smart Home Appliances Store
// Core JavaScript Application
// ============================================

// ─── Product Data ───────────────────────────
const products = [
  {
    id: 1, name: "SmartChef Microwave Oven", category: "kitchen", brand: "NexaHome",
    price: 15999, originalPrice: 22999, discount: 30, rating: 4.5, reviews: 2847,
    image: "images/product-1.jpg",
    icon: "fa-fire-burner", gradient: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
    badge: "Bestseller", color: "#ff6b35",
    description: "Advanced 32L convection microwave with smart sensors, auto-cook menus, and stainless steel cavity for even heating.",
    features: ["32L Capacity", "Auto Cook Menus", "Smart Sensor Technology", "Stainless Steel Cavity", "Child Lock", "Energy Efficient"]
  },
  {
    id: 2, name: "CrispMaster Air Fryer 6L", category: "kitchen", brand: "NexaHome",
    price: 8999, originalPrice: 14999, discount: 40, rating: 4.6, reviews: 4213,
    image: "images/product-2.jpg",
    icon: "fa-fire-flame-curved", gradient: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
    badge: "Trending", color: "#e74c3c",
    description: "Digital air fryer with 360° rapid air circulation, 8 preset programs, and transparent viewing window.",
    features: ["6L Large Capacity", "360° Air Circulation", "8 Preset Programs", "Digital Touch Panel", "Non-stick Basket", "Auto Shut-off"]
  },
  {
    id: 3, name: "QuickBoil Electric Kettle", category: "kitchen", brand: "NexaHome",
    price: 2499, originalPrice: 3999, discount: 37, rating: 4.3, reviews: 1502,
    image: "images/product-3.jpg",
    icon: "fa-mug-hot", gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
    badge: "", color: "#f39c12",
    description: "1.8L stainless steel electric kettle with rapid boil technology, auto shut-off, and cool-touch handle.",
    features: ["1.8L Capacity", "Rapid Boil", "Auto Shut-off", "Cool-touch Handle", "360° Swivel Base", "Boil-dry Protection"]
  },
  {
    id: 4, name: "InductiMax Cooktop Pro", category: "kitchen", brand: "NexaHome",
    price: 4999, originalPrice: 7999, discount: 37, rating: 4.4, reviews: 1134,
    image: "images/product-4.jpg",
    icon: "fa-bolt", gradient: "linear-gradient(135deg, #d35400 0%, #e74c3c 100%)",
    badge: "", color: "#d35400",
    description: "2100W induction cooktop with crystal glass panel, 7 cooking modes, and preset timer function.",
    features: ["2100W Power", "Crystal Glass Panel", "7 Cooking Modes", "Preset Timer", "Voltage Regulator", "Touch Controls"]
  },
  {
    id: 5, name: "BrewMaster Coffee Machine", category: "kitchen", brand: "NexaHome",
    price: 19999, originalPrice: 29999, discount: 33, rating: 4.7, reviews: 893,
    image: "images/product-5.jpg",
    icon: "fa-mug-saucer", gradient: "linear-gradient(135deg, #8b4513 0%, #a0522d 100%)",
    badge: "Premium", color: "#8b4513",
    description: "15-bar espresso machine with built-in grinder, milk frother, and programmable brew strength.",
    features: ["15 Bar Pressure", "Built-in Grinder", "Milk Frother", "Programmable Strength", "Large Water Tank", "Auto Clean"]
  },
  {
    id: 6, name: "BlendPro Smart Blender", category: "kitchen", brand: "NexaHome",
    price: 6999, originalPrice: 9999, discount: 30, rating: 4.2, reviews: 2134,
    image: "images/product-6.jpg",
    icon: "fa-blender", gradient: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
    badge: "", color: "#27ae60",
    description: "1200W high-performance blender with smart speed control, pulse function, and self-cleaning mode.",
    features: ["1200W Motor", "Smart Speed Control", "Pulse Function", "Self-Cleaning", "BPA-Free Jar", "Stainless Blades"]
  },
  {
    id: 7, name: "Arctic Breeze Smart AC 1.5T", category: "cooling", brand: "NexaHome",
    price: 38999, originalPrice: 54999, discount: 29, rating: 4.6, reviews: 3412,
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=600&h=450&fit=crop",
    icon: "fa-snowflake", gradient: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    badge: "Bestseller", color: "#3498db",
    description: "Wi-Fi enabled inverter split AC with 5-star energy rating, PM2.5 filter, and voice control support.",
    features: ["1.5 Ton Capacity", "5-Star Rating", "Wi-Fi Enabled", "PM2.5 Filter", "Voice Control", "Inverter Technology"]
  },
  {
    id: 8, name: "SmartBreeze Tower Fan", category: "cooling", brand: "NexaHome",
    price: 5999, originalPrice: 8999, discount: 33, rating: 4.1, reviews: 924,
    image: "https://images.unsplash.com/photo-1617375401079-4a4c215e7264?w=600&h=450&fit=crop",
    icon: "fa-fan", gradient: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
    badge: "", color: "#1abc9c",
    description: "Bladeless tower fan with 12-speed settings, remote control, sleep timer, and ultra-quiet operation.",
    features: ["Bladeless Design", "12 Speed Settings", "Remote Control", "Sleep Timer", "Ultra-quiet", "Oscillation 80°"]
  },
  {
    id: 9, name: "Smart Air Purifier Pro", category: "cooling", brand: "NexaHome",
    price: 12999, originalPrice: 19999, discount: 35, rating: 4.5, reviews: 1847,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=450&fit=crop",
    icon: "fa-wind", gradient: "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
    badge: "New", color: "#9b59b6",
    description: "HEPA H13 air purifier with real-time AQI display, smart auto mode, and coverage up to 600 sq.ft.",
    features: ["HEPA H13 Filter", "Real-time AQI", "Smart Auto Mode", "600 sq.ft Coverage", "Sleep Mode", "Filter Life Indicator"]
  },
  {
    id: 10, name: "RoboClean X500 Robot Vacuum", category: "cleaning", brand: "NexaHome",
    price: 24999, originalPrice: 39999, discount: 37, rating: 4.7, reviews: 5124,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop",
    icon: "fa-robot", gradient: "linear-gradient(135deg, #00b894 0%, #00cec9 100%)",
    badge: "Trending", color: "#00b894",
    description: "LiDAR navigation robot vacuum with mopping function, 5000Pa suction, and app scheduling.",
    features: ["LiDAR Navigation", "5000Pa Suction", "Mop & Vacuum", "App Control", "Auto-recharge", "Multi-floor Mapping"]
  },
  {
    id: 11, name: "CycloneVac Cordless Vacuum", category: "cleaning", brand: "NexaHome",
    price: 14999, originalPrice: 22999, discount: 35, rating: 4.4, reviews: 2312,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&h=450&fit=crop",
    icon: "fa-broom", gradient: "linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)",
    badge: "", color: "#0984e3",
    description: "Lightweight cordless stick vacuum with 45-min runtime, HEPA filtration, and LED floor nozzle.",
    features: ["45-min Runtime", "HEPA Filtration", "LED Nozzle", "Wall Mount", "Lightweight 2.5kg", "Detachable Battery"]
  },
  {
    id: 12, name: "AquaWash Smart Dishwasher", category: "cleaning", brand: "NexaHome",
    price: 42999, originalPrice: 59999, discount: 28, rating: 4.3, reviews: 782,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=450&fit=crop",
    icon: "fa-faucet-drip", gradient: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)",
    badge: "Premium", color: "#6c5ce7",
    description: "14-place smart dishwasher with intensive wash, half-load option, and steam drying technology.",
    features: ["14 Place Settings", "Steam Drying", "Half-load Option", "Intensive Wash", "Delay Start", "Water Softener"]
  },
  {
    id: 13, name: "FrostFree Smart Fridge 650L", category: "appliances", brand: "NexaHome",
    price: 45999, originalPrice: 65999, discount: 30, rating: 4.6, reviews: 4723,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=450&fit=crop",
    icon: "fa-temperature-low", gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 100%)",
    badge: "Bestseller", color: "#636e72",
    description: "Side-by-side frost-free refrigerator with inverter compressor, water dispenser, and smart diagnosis.",
    features: ["650L Capacity", "Inverter Compressor", "Water Dispenser", "Smart Diagnosis", "Door Alarm", "Holiday Mode"]
  },
  {
    id: 14, name: "TurboWash Pro Washer 8kg", category: "appliances", brand: "NexaHome",
    price: 32999, originalPrice: 49999, discount: 34, rating: 4.5, reviews: 3241,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&h=450&fit=crop",
    icon: "fa-water", gradient: "linear-gradient(135deg, #0652DD 0%, #1B1464 100%)",
    badge: "", color: "#0652DD",
    description: "Front-load washing machine with steam wash, AI smart control, and 14 wash programs.",
    features: ["8kg Capacity", "Steam Wash", "AI Smart Control", "14 Programs", "Quick Wash 15min", "Inverter Motor"]
  },
  {
    id: 15, name: "AquaPure RO+UV Purifier", category: "appliances", brand: "NexaHome",
    price: 18999, originalPrice: 27999, discount: 32, rating: 4.4, reviews: 1623,
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&h=450&fit=crop",
    icon: "fa-droplet", gradient: "linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)",
    badge: "", color: "#00b4d8",
    description: "8-stage RO+UV+UF water purifier with mineral cartridge, 10L tank, and TDS controller.",
    features: ["8-Stage Purification", "RO+UV+UF", "Mineral Cartridge", "10L Tank", "TDS Controller", "Filter Alert"]
  },
  {
    id: 16, name: "CrispBake Smart Toaster Oven", category: "kitchen", brand: "NexaHome",
    price: 7999, originalPrice: 11999, discount: 33, rating: 4.3, reviews: 1245,
    image: "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=600&h=450&fit=crop",
    icon: "fa-bread-slice", gradient: "linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)",
    badge: "", color: "#fdcb6e",
    description: "25L digital toaster oven with convection, rotisserie, and 12 auto-cook presets.",
    features: ["25L Capacity", "Convection Mode", "Rotisserie", "12 Auto Presets", "Crumb Tray", "Interior Light"]
  }
];

const categories = [
  { id: "all", name: "All Products", icon: "fa-border-all", count: products.length },
  { id: "kitchen", name: "Kitchen", icon: "fa-utensils", count: products.filter(p => p.category === "kitchen").length },
  { id: "cooling", name: "Cooling & Comfort", icon: "fa-snowflake", count: products.filter(p => p.category === "cooling").length },
  { id: "cleaning", name: "Cleaning", icon: "fa-broom", count: products.filter(p => p.category === "cleaning").length },
  { id: "appliances", name: "Major Appliances", icon: "fa-house-chimney", count: products.filter(p => p.category === "appliances").length }
];

// ─── Cart Management ────────────────────────
function getCart() {
  return JSON.parse(localStorage.getItem("nexahome_cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("nexahome_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  showToast("Added to cart!");
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    if (qty <= 0) {
      removeFromCart(productId);
    } else {
      item.qty = qty;
      saveCart(cart);
    }
  }
}

function getCartTotal() {
  const cart = getCart();
  let total = 0, originalTotal = 0, items = 0;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) {
      total += product.price * item.qty;
      originalTotal += product.originalPrice * item.qty;
      items += item.qty;
    }
  });
  return { total, originalTotal, savings: originalTotal - total, items };
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  });
}

// ─── Toast Notifications ────────────────────
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ─── Format Currency ────────────────────────
function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

// ─── Star Rating HTML ───────────────────────
function renderStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '<i class="fa-solid fa-star"></i>';
    else if (i - rating < 1) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    else html += '<i class="fa-regular fa-star"></i>';
  }
  return html;
}

function formatReviews(num) {
  return num.toLocaleString("en-IN");
}

// ─── Render Product Cards ───────────────────
function renderProductCard(product) {
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}" onclick="openProductModal(${product.id})">
      <div class="product-image" style="background: ${product.gradient}">
        ${product.image
          ? `<img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
             <i class="fa-solid ${product.icon} product-icon" style="display:none;"></i>`
          : `<i class="fa-solid ${product.icon} product-icon"></i>`
        }
        ${product.badge ? `<span class="product-badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ""}
        <span class="product-discount">-${product.discount}%</span>
        <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
      <div class="product-info">
        <div class="product-rating">
          <div class="stars">${renderStars(product.rating)}</div>
          <span class="rating-text">${product.rating} (${formatReviews(product.reviews)})</span>
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-brand">${product.brand}</p>
        <div class="product-pricing">
          <span class="product-price">${formatPrice(product.price)}</span>
          <span class="product-original-price">${formatPrice(product.originalPrice)}</span>
          <span class="product-save">Save ${formatPrice(product.originalPrice - product.price)}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn btn-accent btn-buy" onclick="event.stopPropagation(); buyNow(${product.id})">
            <i class="fa-solid fa-bolt"></i> Buy Now
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = productList.map(renderProductCard).join("");
}

// ─── Filter & Search ────────────────────────
let activeCategory = "all";
let searchQuery = "";

function filterProducts() {
  let filtered = [...products];
  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
  return filtered;
}

function handleCategoryFilter(categoryId) {
  activeCategory = categoryId;
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === categoryId);
  });
  renderProducts("products-grid", filterProducts());
  animateCards();
}

function handleSearch(query) {
  searchQuery = query;
  renderProducts("products-grid", filterProducts());
  animateCards();
}

// ─── Product Modal ──────────────────────────
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeProductModal()"></div>
    <div class="modal-content">
      <button class="modal-close" onclick="closeProductModal()"><i class="fa-solid fa-xmark"></i></button>
      <div class="modal-body">
        <div class="modal-image" style="background: ${product.gradient}">
          ${product.image
            ? `<img src="${product.image}" alt="${product.name}" class="modal-product-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
               <i class="fa-solid ${product.icon} modal-product-icon" style="display:none;"></i>`
            : `<i class="fa-solid ${product.icon} modal-product-icon"></i>`
          }
          ${product.badge ? `<span class="product-badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ""}
        </div>
        <div class="modal-details">
          <span class="modal-brand">${product.brand}</span>
          <h2 class="modal-title">${product.name}</h2>
          <div class="modal-rating">
            <div class="stars">${renderStars(product.rating)}</div>
            <span>${product.rating} | ${formatReviews(product.reviews)} Reviews</span>
          </div>
          <div class="modal-pricing">
            <span class="modal-price">${formatPrice(product.price)}</span>
            <span class="modal-original">${formatPrice(product.originalPrice)}</span>
            <span class="modal-discount">${product.discount}% OFF</span>
          </div>
          <p class="modal-savings"><i class="fa-solid fa-tag"></i> You save ${formatPrice(product.originalPrice - product.price)}</p>
          <p class="modal-description">${product.description}</p>
          <div class="modal-features">
            <h4>Key Features</h4>
            <ul>${product.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join("")}</ul>
          </div>
          <div class="modal-delivery">
            <div class="delivery-item"><i class="fa-solid fa-truck-fast"></i><div><strong>Free Delivery</strong><p>Estimated 3-5 business days</p></div></div>
            <div class="delivery-item"><i class="fa-solid fa-rotate-left"></i><div><strong>7 Day Returns</strong><p>Easy return policy</p></div></div>
            <div class="delivery-item"><i class="fa-solid fa-shield-halved"></i><div><strong>1 Year Warranty</strong><p>Brand warranty included</p></div></div>
          </div>
          <div class="modal-qty">
            <label>Quantity:</label>
            <div class="qty-controls">
              <button onclick="changeModalQty(-1)">−</button>
              <span id="modal-qty-value">1</span>
              <button onclick="changeModalQty(1)">+</button>
            </div>
          </div>
          <div class="modal-actions">
            <button class="btn btn-primary btn-lg" onclick="addToCart(${product.id}, getModalQty()); closeProductModal()">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
            <button class="btn btn-accent btn-lg" onclick="buyNow(${product.id})">
              <i class="fa-solid fa-bolt"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

let modalQty = 1;
function changeModalQty(delta) {
  modalQty = Math.max(1, Math.min(10, modalQty + delta));
  const el = document.getElementById("modal-qty-value");
  if (el) el.textContent = modalQty;
}
function getModalQty() { return modalQty; }

// ─── Buy Now ────────────────────────────────
function buyNow(productId) {
  addToCart(productId, 1);
  window.location.href = "order.html";
}

// ─── Wishlist (visual only) ─────────────────
function toggleWishlist(productId) {
  showToast("Added to wishlist! ❤️");
}

// ─── Scroll Animations ─────────────────────
function animateCards() {
  const cards = document.querySelectorAll(".product-card, .category-card, .feature-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("animate-in"), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(card => observer.observe(card));
}

// ─── Navbar Scroll Effect ───────────────────
function initNavbar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// ─── Mobile Menu ────────────────────────────
function toggleMobileMenu() {
  const menu = document.querySelector(".nav-links");
  if (menu) menu.classList.toggle("open");
}

// ─── Counter Animation ─────────────────────
function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const suffix = counter.dataset.suffix || "";
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 20);
  });
}

// ─── Cart Page Rendering ────────────────────
function renderCartPage() {
  const container = document.getElementById("cart-items");
  const summaryEl = document.getElementById("cart-summary-details");
  const emptyEl = document.getElementById("cart-empty");
  const filledEl = document.getElementById("cart-filled");
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = "flex";
    if (filledEl) filledEl.style.display = "none";
    return;
  }
  if (emptyEl) emptyEl.style.display = "none";
  if (filledEl) filledEl.style.display = "grid";

  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return "";
    return `
      <div class="cart-item">
        <div class="cart-item-image" style="background: ${p.gradient}">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
               <i class="fa-solid ${p.icon}" style="display:none;"></i>`
            : `<i class="fa-solid ${p.icon}"></i>`
          }
        </div>
        <div class="cart-item-details">
          <h3>${p.name}</h3>
          <p class="cart-item-brand">${p.brand}</p>
          <div class="cart-item-pricing">
            <span class="cart-item-price">${formatPrice(p.price)}</span>
            <span class="cart-item-original">${formatPrice(p.originalPrice)}</span>
            <span class="cart-item-discount">${p.discount}% OFF</span>
          </div>
          <div class="cart-item-controls">
            <div class="qty-controls">
              <button onclick="updateCartQty(${p.id}, ${item.qty - 1}); renderCartPage()">−</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${p.id}, ${item.qty + 1}); renderCartPage()">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${p.id}); renderCartPage()">
              <i class="fa-solid fa-trash"></i> Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (summaryEl) {
    const totals = getCartTotal();
    summaryEl.innerHTML = `
      <div class="summary-row"><span>Price (${totals.items} items)</span><span>${formatPrice(totals.originalTotal)}</span></div>
      <div class="summary-row discount"><span>Discount</span><span>-${formatPrice(totals.savings)}</span></div>
      <div class="summary-row"><span>Delivery Charges</span><span class="free-delivery">FREE</span></div>
      <div class="summary-divider"></div>
      <div class="summary-row total"><span>Total Amount</span><span>${formatPrice(totals.total)}</span></div>
      <div class="summary-savings"><i class="fa-solid fa-tag"></i> You will save ${formatPrice(totals.savings)} on this order</div>
      <button class="btn btn-accent btn-lg btn-block" onclick="window.location.href='order.html'">
        <i class="fa-solid fa-lock"></i> Place Order
      </button>
      <div class="trust-badges">
        <div class="trust-badge"><i class="fa-solid fa-shield-halved"></i><span>Secure</span></div>
        <div class="trust-badge"><i class="fa-solid fa-truck-fast"></i><span>Free Delivery</span></div>
        <div class="trust-badge"><i class="fa-solid fa-rotate-left"></i><span>Easy Returns</span></div>
      </div>
    `;
  }
}

// ─── Order Page (Meesho-style) ──────────────
let orderStep = 1;

function initOrderPage() {
  const cart = getCart();
  if (cart.length === 0) {
    window.location.href = "index.html";
    return;
  }
  renderOrderSummary();
  showOrderStep(1);
}

function showOrderStep(step) {
  orderStep = step;
  document.querySelectorAll(".order-step-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".step-indicator .step").forEach((el, i) => {
    el.classList.remove("active", "completed");
    if (i + 1 < step) el.classList.add("completed");
    if (i + 1 === step) el.classList.add("active");
  });
  const stepEl = document.getElementById(`order-step-${step}`);
  if (stepEl) stepEl.classList.add("active");
}

function nextOrderStep() {
  if (orderStep === 1) {
    if (!validateAddress()) return;
    showOrderStep(2);
  } else if (orderStep === 2) {
    if (!validatePayment()) return;
    showOrderStep(3);
    renderOrderReview();
  }
}

function prevOrderStep() {
  if (orderStep > 1) showOrderStep(orderStep - 1);
}

function validateAddress() {
  const fields = ["fullname", "phone", "pincode", "address", "city", "state"];
  let valid = true;
  fields.forEach(f => {
    const el = document.getElementById(f);
    if (el && !el.value.trim()) {
      el.classList.add("error");
      valid = false;
    } else if (el) {
      el.classList.remove("error");
    }
  });
  if (!valid) {
    showToast("Please fill all required fields", "error");
    return false;
  }
  // Validate phone: must be exactly 10 digits
  const phone = document.getElementById("phone");
  if (phone && !/^[0-9]{10}$/.test(phone.value.trim())) {
    phone.classList.add("error");
    showToast("Please enter a valid 10-digit phone number", "error");
    return false;
  }
  // Validate pincode: must be exactly 6 digits
  const pincode = document.getElementById("pincode");
  if (pincode && !/^[0-9]{6}$/.test(pincode.value.trim())) {
    pincode.classList.add("error");
    showToast("Please enter a valid 6-digit pincode", "error");
    return false;
  }
  return true;
}

function validatePayment() {
  const selected = document.querySelector('input[name="payment"]:checked');
  if (!selected) {
    showToast("Please select a payment method", "error");
    return false;
  }
  return true;
}

function renderOrderSummary() {
  const container = document.getElementById("order-items-list");
  const totalsEl = document.getElementById("order-price-details");
  if (!container || !totalsEl) return;

  const cart = getCart();
  container.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return "";
    return `
      <div class="order-item">
        <div class="order-item-img" style="background: ${p.gradient}">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
               <i class="fa-solid ${p.icon}" style="display:none;"></i>`
            : `<i class="fa-solid ${p.icon}"></i>`
          }
        </div>
        <div class="order-item-info">
          <h4>${p.name}</h4>
          <p>Qty: ${item.qty}</p>
          <div class="order-item-price">
            <span>${formatPrice(p.price * item.qty)}</span>
            <span class="line-through">${formatPrice(p.originalPrice * item.qty)}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const totals = getCartTotal();
  totalsEl.innerHTML = `
    <div class="price-row"><span>Total MRP</span><span>${formatPrice(totals.originalTotal)}</span></div>
    <div class="price-row green"><span>Discount on MRP</span><span>-${formatPrice(totals.savings)}</span></div>
    <div class="price-row"><span>Delivery Charge</span><span class="free-text">FREE</span></div>
    <div class="price-divider"></div>
    <div class="price-row total-row"><span>Total Amount</span><span>${formatPrice(totals.total)}</span></div>
    <div class="savings-badge"><i class="fa-solid fa-piggy-bank"></i> You're saving ${formatPrice(totals.savings)} on this order!</div>
  `;
}

function renderOrderReview() {
  const reviewEl = document.getElementById("review-details");
  if (!reviewEl) return;
  const name = document.getElementById("fullname")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const addr = document.getElementById("address")?.value || "";
  const city = document.getElementById("city")?.value || "";
  const state = document.getElementById("state")?.value || "";
  const pincode = document.getElementById("pincode")?.value || "";
  const landmark = document.getElementById("landmark")?.value || "";
  const payment = document.querySelector('input[name="payment"]:checked')?.value || "";
  const paymentLabels = { cod: "Cash on Delivery", upi: "UPI Payment", card: "Credit / Debit Card", netbanking: "Net Banking" };

  const cart = getCart();
  const totals = getCartTotal();

  reviewEl.innerHTML = `
    <div class="review-section">
      <h4><i class="fa-solid fa-location-dot"></i> Delivery Address</h4>
      <div class="review-card">
        <p><strong>${name}</strong></p>
        <p>${addr}${landmark ? ", " + landmark : ""}</p>
        <p>${city}, ${state} - ${pincode}</p>
        <p>Phone: ${phone}</p>
      </div>
    </div>
    <div class="review-section">
      <h4><i class="fa-solid fa-credit-card"></i> Payment Method</h4>
      <div class="review-card">
        <p>${paymentLabels[payment] || payment}</p>
      </div>
    </div>
    <div class="review-section">
      <h4><i class="fa-solid fa-box"></i> Order Items (${totals.items})</h4>
      <div class="review-items">
        ${cart.map(item => {
          const p = products.find(pr => pr.id === item.id);
          if (!p) return "";
          return `<div class="review-item"><span>${p.name} × ${item.qty}</span><span>${formatPrice(p.price * item.qty)}</span></div>`;
        }).join("")}
        <div class="review-total"><span>Total</span><span>${formatPrice(totals.total)}</span></div>
      </div>
    </div>
  `;
}

function placeOrder() {
  const modal = document.getElementById("order-success-modal");
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
  localStorage.removeItem("nexahome_cart");
  updateCartBadge();
  // Auto redirect after 5 seconds
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
}

function closeOrderSuccess() {
  window.location.href = "index.html";
}

// ─── Coupon Code ────────────────────────────
function applyCoupon() {
  const input = document.getElementById("coupon-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (code === "NEXA10" || code === "WELCOME") {
    showToast("Coupon applied! 10% extra discount 🎉");
  } else if (code === "") {
    showToast("Please enter a coupon code", "error");
  } else {
    showToast("Invalid coupon code", "error");
  }
}

// ─── Init ───────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  updateCartBadge();
  modalQty = 1;

  // Homepage
  if (document.getElementById("products-grid")) {
    renderProducts("products-grid", products);
    animateCards();
    // Category buttons
    document.querySelectorAll(".category-btn").forEach(btn => {
      btn.addEventListener("click", () => handleCategoryFilter(btn.dataset.category));
    });
    // Search
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => handleSearch(e.target.value));
    }
    // Animate counters
    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.unobserve(statsSection);
        }
      });
      observer.observe(statsSection);
    }
  }

  // Cart page
  if (document.getElementById("cart-items")) {
    renderCartPage();
  }

  // Order page
  if (document.getElementById("order-step-1")) {
    initOrderPage();
  }

  // Close modal on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProductModal();
  });
});
