<header class="header">
  <nav class="navigation">
    <div class="container-fluid">
      <div class="navigation__column left">
        <div class="header__logo"><a class="ps-logo" href="{{route('home')}}"><img src="/assets/img/logo.png" alt=""></a></div>
      </div>
      <div class="navigation__column center">
        <ul class="main-menu menu">
          <li class="menu-item"><a href="{{route('main-allproducts')}}">Products</a></li>
          <li class="menu-item"><a href="{{route('main-allcategories')}}">Categories</a></li>
          <li class="menu-item menu-item-has-children has-mega-menu"><a href="#">Men</a>
            <div class="mega-menu">
              <div class="mega-wrap">
                <div class="mega-column">
                  <ul class="mega-item mega-features">
                    <li><a href="product-listing.html">NEW RELEASES</a></li>
                    <li><a href="product-listing.html">FEATURES SHOES</a></li>
                    <li><a href="product-listing.html">BEST SELLERS</a></li>
                    <li><a href="product-listing.html">NOW TRENDING</a></li>
                    <li><a href="product-listing.html">SUMMER ESSENTIALS</a></li>
                    <li><a href="product-listing.html">MOTHER'S DAY COLLECTION</a></li>
                    <li><a href="product-listing.html">FAN GEAR</a></li>
                  </ul>
                </div>
                <div class="mega-column">
                  <h4 class="mega-heading">Shoes</h4>
                  <ul class="mega-item">
                    <li><a href="product-listing.html">All Shoes</a></li>
                    <li><a href="product-listing.html">Running</a></li>
                    <li><a href="product-listing.html">Training & Gym</a></li>
                    <li><a href="product-listing.html">Basketball</a></li>
                    <li><a href="product-listing.html">Football</a></li>
                    <li><a href="product-listing.html">Soccer</a></li>
                    <li><a href="product-listing.html">Baseball</a></li>
                  </ul>
                </div>
                <div class="mega-column">
                  <h4 class="mega-heading">CLOTHING</h4>
                  <ul class="mega-item">
                    <li><a href="product-listing.html">Compression & Nike Pro</a></li>
                    <li><a href="product-listing.html">Tops & T-Shirts</a></li>
                    <li><a href="product-listing.html">Polos</a></li>
                    <li><a href="product-listing.html">Hoodies & Sweatshirts</a></li>
                    <li><a href="product-listing.html">Jackets & Vests</a></li>
                    <li><a href="product-listing.html">Pants & Tights</a></li>
                    <li><a href="product-listing.html">Shorts</a></li>
                  </ul>
                </div>
                <div class="mega-column">
                  <h4 class="mega-heading">Accessories</h4>
                  <ul class="mega-item">
                    <li><a href="product-listing.html">Compression & Nike Pro</a></li>
                    <li><a href="product-listing.html">Tops & T-Shirts</a></li>
                    <li><a href="product-listing.html">Polos</a></li>
                    <li><a href="product-listing.html">Hoodies & Sweatshirts</a></li>
                    <li><a href="product-listing.html">Jackets & Vests</a></li>
                    <li><a href="product-listing.html">Pants & Tights</a></li>
                    <li><a href="product-listing.html">Shorts</a></li>
                  </ul>
                </div>
                <div class="mega-column">
                  <h4 class="mega-heading">BRAND</h4>
                  <ul class="mega-item">
                    <li><a href="product-listing.html">NIKE</a></li>
                    <li><a href="product-listing.html">Adidas</a></li>
                    <li><a href="product-listing.html">Dior</a></li>
                    <li><a href="product-listing.html">B&G</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="menu-item"><a href="{{route('main-allproducts')}}">Blog</a></li>
        </ul>
      </div>
      <div class="navigation__column right">
        <form class="ps-search--header" action="do_action" method="post">
          <input class="form-control" type="text" placeholder="Search Product…">
          <button><i class="ps-icon-search"></i></button>
        </form>
        <div class="menu-toggle"><span></span></div>
      </div>
    </div>
  </nav>
</header>