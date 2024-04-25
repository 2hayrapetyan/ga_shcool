import Container from "../components/Container";
import insta from "../images/instagram.png";
import "./footer.css";

function Footer() {
  return (
    <>
      <div style={{ background: "#0F4B5B" }}>
        <Container>
          <div className='footer-section-one'>
            <div className='about-us'>
              <div>
                <ul>
                  <li id="heading">About us</li>
                  <li>About GA School</li>
                  <li>GA School Blog</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li id="heading">Teachers</li>
                  <li>Gegham Bijoyan</li>
                  <li>Aida Altikulajyan</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li id="heading">Quizzes</li>
                  <li>English quiz</li>
                  <li>Arabic quiz</li>
                </ul>
              </div>
            </div>
            <div className='contact-us'>
              <ul>
                <li className='footer-logo'>GA</li>
                <li>
                  <img src={insta} alt='' />
                </li>
                <li>(+962 7) 96-44-98-12</li>
                <li>galanguagecenter@gmail.com</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className='footer-section-two'>
          <p>© 2024 GA School. All rights reserved.</p>
        </div>
      </Container>
    </>
  );
}

export default Footer;
