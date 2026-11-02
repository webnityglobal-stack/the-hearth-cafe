
import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, Check, ChefHat, ChevronDown,
  Clock3, Coffee, Flame, Heart, Leaf, Minus, Plus, ShoppingBag,
  ShoppingCart, Sparkles as SparkleIcon, Trash2, X,
  Menu as MenuIcon, ArrowUpRight
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 'hearth-burger',
    name: 'The Hearth Burger',
    category: 'Signature',
    price: 329,
    tag: 'HOUSE FAVOURITE',
    desc: 'Smash-seared patty, aged cheddar, caramelised onion & our secret hearth sauce.',
    type: 'burger',
    image: '/images/hearth-burger.png',
    color: '#b96e3d'
  },
  {
    id: 'truffle-pizza',
    name: 'Wild Truffle Pizza',
    category: 'Pizza',
    price: 449,
    tag: 'WOOD-FIRED',
    desc: 'Wild mushrooms, mozzarella, truffle oil & a crisp blistered crust.',
    type: 'pizza',
    image: '/images/truffle-pizza.png',
    color: '#c98043'
  },
  {
    id: 'velvet-latte',
    name: 'Velvet Latte',
    category: 'Coffee',
    price: 179,
    tag: 'SLOW POURED',
    desc: 'Double espresso folded into silky steamed milk, finished with a little art.',
    type: 'coffee',
    image: '/images/velvet-latte.png',
    color: '#9b6747'
  },
  {
    id: 'berry-pancakes',
    name: 'Berry Cloud Pancakes',
    category: 'Desserts',
    price: 289,
    tag: 'SWEET MOMENT',
    desc: 'Fluffy buttermilk stacks, warm berry compote & maple drizzle.',
    type: 'pancakes',
    image: '/images/berry-pancakes.png',
    color: '#d69a70'
  },
  {
    id: 'cinnamon-roll',
    name: 'Warm Cinnamon Roll',
    category: 'Desserts',
    price: 199,
    tag: 'BAKED DAILY',
    desc: 'Soft spirals of cinnamon sugar with a generous vanilla glaze.',
    type: 'roll',
    image: '/images/cinnamon-roll.png',
    color: '#bd7947'
  },
  {
    id: 'masala-chai',
    name: 'Clay Pot Masala Chai',
    category: 'Tea',
    price: 99,
    tag: 'A LITTLE COMFORT',
    desc: 'Slow-brewed Assam tea, warming spices & a cloud of milk.',
    type: 'tea',
    image: '/images/masala-chai.png',
    color: '#a9683d'
  },
  {
    id: 'margherita',
    name: 'Garden Margherita',
    category: 'Pizza',
    price: 359,
    tag: 'GARDEN FRESH',
    desc: 'San Marzano tomato, creamy mozzarella, basil & olive oil.',
    image: '/images/margherita-pizza.png',
    type: 'pizza2',
    color: '#c9793f'
  },
  {
    id: 'choco-lava',
    name: 'Midnight Lava Cake',
    category: 'Desserts',
    price: 229,
    tag: 'MELT-IN-THE-MIDDLE',
    desc: 'Dark chocolate cake with a molten centre and vanilla cream.',
    type: 'cake',
    image: '/images/chocolate-lava-cake.png',
    color: '#69412e'
  },
  {
    id: 'iced-mocha',
    name: 'Iced Hazelnut Mocha',
    category: 'Coffee',
    price: 199,
    tag: 'COOL & CREAMY',
    desc: 'Chocolate, espresso, hazelnut and chilled milk over ice.',
    type: 'iced',
    image: '/images/iced-mocha.png',
    color: '#8b573b'
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Garden Toast',
    category: 'Brunch',
    price: 249,
    tag: 'FRESH START',
    desc: 'Sourdough, whipped avocado, cherry tomato & chilli crunch.',
    type: 'toast',
    image: '/images/avocado-toast.png',
    color: '#7c8c56'
  },
  {
    id: 'caramel-pudding',
    name: 'Salted Caramel Pudding',
    category: 'Desserts',
    price: 189,
    tag: 'SILKY & SOFT',
    desc: 'Silky baked custard with a glossy salted caramel pour.',
    type: 'pudding',
    image: '/images/caramel-pudding.png',
    color: '#c38a4d'
  },
  {
    id: 'lemonade',
    name: 'Rosemary Lemonade',
    category: 'Drinks',
    price: 149,
    tag: 'FRESHLY PRESSED',
    desc: 'Bright lemon, a hint of rosemary and sparkling water.',
    type: 'lemonade',
    image: '/images/lemonade.png',
    color: '#c4b85c'
  }
];

