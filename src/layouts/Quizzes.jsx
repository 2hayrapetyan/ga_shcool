import arrow from "../images/RightArrow.png";
import bubble from "../images/Bubbles.png";
import fill from "../images/fill.png";
import outline from "../images/outline.png";

function Quizzes() {
  return (
    <>
      <div className='quizz-parent'>
        <div className='quizz-header'>
          <h3 style={{ fontWeight: "600", fontSize: "48px" }}>Quizzes</h3>
          <img src={arrow} alt='' className='quizz-arrow-right' />
          <img src={bubble} alt='' className='bubble' />
        </div>
        <div className='quizz-cards-parent'>
          <div>
            <div className='quizz-card'>
              <img src={fill} alt='' />
            </div>
            <span>English quiz</span>
          </div>
          <div>
            <div className='quizz-card'>
              <img src={outline} alt='' />
            </div>
            <span>Arabic quiz</span>
          </div>
        </div>
      </div>
      <style>{`.quizz-parent {
  padding: 60px 0 104px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
}

.quizz-cards-parent {
  margin-top: 32px;
  display: flex;
  gap: 242px;
}
.quizz-cards-parent span {
  font-size: 28px;
  font-weight: 600;
  color: #06262f;
}
.quizz-card {
  background: #0f4b5b;
  padding: 48px 88px;
  margin-bottom: 48px;
  width: 327px;
  border-radius: 16px;
}

.quizz-header {
  position: relative;
}
.quizz-arrow-right {
  position: absolute;
  top: -14%;
  left: -84%;
  transform: rotate(27deg);
}
.bubble {
  position: absolute;
  top: -96%;
  left: 118%;
}
`}</style>
    </>
  );
}

export default Quizzes;
