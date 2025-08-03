function toggleAccordion(element) {
	const content = element.querySelector(".answer");
	const arrow = element.querySelector(".arrow");
	const isOpen = content.classList.contains('open');

	if (isOpen) {
		content.style.height = content.scrollHeight + 10 + 'px';
		requestAnimationFrame(() => {
			content.style.height = '0';
		});
		content.classList.remove('open');
		arrow.classList.remove('arrow-open');
	} else {
		content.style.height = '0';
		content.classList.add('open');
		arrow.classList.add('arrow-open');
		requestAnimationFrame(() => {
			content.style.height = content.scrollHeight + 10 + 'px';
		});
	}
}

export function initAccordion() {
  	const accordionItems = document.querySelectorAll('.accordion-list__item');

  	accordionItems.forEach(item => {
		const question = item.querySelector('.question');
		question.addEventListener('click', () => {
			toggleAccordion(item);
		});
  	});
}
