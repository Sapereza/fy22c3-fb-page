//Get my data or elements: this is to toggle the search section
const searchBox = document.getElementById('search-box');
const resultBox = document.getElementById('results');

searchBox.addEventListener('click', function(){
    results.classList.toggle('hidden');

})

//Toggle the Comments section onclick

function showcomment(){
    var x =
document.getElementById('comment');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
   