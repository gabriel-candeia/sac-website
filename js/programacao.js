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
    seg.style.border = '0.1em solid orange';
    ter.style.border = 'none';
    qua.style.border = 'none';
    qui.style.border = 'none';
    sex.style.border = 'none';

    seg.style.borderBottom = 'none';
    ter.style.borderBottom = '0.1em solid orange';
    qua.style.borderBottom = '0.1em solid orange';
    qui.style.borderBottom = '0.1em solid orange';
    sex.style.borderBottom = '0.1em solid orange';

    document.getElementById('palestras-segunda').style.display = 'grid';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function tuesdayTable() {
    seg.style.border = 'none';
    ter.style.border = '0.1em solid orange';
    qua.style.border = 'none';
    qui.style.border = 'none';
    sex.style.border = 'none';

    seg.style.borderBottom = '0.1em solid orange';
    ter.style.borderBottom = 'none';
    qua.style.borderBottom = '0.1em solid orange';
    qui.style.borderBottom = '0.1em solid orange';
    sex.style.borderBottom = '0.1em solid orange';

    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'grid';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function wednesdayTable() {
    seg.style.border = 'none';
    ter.style.border = 'none';
    qua.style.border = '0.1em solid orange';
    qui.style.border = 'none';
    sex.style.border = 'none';
    
    seg.style.borderBottom = '0.1em solid orange';
    ter.style.borderBottom = '0.1em solid orange';
    qua.style.borderBottom = 'none';
    qui.style.borderBottom = '0.1em solid orange';
    sex.style.borderBottom = '0.1em solid orange';

    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'grid';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function thursdayTable() {
    seg.style.border = 'none';
    ter.style.border = 'none';
    qua.style.border = 'none';
    qui.style.border = '0.1em solid orange';
    sex.style.border = 'none';

    seg.style.borderBottom = '0.1em solid orange';
    ter.style.borderBottom = '0.1em solid orange';
    qua.style.borderBottom = '0.1em solid orange';
    qui.style.borderBottom = 'none';
    sex.style.borderBottom = '0.1em solid orange';

    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'grid';
    document.getElementById('palestras-sexta').style.display = 'none';
}

function fridayTable() {
    seg.style.border = 'none';
    ter.style.border = 'none';
    qua.style.border = 'none';
    qui.style.border = 'none';
    sex.style.border = '0.1em solid orange';

    seg.style.borderBottom = '0.1em solid orange';
    ter.style.borderBottom = '0.1em solid orange';
    qua.style.borderBottom = '0.1em solid orange';
    qui.style.borderBottom = '0.1em solid orange';
    sex.style.borderBottom = 'none';

    document.getElementById('palestras-segunda').style.display = 'none';
    document.getElementById('palestras-terca').style.display = 'none';
    document.getElementById('palestras-quarta').style.display = 'none';
    document.getElementById('palestras-quinta').style.display = 'none';
    document.getElementById('palestras-sexta').style.display = 'grid';
}