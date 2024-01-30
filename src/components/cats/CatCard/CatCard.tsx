import React from 'react';
import css from './CatCard.module.scss';
import { cn } from '@vanyamate/helpers/react/classname';
import Image from '@/components/ui/image/Image.tsx';


export type CatCardProps = {
    catImage: string;
    extra?: React.ReactNode;
    onCardClick?: () => any;
};

const CatCard: React.FC<CatCardProps> = (props) => {
    const { catImage, extra, onCardClick } = props;

    return (
        <article className={ cn(css.container, onCardClick && css.clickable) }>
            <Image
                alt="Картинка c котиком"
                className={ css.image }
                loading="lazy"
                onClick={ onCardClick }
                src={ catImage }
            />
            {
                extra ? <div className={ css.extra }>
                    { extra }
                </div> : null
            }
        </article>
    );
};

export default React.memo(CatCard);