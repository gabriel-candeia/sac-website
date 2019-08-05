let mainNav = document.getElementById('js-nav-menu');
let navBarToggle = document.getElementById('js-toggle-icon');
let circles = document.getElementById('test');
let ws = document.getElementById('ws');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let title = document.getElementById('title');
let r1 = document.getElementById('r1');


let lista_item_selected = 0;


navBarToggle.addEventListener('click', function () {    
    mainNav.classList.toggle('active');
});

c1.addEventListener('mouseover', show1);
c2.addEventListener('mouseover', show2);
c3.addEventListener('mouseover', show3);
c4.addEventListener('mouseover', show4);
c5.addEventListener('mouseover', show5);


function show1() {
	ws.innerHTML = "Nesse workshop, será abordado como as novas tendências do desenvolvimento web compõem o React, e como e porquê este se tornou tão conhecido e utilizado pelas grandes empresas (Facebook, Netflix, Microsoft). Além disso, serão abordadas tecnologias como Webpack, Browserify, Node.js e Npm/Yarn.";
	title.innerHTML = "Introdução a ReactJS";
}

function show2() {
	ws.innerHTML = "O Akka é um kit de ferramentas gratuito e de código aberto que simplifica a construção de aplicativos simultâneos e distribuídos na JVM. Akka suporta múltiplos modelos de programação para concorrência, mas enfatiza a simultaneidade baseada em atores, com inspiração tirada de Erlang.";
	title.innerHTML = "Uma breve visão sobre Akka e seus Atores";
}

function show3() {
	ws.innerHTML = "Internet das coisas é um conceito que se refere à interconexão digital de objetos cotidianos com a internet. Durante o workshop, serão feitas atividades com NodeMCU como servidor, gerando interfaces por meio de diferentes protocolos de comunicação.";
	title.innerHTML = "Internet of Things";
}

function show4() {
	ws.innerHTML = "GeoPandas é um projeto open source para facilitar a manipulação de dados geoespaciais em Python. Durante o curso, serão feitas diversas atividades relaciondas a sistemas geográficos, tais como: manipular dados georreferenciados, carregar mapas em estruturas de grafos e calcular o menor caminho numa rede de ruas."
	title.innerHTML = "Sistema de Informação Geográfica em Python com GeoPandas";
}

function show5() {
	ws.innerHTML = "O minicurso visa introduzir os alunos ao fantástico mundo do Machine Learning, por meio da formação de uma base sólida e necessária para melhor entendimento da área."
	title.innerHTML = "Firmando os Pés no Novo Mundo Chamado Machine Learning";
}