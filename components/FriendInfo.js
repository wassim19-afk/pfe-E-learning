import Avatar from "./Avatar";

export default function FriendInfo() {
    return (
        <div className="flex gap-2">
            <Avatar />
            <div>
                <h2 className="font-bold text-xl">Wess Garali</h2>
                <div className="text-sm leading-3">5 mutual friends</div>
            </div>
        </div>
    );
}