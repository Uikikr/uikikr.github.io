(function navTop() {
  window.onload = function () {
    document.getElementById("header1").innerHTML = `  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <svg
          class="bi me-2"
          width="40"
          height="32"
          role="img"
          aria-label="Digging Up Ancient Aliens"
        >
          <use xlink:href="#DiggingUpAncientAlienss"></use>
        </svg>
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="index.html" class="nav-link px-2 link-dark">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle px-2 link-dark"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Episodes</a
          >
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="episodes.html">Episodes</a></li>
            <li><a class="dropdown-item" href="bonus.html">Bonus</a></li>
            <li>
              <a href="archeologists-ufos.html" class="dropdown-item"
                >Archeologists & UFOs</a
              >
            </li>
          </ul>
        </li>

        <li>
          <a href="about.html" class="nav-link px-2 link-dark">About</a>
        </li>
        <li>
          <a href="contact.html" class="nav-link px-2 link-dark">Contact</a>
        </li>
        <li>
          <a href="merch.html" class="nav-link px-2 link-dark">Shop</a>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <a
          class="btn btn-outline-primary me-2"
          href="https://www.facebook.com/Digging-up-Ancient-Aliens-108173641647111/"
          target="_blank"
          aria-label="Facebook"
          ><i class="fab fa-facebook-f"></i
        ></a>
        <a
          class="btn btn-outline-primary me-2"
          href="https://www.instagram.com/digging_up_ancient_aliens/"
          target="_blank"
          aria-label="Instagram"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          class="btn btn-outline-primary me-2"
          href="https://podcasts.apple.com/us/podcast/digging-up-ancient-aliens/id1593769356"
          target="_blank"
          aria-label="Apple Podcast"
          ><i class="fas fa-podcast"></i>
        </a>
      </div>
    </header>
  </div>`;

    document.getElementById("footer1").innerHTML = `    <div class="container">
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
      >
        <div class="col-md-4 d-flex align-items-center">
          <span class="text-muted">&copy; 2022 Digging Up Ancient Aliens</span>
        </div>
  
        <ul class="nav col-md-4 justify-content-evenly list-unstyled d-flex">
          <li class="ms-3">
            <a
              class="CTA nav-link"
              href="https://www.facebook.com/Digging-up-Ancient-Aliens-108173641647111/"
              target="_blank"
              aria-label="Facebook"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </li>
          <li class="ms-3">
            <a
              class="CTA nav-link"
              href="https://twitter.com/DUAncientAliens"
              target="_blank"
              aria-label="Twitter"
              ><i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="ms-3">
            <a
              class="CTA nav-link"
              href="https://www.instagram.com/digging_up_ancient_aliens/"
              target="_blank"
              aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li class="ms-3">
            <a
              class="CTA nav-link"
              href="https://www.tiktok.com/@digging_up_ancient_alien"
              target="_blank"
              aria-label="tiktok"
              ><i class="fab fa-tiktok"></i
            ></a>
          </li>
          <li class="ms-3">
            <a
              class="CTA nav-link"
              href="https://podcasts.apple.com/us/podcast/digging-up-ancient-aliens/id1593769356"
              target="_blank"
              aria-label="Apple Podcast"
              ><i class="fas fa-podcast"></i>
            </a>
          </li>
          <li class="ms-3">
            <a
              class="CTA nav-link"
              href="https://www.youtube.com/channel/UCM7oHt82IYXWd2R5Jlaz8cg"
              target="_blank"
              aria-label="YouTube"
              ><i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="ms-3">
            <a
              class="CTA nav-link"
              href="https://feeds.captivate.fm/digging-up-ancient-aliens/"
              target="_blank"
              aria-label="RSS-Feed"
              ><i class="fas fa-rss"></i>
            </a>
          </li>
        </ul>
        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="episodes.html" class="nav-link px-2 text-muted"
              >Episodes</a
            >
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link px-2 text-muted">About</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link px-2 text-muted">Contact</a>
          </li>
          <li class="nav-item">
            <a href="legal.html" class="nav-link px-2 text-muted">Legal</a>
          </li>
          <!--<li class="nav-item">
              <a href="#" id="open_preferences_center"
                >Change your cookie preferences</a
              >
            </li>-->
        </ul>
      </footer>`;
    document.getElementById(
      "podcastplayers"
    ).innerHTML = `        <div class="container">
    <div class="row row-cols-auto">
      <div class="col">
        <a
          href="https://podcasts.apple.com/us/podcast/digging-up-ancient-aliens/id1593769356"
          target="_blank"
          ><img
            src="img/p_Apple_Podcasts.svg"
            alt="Digging up ancient aliens at Apple Podcast"
        /></a>
      </div>
      <div class="col">
        <a
          href="https://podcasts.google.com/u/3/feed/aHR0cHM6Ly9mZWVkcy5jYXB0aXZhdGUuZm0vZGlnZ2luZy11cC1hbmNpZW50LWFsaWVucy8"
          target="_blank"
          ><img
            src="img/p_Google_Podcasts.svg"
            alt="Digging up ancient aliens at Google"
        /></a>
      </div>
      <div class="col">
        <a
          href="https://open.spotify.com/show/5oXyzZUokb0wL55LPoavSy"
          target="_blank"
          ><img
            src="img/p_spotify.svg"
            alt="Digging up ancient aliens at spotify"
        /></a>
      </div>
      <div class="col">
        <a
          href="https://www.stitcher.com/podcast/digging-up-ancient-aliens"
          target="_blank"
          ><img
            src="img/p_Stitcher.png"
            alt="Digging up ancient aliens at stitcher"
            width="150px"
            height="38px"
        /></a>
      </div>
      <div class="col">
        <a
          title="Listen to Digging Up Ancient Aliens on RadioPublic"
          href="https://radiopublic.com/digging-up-ancient-aliens-WomoQm"
          target="_blank"
          ><img
            src="https://spotlight.radiopublic.com/images/badges/radiopublic-white.png"
            alt="Listen to Digging Up Ancient Aliens on RadioPublic"
            width="124"
            height="40"
        /></a>
      </div>
      <div class="col">
        <a href="https://pca.st/hhtzxuc6" target="_blank"
          ><img
            src="img/pocketcasts.svg"
            alt="Digging up ancient aliens at Pocketcast"
        /></a>
      </div>
    </div>
  </div>`;
  };
})();
