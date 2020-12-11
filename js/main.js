$(document).ready(function() {

	// Инициализация подержки SVG в IE (плагин svg4everybody)
	svg4everybody();

	// Меню каталога при наведении на пункт
  	$(document).on("mouseenter", ".catalog-menu__item", function () {
  		var width = $(window).outerWidth(),
            $catalogMenu = $(this).closest(".catalog-menu"),
			$submenu = $(this).find(".catalog-menu__submenu"),
			submenuHeight = $submenu.innerHeight();

  		if (submenuHeight > $catalogMenu.innerHeight() && width > 991){
          $catalogMenu.height(submenuHeight);
		}
    });
  	$(document).on("mouseleave", ".catalog-menu__item",function () {
  		$(this).closest(".catalog-menu").removeAttr("style");
    });

	// Меню каталога в мобильной версии
	if ($(".catalog-menu__submenu-subtitle").length){
		$(".catalog-menu__submenu-subtitle").each(function(){
			if ($(this).next(".catalog-menu__submenu-list").find("li").length){
				$(this).addClass("is-dropdown");
			}
		})
	}
  	$(document).on("click", ".header__catalog-button", function () {
  		var width = $(window).outerWidth(),
            $catalogPopover = $(this).next(".header__catalog-popover");

  		if (width <= 991){
          $(this).toggleClass("active");
          $catalogPopover.toggle();
          /*
          $(".nav-mobile__toggle").removeClass("active");


          if($(".header__top").is(":visible")){
            $(".header__top").hide();
          }
          */

		}
    });
  	$(document).on("click", ".catalog-menu__item-link", function (e) {
  		var width = $(window).outerWidth(),
            $catalogMenu = $(this).closest(".catalog-menu"),
			$submenu = $(this).next(".catalog-menu__submenu"),
			submenuHeight = $submenu.innerHeight(),
            offsetCatalog = $(".header__catalog-popover").offset().top;

  		if (width <= 991){
  		  e.preventDefault();
          $(this).parent().addClass("active");
          $(".header__catalog-back").addClass("active");

          if (submenuHeight > $catalogMenu.innerHeight()){
            $catalogMenu.height(submenuHeight);
          }

          if ($(window).scrollTop() > offsetCatalog){
            $("html, body").animate({scrollTop: offsetCatalog}, 500);
          }

		}
    });
  	$(document).on("click", ".header__catalog-back", function () {
        $(this).removeClass("active");
        $(".catalog-menu__item").removeClass("active");
    });
	 $(document).on('click', '.catalog-menu__submenu-subtitle.is-dropdown, .catalog-menu__submenu-subtitle.is-dropdown > a', function (e) {
		var width = $(window).outerWidth();
		if (width <= 480){
			e.preventDefault();
			$(this).toggleClass("active");
			$(this).next().slideToggle(300);
		}
	});
    $(window).on('resize', function () {
      var width = $(window).outerWidth();
      if (width > 991){
        $(".catalog-menu__item, .header__catalog-back, .header__catalog-button, .catalog-menu__submenu-subtitle").removeClass("active");
        $(".header__catalog-popover, .catalog-menu__submenu-list").removeAttr("style");
      }
      if (width > 480){
        $(".catalog-menu__submenu-subtitle").removeClass("active");
        $(".catalog-menu__submenu-list").removeAttr("style");
      }
    });


    // Форма поиска
  	$(document).on("click", ".header__search-toggle", function () {
        $(this).toggleClass("active");
        if ($(".header__search").length){
          $(".header__search").toggle();
        }
    });

    $(window).on('resize', function () {
      var width = $(window).outerWidth();
      if (width <= 991 || width > 1199){
        $(".header__search-toggle").removeClass("active");
        $(".header__search").removeAttr("style");
      }
    });

    $('.search-form__input').on('input focus change', function(){
      if ($(this).val() === ""){
        $(this).closest(".search-form").find(".search-form__popup").addClass("active");
      }
      else{
        $(this).closest(".search-form").find(".search-form__popup").removeClass("active");
      }
    });

    $(document).on('click', function(e) {
      var searchForm = '.search-form';
      if (!$(searchForm).is(e.target)
          && $(e.target).closest(searchForm).length === 0){
        $(searchForm).find(".search-form__popup").removeClass("active");
      }
    });

  	// Кнопка открытия мобильного меню
  	$(document).on("click", ".nav-mobile__toggle", function () {
        $(this).toggleClass("active");
        if ($(".header__top").length) {
          $(".header__top").toggle();
        }
    });

  	// Попап корзины
    $(document).on("click", ".nav-mobile .group-button--popup .group-button__link", function (e) {
      e.preventDefault();
      $(this).closest(".group-button").toggleClass("active");
    });

  $(document).on('click', function(e) {

    var menuMobile = '.header__top',
        btnToggleMenuMobile = '.nav-mobile__toggle';

    var menuCatalog = '.header__catalog-popover',
        btnToggleMenuCatalog = '.header__catalog-button';

    var popupHeader = '.group-button--popup';

    if (!$(menuMobile).is(e.target)
        && $(e.target).closest(menuMobile).length === 0
        && !$(btnToggleMenuMobile).is(e.target)
        && $(e.target).closest(btnToggleMenuMobile).length === 0){
      if($(menuMobile).is(":visible")){
        $(menuMobile).removeAttr("style");
      }
      $(btnToggleMenuMobile).removeClass("active");
    }

    if (!$(menuCatalog).is(e.target)
        && $(e.target).closest(menuCatalog).length === 0
        && !$(btnToggleMenuCatalog).is(e.target)
        && $(e.target).closest(btnToggleMenuCatalog).length === 0){
      if($(menuCatalog).is(":visible")){
        $(menuCatalog).removeAttr("style");
      }
      $(btnToggleMenuCatalog).removeClass("active");
    }

    if (!$(popupHeader).is(e.target)
        && $(e.target).closest(popupHeader).length === 0){
      $(popupHeader).removeClass("active");
    }

  });

  $(window).on('resize', function () {
      var width = $(window).outerWidth();
      if (width > 991){
        $(".nav-mobile__toggle").removeClass("active");
        $(".header__top").removeAttr("style");
      }
    });

  	// Основное мобильное меню
    if ($(".header__menu .menu").length){
      $(".header__mobile-menu").append($(".header__menu .menu").clone());
    }

  	//
    if ($(".header__group-buttons").length){
        $(".nav-mobile__content").append('<div class="nav-mobile__buttons"></div>');
        $(".nav-mobile .nav-mobile__buttons").append($(".header__group-buttons").children().clone());
    }
    if ($(".header__city-select").length){
        $(".nav-mobile__content").append('<div class="nav-mobile__city-select"></div>');
        $(".nav-mobile .nav-mobile__city-select").append($(".header__city-select").clone().removeClass("header__city-select"));
    }

	// Меню в футере
  	$(document).on("click", ".footer__menu-title", function () {
        var $this = $(this),
            width = $(window).outerWidth();

        if (width <= 575){
          $this.toggleClass("active");
          $this.next().slideToggle(300);
        }
    });
    $(window).on('resize', function () {
      var width = $(window).outerWidth(),
          $footerMenuTitle = $(".footer__menu-title"),
          $footerMenuContent = $(".footer__menu-content");

      if (width > 575){
        if ($footerMenuTitle.length){
          $footerMenuTitle.removeClass("active");
        }
        if ($footerMenuContent.length){
          $footerMenuContent.removeAttr("style");
        }
      }
    });

	// Инициализация всплывающео окна (плагин Tooltipster)

    if ($('[data-tooltip]').length){
      $('[data-tooltip]').each(function () {
        var $this = $(this),
            trigger = $this.attr("data-tooltip-trigger"),
            theme = $this.attr("data-tooltip-theme");

        if (trigger === undefined){

          if (device.desktop()){
            trigger = "hover";
          }
          else{
            trigger = "click";
          }
        }
        if (theme === undefined){
          theme = "default";
        }

        $this.tooltipster({
          theme: theme,
          distance: 2,
          trigger: trigger,
          contentAsHTML: true,
          side: ['bottom', 'top', 'left', 'right'],
          functionPosition: function(instance, helper, position){
            //position.coord.left =  $(helper.origin).offset().left;
            return position;
          }
          //anchor: 'top-left'
        });
      });
    }

    // Инициализация выпадающего списка (плагин Selectric)

    $(document).on('selectric-init selectric-change', '.select', function(event, element, selectric) {
      var select = $(element),
          placeholder = select.data('placeholder'),
          wrapper = select.closest('.selectric-wrapper'),
          label = wrapper.find('.label');

      if (placeholder != undefined && select.length) {
        if (!label.prev().length){
          label.before('<span class="label selectric-placeholder">' + placeholder + '</span>');
        }
        if (select.find("option:selected").hasClass("placeholder") || (select.attr("multiple") != undefined && select.val() != undefined && select.val() != null && !select.val().length)){
          label.html("");
        }
        else{
          wrapper.addClass("selectric-selected");
        }
      }

    });

  $(document).on('change', '.select', function() {
    $(this).closest('.selectric-wrapper').addClass("selectric-selected");
  });

    if ($('.select').length){
      $('.select').selectric({
        nativeOnMobile: false
      });
    }

    // инициализация масок для полей (плагин maskedinput)
    $('.mask-phone').mask('+7 (000) 000-00-00');
    $('.mask-date').mask('00/00/0000');

    // инициализация маски телефона (плагин maskedinput)
    $('.modal').on($.modal.OPEN, function(event, modal) {
    if ($(this).find(".box-slider__input").length){
      $(this).find(".box-slider__input").slider('refresh');
    }

    });

	// Инициализация слайдера "Горячие спецпредложения"
	if ($(".carousel-offers").length){
      var sliderOffers = tns({
        container: '.carousel-offers__slider',
        controlsPosition: 'bottom',
        nav: false,
        //slideBy: 'page',
        gutter: 15,
        lazyload: true,
        lazyloadSelector: ".tns-img-lazy",
        loop: false,
        mouseDrag: true,
        fixedWidth: false,
        onInit: function(event){
          $(event.container).closest(".tns-outer").append('<div class="tns-counter">' + (event.index + 1) + ' / ' + event.slideCount + '</div>');
        },
        responsive: {
          0: {
            items: 1,
            fixedWidth: false
          },
          481: {
            items: 1,
            fixedWidth: 345
          },
          681: {
            items: 2,
            fixedWidth: false
          },
          768: {
            items: 2,
            gutter: 20,
            fixedWidth: false
          },
          992: {
            items: 2,
            gutter: 30,
            fixedWidth: false
          },
          1400: {
            items: 3,
            gutter: 30,
            fixedWidth: false
          }
        }
      });
      sliderOffers.events.on('indexChanged', function (event) {
        $(event.container).closest(".tns-outer").find(".tns-counter").html((event.index + 1) + ' / ' + event.slideCount);
      });
	}

  // Инициализация слайдера фотографий продукта Горячих спецпредложений
  if ($(".carousel-offers .product__slider").length){
    $(".carousel-offers .product__slider").owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      lazyLoad: true,
      responsive: {
        0:{
          //items:1
        },
        600:{
          //items:3
        }
      }
    });
  }

	// Инициализация слайдеров "Популярные продукты", "Вы смотрели", "С этим товаром покупают"
	if ($(".carousel-products").length){
      var sliderProducts = [],
          sliderID = "",
          sliderOptions = {};
      $(".carousel-products").each(function (count) {
        sliderID = $(this).find(".carousel-products__slider").attr("id");
        sliderOptions = {
          container: "#" + sliderID,
          controlsPosition: 'bottom',
          navPosition: 'bottom',
          //slideBy: 'page',
          lazyload: true,
          lazyloadSelector: ".tns-img-lazy",
          loop: false,
          mouseDrag: true,
          nav: false,
          gutter: 15,
          onInit: function(event){
            $(event.container).closest(".tns-outer").append('<div class="tns-counter">' + (event.index + 1) + ' / ' + event.slideCount + '</div>');
          },
          responsive: {
            0: {
              items: 1,
              fixedWidth: false
            },
            481: {
              items: 1,
              fixedWidth: 345
            },
            681: {
              items: 2,
              fixedWidth: false,
              gutter: 0
            },
            992: {
              items: 3,
              fixedWidth: false,
              nav: true,
              gutter: 0
            },
            1301: {
              items: 4,
              nav: true,
              gutter: 0
            }
          }
        };
        sliderProducts[count] = tns(sliderOptions);
        sliderProducts[count].events.on('indexChanged', function (event) {
          $(event.container).closest(".tns-outer").find(".tns-counter").html((event.index + 1) + ' / ' + event.slideCount);
        });



      });



	}

  // Инициализация слайдера фотографий Популярных продуктов, Вы смотрели, С этим товаром покупают
  if ($(".carousel-products .product__slider").length){
    $(".carousel-products .product__slider").owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      lazyLoad: true
    });
  }

  // Инициализация слайдера "Новинки" и аксессуаров

  function carouselMultipleProducts(carouselSlider, itemClass, settingsCarousel, settingsOwlCarousel, productsItemsDefault, arrParam) {
    /*
     * carouselSlider - селектор слайдера
     * itemClass - название класса для одного слайда
     * settingsCarousel - основные параметры плагина TinySlider
     * settingsOwlCarousel - основные параметры плагина OwlCarousel
     * productsItemsDefault - Количество карточек в одном слайде по умолчанию
     * arrParam - массив, отвечающий за количество карточек в одном слайде для заданной ширины окна браузера
      пример: [[480, 1], [768, 4], [1200, 5]]
      - от 480px и ниже в одном слайде будет 1 карточка товара
      - от 768px и ниже в одном слайде будет 4 карточки товара
      - от 1200px и ниже в одном слайде будет 5 карточек товара
     */
    var width = $(window).outerWidth(), // Ширина окна браузера
        widthLoad = width, // Ширина окна браузера после загрузки
        sliderProducts = "", // Переменная слайдера
        $carouselSliderItem, // Элемент одного слайда
        totalProducts, // Всего карточек товара
        slideProductsItems = productsItemsDefault, // Количество карточек в одном слайде
        slideItems, // Количество слайдов
        slideIndex; // Текущий слайд

    countSlideItems();
    buildCarousel();




    $(window).on('resize', updateCarousel);

    function updateCarousel(event) {
      width = $(window).outerWidth();
      if (width !== widthLoad){
        destroyCarousel();
        countSlideItems();
        buildCarousel();
      }
    }


    function countSlideItems() {
      slideProductsItems = productsItemsDefault;
      totalProducts = $(carouselSlider).find(".product").length;
      if (arrParam.length){
        for (var i = 0; i < arrParam.length; i++){
          if (width <= arrParam[i][0]){
            slideProductsItems = arrParam[i][1];
            break;
          }
        }
      }

      slideItems = Math.ceil(totalProducts/slideProductsItems);
    }

    function buildCarousel() {

      for (var i = 0; i < slideItems; i++){
        $(carouselSlider).append('<div class="slide-item"><div class="' + itemClass + '"></div></div>');
      }

      $carouselSliderItem = $(carouselSlider).find("." + itemClass);
      $(carouselSlider).find(".product").each(function (count) {
        slideIndex = Math.ceil((count + 1)/slideProductsItems);
        $carouselSliderItem.eq(slideIndex - 1).append($(this));
      });

      sliderProducts = tns(settingsCarousel);

      if ($(carouselSlider).find(".owl-carousel").length){
        $(carouselSlider).find(".owl-carousel").owlCarousel(settingsOwlCarousel);
      }

      sliderProducts.events.off('indexChanged');
      sliderProducts.events.on('indexChanged', function (event) {
        $(event.container).closest(".tns-outer").find(".tns-counter").html((event.index + 1) + ' / ' + event.slideCount);
      });
    }

    function destroyCarousel() {
      if ($(carouselSlider).hasClass("tns-slider")){
        if ($(carouselSlider).find(".owl-carousel").hasClass('owl-loaded')){
          $(carouselSlider).find(".owl-carousel").trigger('destroy.owl.carousel');
        }
        sliderProducts.destroy();

        $(carouselSlider).find(".product").each(function (count, elem) {
          $(carouselSlider).append($(this));
        });
        $(carouselSlider).find(".slide-item").remove();
      }
    }

  }

  if ($(".carousel-new-products").length){

    var settingsNewProductsCarousel = {
      container: ".carousel-new-products__slider",
      items: 1,
      controlsPosition: 'bottom',
      navPosition: 'bottom',
      lazyload: true,
      lazyloadSelector: ".tns-img-lazy",
      loop: false,
      mouseDrag: true,
      nav:false,
      gutter: 15,
      onInit: function(event){
        $(event.container).closest(".tns-outer").append('<div class="tns-counter">' + (event.index + 1) + ' / ' + event.slideCount + '</div>');
      },
      responsive: {
        0: {
          fixedWidth: false,
          center: false
        },
        481: {
          fixedWidth: 345
        },
        681: {
          fixedWidth: false,
          gutter: 0
        },
        992: {
          fixedWidth: false,
          nav: true,
          gutter: 0
        }
      }
    };

    var settingsNewProductsCarouselOwl = {
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      lazyLoad: true
    };

    carouselMultipleProducts(".carousel-new-products__slider", "new-products__carousel-item", settingsNewProductsCarousel, settingsNewProductsCarouselOwl, 7, [[680, 1], [991, 4], [1300, 5]]);
  }


  if ($(".product-card .card-accessories__carousel").length){

    var settingsAccessoriesCarousel = {
      container: ".product-card .card-accessories__carousel",
      items: 1,
      controlsPosition: 'bottom',
      navPosition: 'bottom',
      lazyload: true,
      lazyloadSelector: ".tns-img-lazy",
      loop: false,
      mouseDrag: true,
      nav:false,
      gutter: 0,
      onInit: function(event){
        $(event.container).closest(".tns-outer").append('<div class="tns-counter">' + (event.index + 1) + ' / ' + event.slideCount + '</div>');
      },
      responsive: {
        0: {
          fixedWidth: false,
          center: false

        },
        481: {
          fixedWidth: 375
        },
        681: {
          fixedWidth: false,
          nav: true
        },
        992: {
          fixedWidth: false,
          nav: true
        }
      }
    };

    var settingsAccessoriesCarouselOwl = {
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      lazyLoad: true
    };

    carouselMultipleProducts(".product-card .card-accessories__carousel", "card-accessories__products-item", settingsAccessoriesCarousel, settingsAccessoriesCarouselOwl, 6, [[680, 1], [991, 4], [1300, 4]]);
  }

  if ($(".modal-collect .card-accessories__carousel").length){

    var settingsModalAccessoriesCarousel = {
      container: ".modal-collect .card-accessories__carousel",
      items: 1,
      controlsPosition: 'bottom',
      navPosition: 'bottom',
      lazyload: true,
      lazyloadSelector: ".tns-img-lazy",
      loop: false,
      mouseDrag: true,
      nav:false,
      gutter: 0,
      onInit: function(event){
        $(event.container).closest(".tns-outer").append('<div class="tns-counter">' + (event.index + 1) + ' / ' + event.slideCount + '</div>');
      },
      responsive: {
        0: {
          fixedWidth: false,
          center: false

        },
        481: {
          fixedWidth: 375
        },
        681: {
          fixedWidth: false,
          nav: true
        },
        992: {
          fixedWidth: false,
          nav: true
        }
      }
    };

    var settingsModalAccessoriesCarouselOwl = {
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      lazyLoad: true
    };

    carouselMultipleProducts(".modal-collect .card-accessories__carousel", "card-accessories__products-item", settingsModalAccessoriesCarousel, settingsModalAccessoriesCarouselOwl, 6, [[680, 1], [991, 4], [1300, 4]]);
  }

  // Инициализация слайдера "Почему мы лучше в конкурентов" в мобильной версии
  if ($(".advantages__items").length){

    carouselAdvantages();
    function carouselAdvantages() {
      var width = "", // Ширина окна браузера
          carouselSlider = ".advantages__items"; // Переменная селектора слайдера

      var settingsCarousel = {
        items: 1,
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsive:{
          0:{
            items:1
          },
          681:{
            items: 2
          }
        }
      };

      sliderInit();

      $(window).on('resize', sliderInit);

      function sliderInit() {
        width = $(window).outerWidth();
        if (width < 768){
          if (!$(carouselSlider).hasClass('owl-loaded')){
            $(carouselSlider).owlCarousel(settingsCarousel);
          }
        }
        else{
          if ($(carouselSlider).hasClass('owl-loaded')){
            $(carouselSlider).trigger('destroy.owl.carousel');
          }
        }
      }
    }
  }

  // Инициализация слайдера фотографий в продукте каталога
  if ($(".catalog__products .product__slider").length){
    $(".catalog__products .product__slider").owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      //mouseDrag: false,
      //touchDrag: false,
      //pullDrag: false,
      lazyLoad: true
    });
  }

  // Инициализация слайдера фотографий в аксессуарах
  if ($(".card-accessories__products .product__slider").length){
    $(".card-accessories__products .product__slider").owlCarousel({
      items: 1,
      loop: false,
      margin: 0,
      nav: false,
      dots: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      lazyLoad: true
    });
  }

  // Инициализация слайдера галереи в карточке продукта
  if ($("#gallery_carousel").length){
    carouselCardGallery();
    function carouselCardGallery() {
      var width = $(window).outerWidth(), // Ширина окна браузера
          widthLoad = width, // Ширина окна браузера после загрузки
          carouselContainer = "#gallery_carousel", // Переменная селектора слайдера
          carouselGallery = ""; // Переменная слайдера

      var settingsCarouselDesktop = {
        container: carouselContainer,
        navContainer: "#gallery_thumbnails",
        navAsThumbnails: true,
        items: 1,
        controls: false,
        gutter: 10,
        lazyload: true,
        loop: false,
        mouseDrag: false
      };
      var settingsCarouselMobile = {
        container: carouselContainer,
        items: 1,
        controls: false,
        gutter: 10,
        lazyload: true,
        loop: false,
        mouseDrag: false
      };

      carouselInit();

      $(window).on('resize', carouselUpdate);



      function carouselInit() {
        width = $(window).outerWidth();
        if ($(carouselContainer).hasClass("tns-slider")){
          carouselGallery.destroy();
          carouselGallery = "";
        }

        if (width < 768){
          carouselGallery = tns(settingsCarouselMobile);
        }
        else{
          carouselGallery = tns(settingsCarouselDesktop);
        }

      }

      function carouselUpdate() {
        width = $(window).outerWidth();

        if (width !== widthLoad){
          if ($(carouselContainer).hasClass("tns-slider")){
            carouselGallery.destroy();
            carouselGallery = "";
          }

          if (width < 768){
            carouselGallery = tns(settingsCarouselMobile);
          }
          else{
            carouselGallery = tns(settingsCarouselDesktop);
          }
        }
      }
    }
  }
  if ($("#gallery_thumbnails").length){
    var cardGalleryThumbnails = tns({
      container: '#gallery_thumbnails',
      items: 5,
      nav: false,
      gutter: 10,
      lazyload: true,
      loop: false,
      mouseDrag: true
    });
  }

  $(document).on("click", ".gallery-carousel__play", function () {
      $(this).addClass("hidden");
  });

  // Инициализация слайдера "Другие акции"
  if ($(".other-promotions__slider").length){
    var sliderOffers = tns({
      container: '.other-promotions__slider',
      controlsPosition: 'bottom',
      //slideBy: 'page',
      nav: false,
      gutter: 15,
      lazyload: true,
      lazyloadSelector: ".tns-img-lazy",
      loop: false,
      mouseDrag: true,
      onInit: function(event){
        $(event.container).closest(".tns-outer").append('<div class="tns-counter">' + (event.index + 1) + ' / ' + event.slideCount + '</div>');
      },
      responsive: {
        0: {
          items: 1
        },
        481: {
          items: 1
        },
        681: {
          items: 2,
          gutter: 20,
          nav: true
        },
        992: {
          items: 3,
          gutter: 30,
          nav: true
        },
        1301: {
          items: 4,
          gutter: 30,
          nav: true
        }
      }
    });
    sliderOffers.events.on('indexChanged', function (event) {
      $(event.container).closest(".tns-outer").find(".tns-counter").html((event.index + 1) + ' / ' + event.slideCount);
    });
  }

  if ($(".compare__products-carousel").length){
    var carouselCompare1 = tns({
      container: '#compare_carousel_1',
      controlsPosition: 'bottom',
      nav: false,
      //slideBy: 'page',
      gutter: 0,
      lazyload: true,
      lazyloadSelector: ".tns-img-lazy",
      loop: false,
     // fixedWidth: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        1301: {
          items: 3
        }
      }
    });
    var carouselCompare2 = tns({
      container: '#compare_carousel_2',
      navContainer: "#compare_carousel_1",
      nav: false,
      controls: false,
      //slideBy: 'page',
      gutter: 0,
      loop: false,
      // fixedWidth: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        1301: {
          items: 3
        }
      }
    });
    carouselCompare1.events.on('indexChanged', function (event) {
      carouselCompare2.goTo(event.index);
    });
    carouselCompare2.events.on('touchEnd', function (event) {
      carouselCompare1.goTo(event.index);
    });

  }

  if ($("#compare_2").length){

  }

	// Переключение классов сортировки
    $(document).on("click", ".sorting__item", function () {
      $(this).siblings().removeClass("sorting__item--active sorting__item--asc sorting__item--desc");
      $(this).addClass("sorting__item--active");
      if ($(this).hasClass("sorting__item--desc")){
        $(this).removeClass("sorting__item--desc");
        $(this).addClass("sorting__item--active sorting__item--asc");
      }
      else{
        $(this).removeClass("sorting__item--asc");
        $(this).addClass("sorting__item--active sorting__item--desc");
      }
    });

	/* ФИЛЬТРЫ START */

    // Скрытие длинных списков чекбоксов
    if ($(".filter-item--checkboxes").length){
      $(".filter-item--checkboxes").each(function () {
        if ($(this).find(".filter-item__checkbox").length > 9){
          $(this).addClass("filter-item--hidden");
        }
      });
    }

    // Клик по заголовку
    $(document).on("click", ".filter-item__title", function () {
      $(this).closest(".filter-item").toggleClass("active");
    });

    // Показать все
    $(document).on("click", ".filter-item__show-btn", function () {

      if ($(this).closest(".filter-item").hasClass("filter-item--hidden")){
        $(this).text("Скрыть");
        $(this).closest(".filter-item").addClass("filter-item--show").removeClass("filter-item--hidden");
      }
      else{
        $(this).text("Показать все");
        $(this).closest(".filter-item").addClass("filter-item--hidden").removeClass("filter-item--show");
      }
    });

    // Фильтры в мобилке, плашшете
    $(document).on("click", ".filters__btn-toggle", function () {
      $(this).next(".filters__container").addClass("active");
      if ($(".content").length){
        $("html, body").animate({scrollTop: $(".content").offset().top}, 500);
      }

    });
    $(document).on("click", ".filters__back", function () {
      $(this).closest(".filters__container").removeClass("active");
    });

    /* ФИЛЬТРЫ END */




    // Ввод только цифр
    $('[data-input-number]').on('input change', function(){
      $(this).val($(this).val().replace (/\D/, ''));
    });

    // Плагин bootstrap slider
    if ($("[data-slider]").length){
      var sliderRange = [];
      $("[data-slider]").each(function (count) {
        var $boxSlider = $(this).closest(".box-slider"),
            dataLabelMin = $(this).attr("data-label-min"),
            dataLabelMax = $(this).attr("data-label-max"),
            dataLabelUnit = $(this).attr("data-label-unit");

        sliderRange[count] = $(this).bootstrapSlider();

        $boxSlider.find(".tooltip-min").find(".tooltip-inner")
            .attr("data-label-before", dataLabelMin)
            .attr("data-label-after", dataLabelUnit);

        $boxSlider.find(".tooltip-max").find(".tooltip-inner")
            .attr("data-label-before", dataLabelMax)
            .attr("data-label-after", dataLabelUnit);

      });
    }

  // Вкладки
  $(document).on("click", "[data-tabs-nav] > li", function () {
    var tabId = $(this).attr("data-tab-id");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $("#" + tabId).siblings().removeClass("active");
    $("#" + tabId).addClass("active");
  });
  $(document).on("click", ".tab-pane__toggle", function () {
    var $this = $(this),
        $tabPaneContent = $this.next(".tab-pane__content");

    $this.toggleClass("active");
    $tabPaneContent.toggleClass("active");

  });

  // Аккордион
  $(document).on("click", ".accordion__header", function () {
    $(this).closest(".accordion").toggleClass("active");
    $(this).next().slideToggle(300);
  });

  // Выбор рейтинга в форме отзыва
  $(document).on("click", "[data-rating-select] .rating-block__flowers .icon", function () {
    var index = $(this).index(),
        $item = $(this).closest(".rating-block__item"),
        $icons = $item.find(".rating-block__flowers .icon");

    $icons.removeClass("icon-flower-active").addClass("icon-flower");

    for (var i = 0; i <= index; i++){
      $icons.eq(i).removeClass("icon-flower").addClass("icon-flower-active");
    }

    $item.find(".rating-block__input").val(parseInt(index + 1));


  });

  // Выпадающие блоки тарифов
  $(document).on("click", ".tariff-item__header", function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle(300);
  });

  // Счетчик количества
  $(document).on("click", ".counter__add, .counter__subtract", function () {
    var $counter = $(this).closest(".counter"),
        $input = $counter.find(".counter__input"),
        $valText = $counter.find(".counter__value"),
        val = $input.val();

    if ($(this).hasClass("counter__add")){
      val++;
    }
    else{
      val--;
    }

    if (val < $input.attr("data-value-min")){
      val = $input.attr("data-value-min");
    }
    if (val > $input.attr("data-value-max")){
      val = $input.attr("data-value-max");
    }

    $valText.text(val);
    $input.val(val);

  });

  // Удаление/восстановление товара в корзине
  $(document).on("click", ".cart-product__remove", function () {
    $(this).closest(".cart-product").toggleClass("cart-product--deleted");
  });

  // Выбор оплаты в оформлении заказа
  if ($(".payment-method").length){

    $(".payment-method").each(function () {
      if ($(this).find(".payment-method__input").prop("checked")){
        $(this).addClass("payment-method--checked");
      }
    });


    $(document).on("click", ".payment-method__input", function () {

      $(this).closest(".tabs").find(".payment-method").removeClass("payment-method--checked");

      if ($(this).prop("checked")){
        $(this).closest(".payment-method").addClass("payment-method--checked");
      }

    });

    $(document).on("click", "#payment_tabs .tabs-nav__item", function () {
      $(this).closest(".tabs").find(".payment-method").removeClass("payment-method--checked");
    });
  }

  // Открыть смену пароля в ЛК
  $(document).on("click", ".change-password__open", function () {
    $(this).closest(".change-password").addClass("active");
  });

  // Открыть/закрыть заказ в ЛК
  $(document).on("click", ".order-item__header", function () {
    $(this).closest(".order-item").toggleClass("active");
    $(this).next().slideToggle(300);
  });

  // Добавить товар в корзину
  $(document).on("click", ".js-add-cart", function () {
    $(this).addClass("active");
    var dataText = $(this).attr("data-text-success");
    if (dataText !== undefined){
      $(this).find("span").text(dataText);
    }
  });

  // Добавить товар в избранное
  $(document).on("click", ".js-add-favorite", function () {
    $(this).toggleClass("active");
  });

  // Добавить товар в сравнение
  $(document).on("click", ".js-add-compare", function () {
    $(this).toggleClass("active");
  });


  /* Фиксирование левого сайдбара в корзине и офрмлении заказа */

  if ($(".sticky").length){
    var $sticky = $('.sticky'),
        $stickyrStopper = $('.sticky-stop'),
        $stickySidebar = $sticky.parent();

    $(window).on("load resize", function(){
      var windowWidth = $(window).outerWidth();

      if (windowWidth > 1199){
        if (!!$sticky.offset()) { // make sure ".sticky" element exists

          var generalSidebarHeight = $sticky.innerHeight();
          var stickyTop = $sticky.offset().top;
          var stickOffset = 30;
          var stickyStopperPosition = $stickyrStopper.offset().top;
          var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
          var diff = stopPoint + stickOffset;

          $(window).on("scroll", function(){ // scroll event
            windowWidth = $(window).outerWidth();
            if (windowWidth > 1199){
              var windowTop = $(window).scrollTop(); // returns number

              if (stopPoint < windowTop) {
                $sticky.css({ position: 'absolute', top: $stickySidebar.innerHeight() - generalSidebarHeight });
              } else if (stickyTop < windowTop+stickOffset) {
                $sticky.css({ position: 'fixed', top: stickOffset });
              } else {
                $sticky.css({position: 'absolute', top: 'initial'});
              }
            }
            else{
              $sticky.removeAttr("style");
            }

          });
        }

      }

      else{
        $sticky.removeAttr("style");
      }
    });
  }


  // Закрепление товара в сравнении
  $(window).on('load resize scroll', function () {

    if ($(".compare__products-goods").length) {
      var
          $compareProducts = $(".compare__products-goods"),
          productsWidth = $compareProducts.innerWidth(),
          $compareProductsInner = $compareProducts.find(".compare__products-inner"),
          windowScrollTop = $(window).scrollTop();

      if (windowScrollTop > ($compareProducts.offset().top + 285)){
        $compareProducts.addClass("fixed");
        $compareProductsInner.width(productsWidth);
      }

      else{
        $compareProducts.removeClass("fixed");
        $compareProductsInner.removeAttr("style");
      }

      if ((windowScrollTop + 30) >= ($(".compare__products").offset().top + ($(".compare__products").innerHeight() - 285))){
        $compareProducts.removeClass("fixed");
        $compareProductsInner.removeAttr("style");
      }

    }
  });

  // Закрыть окно сообщения
  $(document).on('click', '.popup-info__button', function () {
    $(this).closest(".popup-info").hide();
  });

  // Показать / скрыть дополнительные поля в выборе доставки
  if ($(".ordering__delivery").length){
    if ($(".ordering__delivery-checkboxes .checkbox__input:checked").attr("id") == "delivery_mail"){
      $(".ordering__delivery-additional").addClass("active");
    }
    else{
      $(".ordering__delivery-additional").removeClass("active");
    }
    $(document).on('change', '.ordering__delivery-checkboxes .checkbox__input', function () {
      if (($(this).attr("id") == "delivery_mail") && $(this).prop("checked") == true){
        $(".ordering__delivery-additional").addClass("active");
      }
      else{
        $(".ordering__delivery-additional").removeClass("active");
      }
    });
  }


  // Вывод истории расходов
  $.ajax({
    url: "sources/json/history_expense.json",
    success: function(data){
      var obj = data.data;
      if ($("#history_expense").length){
        outputResult(obj, getTemplateExpenseHistory, "history_expense", "date", "date");
      }
    }
  });

  // Шаблон для вывода истории расходов
  var getTemplateExpenseHistory = function(arrayItem){
    return '<div class="history-item">' +
      '<div class="history-item__id" data-title="Операция"><span>' + arrayItem.id + '</span></div>' +
      '<div class="history-item__name" data-title="Товар"><span>' + arrayItem.product + '</span></div>' +
      '<div class="history-item__date" data-title="Дата"><span>' + arrayItem.date + '</span></div>' +
      '<div class="history-item__sum" data-title="Сумма покупки">' +
        '<div class="history-item__price price">' +
        '<span>' + arrayItem.sum + '</span> <span class="rouble">p</span>' +
        '</div>' +
      '</div>' +
      '<div class="history-item__bonus" data-title="Бонусов снято">' +
        '<div class="history-item__price price">' +
        '<span>' + arrayItem.withdrawn_bonuses + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="history-item__balance" data-title="Остаток бонусов"><span>' + arrayItem.balance + '</span></div>' +

      '</div>';
  }

  // Вывод истории начислений
  $.ajax({
    url: "sources/json/history_enrollment.json",
    success: function(data){
      var obj = data.data;
      if ($("#history_enrollment").length){
        outputResult(obj, getTemplateEnrollmentHistory, "history_enrollment", "date", "date");
      }
    }
  });

  // Шаблон для вывода истории начислений
  var getTemplateEnrollmentHistory = function(arrayItem){
    return '<div class="history-item">' +
      '<div class="history-item__id" data-title="Операция"><span>' + arrayItem.id + '</span></div>' +
      '<div class="history-item__name" data-title="Товар"><span>' + arrayItem.product + '</span></div>' +
      '<div class="history-item__date" data-title="Дата"><span>' + arrayItem.date + '</span></div>' +
      '<div class="history-item__sum" data-title="Сумма покупки">' +
        '<div class="history-item__price price">' +
        '<span>' + arrayItem.sum + '</span> <span class="rouble">p</span>' +
        '</div>' +
      '</div>' +
      '<div class="history-item__bonus" data-title="Бонусов начислено">' +
        '<div class="history-item__price price">' +
        '<span>' + arrayItem.accrued_bonuses + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="history-item__balance" data-title="Остаток бонусов"><span>' + arrayItem.balance + '</span></div>' +

      '</div>';
  }

  // Функция для вывода и сортировки
  function outputResult(data, template, resultID, defaultSortingColumn, defaultSortingType) {
    /*
     data - массив объектов,
     template - шаблон для вывода данных,
     resultID - ID для вывода,
     defaultSortingColumn - Колонка соротировки по умолчанию
     defaultSortingType - Тип соротировки по умолчанию (date || text || numbers)
     */

    var currentData = data,
        resultHTML = "";

    printResult();
    sortingFunction(defaultSortingColumn, defaultSortingType, "desc");

    if ($('[data-sorting-id=' + resultID + ']').length){
      var sorting = "",
          sortingColumn = "",
          sortingType = "";

      $(document).on('click', '[data-sorting-id=' + resultID + ']', function () {
        sorting = $(this).attr("data-sorting");
        sortingType = $(this).attr("data-sorting-type");
        sortingColumn = $(this).attr("data-sorting-column");

        if (sorting == "desc"){
          sortingFunction(sortingColumn, sortingType, "asc");
          $(this).attr("data-sorting", "asc");
        }
        else{
          sortingFunction(sortingColumn, sortingType, "desc");
          $(this).attr("data-sorting", "desc");
        }

      });
    }

    function sortingFunction(nameColumn, type, parameter) {
      /*
       nameColumn - Колонка соротировки (ключ в массиве объектов)
       type - Тип сортировки (date || text || numbers)
          date - сортировка даты
          text - сортировка обычного текста
          numbers - сортировка простых чисел

       parameter - Параметр сортировки (asc || desc)
       */
      if (type == "date"){
        if (parameter == "asc"){
          currentData.sort(function(a, b){
            var dateA = new Date(a[nameColumn].replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1')),
              dateB = new Date(b[nameColumn].replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1'));
            return dateA-dateB ;
          });
        }
        else{
          currentData.sort(function(a, b){
            var dateA = new Date(a[nameColumn].replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1')),
              dateB = new Date(b[nameColumn].replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1'));
            return dateB-dateA;
          });
        }

      }
      else if (type == "numbers"){
        if (parameter == "asc"){
          currentData.sort(function(a, b){
            return a[nameColumn]-b[nameColumn];
          });
        }
        else{
          currentData.sort(function(a, b){
            return b[nameColumn]-a[nameColumn];
          });
        }
      }
      else{
        if (parameter == "asc"){
          currentData.sort(function(a, b){
            var nameA=a[nameColumn].toLowerCase(), nameB=b[nameColumn].toLowerCase();
            if (nameA < nameB) //сортируем строки по возрастанию
              return -1;
            if (nameA > nameB)
              return 1;
            return 0; // Никакой сортировки
          })
        }
        else{
          currentData.sort(function(a, b){
            var nameA=a[nameColumn].toLowerCase(), nameB=b[nameColumn].toLowerCase();
            if (nameA > nameB) //сортируем строки по убыванию
              return -1;
            if (nameA < nameB)
              return 1;
            return 0; // Никакой сортировки
          })
        }

      }

      printResult();

    }

    function printResult() {
      resultHTML = "";
      currentData.forEach(function(item){
        resultHTML += template(item);
      });
      $("#" + resultID).html(resultHTML);

    }


  }
  

  // Переключение цветов в товаре
    $(document).on('click', '.product__color-item', function () {
		var currentIndex = $(this).index();
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
      $(this).closest(".product").find(".product__slider-block").removeClass("active");  
      $(this).closest(".product").find('.product__slider-block[data-slider-index="' + currentIndex + '"]').addClass("active");
    });




});
