const Main = ({ product }) => {

    const categoryId = JSON.parse(window.localStorage.getItem("categoryId")) || 0
    let filter = product.ru.filter((e) => e.categoryId == categoryId)
    console.log(filter)
    return (
        <main>
            <div className="container">
                <ul className="product-list">
                    {
                        filter && filter.map((e) => (
                            <li className="product-item" key={e.id}>
                                <img src={e.img} alt="" />
                                <div>
                                    <h3>{e.title}</h3>
                                    <div>
                                        <span>{e.price}</span>
                                    </div>
                                </div>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </main>
    )
}

export default Main;