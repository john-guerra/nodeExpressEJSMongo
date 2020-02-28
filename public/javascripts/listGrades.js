const formSearch = document.querySelector("#formSearch");

const populateGrades = grades => {
  const gradesUl = document.querySelector("#grades");

  gradesUl.innerHTML = "";

  grades.forEach(g => {
    const gradeLi = document.createElement("li");

    gradeLi.textContent = `${g.name} : ${g.grade}`;

    gradesUl.appendChild(gradeLi);
  });
};

const onSearch = evt => {
  const query = document.querySelector("#formSearch input").value;

  fetch(`/grades/${query}`)
    .then(res => res.json())
    .then(populateGrades);

  evt.preventDefault();
};

formSearch.addEventListener("submit", onSearch);
