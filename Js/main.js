const scrollers = document.querySelectorAll(".h_scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller)=>{
        scroller.setAttribute("data-animated", true);

        const innerScroller = document.querySelector(".inner_scroller");
        const scrollerContent = Array.from(innerScroller.children);

        scrollerContent.forEach(item => {
            const dupItem = item.cloneNode(true);
            dupItem.setAttribute("aria-hidden", true);
            innerScroller.appendChild(dupItem);
        });
    });
}