//code
import { useState, useEffect } from "react";
import axios from "axios"; //npm install axios

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [taskText, setTaskText] = useState("");

  const [credentialUsername, setCredentialUsername] = useState("");
  const [credentialPassword, setCredentialPassword] = useState("");

  const [inputU, setInputU] = useState("");
  const [inputP, setInputP] = useState("");

  // Fetch tasks from the backend
  useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then(response => {
        setCredentialUsername(response.data.username);
        setCredentialPassword(response.data.password);
      })
      .catch(error => console.error("Error fetching tasks:", error));
  });



  const checkCredentials = () => {
    if(credentialUsername === inputU && credentialPassword === inputP){
      alert("CREDENTIALS CONFIRMED, LOGGED IN");
    } 
    else{
      console.log(credentialUsername);
      console.log(credentialPassword);
      alert("ERROR: CREDENTIALS NOT FOUND");
    }
  }


  return (
    <div style={{ textAlign: "center", marginTop: "50px", width:"10rem", margin:"auto"}}>
      <h2>Login form</h2>
      <input
        type="text" 
        value={inputU} 
        onChange={(e) => setInputU(e.target.value)} 
        placeholder={"enter username"}
      />
      <input 
        type="password" 
        value={inputP} 
        onChange={(e) => setInputP(e.target.value)} 
        placeholder={"enter password"}
      />
      <button onClick={checkCredentials}>Login</button>

    </div>
  );
}

export default App;


//