
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

function handleRating() {
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            alert(`Cảm ơn bạn đã đánh giá ${index + 1} sao!`);
            // Logic cập nhật UI ở đây
        });
    });
}

function addBlogPost(title, content, imageSrc) {
    const blogContainer = document.getElementById('blog-container');
    if(!blogContainer) return;

    const postHTML = `
        <article class="blog-post">
            <img src="${imageSrc}" alt="Blog Image">
            <h3>${title}</h3>
            <p>${content}</p>
        </article>
    `;
    blogContainer.innerHTML += postHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    handleRating();
});