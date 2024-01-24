import React from "react";
import photoWsp from '../assets/img/foto-whats.jpeg'
import Card from "./components/card.component";
const Home = () => {
    const frontEndSkills = [
        { name: "HTML", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" },
        { name: "JS", url: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" },
        { name: "CSS", url: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png" },
        { name: "React Js", url: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" },
        { name: "Vue js", url: "https://images-ext-2.discordapp.net/external/irz-58ZEwzl1c6DpZt1_ypKHGkoyVfswNIscZIZvTjk/https/iconape.com/wp-content/files/pr/112460/png/vue-js-1.png?format=webp&quality=lossless&width=662&height=662" },
        { name: "Tailwind", url: "https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu" },
        { name: "Bootstrap", url: "https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png" }
    ];
    const backEndSkills = [
        { name: "PHP", url: "https://www.freepnglogos.com/uploads/php-logo-png/php-logo-parental-advisory-explicit-content-logo-png-transparent-3.png" },
        { name: "Laravel", url: "https://laravel.com/img/logomark.min.svg" },
        { name: "Git", url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { name: "Github", url: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
        { name: "SQL", url: "https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-securing-mysql-and-connecting-wso-servers-yasassri-blog-18.png" }
    ];
    const projectsSkills = [
        { name: "Ansa", url: "https://ansa.cc/files/presentations/presentation_655d256966dbe.png", link: 'https://ansa.cc/' },
        { name: "Electrikmex", url: "https://electrikmex.com/wp-content/uploads/2022/10/mascota.svg", link: 'https://electrikmex.com/' },
        { name: "Thelynxstudio", url: "https://www.thelynxstudio.com/assets/images/FooterIMG.svg", link: 'https://www.thelynxstudio.com/' },
        { name: "Dantemortet", url: "https://dantemortet.com/wp-content/uploads/2023/12/Logo.svg", link: 'https://dantemortet.com/' },
    ];

    return <>        
        <main className="bg-slate-50 h-full min-h-screen m-auto pb-8 pt-32 w-[90%] max-w-[1200px]">
            <h1 className="text-indigo-500	 text-center pt-4 text-5xl font-bold">Frontend & Backend Developer</h1>
            <p className="text-slate-950	 text-center pt-4 text-lg font-normal max-w-[800px] m-auto    ">I craft compelling digital experiences from server-side code to user interfaces, merging creativity and functionality to bring innovative technological solutions to life.</p>
            <img className="w-[200px] h-[200px] object-cover m-auto rounded-full my-10" src={photoWsp} alt="" />
            <div className="bg-indigo-500 w-full  py-10 flex flex-col gap-y-8  px-5">
                <h2 className="text-3xl font-bold text-white">Technologies</h2>
                <div>
                    <h3 className="text-xl font-semibold text-white">Frontend</h3>
                    <div className="flex flex-wrap gap-[20px] pt-4 justify-evenly">
                        {frontEndSkills.map((item, index) => <Card bgWhite={true}>
                            <div className="text-center">
                                <img className="w-32 h-32 object-cover mb-3" src={item.url} alt="" />
                                <h3 className="text-sm font-bold">{item.name}</h3>
                            </div>
                        </Card>)}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white">Backend</h3>
                    <div className="flex flex-wrap gap-[20px] pt-4 justify-evenly">
                        {backEndSkills.map((item, index) => <Card bgWhite={true}>
                            <div className="text-center">
                                <img className="w-32 h-32 object-cover mb-3" src={item.url} alt="" />
                                <h3 className="text-sm font-bold">{item.name}</h3>
                            </div>
                        </Card>)}
                    </div>
                </div>
            </div>
            <div className="w-full  py-10 flex flex-col gap-y-8  px-5">
                <h2 className="text-3xl font-bold text-slate-950">Projects</h2>
                <div>
                    <div className="flex flex-wrap gap-[20px] pt-4 justify-evenly">
                        {projectsSkills.map((item, index) => <Card pointer={true} dark={true} bgBlack={true}>
                            <a href={item.link} className="text-center ">
                                <img className="w-32 h-32 mb-3" src={item.url} alt="" />
                                <h3 className="text-sm font-bold">{item.name}</h3>
                            </a>
                        </Card>)}
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Home