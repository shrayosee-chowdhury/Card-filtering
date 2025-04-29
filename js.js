const categories = ["All", "Men", "Woman", "Kids"];
const content = [
    { id: "Men", label: "Men's Shirts" },
    { id: "Men", label: "Men's T-shirts" },
    { id: "Men", label: "Men's Jeans" },
    { id: "Men", label: "Men's Trousers" },
    { id: "Men", label: "Men's Shoes" },
    { id: "Men", label: "Men's Wallets" },
    { id: "Woman", label: "Woman's Tops" },
    { id: "Woman", label: "Woman's Dresses" },
    { id: "Woman", label: "Woman's Pants" },
    { id: "Woman", label: "Woman's Jeans" },
    { id: "Woman", label: "Woman's Makeup" },
    { id: "Woman", label: "Woman's Handbags" },
    { id: "Kids", label: "Kids's Shirt" },
    { id: "Kids", label: "Kids's Pants" },
    { id: "Kids", label: "Kids's Dresses" },
    { id: "Kids", label: "Kids's Skirts" },
    { id: "Kids", label: "Kids's Footwear" }
];

const filterButtons = document.querySelector('.filter-button-wrapper');
const contentWrapper = document.querySelector('.content-wrapper');

function createCategory() {
    categories.forEach(category => {
        const buttonEle = document.createElement('button'); 
        buttonEle.innerText = category;
        buttonEle.classList.add('filter-button'); 
        buttonEle.setAttribute('data-filter', category);
        filterButtons.appendChild(buttonEle);
    });
}

function createContent() {
    content.forEach(contentItem => {
        const singleContentItem = document.createElement('div'); 
        singleContentItem.classList.add('card', contentItem.id); 
        singleContentItem.textContent = contentItem.label; // <-- removed stray 't'
        contentWrapper.appendChild(singleContentItem);
    });
}

createCategory();
createContent();

function filterCardByCategory(extractCurrentCategory, allCards) {
    allCards.forEach(item => {
        const isShowAllCards = extractCurrentCategory.toLowerCase() === 'all';
        const isItemFiltered = !item.classList.contains(extractCurrentCategory);
        if (isItemFiltered && !isShowAllCards) {
            item.classList.add('hide');
        } else {
            item.classList.remove('hide');
        }
    });
}


filterButtons.addEventListener('click', e => {
    if (e.target.matches('.filter-button')) {
        const extractCurrentCategory = e.target.dataset.filter;
        const allCards = document.querySelectorAll('.card');
        filterCardByCategory(extractCurrentCategory, allCards);
    }
});
