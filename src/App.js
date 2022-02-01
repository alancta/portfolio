import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./components/Themes"
import { Route, Switch } from "react-router-dom"
import { Main } from "./components/Main"
import {AboutPage} from "./components/AboutPage"
import {BlogPage} from "./components/BlogPage"
import {SkillsPage} from "./components/SkillsPage"
import {ProjectsPage} from "./components/ProjectsPage"
function App() {
  return <>
  <GlobalStyle/>
  <ThemeProvider theme = {LightTheme} >
  <Switch>
    <Route exact path = "/" component = {Main}/>
    <Route exact path = "/about" component = {AboutPage}/>
    <Route exact path = "/blog" component = {BlogPage}/>
    <Route exact path = "/skills" component = {SkillsPage}/>
    <Route exact path = "/projects" component = {ProjectsPage}/>

  </Switch>

  </ThemeProvider>
  </>
  
    
}

export default App

