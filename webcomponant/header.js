class MyHeader extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
        <header>
		<dialog id="mydialog">
			<div class="menumodal">
				<a class="pageouverte" href="index.html">Accueil</a>
				<a href="Evenement.html">Evenement</a>
				<a href="details.html">Plus de détails</a>
				<a href="questionnaire.html">Nous contacter</a>
				<button class="close" id="hide">
					<i class="fas fa-times"></i>
				</button>	
			</div>
		</dialog>

		<dialog id="mydialog2">
			<div class="searchbar">
				<input type="text" id="search" name="search" required minlength="1" maxlength="20">
				<button class="close" id="hide2">
					<i class="fas fa-times"></i>
				</button>
			</div>
		</dialog>

		<nav id="nav" class="isTop">
			<div class="cote-G">
				<img class="logo" src="image/logo_iut_fondnoir2.png" alt="Batiment de l'iut">
				<p>L'excellence technologique</p>
			</div>
			<div class="cote-D">
				<button class="notification">
					<i class="fas fa-bell"></i>
				</button>
				<div class="recherche">
					<button id="show2">
						<i class="fas fa-search"></i>
						Recherche
					</button>
				</div>
				<div class="menu">
					<button id="show">
						<i class="fas fa-bars"></i>
						Menu
					</button>
				</div>
			</div>
		</nav>
		<div class="article_main">
			<article class="mainArt">
				<h1>Vous chercher cherchez des informations sur le BUT informatique à la Doua ?</h1>
				<h2>Vous êtes au bon endroit ! <i class="far fa-arrow-alt-circle-right"></i></h2>
			</article>
		</div>
	</header>`;
    }

}

customElements.define("my-header", MyHeader);