import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './NavigationButton.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type NavigationButtonProps = {
    label: string;
    url: string;
    className?: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
    const { label, url, className } = props;
    const { pathname }              = useLocation();

    return (
        <Link className={ cn(css.container, className, (pathname === url) && css.active) }
              to={ url }>
            { label }
        </Link>
    );
};

export default React.memo(NavigationButton);