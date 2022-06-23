class Cart {
    #data = [];
    cartEvent = new Event('cartChanged', {bubbles:true});

    add = (product) => {
        this.#data.push(product);
        dispatchEvent(this.cartEvent);
    }

    remove = (id) => {
        this.#data = this.#data.filter(elem => elem.id != id);
        dispatchEvent(this.cartEvent);
    }

    removeFirst = (id) => {
        let index = this.#data.indexOf(this.#data.find(elem => elem.id == id));
        this.#data.splice(index, 1);
        dispatchEvent(this.cartEvent);
    }

    clear = () => {
        this.#data = [];
        dispatchEvent(this.cartEvent);
    }

    get = () => {
        return this.#data;
    }
    
    calc = () => {
        let sum = 0;
        this.#data.forEach(elem => 
            sum += elem.price
        );
        return sum;
    }


    isInCart = (id) => {
        if (!this.#data.length) return false;
        return this.#data.filter(elem => elem.id == id);
    }
}

export default Cart;