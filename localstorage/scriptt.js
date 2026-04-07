let npm = document.getElementById("npm")
let nama = document.getElementById("nama")
let image = document.getElementById("image")

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
        nama: nama.value,
        image: image.value
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

        document.getElementById("list-mhs").innerHTML += 
        `<div class="col-lg-4 col-md-6 mb-3">
            <div class="card p-2">
                <img src="${element.image}" class="card-img-top" img-fluid">
                <div class="card-body">
                    <h4 class="text-primary" > ${element.npm} </h4>
                    <h6 class="text-danger" > ${element.nama} </h6>
                </div>
            </div>
        </div>`
        
    });
}
//  jalankan function tampil
tampil()
    