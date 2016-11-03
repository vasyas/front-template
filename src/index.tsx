import * as React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
const { AppContainer } = require('react-hot-loader');

import { App } from './app';

// Render
function renderRootComponent(rootComponent) {
    render(
        <AppContainer>
            { rootComponent }
        </AppContainer>,
        document.getElementById('app')
    );
}

renderRootComponent(<App history={ browserHistory }/>);

// Handle hot reloading requests from Webpack
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept('./app', () => {
        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NextApp = require('./app').App;

        renderRootComponent(<NextApp history={ browserHistory }/>);
    });
}
