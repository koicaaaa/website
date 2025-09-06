import { basis } from "../base";

export function navTwo() {
    const boxTwo = document.getElementById("nav-two");
    boxTwo.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Num 2!");

        const mainContent = document.getElementById("main-content");
        mainContent.textContent = "New Page";
        contentTwo();
    })

    return { boxTwo }
}


export function contentTwo() {
    const container = document.createElement("div");
    container.classList.add("two-content-container");
    container.setAttribute("id", "two-content-container");

    const background = document.createElement("div");
    background.classList.add("two-background-container");
    background.setAttribute("id", "two-background-container");

    const backgroundRectangle = document.createElement("div");
    backgroundRectangle.classList.add("two-background-rectangle");
    backgroundRectangle.setAttribute("id", "two-background-rectangle");

    const returnBtn = document.createElement("button");
    returnBtn.classList.add("return-btn");
    returnBtn.setAttribute("id", "return-btn");
    returnBtn.textContent = "Return";

    returnBtn.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Going back...");
        
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = "";

        basis();
        navTwo();
    })

    const pictureTwoContainer = document.createElement("div");
    pictureTwoContainer.classList.add("pic-two-container");
    pictureTwoContainer.setAttribute("id", "pic-two-container");

    const pictureTwo = document.createElement("img");
    pictureTwo.classList.add("pic-two");
    pictureTwo.setAttribute("id", "pic-two");
    pictureTwo.src = "https://i.pinimg.com/736x/c6/eb/b9/c6ebb909f41e3b0b6ec393f489207d42.jpg";

    pictureTwoContainer.appendChild(pictureTwo);

    backgroundRectangle.appendChild(pictureTwoContainer);
    backgroundRectangle.appendChild(returnBtn);
    background.appendChild(backgroundRectangle);
    container.appendChild(background);

    const mainContent = document.getElementById("main-content");
    mainContent.appendChild(container);

    return { background, backgroundRectangle, mainContent, returnBtn, pictureTwo, pictureTwoContainer }
}