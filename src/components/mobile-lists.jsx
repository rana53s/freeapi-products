import { useState } from 'react';
import { useEffect } from 'react';
import MobileCard from './mobile-card';

export function MobileLists() {
    const [mobiles, setMobiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getMobileLists() {
        try {
            setIsLoading(true);
            const res = await fetch(
                'https://api.freeapi.app/api/v1/public/randomproducts',
                { method: 'GET' },
            );

            const data = await res.json();
            const mobileLists = data.data.data;
            setMobiles(mobileLists);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(`Error fetching mobile lists with error: ${error}`);
        }
    }

    useEffect(() => {
        getMobileLists();
    }, []);

    return (
        <div className='mt-8'>
            {!isLoading && (
                <>
                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {mobiles.map((mobile) => (
                            <div
                                key={mobile.id}
                                className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
                            >
                                <MobileCard {...mobile} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
