<!DOCTYPE html>
<html lang="{{ request.locale.iso_code }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>{{ page_title }} | {{ shop.name }}</title>

  {% if page_description %}
    <meta name="description" content="{{ page_description | escape }}">
  {% endif %}

  <link rel="canonical" href="{{ canonical_url }}">

  <meta property="og:title" content="{{ page_title }}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{ canonical_url }}">
  <meta property="og:image" content="{{ page_image | image_url: width: 1200 }}">

  {% if settings.favicon != blank %}
    <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32 }}">
  {% endif %}

  {{ content_for_header }}

  {{ 'style.css' | asset_url | stylesheet_tag }}
</head>

<body>
  <div class="cursor-glow" id="cursorGlow"></div>

  <div class="toast" id="cartToast">
    <div class="toast-dot"></div>
    <span id="toastMessage">Product added to routine!</span>
  </div>

  {% section 'header' %}

  <main id="MainContent" role="main">
    {{ content_for_layout }}
  </main>

  {% section 'footer' %}

  <div class="search-overlay" id="searchOverlay">
    <div class="search-container">
      <button class="search-close-btn" id="closeSearchBtn" aria-label="Close Search">&times;</button>
      <div class="search-box">
        <svg class="search-icon-inside" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="searchInput" placeholder="Search products, ingredients..." autocomplete="off">
      </div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>

  {{ 'app.js' | asset_url | script_tag }}
</body>
</html>
