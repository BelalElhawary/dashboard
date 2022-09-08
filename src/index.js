import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {ContextProvider} from './context/ContextProvider'
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jUH9bc3FRQmJdUUM=');

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);