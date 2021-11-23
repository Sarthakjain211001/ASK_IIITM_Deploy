import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function AskAQues() {
  const navigate = useNavigate();
  const [ques, setQues] = useState({
    qtitle: "",
    descofq: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setQues({ ...ques, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { qtitle, descofq } = ques;
    fetch("/writequestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qtitle,
        descofq,
      }),
    }).then(function (response) {
      console.log(response);
      if (response.status === 422) {
        console.log("error");
      } else {
        window.alert("Successful");
        navigate("/");
      }
    });
  };
  return (
    <div className="container my-3 fontlink border shadow p-3 mb-5 bg-white rounded">
      <div className="mb-3">
        <h2>Write your Question here :</h2>
        <hr />
        <label for="QuesTitle">
          <h4>Question Title: </h4>
        </label>
        <br />
        <input
          className="form-control my-3"
          type="text"
          id="QuesTitle"
          style={{ width: "100%", height: "2.5rem" }}
          name="qtitle"
          value={ques.qtitle}
          onChange={handleInputs}
          placeholder="Question Title"
        />
        <label for="QuesDesc" className="form-label">
          <h4>Question Description: </h4>
        </label>
        <br />
        <textarea
          className="form-control my-3"
          id="QuesDesc"
          rows="10"
          name="descofq"
          value={ques.descofq}
          onChange={handleInputs}
          placeholder="Question description"
        ></textarea>
        <form>
          <div className="form-group">
            <label for="QuesFile">
              <b>Attach File :</b>
            </label>
            <br />
            <br />
            {/* <input type="file" className="form-control-file" id="QuesFile" /> */}
          </div>
        </form>
        <br />
        <button type="button" className="btn btn-primary mx-2" onClick={PostData}>
          Post the Question
        </button>
      </div>
    </div>
  );
}
