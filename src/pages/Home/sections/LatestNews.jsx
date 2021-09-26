import Button from "../../../components/Button/Button"


const LatestNews = () => {
    return (
        <div className="w-full relative my-20 bg-cover bg-center h-80 " style={{ backgroundImage: "url(images/bg.png)" }}>
            <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className=" flex flex-col justify-center items-center h-full px-20 absolute inset-0 ">
                <p className="font-jose text-xl text-white mb-8">Get Leatest Update By Subscribe
                    0ur Newslater</p>
                <Button />
            </div>

        </div>
    )
}

export default LatestNews
