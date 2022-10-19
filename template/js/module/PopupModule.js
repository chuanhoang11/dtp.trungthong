export default function PopupModule() {
    $(document).ready(function() {
        $(".play, .play-video").magnificPopup({
            disableOn: 500,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });
    const popupClose = document.querySelectorAll(".popup-close");
    const popupOverlay = document.querySelectorAll(".popup-overlay");
    const body = document.getElementsByTagName("body")[0];
    const popup = document.querySelectorAll(".popup");
    if (popupClose) {
        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
                popup.forEach((item) => {
                    item.classList.remove("open");
                    body.classList.remove("no-scroll");
                });
            });
        });
    }
    if (popupOverlay) {
        popupOverlay.forEach((item) => {
            item.addEventListener("click", () => {
                popup.forEach((item) => {
                    item.classList.remove("open");
                    body.classList.remove("no-scroll");
                });
            });
        });
    }

    const popupOpens = document.querySelectorAll(".popup-open");
    if (popupOpens) {
        popupOpens.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const idString = item.getAttribute("data-popup");
                if (popup) {
                    popup.forEach((item) => {
                        if (item.getAttribute("data-popup-id") == idString) {
                            item.classList.add("open");
                        }
                    });
                }
            });
        });
    }
}