import { truncateText } from "../utils";
import image from './assets/Tobi.png'
import ayoImage from './assets/Ayodeji Awosika.png'
import jolahImage from './assets/Jolah1.png'

export const recommendationData = [
    {
        dp: <img
            src={image}
            alt="avatar"
            width={50}
            height={50}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "Bolaji Oluwatobi Aka (TCROWN)",
        bio: "Software Engineer | Frontend Developer.",
    },
    {
        dp: <img
            src={ayoImage}
            alt="avatar"
            width={50}
            height={50}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "Ayodeji (Isreal) Awosika",
        bio: "Web3bridge Chief Mechanic",
    },
    {
        dp: <img
            src={jolahImage}
            alt="avatar"
            width={50}
            height={50}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "Jolade Okunlade",
        bio: "Software Engineer | Mentor at web3bridge",
    },
]

function RecommendationProfile({ dp, name, bio }) {
    return (
        <div className="flex flex-row items-start gap-x-2">
            <div>{dp}</div>
            <div className="flex flex-col items-start text-xs">
                <div className="text-sm font-bold">{name}</div>
                <div className="leading-normal">{truncateText(bio, 50)}</div>
                <button className="border border-white px-4 py-2 mt-2 rounded-full font-bold text-md">Follow</button>
            </div>
        </div>
    )
}

function RecommendationsCard() {
    return (
        <div className="recommendation-card-container flex flex-col gap-y-2 w-72 max-w-72 bg-[rgb(43,62,101)] rounded-lg px-4 py-4 border text-left text-white">
            <div className="font-bold text-xs">
                Add to your feed
            </div>

            <div className="flex flex-col gap-y-2">
                {
                    recommendationData.map((eachRecommendationData, index) => (
                        <RecommendationProfile {...eachRecommendationData} 
                        key={index}
                        />
                    ))
                }
            </div>

            <div className="font-bold text-sm pt-2">View all recommendations</div>
        </div>
    )
}

export default RecommendationsCard;