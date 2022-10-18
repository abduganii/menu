import Navbar from "../../component/havbar/navbar";
import Header from "../../component/header/header";


const Home = ({ lang }) => {
    return (
        <>
            <Header lang={lang} />
            <Navbar lang={lang} />

        </>
    );
}

export default Home;