const firstParams = {
  tabsClass: 'catalog__tab',
  wrap: 'catalog__tabs',
  content: 'catalog__content',
  active: 'catalog__content-active'
}

const secondParams = {
  tabsClass: 'tab__btn',
  wrap: 'catalog__interactive',
  content: 'interactive__content',
  active: 'interactive__content-active'
}


function setTabs (params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick (e) {
    const path = e.target.dataset.path;
    const wrap = e.target.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach(el => {
      el.classList.remove(params.active);
    });
    
    currentContent.classList.add(params.active);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener('click', onTabClick);
  });
}

setTabs(firstParams);
setTabs(secondParams);