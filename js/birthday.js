// var loadFlag = 0;
// document.addEventListener("DOMContentLoaded", function () {
//     // class WorkerInterval {
//     //     worker = null;
//     //     constructor(callback, interval) {
//     //       const blob = new Blob([`setInterval(() => postMessage(0), ${interval});`]);
//     //       const workerScript = URL.createObjectURL(blob);
//     //       this.worker = new Worker(workerScript);
//     //       this.worker.onmessage = callback;
//     //     }
      
//     //     stop() {
//     //       this.worker.terminate();
//     //     }
//     //   }

//     const picHoldersL = document.querySelectorAll(".pic-holder-l");
//     const picHoldersS = document.querySelectorAll(".pic-holder-s");
//     const song = document.querySelectorAll(".song");
//     // const songHolder = document.querySelector("#birthday-song");
//     // console.log(song[0].getBoundingClientRect().right);
//     // console.log(songHolder.getBoundingClientRect().right);
//     const lengthL = picHoldersL.length;
//     const lengthS = picHoldersS.length;
//     const lengthSong = song.length;
//     if(length === 1) return;
//     // const prevBtn = document.querySelector(".prev-btn");
//     // const nextBtn = document.querySelector(".next-btn");
//     let currentSubblockL = 0;
//     let currentSubblockS = 0;
//     let currentSong = 0;

//     let startTime;
//     // let isAnimating = false;

//     var numOfBlockL = 8;
//     var numOfBlockS = 12;
//     var animationLenghthL = 54;
//     var animationLenghthS = 36;
//     var pxLenL = lengthL * 198;
//     var pxLenS = lengthS * 120;
//     var pxLenSong = lengthSong *  2516.6;
//     var offSetL =[];
//     var offSetS =[];
//     var offSetSong =[];

//     function initiateL() {
//         for (let i = 0; i < lengthL; i++) {
//             offSetL.push(-150 + i * 198);
//             picHoldersL[i].style.left = `${offSetL[i]}px`;
//         }
//     }
//     function initiateS() {
//         for (let i = 0; i < lengthS; i++) {
//             offSetS.push(-150 + i * 120);
//             picHoldersS[i].style.left = `${offSetS[i]}px`;
//         }    
//     }
//     function initiateSong() {
//         for (let i = 0; i < lengthSong; i++) {
//             offSetSong.push(i *  2516.6);
//             song[i].style.left = `${offSetSong[i]}px`;
//         }    
//     }

//     function start() {
//         startTime = Date.now();
//         console.log(startTime);
//     }

//     function updateL() {
//         currentTime = Date.now();
//         var diff=(currentTime-startTime) * 0.008;
//         for (let i = 0; i < lengthL; i++) {
//             picHoldersL[i].style.left = `${ ((offSetL[i] + diff) % pxLenL) - 150}px`;
//         }
//     }
//     function updateS() {
//         currentTime = Date.now();
//         var diff=(currentTime-startTime) * 0.015;
//         for (let i = 0; i < lengthS; i++) {
//             picHoldersS[i].style.left = `${ ((offSetS[i] + diff) % pxLenS) - 150}px`;
//         }
//     }
//     function updateSong() {
//         currentTime = Date.now();
//         var diff=(currentTime-startTime) * (0.004);
//         for (let i = 0; i < lengthSong; i++) {
//             song[i].style.left = `${ -((offSetSong[i] + diff) % pxLenSong) +  2516.6}px`;
//         }
//     }

//     function rotateSong() {
//         if (song[currentSong].getBoundingClientRect().right < songHolder.getBoundingClientRect().right) {
//             var next = (currentSong + 1) % lengthSong;
//             song[next].classList.add("active");
//             currentSong  = currentSong + 1;
//         }
//         for (let i = 0; i < lengthSong; i++) {
//             if (song[i].getBoundingClientRect().right < 0) {
//                 song[i].classList.remove("active");
//             }
//         }
//     }

//     function updateTime() {
//         let currentTime = new Date();
//         let currentTimeMillis = currentTime.getTime();
//         // let time = currentTimeMillis / 1000;
//         // let currentUTCTime = currentTime.toUTCString();
     
//         console.log("Current time in milliseconds: " + (currentTimeMillis));
//         // console.log("Current time in UTC: " + currentUTCTime);
//         return currentTimeMillis;
//      }

//     function startRotation() { 
//         intervalId1 = setInterval(updateL, 15); 
//         intervalId2 = setInterval(updateS, 15); 
//         intervalId3 = setInterval(updateSong, 15); 
//     }
//     // updateTime();
//     initiateL();
//     initiateS();
//     initiateSong();
//     start();
//     startRotation();

//     const balloonButton = document.querySelector("#balloon-button");
//     const balloons = document.querySelectorAll(".a-balloon");

    
//     balloonButton.addEventListener("click", function(){
//         console.log("clicked");
//         if (!balloons[0].classList.contains("animate")) {
//             balloons.forEach(function(e){
//                 console.log("in function");
//                 console.log(e);
//                 e.classList.add("animate");
                
//             })
//             setTimeout(function() {
//                 balloons.forEach(function(e){
//                     console.log("in function");
//                     console.log(e);
//                     e.classList.remove("animate");
//                 });
//             }, 2000)  
//         }
            
//     });
// });

const snippetsAddress = "../snippets/";

function showLoadingBirthday() {
    const loadingElement = document.querySelector("#birthdaytoload");
    loadingElement.innerHTML = "<img src='img/Spinner-1.1s-437px.gif' id='loading-gif'>";
}

