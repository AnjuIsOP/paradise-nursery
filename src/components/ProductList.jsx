import React from 'react';

const plants = [
  { id: 1, name: 'Rose', price: 100 },
  { id: 2, name: 'Tulip', price: 120 }
];

function ProductList() {
  return (
    <div>
      <h2>Plants</h2>
      {plants.map(plant => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>₹{plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
