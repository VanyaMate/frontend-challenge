import { useEffect, useMemo, useState } from 'react';
import { API_KEY } from '@/constants/api-key.ts';


export type Cat = {
    breeds: any[]
    categories: CatCategory[]
    id: string
    url: string
    width: number
    height: number
}

export type CatCategory = {
    id: number
    name: string
}

export type FetchCatsOrderType =
    'ASC'
    | 'DESC'
    | 'RAND';

export type UseFetchCatsProps = {
    limit: number;
    page: number;
    order: FetchCatsOrderType;
}

export const useFetchCats = function (props: UseFetchCatsProps, onLoad: (cats: Cat[]) => any): {
    pending: boolean
} {
    const [ pending, setPeding ] = useState<boolean>(true);
    const initialQuery: string   = useMemo<string>(() => {
        const queries: string[] = [
            `api_key=${ API_KEY }`,
        ];
        queries.push(`page=${ props.page ?? '0' }`);
        queries.push(`limit=${ props.limit ?? '30' }`);
        queries.push(`order=${ props.order ?? 'RAND' }`);
        return queries.join('&');
    }, [ props.page, props.limit, props.order ]);

    useEffect(() => {
        const abortController = new AbortController();
        setPeding(true);
        fetch(
            `https://api.thecatapi.com/v1/images/search?${ initialQuery }`,
            {
                signal: abortController.signal,
                cache : (!props.order || props.order === 'RAND')
                        ? 'no-cache'
                        : 'force-cache',
            },
        )
            .then((response) => response.json())
            .then((data) => onLoad(data))
            .then(() => setPeding(false))
            .catch((e) => {
                if (e.message !== 'The user aborted a request.') {
                    setPeding(false);
                }
            });

        return () => abortController.abort();
    }, [ initialQuery, props.order, onLoad ]);

    return { pending };
};