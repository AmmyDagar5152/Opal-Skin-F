import Bannermain from "./Bannermain";
// import CategoryCards from "./ShopByNotes";
// import ShopCat from "./shopCat";
// import { shopcat } from "./data/shopcat";
// import NewSome from "./NewSome";
// import BrandSlider from "./BrandSlider";
// import GiftSection from "./Giftsectionbanner";
// import Giftbottom from "./giftbottom";
import Followus from "./followus";
// import ShopByOccasion from "./server/ShopByOcassion";
// import Testimonial from "./testimonial";
import BrandStory from "./opal/Brand";
import ShopByNotes from "./FeaturedProducts";
import CollectionHighlight from "./opal/Highlight";
import TextOver from "./opal/TextOver";
import FragranceSlider from "./opal/FragranceSlider";
import ShopByCategory from "./opal/ShopByCategory";
import TestimonialSection from "./opal/Testimonial";
import ProductCard from "./opal/ProductCard";
import SkinCareDifference from "./opal/SkinCareDifference";
import ShopByConcerns from "./opal/ShopByConcerns";
import ShopByIngredients from "./opal/ShopByIngredients";
import FeaturedProducts from "./FeaturedProducts";

export default function Main() {
    return (
        <>
            <Bannermain />
            <BrandStory />
            <ShopByConcerns />
            <SkinCareDifference />
            <ShopByCategory />
            <ShopByIngredients />
<FeaturedProducts />
            <CollectionHighlight />
            <TextOver />
            <FragranceSlider />
            {/* <ProductCard /> */}
     
            <Followus />
            <TestimonialSection/>
         
        </>
    )
}