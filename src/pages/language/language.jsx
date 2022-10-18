import Header from "../../component/header/header"
import content from "../../localization/content";
import "./language.css"

const Language = ({ lang, setLang }) => {
    return (
        <>
            <div className="container">
                <ul className="Language_list"  >
                    <h2 className="Language_title">{content[lang].langouge.title}</h2>
                    <li className="Language_item" onClick={(e) => {
                        setLang("RU")
                        window.localStorage.setItem('lang', JSON.stringify("RU"))
                    }
                    }>
                        <img src="https://yola.menu/static/vendor/img/flags/ru.png" alt="" />
                        <h3>Русский язык</h3>
                    </li>
                    <li className="Language_item" onClick={(e) => {
                        setLang("UZ")
                        window.localStorage.setItem('lang', JSON.stringify("UZ"))
                    }}>
                        <img src="https://yola.menu/static/vendor/img/flags/uz.png" alt="" />
                        <h3>O'zbek tili</h3>
                    </li>
                    <li className="Language_item">
                        <img src="https://yola.menu/static/vendor/img/flags/uz.png" alt="" />
                        <h3>o'zbek tili</h3>
                    </li>
                    <li className="Language_item">
                        <img src="https://yola.menu/static/vendor/img/flags/uz.png" alt="" />
                        <h3>o'zbek tili</h3>
                    </li>
                    <li className="Language_item">
                        <img src="https://yola.menu/static/vendor/img/flags/uz.png" alt="" />
                        <h3>o'zbek tili</h3>
                    </li>
                    <li className="Language_item">
                        <img src="https://yola.menu/static/vendor/img/flags/uz.png" alt="" />
                        <h3>o'zbek tili</h3>
                    </li>
                </ul>
            </div>
            <Header lang={lang} />
        </>
    )
}

export default Language;