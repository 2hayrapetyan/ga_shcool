/* eslint-disable react/no-unescaped-entities */
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import { Rating } from '@mui/material';

function WhyTrust() {
    return ( 
        <>
            <div style={{background:"#F2F2F2"}} className='trust-parent'>
                <h3 style={{fontWeight:"600",fontSize:"48px"}}>Why people trust GA School</h3>
        <div className='trust-card-parent'>
            <div  className="trust-card"> <span id='feedback'><img src={one} alt="" /> <p> David <br /><Rating       readOnly value={5}/></p></span>  <span id='text'>As someone keen on mastering both English and Arabic, I couldn't be happier with my experience at GA online school. The courses are meticulously designed, offering a perfect blend of language theory, interactive exercises, and cultural insights. The instructors are not only highly proficient in languages but also incredibly supportive, making learning an enjoyable journey. Whether you're a beginner or aiming to refine your language skills, this platform caters to all levels. </span></div>
            <div  className="trust-card"> <span id='feedback'> <img src={two} alt="" /> <p> Alyssa <br /><Rating     readOnly value={5}/></p></span> <span id='text'>This language learning page offering English and Arabic courses is a gem! The interface is sleek and intuitive, making navigation a breeze. The lessons strike a perfect balance between grammar, vocabulary, and practical usage. The inclusion of cultural insights adds depth to the learning experience. While occasional technical glitches are a minor hiccup, overall, it's an invaluable tool for bilingual learners seeking proficiency in English and Arabic.</span></div>
            <div  className="trust-card"> <span id='feedback'><img src={three} alt="" /> <p> Henrick <br /><Rating   readOnly value={5}/></p></span>  <span id='text'>I'm thoroughly impressed with this language learning page! The English and Arabic courses are comprehensive and well-structured, catering to learners of all levels. The interactive exercises and multimedia resources keep lessons engaging and dynamic. What sets it apart is the flexibility it offers; I can access lessons anytime, anywhere. Whether brushing up on grammar or honing conversation skills, this platform delivers results. </span></div>
        </div>
    </div>
 <style>
    {`
    .trust-parent {
        padding: 35px 0 35px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        gap: 56px;
      }
      
      .trust-card-parent {
        display: flex;
        gap: 56px;
      }
      .trust-card {
        background: #fff;
        padding: 19px 17px 19px 17px;
        border: 0.6px solid #337283;
        width: 364px;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        text-align: start;
        box-shadow: 0 0 4px 1px rgba(41, 103, 120, 0.25);
      }
      
      .trust-card span {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        color: #06262f;
      }
      
      #feedback {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      #feedback span {
        color: #f1c644;
      }
      `}
 </style>
        </>
     );
}

export default WhyTrust;