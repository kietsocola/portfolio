

import Link from "next/link"

import skills from "../../data/skills.json"
import usersInfo from "../../data/usersInfo.json"



export default function Intro() {

    return (
        <div className={`w-full h-auto p-0 relative top-[50px] mb-[100px]`}>
            <div className={`w-full flex items-start justify-between flex-row flex-wrap-reverse`}>
                <div className={`w-full h-auto p-[10px] relative container md:w-[50%]`}>
                    {/* boxes */}
                    <IntroCards data={skills.experience} />
                </div>
                <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:w-[45%]`}>
                    <p className={`text-[12px] text-white-200 `}>Introduce</p>
                    <div className={`relative top-[20px]`}>
                        <h1 data-aos="zoom-in-up" className={`text-[35px] font-bold mb-[20px]`}>
                            {usersInfo.greeting_type}  I'm {usersInfo.full_name}.
                        </h1>
                        <br />
                        <br />
                        <p data-aos="zoom-in-right" className={`text-[15px] text-white-200 italic px-3 py-2 bg-dark-300 border-l-[3px] border-solid border-l-green-200 `}>
                            {usersInfo.intro_tagline}
                        </p>
                        <br />
                        <p data-aos="fade-up" className={`text-[14px] mb-5 text-white-200`}>
                            {usersInfo.bio_desc[0]}
                        </p>

                        <Link href="/about">
                            <a data-aos="zoom-in-up" className={`text-[14px] font-bold text-green-200 underline`}>Read More</a>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className={styles.companies}>
                <img src="https://avatars.githubusercontent.com/u/104397777?s=200&v=4" className={styles.compImage} alt="" />
                <img src="" className={styles.compImage} alt="" />
            </div>
            <br /> */}
        </div>
    )
}

function IntroCards({ data }) {

    return (
        <>
            {
                data.length > 0 ?
                    data.map((experience, i) => {
                        return (
                            <div data-aos="zoom-in-up" key={i} className={`w-full h-[180px] p-[25px] rounded-[12px] bg-gradient-to-br from-dark-200 to-dark-300 m-[0px] relative transition-all mt-6 hover:shadow-2xl hover:scale-105 border border-dark-100`}>
                                <div className={`flex flex-col items-start justify-start h-full`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <p className={`m-0 text-[18px] font-extrabold text-green-100 tracking-wide`}>
                                            {experience.company}
                                        </p>
                                    </div>
                                    <p className={`text-[14px] text-green-200 font-semibold mb-2 uppercase tracking-wider`}>
                                        {experience.position}
                                    </p>
                                    <span className={`text-[13px] text-white-200 leading-relaxed flex-1`}>
                                        {experience.description}
                                    </span>
                                </div>
                                <div className={`absolute bottom-[15px] left-[25px] flex items-center gap-2`}>
                                    <ion-icon name="time-outline" class="text-green-400 text-[16px]"></ion-icon>
                                    <span className={`text-[13px] text-green-300 font-bold bg-green-900/20 px-3 py-1 rounded-full`}>
                                        {experience.duration}
                                    </span>
                                </div>
                                <div className="absolute top-[20px] right-[20px] w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center">
                                    <ion-icon name="briefcase" class={`text-green-400 text-[20px]`}></ion-icon>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div data-aos="zoom-in-up" className={`w-full h-[160px] p-[25px] rounded-[12px] bg-gradient-to-br from-dark-200 to-dark-300 m-[0px] relative transition-all mt-6 hover:shadow-2xl hover:scale-105 border border-dark-100`}>
                        <div className={`flex flex-col items-start justify-start h-full`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <p className={`m-0 text-[18px] font-extrabold text-green-100 tracking-wide`}>
                                    Tech Company
                                </p>
                            </div>
                            <p className={`text-[14px] text-green-200 font-semibold mb-2 uppercase tracking-wider`}>
                                Software Developer
                            </p>
                            <span className={`text-[13px] text-white-200 leading-relaxed flex-1`}>
                                Development of beautiful and unique user interfaces.
                            </span>
                        </div>
                        <div className={`absolute bottom-[15px] left-[25px] flex items-center gap-2`}>
                            <ion-icon name="time-outline" class="text-green-400 text-[16px]"></ion-icon>
                            <span className={`text-[13px] text-green-300 font-bold bg-green-900/20 px-3 py-1 rounded-full`}>
                                2020 - 2023
                            </span>
                        </div>
                        <div className="absolute top-[20px] right-[20px] w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center">
                            <ion-icon name="briefcase" class={`text-green-400 text-[20px]`}></ion-icon>
                        </div>
                    </div>
            }
        </>
    )
}