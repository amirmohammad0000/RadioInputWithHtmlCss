"use strict";

let SectionInnerRadioInput = document.querySelector(
  ".section_inner_radio_input"
);
let SectionRadioInput = document.querySelector(".section_radio_input");
let IconSend = document.querySelector(".icon_send");
let IconCheck = document.querySelector(".icon_check_section_inner_radio_input");
let SetTimeRadioInput;
let StatusRadioInput = true;

SectionInnerRadioInput.addEventListener("click", () => {
  if (StatusRadioInput) {
    IconSend.style.animation = "RunIconSend 2.5s";
    SetTimeRadioInput = setTimeout(() => {
      SectionRadioInput.style.color = "skyblue";
      SectionInnerRadioInput.style.border = "2px solid skyblue";
      SectionInnerRadioInput.style.color = "skyblue";

      IconCheck.style.opacity = "1";
      IconCheck.style.top = "0";
      IconCheck.style.fontSize = "25px";
    }, 2600);

    StatusRadioInput = false;
  } else {
    IconSend.style.animation = "";

    clearTimeout(SetTimeRadioInput);

    SectionRadioInput.style.color = "#796b59";
    SectionInnerRadioInput.style.border = "2px solid #796b59";
    SectionInnerRadioInput.style.color = "#999";

    IconCheck.style.opacity = "";
    IconCheck.style.top = "";
    IconCheck.style.fontSize = "";

    StatusRadioInput = true;
  }
});
