'use strict';

const items =Array.from(document.querySelectorAll('.blog-post'));
const itemsPerPage = 3;
let currentPage = 1;

function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage

    items.forEach((item, i) => {
        item.style.display = i >= start && i < end ? 'block' : 'none';
    });

    document.getElementById('page-number').innerText = page;
}

function changePage(direction) {
    const totalPages = Math.ceil (items.length / itemsPerPage);
    currentPage += direction;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    showPage(currentPage)
}

//Initialize first page
showPage(currentPage);
console.log(items);