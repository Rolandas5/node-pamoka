// require - funkcija, kur leidziama imoprtuoti modulius
// modulis - failas, kuriame yra kodo ir kuris gali but pernaudojamas

// 1 pvz per kye'jus
const studentuObjektas = require('./studentai');

console.log('Studentai:', studentuObjektas.studentai);
console.log('Studentu amzius:', studentuObjektas.studentuAmzius);

// 2 pvz destrukturizavimo budu
const { studentai, studentuAmzius } = require('./studentai');

console.log('Studentai:', studentai);
console.log('Studentu amzius:', studentuAmzius);
