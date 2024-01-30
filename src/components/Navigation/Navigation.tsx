import React from 'react';
import NavigationButton
    from '@/components/Navigation/NavigationButton/NavigationButton.tsx';
import css from './Navigation.module.scss';
import PageWidth from '@/components/ui/container/PageWidth/PageWidth.tsx';


export type NavigationItem = {
    label: string;
    url: string;
}

export type NavigationProps = {
    items: NavigationItem[];
    // extra
};

const Navigation: React.FC<NavigationProps> = (props) => {
    const { items } = props;

    return (
        <nav className={ css.container }>
            <PageWidth>
                <ul className={ css.list }>
                    {
                        items.map((item) => (
                            <li className={ css.item } key={ item.url }>
                                <NavigationButton
                                    className={ css.link }
                                    { ...item }
                                />
                            </li>
                        ))
                    }
                </ul>
            </PageWidth>
        </nav>
    );
};

export default React.memo(Navigation);