export default function navbar(){
    return(
    <div className="flex-row justify-start gap-1 w-1/4 border-r-2 border-[#CCCCCC]">
        <div className="flex flex-col justify-evenly gap-70 h-full">
            <div className="flex justify-center mt-10">
                <img src="asset1.png"></img>
            </div>
            <div className="flex justify-center"> 
                <img src="asset3.png"></img>
            </div>
            <div className="flex justify-center gap-4 space-y-4">
                <ul className="gap-4">
                    <li>About</li>
                    <li>Events</li>
                    <li>Competition</li>
                    <li>Contact</li>
                    <li>App</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    <div>
    </div>
    </div>
    );
}