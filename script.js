const btn = document.querySelector('button')
btn.addEventListener('mouseenter',function(){
  document.body.style.backgroundColor = "yellow"
})
btn.addEventListener("mouseleave", function () {
    document.body.style.backgroundColor = "slategray"
});