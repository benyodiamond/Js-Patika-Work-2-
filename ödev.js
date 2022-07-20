// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ

let liDOM = document.getElementsByTagName("li"); // var olan bütün li elementlerini alıp liDOM'e atadık, elimizde kaç adet  li olduğunu öüğreniş olduk.
let butond = document.querySelector("#liveToastBtn") // liveToastBtn id'si ile ekle yazan butona seçtik ve bu butonu butond değişkenine atadık.
let task_dom = document.querySelector("#task") //input'un ID'si olan task'ı seçip task_dom'a atadık.
let list_DOm = document.querySelector("#list") // list id'si ile ul'nin ID'si olan list'i seçtik ve list_DOm'a atadık.


// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < liDOM.length;i++){ 
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); //  butona close class'ını ekledik.
    closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.
    liDOM[i].append(closeButton); // closeButton değişkenini liDOM'in 0, 1, 2... indexlerine ekleyerek aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
    liDOM[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik.
}


// Butonlara dinleyici tanımlanması

butond.addEventListener('click', elemanEkle)  // addEventListener ile "click" dediğimiz için butona tıklandığında  elemanEkle fonksiyonu çalışacak.


//Fonksiyonlar 

function check(){
  this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton(){
  this.parentElement.remove();  //  maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
}


//ELEMAN EKLEMEK İÇİN GEREKENLER
function elemanEkle() {
 
    if (task_dom.value == "")  {  // input değeri boş girildiğinde ve girilmediğinde 
    $(".error").toast("show"); //error clasını kullanarak 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') //yeni bir li elementi yaratacagımızı ilan edip yaratacagımız li elementini liDOM değişkenine atayacağımızı söyledik.
    list_DOm.appendChild(liDOM); // Yaratacağımız liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
    liDOM.innerHTML = task.value; // Burda ise inputID.değer diyerek inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
    task_dom.value = "";
  
   
   
   //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
         liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        list_DOm.append(liDOM);
        inputElement.value = ("");

        
}
}    