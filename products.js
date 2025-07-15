const products = [
  { name: "Smartphone", category: "electronics", price: 299, rating: 4.5 },
  { name: "Laptop", category: "electronics", price: 799, rating: 4.8 },
  { name: "Novel", category: "books", price: 15, rating: 4.1 },
  { name: "Cookbook", category: "books", price: 25, rating: 4.3 }
];

function filterProducts() {
  let category = document.getElementById("filter").value;
  let sort = document.getElementById("sort").value;

  let filtered = category === "all" ? [...products] : products.filter(p => p.category === category);

  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  const list = document.getElementById("productList");
  list.innerHTML = filtered.map(p => `<div class="card">${p.name} - ₹${p.price} - ⭐${p.rating}</div>`).join("");
}

window.onload = filterProducts;


alert("hhe")