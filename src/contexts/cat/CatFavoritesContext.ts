import { createContext } from 'react';
import { ICatFavoritesService } from '@/services/cat/CatFavoritesService.ts';


export const CatFavoritesContext = createContext<ICatFavoritesService>({
    list: [],
    addToFavorite (): any {
    },
    removeFromFavorite (): any {
    },
    isFavorite (): boolean {
        return false;
    },
});