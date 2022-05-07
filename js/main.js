var title_hover = false;

if(!title_hover) {
    $(".title").mouseenter(function () {
        title_hover = true;
        var typed = new Typed('.typed-web', {
            strings: ["b"],
            typeSpeed: 100,
            startDelay: 0,
            showCursor: false,
        });
    
        var typed2 = new Typed('.typed-readme', {
            strings: ["eadme"],
            typeSpeed: 100,
            startDelay: 500,
            showCursor: false,
        });
    
        var typed3 = new Typed('.typed-generator', {
            strings: ["erator"],
            typeSpeed: 100,
            startDelay: 1000,
            showCursor: false,
        });

    });
}