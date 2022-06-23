import Store from "./core/Store.js";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Product from "./core/Product.js";

const App = function () {

    

    this.rootElem = document.querySelector('#root');

    this.appElem = document.createElement('div');
    this.appElem.classList.add('app');
    this.url = 'https://fakestoreapi.com/products';
    this.getData = async() => {
        await fetch(this.url)
        .then(res => res.json())
        .then(data => {
            window.store = new Store(data);
        })
    }
    this.spinner = document.createElement('div');
    this.spinner.classList.add('spinner');

    this.init = async () => {
        
        let header = Header;

        let main = document.createElement('div');
        main.append(this.spinner);
        let mainElem = new Main();
        
        let footer = Footer;

        this.appElem.append(header.init(), main, footer);

        this.rootElem.append(this.appElem);
        window.addEventListener('hashchange', () => {
            main.append(mainElem.render());
        });
        
        window.addEventListener('cartChanged', () => {
            header.cartItems = window.store.cart.get().length;
            header.updateCart();
            main.append(mainElem.render());

        })

        await this.getData();
        main.querySelector('.spinner').remove();
        
        if(window.localStorage.storeApp) {
            let arr = await JSON.parse(window.localStorage.storeApp);
            arr.forEach(elem => 
                window.store.cart.add(new Product(elem))
            )
        }

        main.append(mainElem.render());
        header.cartItems = window.store.cart.get().length;
    }
}

export default new App().init();