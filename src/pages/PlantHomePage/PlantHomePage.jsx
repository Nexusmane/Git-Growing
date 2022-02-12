import bonsly from '../../components/Assets/bonsly.gif';
import './PlantHomePage.css';

export default function PlantHomePage() {
    return (
        <>
        <div className="home-page"> Welcome to Git Growing!</div>       
        <hr></hr>
        <h1 className="headliner"> What is Git Growing? </h1>
        <div className='desc-container'>
            <p>Git Growing is your own little safe haven for practicing that green thumb! Add and keep track of your little plant babies as they grow. </p>
        </div>
        <h1 className="headliner"> What if I don't have a green thumb? </h1>
        <div className='desc-container'>
            <p>No worries! That's what this is all about! Taking care of plants is a little more than dumping water in a pot.</p>
        </div>
        <h1 className="headliner"> I'm lost, what's a green thumb to begin with...</h1>
        <div className='desc-container'>
            <p>Glad you asked! It's a term that was coined in order to describe someone who is good at taking care of plants. Everyone can have one! All it takes is a little practice.</p>
        </div>
        
        </>
    )
}