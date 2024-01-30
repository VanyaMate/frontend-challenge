import React, { useRef } from 'react';
import PageWidth from '@/components/ui/container/PageWidth/PageWidth.tsx';
import TileBox from '@/components/ui/container/TileBox/TileBox.tsx';
import CatCard from '@/components/cats/CatCard/CatCard.tsx';
import {
    FetchCatsOrderType,
} from '@/hooks/cats/fetch/useFetchCats.ts';
import { useFetchInfiniteCats } from '@/hooks/cats/fetch/useFetchInfiniteCats.ts';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll.ts';
import Loader from '@/components/Loader/Loader.tsx';
import CatFavoriteButtonContainer
    from '@/containers/cat/CatFavoriteButtonContainer/CatFavoriteButtonContainer.tsx';


export type CatCatalogueContainerProps = {
    //eslint-disable-next-line react/no-unused-prop-types
    limit: number;
    //eslint-disable-next-line react/no-unused-prop-types
    page: number;
    //eslint-disable-next-line react/no-unused-prop-types
    order: FetchCatsOrderType;
};

const CatCatalogueContainer: React.FC<CatCatalogueContainerProps> = (props) => {
    const { pending, cats, nextPage } = useFetchInfiniteCats(props);
    const trigger                     = useRef<HTMLDivElement>(null);

    useInfiniteScroll(trigger, { offset: 500 }, nextPage);

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
                        cats.map((cat) => (
                            <CatCard
                                catImage={ cat.url }
                                extra={ <CatFavoriteButtonContainer id={ cat.url }/> }
                                key={ cat.id }
                            />
                        ))
                    }
                    {
                        pending ? <Loader/> : null
                    }
                </TileBox>
            </div>
            <div ref={ trigger }/>
        </PageWidth>
    );
};

export default React.memo(CatCatalogueContainer);