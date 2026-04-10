// /* edited by @ pranav dev from devUps team*/
const tableBodyContainer = document.getElementById("table-body");
let cartItems;

if (!cartItems) {
  document.getElementById("subtotal").innerHTML = `
  <h4>No items added to Cart</h4>
  `;
}

function checkIsStored() {
  if (localStorage.getItem("carts")) {
    cartItems = JSON.parse(localStorage.getItem("carts"));
  }

  manipulateCartItems();
}

function manipulateCartItems() {
  tableBodyContainer.innerHTML = "";

  cartItems.forEach((element) => {
    tableBodyContainer.innerHTML += `
        <div class="item-container">
         <div class="row-1">
         <img class="table-image" src="${element.image}" alt="" />
         <p class="title"> ${element.title}</p>
          <p class="price">$${element.price}</p>
          <input class="item-value" value="1" />
         </div>
         <button class="remove-btn" onclick="deleteItem('${element.id}')">Delete</button>  
        </tr>
      </div>
        `;
  });
}

function deleteItem(id) {
  const filtered = cartItems.filter((li) => li.id !== id);
  cartItems = filtered;
  localStorage.setItem("carts", JSON.stringify(filtered));
  checkIsStored();
}

checkIsStored();
