document.addEventListener("DOMContentLoaded", function () {
    const MOBILE_WIDTH = 576;
    let acc;
    const accWrap = document.querySelector(".checkbox__form");
    const checkboxes = accWrap.querySelector(".checkbox__content");
    const accHeader = accWrap.querySelector(".checkbox__heading");
  
    function sortElems(elems) {
      elems.sort(function (a, b) {
        const valueA = parseInt(a.parentNode.dataset.position);
        const valueB = parseInt(b.parentNode.dataset.position);
  
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      });
    }
  
    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }
    
    function removeCheckbox (e) {
      checkboxes.append(e.target.parentElement);
      e.target.removeEventListener('change', removeCheckbox);
    }
  
    function onAccordionClick(evt, ui) {
      const checkedBoxes = Array.from(accWrap.querySelectorAll(".checkbox__check"));
      sortElems(checkedBoxes);
  
      if (!ui.newHeader[0]) {
        checkedBoxes.forEach(function (el) {
          if (el.checked) {
            accWrap.append(el.parentNode);
            el.addEventListener('change', removeCheckbox);
          }
        });
      } else {
        checkedBoxes.forEach(function (el) {
          checkboxes.append(el.parentNode);
          el.removeEventListener('change', removeCheckbox);
        });
      }
    }
  
    function checkWindowWidth() {
      const currentWidth = getWindowWidth();
      const checkedBoxes = Array.from(accWrap.querySelectorAll(".checkbox__check"));
  
      if (currentWidth > MOBILE_WIDTH && acc) {
        const checkedBoxes = Array.from(accWrap.querySelectorAll(".checkbox__check"));
        sortElems(checkedBoxes);
        acc.accordion("destroy");
        acc = false;
        checkedBoxes.forEach(function (el) {
          checkboxes.append(el.parentNode);
        });
      } else if ((currentWidth <= MOBILE_WIDTH) & !acc) {
        acc = $(".checkbox__container").accordion({
          header: '.checkbox__heading',
          collapsible: true,
          active: false,
          icons: false,
          heightStyle: "content",
          beforeActivate: function (evt, ui) {
            console.log(ui);
            onAccordionClick(evt, ui);
          }
        });
  
        checkedBoxes.forEach(function (el) {
          if (el.checked) {
            accWrap.append(el.parentNode);
          }
        });
      }
    }
  
    checkWindowWidth();
    window.addEventListener("resize", function () {
      checkWindowWidth();
    });
  });
  
