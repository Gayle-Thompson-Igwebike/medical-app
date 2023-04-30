import React from "react";

function ContactUsForm(){
 return (
   <form>
     <div id="form-info">
       <ul>
         <div>
           <li>
             <label for="name">Name:</label>
             <input
               className="form-border"
               type="text"
               id="name"
               name="user_name"
             />
           </li>
         </div>

         <div>
           <li>
             <label for="name">LastName:</label>
             <input
               className="form-border"
               type="text"
               id="lastname"
               name="user_lastname"
             />
           </li>
         </div>

         <div>
           <li>
             <label for="mail">Email:</label>
             <input
               className="form-border"
               type="email"
               id="mail"
               name="user_email"
             />
           </li>
         </div>

         <div>
           <li>
             <label for="name">Subject:</label>
             <input
               className="form-border"
               type="text"
               id="subject"
               name="subject"
             />
           </li>
         </div>

         <div>
           <li>
             <label for="msg">Message:</label>
             <textarea
               className="form-border"
               id="msg"
               name="user_message"
             ></textarea>
           </li>
         </div>
       </ul>
       <button id="submitBtn"> Submit </button>
     </div>
   </form>
 );
}





export default ContactUsForm;