import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export default function GiveAnswer() {
  const navigate = useNavigate();
  const { quesid } = useParams();
  const [ans, setAns] = useState({
    answer: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setAns({ ...ans, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { answer } = ans;
    fetch(`/answer/${quesid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer
      }),
    }).then(function (response) {
      console.log(response);
      if (response.status === 422) {
        window.alert("Not Successful");
      } else {
        window.alert("Successful");
        navigate(`/question/${quesid}`);
      }
    });
  };
    return (
        <div className="container my-3">
            <div className="mb-3">
  <label htmlFor="answer" className="form-label"><h4>Write your answer here :</h4></label>
  <hr/>
  <textarea className="form-control my-5" id="answer" name="answer" value={ans.answer} onChange={handleInputs} rows="10"></textarea>
  <form>
  <div className="form-group">
    <label for="exampleFormControlFile1" style={{"":""}}><b>Attach File :</b></label><br/><br/>
    {/* <input type="file" className="form-control-file" id="exampleFormControlFile1"/> */}
  </div>
</form>
<br/>
  <button type="button" className="btn btn-primary mx-2" onClick={PostData}>Post the answer</button>
</div>
        </div>
    )
}
