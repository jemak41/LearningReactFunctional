import React from "react"

const ContactCard = (props) => 
    <div className="contact-card">
        <h2>{props.firstname}</h2>
        <h3>{props.lastname}</h3>       
    </div>



export default ContactCard