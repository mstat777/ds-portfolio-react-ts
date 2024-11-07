import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { DataLayerProvider } from './context/DataLayerProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <DataLayerProvider>
                <App />
            </DataLayerProvider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();