import PlantPostForm from "../../components/PlantPostForm/PlantPostForm";
import './NewPlantPage.css';

function NewPlantPage({ user }) {

  return (
    <>
    <h1>Ready to add a new plant {user.name}?</h1>
    <hr></hr>
    <PlantPostForm />
    </>
  )
}

export default NewPlantPage;