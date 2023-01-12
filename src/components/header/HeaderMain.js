import React from "react";
import { useAuth } from "../../contexts/auth-context";

const HeaderMain = (props) => {
  const { user, setUser } = useAuth();
  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-center">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user.avatar}
            alt="avatar-img"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-medium">
            Welcome back! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <button
        className="text-white text-sm p-2 bg-purple-500 ml-auto rounded-lg"
        onClick={() => setUser(null)}
      >
        Sign out
      </button>
    </div>
  );
};

export default HeaderMain;
