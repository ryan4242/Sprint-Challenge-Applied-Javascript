/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const CarouselMaker = () => {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const image1 = document.createElement('img');
  const image2 = document.createElement('img');
  const image3 = document.createElement('img');
  const image4 = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  carousel.append(leftButton);
  carousel.append(image1);
  carousel.append(image2);
  carousel.append(image3);
  carousel.append(image4);
  carousel.append(rightButton);
  
  image1.src = './assets/carousel/mountains.jpeg';
  image2.src = './assets/carousel/computer.jpeg';
  image3.src = './assets/carousel/trees.jpeg';
  image4.src = './assets/carousel/turntable.jpeg';

  image1.classList.add('selected');
  let currentImage = 0;

  const imageArray = [image1, image2, image3, image4];

  leftButton.addEventListener('click', () => {
    if(currentImage > 0) {
      currentImage -= 1;

      let selectedImage = imageArray.filter(item => item.className != '');
      selectedImage[0].classList.remove('selected');
    };
    imageArray[currentImage].classList.add('selected');   
  });

  rightButton.addEventListener('click', () => {
    if(currentImage < 3) {
      currentImage += 1;

      let selectedImage = imageArray.filter(item => item.className != '');
      selectedImage[0].classList.remove('selected');
    };

    imageArray[currentImage].classList.add('selected');
  });

  return carousel; 
};

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.append(CarouselMaker());