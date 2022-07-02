// capture all buttons
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// imege window
const imgWindow = document.getElementById("slider_window");


// select all imeges in array

const imegeArray = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
    "img-7.jpg",
    "img-8.jpg",
    "img-9.jpg",
    "img-10.jpg",
    "img-11.jpg",
    "img-12.jpg",
    "img-13.jpg",
    "img-14.jpg",
    "img-15.jpg",
    "img-16.jpg",
    "img-17.jpg",
    "img-18.jpg",
    "img-19.jpg",
    "img-20.jpg",
    "img-21.jpg",
    "img-22.jpg",
    "img-23.jpg",
    "img-24.jpg",
    "img-25.jpg",
    "img-26.jpg",
    "img-27.jpg",
    "img-28.jpg",
    "img-29.jpg",
    "img-30.jpg",
    "img-31.jpg",
    "img-32.jpg",
    "img-33.jpg",
    "img-34.jpg",
    "img-35.jpg",
    "img-36.jpg",
    "img-37.jpg",
    "img-38.jpg",
    "img-39.jpg",
    "img-40.jpg",
];



// counter
let count = imegeArray.length;
// console.log(count);

nextBtn.addEventListener("click", () => {
    count = count - 1;


    if(count <= 0){
        count = imegeArray.length;
        imgWindow.src = `./imgs/${imegeArray[count]}`;
    }
    else{
        imgWindow.src = `./imgs/${imegeArray[count]}`;
    }
    
});


prevBtn.addEventListener("click", () => {
    count = count + 1;
    
    
    if(count >= imegeArray.length){
        count = 0;
        imgWindow.src = `./imgs/${imegeArray[count]}`;
    }
    else{
        imgWindow.src = `./imgs/${imegeArray[count]}`;
    }
    
    console.log(count);

    // imgWindow.src = `./imgs/${imegeArray[count]}`;
})


window.onload = () => {
    imgWindow.src = `./imgs/${imegeArray[count - 1]}`;
}