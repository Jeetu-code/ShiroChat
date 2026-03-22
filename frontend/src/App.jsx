  import ChatWindow from "./component/ChatWindow"
  import Sidebar from "./component/Sidebar"
  import Registrationform from "./component/registertion-form/Registrationform";
  import TypeIndicator from "./component/Typingindicator";
  import { useState } from "react";

  function App() {
const [selectedUser, setSelectedUser] = useState(null);  
  // const user = {
  //     name: "Ravi Yadav",
  //     avatar: "https://i.pravatar.cc/100",
  //     status: "online"          
  //   } 

    return (
      <div className="flex h-screen">
        { <Registrationform/> }
        <Sidebar onSelectUser = {setSelectedUser} />
        <ChatWindow user={selectedUser} />
        <TypeIndicator/>
        
        
      </div>
    )
  }

  export default App
