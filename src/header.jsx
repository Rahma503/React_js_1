import './header.css'
import img1 from './assets/img1.jpg'; 
function Header ()
{

return(

    <>


 <section className='main1'>
    <div>

        <h2>Hi,I'm Rahma Medhat <br /> <span>Full Stack Developer</span> </h2> 
        <br/>
        <h3>BCS from Ain-Shams University</h3>
        <br />
        <a href="#projects" className="main_btn">View my skills</a>
    </div>
    <br />
    <div className="social_icons">
            <a href="https://www.facebook.com/rahma.medhat.3785?mibextid=JRoKGi" className="fab fa-facebook" target="_blank"></a>
            <a href="https://www.instagram.com/rahma.medhat.3785/profilecard/?igsh=MWh5cXhiZXhrcWptYg==" className="fab fa-instagram" target="_blank"></a>
            <a href="https://github.com/Rahma503" className="fab fa-github" target="_blank"></a>
            <a href="https://www.linkedin.com/in/rahma-medhat-821234244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="fab fa-linkedin" target="_blank"></a>
        </div>

 </section>
   
   </>
)
 
}

export default Header;