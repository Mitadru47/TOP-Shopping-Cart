import Nav from "./Nav.jsx";
import Card from "./Card.jsx";

const Home = () => {

    return(

        <div id="home">

            <Nav />
            <h1>Home</h1>

            <div id="cards">
            
                <Card />
                <Card />

                <Card />
                <Card />

                <Card />
            
            </div>

        </div>
    );
}

export default Home;