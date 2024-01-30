import React, { useState } from 'react';
import css from './Image.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';


export type ImageProps =
    React.ImgHTMLAttributes<HTMLImageElement>
    & {
        containerClassName?: string
    };

const Image: React.FC<ImageProps> = (props) => {
    const { className, containerClassName, alt, ...other } = props;
    const [ loading, setLoading ]                          = useState<boolean>(true);

    return (
        <div className={ cn(css.container, containerClassName, loading && css.loading) }>
            <img
                alt={ alt }
                { ...other }
                className={ cn(className, css.image) }
                onLoad={ () => setLoading(false) }
            />
        </div>
    );
};

export default React.memo(Image);