//Array Of Object

var mobil = [
    {merk: "BMW", warna: "merah", tipe: "sedan"}, 
    {merk: "toyota", warna: "hitam", tipe: "box"}, 
    {merk: "audi", warna: "biru", tipe: "sedan"}
    ]
    console.log(mobil)
    console.log()



// Array Iteration

var mobil = [{merk: "BMW", warna: "merah", tipe: "sedan"}, {merk: "toyota", warna: "hitam", tipe: "box"}, {merk: "audi", warna: "biru", tipe: "sedan"}]

// Method forEach
mobil.forEach(function(result){
    console.log(result.merk)
}) 

//Method map
var output = mobil.map(function(result){
    return result.warna
})
console.log()
console.log(output)

//Method filter
var filterMobil = mobil.filter(function(result){
    return result.merk === "BMW"  //jika ingin menampilkan tanpa BMW (!==)
})
console.log()
console.log(filterMobil)