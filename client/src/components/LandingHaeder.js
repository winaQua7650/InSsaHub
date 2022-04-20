import { Link } from "react-router-dom";
function Header() {
  const testImg = "/images/test_img1.jpg";
  return (
    // Header
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
          <Link to={"/aframe/:id"}>
            <button class="start-btn bttn-material-flat bttn-primary">
              시작하기
            </button>
          </Link>
        </div>
        <img className="test-img" src={testImg} />
      </div>
    </header>
  );
}
export default Header;
