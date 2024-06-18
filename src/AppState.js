import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{img, title, description, frontEnd, backEnd, webLink, dataBase, languages, cssFrameworks, githubLink, tags, appColor}} active Item Info*/
  activeApp: {
    img: ['src/assets/images/frontEnd.png', 'src/assets/images/frontEnd.png'],
    title: 'Landing Page',
    description: 'The landing page your are currently looking at',
    frontEnd: ['Vue.js'],
    backEnd: [],
    dataBase: '',
    languages: ['JavaScript'],
    cssFrameworks: ['Bootstrap'],
    webLink: 'https://home.kylepep.dev',
    githubLink: 'https://github.com/KylePep/vue-HomePage',
    appColor: '#ff8c00',
    tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'Bootstrap']
  },

  activeFilter: 'web',

  /** @type {[{img, title, description, frontEnd, backEnd, webLink, dataBase, languages, cssFrameworks, githubLink, tags, appColor}]} active Item Info*/
  appList: [
    {
      img: ['src/assets/images/frontEnd.png', 'src/assets/images/frontEnd.png'],
      title: 'Landing Page',
      description: 'The landing page your are currently looking at',
      frontEnd: ['Vue.js'],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#ff8c00',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'Bootstrap']
    },
    {
      img: ['src/assets/images/business.jpg', 'src/assets/images/frontEnd.png'],
      title: 'Old Landing Page',
      description: 'My old landing page, I learned a lot making it.',
      frontEnd: ['Vue.js'],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#420fe2',
      tags: ['web', 'Vue.js', 'JavaScript', 'Bootstrap']
    },
    {
      img: ['src/assets/images/business.jpg', 'src/assets/images/frontEnd.png'],
      title: 'Saiyan Clicker',
      description: 'The landing page your are currently looking at',
      frontEnd: [],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#3a0740',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'Bootstrap']
    },
    {
      img: ['src/assets/images/business.jpg', 'src/assets/images/frontEnd.png'],
      title: 'Keepr',
      description: 'The landing page your are currently looking at',
      frontEnd: ['Vue.js'],
      backEnd: ['Express.js', 'Node.js'],
      dataBase: 'MySQl',
      languages: ['JavaScript', 'C#'],
      cssFrameworks: ['Bootstrap'],
      webLink: '',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#62b739',
      tags: ['web', 'homePage', 'Vue.js', 'Express.js', 'Node.js', 'JavaScript', 'C#', 'MySQL', 'Bootstrap']
    },
    {
      img: ['src/assets/images/business.jpg', 'src/assets/images/frontEnd.png'],
      title: 'CodeFitness',
      description: 'The landing page your are currently looking at',
      frontEnd: ['Vue.js'],
      backEnd: ['Express.js'],
      dataBase: 'MongoDB',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://github.com/KylePep/vue-HomePage',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#febe3e',
      tags: ['web', 'Vue.js', 'Express.js', 'JavaScript', 'MongoDB', 'Bootstrap']
    },
    {
      img: ['src/assets/images/business.jpg', 'src/assets/images/frontEnd.png'],
      title: 'PuppyLoveSuites',
      description: 'My first website created for a client',
      frontEnd: ['Vue.js'],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://puppylovesuites.com',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#e24400',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'Bootstrap']
    },
    {
      img: ['src/assets/images/business.jpg', 'src/assets/images/frontEnd.png'],
      title: 'Postit',
      description: 'My first website created for a client',
      frontEnd: ['React'],
      backEnd: ['NextAuth.js', 'Next.js'],
      dataBase: 'PostgreSQL',
      languages: ['JavaScript'],
      cssFrameworks: ['Tailwind', 'PostCSS'],
      webLink: 'https://postit-4enw.vercel.app/',
      githubLink: 'https://github.com/KylePep/postit',
      appColor: '#e24400',
      tags: ['web', 'homePage', 'favorite', 'React', 'JavaScript', 'Tailwind', 'PostCSS', 'NextAuth.js', 'PostgreSQL']
    }
  ],

  /** @type {[{title, tag, description}]} active Item Info*/
  skills: [
    {
      title: 'Web Design',
      tag: 'web',
      description: 'Designs for the world wide web!'
    },
    {
      title: 'JavaScript',
      tag: 'JavaScript',
      description: 'Using JS for front end and back end development'
    },
    {
      title: 'Vue.js',
      tag: 'Vue.js',
      description: 'Created several applications using the Vue framework'
    }
  ],
  /** @type {[{title, description, duration}]} active Item Info*/
  resumeData: [
    {
      title: 'CodeWorks Volunteer Developer',
      description: 'Worked alongside CodeWorks alumni to develop a post grad platform for furthering their education.',
      duration: '2023-2024'
    },
    {
      title: 'CodeWorks Volunteer Developer',
      description: 'Worked alongside CodeWorks alumni to develop a post grad platform for furthering their education.',
      duration: '2023-2024'
    },
    {
      title: 'CodeWorks Volunteer Developer',
      description: 'Worked alongside CodeWorks alumni to develop a post grad platform for furthering their education.',
      duration: '2023-2024'
    }
  ],
  /** @type {{title, description, duration}} active Item Info*/
  testimonyData: [
    {
      name: 'Jane Doe',
      testimony: 'Did a really really... really good job, like, let me tell you. A Goood job.',
      title: 'Business Person',
      img: 'src/assets/images/backEnd.png'
    },
    {
      name: 'Jorgis Mcborngus',
      testimony: 'Grumble grumlble mc-fumblerington goo. HRmmmmmmMMmm. Yes quite.',
      title: 'Hill Man',
      img: 'src/assets/images/frontEnd.png'
    },
    {
      name: 'Mr. Misterson',
      testimony: 'Kyle Peppersack is good at the thing that he does and he does it well.',
      title: 'Mister',
      img: 'src/assets/images/business.jpg'
    }
  ]
})