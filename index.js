//Events in JS
function clicked(){
    console.log('the button was clicked')
}
window.onload=function(){
   
    console.log('the document was loaded')
}

firstContainer.addEventListner('click',function(){
    console.log("click hua")
})
