let npm = document.getElementById("npm")
let nama = document.getElementById("nama")

function simpan() {
    console.log(npm.value)
    console.log(nama.value)

    localStorage.setItem("npm", npm.value)
    localStorage.setItem("nama", nama.value)
    // 
    // 

    // 
    if(localStorage.getItem("mahasiswa")===null) {
        // simpan array kosong
        localStorage.setItem("mahasiswa","[]")

    }
    // panggil local storage(konversi strinng ke objek)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    // simpan balue npm dan nama ke dalam objek data
    data.push( {
        npm: npm.value,
        nama: nama.value
    })
    console.log(data)

    // simnpan data terbaru ke dalam local storage
    // konversi dari object 
    localStorage.setItem("mahasiswa",JSON.stringify(data))

    //panggil tampil
    tampil()
}

function tampil(){
    // panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem
    ("mahasiswa"))

    document.getElementById("list-mhs").innerHTML = ""
    // lakukak perulangan foreach

    hasil.forEach(element => {
        console.log(element)

        document.getElementById("list-mhs").innerHTML += `<li>${element.npm} ${element.nama}</li>`
        
    });
}
//  jalankan function tampil
tampil()
    