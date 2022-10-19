export default function CollapseModule() {
    // const clBlock = document.querySelectorAll(".collapse-block");
    // const clBody = document.querySelectorAll(".collapse-body");
    // if (clBody) {
    //     $(clBody[0]).slideDown();
    //     clBody[0].parentElement.classList.add("active");
    // }
    // if (clBlock) {
    //     clBlock.forEach((item) => {
    //         const clHead = item.querySelector(".collapse-head");
    //         const clBody = item.querySelectorAll(".collapse-body");
    //         clHead.addEventListener("click", () => {
    //             const body = clHead.parentElement.querySelector(".collapse-body");
    //             $(body).slideToggle();
    //             $(clHead.parentElement).toggleClass("active");
    //         });
    //     });
    // }

    const ftHeads = document.querySelectorAll(".footer-head");
    if (ftHeads) {
        ftHeads.forEach((item) => {
            item.addEventListener("click", () => {
                if (window.innerWidth < 768) {
                    $(item).toggleClass("active");
                    const body = item.parentElement.querySelector(".footer-menu");
                    $(body).slideToggle();
                }
            });
        });
    }
}