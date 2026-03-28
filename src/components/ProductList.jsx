import React from "react";

const plants = {
  Indoor: [
    { id: 1, name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
    { id: 2, name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85" },
    { id: 3, name: "Peace Lily", price: 20, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb" }
  ],
  Outdoor: [
    { id: 4, name: "Rose", price: 12, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { id: 5, name: "Tulip", price: 14, image: "https://images.unsplash.com/photo-1524594227088-68a4f3d7b8b2" },
    { id: 6, name: "Sunflower", price: 18, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" }
  ]
};

function ProductList({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Plants</h1>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          {plants[category].map((plant) => (
            <div key={plant.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <img src={plant.image} alt={plant.name} width="150" />
              <h3>{plant.name}</h3>
              <p>Price: ${plant.price}</p>

              <button onClick={() => addToCart(plant)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
