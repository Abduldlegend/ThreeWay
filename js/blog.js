'use strict';

const items =Array.from(document.querySelectorAll('.blog-post'));
const itemsPerPage = 3;
let currentPage = 1;

function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage

    //Hide item with animation
    items.forEach((item, i) => {
        // item.classList.remove('show');
        // setTimeout(() => item.style.display = 'none', 400);
        // item.style.display = i >= start && i < end ? 'block' : 'none';
    });

    // show item with animation after a short delay
    setTimeout(() => {
        items.forEach((item, i) => {
            if (i >= start && i < end) {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('show'), 60)
            }else {
                item.style.display = 'none'
                setTimeout(() => item.classList.remove('show'), 60)
            }
            
        })
    })

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