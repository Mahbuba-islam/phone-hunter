const allPhone = () => 
   {
    const searchBox = document.getElementById('search-input')
    const searchText = searchBox.value
    searchBox.value = ''
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayPhones (data.data))
    
}
   
const displayPhones = data => {
const searchResult = document.getElementById('search-result')
for(const phone of data){
  const div = document.createElement('div')
  div.innerHTML = `<div class="card" style="width: 18rem; ">
    <img src="${phone.image}" class="card-img-top w-50" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button onclick="phoneDetails()" class="text-center btn-primary ">Details</button>
    </div>
  </div>`
   
  searchResult.appendChild(div)
}
}

const phoneDetails = () => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
}
