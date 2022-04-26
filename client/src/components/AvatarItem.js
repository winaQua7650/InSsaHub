// AvatarItem Prop 받기
const AvatarItem = ({
  avatar_id,
  avatar_img,
  avatar_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(avatar_id)}
      className={[
        "avatar-item",
        isSelected ? `avatar-item-on` : `avatar-item-off`,
      ].join(" ")}
    >
      {/* <img className="avatar" src={avatar_img}></img> */}
      <img className={[`avatar-${avatar_id}`]} src={avatar_img} alt="avatar" />
      <span>{avatar_descript}</span>
    </div>
  );
};

export default AvatarItem;
