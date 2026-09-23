const productOptions = {
    100: {
        article: '01306',
        price: '326,40 ₽',
        oldPrice: '349,20 ₽',
    },

    500: {
        article: '01307',
        price: '1 432 ₽',
        oldPrice: '1 646 ₽',
    },

    1000: {
        article: '01308',
        price: '2 064 ₽',
        oldPrice: '2 592 ₽',
    },

    5000: {
        article: '01309',
        price: '6 320 ₽',
        oldPrice: '8 710 ₽',
    },
};


const weightButtons = document.querySelectorAll('.weight-button');
const articleElement = document.querySelector('#product-article');
const priceElement = document.querySelector('#product-price');
const oldPriceElement = document.querySelector('#product-old-price');
const cartButton = document.querySelector('#cart-button');


function selectOption(weight) {
    const option = productOptions[weight];

    if (!option) {
        return;
    }

    articleElement.textContent = option.article;
    priceElement.textContent = option.price;
    oldPriceElement.textContent = option.oldPrice;

    weightButtons.forEach((button) => {
        const isActive = button.dataset.weight === String(weight);

        button.classList.toggle('weight-button--active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}


weightButtons.forEach((button) => {
    button.addEventListener('click', () => {
     selectOption
    (button.dataset.weight);
    });
});

selectOption(100);