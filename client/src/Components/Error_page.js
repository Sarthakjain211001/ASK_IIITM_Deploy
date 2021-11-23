import React from 'react'
import { Link } from 'react-router-dom'
import sadimg from './sad404.svg'

export default function Error_page() {
    return (
        <>
     <img src={sadimg} style={{"width":"15rem", "height":"15rem", "marginLeft":"35.5rem"}}></img>
<div class="card" style={{"marginLeft": "20rem","marginRight": "20rem" }}>
  <div class="card-header">
  <h3 style={{"textAlign":"center"}}>Oops! Page not found</h3>
  </div>
  <div class="card-body">
    <h1 class="card-title" style={{"textAlign":"center"}} >404</h1>
    <h4 class="card-text" style={{"textAlign":"center"}}>We are sorry, but the page you requested was not found</h4>
    <Link to="/" class="btn btn-primary" style={{"marginLeft":"18.6rem", "marginTop":"2rem"}}>Back to Home</Link>
  </div>
</div>
        </>
    )
}
