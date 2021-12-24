//Модули
import React from 'react';
import ReactDOM from 'react-dom';

// Компоненты
import App from './App';
import Container from './components/Container/Container';

// Стили
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <>
		<Container>
			<App />
		</Container>
  </>,
  document.getElementById('root')
);
