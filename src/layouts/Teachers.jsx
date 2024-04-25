import HeroCard from "../components/HeroCard";
import aida from '../images/aida.png'
import gegham from '../images/gegham.png'
import arabic from '../images/arabic.png'
import english from '../images/english.png'

import './teachers.css'

function Teachers() {
    return ( 
        <>
        <div className="teachers-parent">
<h3>Our Teachers</h3>
<div style={{display:"flex",gap:'24px'}}>
    
<HeroCard image={aida} heroName={'Aida Altikulajian'} students={'500'} languageImage1={english} language1={'English'} speaking={'English,  Arabic,  Armenian'} special={'General English'}/>
<HeroCard image={gegham} heroName={'Gegham Bijoyan'} students={'1500+'}  languageImage1={english} language1={'English'} languageImage2={arabic} language2={'Arabic'} speaking={'English,  Arabic,  Russian,  Armenian'} special={'General & Business English'}/>
</div>


        </div>
        
        </>
     );
}

export default Teachers;