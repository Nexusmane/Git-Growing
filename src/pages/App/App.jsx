import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import NewPlantPage from "../NewPlantPage/NewPlantPage";
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
            <Route path="/plants/new" element={<NewPlantPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;