const searchProducgtEl = document.getElementById(`searchSelector`);
console.log(searchselectorEl)
fetch(`http://localhost:8081/api/categories`)
  .then((response) => response.json())
  .then((categories) => {
    for (i = 0; i < categories.length; i++) {
      let optionel = document.createElement("option");
      const categoryArray = categories[i];
      optionel.textContent = categoryArray.name;
      searchselectorEl.appendChild(optionel);
    }
  });

//   searchselectorEl.addEventListener(`change`, () => {
//     let selectedValue = 
//   })