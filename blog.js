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
        image : image,
        author :"Jimmi Pangalinan",
        postAt : new Date()
    }

    // menyimpan data object blog ke Array blogs
    blogs.push(blog)

    renderBlog()
    
}

// manipulasi HTML /DOM

function renderBlog() {
    let contentContainer = document.getElementById('contents')
    
    contentContainer.innerHTML= ``

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
            ${getFullTime(new Date())} | ${blogs[i].author}
          </div>
          <p>
          ${blogs[i].content}
          </p>
          <div style="text-align: right;">
              <span style="font-size: 13px;color: gray;">
              tes
              </span>
            </div>

        </div>
      </div>`
    // console.log(blogs[i]);
    }
    // // console.log(contentContainer);

    // contentContainer.innerHTML = ''
}

// let time = new Date()

// console.log(time);
// console.log(time.getDate);
// console.log(time.getMonth);
// console.log(time.getUTCFullYear);

// console.log(time.getUTCMinutes);



let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust'
, 'September', 'October', 'November', 'Desember']

function getFullTime(time) {
  console.log(time);

  let date = time.getDate()
  console.log(date);

  let monthIndex = time.getMonth()
  console.log(month[monthIndex]);

  let year = time.getFullYear();
  console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours} ${minutes} WITA `

  return fullTime

}

getFullTime (new Date());

function getDistanceTime (time){
console.log(time);

let timePost = time
let timeNow = new Date()

let distance = timeNow - timePost

let milisecond = 999 // seribu dalam 1 detik
let secondHours = 3540 // 1 jam sama dengan 3600 detik
let hoursInDay = 23 //23 jam dalam 1 hari

let minutes = 60
let seconds = 60

let distanceDay = Math.floor(distance / (milisecond * secondHours * hoursInDay)) //untuk mendapatkan jam hari
let distanceHours = Math.floor (distance / (milisecond * minutes * seconds)) // untuk mendapatkan jam
let distanceMinutes = Math.floor (distance / (milisecond * seconds));
let distanceSeconds = Math.floor (distance / milisecond);


// distanceDay =  Math.floor(distanceDay)

// console.log(distanceDay+' Day Ago');

  if (distanceDay >= 1) {
    return `${distanceDay} day ago`;
    }else if (distanceHours >=1){
    return`${distanceHours} Hours Ago`;
  }else if (distanceMinutes >= 1 ){
    return`${distanceMinutes} Minutes Ago`;
  }else{
    return`${distanceSeconds} Seconds Ago`;
      

    }
    
  }


getDistanceTime()
