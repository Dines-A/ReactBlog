import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../Footer/AllFooter";
import "../Home/home.css"
function Home()
{
    return <div>
<div className="container px-0">
        <div className="body ">

            <div className="row my-5">

                <div className="col-12  col-lg-6 colbgcolor my-5 ">
                   <h2>
                   Publish your passions, your way
                   </h2>
                    <p>
                    Create a unique and beautiful blog. It’s easy and free.
                    </p>
                       <div className="text-center">
                            <Link to="/CreateAccsignup" className="btn btn btn-primary my-2 Creareaccount">Create an Account</Link>
                       </div>
                </div>
                
            </div>






            
        </div>

        <div className="body">
            <div className="row my-5">
                <div className="offset-lg-6 col-12  col-lg-6 colbgcolor ">
                        <h2>
                    Get a free domain
                        </h2>
                    <p>
Give your blog the perfect home. Get a free blogspot.com domain or buy a custom domain with just a few clicks.
                    </p>
                       <div className="text-center">
                       <div className="btn btn btn-primary my-2 Createyourpost">Create your post</div>
                       </div>
                </div>
            </div>

        </div>

        <div className="body">
        <div className=" row my-5">
                <div className="  col-12 col-lg-6 colbgcolor ">
                        <h2>
                    Earn money

                        </h2>
                    <p>
Get paid for your hard work. Google AdSense can automatically display relevant targeted ads on your blog so that you can earn income by posting about your passion.
                    </p>
                    <div className="text-center">
                        <div className="btn btn btn-primary Member">
                        Member
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="body">
        <div className=" row my-5">
                <div className=" offset-lg-6 col-12 col-lg-6 colbgcolor ">
                    <h2>
                    Know your audience
                    </h2>
                    <p>
                    Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.
                    </p>

                </div>
            </div>
        </div>
        <div className="body">
        <div className=" row my-5">
                <div className="  col-12 col-lg-6 colbgcolor ">
                    <h2>
                    Hang onto your memories

                    </h2>
                    <p>
                    Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google for free.
                    </p>

                </div>
            </div>
        </div>
        <div className="body">
      <div className=" row my-5">
                <div className=" offset-lg-6 col-12 col-lg-6 colbgcolor ">
                    <h2>
                    Join millions of others

                    </h2>
                    <p>
                    Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.
                    </p>

                </div>
            </div>
        </div>
        
                <div className="body">
                <div className="row my-5">

                <div className="col-12  col-lg-6 offset-lg-6 mt-5 colbgcolor ">
                <h2>
                Choose the perfect design
                </h2>
                    <p>
                    Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new.
                    </p>
                </div>

                </div>
                </div>

</div>
<Footer/>
</div>;
}
export default Home;