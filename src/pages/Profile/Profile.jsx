import { useAuth } from "../../context/AuthContext";
import "./profile.css";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Please login first.</h2>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h1>{user.name}</h1>

        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Member Since:</strong> 2026
          </p>

          <p>
            <strong>Status:</strong> Active Customer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;