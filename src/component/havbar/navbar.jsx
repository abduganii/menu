import "./navbar.css"
import img from "../../assets/img/Abundance_Mindset_BHIyNU5.jpeg"
import { useRef, useState } from "react"
import content from "../../localization/content"

const Categoreis = {
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



const product = {
    RU: [
        {
            id: 1,
            img: "https://my.yola.menu/media/gallery/products/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-46.jpeg",
            title: "Греческий",
            text: "греческий салат из помидоров, сладкого перца, огурцов, феты, шалота и маслин, заправленный оливковым маслом с солью, чёрным перцем, душицей.",
            price: "25 000 UZS",
            categoryId: 1,
        },
        {
            id: 2,
            img: "https://my.yola.menu/media/gallery/products/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-41.jpeg",
            title: "Японский",
            text: "острый Мясной салат",
            price: "25 000 UZS",
            categoryId: 1,
        },
        {
            id: 3,
            img: "https://my.yola.menu/media/gallery/products/21.jpeg",
            title: "Борщ по Украински",
            text: "горячий заправочный суп на основе свёклы с говядиной",
            price: "20 000 UZS",
            categoryId: 2,
        },
        {
            id: 4,
            img: "https://my.yola.menu/media/gallery/products/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-376_EZCqVzD.jpeg",
            title: "Мясо по домашнему",
            text: "Мясо по домашнему",
            price: "30 000 UZS",
            categoryId: 3,
        }
    ],
    UZ: [
        {
            id: 5,
            img: "https://my.yola.menu/media/gallery/products/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-46.jpeg",
            title: "Yunon",
            text: "Yunon",
            price: "25 000 UZS",
            categoryId: 14,
        },
        {
            id: 6,
            img: "https://my.yola.menu/media/gallery/products/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-41.jpeg",
            title: "Yapon",
            text: "Yapon",
            price: "25 000 UZS",
            categoryId: 14,
        },
        {
            id: 7,
            img: "https://my.yola.menu/media/gallery/products/21.jpeg",
            title: "Ukrain tilida Borsch",
            text: "Ukrain tilida Borsch",
            price: "20 000 UZS",
            categoryId: 15,
        },
        {
            id: 8,
            img: "https://my.yola.menu/media/gallery/products/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD_%D0%B1%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-376_EZCqVzD.jpeg",
            title: "Uy qurilishi go'shti",
            text: "Uy qurilishi go'shti",
            price: "30 000 UZS",
            categoryId: 16,
        }
    ]
}




const Navbar = ({ lang }) => {
    const [categoryId, setcategoryId] = useState()
    const x = useRef()
    const y = useRef()

    return (
        <>

            <div className="Navbar">
                <div className="container">
                    <img className="Navbar-img" src={img} alt="" />

                    <ul className="Navbar-list">

                        <li value={0} className="Navbar-item" onClick={() => {
                            x.current.classList.remove("none")
                            y.current.classList.add("none")
                        }}>
                            {content[lang].aboutUs.All}
                        </li>
                        {
                            Categoreis[lang] && Categoreis[lang].map((e) => (
                                <li className="Navbar-item" value={e.categoryId} key={e.categoryId} onClick={(e) => {
                                    y.current.classList.remove("none")
                                    x.current.classList.add("none")
                                    setcategoryId(e.target.value)
                                }}>

                                    {e.name}

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <main>
                <div className="container">
                    <div ref={y}>
                        {
                            Categoreis[lang] && Categoreis[lang].map((e) => (
                                categoryId === e.categoryId ? <h2 className="product-title" key={e.id}>{e.name}</h2> : ""
                            ))
                        }
                        <ul className="product-list">
                            {
                                product && product[lang].map((e) => (
                                    categoryId === e.categoryId ?
                                        <li className="product-item" key={e.id}>
                                            <img src={e.img} alt="" />
                                            <div>
                                                <h3>{e.title}</h3>
                                                <div>
                                                    <span>{e.price}</span>
                                                </div>
                                            </div>
                                        </li> : ""
                                ))
                            }
                        </ul>
                    </div>

                    <div ref={x}>

                        <h2 className="product-title">
                            All
                        </h2>

                        <ul className="product-list ">
                            {
                                product && product[lang].map((e) => (

                                    <li className="product-item" key={e.id}>
                                        <img src={e.img} alt="" />
                                        <div className="product-wrapper">
                                            <h3>{e.title}</h3>
                                            <div>
                                                <span>{e.price}</span><br />
                                                <span>{Math.ceil(parseInt(e.price) / 1.1143) / 10} $</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>


            </main>
        </>
    )
}


export default Navbar;