function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1

function multiply() {
  let total = 0;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  10
console.log(multiply(1, 2, 3, 4, 5)); //  15
// не працює


function withdraw(amount, balance) {
  // Если  условие выполняется, вызывается console.log
  // и выход из функции. Код идущий после тела if не выполнится.
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
    return;
  }

  // Если условие первого if не выполнилось, его тело пропускается
  // и интерпретатор доходит до второго if.
  // Если условие выполняется, вызывается console.log и выход из функции.
  // Код идущий после тела if  не выполнится.
  if (amount > balance) {
    console.log("Недостаточно средств на счету");
    return;
  }

  // Если ни один из предыдущих if не выполнился,
  // интерпретатор доходит до этого кода и выполняет его.
  console.log("Операция снятия средств проведена");
}

withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счету"
withdraw(100, 300); // "Операция снятия средств проведена"