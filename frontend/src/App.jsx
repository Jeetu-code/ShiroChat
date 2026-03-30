  import ChatWindow from "./component/ChatWindow"
  import Sidebar from "./component/Sidebar"
  import Registrationform from "./component/registertion-form/Registrationform";
  import TypeIndicator from "./component/Typingindicator";
  import { useState } from "react";

  function App() {
const [selectedUser, setSelectedUser] = useState(null);  

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
