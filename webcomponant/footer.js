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
            <img class="excellence-techno" src="image/LOGO_HR_EC2.png" alt="logo représentant l'excelence technologique de l'iut">
            <div>
                    <p>
                        <a href="https://www.facebook.com/IUTLyon1" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/iutlyon1/" target="_blank"><i class="fab fa-instagram"></i></a>	
                    </p>
            </div>
        </footer>
        `;
    }

}

customElements.define("my-footer", MyFooter);