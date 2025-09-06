import { basis } from "../base";

export function navOne() {
    const boxOne = document.getElementById("nav-one");
    if (boxOne) {
        boxOne.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("Hello world!");

            const mainContent = document.getElementById("main-content");
            mainContent.textContent = "New Page";
            contentOne();
        })
    }

    return { boxOne }
}

export function contentOne() {
    const container = document.createElement("div");
    container.classList.add("one-content-container");
    container.setAttribute("id", "one-content-container");

    const background = document.createElement("div");
    background.classList.add("one-background-container");
    background.setAttribute("id", "one-background-container");

    const backgroundRectangle = document.createElement("div");
    backgroundRectangle.classList.add("one-background-rectangle");
    backgroundRectangle.setAttribute("id", "one-background-rectangle");

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
        navOne();
    })

    const pictureOneContainer = document.createElement("div");
    pictureOneContainer.classList.add("pic-one-container");
    pictureOneContainer.setAttribute("id", "pic-one-container");

    const pictureOne = document.createElement("img");
    pictureOne.classList.add("pic-one");
    pictureOne.setAttribute("id", "pic-one");
    pictureOne.src = "https://i.pinimg.com/736x/6c/9e/8d/6c9e8d1d2aa3e12fc486f04561434e5f.jpg";

    pictureOneContainer.appendChild(pictureOne);

    backgroundRectangle.appendChild(pictureOneContainer);
    backgroundRectangle.appendChild(returnBtn);
    background.appendChild(backgroundRectangle);
    container.appendChild(background);

    const mainContent = document.getElementById("main-content");
    mainContent.appendChild(container);

    return { background, backgroundRectangle, mainContent, returnBtn, pictureOne, pictureOneContainer }
}