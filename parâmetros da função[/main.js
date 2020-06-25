// arguments sustenta todos os argumentos enviados
function func() {
	let total = 0;
	for(let argument of arguments) {
		total += argument;
	}

	console.log(total);
}

function func2(parm1, parm2) {
	let total = 0;
	for(let argument of arguments) {
		total += argument;
	}

	console.log(total);
}

function names({ name, sobrenome, idade }) {
	console.log(name, sobrenome, idade);
}

function names2({ name, sobrenome, idade }) {
	console.log(name, sobrenome, idade);
}

let obj = { name: 'Luis', sobrenome: 'Henrique', idade: 25 };

function destructArray([value1, value2, value3]) {
	console.log(value1, value2, value3);
}

let arrayDestruct = ['Luis Henrique', 'Mendes Farias', 25];

function count(operator, acumulator, ...numbers) {
	for(let num of numbers) {
		if(operator === '+' ) acumulator += num;
		if(operator === '-' ) acumulator -= num;
		if(operator === '*' ) acumulator *= num;
		if(operator === '/' ) acumulator /= num;
	}

	console.log(acumulator);
} 

func(1, 2, 3, 4, 5, 6, 7, 8);
func2(10, 10);
names({ name: 'Luis', sobrenome: 'Henrique', idade: 25 });
names2(obj);
destructArray(arrayDestruct);
count('*', 1, 20, 30, 40, 50);