import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { HashRouter } from 'react-router-dom';
import CatFavoritesProvider from '@/providers/cat/CatFavoritesProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <CatFavoritesProvider>
                <App/>
            </CatFavoritesProvider>
        </HashRouter>
    </React.StrictMode>,
);