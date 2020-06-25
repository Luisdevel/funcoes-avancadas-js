function calculatorCreate() {
	return {
		//Atributes
		display: document.querySelector('.display'),


		//Métodos
		start() {
			this.buttonClick();
			this.enterPress();
		},

		enterPress() {
			this.display.addEventListener('keyup', (e) => {
				if(e.keyCode === 13) {
					this.countRealize();
				}
			});
		},

		buttonClick() {
			document.addEventListener('click', (e) => {
				const el = e.target;

				if(el.classList.contains('btn-num')) {
					this.btnDisplay(el.innerText);
				}

				if(el.classList.contains('btn-clear')) {
					this.btnClear();
				}

				if(el.classList.contains('btn-del')) {
					this.btnDel();
				}

				if(el.classList.contains('btn-eq')) {
					this.countRealize();
				}
			});
		},

		btnDisplay(value) {
			this.display.value += value;
		},

		btnClear() {
			this.display.value = '';
		},

		btnDel() {
			this.display.value = this.display.value.slice(0, -1);
		},

		countRealize() {
			let conta = this.display.value;

			try {
				conta = eval(conta);

				if(!conta) {
					alert('Conta inválida');
					return;
				}

				this.display.value = String(conta);

			} catch {
				if(!conta) {
					alert('Conta inválida');
					return;
				}
			}
		},
	};
}

const calculator = calculatorCreate();
calculator.start();