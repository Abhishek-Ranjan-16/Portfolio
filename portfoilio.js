function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            let spanParent = document.createElement("span");
            let spanChild = document.createElement("span");

            spanParent.classList.add("parent");
            spanChild.classList.add("child");

            // spanChild.textContent=elem.textContent;
            spanChild.innerHTML = elem.innerHTML;
            spanParent.appendChild(spanChild);

            elem.innerHTML = "";
            elem.appendChild(spanParent);

        })
}
revealToSpan();

document.getElementById("game").style.opacity = "0";

var tl = gsap.timeline();
document.getElementById("game").style.opacity = "1";
tl
    .from(".child span", {
        opacity: "0",
        x: 100,
        ease: Power3.easeInOut,
        duration: 2,
        stagger: .2,
    })
    .to(".parent .child", {
        y: "-100%",
        ease: Circ.easeInOut,
        duration: 1,
    })
    .to("#loader", {
        height: 0,
        ease: Expo.easeInOut,
        duration: 1
    })
    .to("#green", {
        height: "100%",
        top: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -2
    })
    .to("#container", {
        height: "100%",
        top: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1.8
    })


document.querySelector(".cross").style.display = 'none';
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    document.querySelector(".wow").classList.toggle("bhurme");

    let say = document.querySelector(".sidebar").classList.contains("sidebarGo");
    console.log(say);
    if (say) {
        document.querySelector(".ham").style.display = 'inline';
        document.querySelector(".cross").style.display = 'none';
    }
    else {
        document.querySelector(".ham").style.display = 'none';
        setTimeout(() => {

            document.querySelector(".cross").style.display = 'inline';
        }, 300)

    }
})


