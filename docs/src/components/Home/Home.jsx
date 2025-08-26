import React from 'react'
import placeholder from '../../assets/placeholder.png';
import placeholder2 from '../../assets/placeholder2.png';
import bigScreen4 from '../../assets/bigScreen4.jpg';
import smallScreen from '../../assets/smallScreen.png';
import leetcode from '../../assets/leetcode.png'
import github from '../../assets/github.png'
import codeforces from '../../assets/codeforces.png'
import mobileScreens from '../../assets/mobileScreens.jpg'

export default function Home() {

    const handleClick = (url) => {
        window.open(url);
    }

    const achievements = [
        { 
            title: "CODEFORCES", 
            link: "https://codeforces.com/profile/narut01q", 
            image: codeforces, 
            description: "Solved algorithmic problems, contests, and improved problem-solving speed."
        },
        { 
            title: "LEETCODE", 
            link: "https://leetcode.com/u/kdJRKhcpDi/", 
            image: leetcode,
            description: "Practiced data structures and algorithms for coding interview prep."
        },
        { 
            title: "GITHUB", 
            link: "https://github.com/Z0RRR0", 
            image: github,
            description: "Built and shared open-source projects with clean documentation."
        },
    ]

    const projects = [
        { 
            title: "PORTFOLIO", 
            link: "https://github.com/Z0RRR0", 
            description: "Responsive, dark-mode-enabled portfolio built with React and Tailwind."
        },
        { 
            title: "JAVA-2D", 
            link: "https://github.com/Z0RRR0",
            description: "Java-based game with levels, collisions, and character controls."
        },
        { 
            title: "RPS C#", 
            link: "https://github.com/Z0RRR0",
            description: "Well-optimized logic and interface using C# and .NET."
        },
        { 
            title: "CLI-CRYPTO", 
            link: "https://github.com/Z0RRR0",
            description: "Command-line app to track real-time crypto prices and trends."
        },
        { 
            title: "TURTLE-PY", 
            link: "https://github.com/Z0RRR0",
            description: "Fun arcade-style game using Python’s turtle graphics module"
        },
    ]



  return (
    <>

        {/* image section starts here. */}
            <img className='w-full hidden md:block' src={bigScreen4} alt="" />
            <img className='w-full md:hidden' src={mobileScreens} alt="" />
        {/* image section ends here. */}

        {/* My Achievements section. */}
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10 place-content-center'>
            <div className='w-full h-auto flex flex-col items-center text-center'>
                <p className='block md:hidden dark:text-gray-200 text-indigo-950 font-bold tracking-tighter uppercase sm:text-2xl text-xl'> 
                    “Engineering: the slow cousin of theoretical physics.”
                </p>
                <p className='hidden md:block dark:text-gray-200 text-indigo-950 font-bold tracking-tighter uppercase sm:text-2xl text-xl'> 
                    "Engineering: where the noble semi-skilled laborers  execute the vision of those who think and dream."
                </p>
                <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl justify-self-center-safe'></div>
                    
            </div>
            <div className='w-full lg:w-[85%] flex flex-wrap justify-evenly gap-x-1 dark:border-gray-200 border-2 dark:bg-slate-950 bg-gray-100 pt-8 rounded-2xl'>
                {
                    achievements.map((achievement, index) => (
                        <div key={index} onClick={() => handleClick(achievement.link)} className='flex flex-col items-center px-4 group cursor-none hover:ring-2 dark:hover:ring-indigo-500 hover:ring-gray-200 transition-all duration-200 rounded border-b-2 border-l-2 dark:border-slate-800 border-gray-200 sm:w-[240px] mb-12 mx-4 pl-4'>
                            <img className='py-2 px-2 w-44 h-42' src={achievement.image} alt="" />
                            <p className='mt-2 text-2xl font-bold text-gray-800 dark:text-white group-hover:underline'>{achievement.title}</p>
                            <p className='text-sm font-bold text-gray-500 py-2'>{achievement.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* My Achievement section ends here. */}

        {/* My Project section */}
        <div className='h-auto w-full flex flex-col items-center text-center p-10'>
            <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                <p className='dark:text-gray-200 text-indigo-950 font-bold text-center tracking-tighter uppercase sm:text-2xl text-xl'> 
                    "My Projects"
                </p>
                    <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-2xl justify-self-center-safe'></div>
            </div>
            <div className='w-[90%] h-auto'>
                <div className='w-full flex flex-wrap gap-x-1 justify-evenly'>
                    {
                        projects.map((project, index) => (
                            <div key={index} onClick={() => handleClick(project.link)} className='sm:w-59 w-full sm:mx-1 flex flex-col dark:bg-slate-900  items-center mb-12 border-white p-2 dark:border-slate-700 dark:hover:bg-slate-900 hover:bg-amber-50 hover:border-2 rounded-xl group shadow-xs shadow-gray-500 dark:hover:shadow-gray-700 hover:shadow-xl hover:cursor-pointer'>
                                <img src={placeholder2} alt="" />
                                <p className='text-3xl font-bold text-gray-800 dark:text-white group-hover:text-slate-800 dark:group-hover:text-white transition-all duration-200'>{project.title}</p>
                                <p className='text-xl text-gray-500 py-1 mb-0.5'>{project.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        {/* My Project section ends here */}
    </>
  )
}
