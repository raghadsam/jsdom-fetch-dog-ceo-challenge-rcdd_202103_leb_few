
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
