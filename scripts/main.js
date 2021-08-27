$(document).ready(function() {
    function responsive() {
        if (window.innerWidth <= 620) {
            $("#nav-links-all").hide();
            $("#toggler").show();
        } else {
            $("#toggler").hide();
            $("#nav-links-all").show();
        }
    }

    responsive();
    $(window).resize(responsive);

    $("#toggler").click(function() {
        $("#toggler span i").toggleClass("fa-arrow-down").toggleClass("fa-bars");
        $("#nav-links-all").slideToggle();
    });

    // * typeWriter
    const texts = [
        "সেরা স্কুল গুলির মধ্যে অন্যতম",
        "টাংগাইল জেলায় অবস্থিত"
    ];
    var index = 0;
    var text = texts[index++];
    const parent = $(".body-text div");
    var i = 0;

    function typeWrite() {
        parent.html("");

        var animator = setInterval(() => {
            parent.append("<span class='text-animation'>" + text[i++] + "</span>");
            if (i >= text.length) {
                clearInterval(animator);
                i = 0;
                text = texts[index++];
                if (index >= texts.length) {
                    index = 0;
                }
            }
        }, 50);

        // typeWrite();
    }
    typeWrite();

    setInterval(typeWrite, 5000);
});