import React from 'react';
import CatFavoritesContainer
    from '@/containers/cat/CatFavoritesContainer/CatFavoritesContainer.tsx';


const FavoritesPage: React.FC = () => {
    return (
        <CatFavoritesContainer/>
    );
};

export default React.memo(FavoritesPage);