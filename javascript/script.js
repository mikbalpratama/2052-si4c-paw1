//alert("belajar javascript");
function kirim(){

//ambil value nama
let nama = document.getElementById("nama").value;
console.log('nama: ' + nama);
let saran = document.getElementById('saran').value;

// tampilkan nama dan saran ke ul
document.getElementById("list-pesan").innerHTML += `<tr><td>${nama}</td><td>${saran}</td></tr>`;
}


