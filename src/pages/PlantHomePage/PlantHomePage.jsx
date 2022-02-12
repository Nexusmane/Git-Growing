import bonsly from '../../components/Assets/bonsly.gif';
import './PlantHomePage.css';

export default function PlantHomePage() {
    return (
        <>
        <div className="home-page"> Welcome to Git Growing!</div>
        <img src={bonsly} alt='bonsly' />

        <h2> What is Git Growing? </h2>
        </>
    )
}