import "./contact.css"

const Contact = ()=>{
    return(<>
        <div className="contact-outer" id="contact">
            <div className="contact-inner">
            <h1 className="form-heding">Send Your Message </h1>
                <form action="" className="form">
                    <lable className="lable">Name</lable>
                        <input type="text" className="input-text"/>
       
                    <lable className="lable">E-Mail</lable>
                        <input type="email" className="input-text"/>
              
                    <lable className="lable">Message</lable>
                        <textarea type="text" className="input-textarea"/>
                
                    <lable className="lable">Send</lable>
                        <input type="submit" className="input-submit"/>
                    
                </form>
            </div>
        </div>
    </>)
}

export default Contact