import {memo} from 'react';

import {Button} from '_shared/button';
import {Link} from '_shared/link';
import {cn} from '_utils/cn';

import {PriceTagType} from './types';
import img from './vector.svg';

const PriceTag = memo<PriceTagType>(function PriceTag({product, className}) {
  return (
    <div
      className={cn('absolute right-16 top-52 max-w-sm bg-common-darkest-gray p-10', {
        [className as string]: !!className
      })}
    >
      <div className="mb-9 flex flex-col gap-2">
        <div className="text-paragraph-2">{product.name}</div>
        <div className="text-subtitle">
          {Intl.NumberFormat('rub', {minimumFractionDigits: 0, style: 'currency', currency: 'RUB'}).format(
            Math.round(Number(product.price))
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={product.size_guide_link} target="_blank" className="text-common-light-gray underline">
          <div className="flex items-center gap-2">
            Руководство по выбору размера
            <img src={img} alt={product.size_guide_link} className=" -rotate-45" />
          </div>
        </Link>
        <Button type="primary">Добавить в корзину</Button>
      </div>
    </div>
  );
});

export {PriceTag};