function finishLoadingBirthday() {
    const loadingElement = document.querySelector("#birthdaytoload");
    loadingElement.innerHTML = "";
}

// convenience function 
// input1: selector like you would use in a css entry
// input2: html in text form
function insertHtml (elementSelector, html) {
    var targetElem = document.querySelector(elementSelector);
    targetElem.innerHTML = html;
}

// function for getting html snippets from snippets
// input1: the file name really, because the const + part is written into the function for convenience
function fetchHTML (filename) {
    url = snippetsAddress + filename;
    return fetch(url).then(function (response) {
        // The API call was successful!
        return response.text();
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

let startTime;
let intervalId1;
let intervalId2;
let intervalId3;
var offSetL =[];
var offSetS =[];
var offSetSong =[];


function initiateL(lengthL, picHoldersL) {
    console.log("in init")
    for (let i = 0; i < lengthL; i++) {
        console.log(lengthL);
        offSetL.push(-150 + i * 198);
        picHoldersL[i].style.left = `${offSetL[i]}px`;
    }
}
function initiateS(lengthS, picHoldersS) {
    for (let i = 0; i < lengthS; i++) {
        offSetS.push(-150 + i * 120);
        picHoldersS[i].style.left = `${offSetS[i]}px`;
    }    
}
function initiateSong(lengthSong, song) {
    for (let i = 0; i < lengthSong; i++) {
        offSetSong.push(i *  2516.6);
        song[i].style.left = `${offSetSong[i]}px`;
    }    
}

function start() {
    startTime = Date.now();
    console.log(startTime);
}

function updateL(lengthL, picHoldersL, pxLenL) {
    currentTime = Date.now();
    var diff=(currentTime-startTime) * 0.008;
    for (let i = 0; i < lengthL; i++) {
        picHoldersL[i].style.left = `${ ((offSetL[i] + diff) % pxLenL) - 150}px`;
    }
}

function updateS(lengthS, picHoldersS, pxLenS) {
    currentTime = Date.now();
    var diff=(currentTime-startTime) * 0.015;
    for (let i = 0; i < lengthS; i++) {
        picHoldersS[i].style.left = `${ ((offSetS[i] + diff) % pxLenS) - 150}px`;
    }
}
function updateSong(lengthSong, song, pxLenSong) {
    currentTime = Date.now();
    var diff=(currentTime-startTime) * (0.004);
    for (let i = 0; i < lengthSong; i++) {
        song[i].style.left = `${ -((offSetSong[i] + diff) % pxLenSong) +  2516.6}px`;
    }
}

function afterColbert() {
    const picHoldersL = document.querySelectorAll(".pic-holder-l");
    const picHoldersS = document.querySelectorAll(".pic-holder-s");
    const song = document.querySelectorAll(".song");
    const lengthL = picHoldersL.length;
    const lengthS = picHoldersS.length;
    const lengthSong = song.length;
    var pxLenL = lengthL * 198;
    var pxLenS = lengthS * 120;
    var pxLenSong = lengthSong *  2516.6;
    console.log(lengthL);
    initiateL(lengthL, picHoldersL);
    initiateS(lengthS, picHoldersS);
    initiateSong(lengthSong, song);
    start();
    intervalId1 = setInterval(function (){updateL(lengthL, picHoldersL, pxLenL)}, 15); 
    intervalId2 = setInterval(function (){updateS(lengthS, picHoldersS, pxLenS)}, 15); 
    intervalId3 = setInterval(function (){updateSong(lengthSong, song, pxLenSong)}, 15); 

    const balloonButton = document.querySelector("#balloon-button");
    const balloons = document.querySelectorAll(".a-balloon");

    balloonButton.addEventListener("click", function(){
        console.log("clicked");
        if (!balloons[0].classList.contains("animate")) {
            balloons.forEach(function(e){
                console.log("in function");
                console.log(e);
                e.classList.add("animate");
                
            })
            setTimeout(function() {
                balloons.forEach(function(e){
                    console.log("in function");
                    console.log(e);
                    e.classList.remove("animate");
                });
            }, 2000)  
        }
            
    });
}




// Get the block to display
const block = document.getElementById('birthday');

var checkForColbert_current = 0;

// Function to check if "COLBERT" is typed
function checkForColbert(event) {
  // Get the key that was pressed
  const keyPressed = event.key.toUpperCase();

  // Check if the key pressed matches the next expected character in "COLBERT"
  var colbertChars = ['C', 'O', 'L', 'B', 'E', 'R', 'T', '1', '9','6','4'];
  var expectedChar = colbertChars[checkForColbert_current];

  if (keyPressed === expectedChar) {
    console.log(keyPressed)
    // Remove the first character from the expected list
    checkForColbert_current += 1;

    // If all characters have been typed, display the block
    if (checkForColbert_current == 11) {
        showLoadingBirthday();
        block.style.display = 'block';
        block.scrollIntoView({behavior: "smooth"});
        fetchHTML('birthday.html').then(function(myHTML) {
            insertHtml('#birthday-container', myHTML);
        }).then(afterColbert);
        
        finishLoadingBirthday();
    }
  } else {
    console.log("WRONG");
    checkForColbert_current = 0;
    // Reset the list if a wrong key is pressed
    colbertChars = ['C', 'O', 'L', 'B', 'E', 'R', 'T', '1', '9','6','4'];
  }
}

// Listen for keydown events on the entire document
document.addEventListener('keydown', checkForColbert);