const money = n => `₹${n.toLocaleString('en-IN')}`;

/* =========================================
   CSS FOOD IMAGE SCENE
========================================= */

function FoodScene({ product, hero = false, explode = false }) {
  return (
    <div className={`food-scene ${hero ? 'food-scene-hero' : ''} ${explode ? 'food-scene-float' : ''}`}>
      <span className="food-scene-glow" />
      <img
        src={product.image}
        alt={product.name}
        className="food-scene-image"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <span className="food-scene-shadow" />
    </div>
  );
}

/* =========================================
   HEADER
========================================= */

function Header({ page, setPage, count }) {
  const [mobile, setMobile] = useState(false);

  return (
    <header className="header">
      <button
        className="brand"
        onClick={() => setPage('home')}
        aria-label="The Hearth Café home"
      >
        <span className="brand-mark"><Flame size={22} /></span>
        <span>
          <b>the hearth</b>
          <small>CAFÉ · KITCHEN · COFFEE</small>
        </span>
      </button>

      <nav className={mobile ? 'nav nav-open' : 'nav'}>
        <button
          className={page === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => {
            setPage('home');
            setMobile(false);
          }}
        >
          Home
        </button>

        <button
          className={page === 'menu' ? 'nav-link active' : 'nav-link'}
          onClick={() => {
            setPage('menu');
            setMobile(false);
          }}
        >
          Menu <span className="nav-dot" />
        </button>

        <button
          className={page === 'cart' ? 'nav-link active' : 'nav-link'}
          onClick={() => {
            setPage('cart');
            setMobile(false);
          }}
        >
          Cart / Checkout
        </button>
      </nav>

      <div className="header-actions">
        <span className="open-pill">
          <i /> Open today · 9am–10pm
        </span>

        <button className="cart-button" onClick={() => setPage('cart')} aria-label="Open cart">
          <ShoppingBag size={18} />
          <span>Bag</span>
          <b>{count}</b>
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle menu"
        >
          {mobile ? <X /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}

/* =========================================
   PRODUCT CARD
========================================= */

function ProductCard({ product, onAdd, onOpen, quantity = 0 }) {
  return (
    <article className="product-card">
      <div className="product-visual" onClick={() => onOpen(product)}>
        <span className="product-tag">{product.tag}</span>

        <div className="scene-card">
          <img
            className="real-food-img"
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.classList.add('image-failed');
            }}
          />

          <span className="image-fallback">{product.name}</span>
        </div>

        <button
          className="quick-view"
          aria-label={`View ${product.name}`}
          onClick={e => {
            e.stopPropagation();
            onOpen(product);
          }}
        >
          <ArrowUpRight size={17} />
        </button>
      </div>

      <div className="product-info">
        <div>
          <span className="category-label">{product.category}</span>
          <h3>{product.name}</h3>
        </div>
        <strong>{money(product.price)}</strong>
      </div>

      <p>{product.desc}</p>

      <button
        className={quantity ? 'add-button added' : 'add-button'}
        onClick={() => onAdd(product)}
      >
        {quantity ? (
          <>
            <Check size={16} /> Added · {quantity} in bag
          </>
        ) : (
          <>
            Add to bag <Plus size={16} />
          </>
        )}
      </button>
    </article>
  );
}

/* =========================================
   PRODUCT MODAL
========================================= */

