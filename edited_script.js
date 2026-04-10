let products;
let carts;
const productContainer = document.getElementById("products");
document.querySelector(".logo").innerHTML = `
<img  src="https://ashay05.github.io/AFASH/logofinal.png" alt="LOGO" height="100px" width="100px"/>
`;
async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    alert("API ERROR 505: ADMIN CALLOUT");
  }
  const data = await res.json();
  products = [data.products];
  manipulateProducts(data.products);
}

function manipulateProducts(items) {
  productContainer.innerHTML = "";

  items.forEach((element) => {
    productContainer.innerHTML += `
        <div class="pro">
        <img src="${element.images[0]}" alt="" />
        <div class="des">
          <span>${element.category}</span>
          <h5>${element.name || element.title}</h5>
          <div class="star">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <h4>$${element.price}</h4>
        </div>
        <button onclick="storeCart({
          title: '${element.title}',
          image: '${element.images[0]}',
          price: '${element.price}',
          id: '${element.id}'
        })"><i class="ri-shopping-cart-2-line cart"></i></button>
      </div>
        `;
  });
}

function checkCart() {
  if (localStorage.getItem("carts")) {
    carts = JSON.parse(localStorage.getItem("carts"));
  }

  console.log("this is from check cart", carts);

  maniPulateCart();
}

function maniPulateCart() {
  if (carts) {
    document.getElementById("cart-number").textContent = carts?.length;
  } else {
    document.getElementById("cart-number").style.display = "none";
  }
}
function storeCart(item) {
  // console.log(item);
  if (!carts) {
    carts = [item];
  } else {
    carts.push(item);
  }
  localStorage.setItem("carts", JSON.stringify(carts));
  checkCart();
}

checkCart();
fetchProducts();

const bar = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".navbar");

if (bar) {
  bar.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
