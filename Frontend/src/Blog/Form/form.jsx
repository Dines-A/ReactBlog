import React from 'react';
import "../Form/form.css"
import { UserContext } from '../../UserContext'
import { useHistory } from 'react-router';

function Postform()
{
    const [blog, setBlog] = React.useState({ title: '', body: '' })
    const user = React.useContext(UserContext)
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        setBlog({ title: event.target.title.value, body: event.target.body.value })
        console.log({ title: event.target.title.value, body: event.target.body.value });
    }

    React.useEffect(() => {
        if (blog.title === '' || blog.body === '') return;
        fetch("http://127.0.0.1:8000/api/blog/", {
            method: "POST",
            headers: {
                Authorization: `Token ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        setBlog({ title: '', body: '' })
        history.push('/blog');
    }, [blog])
    return <div>
        <form className="Login_Form" onSubmit={handleSubmit} action="http://127.0.0.1/api/blog/"
            method="POST">
            <h1 className="text-center" >Post</h1>
                <div className="mb-3">
        <label htmlFor="posttittle" className="form-label">Blog Tittle</label>
        <input type="text" class="form-control" name="title" id="posttittle" />
        </div>
        <div className="mb-3">
        <label htmlFor="blogcontent" className="form-label">Write about blog</label>
        <textarea className="form-control" name="body" id="blogcontent" rows="3"></textarea>
            </div>
            <div className="mb-3 text-center  ">
                <button className="btn btn btn-warning">Post</button>
            </div>
      
</form>
</div>;
}
export default Postform;