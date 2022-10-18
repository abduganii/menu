import Header from "../../component/header/header";
import "./categoreis.css"
const CategoreisArr = {
    RU: [
        {
            categoryId: 1,
            name: "Салаты"
        },
        {
            categoryId: 2,
            name: "Первые Блюда"
        },
        {
            categoryId: 3,
            name: "Вторые Блюда"
        },
        {
            categoryId: 4,
            name: "Соусы"
        },
        {
            categoryId: 5,
            name: "Лимонады"
        },
        {
            categoryId: 6,
            name: "Шейк"
        },
        {
            categoryId: 7,
            name: "Кофе"
        },
        {
            categoryId: 8,
            name: "Чайная Карта"
        },
        {
            categoryId: 9,
            name: "Бургеры"
        },
        {
            categoryId: 10,
            name: "Стандартные Бургеры"
        },
        {
            categoryId: 11,
            name: "Комбо"
        },
        {
            categoryId: 12,
            name: "Хот Доги"
        },
        {
            categoryId: 13,
            name: "Сэндвичи"
        }
    ],
    UZ: [
        {
            categoryId: 14,
            name: "Salatlar"
        },
        {
            categoryId: 15,
            name: "Birinchi Kurslar"
        },
        {
            categoryId: 16,
            name: "Asosiy Kurslar"
        },
        {
            categoryId: 17,
            name: "Soslar"
        },
        {
            categoryId: 18,
            name: "Limonadlar"
        },
        {
            categoryId: 19,
            name: "Shake"
        },
        {
            categoryId: 20,
            name: "Qahva"
        },
        {
            categoryId: 21,
            name: "Choy Kartasi"
        },
        {
            categoryId: 22,
            name: "Burgerlar"
        },
        {
            categoryId: 23,
            name: "Standart Burgerlar"
        },
        {
            categoryId: 24,
            name: "Kombo"
        },
        {
            categoryId: 25,
            name: "Issiq Itlar"
        },
        {
            categoryId: 26,
            name: "Sandviçlar"
        },
    ]
}


const Categoreis = ({ lang }) => {

    return (
        <>
            <Header lang={lang} />
            <>
                <ul className="Categoreis-list">
                    <h3 className="Categoreis-title">

                        Категории
                    </h3>
                    <li className="Categoreis-item Categoreis-item1 " value={0} >
                        Все
                    </li>
                    {
                        CategoreisArr[lang] && CategoreisArr[lang].map((e) => (

                            <li className="Categoreis-item" value={e.categoryId} key={e.categoryId} >
                                {e.name}
                            </li>
                        ))
                    }
                </ul>
            </>
        </>
    )
}

export default Categoreis;