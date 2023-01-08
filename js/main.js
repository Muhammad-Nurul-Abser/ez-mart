const f = document.getElementById('btnAll');
const s = document.getElementById('top');
const t = document.getElementById('seller');



const box1 = document.getElementById('feature-cardbox1')
box1.style.display='block';

const box2 = document.getElementById('feature-cardbox2')
box2.style.display='block';

const box3 = document.getElementById('feature-cardbox3')
box3.style.display='block';

const box4 = document.getElementById('feature-cardbox4')
box4.style.display='block';

document.getElementById('btnAll').addEventListener('click', function(){
    f.classList.remove('background');
    s.classList.remove('active');
    t.classList.remove('active');
    f.classList.add('active');
    s.classList.add('background');
    t.classList.add('background');

    box1.style.display='block';
    box2.style.display='block';
    box3.style.display='block';
    box4.style.display='block';
})

document.getElementById('top').addEventListener('click', function(){
    s.classList.remove('background');
    f.classList.remove('active');
    f.classList.remove('color');
    t.classList.remove('active');
    s.classList.add('active');
    f.classList.add('background');
    t.classList.add('background');
    box1.style.display='none';
    box2.style.display='block';
    box3.style.display='block';
    box4.style.display='none';
})

document.getElementById('seller').addEventListener('click', function(){
    f.classList.remove('active');
    s.classList.remove('active');
    f.classList.remove('color');
    f.classList.add('background');
    s.classList.add('background');
    t.classList.add('active');
    box1.style.display='block';
    box2.style.display='none';
    box3.style.display='none';
    box4.style.display='block';
})