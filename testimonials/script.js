const testimonails= [
  {
    author: {
      name: 'Gabriel Moore',
      Image: 'author-01.jpg',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi repellat asperiores nihil tenetur, optio aut aperiam veritatis officia ipsum. Soluta repellendus ipsam quidem accusamus? Dolor quisquam repellat sit perspiciatis.',
    date: '23rd of may',
  }
];

const containerElement = document.getElementById('testimonails-container');

const makeTestimonialCard = testimonail => {
  return `<div class="testimonail-card">
  <img src="${testimonails.author.Image}">
  <h2>${testimonails.author.name}</h2>
  <p>${testimonails.text}</p>
  <date>Written on ${testimonails.date}</date>
  </div>`
}