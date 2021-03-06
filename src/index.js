import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENT IMPORTS
import App from './frontend/App';
import MainBanner from './frontend/components/mainBanner.js';
import Navbar from './frontend/components/navbar.js';
import About from './frontend/components/about.js';
import BookMe from './frontend/components/waysToBook.js';
import Footer from './frontend/components/footer.js';
import TarotApp from './frontend/components/tarotApp.js';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

// REDUX IMPORTS
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { ConnectedRouter as Router, routerReducer, routerMiddleware } from 'react-router-redux';

import reducer from './frontend/redux/reducers/index.js';
import action from './frontend/redux/actions/index.js';
import store from './frontend/redux/store/store.js';
import { displayCard, displayPersonAdvice, displaySituationAdvice, testNum } from './frontend/redux/actions/index.js';

// CREATE THE STORE/ STORE IN REFERENCE VARIABLE
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function render() {
    ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={App} />
              <Route path='/tarot-app' component={TarotApp} />
            </div>
          </BrowserRouter>
        </Provider>,
        // <TarotApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();

registerServiceWorker();
