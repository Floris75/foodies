import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import FavoriteComponent from "./pages/Favorite_page";
import ListingComponent from "./pages/Listing_page";
import RecipeDetail from "./pages/Recipe_page";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/favoris" component={FavoriteComponent} />
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route path="/recherche/name/:name" render={(props) => <ListingComponent recherche="name" {...props} />} />
        <Route path="/recherche/categorie/:categorie" render={(props) => <ListingComponent recherche="categorie" {...props} />} />
        <Route path="/recherche/ingredient/:ingredient" render={(props) => <ListingComponent recherche="ingredient" {...props} />} />
        <Route path="/recherche/pays/:pays" render={(props) => <ListingComponent {...props} />} />
        <Route path="/recherche/listcategorie/:listcategorie" render={(props) => <ListingComponent recherche="listcategorie" {...props} />} />
        <Route path="/recherche/listpays/:listpays" render={(props) => <ListingComponent recherche="listpays" {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
