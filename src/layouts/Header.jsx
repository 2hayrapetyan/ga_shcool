import Button from "../components/Button";
import Container from "../components/Container";
import dropdownicon from "../images/dropdown.png";

function Header() {
  return (
    <>
      <Container>
        <div className='header'>
          <div className='left'>
            <ul>
              <li className='logo'>GA</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='right'>
            <ul>
              <li style={{ fontWeight: 400 ,display:'flex',alignItems:'center'}} >
                Enlglish{" "}
                <img
                  src={dropdownicon}
                  alt=''
                  style={{
                    transform: "rotate(180deg)",
                  }}
                />
              </li>
              <li>Sign in</li>
              <li>
                <Button small>Sign Up</Button>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <style>{`
    .header{
      padding: 8px 0;
      background: #FFF;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .header ul{
      display: flex;
      align-items: center;
      gap: 24px;
  }
  .header ul li{
      cursor: pointer;
   padding: 10px 16px;
   color: #0F4B5B;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; 
  }
  .logo{
  font-family: Trirong;
  font-size: 48px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; 
  background:  linear-gradient(129deg, #61B5CB 11.18%, #0F4B5B 72.21%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
      `}</style>
    </>
  );
}

export default Header;
