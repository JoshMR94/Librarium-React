import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , 
    document.getElementById('root'));
=======
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 62af7b0eeca4927237537cd9c4560d975d4fb60a
registerServiceWorker();
