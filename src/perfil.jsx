import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import Body from "./body/body.jsx";
import Profile from "./profile/profile.jsx";

function Profile_Page() {
    return (
        <>
        <div className="App">
                <Body />
                <Header />
                <Profile />
                <Footer />
        </div>
        </>
    )
}

export default Profile_Page