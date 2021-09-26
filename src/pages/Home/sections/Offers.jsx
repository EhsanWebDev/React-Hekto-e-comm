import HeadingText from "../../../components/HeadingText/HeadingText"
import freeDelivery from '../../../assets/icons/free-delivery.svg'
import support from '../../../assets/icons/24-hours-support.svg'
import cashBack from '../../../assets/icons/cashback.svg'
import premiumQuality from '../../../assets/icons/premium-quality.svg'

const cardStyles = "rounded-lg shadow-lg px-4 py-10 flex flex-col items-center"
const headingStyles = "font-jose text-xl capitalize my-4"
const textStyles = "font-lato font-medium text-xs text-gray-400 text-center"
const Offers = () => {
    return (
        <div className="mt-24 max-w-5xl mx-auto">
            <HeadingText title="what we offer" />

            <div className="mt-16 mb-32 max-w-xs mx-auto grid grid-cols-1 gap-6 md:grid-cols-2
                             lg:grid-cols-4 md:max-w-lg lg:max-w-full">
                <div className={cardStyles}>
                    <img src={freeDelivery} alt="" />
                    <p className={headingStyles}>free delivery</p>
                    <p className={textStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit odio, sed labore dolorem necessitatibus!</p>
                </div>
                <div className={cardStyles}>
                    <img src={cashBack} alt="" />
                    <p className={headingStyles}>free delivery</p>
                    <p className={textStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit odio, sed labore dolorem necessitatibus!</p>
                </div>
                <div className={cardStyles}>
                    <img src={premiumQuality} alt="" />
                    <p className={headingStyles}>free delivery</p>
                    <p className={textStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit odio, sed labore dolorem necessitatibus!</p>
                </div>
                <div className={cardStyles}>
                    <img src={support} alt="" />
                    <p className={headingStyles}>free delivery</p>
                    <p className={textStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit odio, sed labore dolorem necessitatibus!</p>
                </div>


            </div>
        </div>
    )
}

export default Offers
