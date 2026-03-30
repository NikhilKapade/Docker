const foods = [
  {
    id: 1,
    name: "Pizza",
    price: 250,
    img: "https://source.unsplash.com/featured/?pizza"
  },
  {
    id: 2,
    name: "Burger",
    price: 150,
    img: "https://source.unsplash.com/featured/?burger"
  },
  {
    id: 3,
    name: "Pasta",
    price: 200,
    img: "https://source.unsplash.com/featured/?pasta"
  }
];

let cart = [];

const foodList = document.getElementById("food-list");
const cartList = document.getElementById("cart");
const loader = document.getElementById("loader");

/* Navigation */
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));

  if (page === "home") document.getElementById("home").classList.remove("hidden");
  if (page === "cart") document.getElementById("cart-page").classList.remove("hidden");
  if (page === "orders") document.getElementById("orders").classList.remove("hidden");
}

/* Loader simulation */
function showLoader() {
  loader.style.display = "block";
  setTimeout(() => loader.style.display = "none", 1000);
}

/* Render foods */
function renderFoods() {
  showLoader();

  foods.forEach(food => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${food.img}" />
      <div class="card-content">
        <h3>${food.name}</h3>
        <p>₹${food.price}</p>
        <div class="qty">
          <button onclick="changeQty(${food.id}, -1)">-</button>
          <span id="qty-${food.id}">0</span>
          <button onclick="changeQty(${food.id}, 1)">+</button>
        </div>
      </div>
    `;

    foodList.appendChild(div);
  });
}

/* Quantity control */
function changeQty(id, delta) {
  let item = cart.find(i => i.id === id);

  if (!item && delta > 0) {
    const food = foods.find(f => f.id === id);
    cart.push({ ...food, qty: 1 });
  } else if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }

  updateUI();
}

/* Update UI */
function updateUI() {
  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.name} x${item.qty} = ₹${item.price * item.qty}`;
    cartList.appendChild(li);

    document.getElementById(`qty-${item.id}`).innerText = item.qty;
  });
}

renderFoods();