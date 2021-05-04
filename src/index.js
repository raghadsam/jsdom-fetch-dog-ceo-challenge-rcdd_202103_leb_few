/*
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let ul=document.getElementById("dog-breeds");
    let listBreeds=ul.getElementsByTagName("li");
//Challenge1
let imagesDog=document.getElementById('dog-image-container');
fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(function(response){
    return response.json();})
  .then(function(json){
        for(let i=0;i<4;i++)
        {imagesDog.innerHTML+=`<img src="${json.message[i]}">`;}
  });


//Challenge 2
let breeds=document.getElementById("dog-breeds");
fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response){
  return response.json();})
.then(function(json){
console.log(json.message)
  let keys=Object.keys(json.message);

  for (let i = 0; i < keys.length; i++) {
  let breed=document.createElement("li");
  breed.innerHTML+=`${keys[i]}`;
  breeds.appendChild(breed);
}//end of for loop

//Challenge 3 coloring li

for(li of listBreeds){
li.addEventListener("click",(e)=>{
e.target.style.color="red";
})
};



//Challenge 4 dropdown

let dropdown=document.getElementById("breed-dropdown");
let options=dropdown.getElementsByTagName("option");

dropdown.addEventListener("change",(e)=>{
  ul.innerHTML=""
  console.log(dropdown.value);

    for (let i = 0; i < keys.length; i++) {
    let breed=document.createElement("li");

    if(keys[i].charAt(0)===dropdown.value.charAt(0))
    {breed.innerHTML+=`${keys[i]}`;
    breeds.appendChild(breed);}
  }//end of for loop
});
})
});
*/
let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {

      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

function updateBreedList(breeds) {
  let ul = document.querySelector('#dog-breeds');
  removeChildren(ul);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsStartingWith(letter) {
  updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
}
