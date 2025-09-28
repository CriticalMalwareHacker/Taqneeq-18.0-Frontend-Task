export default function navbar(){
    return(
    <div className="flex-row justify-start gap-1 w-1/4 border-r-2 border-[#CCCCCC]">
        <div className="flex flex-col justify-evenly gap-57 h-full">
            <div className="flex justify-center mt-10">
                <img src="asset1.png"></img>
            </div>
            <div className="flex justify-center"> 
                <img src="asset3.png"></img>
            </div>
            <div className="flex justify-center">
                <ul className="flex flex-col gap-1 mb-10">
                    <li className="pt-2 pb-0 px-2 border-b-2 border-[#444] w-fit">About</li>
                    <li className="p-2 transition w-fit delay-150 duration-300 ease-in-out rounded-full hover:text-white hover:w-fit hover:bg-[#222222] hover:p-2 hover:rounded-full">Events</li>
                    <li className="p-2 transition w-fit delay-150 duration-300 ease-in-out rounded-full hover:text-white hover:w-fit hover:bg-[#222222] hover:p-2 hover:rounded-full">Competition</li>
                    <li className="p-2 transition w-fit delay-150 duration-300 ease-in-out rounded-full hover:text-white hover:w-fit hover:bg-[#222222] hover:p-2 hover:rounded-full">Contact</li>
                    <li className="p-2 transition w-fit delay-150 duration-300 ease-in-out rounded-full hover:text-white hover:w-fit hover:bg-[#222222] hover:p-2 hover:rounded-full">App</li>
                    <li className="p-2 transition w-fit delay-150 duration-300 ease-in-out rounded-full hover:text-white hover:w-fit hover:bg-[#222222] hover:p-2 hover:rounded-full">Home</li>
                </ul>
            </div>
        </div>
    <div>
    </div>
    </div>
    );
}