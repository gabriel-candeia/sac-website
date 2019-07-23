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

function descricaoPalestra(type,id) {
    var x, y, i, palestra;
    x = document.getElementsByClassName('modal_palestras');
    y = document.getElementById('event_type');
    palestra = document.getElementById(id);
    informacao = document.getElementsByClassName('informacao_palestra');

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }

    document.getElementById('my_modal').style.display = 'flex';
    palestra.style.display = 'block';

    y.innerHTML = type.toUpperCase(); 

    for (i = 0; i < 4; i++) {
        informacao[i].innerHTML = palestra.children[i].textContent;
    }
    
}

const modalCloseBtn = document.getElementById('modal_close');
modalCloseBtn.addEventListener('click', () => {
    const modal = document.getElementById('my_modal');
    modal.style.display = 'none';
});

modal = document.getElementById('my_modal');
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }