import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Qna() {
  const [ques, setQues] = useState();
  const call = async () => {
    try {
      const res = await fetch("/questions", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setQues(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    call();
  }, []);
  return (
    <>
      <div>
        <h3
          className="mx-4 fontlink"
          style={{ marginTop: "2rem", marginBottom: "-1rem" }}
        >
          Q&A Section
        </h3>
        <Link
              to={"/askQuestion"}
              style={{ textDecoration: "none", color: "teal" }}
            >
        <button
          className="btn btn-primary fontlink"
          style={{
            float: "right",
            marginRight: "2rem",
            marginTop: "-1.2rem",
            borderRadius: "2rem",
          }}
        >
          Ask a Question
        </button>
        </Link>
     
      </div>
      {
          (ques||[]).map(Q=>{
            return(
      
      <div className="accordion fontlink2" id="accordionExample">
        <div
          className="accordion-item mb-4"
          style={{ backgroundColor: "#bfbfbf" }}
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed "
              style={{ backgroundColor: "#f7f7f7" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {/* <button className="mx-2"><img src="upvote.png" width="20" height="20"></img></button> */}
              <span>
                {" "}
                <h4 style={{ display: "inline" }}>
                  <b> {Q.qtitle} </b>
                </h4>
                <p
                  className="mx-1 badge px-2 py-1 "
                  style={{ backgroundColor: "#383838" }}
                >
                  Tag 1
                </p>
                <p
                  className="mx-1 badge px-2 py-1 "
                  style={{ backgroundColor: "#383838" }}
                >
                  Tag 2
                </p>
                <p>Author : {Q.postedBy&&Q.postedBy.name}</p>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body font-weight-bold">
              <strong>
               {Q.descofq}
              </strong>
              <br />
              <br />
              <Link
                className="btn btn-sm btn-primary"
                role="button"
                to={`/question/${Q._id}`}
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
          </div>
            )
          })
        }
   
    </>
  );
}