function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="product-modal"
        onMouseDown={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>

        <div className="modal-art">
          <FoodScene
            product={product}
            hero
            explode={product.type === 'burger'}
          />
          <span className="model-hint">
            <SparkleIcon size={14} /> Freshly made, beautifully served
          </span>
        </div>

        <div className="modal-copy">
          <span className="eyebrow">{product.tag}</span>
          <h2>{product.name}</h2>
          <p>{product.desc}</p>

          <div className="modal-price">
            {money(product.price)}
            <small>· freshly made to order</small>
          </div>

          <button
            className="primary-btn full"
            onClick={() => {
              onAdd(product);
              onClose();
            }}
          >
            Add to bag <ArrowRight size={18} />
          </button>

          <div className="modal-note">
            <Leaf size={16} />
            Made fresh with thoughtfully sourced ingredients.
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   HOME PAGE
========================================= */

function Home({ setPage, add, cart, openProduct }) {
  const [explode, setExplode] = useState(false);
  const featured = PRODUCTS.slice(0, 4);
  const heroRef = useRef(null);


  return (
    <main>
      <section className="hero" ref={heroRef}>
        <div className="hero-grain" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            GOOD FOOD. SLOW MOMENTS.
          </div>

          <h1>
            A little warmth<br />
            in <em>every bite.</em>
          </h1>

          <p className="hero-desc">
            Thoughtfully made comfort food, coffee worth lingering over,
            and sweet moments baked fresh every day.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setPage('menu')}>
              Explore the menu <ArrowRight size={18} />
            </button>

            <button
              className="text-btn"
              onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our little story <ArrowDown size={16} />
            </button>
          </div>

          <div className="hero-social-proof">
            <div className="avatar-stack">
              <span>J</span>
              <span>M</span>
              <span>A</span>
              <span>+</span>
            </div>

            <div>
              <div className="stars">★★★★★ <b>4.9/5</b></div>
              <small>Loved by your neighbourhood</small>
            </div>
          </div>
        </div>

        <div className="hero-art">
          
          <div className="hero-sticker">
            <span>MADE WITH</span>
            <Heart size={15} fill="currentColor" />
            <b>heart</b>
          </div>

          <div className="hero-food">
            <FoodScene product={PRODUCTS[0]} hero explode={explode} />
          </div>

          <div className="floating-note note-top">
            <span className="note-icon"><Flame size={17} /></span>
            <span>
              <b>Fresh off the grill</b>
              <small>Made when you order</small>
            </span>
          </div>

          <button
            className="floating-note note-bottom"
            onClick={() => setExplode(!explode)}
          >
            <span className="note-icon"><SparkleIcon size={17} /></span>
            <span>
              <b>{explode ? 'Bring it together' : 'See the layers'}</b>
              <small>Tap for a little food magic</small>
            </span>
            <ArrowUpRight size={16} />
          </button>

          <div className="hero-caption">
            THE HEARTH SIGNATURE <span>01 / 04</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span><span className="tiny-dot" /> FRESHLY PREPARED, ALWAYS</span>
          <span>SCROLL TO DISCOVER ↓</span>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }, (_, i) => (
            <span key={i}>
              MADE SLOW <i>✳</i> SERVED WARM <i>✳</i> STAY A LITTLE
              <i>✳</i> MADE WITH HEART <i>✳</i>
            </span>
          ))}
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-head">
          <div>
            <span className="eyebrow">A FEW CROWD PLEASERS</span>
            <h2>Made to make<br /><em>your day.</em></h2>
          </div>

          <div className="section-head-right">
            <p>
              From the first sip to the last crumb,
              there's something here you'll come back for.
            </p>

            <button className="outline-btn" onClick={() => setPage('menu')}>
              View full menu <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        <div className="product-grid">
          {featured.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={add}
              onOpen={openProduct}
              quantity={cart[p.id]?.qty || 0}
            />
          ))}
        </div>
      </section>

      <section className="story-section" id="our-story">
        <div className="story-art">
          <div>
            <div className="story-food">
              <FoodScene product={PRODUCTS[5]} hero />
            </div>
            <span className="story-stamp">
              POURED WITH<br />A LITTLE LOVE
            </span>
          </div>

          <div className="story-side-note">
            A GOOD CUP CAN<br />CHANGE THE DAY. <Coffee size={17} />
          </div>
        </div>

        <div className="story-copy">
          <span className="eyebrow">A TABLE WITH ROOM FOR EVERYONE</span>

          <h2>
            Not just a café.<br />
            <em>Your happy place.</em>
          </h2>

          <p>
            We believe the best things happen when you slow down.
            A familiar cup, a warm plate, one more story before you go.
            That's the feeling we're here to serve.
          </p>

          <div className="story-values">
            <div>
              <span>01</span>
              <b>Made fresh</b>
              <small>Never rushed, always real.</small>
            </div>

            <div>
              <span>02</span>
              <b>Seasonal & local</b>
              <small>Good ingredients, good people.</small>
            </div>

            <div>
              <span>03</span>
              <b>Come as you are</b>
              <small>Your seat is waiting.</small>
            </div>
          </div>

          <button className="text-btn dark" onClick={() => setPage('menu')}>
            Find your new favourite <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <span className="eyebrow">YOUR NEXT LITTLE RITUAL</span>
          <h2>Something lovely is<br /><em>on the menu.</em></h2>
        </div>

        <button className="cream-btn" onClick={() => setPage('menu')}>
          Order something good <ArrowRight size={18} />
        </button>

        <div className="cta-scribble">
          fresh<br />for you <Heart size={20} />
        </div>
      </section>
    </main>
  );
}

