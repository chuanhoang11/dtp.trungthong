export default function SwiperModule() {
    const bannerSliders = document.querySelectorAll(".banner-slider");
    if (bannerSliders) {
        bannerSliders.forEach((item) => {
            const swiper = item.querySelector(".swiper");
            let loop = true;
            if (swiper) {
                if (swiper.classList.contains("loop-none")) {
                    loop = false;
                }
            }
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                autoplay: {
                    delay: 3000
                },
                pagination: {
                    el: ".banner-slider .swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: ".banner-slider .swiper-next",
                    prevEl: ".banner-slider .swiper-prev"
                },
                // slidesPerGroup: 2,
                loop: loop,
                spaceBetween: 0,
                // effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    500: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 1
                    }
                }
            });
        });
    }

    var introSlider = new Swiper(".intro-slider .swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        initialSlide: 1,
        speed: 1200,
        autoplay: {
            delay: 3000
        },
        loop: false,
        navigation: {
            nextEl: ".intro-slider .swiper-next",
            prevEl: ".intro-slider .swiper-prev"
        },
        coverflowEffect: {
            rotate: 0,
            stretch: -20,
            depth: 100,
            modifier: 1,
            slideShadows: false
        },
        pagination: {
            el: ".intro-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        }
    });
    var solutionSlider = new Swiper(".solution-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".solution-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".solution-slider .swiper-next",
            prevEl: ".solution-slider .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 0,
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
    });

    var tweSlider = new Swiper(".twe-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000
        // },
        pagination: {
            el: ".twe-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".twe-slider .swiper-next",
            prevEl: ".twe-slider .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 30,
        slidesPerGroup: 2,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 14
            },
            400: {
                slidesPerView: 2.5,
                spaceBetween: 14
            },
            768: {
                slidesPerView: 2.5
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 3.5
            },
            1500: {
                slidesPerView: 3.8
            },
            1650: {
                slidesPerView: 4
            }
        }
    });
    var partnerSlider = new Swiper(".partner-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000
        // },
        pagination: {
            el: ".partner-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".partner-slider .swiper-next",
            prevEl: ".partner-slider .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 50,
        slidesPerGroup: 1,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            1400: {
                slidesPerView: 6
            },
            1650: {
                slidesPerView: 6
            }
        }
    });

    var leadSlider = new Swiper(".lead-slider .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000
        // },
        pagination: {
            el: ".lead-slider .swiper-pagination",
            type: "progressbar",
            clickable: true
        },
        navigation: {
            nextEl: ".lead-slider .swiper-next",
            prevEl: ".lead-slider .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 60,
        slidesPerGroup: 1,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                centeredSlides: true,
                loop: true
            },
            400: {
                slidesPerView: 1.8,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    var roadSliderThumb = new Swiper(".road-slider-thumb .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000
        // },
        pagination: {
            el: ".road-slider-thumb .swiper-pagination",
            type: "progressbar",
            clickable: true
        },
        navigation: {
            nextEl: ".road-slider-thumb .swiper-next",
            prevEl: ".road-slider-thumb .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 20,
        slidesPerGroup: 1,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2.2,
                spaceBetween: 10,
                centeredSlides: true,
                loop: true
            },
            400: {
                slidesPerView: 4.5
            },
            500: {
                slidesPerView: 4.5
            },
            768: {
                slidesPerView: 5.5
            },
            1200: {
                slidesPerView: 7
            }
        }
    });
    var roadSliderMain = new Swiper(".road-slider-main .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".road-slider-main .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".road-slider-main .swiper-next",
            prevEl: ".road-slider-main .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        effect: "slide",
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: roadSliderThumb
        }
    });
    var achiSlider = new Swiper(".achi-slider .swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        initialSlide: 1,
        speed: 1200,
        autoplay: {
            delay: 3000
        },
        loop: true,
        navigation: {
            nextEl: ".achi-slider .swiper-next",
            prevEl: ".achi-slider .swiper-prev"
        },
        coverflowEffect: {
            rotate: 0,
            stretch: -80,
            depth: 100,
            modifier: 1,
            slideShadows: false
        },
        breakpoints: {
            0: {
                coverflowEffect: {
                    stretch: -40
                }
            },
            500: {
                coverflowEffect: {
                    stretch: -40
                }
            },
            768: {
                coverflowEffect: {
                    stretch: -80
                }
            },
            1200: {
                coverflowEffect: {
                    stretch: -80
                }
            }
        },
        pagination: {
            el: ".achi-slider .swiper-pagination",
            type: "bullets",
            clickable: true
        }
    });
    const proSliders = document.querySelectorAll(".pro-slider");

    if (proSliders) {
        proSliders.forEach((item) => {
            const swiper = item.querySelector(".swiper");
            const pagi = item.querySelector(".swiper-pagination");
            const next = item.querySelector(".swiper-next");
            const prev = item.querySelector(".swiper-prev");
            const slide = item.querySelectorAll(".swiper-slide");
            const dataInitSlide = item.getAttribute("data-init-slide");
            let numberSlide = 4;
            if (dataInitSlide) {
                numberSlide = dataInitSlide;
            }
            const slideLenght = slide.length;
            let rowNumber = 2;
            if (slideLenght <= 4 || item.classList.contains("row-none")) {
                rowNumber = 1;
            }
            var slider = new Swiper(swiper, {
                // freeMode: true,
                watchSlidesProgress: true,
                speed: 1200,
                // autoplay: {
                //     delay: 3000
                // },
                pagination: {
                    el: pagi,
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                // slidesPerGroup: 2,
                loop: false,
                spaceBetween: 10,
                slidesPerGroup: 1,
                // effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                grid: {
                    rows: rowNumber
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.5,
                        grid: {
                            rows: 1
                        }
                    },
                    400: {
                        slidesPerView: 2,
                        grid: {
                            rows: 1
                        }
                    },
                    600: {
                        slidesPerView: 2.5
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: numberSlide
                    }
                }
            });
        });
    }

    var detailSliderThumb = new Swiper(".detail-slider-thumb .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 3000
        // },
        pagination: {
            el: ".detail-slider-thumb .swiper-pagination",
            type: "progressbar",
            clickable: true
        },
        navigation: {
            nextEl: ".detail-slider-thumb .swiper-next",
            prevEl: ".detail-slider-thumb .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 0,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2.2
            },
            400: {
                slidesPerView: 3
            },
            500: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
    var detailSliderMain = new Swiper(".detail-slider-main .swiper", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: ".detail-slider-main .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".detail-slider-main .swiper-next",
            prevEl: ".detail-slider-main .swiper-prev"
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 0,
        slidesPerView: 1,
        effect: "slide",
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: detailSliderThumb
        }
    });
}