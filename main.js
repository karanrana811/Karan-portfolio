var blogOne = document.querySelector('.hidden-blog-one');
var blogTwo = document.querySelector('.hidden-blog-two');
var buttonOne = document.querySelector('#button-blog-one');
var buttonTwo = document.querySelector('#button-blog-two');
var buttonLessOne = document.querySelector('#button-blog-one-less');
var buttonLessTwo = document.querySelector('#button-blog-two-less');


blogOne.style.display = 'none';
blogTwo.style.display = 'none';
buttonLessOne.style.display = 'none';
buttonLessTwo.style.display = 'none';

function showBlogOne() {
    blogOne.style.display = 'block';
    buttonOne.style.display = 'none';
    buttonLessOne.style.display = 'block';
}

function showBlogTwo() {
    blogTwo.style.display = 'block';
    buttonTwo.style.display = 'none';
    buttonLessTwo.style.display = 'block';
}

function hideBlogOne() {
    blogOne.style.display = 'none';
    buttonOne.style.display = 'block';
    buttonLessOne.style.display = 'none';

}

function hideBlogTwo() {
    blogTwo.style.display = 'none'
    buttonTwo.style.display = 'block';
    buttonLessTwo.style.display = 'none';
}

buttonOne.addEventListener('click', showBlogOne);

buttonTwo.addEventListener('click', showBlogTwo);

buttonLessOne.addEventListener('click', hideBlogOne);
buttonLessTwo.addEventListener('click', hideBlogTwo);