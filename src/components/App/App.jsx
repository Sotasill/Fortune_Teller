import CardList from "../CardList/CardList";
import css from './App.module.css'

const App = () => {
  return (
    <div className={css.AppWrapper}>
      <h1>Гадание на картах Таро</h1>
      <CardList />
    </div>
  );
};

export default App;
