import React, { useState } from 'react';

const plants = [
  { id: 1, name: 'Rose', price: 100, category: 'Flowering', image: 'rose.jpg' },
  { id: 2, name: 'Tulip', price: 120, category: 'Flowering', image: 'tulip.jpg' },
  { id: 3, name: 'Snake Plant', price: 200, category: 'Indoor', image: 'snake.jpg' },
  { id: 4, name: 'Aloe Vera', price: 180, category: 'Medicinal', image: 'aloe.jpg' },
  { id: 5, name: 'Money Plant', price: 150, category: 'Indoor', image: 'money.jpg' },
  { id: 6, name: 'Lavender', price: 170, category: 'Medicinal', image: 'lavender.jpg' }
];

export default function ProductList() {
  const [added, setAdded] = useState([]);
  const [count, setCount] = useState(0);

  const handleAdd = (id) => {
    setAdded([...added, id]);
    setCount(count + 1);
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a> | <a href="#plants">Plants</a> | <a href="#cart">Cart ({count})</a>
      </nav>

      <h2>Plant Listing</h2>

      {['Flowering', 'Indoor', 'Medicinal'].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} width="100" />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                <button
                  disabled={added.includes(plant.id)}
                  onClick={() => handleAdd(plant.id)}
                >
                  {added.includes(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
