const Nav = function() {

    this.init = () => {
        let navElem = document.createElement('nav');
        navElem.classList.add('nav');
        navElem.innerText = 'nav';

        return navElem;
    }
}

export default new Nav().init();