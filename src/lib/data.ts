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
    title: 'The Future of Sustainable Fashion',
    author: 'Ausath Ikram',
    date: '2025-01-20',
    summary:
      'The fashion industry in Indonesia continues to grow rapidly, but behind the glamour of the fashion world, there is a significant environmental impact.',
    href: '/blog/future-of-fashion',
  },
  {
    title: 'Clothing Swap',
    author: 'Aydie Rahma',
    date: '2025-01-10',
    summary:
      'The fashion industry is one of the largest contributors to textile waste in the world. Every year, millions of tons of clothing end up in landfills.',
    href: '#',
  },
  {
    title: 'Success Stories',
    author: 'Ausath Ikram',
    date: '2025-01-05',
    summary:
      'The local fashion industry is growing rapidly, thanks to the spirit of young entrepreneurs willing to take risks. Here are their success stories.',
    href: '#',
  },
  {
    title: 'A Closer Look at Shibori Technique',
    author: 'Aydie Rahma',
    date: '2025-01-01',
    summary:
      'Shibori is a traditional Japanese textile dyeing technique that is becoming increasingly popular among fashion designers.',
    href: '#',
  },
  {
    title: 'Understanding Different Types of Fabric',
    author: 'Ausath Ikram',
    date: '2024-12-20',
    summary:
      'Fabric is the basic material for making clothes. But did you know that there are various types of fabric?',
    href: '#',
  },
  {
    title: 'Tips for Choosing the Right Clothing',
    author: 'Aydie Rahma',
    date: '2024-12-10',
    summary:
      'Choosing the right clothes according to your body shape and skin tone can make your appearance more attractive.',
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
