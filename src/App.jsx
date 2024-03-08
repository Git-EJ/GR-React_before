import Header from './components/Header'
import CardsContainer from './components/CardsContainer'
import Footer from './components/Footer'
import "./styles/App.css" //h1 className = reno =====> Header.css
import "./styles/Header.css"
import "./styles/Cards.css"
import "./styles/Footer.css"
import "./styles/MediaQueries.css"


function App() {

  console.log('APP TOTO')
  return (
    <div className="main-container">

      <h1 className="reno">GAILLON RENOVATION</h1>

      <Header />
      <CardsContainer />
      <Footer />

    </div>
  );
}

export default App;



