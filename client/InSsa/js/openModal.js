$().ready(function () {
  $(".openModal").click(function () {
    Swal.fire({
      width: "1000px",
      title: "아바타를 선택해주세요.",
      // spongeBob에 기본 check 설정
      html: `
      <div>
        <div>
          <img src="./img/dove.png" class="avartar1" width="300px" height="300px"/>
          <img src="./img/mallardDuck.png" class="avartar2" width="300px" height="300px"/>
          <br>
          <input 
            type="radio" 
            id="dove" 
            name="chk_info" 
            value="dove" 
            checked>
          구둘기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          
          <input 
            type="radio" 
            id="mallardDuck" 
            name="chk_info" 
            value="mallardDuck">
          썬더독
        </div>
      </div>
      `,
      input: "text",
      inputPlaceholder: "닉네임을 입력하세요",
      inputAttributes: {
        autocapitalize: "off",
      },
      focusConfirm: true,
      // Nickname 유효성 검사
      inputValidator: (data) => {
        var checkNickname = /^[a-zA-Z0-9]{3,6}$/;

        if (checkNickname.test(data)) {
          console.log(document.getElementById("dove").checked);
          console.log(document.getElementById("mallardDuck").checked);
          console.log(data);
          if (document.getElementById("dove").checked) {
            localStorage.setItem(
              "avatar",
              document.getElementById("dove").value
            );
          } else {
            localStorage.setItem(
              "avatar",
              document.getElementById("mallardDuck").value
            );
          }
          localStorage.setItem("nickname", data);
          // inssa.html로 넘어감
          location.href = "./inssa.html";
        } else {
          return "영어 혹은 숫자로 이루어진 3글자 이상 6글자 이하의 닉네임을 설정해주세요.";
        }
      },
    });
  });
});
