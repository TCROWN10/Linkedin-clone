import image from './assets/Tobi.png';
function CreatePost() {

    return (

        <section className="flex flex-col gap-y-1 bg-[rgb(43,62,101)] border px-2 py-3 rounded-lg">
            <div className="flex flex-row gap-x-2">
                <img
                    src={image}
                    alt="avatar"
                    width={48}
                    height={48}
                    style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
                />
                <div className="flex flex-row items-center w-full rounded-full border py-2 px-4 bg-gray-100 text-sm font-semibold">
                    Start a post, try writing with AI
                </div>
            </div>
            <div className="flex flex-row justify-around px-4 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded  text-white hover:bg-[rgb(101,43,43)] cursor-pointer">
                    <span className="text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor", transform: ";msFilter:;" }}><circle cx="7.499" cy="9.5" r="1.5"></circle><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"></path><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"></path></svg>
                    </span>
                    <span>Media</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-[rgb(101,43,43)] cursor-pointer text-white">
                    <span className="text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor", transform: ";msFilter:;" }}><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
                    </span>
                    <span>Event</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-[rgb(101,43,43)] cursor-pointer text-white">
                    <span className="text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor", transform: ";msFilter:;" }}><path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path></svg>
                    </span>
                    <span>Write Article</span>
                </div>
            </div>
        </section>
        
    );
}

export default CreatePost;