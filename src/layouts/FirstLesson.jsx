import Button from "../components/Button";
import bubble from "../images/Bubbles.png";

function FirstLesson() {
  return (
    <>
      <div className='lesson-parent'>
        <h3>Book Your First Lesson Free</h3>
        <Button large>Start now</Button>
        <img src={bubble} alt='' />
      </div>
      <style>
        {`.lesson-parent {
  position: relative;
  display: flex;
  padding: 40px 0;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  background: #cad9dd;
  text-align: center;
}
.lesson-parent h3 {
  font-size: 64px;
  font-weight: 500;
  line-height: 75px;
  color: #06262f;
  max-width: 450px;
}
.lesson-parent img {
  position: absolute;
  top: 22%;
  left: 27%;
}
`}
      </style>
    </>
  );
}

export default FirstLesson;
