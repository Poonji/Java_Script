async function poonji ()
{
let delhiWeather=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("27 deg")
    },2000)
})
let bangloreWeather=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("21 deg")
    },10000)
})
//delhiWeather.then(alert)
//bangloreWeather.then(alert)
console.log("fetching delhi weather please wait...")
let delhiW=await delhiWeather
console.log("fetched delhi weather: " + delhiW)
console.log("fetching banglore weather please wait...")
let bangloreW=await bangloreWeather
console.log("fetched banglore weather:"+ bangloreW)
return [delhiW,bangloreW]
}

console.log("welcome to weather control room")
let a= poonji()
a.then((value)=>
{
    console.log(value)
})