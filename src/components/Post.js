import { profileData } from "./ProfileCard";
import postImage from "../Tobi.png";
import defaultProfileImage from './assets/Tobi.png';

function Post({ name, bio, date, text, profileImage, image }) {
    const defaultText = "";

        const handleProfileClick = (name) => {
            alert(`view profile of ${name}!`);
        };

        const formatDate = (dateString) =>{
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
            return new Date(dateString).toLocaleDateString(undefined, options);
        }

    return (
        <div className="border px-4 py-3 rounded-lg bg-white text-left">
            <div className="flex flex-row text-left items-start gap-x-3">
                <img
                    src={profileImage ?? defaultProfileImage}
                    alt={`${name}'s avatar`}
                    width={48}
                    height={48}
                    style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
                    onClick={() => handleProfileClick(name)}
                />
                <div className="leading-normal text-xs">
                    <div className="text-sm font-semibold">{name ?? profileData.name}</div>
                    <div>{bio ?? profileData.bio}</div>
                    <div>{date ? formatDate(date) : formatDate(new Date().toISOString())}</div> {/* Format the date */}
                </div>
            </div>

            {/* Post Text */}
            <div className="text-sm py-4 leading-normal">
                {text ?? defaultText}
            </div>

            <div>
                <img
                    src={image ?? postImage}
                    alt="avatar"
                    width={"auto"}
                    height={"100%"}
                    style={{ width: "100%", background: "navajowhite", borderRadius: "8px", border: "2px solid white" }}
                />
            </div>
        </div>
    )
}

export default Post;