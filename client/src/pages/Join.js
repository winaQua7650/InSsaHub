import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AvatarItem from "../components/AvatarItem";
const james = "/images/james.png";
const jenifer = "/images/jenifer.png";
const avatars = [
  {
    avatar_id: 1,
    avatar_img: james,
    avatar_descript: "제임스",
  },
  {
    avatar_id: 2,
    avatar_img: jenifer,
    avatar_descript: "제니퍼",
  },
];

function Join() {
  // 무조건 1번 선택되어있게 설정
  const [avatar, setAvatar] = useState(1);

  const clickAvatar = (avatar) => {
    setAvatar(avatar);
  };

  // useForm에 담아놓을것들
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 로컬스토리지에 담을 배열
  let nickName = [];

  // navigate 사용
  let navigate = useNavigate();

  // 데이터 유효성 검사
  const onValid = (data) => {
    console.log(data.nickName, "사용자가 입력한 닉네임");
    nickName = data.nickName;
    // 데이터 로컬 스토리지에 담아주기
    localStorage.setItem("name", JSON.stringify(nickName));

    // office로 넘어가기
    navigate("/office");
    return nickName;
  };

  return (
    <div id="join">
      <div className="choose-text"> 아바타를 선택하세요! </div>
      <div className="avatars">
        {avatars.map((it) => (
          <AvatarItem
            key={it.avatar_id}
            {...it}
            onClick={clickAvatar}
            isSelected={it.avatar_id === avatar}
          />
        ))}
      </div>
      {/* 사용자 닉네임 */}
      <div className="input-div">
        <form onSubmit={handleSubmit(onValid)}>
          <input
            {...register("nickName", {
              required: "닉네임을 입력해주세요!",
              minLength: {
                value: 2,
                message: "닉네임이 너무 짧습니다.",
              },
              maxLength: {
                value: 16,
                message: "닉네임은 최대 16자까지 가능합니다.",
              },
              // 영어 정규표현식
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: "영어로만 입력해주세요!",
              },
            })}
            className="join-input"
            placeholder="닉네임을 영어로 입력해주세요!"
          />
          <div className="error-message">{errors?.nickName?.message}</div>
          <button type="submit" className="go-btn bttn-material-flat">
            입장하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
