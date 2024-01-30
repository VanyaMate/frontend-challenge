import React from 'react';
import PageWidth from '@/components/ui/container/PageWidth/PageWidth.tsx';
import CatFavoritesContainer
    from '@/containers/cat/CatFavoritesContainer/CatFavoritesContainer.tsx';


const FavoritesPage: React.FC = () => {
    return (
        <CatFavoritesContainer/>
    );
};

export default React.memo(FavoritesPage);