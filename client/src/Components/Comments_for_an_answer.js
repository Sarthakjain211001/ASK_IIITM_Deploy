import React from 'react'
import { Link } from 'react-router-dom'
export default function Comments_for_an_answer() {
    return (
        <div>
            <div className="container answer_comment" style={{"margin":"0 auto", "width":"70%"}}>
                <br/>
                <h4>Comments:</h4>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <p>Author : UserName</p>
                    </div>
                </div>
                <Link to="/question"><button type="button" class="btn btn-primary my-3">Cancel</button></Link>
            </div>
        </div>
    )
}
