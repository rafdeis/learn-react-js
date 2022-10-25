const myCountPromise = (param) => {
    return new Promise(( resolve, reject) =>  {
        setTimeout(() => {
        if (param = 2){
            resolve (param*2)
        } else {
            reject("Maaf tidak ada nilai dalam parameter")
        } 
        }, 3000)
    })
}

myCountPromise(2)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})