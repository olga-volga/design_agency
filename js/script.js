"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Header Mobile Menu
	const body = document.querySelector('body'),
		  menu = body.querySelector('.header__menu'),
		  burgerBtn = body.querySelector('.header__burger');
	
	function openMenu() {
		burgerBtn.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	}

	function closeMenu() {
		burgerBtn.classList.remove('active');
		menu.classList.remove('active');
		body.classList.remove('lock');
	}

	burgerBtn.addEventListener('click', openMenu);

	menu.addEventListener('click', closeMenu);


	// Modal

	const btn = document.querySelectorAll('[data-modal]'),
		  modal = document.querySelector('.modal'),
		  close = modal.querySelector('[data-close]');

	function openModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	btn.forEach(item => {
		item.addEventListener('click', openModal);
	});

	close.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

});