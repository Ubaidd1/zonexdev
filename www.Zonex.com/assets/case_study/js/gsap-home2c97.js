function gsapInit() {
    var o = gsap.timeline({
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: "#heading_latest_work",
                scrub: !0,
                toggleActions: "play reverse play reverse",
                start: "top-=500vh top",
                end: document.querySelector(".one-stop-solution-img").offsetHeight + document.querySelector("#heading_latest_work").offsetHeight + 100 + " center",
                onUpdate: ({ progress: o, direction: e, isActive: t, getVelocity: r }) => {},
            },
        }),
        e = document.querySelector("#heading_latest_work");
    o.from(e.querySelector(".hlw-1"), { xPercent: -25 }, 0).to(e.querySelector(".hlw-1"), { xPercent: 0 });
    var t = document.querySelector(".one-stop-solution-img");
    o.from(t, { scale: 0.6 }, "-=0.7").to(t, { scale: 1, duration: 0.2 });
}
gsap.registerPlugin(ScrollTrigger),
    window.addEventListener("load", function () {
        gsapInit();
    });
