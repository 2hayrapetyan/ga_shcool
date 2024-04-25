import Container from "../components/Container";
import hero from "../images/hero.png";
import Button from "../components/Button";

function Hero() {
  return (
    <>
      <div className='hero'>
        <Container>
          <div
            style={{
              display: "flex",
              margin: "46px 0 -7px 0",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div className='text'>
              <h2 style={{ marginBottom: "30px" }}>
                Book Your First Lesson Free
              </h2>
              <Button large>START NOW</Button>
            </div>
            <div className='hero-image'>
              <img src={hero} alt='' />
            </div>
            <div className='results'>
              <div className='result-item'>
                <h4>2</h4>
                <span>teachers</span>
              </div>
              <div className='result-item'>
                <h4>2000+</h4>
                <span>students</span>
              </div>
              <div className='result-item'>
                <h4>4+</h4>
                <span>years of experience</span>
              </div>
              <div className='result-item'>
                <h4>12+</h4>
                <span>countries</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <style>
        {`
      .hero {
  background: radial-gradient(
    71.13% 74.78% at 77.74% 56.62%,
    rgba(91, 208, 239, 0.69) 22.18%,
    rgba(19, 120, 147, 0.69) 53.69%,
    rgba(1, 98, 124, 0.77) 87.34%
  );
  height: 100%;
}
.hero h2 {
  color: #fff;
  font-size: 75px;
  line-height: 77px;
}
.hero-image img {
  max-height: 820px;
  object-fit: contain;
}
.text {
  min-width: 520px;
}

.results {
  background: #fff;
  border-radius: 30px;
  width: 1100px;
  padding: 36px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 135px;
  position: absolute;
  left: 95px;
  bottom: -125px;
  color: #0f4b5b;
}
.result-item h4 {
  font-size: 48px;
}
.result-item span {
  font-size: 20px;
}
`}
      </style>
    </>
  );
}

export default Hero;
