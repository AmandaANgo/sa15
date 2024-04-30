let currentCategory = 'all';

function filterItems(category) {
    const portfolioItems = document.querySelectorAll('.gallery-item');

    portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });

    // Update currentCategory
    currentCategory = category;
}

const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        
        // If the same category is clicked again, show all items immediately
        if (category === currentCategory) {
            filterItems('all');
        } else {
            filterItems(category);
        }
    });
});
