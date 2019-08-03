let mymap = L.map("mapa", {scrollWheelZoom: false}).setView([-3.745693, -38.57369], 18);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGllZ29maCIsImEiOiJjanloamdod2gwMDlwM2ZxbHRmOHp3MWphIn0.lGenfWt53QnqOFCaKsLxIw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

let markerDC = L.circle([-3.745925, -38.574141],{
    color: 'white',
    fillColor: '#1FC9BB',
    fillOpacity: 0.3,
    radius: 40
} ).addTo(mymap);

let markerCC = L.circle([-3.745500, -38.573277],
    {
    color: 'white',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 32
} ).addTo(mymap);

let markerAuditorio = L.marker([-3.745636, -38.57317]).addTo(mymap);
let markerLab = L.marker([-3.745877, -38.573964]).addTo(mymap);
let markerPET = L.marker([-3.745989, -38.574173]).addTo(mymap);
let markerAudDC = L.marker([-3.746, -38.574012]).addTo(mymap);
let markerVGO = L.marker([-3.7454, -38.573272]).addTo(mymap);
let markerFreePlay = L.marker([-3.745545, -38.573658]).addTo(mymap);
 
markerAuditorio.bindPopup("<b>AUDITORIO DO CENTRO DE CIÊNCIAS</b><br>Aqui ocorrerá a abertura dos evento e as principais palestras.");
markerLab.bindPopup("<b>LABORATORIOS DE COMPUTAÇÃO</b><br>Aqui ocorrerão os Workshops e Minicursos");
markerCC.bindPopup("Proximo ao audito, haverão stands de venda da blusa da SAC.")
markerDC.bindPopup("<b>DEPARTAMENTO DE COMPUTAÇÃO</b><br>Aqui nele se localizam os Laboratorios de Computação e a Sala do PET")
markerPET.bindPopup("<b>SALA DO PET</b><br>Venha aqui tirar qualquer dúvida sobre a SAC.")
markerAudDC.bindPopup("<b>Auditorio do DC</b><br>Aqui ocorrerão algumas palestras durante o período da tarde.")
markerVGO.bindPopup("<b>Videogame Olympics</b><br>Aqui ocorrerá os diversos campeonatos de jogos da SAC.")
markerFreePlay.bindPopup("<b>Free Play</b><br>Aqui os consoles ficarão a disposisão para qualquer pessoa que quiser jogar.")
