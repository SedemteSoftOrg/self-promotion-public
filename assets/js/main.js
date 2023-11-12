function navbar_toggler() {
    $(".navbar-toggler[data-toggle=collapse]").click(function() {
        $(".navbar-toggler[data-toggle=collapse] i").hasClass("fa-bars") ? ($(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-bars"), $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-times")) : ($(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-times"), $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-bars"))
    })
}

function navClone() {
    $(".js-clone-nav").each(function() {
        $(this).clone().attr("class", "navbar-nav ml-auto").appendTo(".d2c_mobile_view_body")
    }), $(".d2c_mobile_view .nav-link").click(function() {
        $(".nav-link").removeClass("active"), $(".d2c_mobile_view").removeClass("show"), $(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-times"), $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-bars"), $(this).toggleClass("active")
    })
}
$(window).on("load", function() {
    var a, t;
    $("#preloader").fadeOut(1500), $(".d2c_testimonial_v1_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        arrows: !0,
        autoplaySpeed: 2e3,
        dots: !1,
        infinite: !0,
        prevArrow: '<button type="button" class="d2c_carousel_btn left" aria-label="carousel-control"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="d2c_carousel_btn right" aria-label="carousel-control"><i class="fas fa-arrow-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: !1
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: !1
            }
        }]
    }), ! function a(t, e, o = "...") {
        t.each(function() {
            var a, t = $(this).text(),
                l = t.split("", e).join("").split(" "),
                a = (l.pop(), l.push(o), l.join(" "));
            t.length > e && (t = a, $(this).text(t))
        })
    }($(".d2c_gallery_column").find(".d2c_para"), 100, ".."), a = document.getElementById("scrollToTopBtn"), window.onscroll = function() {
        document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? a.style.display = "block" : a.style.display = "none"
    }, document.getElementById("scrollToTopBtn").addEventListener("click", function a() {
        document.body.scrollTop = 0, document.documentElement.scrollTop = 0
    })
}), $(document).ready(function() {
}), navbar_toggler(), navClone(), window.addEventListener("load", function() {
    var a = document.getElementsByClassName("form_validation");
    Array.prototype.filter.call(a, function(a) {
        a.addEventListener("submit", function(t) {
            !1 === a.checkValidity() && (t.preventDefault(), t.stopPropagation()), a.classList.add("was-validated")
        }, !1)
    })
}, !1);