import HeaderBar from "../HeaderBar/HeaderBar"
import css from "./About.module.css"

function About() {
  return (
    <div>
      <HeaderBar />
      <div className={css.wrapper}></div>
      <h2>About</h2>
    </div>
  );
}

export default About
