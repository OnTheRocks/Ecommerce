import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name:'Nathan',
      email: 'nathan_huber@yahoo.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name:'Clint',
      email: 'ClintBass@yahoo.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },

  ],
  products: [
    {
      name: 'Nike Shirt',
      category: 'Shirts', 
      image: '/images/p1.jpg',
      price: 78,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality product',
    },
    {
      name: 'Adidas Shirt',
      category: 'Shirts', 
      image: '/images/p2.jpg',
      price: 69,
      countInStock: 16,
      brand: 'Adidas',
      rating: 5,
      numReviews: 13,
      description: 'High quality product',
    },
    {
      name: 'Polo Shirt',
      category: 'Shirts', 
      image: '/images/p3.jpg',
      price: 110,
      countInStock: 20,
      brand: 'Polo',
      rating: 4,
      numReviews: 13,
      description: 'High quality product',
    },
    {
      name: 'Haggar Pants',
      category: 'Pants', 
      image: '/images/p4.jpg',
      price: 92,
      countInStock: 0,
      brand: 'Haggar',
      rating: 5,
      numReviews: 6,
      description: 'High quality product',
    },
    {
      name: 'Gilfoyle Pants',
      category: 'Pants', 
      image: '/images/p5.jpg',
      price: 110,
      countInStock: 1,
      brand: 'Gilfoyle',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality product',
    },
    {
      name: 'Jacobs Pants',
      category: 'Pants', 
      image: '/images/p6.jpg',
      price: 99,
      countInStock: 12,
      brand: 'Jacobs',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality product',
    },
    {
      name: 'Goodfellow Pants',
      category: 'Pants', 
      image: '/images/p4.jpg',
      price: 92,
      countInStock: 0,
      brand: 'Goodfellow',
      rating: 5,
      numReviews: 6,
      description: 'High quality product',
    }
  ]
}

export default data;