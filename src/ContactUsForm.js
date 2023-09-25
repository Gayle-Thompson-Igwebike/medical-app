import React from "react";

function ContactUsForm(){
 return (
   <form>
  <legend> CONTACT US</legend>
     <div id="form-info">
       
         <div className="list-items">
             <label htmlFor="name">First Name:</label>
             <input
               className="form-border"
               type="text"
               id="name"
               name="user_name"
             />
         </div>

         <div className="list-items">
             <label htmlFor="lastname">Last Name:</label>
             <input
               className="form-border"
               type="text"
               id="lastname"
               name="user_lastname"
             />
          </div>

         <div className="list-items">
             <label htmlFor="email">Email:</label>
             <input
               className="form-border"
               type="email"
               id="email"
               name="user_email"
             />
         </div>

         <div className="list-items">
             <label htmlFor="text">Subject:</label>
             <input
               className="form-border"
               type="text"
               id="subject"
               name="subject"
             />
         </div>

         <div className="list-msg-items">
             <label htmlFor="msg">Message:</label>
             <textarea
               className="form-border"
               id="msg"
               name="user_message"
             ></textarea>
         </div>
     </div>
   </form>
 );
}





export default ContactUsForm;