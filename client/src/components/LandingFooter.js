function Footer() {
  const testImg2 = "/images/test_img2.png";
  const testImg3 = "/images/test_img3.jpg";

  return (
    <div id="footer">
      <div className="footer-img">
        <img className="test-img2" src={testImg2} />
        <img className="test-img3" src={testImg3} />
      </div>
    </div>
  );
}
export default Footer;
