import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from '@/layouts/PageLayout/PageLayout.tsx';
import HomePage from '@/pages/HomePage/HomePage.tsx';
import FavoritesPage from '@/pages/FavoritesPage/FavoritesPage.tsx';


const Pages: React.FC = () => {
    return (
        <Routes>
            <Route element={ <PageLayout/> } path={ '/*' }>
                <Route element={ <FavoritesPage/> } path="favorites"/>
                <Route element={ <HomePage/> } path="*"/>
            </Route>
        </Routes>
    );
};

export default React.memo(Pages);