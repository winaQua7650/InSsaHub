$().ready(function () {
  $(".openModal").click(function () {
    Swal.fire({
      title: "아바타를 선택해주세요.",
      html: `
      <div>
        <div>
          <img src="./img/sponge.png" class="avartar1" width="300px"/>
          <img src="./img/star.webp" class="avartar2" width="300px" />
          <br>
          <input type="radio" id="spongeBob" name="chk_info" value="spongeBob">spongeBob
          <input type="radio" id="star" name="chk_info" value="star">star
        </div>
      </div>
      `,
      input: "text",
      inputLable: "닉네임을 입력하세요",
      inputAttributes: {
        autocapitalize: "off",
      },
      width: "1000px",
      focusConfirm: true,
      preConfirm: (data) => {
        console.log(document.getElementById("spongeBob").checked);
        console.log(document.getElementById("star").checked);
        console.log(data);
        if (document.getElementById("spongeBob").checked) {
          localStorage.setItem(
            "avatar",
            document.getElementById("spongeBob").value
          );
        } else {
          localStorage.setItem("avatar", document.getElementById("star").value);
        }
        localStorage.setItem("nickname", data);
        location.href = "./inssa.html";
      },
    });
  });
});
