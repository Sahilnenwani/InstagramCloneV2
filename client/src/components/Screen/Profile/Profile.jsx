import React from 'react'

const Profile = ()=> {
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
                    <h4>Sharoz Raees</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width:'108%'
                    }}>
                        <h5>56 posts</h5>
                        <h5>122 followers</h5>
                        <h5>465 following</h5>
                    </div>
                </div>
            </div>
        
        <div className="gallery">
                    <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <img className="item" src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
        </div>
        
        </div>
    )
}

export default Profile
