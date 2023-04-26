import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import FriendInfo from "@/components/FriendInfo";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import CourceCard from "@/components/CourseCard";
import IdeaCard from "@/components/IdeaCard";
import Link from "next/link";
import { useRouter } from "next/router";


export default function ProfilePage() {
    const router = useRouter();
    const { asPath: pathname } = router;
    const isPosts = pathname.includes('posts') || pathname === '/profile';
    const isCource = pathname.includes('cource');
    const isIdea = pathname.includes('idea');
    const isAbout = pathname.includes('about');
    const isFriends = pathname.includes('friends');
    const isPhotos = pathname.includes('photos');
    const tabClasses = 'flex gap-1 px-4 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold';
    const activeTabClasses = 'flex gap-1 px-4 py-1 items-center border-b-4 border-b-white';
    return (
        <Layout>
            <Card noPadding={true}>
                <div className="relative overflow-hidden rounded-md">
                    <div className="h-36 overflow-hidden flex justify-center items-center">
                        <img src="https://images.unsplash.com/photo-1586282023338-52aa50a846ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    </div>
                    <div className="absolute top-24 left-4">
                        <Avatar size={'lg'} />
                    </div>
                    <div className="p-4 pt-0 md:pt-4 pb-0">
                        <div className="ml-24 md:ml-40">
                            <h1 className="text-3xl font-bold">
                                Wess Garali
                            </h1>
                            <div className="text-gray-500 leading-4" >Stockholm, Sweden</div>
                        </div>
                        <div className="mt-4 md:mt-10 text-sm -ml-0 flex gap-0">
                            <Link href={'/profile/posts'} className={isPosts ? tabClasses : activeTabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                </svg>
                                <span className="hidden md:block">Posts</span>
                            </Link>

                            <Link href={'/profile/cource'} className={isCource ? tabClasses : activeTabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                                <span className="hidden md:block">Cource</span>
                            </Link>
                            <Link href={'/profile/idea'} className={isIdea ? tabClasses : activeTabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                                <span className="hidden md:block">Idea</span>
                            </Link>
                            <Link href={'/profile/about'} className={isAbout ? tabClasses : activeTabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                                <span className="hidden md:block">About</span>
                            </Link>
                            <Link href={'/profile/friends'} className={isFriends ? tabClasses : activeTabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                <span className="hidden md:block">Friends</span>
                            </Link>
                            <Link href={'/profile/photos'} className={isPhotos ? tabClasses : activeTabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <span className="hidden md:block">Photos</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
            {isPosts && (
                <PostCard />
            )}
            {isAbout && (
                <div>
                    <Card>
                        <h2 className="text-3xl mb-2">About me</h2>
                        <p className="mb-4 text-sm">
                            I have spent the last two years empowering individuals and professionals to make the most of .... solutions in their businesses. I have gained the ability to deliver unique experiences to this customer base through briefings, workshops and in-store events. In addition, excellence in customer service has allowed me to focus on the most important part of the business relationship: the customer. I now wish to extend my experience and know-how to a major player in the luxury and high-end ready-to-wear industry.
                        </p>
                    </Card>
                </div>
            )}
            {isFriends && (
                <div>
                    <Card>
                        <h2 className="text-3xl mb-2">Friends</h2>
                        <div>
                            <div className="border-b border-b-gray-100 p-4 -mx-4">
                                <FriendInfo />
                            </div>
                            <div className="border-b border-b-gray-100 p-4 -mx-4">
                                <FriendInfo />
                            </div>
                            <div className="border-b border-b-gray-100 p-4 -mx-4">
                                <FriendInfo />
                            </div>
                            <div className="border-b border-b-gray-100 p-4 -mx-4">
                                <FriendInfo />
                            </div>
                            <div className="border-b border-b-gray-100 p-4 -mx-4">
                                <FriendInfo />
                            </div>
                            <div className="border-b border-b-gray-100 p-4 -mx-4">
                                <FriendInfo />
                            </div>
                            <div className="border-b border-b-gray-100 p-4 -mx-4">
                                <FriendInfo />
                            </div>
                        </div>
                    </Card>
                </div>
            )}
            {isPhotos && (
                <div>
                    <Card>
                        <div className="grid md:grid-cols-2 gap-1">
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            </div>
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            </div>
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            </div>
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
                            </div>
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1592609930961-219235eded71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            </div>
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            </div>
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80" alt="" />
                            </div>
                            <div className="rounded-md overflow-hidden h-24 md:h-48 flex items-center shadow-md">
                                <img src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80" alt="" />
                            </div>
                        </div>

                    </Card>
                </div>
            )}
            {isCource && (
                <CourceCard />
            )}
            {isIdea && (
                <IdeaCard />
            )}
        </Layout>
    );
}