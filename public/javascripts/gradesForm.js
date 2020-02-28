const inGrades = document.querySelector("#grade input"),
  outGrades = document.querySelector("#grade output");

const updateGrade = () => (outGrades.textContent = inGrades.value);

inGrades.addEventListener("input", updateGrade);
updateGrade();
