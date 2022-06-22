import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CardList from './components/CardList';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Notice from './components/Notice';
import { Manual, Rule, Policy, EtcInfo } from './pages/FooterMenu';
import Event from './components/Event';
import VideoTab from './components/videoList/VideoTab';
import Form from './components/Form';

function App() {
  const title = 'site';
  return (
    <div className='App'>
      <BrowserRouter>
        <Header title={title} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cardList' element={<CardList />} />
          <Route path='/notice' element={<Notice />} />
          <Route path='/manual' element={<Manual />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/rule' element={<Rule />} />
          <Route path='/etcInfo' element={<EtcInfo />} />
          <Route path='/event' element={<Event />} />
          <Route path='/video' element={<VideoTab />} />
          <Route path='/form' element={<Form />} />
        </Routes>
        <Footer title={title} />
      </BrowserRouter>
    </div>
  );
}

export default App;
