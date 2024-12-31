import './about.css'

function AboutSec()
{
   return(
    <>
    <div className='aboutheader'>
        <h1>About Me</h1>
    </div>
    
    <div className='aboutpara'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore quod error rem modi enim deleniti, quaerat officia beatae dolorem officiis mollitia illum in ex suscipit laborum? Quis, aperiam neque!</p>
    </div>

    <div>
      <button className='btncv'>
        <a href="/Rahma Medhat-1(my cv).pdf" download="Rahma Medhat-1(my cv).pdf" >
          Download CV
        </a>
      </button>
    </div>
    
    </>
   )
}

export default AboutSec