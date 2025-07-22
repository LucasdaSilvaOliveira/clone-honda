$('.owl-carousel-destaques').owlCarousel({
    loop: true,
    margin: 10,
    nav: true
});

$(document).ready(function() {
    const autoplayTimeout = 5000; // 5 segundos
    const $progress = $(".progress-bar-fill");
    let progressInterval;
    let startTime;

    const startProgress = () => {
        clearInterval(progressInterval);
        $progress.css("width", "0%");
        startTime = Date.now();

        progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const percent = Math.min((elapsed / autoplayTimeout) * 100, 100);
            $progress.css("width", percent + "%");

            if (percent >= 100) {
                clearInterval(progressInterval);
            }
        }, 16); // 60fps (aprox.)
    };

    const owl = $(".owl-carousel-header").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: autoplayTimeout,
        autoplayHoverPause: true
    });

    // Quando slide muda, reinicia a barrinha
    owl.on("changed.owl.carousel", function() {
        startProgress();
    });

    // Inicia barrinha no primeiro slide
    startProgress();
});
