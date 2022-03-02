  // load search name api
const allPhone = () => 
   {
    const searchBox = document.getElementById('search-input')
    const searchText = searchBox.value
    searchBox.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayPhones (data.data))
    
};
 
//  display  all phones
const displayPhones = data => {
const searchResult = document.getElementById('search-result')
searchResult.textContent = ''


data.forEach(phone => {
  console.log(phone)
  const div = document.createElement('div')
  div.classList.add('col')
  div.innerHTML = `<div class="card" style="width: 18rem; ">
    <img src="${phone.image}" class="card-img-top w-50" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <h6 class="card-text">Brand: ${phone.brand}</h6>
      <button onclick="phoneDetails('${phone.slug}')" class="text-center btn-primary ">Details</button>
      <button onclick="displayOthers('${phone.slug}')" class="text-center btn-primary ">Others</button>

    </div>
  </div>`
   
  searchResult.appendChild(div)

})
};


  // load details api
const phoneDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => detailsDisplay(data.data))
};

  
//  display phone details
const detailsDisplay = data => {
 const detailsContainer = document.getElementById('details-container')
 
 detailsContainer.innerHTML = 
 `<div> <img src="${data.image}" alt=""></div>
   <h2>Brand: ${data.brand}</h2>
   <p>Stroage: ${data.mainFeatures.storage} </p>
   <p>Sensors: ${data.mainFeatures.storage.releaseDate}</p>`
   

};







const displayOthers = (data) =>{
  const detailsOther = document.getElementById('details-other')
  detailsOther.innerHTML = 
  `<div><img src="${data.image}" alt=""></div>
  <h2>brand: ${data.brand} </h2>
  <p>Wlan: ${data.others?.WLAN}</p>`
}


