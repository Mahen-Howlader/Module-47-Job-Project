import CategoryFetures from "../Components/CategoryFetures";
import Categorylist from "../Components/Categorylist";
import Header from "../Components/Header";

function Home() {
    return (
        <div className="my-5">
            <Header></Header>
            <Categorylist></Categorylist>
            <CategoryFetures></CategoryFetures>
        </div>
    );
}

export default Home;