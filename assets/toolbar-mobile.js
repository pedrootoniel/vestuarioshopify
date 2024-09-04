class Toolbarmobile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.init();
    }

    init() {
        const header = document.querySelector(".header-sticky__scroll-up");
        header === null ? this.classList.add("active") : this.classList.remove("active");
    }
}
customElements.define("toolbar-mobile", Toolbarmobile);