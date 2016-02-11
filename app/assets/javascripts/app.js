import './plugins';
import attachFastClick from 'fastclick';
import app from './pages/home';


document.addEventListener('DOMContentLoaded', () => {
  attachFastClick(document.body);
});
