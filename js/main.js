
// Feature product start....
const firstButton = document.getElementById('btnAll');
const secondButton = document.getElementById('top');
const thirdButton = document.getElementById('seller');

document.getElementById('btnAll').addEventListener('click', function () {
    firstButton.classList.remove('background');
    secondButton.classList.remove('active');
    thirdButton.classList.remove('active');
    firstButton.classList.add('active');
    secondButton.classList.add('background');
    thirdButton.classList.add('background');

    document.querySelectorAll('#topFeatureProduct').forEach(function (el) {
        el.style.display = 'block';
    })

    document.querySelectorAll('#bestSaleFeatureProduct').forEach(function (el) {
        el.style.display = 'block';
    })

})

document.getElementById('top').addEventListener('click', function () {
    secondButton.classList.remove('background');
    firstButton.classList.remove('active');
    firstButton.classList.remove('color');
    thirdButton.classList.remove('active');
    secondButton.classList.add('active');
    firstButton.classList.add('background');
    thirdButton.classList.add('background');

    document.querySelectorAll('#topFeatureProduct').forEach(function (el) {
        el.style.display = 'block';
    })

    document.querySelectorAll('#bestSaleFeatureProduct').forEach(function (el) {
        el.style.display = 'none';
    })
})

document.getElementById('seller').addEventListener('click', function () {
    firstButton.classList.remove('active');
    secondButton.classList.remove('active');
    firstButton.classList.remove('color');
    firstButton.classList.add('background');
    secondButton.classList.add('background');
    thirdButton.classList.add('active');

    document.querySelectorAll('#topFeatureProduct').forEach(function (product) {
        product.style.display = 'none';
    })

    document.querySelectorAll('#bestSaleFeatureProduct').forEach(function (product) {
        product.style.display = 'block';
    })
})
// Feature product End.





