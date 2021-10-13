import React from 'react';
import Header from '../Header/Header';
const hw={
    height:"100px",
    weight:"100px"
}
class My_Profile extends React.Component {

    
        state = {
            isPost:true,
            UserName:"Dineshaa",
            BlogTittle:"I Love Biriyani",
            UserProfilePic:"https://picsum.photos/70",
            PostCount:10,
            FolowingCount:100,
            FollowersCount:200,
            Posted:[
                {id:1,title:"xxx",Poster_img:""},
                {id:2,title:"yyy",Poster_img:""},
                {id:3,title:"zzz",Poster_img:""},
                {id:1,title:"xxx",Poster_img:""},
                {id:2,title:"yyy",Poster_img:""},
                {id:3,title:"zzz",Poster_img:""},
                {id:1,title:"xxx",Poster_img:""},
                {id:2,title:"yyy",Poster_img:""},
                {id:3,title:"zzz",Poster_img:""},
                {id:3,title:"zzz",Poster_img:""},
            ]
        };
        isPosed()
            {

                    return <div className="text-center" >
                            <img src="https://www.blogger.com/img/pencilpotscissorsdesk.png" alt="" style={hw}  />
                                    <h4>
                                    Have not posted yet !
                                    </h4>
                            </div>;
            }



    render() {
        return <div className="My_Profile" >

            <Header/>
            <div className="container">

        <div className="row">
            <div className="col ">
                        <img src={this.state.UserProfilePic} alt="Profile" className="img-thumbnail rounded-circle " />
            </div>

                <div className="col text-center">
                        <p>{this.state.PostCount}</p>
                        <div className="h5">post</div>
                </div>

                <div className="col text-center">
                        <p>{this.state.FolowingCount}</p>
                        <div className="h5">following</div>
                </div>

                <div className="col text-center">
                        <p>{this.state.FollowersCount}</p>
                        <div className="h5">followers</div>
                </div>
        </div>

        <div className="p text-start">{this.state.UserName}</div>
        <div className="p text-start">{this.state.BlogTittle}</div>
</div>


        {this.isPosed()}


</div>;
    }
};
 
export default My_Profile;
