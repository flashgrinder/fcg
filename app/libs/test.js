	// // ТЕСТОВЫЕ СКРИПТЫ
	// /*
	// animTarget{
	// 	display: none;
	// }
	// .fa-enter{
	// 	opacity: 0;
	// 	transform: translateX(-100px);
	// }
	// .fa-enter-active{
	// 	transition: opacity 1s, transform 1s
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// .fa-enter-to{
	// 	transform: scale(1.1);
	// }
	// fa-leave{
	// 	transform: scale(1.2);
	// }
	// fa-leave-active{
	// 	transition: opacity 1s;
	// 	opacity: 0;
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// fa-leave-to{
	// 	opacity: 0.5;
	// }

	// // АНИМАЦИЯ С КАДРАМИ
	// animTarget{
	// 	display: none;
	// }
	// .fa-enter{
	// 	visibility: hidden;
	// }
	// .fa-enter-active{
	// 	animation: niceIn 0.5s linear;
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// .fa-enter-to{

	// }
	// fa-leave{

	// }
	// fa-leave-active{
	// 	animation: niceOut 0.5s linear forwards;
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// fa-leave-to{

	// }
	// @keyframes niceIn
	// 	0%
	// 		transform: translateX(-100px) scale(0.9)
	// 		opacity: 0
	// 	100%
	// 		transform: translateX(0px) scale(1)
	// 		opacity: 1

	// @keyframes niceOut
	// 	0%
	// 		transform: translateX(0px) scale(1)
	// 		opacity: 1
	// 	100%
	// 		transform: translateX(-100px) scale(0.9)
	// 		opacity: 0
	// */
	// // Задаём правильное добавление и удаление классов с анимацией
	// let btnShow = document.querySelector('.show-alert');
	// let btnHide = document.querySelector('.hide-alert');
	// let divAlert = document.querySelector('.animTarget');

	// // Скрывает элемент кликом по кнопке
	// btnHide.addEventListener('click',function() {
	// 	let handler = function() {
	// 		divAlert.style.display = 'none';
	// 		divAlert.classList.remove('fa-leave-active');
	// 		divAlert.classList.remove('fa-leave-to');
	// 		divAlert.removeEventListener('animationend', handler);
	// 	}

	// 	divAlert.classList.add('fa-leave');
	// 	raf(function() {
	// 		divAlert.classList.add('fa-leave-active');
	// 		divAlert.classList.add('fa-leave-to');
	// 		divAlert.classList.remove('fa-leave');
	// 	})
	// 	divAlert.addEventListener('animationend', handler);
	// })

	// // Показывает элемент кликом по кнопке
	// btnShow.addEventListener('click', function() {
	// 	let handler = function() {
	// 		divAlert.classList.remove('fa-enter-active');
	// 		divAlert.classList.remove('fa-enter-to');
	// 		divAlert.removeEventListener('animationend', handler);
	// 	}

	// 	divAlert.style.display = 'block';
	// 	divAlert.classList.add('fa-enter');
	// 	raf(function(){
	// 		divAlert.classList.add('fa-enter-active');
	// 		divAlert.classList.add('fa-enter-to');
	// 		divAlert.classList.remove('fa-enter');
	// 	})
	// 	divAlert.addEventListener('animationend', handler);
	// })
	// // Создаём функцию для того, что бы анимация сработала после рендеринга предыдущего действия
	// function raf(fn) {
	// 	window.requestAnimationFrame(function() {
	// 		window.requestAnimationFrame(function() {
	// 			fn();
	// 		})
	// 	})
	// }


	// // ТЕСТОВЫЕ СКРИПТЫ ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ
	// /*
	// animTarget{
	// 	li
	// }
	// .fa-enter{
	// 	opacity: 0;
	// 	transform: translateX(-100px);
	// }
	// .fa-enter-active{
	// 	transition: opacity 1s, transform 1s
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// .fa-enter-to{
	// 	transform: scale(1.1);
	// }
	// fa-leave{
	// 	transform: scale(1.2);
	// }
	// fa-leave-active{
	// 	transition: opacity 1s;
	// 	opacity: 0;
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// fa-leave-to{
	// 	opacity: 0.5;
	// }

	// // АНИМАЦИЯ С КАДРАМИ
	// animTarget{
	// 	display: none;
	// }
	// .fa-enter{
	// 	visibility: hidden;
	// }
	// .fa-enter-active{
	// 	animation: niceIn 0.5s linear;
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// .fa-enter-to{

	// }
	// fa-leave{

	// }
	// fa-leave-active{
	// 	animation: niceOut 0.5s linear forwards;
	// }
	// // Добавляем данный класс по необходимости для конечной анимации
	// fa-leave-to{

	// }
	// @keyframes niceIn
	// 	0%
	// 		transform: translateX(-100px) scale(0.9)
	// 		opacity: 0
	// 	100%
	// 		transform: translateX(0px) scale(1)
	// 		opacity: 1

	// @keyframes niceOut
	// 	0%
	// 		transform: translateX(0px) scale(1)
	// 		opacity: 1
	// 	100%
	// 		transform: translateX(-100px) scale(0.9)
	// 		opacity: 0
	// */
	// // Задаём правильное добавление и удаление классов с анимацией
	// let btnAdd = document.querySelector('.add-item');
	// let ul = document.querySelector('.animTarget');

	// ul.addEventListener('dblclick', function(e) {
	// 	if(e.target.parentNode !== ul){
	// 		return false;
	// 	}
		
	// 	let li = e.target;

	// 	let handler = function() {
	// 		li.classList.remove('fa-leave-active');
	// 		li.classList.remove('fa-leave-to');
	// 		li.removeEventListener('animationend', handler);
	// 		ul.removeChild('li');
	// 	}

	// 	li.classList.add('fa-leave');
	// 	raf(function() {
	// 		li.classList.add('fa-leave-active');
	// 		li.classList.add('fa-leave-to');
	// 		li.classList.remove('fa-leave');
	// 	})
	// 	li.addEventListener('animationend', handler);
	// })

	// // Показывает элемент кликом по кнопке
	// btnAdd.addEventListener('click', function() {
	// 	let li = document.createElement('li');
	// 	li.innerHTML = Math.random();
	// 	ul.appendChild(li);

	// 	let handler = function() {
	// 		li.classList.remove('fa-enter-active');
	// 		li.classList.remove('fa-enter-to');
	// 		li.removeEventListener('animationend', handler);
	// 	}

	// 	li.classList.add('fa-enter');
	// 	raf(function(){
	// 		li.classList.add('fa-enter-active');
	// 		li.classList.add('fa-enter-to');
	// 		li.classList.remove('fa-enter');
	// 	})
	// 	li.addEventListener('animationend', handler);
	// })
	// // Создаём функцию для того, что бы анимация сработала после рендеринга предыдущего действия
	// function raf(fn) {
	// 	window.requestAnimationFrame(function() {
	// 		window.requestAnimationFrame(function() {
	// 			fn();
	// 		})
	// 	})
	// }