import React from 'react';
import css from './PageWidth.module.scss';


export type PageWidthProps = {
    children: React.ReactNode;
};

const PageWidth: React.FC<PageWidthProps> = (props) => {
    const { children } = props;

    return (
        <div className={ css.container }>
            { children }
        </div>
    );
};

export default React.memo(PageWidth);