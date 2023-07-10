// factory fucntion

/*function createRectangle(len,bre)
{
    return rectangle={
        length:len,
        breadth:bre,
        draw()
        {
            console.log('drawing rectangle');
        }
    };
}
let rectangleobj=createRectangle(5,9);*/

//this function

/*function Rectangle(len,bre)
{ 
    this.length=len;
    this.breadth=bre;
    this.draw=fucntion()
    {
        console.log('drawing');
    }
}
let rectangleobject=new Rectangle(5,8); */

let rectangle={
    length:2,
    bredth:6
};
for(let key in rectangle)
{
    console.log(key,rectangle[key]);
}