/* eslint-disable react/prop-types */
import './herocard.css'
import Button from './Button.jsx'
import stars from '../images/stars.png'
import user from '../images/user.png'
import teaching from '../images/teaching.png'
import speaks from '../images/speaks.png'



function HeroCard({image,heroName,students,language1,speaking,special,languageImage1,languageImage2,language2}) {
    return ( 
        <>
        
        <div className="hero-card">

            <div className="teacher-image">
                <img src={image} alt="" />
            </div>
            <div className='hero-info'>
                <h5 style={{fontSize:"32px",fontWeight:'700',color:"#0F4B5B"}}>{heroName}</h5>
                <div className='skills'>
                    <span className='skill-item'><img src={teaching} alt="" />Teaches <p><img src={languageImage1} alt="" /> {language1}  <img src={languageImage2} alt="" /> {language2}</p></span>
                    <span className='skill-item'><img src={user} alt="" />{students} <p>students</p></span>
                    <span className='skill-item'><img src={speaks} alt="" />Speaks <p>{speaking}</p></span>
                    <span className='skill-item'><img src={stars} alt="" />Specialties <p>{special}</p></span>
                </div>
                <Button full>more info</Button>
            </div>
        </div>
        </>
     );
}

export default HeroCard;