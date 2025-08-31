export function basis() {
    const container = document.createElement("div");
    container.classList.add("content-container");
    container.setAttribute("id", "content-container");

    const background = document.createElement("div");
    background.classList.add("background-container");
    background.setAttribute("id", "background-container");

    const backgroundRectangle = document.createElement("div");
    backgroundRectangle.classList.add("background-rectangle");
    backgroundRectangle.setAttribute("id", "background-rectangle");

    container.appendChild(background);
    background.appendChild(backgroundRectangle);

    const mainContent = document.getElementById("main-content");
    mainContent.appendChild(container);

    console.log("Hello!");

    return { container, background, backgroundRectangle };
}