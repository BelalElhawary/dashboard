import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {ContextProvider} from './context/ContextProvider'
import { registerLicense } from '@syncfusion/ej2-base';
import { SYNCFUSION_KEY } from './data/env';

// Registering Syncfusion license key
registerLicense(SYNCFUSION_KEY);

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);