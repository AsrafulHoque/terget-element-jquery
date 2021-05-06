/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */


$(document).ready(function () {

    $(window).on('scroll', function () {
        let ScrollTop = $(this).scrollTop();
        let windowHeight = $(this).outerHeight();

        function targetElement(el) {
            if ($(el).length) {         
                let elementoffsetTop = el.offset().top;
                let elementOuterHeight = el.outerHeight();
                if (ScrollTop >= (elementoffsetTop - (windowHeight / 2))) {
                    setTimeout(function () {
                        el.addClass('active');
                       // el.find('#target-title').addClass('active');
                    }, 100)
                }
            }
        }
        targetElement($('#item3'));
    })
});