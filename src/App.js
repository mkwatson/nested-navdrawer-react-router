import React from 'react';
import { NavigationDrawer, ListItem } from 'react-md';
import { Switch, Route, Link } from 'react-router-dom';

const Page1 = () => (
  <h1>Page1</h1>
)

const Page2 = () => (
  <h1>Page2</h1>
)

const NavLink = ({ primaryText, to }) => (
  <Route path={to} >
    {({ match }) => {
      return (
        <ListItem
          component={Link}
          active={!!match}
          to={to}
          primaryText={primaryText}
        />
      );
    }}
  </Route>
)

const navItems = [
  {
    primaryText: "Page1",
    to: "/Page1"
  },
  {
    primaryText: "Page2",
    to: "/Page2"
  }
]

const App = () => (
  <Route
    render={({ location }) => (
      <NavigationDrawer
        drawerTitle="Nested Routes"
        navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
      >
        <Switch key={location.key} id="content" name="content" label="content">
          <Route exact path="/Page1" location={location} component={Page1} />
          <Route path="/Page2" location={location} component={Page2} />
        </Switch>
      </NavigationDrawer>

    )}
  />
)


export default App;
