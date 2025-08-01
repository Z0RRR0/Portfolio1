import React from 'react'
import placeholder from '../../assets/placeholder.png';
import placeholder2 from '../../assets/placeholder2.png';
import bigScreen4 from '../../assets/bigScreen4.jpg';
import smallScreen from '../../assets/smallScreen.png';

export default function Home() {
  return (
    <>

        {/* image section starts here. */}
            <img className='w-full hidden md:block' src={bigScreen4} alt="" />
            <img className='w-full md:hidden' src={smallScreen} alt="" />
        {/* image section ends here. */}

        {/* My Works section. */}
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10 justify-self-center-safe'>
            <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                <p className='dark:text-gray-200 text-indigo-950 font-bold text-center tracking-tighter uppercase md:text-2xl'> 
                    "Engineering: where the noble semi-skilled laborers  execute the vision of those who think and dream."
                </p>
                    <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl justify-self-center-safe'></div>
            </div>
            <div className='w-full flex flex-wrap justify-evenly'>
                <div className='rounded border-b-2 border-l-2 dark:border-slate-800 border-gray-200 w-46 flex flex-col item-center mb-12'>
                    <img className='w-44 h-44' src={placeholder} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white'>Title</p>
                    <p className='text-2xl font-bold text-gray-500'>Desctiption</p>
                </div>
                <div className='rounded border-b-2 border-l-2 dark:border-slate-800 border-gray-200 w-46 flex flex-col item-center mb-12'>
                    <img className='w-44 h-44' src={placeholder} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white'>Title</p>
                    <p className='text-2xl font-bold text-gray-500'>Desctiption</p>
                </div>
                <div className='rounded border-b-2 border-l-2 dark:border-slate-800 border-gray-200 w-46 flex flex-col item-center mb-12'>
                    <img className='w-44 h-44' src={placeholder} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white'>Title</p>
                    <p className='text-2xl font-bold text-gray-500'>Desctiption</p>
                </div>
            </div>
        </div>
        {/* My Works section ends here. */}

        {/* My Achievement section */}
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10'>
            <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                <p className='dark:text-gray-200 text-indigo-950 font-bold text-center tracking-tighter uppercase md:text-2xl'> 
                    "My Achievements"
                </p>
                    <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl justify-self-center-safe'></div>
            </div>
            <div className='w-[90%] h-auto flex flex-wrap justify-around space-x-2'>
                <div className='w-64 flex flex-col dark:bg-slate-900  items-center mb-12 border-white p-2 dark:border-slate-700 dark:hover:bg-slate-900 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 dark:hover:shadow-gray-700 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white group-hover:text-slate-800 dark:group-hover:text-white transition-all duration-200'>Title</p>
                    <p className='text-xl text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col dark:bg-slate-900  items-center mb-12 border-white p-2 dark:border-slate-700 dark:hover:bg-slate-900 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 dark:hover:shadow-gray-700 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white group-hover:text-slate-800 dark:group-hover:text-white transition-all duration-200'>Title</p>
                    <p className='text-xl text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col dark:bg-slate-900  items-center mb-12 border-white p-2 dark:border-slate-700 dark:hover:bg-slate-900 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 dark:hover:shadow-gray-700 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white group-hover:text-slate-800 dark:group-hover:text-white transition-all duration-200'>Title</p>
                    <p className='text-xl text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col dark:bg-slate-900  items-center mb-12 border-white p-2 dark:border-slate-700 dark:hover:bg-slate-900 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 dark:hover:shadow-gray-700 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white group-hover:text-slate-800 dark:group-hover:text-white transition-all duration-200'>Title</p>
                    <p className='text-xl text-gray-500'>Description</p>
                </div>
                <div className='w-64 flex flex-col dark:bg-slate-900  items-center mb-12 border-white p-2 dark:border-slate-700 dark:hover:bg-slate-900 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 dark:hover:shadow-gray-700 hover:shadow-xl'>
                    <img src={placeholder2} alt="" />
                    <p className='text-3xl font-bold text-gray-800 dark:text-white group-hover:text-slate-800 dark:group-hover:text-white transition-all duration-200'>Title</p>
                    <p className='text-xl text-gray-500'>Description</p>
                </div>
            </div>
        </div>
        {/* My Achievement section ends here */}
    </>
  )
}
