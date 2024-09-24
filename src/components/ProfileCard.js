import { OrangeBoxSmall } from "./orangeBox";
import "../styles/ProfileCard.css";
import image from './assets/Tobi.png';




export const profileData = {
    dp: <img
        src={image}
        alt="avatar"
        width={80}
        height={80}
        style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
    />,
    profile : {image},
    name: "Bolaji Oluwatobi ",
    bio: "Software Engineer | Frontend Developer.",
    profileViewers: 265,
    postImpressions: 2243,
};

function ProfileCard({ profile, showImage=true, showBackground=true, showProfile=true, showBio=true }) {
    const data = profile || profileData; // Fallback to profileData if no profile prop is passed.

    return (
        <div className="profile-card-container max-w-60 bg-[rgb(149,15,96)  ] pt-6 rounded-lg border text-white hover:bg-[rgb(101,43,43)] cursor-pointer mb-5">
            {showBackground && <div className="profile-bg-cover"></div>}
            <div className="relative z-10 flex flex-row justify-center">
                {showImage && data.dp}
            </div>
            <div className="flex flex-col items-center text-center py-4">
                <a href="/" className="profile-name text-base font-bold hover:underline">
                    {showProfile && data.name}
                </a>
                <div className="profile-bio text-xs text-white max-w-[70%]">
                    {showBio && data.bio}
                </div>
            </div>
            <div className="border-t py-4 font-semibold text-xs text-white">
                <div className="flex flex-row justify-between px-2 py-1 hover:bg-[rgb(43,62,101)]">
                    <span>Profile Viewers</span>
                    <span>{data.profileViewers}</span>
                </div>
                <div className="flex flex-row justify-between px-2 py-1 hover:bg-[rgb(43,62,101)] text-white">
                    <span>Post Impressions</span>
                    <span>{data.postImpressions}</span>
                </div>
            </div>
            <div className="group border-t text-xs text-left p-3 space-y-2 hover:bg-[rgb(43,62,101)] hover:cursor-pointer">
                <div>Job search smarter with Premium</div>
                <div className="flex items-center font-bold gap-x-2 group-hover:text-[#0a66c2]">
                    <OrangeBoxSmall />
                    Try for NGN0
                </div>
            </div>
            <div className="border-t flex flex-row justify-start items-center gap-x-2 text-xs px-2 py-3 hover:bg-[rgb(43,62,101)] hover:cursor-pointer">
                <span className="text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentcolor", transform: ";msFilter:;" }}><path d="M12 11.222 14.667 13l-.89-3.111L16 8l-2.667-.333L12 5l-1.333 2.667L8 8l2.223 1.889L9.333 13z"></path><path d="M19 21.723V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v17.723l7-4.571 7 4.571zM8 8l2.667-.333L12 5l1.333 2.667L16 8l-2.223 1.889.89 3.111L12 11.222 9.333 13l.89-3.111L8 8z"></path></svg>
                </span>
                <span className="font-bold">Saved items</span>
            </div>
        </div>
    );
}

export default ProfileCard;
