/* let numbers=[1,6,3,2,4,,56]
console.log(numbers);
console.log(numbers.includes(4));
console.log(numbers.includes(10));
console.log(numbers.indexOf(3,1)); */

let courses=[
                {no:1,naam:'Love'},
                {no:2,naam:'Rahul'}
];
console.log(courses);
let x= courses.find(function(x)
{
    return x.naam=='Love';
})
console.log(x);