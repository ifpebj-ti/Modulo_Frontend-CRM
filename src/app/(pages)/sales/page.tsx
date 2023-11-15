import Peaker from '@/components/datepicker';

export default function SalesPage() {
    return (
        <div>
            <main className='w-full h-full border-2'>
                <section>
                    <div className="flex flex-col h-full w-[40%] pr-[112px] pl-[112px] pt-[40px] pb-[40px] justify-around">

                        <Peaker />
                    </div>
                </section>
            </main>
        </div>
    );
}