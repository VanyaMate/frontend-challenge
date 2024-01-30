import { useEffect } from 'react';


export type UseInfiniteScrollOptions = {
    offset?: number;
}

export const useInfiniteScroll = function (refTrigger: React.RefObject<HTMLElement>, options: UseInfiniteScrollOptions, onTrigger: () => any) {
    useEffect(() => {
        if (refTrigger.current !== null) {
            let onTriggerState = false;
            const onScroll     = () => {
                const refTriggerPositionY: number = refTrigger.current!.getBoundingClientRect().top - window.innerHeight - (options.offset ?? 0);
                if (refTriggerPositionY <= 0) {
                    if (!onTriggerState) {
                        onTriggerState = true;
                        onTrigger();
                    }
                } else {
                    onTriggerState = false;
                }
            };
            document.addEventListener('scroll', onScroll);
            return () => document.removeEventListener('scroll', onScroll);
        }
    }, [ refTrigger, options.offset, onTrigger ]);
};