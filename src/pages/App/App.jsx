import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import PlantHomePage from "../PlantHomePage/PlantHomePage";
import NewPlantPage from "../NewPlantPage/NewPlantPage";
import PlantListPage from '../PlantListPage/PlantListPage';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import bonsly from '../../components/Assets/bonsly.gif';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
        <>
        <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route path="/plants/home" element={<PlantHomePage />} />
            <Route path="/plants/new" element={<NewPlantPage  user={user}/>} />
            <Route path="/plants/list" element={<PlantListPage user={user}/>} />
          </Routes>
        <img className='gif' src={bonsly} alt='bonsly' />
        <h5> "Hey {user.name}, are you lost? Click on a link in the options above to Git Growing!"</h5>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
      <footer>
        <div>  All Rights Reserved, &copy; 2022 Made J.Cole Coding</div>
      </footer>
    </main>
  );
}

export default App;