import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{img, title, description, frontEnd, backEnd, webLink, dataBase, languages, cssFrameworks, githubLink, tags, appColor}} active Item Info*/
  activeApp: {
    img: ['/images/frontEnd.png', '/images/frontEnd.png'],
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
  tagOption: [
    'web',
    'homePage',
    'favorite',
    'Vue.js',
    'JavaScript',
    'Bootstrap',
    'Express.js',
    'Node.js',
    'C#',
    'MySQL',
    'MongoDB',
    'SQL',
    'NoSQL',
    'React',
    'Tailwind',
    'NextAuth.js',
    'Next.js',
    'PostgreSQL',
    'Three.js',
    'TypeScript',
    'new',
    'funz'
  ],

  /** @type {[{img, title, description, frontEnd, backEnd, webLink, dataBase, languages, cssFrameworks, githubLink, tags, appColor}]} active Item Info*/
  appList: [
    {
      img: ['/images/apps/challenges1.jpg', '/images/apps/challenges2.jpg', '/images/apps/challenges3.jpg', '/images/apps/challenges4.jpg'],
      title: 'CodeWorks Challenges',
      description: "Myself and 3 other talented alumni had the privilege of contributing to a groundbreaking open-source project . We all play a pivotal role as the project founders and curators. We are in the final stages of building the initial code for the app's low mock release.",
      frontEnd: ['Vue.js'],
      backEnd: ['Express.js'],
      dataBase: 'MongoDB',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: '',
      githubLink: 'https://github.com/codeworksacademy/challenges.codeworksacademy.com',
      appColor: '#DE7119',
      tags: ['web', 'favorite', 'homePage', 'Vue.js', 'Express.js', 'JavaScript', 'MongoDB', 'Bootstrap', 'NoSQL']
    },
    {
      img: ['/images/apps/keepr.png', '/images/apps/keepr2.png', '/images/apps/keepr3.png'],
      title: 'Keepr',
      description: 'Keepr, a dynamic web app, empowers users to share cherished memories through "keeps" – images posted and neatly stored in customizable vaults. Seamlessly create, organize, and collaborate on vaults with fellow users, fostering connections and preserving special moments. Keepr revolutionizes photo-sharing, enhancing personal connections and digital memories.',
      frontEnd: ['Vue.js'],
      backEnd: ['Express.js', 'Node.js'],
      dataBase: 'MySQl',
      languages: ['JavaScript', 'C#'],
      cssFrameworks: ['Bootstrap'],
      webLink: '',
      githubLink: 'https://github.com/KylePep/Keepr',
      appColor: '#18B0B0',
      tags: ['web', 'homePage', 'Vue.js', 'Express.js', 'Node.js', 'JavaScript', 'C#', 'MySQL', 'Bootstrap', 'SQL']
    },
    {
      img: ['/images/apps/codeFitness.png', '/images/apps/codeFitness2.png', '/images/apps/codeFitness3.png', '/images/apps/codeFitness4.png'],
      title: 'CodeFitness',
      description: 'CodeFitness transforms fitness into an engaging game. Users access a vast exercise library, crafting personalized routines. These routines are gamified, rewarding completion with points and levels. Join thriving communities, compete for top rankings, and unlock achievements, fostering motivation and camaraderie. CodeFitness reimagines workouts as an exhilarating journey towards better health.',
      frontEnd: ['Vue.js'],
      backEnd: ['Express.js'],
      dataBase: 'MongoDB',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://codefitness-16iw.onrender.com/',
      githubLink: 'https://github.com/EwanStubblefield-Allen/CodeFitness',
      appColor: '#DE7119',
      tags: ['web', 'homePage', 'Vue.js', 'Express.js', 'JavaScript', 'MongoDB', 'Bootstrap', 'NoSQL']
    },
    {
      img: ['/images/apps/puppylovesuites.png', '/images/apps/puppylovesuites2.png', '/images/apps/puppylovesuites3.png',],
      title: 'PuppyLoveSuites',
      description: 'A web page created for a client that has driven traffic to there site. This website was a huge help in learning more about SEO as it was a focal point for the client.',
      frontEnd: ['Vue.js'],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://puppylovesuites.com',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#DEE3E2',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'Bootstrap']
    },
    {
      img: ['/images/apps/allSpice.png', '/images/apps/allSpice2.png', '/images/apps/allSpice3.png'],
      title: 'All-Spice',
      description: 'All-Spice is a culinary haven in the digital world, where users curate their favorite recipes, discover a treasure trove of culinary delights, and express their admiration for dishes with the "favorite" feature. This web app elevates recipe sharing, making it a delectable journey for food enthusiasts to savor and explore.',
      frontEnd: ['Vue.js'],
      backEnd: ['Express.js', 'Node.js'],
      dataBase: 'MySQl',
      languages: ['JavaScript', 'C#'],
      cssFrameworks: ['Bootstrap'],
      webLink: '',
      githubLink: 'https://github.com/KylePep/allSpice.git',
      appColor: '#18B0B0',
      tags: ['web', 'homePage', 'Vue.js', 'Express.js', 'Node.js', 'JavaScript', 'C#', 'MySQL', 'Bootstrap', 'SQL']
    },
    {
      img: ['/images/apps/landing.png', '/images/apps/landing2.png'],
      title: 'Landing Page',
      description: "The landing page you are currently on. I wanted to include this in the list because it helps show the way my landing page evolved on a second pass.",
      frontEnd: ['Vue.js'],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#DE7119',
      tags: ['web', 'Vue.js', 'JavaScript', 'Bootstrap']
    },
    {
      img: ['/images/apps/oldLanding.png', '/images/apps/oldLanding2.png', '/images/apps/oldLanding3.png', '/images/apps/oldLanding4.png',],
      title: 'Old Landing Page',
      description: "My old landing page. I made a new one because I wanted to take what I've learned over the months and develope something more maintainable and scalable. Three.js was super fun to figure out, but I'm glad I gave it another shot. ",
      frontEnd: ['Vue.js'],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap', 'Three.js'],
      webLink: 'https://home.kylepep.dev',
      githubLink: 'https://github.com/KylePep/vue-HomePage',
      appColor: '#DEE3E2',
      tags: ['web', 'Vue.js', 'JavaScript', 'Bootstrap', 'Three.js']
    },
    {
      img: ['/images/apps/saiyanClicker.png', '/images/apps/saiyanClicker3.png', '/images/apps/saiyanClicker2.png', '/images/apps/saiyanClicker4.png',],
      title: 'Saiyan Clicker',
      description: "This was a lot of fun to make. It's a clicker game that you get to fight your way through enemies from Dragon Ball Z! There is a shop you can purchase upgrades from and unlockable characters. A great Javascript exercise and helped my learn a lot about Html and Css. You can even play it!",
      frontEnd: [],
      backEnd: [],
      dataBase: '',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: 'https://kylepep.github.io/saiyanClicker',
      githubLink: 'https://github.com/KylePep/saiyanClicker',
      appColor: '#116979',
      tags: ['web', 'homePage', 'favorite', 'Vue.js', 'JavaScript', 'Bootstrap']
    },

    {
      img: ['/images/apps/postIt.png', '/images/apps/postIt2.png'],
      title: 'Postit',
      description: 'Postit is a react based full-stack application that uses PostgreSQL to create a web forum where users can create posts and comment on them. Can sign in using your google account!',
      frontEnd: ['React'],
      backEnd: ['Next.js'],
      dataBase: 'PostgreSQL',
      languages: ['TypeScript'],
      cssFrameworks: ['Tailwind'],
      webLink: 'https://postit-4enw.vercel.app/',
      githubLink: 'https://github.com/KylePep/postit',
      appColor: '#18B0B0',
      tags: ['web', 'React', 'TypeScript', 'Tailwind', 'NextAuth.js', 'PostgreSQL', 'SQL']
    },
    {
      img: ['/images/apps/glxTrvl.png', '/images/apps/glxTrvl2.png'],
      title: 'glx-trvl',
      description: 'A reproduction of a futuristic galaxy travel agency.',
      frontEnd: ['React'],
      backEnd: [],
      dataBase: '',
      languages: ['TypeScript'],
      cssFrameworks: ['Tailwind'],
      webLink: '',
      githubLink: 'https://github.com/KylePep/glx-trvl',
      appColor: '#18B0B0',
      tags: ['web', 'React', 'TypeScript', 'Tailwind']
    }, {
      img: ['/images/apps/tower.png', '/images/apps/tower2.png', '/images/apps/tower3.png'],
      title: 'Tower',
      description: 'Tower is a versatile web app facilitating event creation, discovery, and ticket reservations. Users effortlessly organize gatherings, explore diverse events, and secure tickets with ease. Tower streamlines event management, fosters community engagement, and simplifies the event-going experience, making it an essential tool for event enthusiasts and organizers alike.',
      frontEnd: ['Vue.js'],
      backEnd: ['Express.js'],
      dataBase: 'MongoDB',
      languages: ['JavaScript'],
      cssFrameworks: ['Bootstrap'],
      webLink: '',
      githubLink: 'https://github.com/KylePep/Tower',
      appColor: '#DE7119',
      tags: ['web', 'Vue.js', 'Express.js', 'JavaScript', 'MongoDB', 'Bootstrap', 'NoSQL']
    },
  ],

  /** @type {[{title, tag, description}]} active Item Info*/
  skills: [
    {
      title: 'JavaScript',
      tag: 'JavaScript',
      description: 'Using JS for front end and back end development'
    },
    {
      title: 'Vue.js',
      tag: 'Vue.js',
      description: 'Created several applications using the Vue framework'
    },
    {
      title: 'C#',
      tag: 'C#',
      description: 'Created several applications using the Vue framework'
    },
    {
      title: 'Crud',
      tag: 'web',
      description: 'Created several applications using the Vue framework'
    },
    {
      title: 'Responsive Web Design',
      tag: 'web',
      description: 'Created several applications using the Vue framework'
    },
    {
      title: 'MongoDB',
      tag: 'MongoDB',
      description: 'Created several applications using the Vue framework'
    },
    {
      title: 'Object-Oriented Programming',
      tag: 'web',
      description: 'Created several applications using the Vue framework'
    },
    {
      title: 'Bootstrap',
      tag: 'Bootstrap',
      description: 'Created several applications using the Vue framework'
    }
  ],
  /** @type {[{title, description, duration}]} active Item Info*/
  resumeData: [
    {
      title: 'CodeWorks: Community Development Volunteer',
      description: 'Worked alongside CodeWorks alumni to develop a post grad platform for furthering the education of the CodeWorks community. Practiced developing on a team in a shared repository, My largest contribution was on the backend.',
      duration: '2023-2024'
    },
    {
      title: 'CodeWorks: Web Development',
      description: 'Completed CodeWorks FullStack Cohort, Where I immersed myself in full-time web development studies. During my education I formed front end and back end skills, worked independently, in pairs and larger groups. I learned a lot and made strong connections.',
      duration: '2023'
    },
    {
      title: 'Office Max: Operations Manager',
      description: "This experience isn't technical in nature but it does show case my soft skills. As an Operations Manager I led a team to accomplish task, meet goals and leave happy. I was the main trainer for new associates. I left on kind words and a fond farewell.",
      duration: '2020 - 2023'
    },
    {
      title: 'Elko Motor Company: Automotive Service Writer',
      description: 'In the high stress industry of running around and talking about cars, I was the writer for internal repairs and off brand customers. Keeping technicians busy, meeting theirs and your goals is an art form.',
      duration: '2019 - 2020'
    },
    {
      title: 'Office Max: Customer Service Manager',
      description: 'My first experience as a manager, It was a time of rapid change and progress. I would be promoted to another manger position. I left on good terms and would work for them again at a different store that I trained at.',
      duration: '2017 - 2019'
    }
  ],
  /** @type {{title, description, duration}} active Item Info*/
  testimonyData: [
    {
      name: 'Jane Doe',
      testimony: 'Did a really really... really good job, like, let me tell you. A Goood job.',
      title: 'Business Person',
      img: '/images/backEnd.png'
    },
    {
      name: 'Jorgis Mcborngus',
      testimony: 'Grumble grumlble mc-fumblerington goo. HRmmmmmmMMmm. Yes quite.',
      title: 'Hill Man',
      img: '/images/frontEnd.png'
    },
    {
      name: 'Mr. Misterson',
      testimony: 'Kyle Peppersack is good at the thing that he does and he does it well.',
      title: 'Mister',
      img: '/images/business.jpg'
    }
  ],
  accentColors: [
    '#DE7119',
    '#DEE3E2',
    '#116979',
    '#18B0B0'
  ]
})