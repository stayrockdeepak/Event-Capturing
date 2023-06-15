//Event Capturing

const grandParentC = document.getElementById("grandParentC");
const parentC = document.getElementById("parentC");
const childC = document.getElementById("childC");

grandParentC.addEventListener(
  "click",
  (e) => {
    console.log("Capturing--> grandParent div is clicked");
  },
  { capture: true }
);

parentC.addEventListener(
  "click",
  (e) => {
    console.log("Capturing--> parent div is clicked");
  },
  { capture: true }
);

childC.addEventListener(
  "click",
  (e) => {
    console.log("Capturing--> child div is clicked");
  },
  { capture: true }
);
