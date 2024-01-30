import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation, { NavigationItem } from '@/components/Navigation/Navigation.tsx';
import { PAGE_FAVORITES, PAGE_HOME } from '@/constants/pages.ts';
import css from './PageLayout.module.scss';


const PageLayout: React.FC = () => {
    const navigationItems: NavigationItem[] = useMemo(() => {
        return [
            {
                label: 'Все котики',
                url  : `/${ PAGE_HOME }`,
            },
            {
                label: 'Любимые котики',
                url  : `/${ PAGE_FAVORITES }`,
            },
        ];
    }, []);

    return (
        <main className={ css.container }>
            <Navigation items={ navigationItems }/>
            <section>
                <Outlet/>
            </section>
        </main>
    );
};

export default React.memo(PageLayout);