// Array From Slider Container
let arrayFromImage = Array.from(document.querySelectorAll(".slider-container img"));

// Element Count
let elementCount = arrayFromImage.length;

// currentSlide
let currentSlide = 1;

// set Next And Previous
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// Handle Images
prev.onclick = previousClick;
next.onclick = nextClick;

// Create Pagination Element
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= elementCount; i++) {

    // Create Element LI
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

// Append To Element Main
document.getElementById("indicators").appendChild(paginationElement)

let paginationElementUl = document.querySelector(".indicators ul");
let paginationLi = document.querySelectorAll(".indicators li");

for (let i = 0; i < paginationLi.length; i++) {
    paginationLi[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker()
    }
}

theChecker()

function previousClick() {
    if (prev.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        theChecker()
    }
}

function nextClick() {
    if (next.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        theChecker()
    }
}



function theChecker() {

    document.getElementById("slide-number").textContent =  `Slide #${currentSlide} of ${elementCount}`;

    removeAllActive()

    arrayFromImage[currentSlide - 1].classList.add("active");

    paginationElement.children[currentSlide - 1].classList.add("active")

    if (currentSlide == 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled")
    }
    if (currentSlide == elementCount) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled")
    }
}

function removeAllActive() {

    arrayFromImage.forEach(img => {
        img.classList.remove("active");
    });

    paginationLi.forEach(li => {
        li.classList.remove("active");
    });


}