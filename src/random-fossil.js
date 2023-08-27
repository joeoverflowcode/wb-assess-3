
import axios from 'axios'

async function showRandomFossil(evt) {

    const response = await axios.get("/random-fossil.json");
    const fossilData = response.data

document.querySelector("#random-fossil-image").innerHTML = `<img src=${fossilData.img}>`



    const fossilName = document.querySelector("#random-fossil-name");
    fossilName.textContent = fossilData.name;

}

document.querySelector('#get-random-fossil').addEventListener('click', showRandomFossil);



// import axios from 'axios'



// async function showRandomFossil(evt) {
//     const response = await axios.get("/random-fossil.json")
//     const fossilData = response.data.message
//     document.querySelector("#random-fossil-image").innerHTML = `<img src=${fossilData}>`;
//   }
  
//   document.querySelector('#get-random-fossil').addEventListener('click', showRandomFossil);