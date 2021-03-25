/**
* Template Name: Delicious - v4.0.1
* Template URL: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
//   let selectHeader = select('#header')
//   let selectTopbar = select('#topbar')
//   if (selectHeader) {
//     const headerScrolled = () => {
//       if (window.scrollY > 100) {
//         selectHeader.classList.add('header-scrolled')
//         if (selectTopbar) {
//           selectTopbar.classList.add('topbar-scrolled')
//         }
//       } else {
//         selectHeader.classList.remove('header-scrolled')
//         if (selectTopbar) {
//           selectTopbar.classList.remove('topbar-scrolled')
//         }
//       }
//     }
//     window.addEventListener('load', headerScrolled)
//     onscroll(document, headerScrolled)
//   }

// const Foo = (foo,state = {})=>({...state, foo})
// const Bar = (bar,state = {})=>({...state, bar, meth(){} })

// Bar('bar',Foo('foo'))
// [Bar,Foo].reduce((o,T)=>T(o),{})

// // const el = document.querySelector("#header")
const Region = ( margin, threshold = 0,
	handlers = {}
,	obs = new IntersectionObserver(
		arr=> arr.map( e=>
				Object.keys( handlers )
					.filter( sel=> e.target.matches(sel) )
					.map( sel=> handlers[sel].map( fn=> fn(e) ) )
			)
	,	{ rootMargin: margin, threshold }//"-100px 0px 0px 0px"}
	)
)=> ({
	on( sel, fn )
	{
		handlers[sel] = handlers[sel] || []
		handlers[sel].push( fn )
		document.querySelectorAll(sel).forEach( el=> obs.observe(el) )
		return this
	}
})
// const observer = 
// new IntersectionObserver( 
// 	([e]) => console.log(e.intersectionRatio )|| e.target.classList.toggle("header-scrolled", e.intersectionRatio == 0),
// 	{thresholds: 1, rootMargin: "-100px 0px 0px 0px"}
// )

// observer.observe(el)
// let dbgdiv = document.createElement('div')
// dbgdiv.style = `border: 1px solid red; position:fixed; z-index: 1000; top: 1px; right: 0px; bottom: 0px; left: 0px;`
// document.body.append( dbgdiv )
// const visibleRegion = 
// Region( -100,0,0,0 )
// Region( '50%',0,0,0 )
const $topbar = document.querySelector('#topbar')
const $header = document.querySelector('#header')

if( getComputedStyle(header).position == 'sticky' )
	Region( '-1px 0px 0px 0px', [0,1] )
		.on( `#header`, e=> {
			// console.log(e.intersectionRatio != 1)
			e.target.classList.toggle("header-scrolled", e.intersectionRatio != 1)
			if( topbar )
				topbar.classList.toggle("topbar-scrolled", e.intersectionRatio != 1)
		})


// background-image: radial-gradient( transparent, black), url(assets/img/backgrounds/w1920/abstract-2178720.jpg);
// background-blend-mode: luminosity, normal;
// background-attachment: fixed;
const bgs = {
	hero: '/assets/img/backgrounds/w1920/abstract-2178720.jpg'
,	about: '/assets/img/backgrounds/w1920/piano-4487573.jpg'
,	gallery: '/assets/img/backgrounds/w1920/piano-2308370.jpg'
,	contact: '/assets/img/backgrounds/h1280/piano-1143734.jpg'
}
Region( '-70px 0px 0px 0px', 0.3 ).on('section:not(#topbar)', e=> {
	if(e.isIntersecting) {
		// console.log( e.intersectionRatio, e.target, 'visible:',  e.isVisible, 'Intersecting:',  e.isIntersecting )
		// e.intersectionRatio > 0 && ()
		document.body.style.setProperty('--body-bg', `url("${bgs[e.target.id]}")` )
	}
})





  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  if( heroCarouselIndicators )
  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()