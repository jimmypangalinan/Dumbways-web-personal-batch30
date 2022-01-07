let name1 = 'Banu'
let name2 = 'alifia'
let name3 =  'Jimmy'


console.log(name1);
console.log(name2);
console.log(name3);

// array
let name = ['JImmi', 'Pangalinan', 'Crystal']
// u/ menampilkan semua data dalam array
console.log(name);

// menampilkan satu data dalam array conothnya pangalinan
// data pertama dimulai dari angka 0
console.log(name[2]);

// object
let dataSiswa = {
    name : 'Jimmi Crystal',
    email : 'jimmycrystal@gmail.com',
    phone : 0812321233
}

// menampilkan object menggunakan konsol
console.log(dataSiswa);

// menampilkan object menggunakan konsol dengan properti email
console.log(dataSiswa.email);

// ingin menampung nama merk mobil
let merkMobil = ['Avansa','Agia','Jazz']

//ingin menampilkan data  dari merek mobil diatas kita bisa menggunakan object
let avansa = {
    name : 'Avansa',
    color : 'Red',
    transmisi : 'Manual',
    tahun : 2022
}

let colorAvansa = ['Red','Blue','Yellow']

// menyimpan object dalam array tidak bisa

let dataStudent1 = {
    name : 'Jimmy Crystal',
    email : 'jpcrystal@gmail.com',
    phone : 08123456789
}

let dataStudent2 = {
    name : 'Timoty Rudolft',
    email : 'trudolft@gmail.com',
    phone : 08123456788
}

// menyimpan array dalam object
// let allDataStudent = [
//     dataStudent1,
//     dataStudent2
// ]

// console.log(allDataStudent);

// menampilkan variabel dataStudent1 email
console.log(); 


let allDataStudent = [
    dataStudent1,
    dataStudent2,{
        name : 'Rezky Pratoyo',
        email : 'rezky@gmial.com',
        phone : 08231524542
    },{
        name : 'Rezky Prasetyo',
        email : 'rezky@gmial.com',
        phone : 0823152892
    }
]

console.log(allDataStudent);

// Array
let merkHp = ['Samsung', 'Nokia', 'Mito', 'Sony']

// object
let dataSamsung = {
    name : 'Samsung',
    color : 'Black',
    year : 2021
}

// menyimpan semua data beberapa hp atau disebut Array of Object dimana didalam array terdapat beberapa object
let allDataHp = [
    {
        name : 'Samsung',
        color : 'Black',
        year : 2021
    },{
        name : 'Nokia',
        color : 'White',
        year : 2022
    },{
        name : 'Mito',
        color : 'Red',
        year : 2019
    }
]

// menampilkan object data hp nokia dari Array
console.log(allDataHp[1]);


let blogs = []

function addBlog(event) {
    // untuk membuat halaman tidak refresh
    event.preventDefault()

    // console.log('Selamat Datang');
    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    // mengubah fakepath ke url
    image = URL.createObjectURL(image[0])

    console.log(image);

    // membuat object untuk data diatas
    let blog = {
        title : title,
        content : content,
        image : image
    }

    // menyimpan data object blog ke Array blogs
    blogs.push(blog)

    console.log(blog);
    console.log(blogs);
}





---------------------
let blogs = []

function addBlog(event) {
    // untuk membuat halaman tidak refresh
    event.preventDefault()

    // console.log('Selamat Datang');
    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    // mengubah fakepath ke url
    image = URL.createObjectURL(image[0])

    // console.log(image);

    // membuat object untuk data diatas
    let blog = {
        title : title,
        content : content,
        image : image
    }

    // menyimpan data object blog ke Array blogs
    blogs.push(blog)

    // for (let i = 0; i < blogs.length; i++)
    renderBlog()
    // console.log(blog);
    // console.log(blogs);
    // manipulationHTML()
    
}

// looping
// for (let angka = 0; angka < 10; angka++ ){
//     console.log(angka);
// }

//// looping untuk mengulang 10 kali ditambah 10 maksimal 100
// for (let angka = 0; angka < 100; angka+=10 ){
//     console.log("Pengulangan ke" + angka);
// }

// for (let i = 0; i < blogs.length; i++){
//     console.log(blogs[i]);
// }



// manipulasi HTML /DOM

function renderBlog() {
    let contentContainer = document.getElementById('contents')
    
    // contentContainer.innerHTML= ``

    for (let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
          </div>
          <p>
          ${blogs[i].content}
          </p>
        </div>
      </div>`
    // console.log(blogs[i]);
    }
    // // console.log(contentContainer);

    // contentContainer.innerHTML = ''
}