import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import PlantHomePage from "../PlantHomePage/PlantHomePage";
import NewPlantPage from "../NewPlantPage/NewPlantPage";
import PlantListPage from '../PlantListPage/PlantListPage';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";

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
            <Route path="/plants/new" element={<NewPlantPage  />} />
            <Route path="/plants/list" element={<PlantListPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;