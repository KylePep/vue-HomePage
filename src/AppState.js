import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{org, img, title, description, techStack, webLink, githubLink}} active Item Info*/
  activeApp: {},

  /** @type {{img, title, description, techStack, webLink, githubLink}} active Item Info*/
  appList: [{ img: 'src/assets/images/business.jpg', title: 'Landing Page', description: 'The landing page your are currently looking at', techStack: ['Vue.js', 'JavaScript'], webLink: 'home.kylepep.dev', githubLink: 'https://github.com/KylePep/vue-HomePage' }],

  /** @type {{title, description}} active Item Info*/
  skills: [
    { title: 'Web Design', description: 'Designs for the world wide web!' }, { title: 'JavaScript', description: 'Using JS for front end and back end development' }, { title: 'Vue.js', description: 'Created several applications using the Vue framework' }
  ]
})