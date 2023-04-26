
export default function Avatar({ size }) {
    let width = 'w-12';
    if (size === 'lg') {
        width = 'w-24 md:w-36';
    }
    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img alt="image profile" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=200&q=200" />
        </div>
    );
}