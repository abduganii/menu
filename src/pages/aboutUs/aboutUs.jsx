import About from "../../component/about/about";
import Header from "../../component/header/header";

const AboutUs = ({ lang }) => {

    return (
        <>
            <About lang={lang} />
            <Header lang={lang} />
        </>
    )
}


export default AboutUs;