const myFunctionPromise = (param) => {
    return new Promise(( resolve, reject) =>  {
        if (param === 2){
            resolve (" Hallo, ini kondisi True (Berhasil)")
        } else {
            reject("Hallo, ini kondisi False (Gagal)")

        }
    })
}

// myFunctionPromise(5)
// .then ( (result) => {
//     console.log(result)
// })
// .catch ( (error) => {
//     console.log(error)
// })

let execute = async ()  => {

    try {
    let result = await myFunctionPromise(5)
    console.log(result)
    } catch (error) {
        console.log(" Ini Catch = ", error)
    }
} 
execute()