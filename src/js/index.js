

import { getOneCat, getDataCats } from "./cat-api";


const selectRef = document.querySelector('.breed-select');

const bodyRef = document.querySelector('body');

const divWraperRef = document.querySelector('.wrapper')

// console.log(bodyRef);

// console.log(selectRef);



export async function creationMarkupSelect() {


  const dataAllocate = await getDataCats();

  // console.log(dataAllocate)

  const markup = dataAllocate.map((data) => {
    const nameCats = data.name;
    return `<option>${nameCats}</option>`
  }).join('');

//  console.log(markup);

  selectRef.insertAdjacentHTML("beforeend", markup);

  
};




selectRef.addEventListener("change",getValueSelect);

export async function getValueSelect(event) {
  event.preventDefault();

  const nameCat = this.value;

  const allCats = await getDataCats();

  const cat = allCats.filter(item => {
    return item.name === nameCat;
  })

  const id = cat[0].id;


  const oneCat = await getOneCat(id);
  creationMarkupPage(oneCat);

  // console.log(oneCat[0].breeds);
  // console.log(oneCat[0]);


};



export async function  creationMarkupPage(dataCat) {

 console.log(dataCat);
 const markup = dataCat.map((cat) => {
    
    const objectCat = cat.breeds[0];
    
    console.log(objectCat.name);   

    return `<div><img src="${cat.url}" alt="${objectCat.alt_names
    }"></div>
    <h2>${objectCat.name}</h2>
    <p>${objectCat.description
    }</p>
    <p><samp>Temperament</samp>${objectCat.temperament}</p>`
   
 }).join('');

 console.log(markup);

 divWraperRef.innerHTML = markup;
  
};


creationMarkupSelect();
creationMarkupPage();

