import "./PlantListItem.css";

export default function PlantListItem({ plant }) {

    function handleEdit() {
        console.log('Update Clicked')
    }

    function handleDelete() {
        console.log('Delete Clicked')
    }

    return (
        <div className='plant-container'> 
            <li className="PlantListItem">
                <span className="plant-field"> Plant Name: </span> 
                {plant.name} 
            </li>
            <li className="PlantListItem">
                <span className="plant-field"> Desired Sunlight Exposure: </span>
                {plant.exposure} 
            </li>
            <li className="PlantListItem"> 
                <span className="plant-field"> Watering Frequency: </span>
                {plant.watering} 
            </li>
            <li className="PlantListItem"> 
                <span className="plant-field"> Plant Notes: </span>
                {plant.notes} 
            </li>
            <button 
                type='submit'
                value='submit'
                onSubmit={handleEdit}
                className="list-button"> Update Plant 
            </button>
            <button 
                type='submit' 
                value='submit' 
                onSubmit={handleDelete}
                className="list-button"> Remove Plant 
            </button>
        </div>
    )
}