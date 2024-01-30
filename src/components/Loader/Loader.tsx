import React from 'react';
import css from './Loader.module.scss';


/**
 * Надо было сделать его другим чтобы использовать везде.
 * @returns {React.JSX.Element}
 * @constructor
 */
const Loader: React.FC = () => {
    return (
        <div className={ css.container }/>
    );
};

export default React.memo(Loader);