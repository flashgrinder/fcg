document.addEventListener('DOMContentLoaded', function() {
	// Прелоадер
	let imgs = document.images,
		imagesTotalCount = imgs.length,
		imagesLoadedCount = 0,
		preloader = document.querySelector('.preloader'),
		percDisplay = document.querySelector('.load_perc');
		percDisplay.innerHTML = '0%';
	
	for (let i = 0; i < imagesTotalCount; i++) {
		var imageClone = new Image();
		imageClone.onload = imageLoaded;
		imageClone.onerror = imageLoaded;
		imageClone.src = imgs[i].src;
	}

	function imageLoaded() {
		imagesLoadedCount++;
		percDisplay.innerHTML = (( (100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';

		if (imagesLoadedCount >= imagesTotalCount) {
			setTimeout(function(){
				if(!preloader.classList.contains('hide'))
				preloader.classList.add('hide');
			}, 1000)
		}
	}
	// Прогресс бар
	var progress = document.querySelector('.progress');

	window.addEventListener('scroll', progressBar);

	function progressBar(e){
		var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var windowHeigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var per = windowScroll / windowHeigth * 100;

		progress.style.width = per + '%';
	}

	// Кнопка на верх
	var btn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 200) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

	// Modal Form
	let btnServices = document.querySelectorAll('.btn-modal');
	let modal = document.querySelector('.modalBlock');
	let formBg = document.querySelector('.modalBlock__overlay');

	function showModal(e) {
		e.preventDefault();
		modal.classList.add('modalBlock_active');
	}
	function hideModal() {
		modal.classList.remove('modalBlock_active');
	}

	for (let i = 0; i < btnServices.length; i++) {
		btnServices[i].addEventListener('click', showModal);
	}

	if(modal) {
		formBg.addEventListener('click', hideModal);
	}
	
	// Функция ресайза
	function getWindowWidth() {
		return window.innerWidth || document.body.clientWidth;
	}

	if(getWindowWidth() >= 991) {

		var searchIcon = document.querySelector('.header-block__search-icon');
		var searchInput = document.querySelector('.header-block__search-input');

		function animSearch() {
			searchIcon.classList.toggle('header-block__search-icon-animation');
			searchInput.classList.toggle('header-block__search-input-animation');
			mapIcon.classList.remove('header-block__map-icon-animation');
			mapIsrael.classList.remove('header-block__map-country-israel-animation');
			mapUSA.classList.remove('header-block__map-country-usa-animation');
			mapRussia.classList.remove('header-block__map-country-russia-animation');
		}
		searchIcon.addEventListener('click', animSearch);

		var mapIcon = document.querySelector('.header-block__map-icon');
		var mapIsrael = document.querySelector('.header-block__map-country-israel');
		var mapUSA = document.querySelector('.header-block__map-country-usa');
		var mapRussia = document.querySelector('.header-block__map-country-russia');

		function animMap() {
			mapIcon.classList.toggle('header-block__map-icon-animation');
			mapIsrael.classList.toggle('header-block__map-country-israel-animation');
			mapUSA.classList.toggle('header-block__map-country-usa-animation');
			mapRussia.classList.toggle('header-block__map-country-russia-animation');
			searchIcon.classList.remove('header-block__search-icon-animation');
			searchInput.classList.remove('header-block__search-input-animation');
		}
		mapIcon.addEventListener('click', animMap);

		// Слайдер
		var directionSlider = document.getElementById('landingSlider__noUiSlider');

		let box = document.querySelectorAll('.js-filter');
		let arr1 = [],
			arr2 = [],
			arr3 = [],
			arr4 = [],
			arr5 = [];

		for (let i = 0; i < box.length; i++) {
			if (box[i].getAttribute('data-price') == '1'){

				arr1.push(box[i]);

			} else if (box[i].getAttribute('data-price') == '2'){

				arr2.push(box[i]);

			} else if (box[i].getAttribute('data-price') == '3') {

				arr3.push(box[i]);

			} else if (box[i].getAttribute('data-price') == '4') {

				arr4.push(box[i]);
			} else if (box[i].getAttribute('data-price') == '5') {

				arr5.push(box[i]);
			}
			
		}

		function allHide() {
			for (let i = 0; i < box.length; i++) {

				box[i].classList.remove('is-shows');
				
			}
		}

		var carts = document.querySelectorAll('.landingCart__box-outer');

		if (directionSlider) {

			carts[0].addEventListener('click', function() {
				directionSlider.noUiSlider.set(0);
			});
			carts[1].addEventListener('click', function() {
				directionSlider.noUiSlider.set(1);
			});
			carts[2].addEventListener('click', function() {
				directionSlider.noUiSlider.set(2);
			});
			carts[3].addEventListener('click', function() {
				directionSlider.noUiSlider.set(3);
			});
			carts[4].addEventListener('click', function() {
				directionSlider.noUiSlider.set(4);
			});

			noUiSlider.create(directionSlider, {
				start: 0,
				connect: [true, false],
				step: 1,
				behaviour: 'hover-snap',
				format: wNumb({
					decimals: 0
				}),
				range: {
					min: 0,
					max: 4
				},
				pips: {
					mode: 'steps',
					values: 5,
					density: -1,
					format: wNumb({
						decimals: 0,
						prefix: ''
					})
				}
			});

			directionSlider.noUiSlider.on('update', function (values, handle) {

				if (values == 0){

					allHide();

					for (let i = 0; i < arr1.length; i++) {

						arr1[i].classList.add('is-shows');
						
					}

				} else if (values == 1) {

					allHide();

					for (let i = 0; i < arr2.length; i++) {

						arr2[i].classList.add('is-shows');
						
					}
				} else if (values == 2) {

					allHide();

					for (let i = 0; i < arr3.length; i++) {

						arr3[i].classList.add('is-shows');
						
					}
				} else if (values == 3) {

					allHide();

					for (let i = 0; i < arr4.length; i++) {

						arr4[i].classList.add('is-shows');
						
					}
				} else if (values == 4) {

					allHide();

					for (let i = 0; i < arr5.length; i++) {

						arr5[i].classList.add('is-shows');
						
					}
				}

			});

		}
		
		$('.js-spoiler-trigger').click(function() {
			$(`[data-id=${this.dataset.target}]`).slideToggle('normal');
		});

		

	} else if(getWindowWidth() <= 991) {

		// Анимация поиска
		var searchIconMob = document.querySelector('.header-block__search-icon');
		var headMob = document.querySelector('.header-mob');

		function tachSearch() {
			headMob.classList.toggle('header-mob-animation');
			headMap.classList.remove('header-cont-animation');
			mobMenu.classList.remove('jsmenu_active');
			burgerIcon.classList.remove('header-block__mobile-burger-active');
		}
		searchIconMob.addEventListener('click', tachSearch);
		// Анимация карты
		var mapIconMob = document.querySelector('.header-block__map-icon');
		var headMap = document.querySelector('.header-cont');

		function tachMap() {
			headMap.classList.toggle('header-cont-animation');
			headMob.classList.remove('header-mob-animation');
			mobMenu.classList.remove('jsmenu_active');
			burgerIcon.classList.remove('header-block__mobile-burger-active');
		}
		mapIconMob.addEventListener('click', tachMap);

		// Анимация бургер меню
		var burgerTouch = document.querySelector('.header-block__mobile');
		var burgerIcon = document.querySelector('.header-block__mobile-burger');
		var mobMenu= document.querySelector('.jsmenu');

		function burgerMenu() {
			burgerIcon.classList.toggle('header-block__mobile-burger-active');
			mobMenu.classList.toggle('jsmenu_active');
			headMap.classList.remove('header-cont-animation');
			headMob.classList.remove('header-mob-animation');
		}
		burgerTouch.addEventListener('click', burgerMenu);

		// Мобильное меню
		var slinky = $('.jsmenu').slinky({
			title: true,
			speed: 300
		});

		var carts = document.querySelectorAll('.landingCart__box-outer');

		var filter = document.querySelectorAll('.js-filter');

		for (let i = 0; i < carts.length; i++) {
			carts[i].addEventListener('click', function() {
				filter[i].classList.toggle('is-shows');
			});
		}

	}	
	
});