import { useCallback, useEffect, useState } from 'react';
import {
    Cat,
    useFetchCats, UseFetchCatsProps,
} from '@/hooks/cats/fetch/useFetchCats.ts';


export type UseFetchInfiniteCats = {
    pending: boolean;
    cats: Cat[];
    nextPage: () => any;
}

export const useFetchInfiniteCats = function (props: UseFetchCatsProps): UseFetchInfiniteCats {
    const { limit, order, page }          = props;
    const [ currentPage, setCurrentPage ] = useState<number>(page ?? 0);
    const [ cats, setCats ]               = useState<Cat[]>([]);
    const addCats                         = useCallback((cats: Cat[]) => {
        setCats((prev) => [ ...prev, ...cats ]);
    }, []);
    const { pending }                     = useFetchCats({
        limit, order, page: currentPage,
    }, addCats);

    useEffect(() => {
        setCats([]);
    }, [ props.limit, props.order ]);

    useEffect(() => {
        setCurrentPage(props.page ?? 0);
    }, [ props.page ]);

    const nextPage = useCallback(() => {
        if (!pending) {
            setCurrentPage((prev) => prev + 1);
        }
    }, [ pending ]);

    return { cats, pending, nextPage };
};