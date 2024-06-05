import { useState } from "react";
import Slideshow  from "./Slideshow";

const posts = [
  {
    profilePic: "/assets/pfp1.png",
    name: "Lara Leones",
    username: "@thewallart",
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    postImage: "/assets/post1.png",
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k"
  },
  {
    profilePic: "/assets/pfp2.png",
    name: "Lara Leones",
    username: "@thewallart",
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    postImage: "/assets/post2.png",
    likes: "9.8k",
    comments: "8.6k",
    shares: "7.2k"
  },
];


function ArtistPostTile() {

  const [activeImages, setActiveImages] = useState({});

  const toggleImage = (index) => {
    setActiveImages(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <div className="tile post-tile" key={index}>
          <div className="artist-profile">
            <img className="profile-pic" src={post.profilePic} alt="Profile" />
            <div>
              <h3>{post.name}</h3>
              <p className='posterUsername'>{post.username}</p>
            </div>
          </div>
          <p>{post.content}</p>
          <img className="post-image" src={post.postImage} alt="Artwork" />
          <hr></hr>
          <div className="action-buttons">
            <span className={`actions ${activeImages[index] ? 'liked' : ''}`} key={index} onClick={() => toggleImage(index)}><img src='/assets/heart-1.svg' /> {post.likes}</span>
            <span className='actions'><img src='/assets/comment.svg' /> {post.comments}</span>
            <span className='actions'><img src='/assets/share.svg' /> {post.shares}</span>
          </div>
        </div>
      ))}

      <Slideshow />
      
    </div>
  );
}

export default ArtistPostTile;
