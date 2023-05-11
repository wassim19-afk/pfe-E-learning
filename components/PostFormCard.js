import Avatar from "./Avatar";
import Card from "./Card";
import { use, useContext, useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "@/contexts/UserContent";
import PreviousMap from "postcss/lib/previous-map";

export default function PostFormCard({ onPost }) {

    const [content, setContent] = useState('');
    const [categorie, setCategorie] = useState('');
    const supabase = useSupabaseClient();
    const session = useSession();
    const { profile } = useContext(UserContext);
    const [uploads, setUploads] = useState([]);

    function createPost() {
        if (document.getElementById('idea').checked) {
            //idea post
        } else if (document.getElementById('course').checked) {
            //course post 
            //categorie = prompt('What is your course category?');
            /*
            supabase.from('course').insert({
                author: session.user.id,
                content,
                categorie,
            }).then(response => {
                if(!response.error){
                    setContent('');
                    setCategorie('');
                    alert('created');
                }
            });
            */
        } else {
            //simple post
            supabase.from('posts').insert({
                author: session.user.id,
                content,
            }).then(response => {
                if (!response.error) {
                    setContent('');
                    if (onPost) {
                        onPost();
                    }
                }
            });
        }
    }

    function addFiles(ev) {
        const files = ev.target.files;
        for (const file of files) {
            const newName = Date.now() + file.name;
            supabase.storage.from('photos')
                .upload(newName, file)
                .then(result => {
                    if (result.data) {
                        const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/photos/' + result.data.path
                        setUploads(PrevUploads => [...prevUploads, url]);

                        alert('File uploaded successfully!');
                    }
                    else {
                        console.log(result);
                    }
                }
                )
        }
    }


    return (
        <Card>
            <div className="flex gap-2 ">
                <div>
                    <Avatar url={profile?.avatar}/>
                </div>
                {profile && (
                    <textarea value={content} className="grow p-3 h-14"
                        onChange={e => setContent(e.target.value)}
                        placeholder={`what's on your mind, ${profile?.name}?`} />
                )}
            </div>
            {uploads.length > 0 && (
                <div className="">
                    {uploads.map(upload => (
                        <div className="">
                            <img src={upload} alt="" className="w-auto h-24 rounded-md"/>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex gap-5 items-center mt-2">

                <div>
                    <label className="flex gap-1">
                        <input type="file" className="hidden" multiple onChange={addFiles} accept="*/*" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <span className="hidden md:block">Files</span>
                    </label>
                </div>

                <div>
                    <button className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                        <span className="hidden md:block">People</span>
                    </button>
                </div>

                <div>
                    <button className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                        <span className="hidden md:block">Check in</span>
                    </button>
                </div>

                <div>
                    <button className="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                        <span className="hidden md:block">Mood</span>
                    </button>
                </div>

                <div className="flex gap-1 -mx-2 md:flex">
                    <div>
                        <input type="radio" id="course" name="course" value="course" />
                        <label for="cource"><span className="mr-1 ml-1">Course</span></label>
                    </div>
                    <div>
                        <input type="radio" id="idea" name="idea" value="idea" />
                        <label for="idea"><span className="mr-1 ml-1">Idea</span></label>
                    </div>
                </div>

                <div className="grow text-right">
                    <button onClick={createPost} className="bg-socialBlue text-white px-6 py-1 rounded-md">Share</button>
                </div>

            </div>
        </Card>
    );
}