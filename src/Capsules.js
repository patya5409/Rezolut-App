import {useState,useEffect} from "react";
import axios from "axios";

function Capsules() {

	const baseURL = "https://api.spacexdata.com/v3/capsules?limit=3";

	const getAllCapsulesURL = "https://api.spacexdata.com/v3/capsules";

	const launchesURL="https://api.spacexdata.com/v3/launches";

	const [totalPosts,setTotalPosts]=useState([]);



    const [posts,setPost]=useState([]);

    const [totalNumOfPosts,setTotalNumOfPosts]=useState(1);

    const clickEvent=(pageNum)=>{
    	console.log(pageNum);
    	let numu=3*(pageNum-1);
    	console.log(numu)
    	axios.get(baseURL+"&offset="+numu).then((response)=>{
    		console.log(response);
    		setPost(response.data);
    	})
    }


    useEffect(()=>{
    	axios.get(getAllCapsulesURL).then((response1) => {
	      console.log(response1.data);
	    });

	    /*axios.get(launchesURL).then((response1) => {
	      console.log(response1.data);
	    });*/

    	axios.get(baseURL).then((response) => {
    		console.log(response.headers)
    		setTotalNumOfPosts(Object.values(response.headers)[4]);
	      	setPost(response.data);
	    });
    },[]);


    return(
        <div className="Capsules">
        	<div className="container">
        		<div className="row">
        			<div className="col-4">
        				<div className="filtersBlock"></div>
        			</div>
        			<div className="col-8">
        				<table className="table table-hover stylePad">
						  <thead>
						    <tr className="incHei">
						      <th scope="col">Serial</th>
						      <th scope="col">Landings</th>
						      <th scope="col">Missions</th>
						      <th scope="col">Details</th>
						      <th scope="col">Status</th>
						      <th scope="col">Type</th>
						    </tr>
						  </thead>
						  <tbody>
			                {posts.map((post)=> (
			                    <tr key={post.capsule_serial}>
			                        <td>{post.capsule_serial}</td>
			                        <td>{post.landings}</td>
			                        <td>{/*post.missions?.[0]?.name*/post.missions.length}</td>
			                        <td>{post.details?post.details:'-'}</td>
			                        <td>{post.status}</td>
			                        <td>{post.type}</td>
			                    </tr>
			                ))}
			            	</tbody>
						</table>
        			</div>
        		</div>
         		<div className="row">
         			<div className="col-4"></div>
         			<div className="col-8 nums">
         				<ul className="pagi">
         					{Array.from(Array(Math.floor(totalNumOfPosts/3)), (e, i) => {
							    return <li key={i+1} onClick={()=>{clickEvent(i+1)}}>{i+1}</li>
							 })}
         				</ul>
         			</div>
         		</div>
        	</div>
        </div>
    );
}

export default Capsules;