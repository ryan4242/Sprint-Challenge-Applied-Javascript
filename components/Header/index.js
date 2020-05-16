// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.innerHTML = 'MARCH 28, 2019';
    title.innerHTML = 'Lambda Times';
    temp.innerHTML = '98\xB0';

    header.append(date);
    header.append(title);
    header.append(temp);

    return header;
};

const container = document.querySelector('.header-container');

container.append(Header());
