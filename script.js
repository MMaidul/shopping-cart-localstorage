const addProducts = () => {

    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    //clearSearchField;
    searchInput.value = '';

    if (!searchText) {
        return;
    }

    //displayProductsHandler;
    displayProducts(searchText);

    //addProductToCart;
    addProductToCart(searchText);

    //placeOrderDisplay;
    document.getElementById('place-order').style.display = 'block';

}



const displayProducts = (products) => {


    const productParent = document.getElementById('litst-parent');
    const div = document.createElement('div');
    div.classList.add('list-group');
    div.innerHTML = `
    <label class="list-group-item my-2">
    <input class="form-check-input" type="checkbox" value="">
   ${products}
   </label>
    `;
    productParent.appendChild(div);
}



const checkStorages = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    cart ? cartObj = JSON.parse(cart) : cartObj = {};
    return cartObj;
}


const addProductToCart = (product) => {
    const cart = checkStorages();
    cart[product] = 1;
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}



const storageToPlace = () => {
    const cart = checkStorages();
    for (const products in cart) {
        displayProducts(products);
        //placeOrderDisplay;
        document.getElementById('place-order').style.display = 'block';
    }
}

storageToPlace();



const placeOrder = () => {
    document.getElementById('litst-parent').innerText = '';
    //placeOrderDisplay;
    document.getElementById('place-order').style.display = 'none';
    //clearLocalStorage;
    localStorage.removeItem('cart');
}