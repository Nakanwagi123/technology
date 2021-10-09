import React from 'react';
import "./settings.css";

function Settings() {
    return (
        <>
         <section class="casing">
             <div class="shelly">
                 <div class="shell">

                 <div class="levelone">
                     <h2 class="headings">Profile Settings</h2>
                     <div class="one">
                         <p>Theme</p>
                         <p>Send push notifications</p>
                     </div>
                 </div>
                 <div class="leveltwo">
                      <h2 class="headings">Account</h2>
                      <div class="two">
                          <p>Two-factor authentication</p>
                          <p>Mobile data use</p>
                          <p>Language</p>
                      </div>
                 </div>
                 <div class="levelthree">
                     <h2 class="headings">Support</h2>
                     <div class="three">
                         <p>Call us</p>
                         <p>Feedback</p>
                     </div>
                 </div>

                 </div>
             </div>
         </section>   
        </>
    )
}

export default Settings
