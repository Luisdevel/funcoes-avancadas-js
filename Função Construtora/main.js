function calculator() {
	this.display = document.querySelector('.display');

	this.start = () => {
		this.clickButton();
		this.enterPress();
	};

	this.enterPress = () => {
		document.addEventListener('keyup', e => {
			if (e.keyCode === 13) this.countRealize();
		});
	};

	this.clickButton = () => {
		document.addEventListener('click', e => {
			const el = e.target;
			if (el.classList.contains('btn-num')) this.clickDisplay(el);
			if (el.classList.contains('btn-clear')) this.clickClear();
			if (el.classList.contains('btn-del')) this.oneLess();
			if (el.classList.contains('btn-eq')) this.countRealize();
		});
	};

	this.clickDisplay = (el) => {
		this.display.value += el.innerText;
		this.display.focus();
	};

	this.clickClear = () => {
		this.display.value = '';
	};

	this.oneLess = () => {
		this.display.value = this.display.value.slice(0, -1);
	};

	this.countRealize = () => {
		try {
			const count = eval(this.display.value);

			if(!count) {
				alert('Tipo de conta inválida');
			}

			this.display.value = count;
		} catch {
			if(!count) {
				alert('Tipo de conta inválida');
			}
		}
	};
};

const calc = new calculator();
calc.start();