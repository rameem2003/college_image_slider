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
];


// counter
let count = 0;

nextBtn.addEventListener("click", () => {
    count = count + 1;


    if(count >= imegeArray.length){
        count = 0;
        imgWindow.src = `./imgs/${imegeArray[count]}`;
    }
    else{
        imgWindow.src = `./imgs/${imegeArray[count]}`;
    }
    
});


prevBtn.addEventListener("click", () => {
    count = count - 1;
    
    
    if(count <= 0){
        count = imegeArray.length - 1;
        imgWindow.src = `./imgs/${imegeArray[count]}`;
        console.log(count);
    }
    else{
        imgWindow.src = `./imgs/${imegeArray[count]}`;
    }


    // imgWindow.src = `./imgs/${imegeArray[count]}`;
})