import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="col-12 col-lg-6 offset-lg-3">
                <input className="form-control my-3" placeholder="Title" />
                <textarea className="form-control my-3" placeholder="Excerpt">
                </textarea>
                <input className="form-control my-3" placeholder="Author" />
                <button className="btn btn-primary float-right">Submit</button>
            </div>
        )
    }
}

export default Form;