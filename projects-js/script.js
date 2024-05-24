const projectArray = [
  {
    title: 'DarkMode',
    description: 'A light-on-dark color scheme also called dark mode or night mode is a color scheme that uses light-colored icons and graphical user interface elements on a dark background.',
    project_name: 'dark-mode',
    image: 'img/darkmode.jpg'
  },
  {
    title: 'Stopwatch',
    description: 'A stopwatch is a timepiece designed to measure the amount of time that elapses between its activation and deactivation.',
    project_name: 'stopwatch',
    image: 'img/stopwatch.jpg'
  },
  {
    title: 'Item counter',
    description: 'A simple tool for counting things and keeping track of numbers.',
    project_name: 'item-counter',
    image: 'img/itemCounter.jpg'
  },
  {
    title: 'background color changer',
    description: 'This website can change background color by clicking button.',
    project_name: 'background-color',
    image: 'img/background-changer.jpg'
  },
  {
    title: 'Text Animation',
    description: 'This website shows typing effect using JavaScript.',
    project_name: 'text-animation',
    image: 'img/textAnimation.jpg'
  },
  {
    title: 'Todo List',
    description: 'An action list is a list of action items you will actually do. By performing the action, you “complete” your to-do item.',
    project_name: 'todo-list',
    image: 'img/todoList.jpg'
  },
  {
    title: 'Navbar',
    description: 'A navigation bar is a section of a graphical user interface intended to aid visitors in accessing information',
    project_name: 'navbar',
    image: 'img/navbar.jpg'
  },
  {
    title: 'grid cards',
    description: 'Add a description.',
    project_name: 'grid',
    image: 'img/grid.jpg'
  },
  {
    title: 'Say hi',
    description: 'Add a description.',
    project_name: 'sayhi',
    image: 'img/say hi.jpg'
  },
  {
    title: 'Modal',
    description: 'Add a description.',
    project_name: 'modal',
    image: 'img/no-image.jpg'
  },
  {
    title: 'Color fliper',
    description: 'Add a description.',
    project_name: 'color-fliper',
    image: 'img/no-image.jpg'
  },
  {
    title: 'Counter color',
    description: 'Add a description.',
    project_name: 'counter-color',
    image: 'img/no-image.jpg'
  },
];

const makeHTML = data => {
  return`
  <div class="project_card">

    <div class="description">

      <div class="info">
        <h2>${data.title}</h2>
        <p class="descriptionText">${data.description}</p>
      </div>.

      <a class="viewBtn" href="https://nknaleena101.github.io/projects/${data.project_name}" target="_blank">View Project</a>

    </div>
    <img src="${data.image}" alt="project photo">
  </div>
  `
};

const mainElement = document.querySelector('main');

mainElement.innerHTML = projectArray.map(dataItem => makeHTML(dataItem)).join("");