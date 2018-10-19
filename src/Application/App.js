import React, { Component } from "react";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";
import SearchBook from "./SearchBook";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBook />
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <Component {...props} {...rest} />}
            />
          ))}
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
