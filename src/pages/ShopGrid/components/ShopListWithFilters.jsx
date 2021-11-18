import FilterComponent from "../../../components/FilterComponent/FilterComponent"
import ShopListItem from "./ShopListItem"

const ShopListWithFilters = () => {
    return (
        <div className="max-w-3xl mx-auto my-8 lg:max-w-5xl">
            <div className="flex">
                <div className=" space-y-4 hidden md:block">
                    <FilterComponent title="Product Brand" byTitle />
                    <FilterComponent title="Filter By Color" byColor />
                </div>
                <div className="flex-1 w-full space-y-4">
                    <ShopListItem />
                    <ShopListItem />
                    <ShopListItem />
                    <ShopListItem />
                    <ShopListItem />

                </div>
            </div>

        </div>
    )
}

export default ShopListWithFilters
