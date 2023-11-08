// ! handles only front end tasks

let options = document.querySelector(".options");
let domain = document.querySelector(".domain"); // used to change between units
let list = document.querySelector(".list"); // main for displaying content
let domainOpt = document.querySelector(".DomainOptions");
let domainlist = document.querySelector(".DomainList");
let from = document.querySelector(".jsFrom");
let to = document.querySelector(".jsTo");
let fromBtn = document.querySelector(".fromBtn");
let toBtn = document.querySelector(".toBtn");
let active;
let decider;
let currentDomain;
let fromValue;
let toValue;
let value = document.querySelectorAll(".value");

// =================================================================
fromBtn.addEventListener("click", () => {
  openOptions();
  decider = from;
});
toBtn.addEventListener("click", () => {
  openOptions();
  decider = to;
});
domainlist.addEventListener("click", closeOptions);
domain.addEventListener("click", openSuggestions);

list.addEventListener("click", () => {
  closeSuggestions();
});

function openSuggestions() {
  // console.log("hello");
  options.style.display = "block";
  gsap.to(options, 0.2, { x: 100, opacity: 1 });
  //displaying main convertor factors
  renderSuggestions(unitsList);
  closeOptions();
}

function closeSuggestions() {
  // console.log("bye");
  gsap.to(options, 0.4, { x: -100, opacity: 0 });
  options.style.display = "none";
  active = false;
}
function openOptions() {
  domainOpt.style.display = "block";
  gsap.to(domainOpt, 0.1, { height: 150 });
  gsap.to(domainOpt, 0.1, { y: 20 });
  active = true;
  closeSuggestions();
}
function closeOptions() {
  gsap.to(domainOpt, 0.1, { height: 0 });
  gsap.to(domainOpt, 0.1, { y: 0 });
  active = false;
}

function renderSuggestions(array) {
  /*
  
  The code you provided defines a JavaScript function called `renderSuggestions`, which is responsible for rendering a list of suggestions and handling click events on those suggestions. Here's a summary of what this code does:

1. It clears any existing content in an HTML element with the class `list`.

2. It iterates through an input array and creates HTML list items (list of suggestions) with the class "context" for each item in the array.

3. It updates the HTML content of the `list` element with the generated suggestions.

4. It adds click event listeners to all elements with the class "context."

5. When a suggestion is clicked, the function performs the following actions based on the clicked suggestion's text (domain name):
   - Updates an icon based on the domain.
   - Renders domain-specific options.
   - Resets the heading.
   - Closes the suggestions list.

The code appears to be related to building a user interface where users can select different domains, and actions are taken based on their selections.
*/
  let text = ``;
  list.innerHTML = text;
  array.forEach((i) => {
    text += `<li class="context">${i}</li>`;
  });
  list.innerHTML = text;
  let context = document.querySelectorAll(".context");
  context.forEach((curr) => {
    curr.addEventListener("click", () => {
      let domainName = curr.innerText;
      switch (domainName) {
        case "Length": {
          // alert("Length");
          domainIcon(
            `<span class="material-symbols-outlined">straighten</span>`
          ); // updates the icon
          renderDomainOpt(Object.keys(lenghtUnits));
          headingReset();
          currentDomain = lenghtUnits;
          break;
        }
        case "Area": {
          domainIcon(`<span class="material-symbols-outlined">crop</span>`);
          // alert("area");
          renderDomainOpt(Object.keys(areaUnits));
          headingReset();
          currentDomain = areaUnits;
          break;
        }
        case "Volume": {
          domainIcon(
            `<span class="material-symbols-outlined">deployed_code</span>`
          );
          // alert("volume");
          renderDomainOpt(Object.keys(volumeUnits));
          headingReset();
          currentDomain = volumeUnits;
          break;
        }
        case "Weight": {
          domainIcon(`<span class="material-symbols-outlined">weight</span>`);
          // alert("weight");
          renderDomainOpt(Object.keys(weightUnits));
          headingReset();
          currentDomain = weightUnits;
          break;
        }
        // case "Temperature": {
        //   domainIcon(
        //     `<span class="material-symbols-outlined">device_thermostat</span>`
        //   );
        //   // alert("temperature");
        //   renderDomainOpt(Object.keys(temperatureUnits));
        //   headingReset();
        //   currentDomain = temperatureUnits;
        //   break;
        // }
        case "Speed": {
          domainIcon(`<span class="material-symbols-outlined">speed</span>`);
          // alert("speed");
          renderDomainOpt(Object.keys(speedUnits));
          headingReset();
          currentDomain = speedUnits;
          break;
        }
        case "Pressure": {
          domainIcon(`<span class="material-symbols-outlined">compress</span>`);
          // alert("pressure");
          renderDomainOpt(Object.keys(pressureUnits));
          headingReset();
          currentDomain = pressureUnits;
          break;
        }
        case "Power": {
          domainIcon(`<span class="material-symbols-outlined">charger</span>`);
          // alert("power");
          renderDomainOpt(Object.keys(powerUnits));
          headingReset();
          currentDomain = powerUnits;
          break;
        }
      }
      closeSuggestions();
    });
  });
}
let domainIcon = (text) => {
  domain.innerHTML = text;
  // used to insert icon to the domain button
};

let renderDomainOpt = (arr) => {
  /*

1. It initializes an empty string variable `text` to store the HTML for the domain options.

2. It iterates through the `arr` (input array) and creates HTML list items (`<li>`) with the class "finalOpt" for each item in the array. These list items represent the domain options.

3. It updates the HTML content of an element with the id `domainlist` with the generated domain options. The `domainlist` is assumed to be an HTML element in your document.

4. It selects all elements with the class "finalOpt" and adds click event listeners to each of them.

5. When a domain option is clicked, the function sets the HTML content of an element with the id `decider` to the text of the clicked option (`i.innerHTML`). It then calls the `closeOptions` function, which is not defined in the provided code but is likely responsible for closing or hiding the list of domain options.

*/

  let text = ``;
  arr.forEach((cur) => {
    text += `<li class="finalOpt">${cur}</li>`;
  });
  domainlist.innerHTML = text;

  let finalOpt = document.querySelectorAll(".finalOpt");
  finalOpt.forEach((i) => {
    i.addEventListener("click", () => {
      decider.innerHTML = i.innerHTML; //todo update THE NAME HERE
      closeOptions();
      rendervalue();
    });
  });
};

function headingReset() {
  from.innerHTML = "FROM UNIT";
  to.innerHTML = "TO UNIT";
  valueReset();
  /* resets the place holder text to its initial state*/
}
function valueReset() {
  value.forEach((i) => {
    i.value = 0;
    i.value = "";
  });
  // console.log("value reset successfully");
  // console.log(value[0].value);
}
// =========================================================
//  processing conversions starts from here
value[0].addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    fromValue = value[0].value;
    if (
      from.innerHTML.trim() === "FROM UNIT" ||
      to.innerHTML.trim() === "TO UNIT"
    ) {
      // console.log("cannot convert");
      return;
    }
    rendervalue();
  }
});
value[0].addEventListener("input", rendervalue);
function rendervalue() {
  fromValue = value[0].value;
  fromUnit = from.innerHTML.trim();
  toUnit = to.innerHTML.trim();
  let sol = convert(fromValue, fromUnit, toUnit, currentDomain);
  value[1].value = sol.toFixed(4);
}
function convert(value, fromUnit, toUnit, array) {
  const factor = array[fromUnit] / array[toUnit];
  const result = value * factor;
  // console.log(value, fromUnit, " is ", result, toUnit);
  return result;
}
