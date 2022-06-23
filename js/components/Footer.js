const Footer = function() {

    this.init = () => {
        let footerElem = document.createElement('footer');
        footerElem.classList.add('footer');
        footerElem.innerText = 'footer';

        return footerElem;
    }
}

export default new Footer().init();