
let output1 = '';
for (let i = 10; i <= 20; i++) {
  output1 += i + ', ';
}
document.write(`<p>Числа від 10 до 20: ${output1.slice(0, -2)}</p>`);


document.write('<p>Квадрати чисел від 10 до 20: ');
for (let i = 10; i <= 20; i++) {
  document.write(`${i * i}, `);
}
document.write('</p>');


document.write('<p>Таблиця множення на 7:</p><ul>');
for (let i = 1; i <= 10; i++) {
  document.write(`<li>7 * ${i} = ${7 * i}</li>`);
}
document.write('</ul>');


let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
document.write(`<p>Сума чисел від 1 до 15: ${sum}</p>`);


let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
document.write(`<p>Добуток чисел від 15 до 35: ${product}</p>`);


sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
const average = sum / 500;
document.write(`<p>Середнє арифметичне чисел від 1 до 500: ${average}</p>`);


sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
document.write(`<p>Сума парних чисел від 30 до 80: ${sum}</p>`);


document.write('<p>Числа від 100 до 200 кратні 3: ');
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    document.write(`${i}, `);
  }
}
document.write('</p>');


const givenNumber = 36; 
document.write(`<p>Дільники числа ${givenNumber}: `);
for (let i = 1; i <= givenNumber; i++) {
  if (givenNumber % i === 0) {
    document.write(`${i}, `);
  }
}
document.write('</p>');


let evenDivisorsCount = 0;
for (let i = 1; i <= givenNumber; i++) {
  if (givenNumber % i === 0 && i % 2 === 0) {
    evenDivisorsCount++;
  }
}
document.write(`<p>Кількість парних дільників числа ${givenNumber}: ${evenDivisorsCount}</p>`);


let sumOfEvenDivisors = 0;
for (let i = 1; i <= givenNumber; i++) {
  if (givenNumber % i === 0 && i % 2 === 0) {
    sumOfEvenDivisors += i;
  }
}
document.write(`<p>Сума парних дільників числа ${givenNumber}: ${sumOfEvenDivisors}</p>`);


document.write('<p><strong>Повна таблиця множення від 1 до 10:</strong></p>');
for (let i = 1; i <= 10; i++) {
  document.write(`<p><strong>Таблиця множення на ${i}:</strong></p><ul>`);
  for (let j = 1; j <= 10; j++) {
    document.write(`<li>${i} * ${j} = ${i * j}</li>`);
  }
  document.write('</ul>');
}