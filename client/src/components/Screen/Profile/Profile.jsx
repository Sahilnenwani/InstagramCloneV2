import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../../App'
const Profile = ()=> {


    const[mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    console.log(state)
    useEffect(()=>{

        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>setPics(result.mypost))


    },[])


    return (
       
        <div style={{
            maxWidth:"550px",margin:"0px auto"
        }}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"

            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src="https://instagram.fkhi2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/33322403_1511327815661713_7310469237590458368_n.jpg?_nc_ht=instagram.fkhi2-1.fna.fbcdn.net&_nc_ohc=NqfklR4PdMUAX9GV1pQ&oh=6c04544b816dee5133a8f57ab2043808&oe=5F67DCDA"
                    />
                </div>
                <div>
                    <h4> {state?state.name:"loading"} </h4>
                    <h4> {state?state.email:"loading"} </h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width:'108%'
                    }}>
                        <h6>{mypics.length} posts</h6>
                        <h6>{state?state.followers.length:"0"} followers</h6>
                        <h6>{state?state.following.length:"0"} following</h6>
                    </div>
                </div>
            </div>
        
        <div className="gallery">
            {
                mypics.map(item=>{
                    return(
                       
                       <img key={item._id} className="item" src={item.photo}  alt={item.title} />
                    )
                })
            }
                   
       </div>
        
        </div>
    )
}

export default Profile
