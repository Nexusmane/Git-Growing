export default function PlantListItem({ plant }) {
    return (
        <div className='plant-container'> 
            <li> {plant.name} </li>
            <li> {plant.exposure} </li>
            <li> {plant.watering} </li>
            <li> {plant.notes} </li>
        </div>
    )
}