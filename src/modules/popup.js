const popup = () => {
	const callBtn = document.querySelectorAll('.call-btn'),
	popupCall = document.querySelector('.popup-call'),
	checkBtn = document.querySelector('.check-btn'),
	popupCheck = document.querySelector('.popup-check'),
	discountBtn = document.querySelectorAll('.discount-btn'),
	popupDiscount = document.querySelector('.popup-discount'),
	consultationBtn = document.querySelector('.consultation-btn'),
	popupConsultation = document.querySelector('.popup-consultation'),
	popupAll = document.querySelectorAll('.popup');

	const openPopup = () => {
		callBtn[0].addEventListener('click', (event) => {
			event.preventDefault();
			popupCall.style.cssText =
				`display: block;`;
		});
		callBtn[3].addEventListener('click', (event) => {
			event.preventDefault();
			popupCall.style.cssText =
				`display: block;`;
		});
		checkBtn.addEventListener('click', () => {
			popupCheck.style.cssText =
				`display: block;`;
		});
		discountBtn.forEach((item) => {
			item.addEventListener('click', () => {
				popupDiscount.style.cssText =
					`display: block;`;
			});
		});
		consultationBtn.addEventListener('click', () => {
			popupConsultation.style.cssText =
				`display: block;`;
		});

	};

	const closePopup = () => {
		popupAll.forEach((item) => {

			item.addEventListener('click', (event) => {
				let target = event.target;
				if (target.classList.contains('popup-close')) {
					event.preventDefault();
					item.style.cssText = `display: none;`;
				} else {
					target = target.closest('.popup-content');
					if (!target) {
						item.style.cssText = `display: none;`;
					}
				}
			});
		});
	};

	openPopup();
	closePopup();
};
export default popup;