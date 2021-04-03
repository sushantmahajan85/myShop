import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Pricing from "./Pricing";
import Applications from "./Applications";
import About from "./About";
import Footer from "./Footer";
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/myShop/" component={Home} />
                        <Route
                            exact
                            path="/myShop/pricing"
                            component={Pricing}
                        />
                        <Route
                            exact
                            path="/myShop/applications"
                            component={Applications}
                        />
                        <Route exact path="/myShop/about" component={About} />
                        <Route exact path="/myShop/xyzform" component={Form} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
