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

console.log('hello world!');
//objects in js
let rectangle={
    length:1,
    breath:2
};
    // factory function
    function createRectangle(length, breadth)
    {
        return rectangle={
            length:length,
            breadth:breadth, 
            draw(){
                console.log('drawing rectangle')
            }
        };
    }
let rectangle1=createRectangle(3,4);
let rectangle3=createRectangle(4,4);
let rectangle2=createRectangle(2,4);

