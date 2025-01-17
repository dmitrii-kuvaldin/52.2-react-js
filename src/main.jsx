import { createRoot } from 'react-dom/client';
// корневой css файл проекта
import App from './App.jsx';
import './index.css';

// код в тегах ниже будет отображаться в div c id root на странице
createRoot(document.getElementById('root')).render(
  <>
    {/* вызов компонента App */}
    <App />
  </>,
);
