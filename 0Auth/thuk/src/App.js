import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            style={{
              cursor: "pointer",
              backgroundColor: "#FF2E2E",
              color: "white",
              borderRadius: "5px",
              border: "none",
              padding: "5px 10px",
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          style={{
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
            borderRadius: "5px",
            border: "none",
            padding: "5px 10px",
            marginTop: "5rem"
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
}

export default App;

// raviYadav0
// ravi@gmail.com
// domain :- dev-wap9g4vv.us.auth0.com
// client Id :- D2NOk64UA8n3CclENmjHz5Z9SLEYofCk
// client secret :- ZLJGY9tceHmiZzSbwsBviMALckHvfbQKQqjJQZ44v9ZjwaS7qLNIo0FUvJ9uoEAW
