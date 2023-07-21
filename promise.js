let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alert("I am a promise and i am resolved")
        resolve(true)
    },10000)
    })

    let p2 = new Promise((resolve,reject)=>{
        console.log("promise is pending")
        setTimeout(()=>{
            alert("I am a promise and i am rejected")
            reject(new Error("i am an error"))
        },5000)
        })
    
        console.log(p1,p2)