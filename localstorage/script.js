// simpan ke local storage
localStorage.setItem("npm",128)
//tampilan di console
// baca data local storage
console.log(localStorage.getItem
("npm"))

// tampikan di paragraf id=npm


document.getElementById("npm").innerHTML = localStorage.getItem("npm")