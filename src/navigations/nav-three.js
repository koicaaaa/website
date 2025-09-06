import { basis } from "../base";

export function navThree() {
    const boxThree = document.getElementById("nav-three");
    if (boxThree) {
        boxThree.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("Wowzas!");

            const mainContent = document.getElementById("main-content");
            mainContent.textContent = "New Page";
            contentThree();
        })
    }

    return { boxThree }
}

export function contentThree() {
    const container = document.createElement("div");
    container.classList.add("third-content-container");
    container.setAttribute("id", "third-content-container");

    const background = document.createElement("div");
    background.classList.add("third-background-container");
    background.setAttribute("id", "third-background-container");

    const backgroundRectangle = document.createElement("div");
    backgroundRectangle.classList.add("third-background-rectangle");
    backgroundRectangle.setAttribute("id", "third-background-rectangle");

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
        navThree();
    })

    const pictureThreeContainer = document.createElement("div");
    pictureThreeContainer.classList.add("pic-three-container");
    pictureThreeContainer.setAttribute("id", "pic-three-container");

    const pictureThree = document.createElement("img");
    pictureThree.classList.add("pic-three");
    pictureThree.setAttribute("id", "pic-three");
    pictureThree.src = "https://i.pinimg.com/1200x/53/33/21/5333214d438fcb30fc156f220f39d9fd.jpg";

    pictureThreeContainer.appendChild(pictureThree);

    backgroundRectangle.appendChild(pictureThreeContainer);
    backgroundRectangle.appendChild(returnBtn);
    background.appendChild(backgroundRectangle);
    container.appendChild(background);

    const mainContent = document.getElementById("main-content");
    mainContent.appendChild(container);

    return { background, backgroundRectangle, mainContent, returnBtn, pictureThree, pictureThreeContainer }
}