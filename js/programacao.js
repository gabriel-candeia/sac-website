//Função para mostrar o cronograma de cada dia

function cronogramaDia(diaValue, palestra_dia) {
    var i, x, y;
    x = document.getElementsByClassName('prog_palestras');
    y = document.getElementsByClassName('dia');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    for (i = 0; i < y.length; i++) {
        y[i].style.border = 'none';
        y[i].style.borderBottom = '0.1em solid orange';
    }
    document.getElementById(diaValue).style.border = '0.1em solid orange';
    document.getElementById(diaValue).style.borderBottom = 'none';
    document.getElementById(palestra_dia).style.display = 'grid';
}

//Função para Modal
function descricaoPalestra(id) {
    var x, i;
    x = document.getElementsByClassName('modal-palestras');

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    document.getElementById('myModal').style.display = 'block';
    document.getElementById(id).style.display = 'block';
}