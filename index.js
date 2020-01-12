
const form = document.getElementById('form');

db.collection('Messages').get().then((snapshot) =>{
  snapshot.docs.forEach((doc) =>{
    console.log(doc)
  })
  
})

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  db.collection('Messages').add({
    name : form.name.value,
    message: form.message.value
  })
}) 
