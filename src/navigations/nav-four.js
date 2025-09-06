import { basis } from "../base";

export function navFour() {
    const boxFour = document.getElementById("nav-four");
    if (boxFour) {
        boxFour.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("memememme");

            const mainContent = document.getElementById("main-content");
            mainContent.textContent = "New Page";
            contentFour();
        })
    }

    return { boxFour }
}

export function contentFour() {
    const container = document.createElement("div");
    container.classList.add("fourth-content-container");
    container.setAttribute("id", "fourth-content-container");

    const background = document.createElement("div");
    background.classList.add("fourth-background-container");
    background.setAttribute("id", "fourth-background-container");

    const backgroundRectangle = document.createElement("div");
    backgroundRectangle.classList.add("fourth-background-rectangle");
    backgroundRectangle.setAttribute("id", "fourth-background-rectangle");

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
        navFour();
    })

    const pictureFourContainer = document.createElement("div");
    pictureFourContainer.classList.add("pic-four-container");
    pictureFourContainer.setAttribute("id", "pic-one-container");

    const pictureFour = document.createElement("img");
    pictureFour.classList.add("pic-four");
    pictureFour.setAttribute("id", "pic-four");
    pictureFour.src = "https://i.pinimg.com/736x/1e/e2/68/1ee2688885ebbfe8bc2b949baac51456.jpg";

    pictureFourContainer.appendChild(pictureFour);

    backgroundRectangle.appendChild(pictureFourContainer);
    backgroundRectangle.appendChild(returnBtn);
    background.appendChild(backgroundRectangle);
    container.appendChild(background);

    const mainContent = document.getElementById("main-content");
    mainContent.appendChild(container);

    return { background, backgroundRectangle, mainContent, returnBtn, pictureFour, pictureFourContainer }
}