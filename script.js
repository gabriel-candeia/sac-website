let mainNav = document.getElementById('js-nav-menu');
let navBarToggle = document.getElementById('js-toggle-icon');
let circles = document.getElementById('test');
let ws = document.getElementById('ws');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let title = document.getElementById('title')
	
navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

c1.addEventListener('mouseover', show1);
c2.addEventListener('mouseover', show2);
c3.addEventListener('mouseover', show3);
c4.addEventListener('mouseover', show4);


function show1() {
	ws.innerHTML = "Promote student learning in your math, science, and engineering lab settings from day one. This workshop identifies goals for lab instruction, ways to plan and facilitate effective lab sessions, and strategies for a successful first day of lab class.";
	title.innerHTML = "Teaching in Lab Settings: First Day and Beyond";
}

function show2() {
	ws.innerHTML = "Which teaching methods do UW students find helpful for learning languages? This workshop explores approaches to common language learning challenges and offers strategies for helping all students meet your course’s language learning goals.";
	title.innerHTML = "Teaching Modern Languages: First Day and Beyond";
}

function show3() {
	ws.innerHTML = "One-to-one teaching settings offer unique opportunities for student learning. This workshop offers strategies to help advance all students’ learning in office hours and study centers.";
	title.innerHTML = "Teaching 1:1 in Office Hours and Study Centers";
}

function show4() {
	ws.innerHTML = "During *social science and humanities (SS/HUM) “quiz” sections, TAs are typically responsible for helping students understand and apply concepts learned in large lecture classes. This workshop includes an overview of strategies for helping all students learn in discussion-based quiz sections."
	title.innerHTML = "Teaching SS/HUM* Quiz Sections: First Day and Beyond";
}