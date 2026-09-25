const openFormBtn = document.getElementById("openFormBtn");
const openTimeBtn = document.getElementById("openTimeBtn");
const formSection = document.getElementById("formSection");
const timeSection = document.getElementById("timeSection");

function showSection(section) {
  formSection.classList.add("hidden");
  timeSection.classList.add("hidden");
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

openFormBtn.addEventListener("click", () => showSection(formSection));
openTimeBtn.addEventListener("click", () => showSection(timeSection));

document.querySelectorAll(".close-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.close).classList.add("hidden");
  });
});

// Prevent selecting a going date earlier than the coming date.
const comingDate = document.getElementById("comingDate");
const goingDate = document.getElementById("goingDate");

if (comingDate && goingDate) {
  comingDate.addEventListener("change", () => {
    goingDate.min = comingDate.value;
    if (goingDate.value && goingDate.value < comingDate.value) {
      goingDate.value = "";
    }
  });
}
