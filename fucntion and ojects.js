function createRectangle(len,bre)
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
let rectangleobj=createRectangle(5,9);