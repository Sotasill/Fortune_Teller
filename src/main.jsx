import './index.css'
import App from './components/App/App'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize/modern-normalize.css";
import '../src/redux/language/i18n';
import { Provider } from 'react-redux';
import store from '../src/redux/store/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
