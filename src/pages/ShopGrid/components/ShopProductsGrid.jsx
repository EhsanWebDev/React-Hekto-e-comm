import SingleGridItem from "./SingleGridItem"

const ShopProductGrid = () => {
    return (
        <div>
            <div className="max-w-5xl grid grid-cols-1 gap-4 mx-auto my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <SingleGridItem />
                <SingleGridItem />
                <SingleGridItem />
            </div>
        </div>
    )
}

export default ShopProductGrid
