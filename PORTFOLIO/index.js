let image= document.querySelector('img')
let i=1
let n=6
let changeImage=()=>{
    // image.src=`../ImageGallery/images/p${i}.jpg`;
    image.src=`../PORTFOLIO/IMAGES/$p{i}.JPG`
    ++i;
    if(i>n){
        i=1
    }
}