function IconButton({ action ,children }) {
    return (
        <button
            className="relative flex w-12 h-12 rounded-full cursor-pointer -mr-3"
            onClick={action}
        >
            <div className="m-auto">
                {children}
            </div>
        </button>
    );
}

export default IconButton;