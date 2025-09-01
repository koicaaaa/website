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

    const navContainer = document.createElement("div");
    navContainer.classList.add("nav-container");
    navContainer.setAttribute("id", "nav-container");

    const nav1 = document.createElement("div");
    nav1.classList.add("nav-box");
    nav1.setAttribute("id", "nav-one");
    nav1.textContent = "I";

    const nav2 = document.createElement("div");
    nav2.classList.add("nav-box");
    nav2.setAttribute("id", "nav-two");
    nav2.textContent = "II";

    const nav3 = document.createElement("div");
    nav3.classList.add("nav-box");
    nav3.setAttribute("id", "nav-three");
    nav3.textContent = "III";

    const nav4 = document.createElement("div");
    nav4.classList.add("nav-box");
    nav4.setAttribute("id", "nav-four");
    nav4.textContent = "IV";

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-header-container");

    const imageHeader = document.createElement("img");
    imageHeader.src = "https://i.pinimg.com/736x/ae/72/8a/ae728aaff384e5e72c406b6838426a51.jpg";
    imageHeader.classList.add("image-header");
    imageHeader.setAttribute("id", "image-header");

    container.appendChild(background);

    navContainer.appendChild(nav1);
    navContainer.appendChild(nav2);
    navContainer.appendChild(nav3);
    navContainer.appendChild(nav4);

    imageContainer.appendChild(imageHeader);

    backgroundRectangle.appendChild(navContainer);
    backgroundRectangle.appendChild(imageContainer);
    background.appendChild(backgroundRectangle);

    const mainContent = document.getElementById("main-content");
    mainContent.appendChild(container);

    console.log("Hello!");

    return { container, background, backgroundRectangle, navContainer, nav1 };
}