import Header from './Header';
import Generate from './Generate';
import Category from './Category';
import Footer from './Footer'
import './App.css';
;

const testItems = [];

function App() {
  return (
    <div>
      <Header />
      <Generate />
      <Category items={testItems}/>
      <Footer />
    </div>
  );
}

export default App;
