const Footer = () => {
    return (
        <>
            <div className="flex items-center">
                <div className="flex-grow h-0.4 bg-gray-300">
                    <hr />
                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">

                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">

                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">

                </div>
                <div className="w-4 h-4 bg-gray-500 rounded-full mx-2">
                    <hr />
                </div>
                <div className="flex-grow h-0.5 bg-gray-300">
                    <hr />
                </div>
            </div>
            <footer className="bg-sky-50 p-4 text-black text-center rounded-t-lg">
                <p className="text-sm">&copy; 2024 All Rights Reserved</p>
                <div className="mt-2 flex items-center justify-center">
                    <img className="rounded-full h-20 w-20 mr-2" src="https://avatars.githubusercontent.com/u/94227272?v=4" alt="Founder" />
                    <p className="text-s">Founder : <a href="https://www.linkedin.com/in/suraj-dhankad-086458227/" target="_blank" className="cursor-pointer hover:underline">
                        <span>Suraj Dhankad</span>
                    </a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer;