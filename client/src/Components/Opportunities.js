import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
/*import './OppStyle.css'*/


export default function Opportunities() {
    const [opp,setOpp] = useState()
    const [data,setData] = useState({
        title:"",desc:"",location:"",experience:"",ld:""
    })
    let name,value;
    const handleInputs = (e)=>{
        console.log(e); 
        name = e.target.name;
        value = e.target.value;
        setData({...data,[name]:value});
    }
    const PostData = async(e)=>{
        e.preventDefault();
        const {title, desc, location ,experience,ld} = data;
        fetch('/writeopp', {
          method:"POST",
          headers: {
           "Content-Type":"application/json"
          },
          body: JSON.stringify({
            title, desc, location ,experience,ld
          })
       })
       .then(function(response) {
           console.log(response);
           if (response.status === 422) {
             console.log("a")
           }
           else{
             window.alert("Successful");
             window.location.reload();
           }
       })
          
      }
    const call = async () =>{
        try{
            const res = await fetch('/opportunity',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json",
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data.postedBy)
            setOpp(data);
            
            if(! res.status === 200){ 
                const error = new Error(res.error);
                throw error;
            }
         }catch(err){
          console.log(err);
         }
    }
    
     useEffect(()=>{
         call();
        },[])
     
     return (
        <div>
            <h3 className="mx-4 OppPageHeading">Opportunities</h3>
            <div className="container">
                <div className="row">
                    <div className="col-8 ViewOppBlock">
                        <div style={{ /*"border": "3px solid black",*/ /*"marginLeft": "4rem",*/ /*"marginRight": "13rem",*/ "marginTop": "3rem", "marginBottom": "3rem" }}>
                        {
                        (opp||[]).map(opps=>{
                            return(
                                <div className="card OppCard">
                                <div className="card-body" >
                                    <h4>{opps.title}</h4>
                                    <p><b>Author : {opps.postedBy && opps.postedBy.name}</b></p>
                                    <p style={{ "margin": "0px" }}>Description : {opps.desc}</p>
                                    <p style={{ "margin": "0px" }}>Location : {opps.location}</p>
                                    <p style={{ "margin": "0px" }}>Experience Required : {opps.experience}</p>
                                    <p style={{ "margin": "0px" }}>Last Date to Apply : {opps.ld}</p>
                                </div>
                            </div>
                            )
                        }) 
                        }
                        
                        </div>
                    </div>
                    <div className="col-4 PostOpportunity" >
                        <div>
                            <h5 className="PostOppHeading" >Write your Opportunity here:</h5>

                            <form method='POST' style={{ "marginLeft": "3rem" }}>
                                <div class="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name="title" class="form-control" id="title" aria-describedby="title" placeholder="Enter title" 
                                    value={data.title}
                                    onChange={handleInputs}
                                    />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="desc">Description</label>
                                    <textarea name="desc" class="form-control" id="desc" rows="3"
                                    value={data.desc}
                                    onChange={handleInputs}
                                    ></textarea>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="loc">Location</label>
                                    <input type="text" name="location" class="form-control" id="loc" aria-describedby="loc" placeholder="Enter Location" 
                                    value={data.location}
                                    onChange={handleInputs}
                                    />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="exp">Experience Required</label>
                                    <input type="text" name="experience" class="form-control" id="exp" aria-describedby="exp" placeholder="Enter the experience required" 
                                    value={data.experience}
                                    onChange={handleInputs}
                                    />
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="exp">Last Date to Apply</label>
                                    <input type="text" name="ld" class="form-control" id="ld" aria-describedby="exp" placeholder="Enter date in dd/mm/yy Format" 
                                    value={data.ld}
                                    onChange={handleInputs}
                                    />
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary" onClick={PostData}>Post</button>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

