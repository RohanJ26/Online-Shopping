import React from "react"

const Footer=()=>{
    return(
        <div className="bg-blue-700 flex flex-col gap-6 md:flex-row md:justify-around items-center text-slate-700 font-medium p-2">
            <div className="h-28 w-28 mt-6 md:mt-0 flex items-center">
                <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg" alt="" />
            </div>
            <div className="flex flex-col space-y-2 items-center">
                <div className="text-slate-400">Follow Us On</div>
                <div className="flex space-x-2  grayscale">
                    <div className="h-12 w-12 flex">
                        <img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png" alt="" />
                    </div>
                    <div className="h-12 w-12 flex">
                        <img src="https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE-1200-80.jpg" alt="" />            
                    </div>
                    <div className="h-12 w-12 flex">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-40 flex flex-col items-center">
                <p className="text-slate-400">Contact Us</p>
                <p className="text-white">+91 98765XXXXX</p>
                <p className="text-white">Lorem ipsum dolor.</p>
            </div>
            <div className="max-w-17 flex flex-col items-center">
                <div  className="text-slate-400 flex flex-col items-center">Others</div>
                <p className="text-white">Home</p>
                <p className="text-white">FAQs</p>
                <p className="text-white">Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer