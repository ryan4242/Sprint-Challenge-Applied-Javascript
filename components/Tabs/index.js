// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    response.data.topics.forEach(tech => tabsContainer.append(topicMaker(tech)));
})
.catch(err => {
    const data = 'Oh-no we hit a snag! check the console for details.';
    tabsContainer.append(topicMaker(data));
    console.log(err);
});

const tabsContainer = document.querySelector('.topics');

const topicMaker = (data) => {
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.innerHTML = data;

    return tab;
};
