import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/header";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Publications from "./pages/publications";
import Research from "./pages/research";
import Media from "./pages/media";
import Awards from "./pages/awards";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="font-body antialiased ">
      <Header />
      <main>
        <Switch>
          <Route path={'/about'} component={About}/>
          <Route path={'/research'} component={Research}/>
          <Route path={'/publications'} component={Publications}/>
          <Route path={'/media'} component={Media}/>
          <Route path={'/awards'} component={Awards}/>
          <Route path={'/'} component={Homepage}/>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
