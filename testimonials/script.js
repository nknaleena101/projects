const testimonails= [
  {
    author: {
      name: 'Homelander',
      Image: 'img/homelander.jpg',
    },
    text: 'The Homelander is one of the main antagonists of the comic book series The Boys and the media franchise of the same name, created by Garth Ennis and Darick Robertson.',
    date: 'Antony Starr',
  },
  {
    author: {
      name: 'Billy Butcher',
      Image: 'img/Billy-Butcher.jpg',
    },
    text: 'William J. Butcher, or "Billy the Butcher", is an antihero in the comic book and Amazon Prime series The Boys, created by Garth Ennis and Darick Robertson.',
    date: 'Karl Urban',
  },
  {
    author: {
      name: 'Hughie Campbell',
      Image: 'img/Hughie-Campbell.jpg',
    },
    text: 'Hugh "Wee Hughie" Campbell is the main protagonist of the comic book series The Boys and its spin-offs Herogasm and Highland Laddie, created by Garth Ennis and Darick Robertson and visually designed after Simon Pegg',
    date: 'Jack Quaid',
  },
  {
    author: {
      name: 'Annie January',
      Image: 'img/Starlight.jpg',
    },
    text: 'Rebecca Anne "Annie" January is a fictional superheroine in the comic book series The Boys, created by Garth Ennis and Darick Robertson. As Starlight, she is a member of the Seven, a group of superheroes funded by Vought-American, and the love interest of Hughie Campbell.',
    date: 'Erin Moriarty',
  },
  {
    author: {
      name: "Mother's Milk",
      Image: 'img/Mothers-Milk.jpg',
    },
    text: "Mother's Milk, or simply M.M., is a fictional character and antihero in the comic book series The Boys, Herogasm, and Highland Laddie, created by Garth Ennis and Darick Robertson.",
    date: 'Laz Alonso',
  },
  {
    author: {
      name: 'Kimiko Miyashiro',
      Image: 'img/Kimiko.jpg',
    },
    text: "Kimiko Miyashiro, or simply The Female, is one of the three tritagonists (alongside Frenchie and Mother's Milk) of the Amazon series The Boys, serving as a major character in both Seasons 1 and 3, and the tritagonist of Season 2. She is a member of the vigilante group known as The Boys.",
    date: 'Karen Fukuhara',
  }
];

const containerElement = document.getElementById('testimonails-container');

const makeTestimonialCard = testimonail => {
  return `<div class="testimonail-card">
  <img src="${testimonail.author.Image}">
  <h2>${testimonail.author.name}</h2>
  <p>${testimonail.text}</p>
  <date>name:- ${testimonail.date}</date>
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
