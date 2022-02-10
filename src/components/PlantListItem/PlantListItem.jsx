export default function PlantListItem({ plant }) {

    function handleEdit() {
        console.log('Update Clicked')
    }

    function handleDelete() {
        console.log('Delete Clicked')
    }

    return (
        <div className='plant-container'> 
            <li> {plant.name} </li>
            <li> {plant.exposure} </li>
            <li> {plant.watering} </li>
            <li> {plant.notes} </li>
            <button type='submit' value='submit' onSubmit={handleEdit}> Update Plant </button>
            <button type='submit' value='submit' onSubmit={handleDelete}> Remove Plant </button>
        </div>
    )
}