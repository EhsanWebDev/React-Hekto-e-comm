import { CalendarIcon, PencilIcon } from "@heroicons/react/solid"
import HeadingText from "../../../components/HeadingText/HeadingText"


const LatestBlog = () => {
    const Card = () => {
        return (
            <div className="  group shadow-lg flex flex-col rounded-md overflow-hidden">
                <div>
                    <img className="w-full h-full" src="images/blog-1.png" alt="" />
                </div>
                <div className="pt-4 pb-6 px-3">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                            <PencilIcon className="w-3 h-3 text-hekto-pink" />
                            <p className="text-sm capitalize font-lato text-hekto-blue-dark">Saber Ali</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CalendarIcon className="w-3 h-3 text-yellow-600" />
                            <p className="text-sm capitalize font-lato text-hekto-blue-dark">21 august,2020</p>
                        </div>
                    </div>

                    <p className=" text-hekto-blue-dark font-jose font-bold text-xl capitalize transition-colors duration-300 mb-4 group-hover:text-hekto-pink">Top essential trends in 2021</p>
                    <p className="font-lato text-gray-500 mb-4">More off this less hello samlande lied much
                        over tightly circa horse taped mightly</p>

                    <a href="#" className="underline text-hekto-blue-light border-b transition-colors duration-300 group-hover:text-hekto-pink">Read More</a>
                </div>

            </div>)
    }
    return (
        <div className="container mx-auto mb-20">
            <HeadingText title="latest blogs" />

            <div className="grid grid-cols-1 mt-8 gap-4 mx-auto max-w-sm md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-5xl ">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default LatestBlog
