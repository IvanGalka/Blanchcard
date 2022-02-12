document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.catalog__tab').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.catalog__tab').forEach(function(tabContent) {
            tabContent.classList.remove('catalog__tab-active')
        })
        document.querySelector(`[data-path="${path}"]`).classList.add('catalog__tab-active')
    })
    })
})