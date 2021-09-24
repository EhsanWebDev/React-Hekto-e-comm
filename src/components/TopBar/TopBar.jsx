
import { MailIcon, PhoneIcon, ChevronDownIcon, UserIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline/'

const iconStyles = "w-4 h-4 text-white";
const textStyles = "text-white text-xs font-jose";
const miniContainer = "flex items-center space-x-2"

const TopBar = () => {
    return (
        <div className="bg-purple-600 w-full py-3">
            <div className="flex items-center justify-between mx-auto max-w-5xl">
                <div className="flex items-center space-x-8">
                    <div className={miniContainer}>
                        <MailIcon className={iconStyles} />
                        <p className={textStyles}>mhhasanul@gmail.com</p>
                    </div>
                    <div className={miniContainer}>
                        <PhoneIcon className={iconStyles} />
                        <p className={textStyles} >(12345)67890</p>
                    </div>
                </div >

                <div className="flex items-center space-x-3">
                    <div className={miniContainer}>
                        <p className={textStyles} >English</p>
                        <ChevronDownIcon className={iconStyles} />
                    </div>
                    <div className={miniContainer}>
                        <p className={textStyles} >USD</p>
                        <ChevronDownIcon className={iconStyles} />
                    </div>
                    <div className={miniContainer}>
                        <p className={textStyles} >Login</p>
                        <UserIcon className={iconStyles} />
                    </div>
                    <div className={miniContainer}>
                        <p className={textStyles} >Wishlist</p>
                        <HeartIcon className={iconStyles} />
                    </div>
                    <ShoppingCartIcon className={iconStyles} />
                </div>
            </div>



        </div >
    )
}

export default TopBar
