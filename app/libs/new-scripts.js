document.addEventListener('DOMContentLoaded', function() {

	/* Glide.js Slider */

    let glide = new Glide('.glide', {
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

	glide.mount();
	/* Glide.js Slider */
	
});