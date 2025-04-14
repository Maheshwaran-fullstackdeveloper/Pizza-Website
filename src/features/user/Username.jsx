import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="text-sm font-semibold hidden md:block tracking-wider">
      {username ? `Hello, ${username}` : "Please log in"}
    </div>
  );
}

export default Username;
