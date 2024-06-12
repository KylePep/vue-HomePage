import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{org, img, title, description, techStack, webLink, githubLink}} active Item Info*/
  activeApp: {}
})