import React, { useCallback, useContext, useState } from 'react';
import { CatFavoritesContext } from '@/contexts/cat/CatFavoritesContext.ts';
import IconM from '@/components/ui/icons/IcomM.tsx';
import css from './CatFavoriteButtonContainer.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type CatFavoriteButtonContainerProps = {
    id: string;
};

const CatFavoriteButtonContainer: React.FC<CatFavoriteButtonContainerProps> = (props) => {
    const { id }                        = props;
    const service                       = useContext(CatFavoritesContext);
    const [ isFavorite, setIsFavorite ] = useState<boolean>(service.isFavorite(id));

    const onClick = useCallback(() => {
        setIsFavorite((prev) => {
            if (prev) {
                service.removeFromFavorite(id);
            } else {
                service.addToFavorite(id);
            }
            return !prev;
        });
    }, [ service, id ]);

    return (
        <div className={ css.container } onClick={ onClick }>
            <IconM className={ cn(css.icon, isFavorite && css.isFavorite) }>
                { isFavorite ? 'heart_check' : 'favorite' }
            </IconM>
        </div>
    );
};

export default React.memo(CatFavoriteButtonContainer);