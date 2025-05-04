import { Link } from "react-router-dom";

const Leading = () => {
    return (
        <div className="bg-[#F4F3F0] pl-16">
            <h6 className="font-bold text-[#8C52FF] pt-10">WELCOME TO SUGGESTIFY</h6>
            <h4 className="py-3 text-3xl font-bold">Bangladesh’s Trusted Hub for Product Discovery & Smart Recommendations</h4>
            <p className="pt-3 text-xl font-bold">SERVING SMART SHOPPERS SINCE 2020</p>
            <p className="py-3 text-gray-600 w-10/12">
                For years, we’ve been helping users make informed buying decisions through data-driven suggestions and real user insights. Whether it’s gadgets, gear, or everyday essentials — Suggestify connects you with the right choices, every time.
            </p>
            <p className="py-3 text-xl font-bold">OUR POWER? OUR COMMUNITY</p>
            <p className="py-3 text-gray-600">
                Backed by an engaged community and reliable partners, we bring you handpicked recommendations that match your preferences. From emerging brands to popular picks — our platform is designed to simplify your product discovery journey.
            </p>
            <div className="text-[#8C52FF] underline font-bold pb-20">
                <Link to='/about'>LEARN MORE ABOUT US</Link>
            </div>
        </div>
    );
};

export default Leading;
