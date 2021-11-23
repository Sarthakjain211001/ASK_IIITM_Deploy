import logo from "./logo.svg";
import "./index.css";
import "./App.css";
import React,{createContext,useReducer,useEffect,useContext} from 'react'
import {reducer,initialState} from './reducers/userReducer'; 
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Aboutus from "./Components/Aboutus";
import Opportunities from "./Components/Opportunities";
import Profile from "./Components/Profile";
import Qna from "./Components/Qna";
import Question_page from "./Components/Question_page";
import GiveAnswer from "./Components/GiveAnswer";
import Write_a_comment from "./Components/Write_a_comment";
import Comments_for_an_answer from "./Components/Comments_for_an_answer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Footer from "./Components/footer";

import Blogs from "./Components/Blogs";
import Viewblog from "./Components/viewblog";
import WriteACommentOnBlog from "./Components/writeacommentonblog";
import Blogcomments from "./Components/blogcomments";
import Newblog from "./Components/writeanewblog";
import Logout from "./Components/Logout";
import Error_page from "./Components/Error_page";
import AskAQues from "./Components/AskAQues";

export const UserContext = createContext()

const Routing = ()=>{
  const navigate = useNavigate();
  const {state,dispatch} = useContext(UserContext)
  
  const user = state;
  useEffect(() => {
    console.log(typeof(user))
    if(user){
      
       dispatch({type:"USER",payload:user})
       navigate('/')
    }else{
       navigate('/login')
    }
 },[])
  return (
      
      <Routes>
        <Route exact path="/" element={<Qna />} />
        <Route exact path="/about" element={<Aboutus />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/viewblog/:blogid" element={<Viewblog />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/writeanewblog" element={<Newblog />} />
        <Route exact path="/question/:quesid" element={<Question_page />} />
        <Route exact path="/opportunities" element={<Opportunities />} />
        <Route exact path="/myprofile" element={<Profile />} />
        <Route exact path="/giveanswer/:quesid" element={<GiveAnswer />} />
        <Route exact path="/askQuestion" element={<AskAQues />} />

        <Route
          exact
          path="/viewblog/writeacommentonblog"
          element={<Viewblog writeacommentonblog={<WriteACommentOnBlog />} />}
        />
        <Route
          exact
          path="/viewblog/blogcomments"
          element={<Viewblog blogcomments={<Blogcomments />} />}
        />
        <Route
          exact
          path="/question/postComment"
          element={<Question_page postComment={<Write_a_comment />} />}
        />
        <Route
          exact
          path="/question/viewComments"
          element={<Question_page viewComments={<Comments_for_an_answer />} />}
        />
        <Route path="*" element={<Error_page />} />
      </Routes>
  );
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <Router>
      <Navbar />
      <Routing/>
      <Footer />
    </Router>
    </UserContext.Provider>
  );
}

export default App;

// <Navbar />
//       <Routes>
//         <Route exact path="/" element={<Qna />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route exact path="/blogs" element={<Blogs />} />
//         <Route exact path="/viewblog" element={<Viewblog />} />
//         <Route
//           exact
//           path="/viewblog/writeacommentonblog"
//           element={<Viewblog writeacommentonblog={<WriteACommentOnBlog />} />}
//         />
//         <Route
//           exact
//           path="/viewblog/blogcomments"
//           element={<Viewblog blogcomments={<Blogcomments />} />}
//         />
//         <Route exact path="/writeanewblog" element={<Newblog />} />
//         <Route exact path="/question" element={<Question_page />} />
//         <Route exact path="/opportunities" element={<Opportunities />} />
//         <Route exact path="/myprofile" element={<Profile />} />
//         <Route exact path="/giveanswer" element={<GiveAnswer />} />
//         <Route
//           exact
//           path="/question/postComment"
//           element={<Question_page postComment={<Write_a_comment />} />}
//         />
//         <Route
//           exact
//           path="/question/viewComments"
//           element={<Question_page viewComments={<Comments_for_an_answer />} />}
//         />
//       </Routes>
//     </Router>
