  import ChatWindow from "./component/ChatWindow"
  import Sidebar from "./component/Sidebar"
  import Registrationform from "./component/registertion-form/Registrationform";
  import TypeIndicator from "./component/Typingindicator";
  import { useState } from "react";
  import Navbar from "./component/landing-page/navbar";
import Herosection from "./component/landing-page/herosection";
import Chatpreview from "./component/landing-page/chatPreview";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Signin from "./component/registertion-form/signin";
import Actionmenu from "./component/Actionmenu";
import Success  from "./component/registertion-form/Success";// import { LogIn } from "lucide-react";   
import AddContect from "./component/addContect";

function LandingPage() {
  return (
    <div className="flex flex-col bg-pink-50 min-h-screen">
      <Navbar/>

      <div className="flex mt-15 items-center gap-20 justify-center px-6">
      <div className="  flex flex-col md:flex-row  justify-between items-center gap-30 md:ml-10 max-w-7xl w-full ">
        <Herosection />
        <Chatpreview />
      </div>
      </div>
    </div>
  );
}

function Chatapp(){
  const [selectedUser , setSelectedUser] = useState(null);
  return( 
<div className="flex h-screen">
        <Sidebar onSelectUser = {setSelectedUser} /> 
        <ChatWindow user={selectedUser} /> 
         <TypeIndicator/> 
      </div>

  )
}               
      
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Starting page */}
        
           <Route path="/" element={<LandingPage />} />
          
        

 {/* Signin page */}
  <Route path="/signin" element={<Signin />} />

        {/*  Login button  ye open hoga */}
        <Route path="/login" element={<Registrationform />} />

        <Route path="/chat" element={<Chatapp/>}/>

        <Route path="Success" element={<Success/>}/>

        <Route path = "sidebar" element={<Actionmenu/>}/>
        <Route path ="actionmenu" element={<Sidebar/>}/>
        <Route path="addContect" element={<AddContect/>}/>

      </Routes>
    </BrowserRouter>
  );
}


  export default App



