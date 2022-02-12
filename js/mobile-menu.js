document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.header__burger').addEventListener('click', function () {
        document.querySelector('.nav').classList.add('nav-active');
    });
    document.querySelector('.nav__close').addEventListener('click', function () {
        document.querySelector('nav').classList.remove('nav-active');
    });
    document.querySelector('.header__top-search').addEventListener('click', function () {
        document.querySelector('.search').classList.add('search-active');
    });
    document.querySelector('.search__close').addEventListener('click', function () {
        document.querySelector('.search').classList.remove('search-active');
    });
});

