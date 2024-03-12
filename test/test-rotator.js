document.addEventListener("DOMContentLoaded", function () {
  const subblocks = document.querySelectorAll(".subblock");
  const length = subblocks.length;
  if(length === 1) return;
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSubblock = 0;
  let isAnimating = false;

  function showSubblock(index) {
    subblocks.forEach((subblock, i) => {
      if (i === index) {
        subblock.classList.add("active");
      } else {
        subblock.classList.remove("active");
      }
    });
  }

  function toTheLeft() {
    nextSubblock = (currentSubblock + 1) % length;
    
    const currentBlock = subblocks[currentSubblock]; // current block, the object
    const nextBlock = subblocks[nextSubblock]; 

    isAnimating = true;
    nextBlock.classList.add("active");
    nextBlock.style.left= "100%";

    nextBlock.classList.add("left");
    currentBlock.classList.add("left");

    setTimeout(() => {
      currentBlock.classList.remove("active");
      nextBlock.classList.remove("left");
      currentBlock.classList.remove("left");
      currentBlock.style.left = "0";
      nextBlock.style.left= "0";
      isAnimating = false;
    }, 1000); // Transition duration

    currentSubblock = nextSubblock;
  }

  function toTheRight() {
    nextSubblock = (currentSubblock - 1 + length) % length;
    
    const currentBlock = subblocks[currentSubblock]; // current block, the object
    const nextBlock = subblocks[nextSubblock]; 

    isAnimating = true;
    nextBlock.classList.add("active");
    nextBlock.style.left= "-100%";

    nextBlock.classList.add("right");
    currentBlock.classList.add("right");

    setTimeout(() => {
      currentBlock.classList.remove("active");
      nextBlock.classList.remove("right");
      currentBlock.classList.remove("right");
      currentBlock.style.left = "0";
      nextBlock.style.left= "0";
      isAnimating = false;
    }, 1000); // Transition duration

    currentSubblock = nextSubblock;
  }

  function rotateSubblocks() {
    console.log("in rotate");
    toTheLeft();
  }

  function handleButtonClicks() {
    prevBtn.addEventListener("click", function () {
      toTheRight();
    });

    nextBtn.addEventListener("click", function () {
      toTheLeft();
    });
  }

  function startRotation() { intervalId = setInterval(rotateSubblocks, 5000); }
  function stopRotation() { clearInterval(intervalId); }
  function handleHover() { const blockContainer = document.querySelector(".block-container"); blockContainer.addEventListener("mouseenter", stopRotation); blockContainer.addEventListener("mouseleave", startRotation); }
  
  showSubblock(currentSubblock);
  handleButtonClicks();
  handleHover();
  rotateSubblocks(); // Show the first subblock immediately
  startRotation(); // Rotate every 5 seconds
});