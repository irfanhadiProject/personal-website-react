const weatherImages = import.meta.glob(
  '../assets/images/weather-dashboard/*.{png,jpg}',
  { eager: true }
);
const triviaImages = import.meta.glob(
  '../assets/images/trivia-quiz/*.{png,jpg}',
  { eager: true }
);
const booksImages = import.meta.glob(
  '../assets/images/books-review/*.{png,jpg}',
  { eager: true }
);

const toMap = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([path, module]) => {
      const fileName = path
        .split('/')
        .pop()
        .replace(/\.[^/.]+$/, '');
      return [fileName, module.default];
    })
  );

const projects = {
  'weather-dashboard': {
    title: 'Weather Dashboard',
    year: '2025',
    stack: ['React', 'Redux Toolkit', 'Tailwind', 'OpenWeather API', 'Netlify'],
    description:
      'A responsive weather dashboard built with React, Redux Toolkit, and Tailwind CSS. It integrates the OpenWeather API to provide real-time weather details and 5-day forecasts based on city search. The project emphasizes clean UI, state management with async data fetching, and deployment on Netlify.',
    links: [
      {
        href: 'https://bright-cloud.netlify.app/',
        label: 'Live Demo',
      },
      {
        href: 'https://github.com/irfanhadiProject/weather-dashboard',
        label: 'GitHub Repo',
      },
    ],
    images: {
      thumbnail: toMap(weatherImages)['thumbnail'],
      screenshots: [],
      code: [],
      design: [],
    },
  },
  'trivia-quiz': {
    title: 'Trivia Quiz Game',
    year: '2024',
    stack: ['React', 'Redux', 'Tailwind'],
    description:
      'A responsive trivia quiz game built with React and Redux, featuring category-based questions from an external API. The app includes score tracking, instant feedback, and a clean UI styled with Tailwind CSS.',
    links: [
      {
        href: 'https://brain-bits.netlify.app/',
        label: 'Live Demo',
      },
      {
        href: 'https://github.com/irfanhadiProject/trivia-quiz',
        label: 'GitHub Repo',
      },
    ],
    images: {
      thumbnail: toMap(triviaImages)['thumbnail'],
      screenshots: [],
      code: [],
      design: [],
    },
  },
  'books-review': {
    title: 'Books Review App',
    year: '2024',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
    description:
      'A full-stack web application for reviewing books, built using Node.js, Express, PostgreSQL, and EJS. The app features a responsive UI, dynamic data rendering, and full CRUD functionality.',

    images: {
      thumbnail: toMap(booksImages)['thumbnail'],
      screenshots: [],
      code: [],
      design: [],
    },

    links: [
      {
        href: 'https://github.com/irfanhadiProject/books-review',
        label: 'GitHub Repo',
      },
    ],
  },
};

export default projects;
