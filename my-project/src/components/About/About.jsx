import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';



export default function About() {
    const data = useLoaderData()

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://media.istockphoto.com/id/697547938/vector/suv-4x4-in-front.jpg?s=612x612&w=is&k=20&c=2n5DOgOK_ur7Kafx2xrFZxOQYSwZW7c83VwHfC7VsOM="
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            "Only intellectually-driven individuals engage in React development."
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Greetings. I’m <Link className='hover:text-blue-800 font-medium' to="https://github.com/Z0RRR0">{data.name}</Link> — a highly functional web developer with a predilection for clean code, well-structured logic, and an unrelenting desire to learn (and occasionally refactor everything for fun).

Unlike ordinary mortals, I don’t just "code websites" — I engineer digital experiences using the elegant power of React, JavaScript, and just the right amount of Tailwind. Some say obsession; I say precision.

While others scroll aimlessly, I dive deep into documentation, explore browser quirks, and battle CORS errors like a seasoned warrior. I believe bugs are merely misunderstood features waiting to be tamed.
                        </p>
                        <p className="mt-4 text-gray-600">
                            When I’m not coding or deploying something awesome, you’ll find me consuming anime plotlines with the analytical rigor of a theoretical physicist (or arguing why Mikasa Ackerman could defeat half the Marvel universe).

Currently available for freelance work, collaboration, or intelligent conversation involving semicolons, state management, or dimensional time travel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/z0rrr0')
    return response.json()
}