import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from '@/layouts/PageLayout/PageLayout.tsx';
import HomePage from '@/pages/HomePage/HomePage.tsx';
import FavoritesPage from '@/pages/FavoritesPage/FavoritesPage.tsx';
import { PAGE_FAVORITES, PAGE_HOME } from '@/constants/pages.ts';


const Pages: React.FC = () => {
    return (
        <Routes>
            <Route element={ <PageLayout/> } path={ '/*' }>
                <Route element={ <FavoritesPage/> } path={ PAGE_FAVORITES }/>
                <Route element={ <HomePage/> } path={ PAGE_HOME }/>
                <Route element={ <h1>404</h1> } path="*"/>
            </Route>
        </Routes>
    );
};

export default React.memo(Pages);