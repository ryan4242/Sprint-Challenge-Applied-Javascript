// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    for (let [key, value] of Object.entries(response.data.articles)) {
        value.forEach(article => {
            cardContainer.append(cardMaker(article));
        });
    };
})
.catch(err => {
    cardContainer.innerHTML = 'Oh-no we hit a snag! Check the console log for details.';
    console.log(err);
});

const cardMaker = (article) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(image);
    author.append(authorName);

    headline.innerHTML = article.headline;
    image.src = article.authorPhoto;
    authorName.innerHTML = `By ${article.authorName}`;

    return card;
};

const cardContainer = document.querySelector('.cards-container');
