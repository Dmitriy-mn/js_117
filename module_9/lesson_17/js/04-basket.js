const LS_KEY = 'basket';

const container = document.querySelector(".js-list");
const totalPrice = document.querySelector(".js-total-price");
const clearBtn = document.querySelector(".js-clear");

const products = JSON.parse(localStorage.getItem(LS_KEY)) || [];
let totalCost;


if(products.length) {
    clearBtn.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc + price * qty, 0)
}

totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";

container.insertAdjacentHTML("beforeend", createMarkup(products));
clearBtn.addEventListener("click", handleClick);


function handleClick() {
   localStorage.removeItem(LS_KEY);
   window.location.href = "./03-shop.html";
}



function createMarkup(arr) {
    return arr.map(({ img, name, price, qty }) => `
        <li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price} грн</p>
        </li>
    `).join("")
}






