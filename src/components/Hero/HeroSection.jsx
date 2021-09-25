import Button from "../Button/Button"


const HeroSection = () => {
    return (
        <div className="bg-purple-50 py-16 relative">
            <div className="grid grid-cols-2 gap-2 px-4 mx-auto items-center md:max-w-5xl ">
                <div className="">
                    <p className="text-xs font-lato text-hekto-pink mb-6">Best furniture for your castle...</p>
                    <p className="font-bold text-hekto-blue-dark font-jose text-2xl tracking-wider capitalize mb-6 md:text-4xl">New furniture collection trends in 2021</p>
                    <p className="font-lato text-xs font-light mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, cum.</p>

                    <Button />
                </div>

                <div className=" md:block">
                    <img className="object-cover pl-20" src="images/hero-img-1.png" alt="" />
                </div>

            </div>
            <img src="images/hero-img-2.png" className="hidden absolute h-1/2 left-0 top-0 2xl:block" alt="" />
        </div>
    )
}

export default HeroSection
