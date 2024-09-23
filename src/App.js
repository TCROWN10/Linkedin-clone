import './App.css';
import Navbar from './components/navbar';
import 'boxicons';
import ProfileCard from './components/ProfileCard';
import ProfileCard2 from './components/ProfileCard2';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import image1 from './components/assets/_DSC0017.JPG';
import image2 from './components/assets/Jolah.png';
import image3 from './components/assets/_DSC0039.JPG';
import image4 from './components/assets/_DSC0042.JPG';
import image5 from './components/assets/_DSC0067.JPG';
import image6 from './components/assets/_DSC0098.JPG';
import image7 from './components/assets/_DSC0323.JPG';
import image8 from './components/assets/BBS_6837.JPG';
import profileImage1 from './components/assets/Tobi.png';
import profileImage2 from './components/assets/Ayodeji Awosika.png';



const postData = [
  {
    name: "Bolaji Oluwatobi",
    bio: "Software Engineer | Frontend Developer",
    text: "Even despite the fact that Jolah don't want us to sleep i will still put in some smile ...",
    profileImage: profileImage1,
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Ayodeji (Isreal) Awosika",
    bio: "Web3bridge Chief Mechanic",
    profileImage: profileImage2,
    image: image1,
    text : "If you did not attend web3Lagos conference you missed .",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "TCROWN",
    bio: "Software Engineer | Frontend Developer",
    profileImage: profileImage1,
    image: image2,
    text : "Shoutout to @Jolah our tutor that will not give us a breathing space .. projects back to back",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Ayodeji (Isreal) Awosika",
    bio: "Web3bridge Chief Mechanic",
    profileImage:profileImage2,
    image: image3,
    text:"Web3bridge cohort XI coding for fun ..",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Ayodeji (Isreal) Awosika",
    bio: "Web3bridge Chief Mechanic",
    profileImage:profileImage2,
    image: image4,
    text :"Web3bridge cohort XI coding for fun ..",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Ayodeji (Isreal) Awosika",
    bio: "Web3bridge Chief Mechanic",
    profileImage:profileImage2,
    image: image5,
    text :"Web2Advanced have complained that Jolah is not taking things easy with them , The good news is that i am aware and we are backing @Jolah to continuee are good works lolsss",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "TCROWN",
    bio: "Software Engineer | Frontend Developer",
    profileImage:profileImage1,
    image: image6,
    text :"Coding for living",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "Ayodeji (Isreal) Awosika",
    bio: "Web3bridge Chief Mechanic",
    profileImage: profileImage2,
    image: image7,
    text :"I will ask @Jolah to go hard on you guys because we want the best devs and web3bridge trains the best developers but because we said @Jolah should go hard we didn't say she should injure you guys with projects oo Rara oooo  ",
    date: "2024-09-10T14:48:00"
  },
  {
    name: "TCROWN",
    bio: "Software Engineer | Frontend Developer",
    profileImage: profileImage1,
    image:image8,
    text :"FIND ME IF YOU CAN!!!!!!!!!!!!!!!!!!",
    date: "2024-09-10T14:48:00"
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='content-container flex flex-row gap-x-8 mt-8 mx-auto max-w-6xl'>

        {/* The Left side of the body */}
        <div>
          <ProfileCard />
          <ProfileCard />
        </div>
        
        

        {/* The Center contents of the body */}
        <div className='w-[60%] max-w-[60%]'>
          <CreatePost />

          <div className='space-y-2 py-2'>
            {
              postData.map((eachPost) => (
                <Post 
                {...eachPost}
                 key={eachPost.name}  // unique key is required for each element
                 name={eachPost.name}
                 bio={eachPost.bio}
                 text={eachPost.text}
                 profileImage={eachPost.profileImage}
                 image={eachPost.image}
                 />
                
              ))
            }
          </div>
        </div>

        {/* The Right side of the body */}
        <div>
          <ProfileCard2  />
        </div>
      </div>
    </div>
  );
}

export default App;
