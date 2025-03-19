console.log('Hello, from Node.js server!');

function add(a, b) {
  return a + b;
}

console.log(add(5, 5));

// alert - nesuprastu, nes tai yra specifinis naršyklės metodas
// alert('Hello!');
console.log(typeof true);

console.log(123);

setTimeout(() => {
  console.log('Hello from Timeout!');
}, 3000);

// global - globalus Node.js objektas, kuris turi daugybe metodu ir savybiu

// window - atitikmuo frond-end narsykles lygyje
