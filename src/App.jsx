import { MobileLists } from './components/mobile-lists';

function App() {
    return (
        <div className='min-h-screen bg-slate-50 text-slate-900'>
            <main className='mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
                <section className='grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center'>
                    <div className='space-y-4'>
                        <h2 className='text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl'>
                            Electronics Gadgets
                        </h2>
                    </div>
                </section>
                <MobileLists />
            </main>
        </div>
    );
}

export default App;
