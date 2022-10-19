export default function AnimatedModule() {
    let $window = $(window);

    function scrollAddClass(el, className) {
        $(el).each(function() {
            let el = this;
            if (
                $(el).offset().top <
                $window.scrollTop() + ($window.height() / 10) * 8
            ) {
                $(el).addClass(className);
            }
        });
    }

    function bindImageAnimations() {
        scrollAddClass(".load-img", "is-inview");

        $window.on("scroll", function() {
            scrollAddClass(".load-img", "is-inview");
        });
    }
    bindImageAnimations();
}