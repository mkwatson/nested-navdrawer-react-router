import React from 'react';
import { NavigationDrawer, ListItem } from 'react-md';
import { Switch, Route, Link } from 'react-router-dom';

const Page1 = () => (
  <h1>Page1</h1>
)

const PageA = () => (
  <h1>PageA</h1>
)

const PageB = () => (
  <h1>PageB</h1>
)

const PageC = () => (
  <h1>PageC</h1>
)

const PageD = () => (
  <h1>PageD</h1>
)

const NavLink = ({ primaryText, to, nestedItems, group }) => (
  <Route path={to} >
    {({ match }) => {

      const nestedItemComponents = nestedItems
        ? nestedItems.map(({ primaryText, to: currentTo, group, nestedItems }) => (
          <NavLink
            primaryText={primaryText}
            to={`${to}${currentTo}`}
            group={group}
            nestedItems={nestedItems}
            key={to}
          />)
        )
        : null;

      return (
        <ListItem
          component={group ? 'div' : Link}
          active={!!match}
          defaultVisible={group && !!match}
          to={to}
          primaryText={primaryText}
          nestedItems={nestedItemComponents}
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
    to: "/Page2",
    group: true,
    nestedItems: [
      {
        primaryText: "PageA",
        to: "/PageA",
      },
      {
        primaryText: "PageB",
        to: "/PageB",
      }
    ]
  },
  {
    primaryText: "Page3",
    to: "/Page3",
    group: true,
    nestedItems: [
      {
        primaryText: "PageC",
        to: "/PageC",
      },
      {
        primaryText: "PageD",
        to: "/PageD",
      }
    ]
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
          <Route path="/Page1" location={location} component={Page1} />
          {/* <Route exact path="/Page2" location={location} component={Page2} /> */}
          <Route path="/Page2/PageA" location={location} component={PageA} />
          <Route path="/Page2/PageB" location={location} component={PageB} />
          <Route path="/Page3/PageC" location={location} component={PageC} />
          <Route path="/Page3/PageD" location={location} component={PageD} />
        </Switch>
      </NavigationDrawer>

    )}
  />
)


export default App;
