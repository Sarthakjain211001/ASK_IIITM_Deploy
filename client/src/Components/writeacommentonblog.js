import React from "react";
import { Link } from "react-router-dom";

export default function WriteACommentOnBlog() {
  return (
    <div>
      <div className="container " style={{ margin: "0 auto", width: "55%" }}>
        <h4 className="WriteComment">Write your comment here:</h4>
        <textarea
          class="form-control my-2 WritecommentBox"
          id="yourComment"
          rows="3"
        ></textarea>
        <button type="button" class="btn btn-primary my-2 postComment">
          Post the comment
        </button>
        <Link to="/viewblog">
          <button type="button" class="btn btn-primary my-2">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
}

{
  /* <div className="container " style={{ margin: "0 auto", width: "55%" }}>
        <h4 className="WriteComment">Write your comment here:</h4>
        <textarea
          class="form-control my-2 WritecommentBox"
          id="yourComment"
          rows="3"
        ></textarea>
        <button type="button" class="btn btn-primary my-2 postComment">
          Post the comment
        </button>
        <Link to="/viewblog">
          <button type="button" class="btn btn-primary my-2">
            Cancel
          </button>
        </Link> */
}
