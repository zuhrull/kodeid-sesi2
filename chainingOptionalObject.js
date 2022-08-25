//ternary option

const value = true;
let nilai = ''
if (value === true) console.log('benar')
else console.log('salah')

value ? console.log('benar') : console.log('salah');

value && (nilai = 'true gan')

const products = [
  {
    name: 'Mie Goreng',
    promo: {
      monday: '10',
      tuesday: '20'
    }
  },
  {
    name: 'Bumbu Pala',
  },
]



for (let i = 0;i < products.length; i++) {
  console.log('name product', products[i]?.name);
   if (products[i].promo) {
     console.log('diskon senini', products[i].promo.monday)
   } else {
     console.log('diskon tidak ada')
   }
  console.log('diskon senin', products[i]?.promo?.monday || 'Diskon Tidak Ada')
}
