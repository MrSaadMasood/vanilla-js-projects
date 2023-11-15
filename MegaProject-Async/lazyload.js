// getting the grid items and grid container

const imagesGridItems = document.querySelectorAll(".grid_item");

const containerWithGridItems = document.querySelector(".lazy_inner_container");

// adding an event listener to the window object so that when the window is loaded lazy loading can take place

window.addEventListener("load", () => {
  setObserverOnItemsContainer();
});

// function to add the observer on the all the grid items

function setObserverOnItemsContainer() {
  imagesGridItems.forEach((item) => {
    // the optoions objects here defines the parameters like which element should be the ancestor of target grid items
    // root is that ancestor element
    // threshold is after how much visibity the observer on item will be added
    let options = {
      root: containerWithGridItems,
      rootMargin: "10px",
      threshold: 0.75,
    };

    // an observer is added to the grid items and an instance of the objserver is created
    // the itersectionObserver takes two arguments 1- A callback function 2-options object
    const itemObserver = new IntersectionObserver(handleIntersection, options);
    itemObserver.observe(item);
    imageLoader(item);
  });
}

// adds images to the grid items that are predefined on observation

function imageLoader(element) {
  const imageElement = document.createElement("img");
  randomImageId = Math.floor(Math.random() * 100000 + 1);
  imageElement.setAttribute(
    "src",
    `https://picsum.photos/400/400?random=${randomImageId}`,
  );
  element.appendChild(imageElement);
}

// funtion to decide what happens as the grid elements are observed. what to do with them
// it can two arguments, first being all the elements the observer is observing, second being the observer instance OR "itemObserver" itself
// the elements here are in the form of an array and the indivual elements nature is different than the dom element
// i.e observedElement = [IntersectionObserverEntry]
// i.e element = IntersectionObserverEntry {time: 418.5, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly,
// intersectionRect: DOMRectReadOnly, isIntersecting: false, …}
function handleIntersection(observedElements) {
  observedElements.forEach((element) => {
    if (element.isIntersecting) {
      if (
        element.target === observedElements[observedElements.length - 1].target
      ) {
        let num = 1;
        for (let i = 1; i <= 13; i++) {
          newImagesGenerator(num);
          if (i === 3) {
            num = 2;
          } else if (i === 7) {
            num = 3;
          }
        }
      }
    }
  });
}

// this funtions generates new div and appends the img to it according to the screen size

function newImagesGenerator(number) {
  const digit = number;
  const newDivForImage = document.createElement("div");
  if (digit === 1) {
    newDivForImage.classList.add(
      "bg-amber-500",
      "h-60",
      "w-72",
      "md:h-64",
      "md:w-80",
      "overflow-hidden",
    );
  } else if (digit === 2) {
    newDivForImage.classList.add(
      "bg-amber-500",
      "h-60",
      "w-72",
      "md:h-64",
      "md:w-80",
      "overflow-hidden",
      "hidden",
      "md:block",
      "lg:block",
      "xl:block",
    );
  } else if (digit === 3) {
    newDivForImage.classList.add(
      "bg-amber-500",
      "h-60",
      "w-72",
      "md:h-64",
      "md:w-80",
      "overflow-hidden",
      "hidden",
      "md:hidden",
      "lg:block",
      "xl:block",
    );
  }
  const newImageElement = document.createElement("img");
  newrandomImageId = Math.floor(Math.random() * 100000 + 1);
  newImageElement.setAttribute(
    "src",
    `https://picsum.photos/400/400?random=${newrandomImageId}`,
  );
  newDivForImage.appendChild(newImageElement);
  containerWithGridItems.appendChild(newDivForImage);
}
