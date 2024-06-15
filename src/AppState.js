import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{org, img, title, description, techStack, webLink, githubLink}} active Item Info*/
  activeApp: {},

  /** @type {{img, title, description, techStack, webLink, githubLink}} active Item Info*/
  appList: [
    {
      img: 'src/assets/images/business.jpg',
      title: 'Landing Page',
      description: 'The landing page your are currently looking at',
      techStack: ['Vue.js', 'JavaScript'],
      webLink: 'home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'bootstrap']
    },
    {
      img: 'src/assets/images/business.jpg',
      title: 'Saiyan Clicker',
      description: 'The landing page your are currently looking at',
      techStack: ['Vue.js', 'JavaScript'],
      webLink: 'home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'game']
    },
    {
      img: 'src/assets/images/business.jpg',
      title: 'Keepr',
      description: 'The landing page your are currently looking at',
      techStack: ['Vue.js', 'JavaScript'],
      // webLink: 'home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      tags: ['web', 'homePage', 'Vue.js', 'JavaScript', 'c#', 'mysql']
    },
    {
      img: 'src/assets/images/business.jpg',
      title: 'PuppyLoveSuites',
      description: 'My first website created for a client',
      techStack: ['Vue.js', 'JavaScript'],
      webLink: 'https://puppylovesuites.com',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript']
    }
  ],

  /** @type {{title, description}} active Item Info*/
  skills: [
    {
      title: 'Web Design',
      description: 'Designs for the world wide web!'
    },
    {
      title: 'JavaScript',
      description: 'Using JS for front end and back end development'
    },
    {
      title: 'Vue.js',
      description: 'Created several applications using the Vue framework'
    }
  ],
  /** @type {{title, description, duration}} active Item Info*/
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