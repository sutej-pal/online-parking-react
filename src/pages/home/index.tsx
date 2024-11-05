import Header from "../../components/header"
import SearchBar from "../../components/search-bar"
import { HomePageContainer, SiteBanner } from "./home.styles"

const HomePage = () => {
    return (
        <HomePageContainer>
            <SiteBanner>
                <Header />
                <div style={{ marginTop: '200px' }} className="d-flex justify-content-center align-items-center" >
                    <SearchBar></SearchBar>
                </div>
            </SiteBanner>
        </HomePageContainer>
    )
}

export default HomePage