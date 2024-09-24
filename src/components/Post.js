import React, { useState } from 'react';
import { profileData } from './ProfileCard';
import postImage from '../Tobi.png';
import defaultProfileImage from './assets/Tobi.png';

function Post({ name, bio, date, text, profileImage, image }) {
    const defaultText = "";

    // State for interactions
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [reposts, setReposts] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [sentStatus, setSentStatus] = useState(false);

    const handleProfileClick = (name) => {
        alert(`View profile of ${name}!`);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    const handleRepost = () => {
        setReposts(reposts + 1);
        alert('Post reposted!');
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentInput) {
            setComments([...comments, commentInput]);
            setCommentInput('');
        }
    };

    const handleSend = () => {
        setSentStatus(true);
        alert('Post sent!');
    };

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
                    <div>{date ? formatDate(date) : formatDate(new Date().toISOString())}</div>
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

            {/* Actions */}
            <div className="flex flex-row justify-around px-4 pt-1 mt-2 border-t bg-[rgb(43,62,101)] text-white cursor-pointer">
                {/* Like Button */}
                <div 
                    className={`flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded ${isLiked ? 'bg-[rgb(101,43,43)]' : 'hover:bg-[rgb(101,43,43)]'}`}
                    onClick={handleLike}
                >
                    <span className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"currentcolor" }}><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>                    </span>
                    <span>{likes} {isLiked ? 'Liked' : 'Like'}</span>
                </div>

                {/* Comment Button */}
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-[rgb(101,43,43)]">
                    <span className="text-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentcolor" }}><path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.234V16H4V4h16v12z"></path><circle cx="15" cy="10" r="2"></circle><circle cx="9" cy="10" r="2"></circle></svg>                    </span>
                    <span>Comment</span>
                </div>

                {/* Repost Button */}
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-[rgb(101,43,43)]" onClick={handleRepost}>
                    <span className="text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentcolor"}}><path d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3V7zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3v6z"></path></svg>                    </span>
                    <span>{reposts} Repost</span>
                </div>

                {/* Send Button */}
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-[rgb(101,43,43)]" onClick={handleSend}>
                    <span className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentcolor" }}><path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path></svg>                    </span>
                    <span>{sentStatus ? 'Sent!' : 'Send'}</span>
                </div>
            </div>

            {/* Comments Section */}
            <div className="mt-4">
                <form onSubmit={handleCommentSubmit} className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="w-full p-2 border rounded-md"
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <button type="submit" className="py-2 px-4 bg-[rgb(43,62,101)] text-white rounded-md">Submit Comment</button>
                </form>

                <div className="mt-4">
                    {comments.map((comment, index) => (
                        <div key={index} className="border-t py-2">
                            {comment}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Post;
