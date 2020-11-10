document.addEventListener('DOMContentLoaded', function() {


	// Прелоадер
	let imgs = document.images,
		imagesTotalCount = imgs.length,
		imagesLoadedCount = 0,
		preloader = document.querySelector('.page-preloader');
	
	for (let i = 0; i < imagesTotalCount; i++) {
		var imageClone = new Image();
		imageClone.onload = imageLoaded;
		imageClone.onerror = imageLoaded;
		imageClone.src = imgs[i].src;
	}

	function imageLoaded() {
		imagesLoadedCount++;

		if (imagesLoadedCount >= imagesTotalCount) {
			setTimeout(function(){
				if(!preloader.classList.contains('is-hide'))
				preloader.classList.add('is-hide');
			}, 1000)
		}
	}


	// Прогресс бар
	let progress = document.querySelector('.progress-bar');

	window.addEventListener('scroll', progressBar);

	function progressBar(e){
		let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let windowHeigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let per = windowScroll / windowHeigth * 100;

		progress.style.width = per + '%';
	}


	// Кнопка на верх
	buttonToTop = document.querySelector('.button-to-top');

	function showButtonToTop() {
		
		let windowScroll = window.pageYOffset; // Another Browsers

		if (windowScroll > 400) {
			buttonToTop.classList.add('is-show');
		} else {
			buttonToTop.classList.remove('is-show');
		}
	};
	window.addEventListener('scroll', showButtonToTop);

	function scrollToTop(e) {
		e.preventDefault();
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	};
	buttonToTop.addEventListener('click', scrollToTop);


	/* Glide.js Slider */

    let sliderNews = document.querySelector('.glide_news');
	let sliderMain = document.querySelector('.glide_main');

	function generateBulletsAndMountGlide(el, nameSlider, nameClass,) {
		let bulletCount = document.querySelectorAll(`${nameSlider} .glide__slide`).length;
		let bulletWrapper = document.querySelector(nameClass);
	
		for (let index = 0; index < bulletCount; index++) {
			const button = document.createElement('button');
			button.className = 'glide__bullet';
			button.setAttribute("data-glide-dir", '='+index);
	
			bulletWrapper.appendChild(button);
		}
	
		el.mount();
	}

	if (sliderNews || sliderMain) {

		let glideMain = new Glide(sliderMain, {
			type: 'slider',
			autoplay: 7000,
			hoverpause: true,
			startAt: 0,
			perView: 1,
			animationDuration: 1000,
			rewindDuration: 800
		});

		generateBulletsAndMountGlide(glideMain, '.glide_main', '.slider__bullets');

		let glideNews = new Glide(sliderNews, {
			type: 'carousel',
			gap: 30,
			startAt: 0,
			perView: 3,
			animationDuration: 1000,
			breakpoints: {
				1024: {
				  perView: 2
				},
				768: {
					gap: 20,
				  perView: 2
				},
				576: {
				  perView: 1
				}
			}
		});

		generateBulletsAndMountGlide(glideNews, '.glide_news','.news__bullets');
	}
	/* Glide.js Slider */

});