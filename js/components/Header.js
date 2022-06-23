const Header = function() {

    this.cartItems = 0;
    
    // window.addEventListener('cartChanged', () => {
    //     this.cartItems = window.store.cart.get().length;
    //     this.updateCart();
    // })

    this.init = () => {
        let headerElem = document.createElement('header');
        headerElem.classList.add('header');
        headerElem.innerHTML = `
            <div class="content">
            <a class="cart" href="#cart">
                <span class="cart_count"> ${this.cartItems}<span>
            </a>
            </div>
    `;
        return headerElem;
    }
    this.updateCart = () => {
        document.querySelector('.header').querySelector('.cart_count').innerHTML = `${this.cartItems}`; 
    }
    
}

export default new Header();