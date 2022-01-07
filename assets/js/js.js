// alert(
//     "Selamat Siang"
// )

// document.write(
//         "hello world"
//     )

// console.log(
//     "hello"
// )

// //let tidak bisa di deklarasikan ulnag 
// let firtsName = "Jimmy"
// let lastName = "Pangalinan"

// // // var bisa di deklarasikan ulang
// // var piring = "nasi"
// // var piring = "lauk"

// // //conts tidak bisa dirubah nialinya
// // const = "Helllo"


// console.log(
//     firtsName, lastName
// )

// // let allData = "Nama Depan"+firtsName+"Nama Belakang"+lastName
// // let allData2 = `Nama Depan ${firtsName} Nama Belakang ${lastName}`

// function getData(day){
//     console.log(firtsName)
//     console.log(lastName)

//     console.log(day)
// }

// getData("jumat")

// function sum(bil1, bil2){
//     let result = bil1 + bil2

//     console.log(result);
// }

// sum(20, 30)

function submitData(){
    // alert ("Anda Kurang Beruntung")
    // // console.log("Saya inginn klik");

    let name = document.getElementById('name').value
    let mail = document.getElementById('mail').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value


    // if(document.getElementById('html').checked &&)

    console.log(name);
    console.log(mail);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name == ""){
        return alert("Nama tidak boleh kosong")
    }else if (mail ==""){
        return alert("Email tidak boleh kosong")
    }else if  (phone ==""){
        return alert("Nomor Handphone tidak boleh kosong")
    }else if(subject ==""){
        return alert("Silakan pilih subject")
    }else{

        let emailReceiver = 'jimmipangalinan@gmail.com'

        let koding = document.getElementById('koding');
        let makan = document.getElementById('makan');
    
        // Untuk mengidentifikasi element yang berisi value dari input
        koding = koding.checked;
        makan = makan.checked;
    
        if (koding) {
            koding = (document.getElementById('koding').value)
        } else {
            koding = ""
        }
    
        if (makan) {
            makan = (document.getElementById('makan').value);
        } else {
            makan = ""
        }
    


        // membuat element anchor /link
        let a =document.createElement('a')

        a.href =`mailto: ${emailReceiver}?subject=${subject} &body=Halo nama saya ${name} ${message} hobi saya ${koding } ${makan} Hubungi saya di ${phone}`

        a.click()

        let dataObject = {
            name: name,
            mail: mail,
            phone: phone,
            subject: subject,
            message: message,
            koding: koding,
            makan: makan
        }
        // Jika hanya ingin menampilkan email
        // console.log(dataObject.mail);

        console.log(dataObject);

    }

    // jika semuanya ingin wajib diisi dengan sekali pesan
    // if (name == '' || mail == '' || phone == '' || subject == ""){
    //     alert("Semua Wajib diisi")
    // }


    
}