import React from "react";
import { Link } from "react-router-dom";
// import swal from "sweetalert";

function Landing() {
  const testImg = "/images/test_img1.jpg";
  const testImg2 = "/images/test_img2.png";
  const testImg3 = "/images/test_img3.jpg";

  return (
    <div id="landing">
      <header id="header">
        <div className="main">
          <div className="main-text">
            <div className="header-text">In Ssa Hub에 오신걸 환영합니다!</div>
            <div className="description-text">
              두명의 사용자와 마음껏 대화를 나눠보세요!
              <br />
              어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고
              <br />
              어쩌고저쩌고어쩌고저쩌고어쩌고
              <br />
              어쩌고저쩌고어쩌고저쩌고어쩌고
            </div>
            <Link to={"/join"}>
              <button class="start-btn bttn-material-flat">시작하기</button>
            </Link>
          </div>
          <img className="test-img" src={testImg} alt="test1" />
        </div>
      </header>
      <div id="footer">
        <div className="footer-img">
          <img className="test-img2" src={testImg2} alt="test2" />
          <img className="test-img3" src={testImg3} alt="test3" />
        </div>
      </div>
    </div>
  );
}
export default Landing;