/* =========================================
   MENU PAGE
========================================= */

function MenuPage({ add, cart, openProduct }) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = [
    'All', 'Signature', 'Pizza', 'Coffee',
    'Tea', 'Desserts', 'Brunch', 'Drinks'
  ];

  const shown = PRODUCTS.filter(p =>
    (filter === 'All' || p.category === filter) &&
    (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          SOMETHING FOR EVERY CRAVING
        </div>

        <h1>Come hungry.<br /><em>Leave happy.</em></h1>

        <p>
          Little indulgences, familiar favourites,
          and a few delicious surprises.
        </p>

        <div className="menu-hero-bottom">
          <span><ChefHat size={17} /> Freshly prepared to order</span>
          <span><Clock3 size={17} /> Usually ready in 20–30 min</span>
        </div>

        <div className="menu-hero-art">
          <FoodScene product={PRODUCTS[1]} hero />
        </div>

        <span className="menu-side-label">THE HEARTH MENU · VOL. 01</span>
      </section>

      <section className="menu-list-section">
        <div className="menu-controls">
          <div>
            <span className="eyebrow">THE GOOD STUFF</span>
            <h2>Our <em>menu.</em></h2>
          </div>

          <label className="search-box">
            <span>⌕</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Find your favourite…"
            />
            <kbd>↵</kbd>
          </label>
        </div>

        <div className="category-pills">
          {categories.map(c => (
            <button
              key={c}
              className={filter === c ? 'category-pill selected' : 'category-pill'}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="menu-results">
          <span>{shown.length} delicious things</span>
          <span>MADE WITH HEART <Heart size={13} /></span>
        </div>

        <div className="product-grid menu-grid">
          {shown.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={add}
              onOpen={openProduct}
              quantity={cart[p.id]?.qty || 0}
            />
          ))}
        </div>

        {!shown.length && (
          <div className="empty-search">
            <span>☕</span>
            <h3>No bites found just yet.</h3>
            <p>Try a different search or browse all the good stuff.</p>
            <button
              className="outline-btn"
              onClick={() => {
                setFilter('All');
                setSearch('');
              }}
            >
              Show everything
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

/* =========================================
   CART AND CHECKOUT
========================================= */

function CartPage({
  cart,
  changeQty,
  removeItem,
  setPage,
  placeOrder,
  order
}) {
  const [step, setStep] = useState(order ? 'success' : 'cart');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    payment: 'Cash on delivery'
  });

  const [errors, setErrors] = useState({});

  const items = Object.values(cart);

  const subtotal = items.reduce(
    (s, i) => s + i.price * i.qty,
    0
  );

  const delivery = subtotal === 0 || subtotal >= 599 ? 0 : 39;
  const tax = Math.round(subtotal * .05);
  const total = subtotal + delivery + tax;

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
  };

  function checkout() {
    if (!items.length) return;

    setStep('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function submit(e) {
    e.preventDefault();

    const er = {};

    ['name', 'phone', 'address', 'city'].forEach(k => {
      if (!form[k].trim()) er[k] = 'This field is required';
    });

    if (form.phone.replace(/\D/g, '').length < 10) {
      er.phone = 'Enter a valid 10-digit phone number';
    }

    setErrors(er);

    if (!Object.keys(er).length) {
      placeOrder({
        items,
        form,
        total,
        orderId: 'HC' + Math.random().toString(36).slice(2, 8).toUpperCase()
      });
    }
  }

  return (
    <main className="cart-page">
      <section className="cart-heading cart-heading-showcase">
        <div className="cart-heading-copy">
          <span className="eyebrow">A GOOD CHOICE, THIS</span>

          <h1>
            {step === 'success'
              ? 'Well, this is lovely.'
              : step === 'details'
                ? 'Let’s make it yours.'
                : 'Your little'
            }

            <br />

            {step === 'cart' && <em>bag of joy.</em>}
          </h1>

          {step !== 'success' && (
            <div className="checkout-steps">
              <span className={step === 'cart' ? 'current' : ''}>
                01 <b>Your bag</b>
              </span>

              <i />

              <span className={step === 'details' ? 'current' : ''}>
                02 <b>Your details</b>
              </span>

              <i />

              <span>03 <b>All set</b></span>
            </div>
          )}
        </div>

        <div className="cart-heading-visual" aria-label="Freshly brewed coffee in a cozy cafe">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=88"
            alt="Freshly brewed coffee on a cafe table"
          />
          <div className="cart-heading-visual-shade" />
          <div className="cart-heading-visual-copy">
            <span>PAUSE. SIP. ENJOY.</span>
            <h2>A warmer kind<br />of everyday.</h2>
            <small>COFFEE · COMFORT · GOOD COMPANY</small>
          </div>
        </div>
      </section>

      {step === 'success' ? (
        <section className="success-panel">
          <div className="success-icon">
            <Check size={35} />
          </div>

          <span className="eyebrow">ORDER CONFIRMED</span>

          <h2>
            Something delicious<br />
            <em>is on its way.</em>
          </h2>

          <p>
            Thank you, {order?.form?.name.split(' ')[0] || 'friend'}!
            Your order <b>{order?.orderId || 'is confirmed'}</b> has been received.
            We'll call you if we need anything.
          </p>

          <div className="success-details">
            <div>
              <small>DELIVERY TO</small>
              <b>{order?.form?.address}, {order?.form?.city}</b>
            </div>

            <div>
              <small>ORDER TOTAL</small>
              <b>{money(order?.total || 0)}</b>
            </div>

            <div>
              <small>PAYMENT</small>
              <b>{order?.form?.payment}</b>
            </div>
          </div>

          <button className="primary-btn" onClick={() => setPage('menu')}>
            Back to the menu <ArrowRight size={18} />
          </button>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-main">
            {step === 'cart' ? (
              items.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-cart-art">
                    <FoodScene product={PRODUCTS[2]} hero />
                  </div>

                  <span className="eyebrow">
                    A LITTLE SPACE FOR SOMETHING GOOD
                  </span>

                  <h2>
                    Your bag is feeling<br />
                    <em>rather empty.</em>
                  </h2>

                  <p>Go on, find a favourite. We’ll keep it warm.</p>

                  <button className="primary-btn" onClick={() => setPage('menu')}>
                    Explore the menu <ArrowRight size={18} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="cart-items-head">
                    <h2>
                      Your order
                      <span>
                        ({items.reduce((s, i) => s + i.qty, 0)} items)
                      </span>
                    </h2>

                    <button className="text-btn dark" onClick={() => setPage('menu')}>
                      + Add something else
                    </button>
                  </div>

                  {items.map(item => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-art">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          decoding="async"
                          onError={e => {
                            e.currentTarget.style.visibility = 'hidden';
                          }}
                        />
                      </div>

                      <div className="cart-item-copy">
                        <span className="category-label">{item.category}</span>
                        <h3>{item.name}</h3>
                        <small>{item.desc}</small>

                        <button
                          className="remove-link"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={13} /> Remove
                        </button>
                      </div>

                      <div className="cart-item-actions">
                        <b>{money(item.price * item.qty)}</b>

                        <div className="qty-control">
                          <button
                            onClick={() => changeQty(item.id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>

                          <span>{item.qty}</span>

                          <button
                            onClick={() => changeQty(item.id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="cart-note">
                    <Flame size={18} />
                    <span>
                      <b>Made just for you.</b>
                      <small>
                        Our kitchen starts preparing your order once it's confirmed.
                      </small>
                    </span>
                  </div>
                </>
              )
            ) : (
              <form className="checkout-form" onSubmit={submit}>
                <button
                  type="button"
                  className="back-link"
                  onClick={() => setStep('cart')}
                >
                  <ArrowLeft size={16} /> Back to your bag
                </button>

                <h2>
                  Where should we<br />
                  <em>bring the good stuff?</em>
                </h2>

                <div className="form-grid">
                  <label className="field full-field">
                    Full name
                    <input
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      placeholder="Your name"
                    />
                    {errors.name && <small className="error">{errors.name}</small>}
                  </label>

                  <label className="field">
                    Phone number
                    <input
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                      placeholder="10-digit mobile"
                      inputMode="tel"
                    />
                    {errors.phone && <small className="error">{errors.phone}</small>}
                  </label>

                  <label className="field">
                    Email <small>(optional)</small>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => update('email', e.target.value)}
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="field full-field">
                    Delivery address
                    <textarea
                      value={form.address}
                      onChange={e => update('address', e.target.value)}
                      placeholder="House / flat, street, landmark"
                      rows="3"
                    />
                    {errors.address && <small className="error">{errors.address}</small>}
                  </label>

                  <label className="field full-field">
                    City / area
                    <input
                      value={form.city}
                      onChange={e => update('city', e.target.value)}
                      placeholder="Your neighbourhood"
                    />
                    {errors.city && <small className="error">{errors.city}</small>}
                  </label>
                </div>

                <h3 className="payment-heading">How would you like to pay?</h3>

                <div className="payment-options">
                  <label className={form.payment === 'Cash on delivery' ? 'payment-option chosen' : 'payment-option'}>
                    <input
                      type="radio"
                      checked={form.payment === 'Cash on delivery'}
                      onChange={() => update('payment', 'Cash on delivery')}
                    />
                    <span>
                      <b>Cash on delivery</b>
                      <small>Pay when your order arrives</small>
                    </span>
                    <span className="radio-dot" />
                  </label>

                  <label className={form.payment === 'UPI on delivery' ? 'payment-option chosen' : 'payment-option'}>
                    <input
                      type="radio"
                      checked={form.payment === 'UPI on delivery'}
                      onChange={() => update('payment', 'UPI on delivery')}
                    />
                    <span>
                      <b>UPI on delivery</b>
                      <small>Pay with your preferred UPI app</small>
                    </span>
                    <span className="radio-dot" />
                  </label>
                </div>

                <p className="demo-note">
                  Demo checkout: this prototype records the order locally
                  and does not process real payments.
                </p>

                <button className="primary-btn full" type="submit">
                  Place my order · {money(total)} <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          <aside className="order-summary">
            <div className="summary-title">
              <h3>Order summary</h3>
              <span><ShoppingBag size={16} /></span>
            </div>

            <div className="summary-lines">
              {items.length ? (
                items.map(i => (
                  <div key={i.id}>
                    <span>
                      {i.name} <small>× {i.qty}</small>
                    </span>
                    <b>{money(i.price * i.qty)}</b>
                  </div>
                ))
              ) : (
                <p className="summary-empty">
                  Your delicious picks will show up here.
                </p>
              )}

              <div>
                <span>Subtotal</span>
                <b>{money(subtotal)}</b>
              </div>

              <div>
                <span>
                  Delivery <small>{subtotal >= 599 ? '(on us!)' : ''}</small>
                </span>
                <b>{delivery === 0 ? 'FREE' : money(delivery)}</b>
              </div>

              <div>
                <span>Taxes (5%)</span>
                <b>{money(tax)}</b>
              </div>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>{money(total)}</strong>
            </div>

            {step === 'cart' && (
              <>
                <div className="free-delivery">
                  <div>
                    <span style={{ width: `${Math.min(100, subtotal / 599 * 100)}%` }} />
                  </div>

                  <p>
                    {subtotal >= 599
                      ? 'You’ve unlocked free delivery. Lovely!'
                      : `Add ${money(599 - subtotal)} more for free delivery.`
                    }
                  </p>
                </div>

                <button
                  className="primary-btn full"
                  disabled={!items.length}
                  onClick={checkout}
                >
                  Continue to checkout <ArrowRight size={18} />
                </button>
              </>
            )}

            <div className="summary-assurance">
              <span><Leaf size={15} /> Freshly made</span>
              <span><Heart size={15} /> Packed with care</span>
            </div>

            <div className="summary-help">
              A question about your order?<br />
              <b>We’re always happy to help.</b>
            </div>
          </aside>
        </section>
      )}
    </main>
  );
}

/* =========================================
   FOOTER
========================================= */

function Footer({ setPage }) {
  const goTo = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <button
              className="brand light-brand"
              onClick={() => goTo('home')}
              aria-label="The Hearth Café home"
            >
              <span className="brand-mark"><Flame size={22} /></span>
              <span>
                <b>the hearth</b>
                <small>CAFÉ · KITCHEN · COFFEE</small>
              </span>
            </button>

            <p>
              Comfort on a plate.<br />
              A little warmth in every day.
            </p>
          </div>

          <div className="footer-col">
            <span className="footer-heading">COME ON IN</span>
            <p>
              Every day, 9am–10pm<br />
              Your neighbourhood, your table.
            </p>
          </div>

          <nav className="footer-col footer-links" aria-label="Footer navigation">
            <span className="footer-heading">TAKE A LOOK</span>
            <button onClick={() => goTo('home')}>Our story</button>
            <button onClick={() => goTo('menu')}>Food &amp; drink menu</button>
            <button onClick={() => goTo('cart')}>Your bag</button>
          </nav>

          <div className="footer-note">
            <span className="footer-heading">GOOD FOOD, GOOD MOOD.</span>
            <div>
              Stay a little.<br />
              <em>Leave a little happier.</em>
            </div>
            <Heart size={22} aria-hidden="true" />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 THE HEARTH CAFÉ. MADE WITH HEART.</span>
          <span className="footer-bottom-motto">GOOD THINGS TAKE TIME <i>✳</i></span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            BACK TO TOP <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

/* =========================================
   MAIN APP
========================================= */

function App() {
  const [page, setPage] = useState('home');

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('hearth-cafe-cart');
      return savedCart ? JSON.parse(savedCart) : {};
    } catch (error) {
      console.error('Unable to load saved cart:', error);
      return {};
    }
  });

  const [selected, setSelected] = useState(null);
  const [order, setOrder] = useState(null);

  const count = Object.values(cart).reduce(
    (s, i) => s + i.qty,
    0
  );

  const add = product => {
    setCart(old => ({
      ...old,
      [product.id]: {
        ...product,
        qty: (old[product.id]?.qty || 0) + 1
      }
    }));
  };

  const changeQty = (id, delta) => {
    setCart(old => {
      const next = { ...old };

      if (!next[id]) return old;

      const qty = next[id].qty + delta;

      if (qty <= 0) {
        delete next[id];
      } else {
        next[id] = { ...next[id], qty };
      }

      return next;
    });
  };

  const removeItem = id => {
    setCart(old => {
      const next = { ...old };
      delete next[id];
      return next;
    });
  };

  useEffect(() => {
    try {
      localStorage.setItem(
        'hearth-cafe-cart',
        JSON.stringify(cart)
      );
    } catch (error) {
      console.error('Unable to save cart:', error);
    }
  }, [cart]);

  const placeOrder = details => {
    setOrder(details);
    window.__hearthOrder = details.orderId;
    setCart({});
    setPage('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <>
      <Header page={page} setPage={setPage} count={count} />

      {page === 'home' ? (
        <Home
          setPage={setPage}
          add={add}
          cart={cart}
          openProduct={setSelected}
        />
      ) : page === 'menu' ? (
        <MenuPage
          add={add}
          cart={cart}
          openProduct={setSelected}
        />
      ) : (
        <CartPage
          key={order?.orderId || 'cart'}
          cart={cart}
          changeQty={changeQty}
          removeItem={removeItem}
          setPage={setPage}
          placeOrder={placeOrder}
          order={order}
        />
      )}

      <Footer setPage={setPage} />

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
        onAdd={add}
      />
    </>
  );
}

export default App;
