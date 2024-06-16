import { House } from "./House";

const HouseCard = ({ house }: { house: House }) => {
    const truncatedDescription = house.description
        ? house.description.length > 100
            ? house.description.substring(0, 100) + "..."
            : house.description
        : "";

    const truncatedName =
        house.name.length > 40
            ? house.name.substring(0, 40) + "..."
            : house.name;

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl flex p-4 items-center">
            <div className="md:flex-shrink-0">
                {house.imgUrl && (
                    <img
                        className="h-36 w-36 object-cover rounded-lg"
                        src={house.imgUrl}
                        alt="Room"
                    />
                )}
            </div>
            <div className="p-4 flex flex-col justify-between">
                <div>
                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                        {truncatedName}
                    </div>
                    <p className="mt-2 text-gray-500">{truncatedDescription}</p>
                </div>
                <div className="mt-4">
                    <div className="text-gray-700 text-xl mb-2 font-bold">
                        Beds Available: {house.bedsAvailable}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;
