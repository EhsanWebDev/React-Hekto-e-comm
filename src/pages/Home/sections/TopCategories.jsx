import HeadingText from "../../../components/HeadingText/HeadingText"


const TopCategories = () => {

    const Product = () => {
        return (
            <div className=" flex flex-col items-center ">
                <div className="bg-gray-100  relative rounded-full p-12 border-transparent border-4 transition duration-300  hover:border-hekto-blue-dark">
                    <img className="group-hover:opacity-70" src="images/cat/cat-1.png" alt="cat" />

                </div>

                <div className="text-center mt-3 group-hover:border-blue-900">
                    <p className="text-hekto-blue-dark text-sm font-jose capitalize">mini lcw chair</p>
                    <p className="text-hekto-blue-dark text-xs font-jose">$56.00</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <HeadingText title="top categories" />

            <div className="mb-20 mt-8 grid gap-8 grid-cols-1 max-w-sm mx-auto md:grid-cols-2 md:max-w-lg lg:grid-cols-4 lg:max-w-5xl">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default TopCategories
