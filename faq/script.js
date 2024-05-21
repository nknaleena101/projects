const dataArray = [
  {
    title: 'Why is JavaScript cool?',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto animi minus quis rerum, aliquam aspernatur magnam veritatis hic non iure minima molestiae vitae libero distinctio sunt corrupti voluptatum? Quaerat.'
  },
  {
    title: 'What is javaScript?',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto animi minus quis rerum, aliquam aspernatur magnam veritatis hic non iure minima molestiae vitae libero distinctio sunt corrupti voluptatum? Quaerat.'
  },
  {
    title: 'How can I learn JavaScript?',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto animi minus quis rerum, aliquam aspernatur magnam veritatis hic non iure minima molestiae vitae libero distinctio sunt corrupti voluptatum? Quaerat.'
  }
];

const makeHTML = data => {
  return `<details>
    <summary>${data.title}</summary>
    <p>${data.detail}</p>
  </details>`
};

const containerElement = document.getElementById('faq-container');
containerElement.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join("");
