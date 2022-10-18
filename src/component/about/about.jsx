import { useRef } from "react";
import "./about.css"
import content from "../../localization/content";

const AboutUs = {
    RU: [
        {
            id: 1,
            phoneNumber: +998970505885,
            instagram: 'https://www.instagram.com/cyberium.uz/',
            telegram: "@Cyberium_GG"
        }
    ],

}

const About = ({ lang }) => {

    const x = useRef()
    const y = useRef()
    const c = useRef()
    const b = useRef()

    return (
        <>
            <main className="About">
                <div className="container">
                    <div className="About_top">
                        <img className="About_top-img" src="https://my.yola.menu/media/api/vendor/logo/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-43_od1S5Ue.png" />
                        <div className="About_top-left">
                            <p >Cyberium</p>
                            <p> {content[lang].aboutUs.adres}</p>
                            <h4>{content[lang].aboutUs.p}</h4>
                        </div>
                    </div>

                    <div className="workday">
                        <div className="workday_top">
                            <h3 className="workday_top-title">{content[lang].aboutUs.data}</h3>
                            <p className="workday_top-time">00:00 : 00:00</p>
                        </div>
                        <ul className="workday_top-list">
                            <li className="workday_top-item">{content[lang].aboutUs.weeksm}</li>
                            <li className="workday_top-item">{content[lang].aboutUs.weekss}</li>
                            <li className="workday_top-item">{content[lang].aboutUs.weeksch}</li>
                            <li className="workday_top-item">{content[lang].aboutUs.weeksp}</li>
                            <li className="workday_top-item">{content[lang].aboutUs.weeksj}</li>
                            <li className="workday_top-item">{content[lang].aboutUs.weekssh}</li>
                            <li className="workday_top-item">{content[lang].aboutUs.weeksya}</li>
                        </ul>
                    </div>

                    <div className="about">
                        <h3>{content[lang].aboutUs.about}</h3>
                        <p className="about-text">{content[lang].aboutUs.abouttext}</p>
                    </div>


                    < div className="about">
                        <div className="about-wrpa">
                            <h3>{content[lang].aboutUs.telfon}</h3>
                            <div className="about-plus" onClick={(e) => {
                                x.current.classList.toggle("plusadd")
                                c.current.classList.toggle("nane")
                            }}>
                                <div ref={x}>
                                </div>
                            </div>
                        </div>
                        <div ref={c}>
                            <a href="tel:+998970505885">{content[lang].aboutUs.telfontext} 998970505885</a>
                        </div>
                    </div>

                    <div className="about">
                        <div className="about-wrpa">
                            <h3 className="about-title">{content[lang].aboutUs.sait}</h3>
                            <div className="about-plus" onClick={(e) => {
                                y.current.classList.toggle("plusadd")
                                b.current.classList.toggle("nane")
                            }}>
                                <div ref={y}>
                                </div>
                            </div>
                        </div>
                        <div ref={b}>

                            <div className="insta" >
                                <img src="https://my.yola.menu/media/api/social_network/ins.png" alt="" />
                                <a href="https://www.instagram.com/cyberium.uz/">{content[lang].aboutUs.saittext}</a>
                            </div>
                            <div className="insta tele" >
                                <img src="https://my.yola.menu/media/api/social_network/tg.png" alt="" />
                                <a href="https://telegram.me/Cyberium_GG">{content[lang].aboutUs.adrsaittext2es}</a>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default About;