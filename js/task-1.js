const allItems = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${allItems.length}`);

allItems.forEach(category => {
    const categoryName = category.querySelector(`h2`).textContent;

    const elementQuantity = category.querySelectorAll(`ul li`).length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementQuantity}`);
    
});