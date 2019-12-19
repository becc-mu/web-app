import React from 'react';
import './App.css';
import MainContent from './components/MainSection/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';


// function App() {
//   return (
//     <div className="App">
//           <Header />
//       <main className="App-content">
//         <MainContent />
//       </main>
//         <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}


export default App;
