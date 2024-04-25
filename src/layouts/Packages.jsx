import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import arrow from "../images/Leftarrow.png";

function Packages() {
  return (
    <>
      <Container>
        <div className='packages'>
          <h2 style={{ fontSize: "48px" }}>Our Packages</h2>
          <div className='courses'>
            <div className='language'>
              <span>English</span>
              <small>Arabic</small>
            </div>
            <div className='courses-list'>
              <div>
                <Card
                  title='General English'
                  approach='individual'
                  lessons='10'
                  duration='1'
                  cost='35000'
                />
              </div>
              <div>
                <Card
                  title='General English'
                  approach='2 people in a group'
                  lessons='10'
                  duration='1'
                  cost='27000'
                />
              </div>
              <div>
                <Card
                  title='General English'
                  approach='4 people in a group'
                  lessons='10'
                  duration='1'
                  cost='25000'
                />
              </div>
              <div>
                <Card
                  title='Business English'
                  approach='individual'
                  lessons='10'
                  duration='1'
                  cost='40000'
                />
              </div>
              <img src={arrow} alt='' className='arrow' />
              <div className='right-background backgrounds'></div>
              <div className='left-background backgrounds'></div>
              <div className='bottom-background backgrounds'></div>
            </div>
          </div>
          <Button large>BOOK YOUR TRIAL LESSON</Button>
        </div>
      </Container>

      <style>
        {`
                .packages {
                        margin: 200px 65px 128px 65px;
                        display: flex;
                        flex-direction: column;
                        text-align: start;
                        align-items: center;
                        justify-content: space-between;
                        gap: 50px;
                      }
                      
                      .courses {
                        position: relative;
                        width: 100%;
                        padding: 24px 48px 80px;
                        border: 1px solid #aebecb;
                        border-radius: 30px;
                        background: #fff;
                      }
                      
                      .language span {
                        margin-right: 24px;
                        font-size: 28px;
                        font-weight: 500;
                        text-decoration: underline;
                        text-align: start;
                        color: #06262f;
                      }
                      .language small {
                        text-decoration: none;
                        font-size: 28px;
                        font-weight: 400;
                        color: #0f4b5b;
                      }
                      .courses-list {
                        position: relative;
                        margin-top: 40px;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-gap: 80px;
                      }
                      
                      .courses-list div:nth-child(4) {
                        grid-column: 2;
                        grid-row: 2;
                      }
                      .arrow {
                        position: absolute;
                        right: 180px;
                        bottom: -210px;
                      }
                      
                      .backgrounds {
                        width: 960px;
                        height: 969px;
                        z-index: -2;
                        position: absolute;
                        border-radius: 50%;
                      }
                      .right-background {
                        left: -750px;
                        top: -650px;
                        background: radial-gradient(rgba(71, 185, 103, 0.46), rgba(15, 15, 17, 0));
                        filter: blur(120px);
                      }
                      
                      .left-background {
                        right: -500px;
                        bottom: 260px;
                        background: radial-gradient(rgba(33, 139, 172, 0.46), rgba(15, 15, 17, 0));
                        filter: blur(50px);
                      }
                      .bottom-background {
                        right: -400px;
                        bottom: -350px;
                        background: radial-gradient(rgba(33, 139, 172, 0.46), rgba(15, 15, 17, 0));
                        filter: blur(50px);
                      }
                      
                `}
      </style>
    </>
  );
}

export default Packages;
