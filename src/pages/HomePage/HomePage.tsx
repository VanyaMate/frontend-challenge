import React from 'react';
import CatCatalogueContainer
    from '@/containers/cat/CatCatalogueContainer/CatCatalogueContainer.tsx';


const HomePage: React.FC = () => {
    return (
        <CatCatalogueContainer limit={ 30 } order="RAND" page={ 0 }/>
    );
};

export default React.memo(HomePage);