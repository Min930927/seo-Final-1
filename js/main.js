document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Header & Footer & Cart Drawer if target containers exist
  injectLayout();

  // 2. Initialize Mobile Menu Toggle
  initMobileMenu();

  // 3. Initialize Cart State and UI
  initCart();
});

// Global cart state loaded from localStorage
let cart = JSON.parse(localStorage.getItem('soleStyleCart')) || [];

function injectLayout() {
  const headerContainer = document.getElementById('global-header');
  const footerContainer = document.getElementById('global-footer');
  const cartContainer = document.getElementById('global-cart-container');

  // Detect current active page to highlight nav link
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  // Inject Header
  if (headerContainer) {
    headerContainer.innerHTML = `
      <div class="header-container">
        <a href="index.html" class="logo-link">
          <img src="assets/images/logo.png" alt="SoleStyle" class="logo-img">
          <span class="logo-text">SOLESTYLE</span>
        </a>
        <nav id="navbar">
          <ul class="nav-links">
            <li><a href="index.html" class="nav-link ${pageName === 'index.html' ? 'active' : ''}">首頁</a></li>
            <li><a href="about.html" class="nav-link ${pageName === 'about.html' ? 'active' : ''}">品牌簡介</a></li>
            <li><a href="mens.html" class="nav-link ${pageName === 'mens.html' ? 'active' : ''}">男鞋區</a></li>
            <li><a href="womens.html" class="nav-link ${pageName === 'womens.html' ? 'active' : ''}">女鞋區</a></li>
            <li><a href="kids.html" class="nav-link ${pageName === 'kids.html' ? 'active' : ''}">童鞋區</a></li>
            <li><a href="others.html" class="nav-link ${pageName === 'others.html' ? 'active' : ''}">配件/其它</a></li>
            <li><a href="contact.html" class="nav-link ${pageName === 'contact.html' ? 'active' : ''}">聯絡我們</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <button class="cart-btn" id="open-cart-btn" aria-label="購物車">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span class="cart-count" id="cart-badge-count">0</span>
          </button>
          <button class="menu-toggle" id="menu-toggle-btn" aria-label="選單">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    `;
  }

  // Inject Footer
  if (footerContainer) {
    footerContainer.innerHTML = `
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo">
            <img src="assets/images/logo.png" alt="SoleStyle" class="footer-logo-img">
            <span class="logo-text">SOLESTYLE</span>
          </div>
          <p class="footer-desc">
            探索最頂尖的手工藝與科技。SoleStyle 為您提供無與倫比的穿著舒適度與時尚風格。每一雙鞋，都是品味的延伸。
          </p>
        </div>
        <div class="footer-col">
          <h3 class="footer-col-title">產品分類</h3>
          <ul class="footer-links">
            <li><a href="mens.html">時尚男鞋區</a></li>
            <li><a href="womens.html">優雅女鞋區</a></li>
            <li><a href="kids.html">活力童鞋區</a></li>
            <li><a href="others.html">居家配件與其它</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-col-title">快速連結</h3>
          <ul class="footer-links">
            <li><a href="index.html">網站首頁</a></li>
            <li><a href="about.html">關於品牌理念</a></li>
            <li><a href="contact.html">聯絡門市據點</a></li>
            <li><a href="#">常見問題 FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 class="footer-col-title">聯絡資訊</h3>
          <ul class="footer-links" style="pointer-events: none;">
            <li>台北市信義區松壽路 88 號 1 樓</li>
            <li>服務專線：(02) 2720-1234</li>
            <li>電子信箱：service@solestyle.com</li>
            <li>營業時間：Mon - Sun: 11:00 - 22:00</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 SOLESTYLE 鞋履工坊. All Rights Reserved.</p>
        <p>設計與開發 &bull; Antigravity Studio</p>
      </div>
    `;
  }

  // Inject Cart Drawer Markup
  if (cartContainer) {
    cartContainer.innerHTML = `
      <div class="cart-overlay-bg" id="cart-overlay"></div>
      <div class="cart-drawer" id="cart-drawer">
        <div class="cart-drawer-header">
          <h3 style="font-family: var(--font-heading); font-weight: 700;">您的購物車</h3>
          <button class="cart-drawer-close" id="close-cart-btn">&times;</button>
        </div>
        <div class="cart-drawer-body" id="cart-items-list">
          <!-- Dynamically filled -->
        </div>
        <div class="cart-drawer-footer">
          <div class="cart-total-row">
            <span>小計:</span>
            <span id="cart-total-price">NT$ 0</span>
          </div>
          <button class="btn btn-primary" id="checkout-btn" style="width: 100%;">立即結帳</button>
        </div>
      </div>
    `;
  }
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle-btn');
  const navbar = document.getElementById('navbar');

  if (toggleBtn && navbar) {
    toggleBtn.addEventListener('click', () => {
      navbar.classList.toggle('mobile-open');
      toggleBtn.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !toggleBtn.contains(e.target) && navbar.classList.contains('mobile-open')) {
        navbar.classList.remove('mobile-open');
        toggleBtn.classList.remove('active');
      }
    });
  }
}

