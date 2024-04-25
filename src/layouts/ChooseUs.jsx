
import  tutor from'../images/tutorMatch.svg.png'
import group from '../images/Group.png'
import vocabulary from'../images/personalVocabulary.svg.png'
import arrow from '../images/RightArrow.png'

function ChooseUs() {
    return ( <>
    
    <div style={{background:"#F2F2F2"}} className='choose-parent'>
            <div className='choose-header'>
                <h3 style={{fontWeight:"600",fontSize:"48px"}}>Why choose GA School</h3>
        <img src={arrow} alt="" className='arrow-right'/>
                </div>
        <div className='cards-parent'>
            <div  className="choose-card"> <span className='icons'><img src={group} alt="" />    </span>  <span>We offer personalised approach.</span></div>
            <div  className="choose-card"> <span className='icons'>  <img src={tutor}  alt="" />   </span> <span>Our teachers are experienced.</span></div>
            <div  className="choose-card"> <span className='icons'>   <img src={vocabulary} alt="" /></span>  <span>We provide you with the needed literature.</span></div>
        </div>
    </div>
    <style>
        {`
        .choose-parent {
            padding: 24px 0 48px;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: space-between;
            align-items: center;
            gap: 73px;
          }
          
          .cards-parent {
            display: flex;
            gap: 26px;
          }
          .choose-card {
            background: #22849e;
            padding: 24px;
            width: 364px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            gap: 40px;
            text-align: start;
          }
          
          .choose-card span {
            font-size: 28px;
            font-weight: 700;
            line-height: 32.81px;
            color: #fff;
          }
          
          .icons {
            padding: 8px;
            border-radius: 50%;
            width: 64px;
            height: 64px;
            background: #3d93aa;
          }
          .choose-header {
            position: relative;
          }
          .arrow-right {
            position: absolute;
            top: 9%;
            left: -29%;
          }
          
        `}
    </style>
    </> );
}

export default ChooseUs;