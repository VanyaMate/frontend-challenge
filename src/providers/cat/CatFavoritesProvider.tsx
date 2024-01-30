import React, { useMemo } from 'react';
import { CatFavoritesContext } from '@/contexts/cat/CatFavoritesContext.ts';
import { CatFavoritesService } from '@/services/cat/CatFavoritesService.ts';


export type CatFavoritesProviderProps = {
    children: React.ReactNode;
};

const CatFavoritesProvider: React.FC<CatFavoritesProviderProps> = (props) => {
    const { children } = props;
    const service      = useMemo(() => new CatFavoritesService(), []);

    return (
        <CatFavoritesContext.Provider value={ service }>
            { children }
        </CatFavoritesContext.Provider>
    );
};

export default React.memo(CatFavoritesProvider);