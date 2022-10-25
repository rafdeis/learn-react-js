function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= "Maaf buku di bawah 40 halaman tidak tersedia"         
          reject(reason);
        }
    });
  }
  let execute1 = async (...books) => {
    try {
        let result = await filterBooksPromise(...books)
        console.log(result)
        } catch (error) {
            console.log(error)
        }
    } 
    let execute2 = async (...books) => {
        try {
            let result = await filterBooksPromise(...books)
            console.log(result)
            } catch (error) {
                console.log(error)
            }
        } 
  let execute3 = async (param)  => {
    try {
    let result = await filterBooksPromise(param)
    console.log(result)
    } catch (error) {
        console.log(error)
    }
} 

execute1(true,40)
execute2(false,250)
execute3()