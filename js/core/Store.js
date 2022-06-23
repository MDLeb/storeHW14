import Cart from "./Cart.js";
import Product from "./Product.js"

class Store {
    #data = [];
    cart = new Cart();

    constructor (dataArray) {
        if(!Array.isArray(dataArray)) return;
        this.#data = dataArray.map(elem => new Product(elem));
        console.log('Store added!');
    }

    set = (dataArray) => {
        if(!Array.isArray(dataArray)) return;
        this.#data = dataArray.map(elem => new Product(elem));
    }

    get = () => {
        return this.#data;
    }

    getById = (id) => {
        return this.#data.find(elem => elem.id == id);
    }

    updateLocalStorage = () => {
        localStorage.setItem('storeApp', '');
        localStorage.setItem('storeApp', JSON.stringify(this.#data));
    }
}

export default Store;