let background = document.querySelector(".main")

let heart = document.querySelector("span")


background.addEventListener("mousemove", (test) => {
   var xPos = test.offsetX
   var yPos = test.offsetY
   
    var element = document.createElement("span")
    
    
    
    element.style.left = `${xPos}px`
    element.style.top = `${yPos}px`
    
    background.appendChild(element)
    
   var size = Math.random()*80 + 20
   element.style.width = `${size}px`
   
   element.style.height = `${size}px`
   
   
   
   
   
   setTimeout(function() {
      background.removeChild(element)
   }, 500)
   
   
})

background.addEventListener("click", (test2) => {
  
  
  
 var xPos = test2.offsetX
 var yPos = test2.offsetY
   
   
   
})
