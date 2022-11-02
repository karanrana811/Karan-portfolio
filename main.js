var blogOne = document.querySelector('.hidden-blog-one');
var blogTwo = document.querySelector('.hidden-blog-two');
var buttonOne = document.querySelector('#button-blog-one');
var buttonTwo = document.querySelector('#button-blog-two');

blogOne.style.display = 'none';
blogTwo.style.display = 'none';

function showBlogOne() {
    blogOne.style.display = 'block';
    buttonOne.style.display = 'none';
}

function showBlogTwo() {
    blogTwo.style.display = 'block';
    buttonTwo.style.display = 'none';
}

buttonOne.addEventListener('click', showBlogOne);

buttonTwo.addEventListener('click', showBlogTwo);