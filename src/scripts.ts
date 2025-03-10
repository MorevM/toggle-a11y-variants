const LIGHT_LABEL = 'Переключиться на тёмную тему';
const DARK_LABEL = 'Переключиться на светлую тему';

const $buttons = document.querySelectorAll('[data-button]');
$buttons.forEach(($button) => {
	$button.addEventListener('click', () => {
		$button.classList.toggle('is-active');
		const isActive = $button.classList.contains('is-active');
		const attributeToChange = $button.hasAttribute('aria-pressed')
			? 'aria-pressed'
			: 'aria-checked';

		$button.setAttribute(attributeToChange, isActive.toString());

		const hasTitle = $button.hasAttribute('title');
		if (hasTitle) {
			const title = isActive ? DARK_LABEL : LIGHT_LABEL;
			$button.setAttribute('title', title);
		}
	});
});

const $checkboxLabels = document.querySelectorAll('[data-checkbox-label]');
$checkboxLabels.forEach(($label) => {
	$label.addEventListener('click', () => {
		if (!$label.hasAttribute('title')) return;

		const isChecked = !!$label.querySelector(':checked');
		$label.setAttribute('title', isChecked ? DARK_LABEL : LIGHT_LABEL);
	});
});

const $radioWrapper = document.querySelector<HTMLLabelElement>('[data-radio-wrapper]')!;
const switchRadioElement = () => {
	const activeElement = $radioWrapper.querySelector<HTMLInputElement>('[data-radio]:checked')!;
	const inactiveElement = $radioWrapper.querySelector<HTMLInputElement>('[data-radio]:not(:checked)')!;

	activeElement.checked = !activeElement.checked;
	inactiveElement.checked = !inactiveElement.checked;

	const activeValue = inactiveElement.value;
	$radioWrapper.setAttribute('title', activeValue === 'light' ? DARK_LABEL : LIGHT_LABEL);
};
$radioWrapper.addEventListener('click', (event: MouseEvent) => {
	// Switching using keyboard also fires the `click` event.
	if (event.clientX === 0 && event.clientY === 0) return;
	switchRadioElement();
});

// const $radios = document.querySelectorAll<HTMLInputElement>('[data-radio]');
// document.addEventListener('keydown', (event: KeyboardEvent) => {
// 	if (event.code !== 'Enter' && event.code !== 'Space') return;
// 	// @ts-expect-error -- Trust me
// 	if ([...$radios].includes(event.target)) {
// 		switchRadioElement();
// 	}
// });
