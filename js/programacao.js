let seg = document.getElementById('Segunda');
seg.addEventListener('click', mondayTable);

let ter = document.getElementById('Terca');
ter.addEventListener('click', tuesdayTable);

let qua = document.getElementById('Quarta');
qua.addEventListener('click', wednesdayTable);

let qui = document.getElementById('Quinta');
qui.addEventListener('click', thursdayTable);

let sex = document.getElementById('Sexta');
sex.addEventListener('click', fridayTable);



function mondayTable() {
    document.getElementById('palestras-segunda').style.display = 'grid';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function tuesdayTable() {
    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'grid';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function wednesdayTable() {
    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'grid';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function thursdayTable() {
    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'grid';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function fridayTable() {
    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'grid';
}