function initCart() {
  const openBtn = document.getElementById('open-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (openBtn && drawer && overlay) {
    openBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      overlay.classList.add('open');
      updateCartUI();
    });

    const closeCart = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
          showToast('您的購物車是空的，快去選購吧！');
          return;
        }
        showToast('感謝您的訂購！結帳功能模擬成功（靜態頁面展示）。');
        cart = [];
        saveCart();
        updateCartUI();
        setTimeout(closeCart, 1500);
      });
    }
  }

  updateCartUI();
}

function updateCartUI() {
  const listContainer = document.getElementById('cart-items-list');
  const totalContainer = document.getElementById('cart-total-price');
  const badgeCount = document.getElementById('cart-badge-count');

  if (!listContainer) return;

  // Calculate items count
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badgeCount) badgeCount.textContent = totalItems;

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div class="cart-empty-msg">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:1rem; opacity:0.5;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p>購物車目前沒有商品</p>
      </div>
    `;
    if (totalContainer) totalContainer.textContent = 'NT$ 0';
    return;
  }

  let html = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    // Look up product full info in global products array if available
    const productInfo = typeof products !== 'undefined' ? products.find(p => p.id === item.productId) : null;
    const price = productInfo ? productInfo.price : 0;
    const name = productInfo ? productInfo.name : '未知鞋款';
    const img = productInfo ? productInfo.image : 'assets/images/logo.png';
    
    const itemTotal = price * item.qty;
    subtotal += itemTotal;

    html += `
      <div class="cart-item">
        <img src="${img}" alt="${name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-name">${name}</div>
          <div class="cart-item-meta">尺寸: ${item.size} &bull; 數量: ${item.qty}</div>
          <div class="cart-item-price">NT$ ${price.toLocaleString()}</div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${index})" aria-label="刪除">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
      </div>
    `;
  });

  listContainer.innerHTML = html;
  if (totalContainer) totalContainer.textContent = `NT$ ${subtotal.toLocaleString()}`;
}

// Global functions for cart interaction
window.addToCart = function(productId, size, qty = 1) {
  if (!size) {
    showToast('請選擇尺寸！');
    return;
  }

  // Find if item already exists in cart with same size
  const existingItemIndex = cart.findIndex(item => item.productId === productId && item.size === size);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].qty += qty;
  } else {
    cart.push({ productId, size, qty });
  }

  saveCart();
  updateCartUI();
  
  // Show toast & open cart drawer
  showToast('商品已加入購物車！');
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
};

window.removeCartItem = function(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast('商品已從購物車移出。');
};

function saveCart() {
  localStorage.setItem('soleStyleCart', JSON.stringify(cart));
}

// Toast notification helper
window.showToast = function(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
};

// HTML rendering helpers for pages
window.renderProductGrid = function(containerId, categoryFilter = null) {
  const container = document.getElementById(containerId);
  if (!container || typeof products === 'undefined') return;

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category === categoryFilter)
    : products;

  let html = '';
  filteredProducts.forEach(p => {
    html += `
      <article class="product-card">
        <div class="product-badge">精選</div>
        <div class="product-image-wrapper">
          <a href="product-detail.html?id=${p.id}">
            <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
          </a>
        </div>
        <div class="product-info">
          <span class="product-cat">${p.categoryLabel}</span>
          <h3 class="product-name">
            <a href="product-detail.html?id=${p.id}">${p.name}</a>
          </h3>
          <div class="product-rating">
            <span style="font-size: 1.1rem;">★</span>
            <span style="font-weight: 600;">${p.rating}</span>
            <span class="product-rating-count">(${p.reviewsCount} 評價)</span>
          </div>
          <div class="product-footer">
            <span class="product-price">${p.price.toLocaleString()}</span>
            <a href="product-detail.html?id=${p.id}" class="view-detail-btn" aria-label="查看詳情">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
};
