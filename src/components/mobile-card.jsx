import React from 'react';

const MobileCard = ({
    title,
    description,
    price,
    discountPercentage,
    brand,
    images,
}) => {
    return (
        <div>
            <div className='overflow-hidden rounded-3xl bg-slate-100'>
                <img
                    className='h-52 w-full object-cover'
                    src={images[0]}
                    alt={title}
                />
            </div>
            <div className='mt-4 space-y-3'>
                <h3 className='text-lg font-semibold text-slate-900'>
                    {title}
                </h3>
                <p className='text-sm uppercase tracking-[0.18em] text-slate-500'>
                    {brand}
                </p>
                <div className='flex flex-wrap items-center gap-3 text-sm text-slate-600'>
                    <span className='rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-800'>
                        Price: ${price}
                    </span>
                    <span className='rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-700'>
                        -{discountPercentage}%
                    </span>
                </div>
                <p className='text-sm leading-6 text-slate-600'>
                    <span className='font-semibold text-slate-900'>
                        Details:
                    </span>{' '}
                    {description}
                </p>
            </div>
        </div>
    );
};

export default MobileCard;
