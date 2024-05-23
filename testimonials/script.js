const testimonails= [
  {
    author: {
      name: 'Gabriel Moore',
      Image: 'img/author-01.jpg',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi repellat asperiores nihil tenetur, optio aut aperiam veritatis officia ipsum. Soluta repellendus ipsam quidem accusamus? Dolor quisquam repellat sit perspiciatis.',
    date: '23rd of May',
  },
  {
    author: {
      name: 'Toney Fergason',
      Image: 'img/author-02.jpg',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi repellat asperiores nihil tenetur, optio aut aperiam veritatis officia ipsum. Soluta repellendus ipsam quidem accusamus? Dolor quisquam repellat sit perspiciatis.',
    date: '25rd of May',
  },
  {
    author: {
      name: 'Jackie Oliver',
      Image: 'img/author-03.jpg',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi repellat asperiores nihil tenetur, optio aut aperiam veritatis officia ipsum. Soluta repellendus ipsam quidem accusamus? Dolor quisquam repellat sit perspiciatis.',
    date: '2nd of June',
  },
  {
    author: {
      name: 'Pauline Carter',
      Image: 'img/author-04.jpg',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi repellat asperiores nihil tenetur, optio aut aperiam veritatis officia ipsum. Soluta repellendus ipsam quidem accusamus? Dolor quisquam repellat sit perspiciatis.',
    date: '9th of June',
  }
];

const containerElement = document.getElementById('testimonails-container');

const makeTestimonialCard = testimonail => {
  return `<div class="testimonail-card">
  <img src="${testimonail.author.Image}">
  <h2>${testimonail.author.name}</h2>
  <p>${testimonail.text}</p>
  <date>Written on ${testimonail.date}</date>
  </div>`
};

let currentTestimonial = 0;

const naxtTestimonial = () => {
  if(currentTestimonial < testimonails.length - 1){
    currentTestimonial += 1;
    updatePage();
  }
};

const prevTestimonial = () => {
  if(currentTestimonial > 0){
    currentTestimonial -= 1;
    updatePage();
  }
}

const updatePage = () => {
  let markup = makeTestimonialCard(testimonails[currentTestimonial]);

  if(testimonails.length > 1){
    markup += `<nav>
      <button onclick="prevTestimonial()">Previous</button>
      <button onclick="naxtTestimonial()">Next</button>
    </nav>`
  }

  containerElement.innerHTML = markup;
};

updatePage();
