import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import 'swiper/css';
import { Provider } from 'react-redux';
import { store } from './services/redux/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
)
