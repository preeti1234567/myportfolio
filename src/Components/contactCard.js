import React from 'react';
const Contact = ()=>{
    return (
        
    <div className="card" id="body">
        <h5 className="card-header">Contact</h5>
        <div className="card-body">
            <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-info" id="submitContact">Submit</button>
            <div className="alert alert-success alert-dismissible fade show" role="alert" id="showMessage">
                <strong>Thanks for reaching out!</strong> I have recieved your message and will get back to you soon.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" id="clearForm">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </form>
        </div>
    </div>
 );
}
export default Contact;