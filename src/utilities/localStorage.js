const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
const saveCartToLs = cart =>{
    const saveCartString = JSON.stringify(cart);
    localStorage.setItem('cart', saveCartString)
}
const addToLs = id =>{
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLs(cart)
}
const removeFromLocalStorage= id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLs(remaining)
}

export {addToLs, getStoredCart, removeFromLocalStorage}