import babyCap from '../../public/thumbnails/baby-cap-white.png';
import babyOneSie from '../../public/thumbnails/baby-onesie-beige-1.png';
import blackBag from '../../public/thumbnails/bag-black.png';
import cowboyHatBlack from '../../public/thumbnails/cowboy-hat-black-1.png';
import cowboyHat from '../../public/thumbnails/cowboy-hat-tan-1.png';
import hat from '../../public/thumbnails/hat-1.png';
import hoodie from '../../public/thumbnails/hoodie-1.png';
import shoes from '../../public/thumbnails/shoes-4.png';
import tShirtCircles from '../../public/thumbnails/t-shirt-circles-black.png';
import tShirtCirclesBlue from '../../public/thumbnails/t-shirt-circles-blue.png';
import tShirtSpiral from '../../public/thumbnails/t-shirt-spiral-1.png';

export const reviews = [
  {
    name: 'Alice',
    review:
      'I love Planetary Swap! I have swapped so many clothes and found some amazing pieces.',
  },
  {
    name: 'Bob',
    review:
      'I have been using Planetary Swap for a few months now and I have saved so much money on clothes.',
  },
  {
    name: 'Charlie',
    review:
      'I love the community on Planetary Swap. Everyone is so friendly and helpful.',
  },
  {
    name: 'David',
    review:
      'I have found some amazing clothes on Planetary Swap. I would recommend it to anyone.',
  },
  {
    name: 'Eve',
    review:
      'I have saved so much money on clothes by using Planetary Swap. It is so easy to use.',
  },
];

export const articles = [
  {
    title: 'Masa Depan Fashion Berkelanjutan',
    author: 'Ausath Ikram',
    date: '2025-01-20',
    summary:
      'Industri fashion di Indonesia terus berkembang pesat, namun di balik gemerlapnya dunia mode, terdapat dampak lingkungan yang cukup besar.',
    href: '/blog/masa-depan-fashion',
  },
  {
    title: 'Tukar Pakaian',
    author: 'Aydie Rahma',
    date: '2025-01-10',
    summary:
      'Industri fashion menjadi salah satu penyumbang terbesar limbah tekstil di dunia. Setiap tahun, jutaan ton pakaian berakhir di tempat pembuangan sampah.',
    href: '/blog/tukar-pakaian',
  },
  {
    title: 'Kisah Sukses Pengusaha Fashion Lokal',
    author: 'Ausath Ikram',
    date: '2025-01-05',
    summary:
      'Industri fashion lokal semakin berkembang pesat, berkat semangat para pengusaha muda yang berani mengambil risiko. Berikut kisah sukses mereka.',
    href: '#',
  },
  {
    title: 'Mengenal Lebih Dekat Teknik Shibori',
    author: 'Aydie Rahma',
    date: '2025-01-01',
    summary:
      'Shibori adalah teknik pewarnaan tekstil tradisional Jepang yang kini semakin populer di kalangan desainer fashion.',
    href: '#',
  },
  {
    title: 'Mengenal Berbagai Jenis Kain',
    author: 'Ausath Ikram',
    date: '2024-12-20',
    summary:
      'Kain adalah bahan dasar pembuatan pakaian. Namun, tahukah Anda bahwa ada berbagai jenis kain?',
    href: '#',
  },
  {
    title: 'Tips Memilih Pakaian yang Tepat',
    author: 'Aydie Rahma',
    date: '2024-12-10',
    summary:
      'Memilih pakaian yang tepat sesuai dengan bentuk tubuh dan warna kulit dapat membuat penampilan Anda semakin menarik.',
    href: '#',
  },
];

export const products = [
  {
    name: 'T-Shirt Circles',
    price: 100,
    href: '/product/t-shirt-circles',
    type: 'marketplace',
    desc: 'A comfortable t-shirt with a unique design.',
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        name: 'Black',
        image: tShirtCircles,
      },
      {
        name: 'Blue',
        image: tShirtCirclesBlue,
      },
    ],
  },
  {
    name: 'T-Shirt Spiral',
    price: 100,
    image: tShirtSpiral,
    type: 'marketplace',
  },
  {
    name: 'Cowboy Hat',
    image: cowboyHat,
    type: 'swap',
    href: '/product/cowboy-hat',
    desc: 'A stylish cowboy hat to complete your look.',
    sizes: ['S', 'M'],
    variants: [
      {
        name: 'Tan',
        image: cowboyHat,
      },
      {
        name: 'Black',
        image: cowboyHatBlack,
      },
    ],
  },
  {
    name: 'Baby Cap',
    image: babyCap,
    type: 'swap',
  },
  {
    name: 'Baby Onesie',
    image: babyOneSie,
    type: 'swap',
  },
  {
    name: 'Hoodie',
    price: 200,
    image: hoodie,
    type: 'marketplace',
  },
  {
    name: 'Shoes',
    image: shoes,
    type: 'swap',
  },
  {
    name: 'Black Bag',
    price: 150,
    image: blackBag,
    type: 'marketplace',
  },
  {
    name: 'Hat',
    image: hat,
    type: 'swap',
  },
];
