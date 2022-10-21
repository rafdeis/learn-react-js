//Soal 1

function cetakFunction(cetak = "Halo Nama Saya Rafi"){
    return cetak
}
console.log(cetakFunction())

//Soal 2

function myFunction(angka1,angka2){
    return angka1 + angka2
}
    let angka1 = 20
    let angka2 = 7
    let output = myFunction(angka1, angka2)

    console.log(output)
//Soal 3

function Hello(){

    return "Hello"
    
    }

//Soal 4

let obj = {

    nama : "john",
    
    umur : 22,
    
    bahasa : "indonesia"
    
    }
console.log(obj.bahasa)

//Soal 5

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : "John Doe",
    jenisKelamin : "laki-laki",
    honi : "baca buku",
    tahunLahir : 1992
}
console.log(objDaftarPeserta)

//Soal 6

var buah = [
    { nama: "Nanas", warna: "Kuning",  adaBijinya: "tidak", harga: 9000 },
    { nama: "Jeruk", warna: "Oranye", adaBijinya: "ada", harga: 8000 },
    { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "tidak", harga: 10000 },
    { nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: 5000 }
]
var filterBuah = buah.filter(function(result){
    return result.adaBijinya !== "ada"
})
// console.log(buah)
console.log(filterBuah)

//Soal 7

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 const {name, brand, year} = phone

 console.log(name, brand, year) 

//Soal 8

let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = {...dataBukuTambahan,...buku }
  

  console.log(objOutput) 
  
//Soal 9

let mobil = {

    merk : "bmw",
    
    color: "red",
    
    year : 2002
    
    }
    const functionObject = (param) => {
    return param
    
    }
console.log(functionObject (mobil));