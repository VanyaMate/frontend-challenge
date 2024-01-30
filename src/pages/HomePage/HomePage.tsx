import React from 'react';
import CatCatalogueContainer
    from '@/containers/CatCatalogueContainer/CatCatalogueContainer.tsx';


const HomePage: React.FC = () => {
    return (
        <CatCatalogueContainer/>
    );
};

export default React.memo(HomePage);