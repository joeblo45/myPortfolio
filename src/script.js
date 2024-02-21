//Accordion
// document.addEventListener("DOMContentLoaded", () => {
//   const accordionItems = document.querySelectorAll(".accordion-item");

//   accordionItems.forEach((item) => {
//     const accordionHeader = item.querySelector(".accordion-header");
//     const accordionButton = item.querySelector(".accordion-button");
//     const accordionContent = item.querySelector(".accordion-content");

//     accordionHeader.addEventListener("click", () => {
//       const isExpanded =
//         accordionButton.getAttribute("aria-expanded") === "true";

//       accordionItems.forEach((otherItem) => {
//         const otherButton = otherItem.querySelector(".accordion-button");
//         const otherContent = otherItem.querySelector(".accordion-content");
//         if (otherButton !== accordionButton) {
//           otherButton.setAttribute("aria-expanded", false);
//           otherContent.classList.remove("accordion-content--expanded");
//           otherContent.setAttribute("aria-hidden", true);
//         }
//       });
//       accordionButton.setAttribute("aria-expanded", !isExpanded);
//       accordionContent.classList.toggle("accordion-content--expanded");

//       if (isExpanded) {
//         accordionContent.removeAttribute("aria-hidden");
//       } else {
//         accordionContent.setAttribute("aria-hidden", true);
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion-header");
    const accordionButton = item.querySelector(".accordion-button");
    const accordionContent = item.querySelector(".accordion-content");
    const icon = accordionButton.querySelector(".fas");

    accordionHeader.addEventListener("click", () => {
      const isExpanded =
        accordionButton.getAttribute("aria-expanded") === "true";

      accordionItems.forEach((otherItem) => {
        const otherButton = otherItem.querySelector(".accordion-button");
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherIcon = otherButton.querySelector(".fas");

        if (otherButton !== accordionButton) {
          otherButton.setAttribute("aria-expanded", false);
          otherContent.classList.remove("accordion-content--expanded");
          otherContent.setAttribute("aria-hidden", true);
          otherIcon.classList.remove("fa-angle-up");
          otherIcon.classList.add("fa-angle-down");
        }
      });

      accordionButton.setAttribute("aria-expanded", !isExpanded);
      accordionContent.classList.toggle("accordion-content--expanded");

      if (isExpanded) {
        accordionContent.removeAttribute("aria-hidden");
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      } else {
        accordionContent.setAttribute("aria-hidden", true);
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
      }
    });
  });
});

//   const arrowDown = document.querySelector(".fas fa-angle-down");
//   const arrowUp = document.querySelector(".fas fa-angle-down");
//   console.log(arrowDown);

//   document
//   .getElementsByClassName("fas fa-angle-down")
//   .removeClass("fas fa-angle-down");
//   document
//   .getElementsByClassName("fas fa-angle-down")
//   .addClass("fas fa-angle-up");

// function changeClass() {
//   var arrowDown = document.querySelector(".fas fa-angle-up");
//   .classList.replace("fas fa-angle-down", "fas fa-angle-up");
// }
// document
//   .getElementsByClassName(".fas fa-angle-down")
//   .classList.remove(".fas fa-angle-down");
// document
//   .getElementsByClassName(".fas fa-angle-down")
//   .classList.add(".fas fa-angle-down");
// document.getElementsByClassName("fas fa-angle-down").className

// let accordions = document.querySelectorAll(
//   ".accordion-wrapper .accordion-item"
// );

// accordions.forEach((acco) => {
//   acco.onclick = () => {
//     accordions.forEach((subcontent) => {
//       subcontent.classList.remove("active");
//     });
//     acco.classList.add("active");
//   };
// });
