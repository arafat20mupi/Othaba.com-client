/* eslint-disable react/no-unescaped-entities */
const Teams = () => {
    const teamMembers = [
        {
            name: "Mehedi Hasan Sakir",
            title: "Front End Developer",
            intro: "Creative web designer focused on crafting visually stunning, user-centered experiences.",
            image: "https://i.ibb.co.com/wNg6nfm/image.png",
            socialLinks: {
                facebook: "https://www.facebook.com/mehedihasan.akondo.3",
                github: "#",
                portfolio: "#"
            }
        },
        {
            name: "Md Mehedi Hasan",
            title: "Front End Developer",
            intro: "Passionate front-end developer focused on creating responsive and interactive web interfaces.",
            image: "https://i.ibb.co.com/BtwS6KV/image.png",
            socialLinks: {
                facebook: "https://www.facebook.com/md.mehedi.hasan.g.r",
                github: "#",
                portfolio: "#"
            }
        },
        {
            name: "Nazmin Akter Noor",
            title: "Front End Developer",
            intro: "Creative front-end developer with a focus on building clean, user-friendly interfaces.",
            image: "https://codecraftor.xyz/assets/Nazmin-CFJD48NM.png",
            socialLinks: {
                facebook: "https://www.facebook.com/nazmin.noor13",
                github: "#",
                portfolio: "#"
            }
        },
        {
            name: "Bibak Bose",
            title: "Front End Developer",
            intro: "Skilled front-end developer with a keen eye for detail and a passion for user experience.",
            image: "https://i.ibb.co.com/WGZFBLh/image.png",
            socialLinks: {
                facebook: "https://www.facebook.com/bibek.bose.9883",
                github: "#",
                portfolio: "#"
            }
        },
    ];


    return (
        <div className="py-12 px-6 mx-auto max-w-screen-xl lg:py-20 lg:px-8">
            <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-20">
                <h2 className="mb-4 text-5xl font-bold tracking-tight">Meet Our Team</h2>
                <p className="font-light text-gray-500 sm:text-lg">We are a group of dedicated professionals working together to create amazing experiences.</p>
            </div>
            <div className="w-full py-8 flex justify-center items-center">
                <div className="flex flex-col items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden md:flex-row transition-transform hover:scale-105">
                    <img className="w-full h-80 md:w-1/2 object-cover hover:opacity-90 transition-all" src='https://i.ibb.co.com/PrdttMz/465839855-1350522805924781-2891526088187287211-n.jpg' alt={`Arafat Islam photo`} />
                    <div className="p-6 md:max-w-sm  md:p-8">
                        <h3 className="text-black text-2xl font-semibold">Arafat Islam</h3>
                        <span className=" my-2 block">Team Leader & Backend Developer</span>
                        <p className="text-gray-600">Dedicated backend developer and team leader with expertise in building scalable, efficient systems."</p>
                        <ul className="flex mt-4 space-x-4">

                            <li>
                                <a href={'https://www.facebook.com/arafatislamsani169'} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href='https://github.com/arafat20mupi' target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href='https://my-port-folio-hmwq.vercel.app' target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM6.004 15.96a8.442 8.442 0 01-2.468-5.31c.282.054 3.1.63 5.942.271.065.142.12.294.184.445.18.395.375.823.563 1.235-3.143 1.281-4.576 3.125-4.76 3.362zm1.692 2.684c.181-.246 2.38-3.088 6.051-3.095.062 0 .127.001.192.002a16.82 16.82 0 01.632 1.489c-3.159 1.245-5.601 1.669-6.875 1.604zM13.545 8.35c-.223.368-.442.752-.637 1.156-3.144-1.28-4.576-3.124-4.76-3.362a8.447 8.447 0 015.397-2.726zM12 20c-1.034 0-2.021-.176-2.942-.497 1.58-.358 3.69-1.07 5.867-2.316.223.366.433.752.628 1.155A8.445 8.445 0 0112 20zm1.546-8.354a23.36 23.36 0 01.636 1.157c-3.144 1.279-4.576 3.123-4.76 3.362a8.446 8.446 0 01-1.93-5.313c.28-.052 3.1-.629 5.943-.27.065-.142.12-.295.184-.447a25.34 25.34 0 00.564-1.234c3.159 1.246 4.601 3.09 4.76 3.359z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid gap-10 lg:gap-16 md:grid-cols-2">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden md:flex-row transition-transform hover:scale-105">
                        <img className="w-full h-80 md:w-1/2 object-cover hover:opacity-90 transition-all" src={member.image} alt={`${member.name}'s photo`} />
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl text-black font-semibold">{member.name}</h3>
                            <span className=" my-2 block">{member.title}</span>
                            <p className="text-gray-600">{member.intro}</p>
                            <ul className="flex mt-4 space-x-4">
                                {member.socialLinks.facebook && (
                                    <li>
                                        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                            </svg>
                                        </a>
                                    </li>
                                )}
                                {member.socialLinks.github && (
                                    <li>
                                        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                            </svg>
                                        </a>
                                    </li>
                                )}
                                {member.socialLinks.portfolio && (
                                    <li>
                                        <a href={member.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-500">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM6.004 15.96a8.442 8.442 0 01-2.468-5.31c.282.054 3.1.63 5.942.271.065.142.12.294.184.445.18.395.375.823.563 1.235-3.143 1.281-4.576 3.125-4.76 3.362zm1.692 2.684c.181-.246 2.38-3.088 6.051-3.095.062 0 .127.001.192.002a16.82 16.82 0 01.632 1.489c-3.159 1.245-5.601 1.669-6.875 1.604zM13.545 8.35c-.223.368-.442.752-.637 1.156-3.144-1.28-4.576-3.124-4.76-3.362a8.447 8.447 0 015.397-2.726zM12 20c-1.034 0-2.021-.176-2.942-.497 1.58-.358 3.69-1.07 5.867-2.316.223.366.433.752.628 1.155A8.445 8.445 0 0112 20zm1.546-8.354a23.36 23.36 0 01.636 1.157c-3.144 1.279-4.576 3.123-4.76 3.362a8.446 8.446 0 01-1.93-5.313c.28-.052 3.1-.629 5.943-.27.065-.142.12-.295.184-.447a25.34 25.34 0 00.564-1.234c3.159 1.246 4.601 3.09 4.76 3.359z" />
                                            </svg>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;
