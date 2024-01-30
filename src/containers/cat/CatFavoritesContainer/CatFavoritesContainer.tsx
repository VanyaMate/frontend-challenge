import React, { useContext, useMemo, useRef, useState } from 'react';
import { CatFavoritesContext } from '@/contexts/cat/CatFavoritesContext.ts';
import PageWidth from '@/components/ui/container/PageWidth/PageWidth.tsx';
import TileBox from '@/components/ui/container/TileBox/TileBox.tsx';
import CatCard from '@/components/cats/CatCard/CatCard.tsx';
import CatFavoriteButtonContainer
    from '@/containers/cat/CatFavoriteButtonContainer/CatFavoriteButtonContainer.tsx';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll.ts';


export type CatFavoritesContainerProps = {};

const CatFavoritesContainer: React.FC<CatFavoritesContainerProps> = (props) => {
    const {}                = props;
    const { list }          = useContext(CatFavoritesContext);
    const [ page, setPage ] = useState(0);
    const cats              = useMemo(() => list.slice(0, 30 + page * 30), [ list, page ]);

    const trigger = useRef<HTMLDivElement>(null);
    useInfiniteScroll(trigger, { offset: 500 }, () => setPage((prev) => prev + 1));

    return (
        <PageWidth>
            {
                /**
                 * для этого нужен отдельный компонент
                 */
            }
            <div style={ { display: 'flex', flexDirection: 'column', gap: 10 } }>
                <TileBox>
                    {
                        cats.map((url) => (
                            <CatCard
                                catImage={ url }
                                extra={ <CatFavoriteButtonContainer id={ url }/> }
                                key={ url }
                            />
                        ))
                    }
                </TileBox>
            </div>
            <div ref={ trigger }/>
        </PageWidth>
    );
};

export default React.memo(CatFavoritesContainer);