window.onload = function(){
    const categories = document.querySelectorAll(".categories__item");
    for (let i = 10; i < categories.length-1; i++) {
        categories[i].style.display = "none";
    }
    const more = document.getElementById("more_button");
    let flag = false;
    more.addEventListener("click", () => {
        flag = !flag;
        if (!flag) {
            for (let i = 10; i < categories.length-1; i++) {
                categories[i].style.display = "none";
            }
        } else {
            for (let i = 10; i < categories.length-1; i++) {
                categories[i].style.display = "flex";
            }
        }
    })

    const items = document.querySelectorAll(".item");
    const counts = [0, 0, 0, 0];

    items.forEach((item, index) => {
        const cartBtn = item.querySelector(".cart");

        const counter = document.createElement("p");
        counter.classList.add("number");
        counter.style.display = "none";
        cartBtn.appendChild(counter);

        item.addEventListener("click", (e) => {
            e.stopPropagation();
            counts[index]++;
            counter.innerText = counts[index];
            counter.style.display = "block";
        });
    });

    const menu = document.querySelector(".menu");
    const categ_list = document.querySelector(".categories");
    const back = document.querySelector(".back");
    let menuOpen = false;
    let container=document.querySelector(".container");

    menu.addEventListener("click", () => {
        menuOpen = !menuOpen;

        if (menuOpen) {
            back.appendChild(categ_list);
            back.classList.add("active");
            categ_list.classList.add("active");
            menu.classList.add("active");
        } else {
            back.classList.remove("active");
            categ_list.classList.remove("active");
            container.appendChild(categ_list);
            menu.classList.remove("active");
        }
    });
}


