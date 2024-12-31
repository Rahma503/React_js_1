import './skills.css';

function SkillSec() {
  return (
    <>
      <section className="cards" id="services">
        <h2 className="title">Skills</h2>
        {/* Single content div wrapping all cards */}
        <div className="content">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="info">
              <h3>HTML</h3>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
            <div className="info">
              <h3>CSS</h3>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-brands fa-square-js"></i>
            </div>
            <div className="info">
              <h3>JavaScript</h3>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="info">
              <h3>React JS</h3>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillSec;
