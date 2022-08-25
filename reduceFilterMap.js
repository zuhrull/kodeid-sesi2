const animals = [
  {
    name: 'Mujair',
    type: 'fish'
  },
  {
    name: 'Loki',
    type: 'cat'
  },
  {
    name: 'Nemo',
    type: 'fish'
  },
  {
    name: 'Jerry',
    type: 'cat'
  },
  {
    name: 'Tom',
    type: 'dog'
  },
  {
    name: 'Spike',
    type: 'dog'
  }
]

let fishes = [];

let dogs = [];

let cats = [];

fishes = animals.filter((animal) => animal.type == 'fish')
cats = animals.filter((animal) => animal.type == 'cat')
dogs = animals.filter((animal) => animal.type == 'dog')
console.log('------Penggunaan method filter()------')
console.log('fishes', fishes);
console.log('cats', cats);
console.log('dogs', dogs);

let nameOfAnimals = [];
nameOfAnimals = animals.map((animal) => `${animal.name} is a ${animal.type}`);
console.log('------Penggunaan method map()------')
console.log('nameOfAnimals', nameOfAnimals);


let total = 0;
let orders = [
  {
    total: 1000
  },
  {
    total: 1000
  },
  {
    total: 1000
  },
  {
    total: 1000
  },
]

total = orders.reduce((previousValue, order) => previousValue + order.total, total)
// previous value = 0
// order.total = 1000
console.log('------Penggunaan method reduce()------')
console.log('jumlahKeuntunganHariIni', total);
