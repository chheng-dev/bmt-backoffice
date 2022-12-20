import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Category from "./Screen/Pages/Category/Category";
import { IndexDashboard } from "./IndexDashboard";
import LayoutContent from "./Layouts/Layout";
import Event from "./Screen/Pages/Event/index";
import CreateCategory from "./Screen/Pages/Category/Create";
import NotFound from ".//Screen/Pages/404/index"


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false
        };
    }
    signOut = () => {
        localStorage.removeItem("token");
        this.setState({
            islogout: true
        });
    };
    render() {
        if (this.state.islogout) {
            return <Redirect to="/login" />;
        }
        const { match } = this.props;
        return (
            <main role="main">
                <div className="main">
                    <LayoutContent>
                        <Switch>
                            <Route exact path={`${match.path}/category`}>
                                <Category />
                            </Route>
                            <Route path={`${match.path}/category/create`}>
                                <CreateCategory />
                            </Route>

                            <Route exact path={`${match.path}`}>
                                <IndexDashboard />
                            </Route>
                            <Route exact path={`${match.path}/event`}>
                                <Event />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </LayoutContent>
                </div>
            </main>

        )
    }
}
export default withRouter(Dashboard);