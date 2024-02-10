import { getOneCat, getDataCats } from './cat-api';

const selectRef = document.querySelector('.breed-select');

const bodyRef = document.querySelector('body');

const divContainerRef = document.querySelector('.container');

// console.log(bodyRef);

// console.log(selectRef);

export async function creationMarkupSelect() {
  const dataAllocate = await getDataCats();

  // console.log(dataAllocate)

  const markup = dataAllocate
    .map(data => {
      const nameCats = data.name;
      return `<option>${nameCats}</option>`;
    })
    .join('');

  //  console.log(markup);

  selectRef.insertAdjacentHTML('beforeend', markup);
}

selectRef.addEventListener('change', getValueSelect);

export async function getValueSelect(event) {
  event.preventDefault();

  const nameCat = this.value;

  const allCats = await getDataCats();

  const cat = allCats.filter(item => {
    return item.name === nameCat;
  });

  const id = cat[0].id;

  const oneCat = await getOneCat(id);
  creationMarkupPage(oneCat);

  // console.log(oneCat[0].breeds);
  // console.log(oneCat[0]);
}

export async function creationMarkupPage(dataCat) {
  console.log(dataCat);
  const markup = dataCat
    .map(cat => {
      const objectCat = cat.breeds[0];

      console.log(objectCat.name);

      return `
<div class="wrapperImg">
<img class="imgCat" src="${cat.url}" alt="${objectCat.alt_names}">
</div>

<div class="description">
<ul>
<li><h2 class="nameCat">${objectCat.name}</h2></li>
<li><p class="text">${objectCat.description}</p></li>
<li><p class="textSamp">Temperament</p></li>
<li><p class="temper">${objectCat.temperament}</p></li>

</ul>
<div/> 
    
`;
    })
    .join('');

  console.log(markup);

  divContainerRef.innerHTML = markup;
}

creationMarkupSelect();
creationMarkupPage();

{
  /* <h2 class="nameCat">${objectCat.name}</h2>
<p class="text">${objectCat.description}</p>
<p class="textSamp">Temperament</p>
<p class="temper">
${objectCat.temperament}
</p> */
}
