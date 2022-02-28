const allPhone = () => {
    const searchText = document.getElementById('search-box').value;
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res)

}