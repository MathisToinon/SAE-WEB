class MyFooter extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div>
                <p>
                    <i class="far fa-copyright"></i>
                    Tilio charrier | Mathis Toinon
                </p>
            </div>
            <div>
                <h3>IUT LYON 1</h3>
                 <p>
                    <a href="https://www.facebook.com/IUTLyon1" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/iutlyon1/" target="_blank"><i class="fab fa-instagram"></i></a>	
                </p>
            </div>
            <div>
                <p>
                    Site de Villeurbanne Doua<br>
                    1, rue de la Technologie<br>
                    69622 Villeurbanne Cedex<br>
                    +33 (0)4 72 69 20 00</p>
                <p>
            </div>
        </footer>
        `;
    }

}

customElements.define("my-footer", MyFooter);