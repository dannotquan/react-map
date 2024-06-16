import React from "react";
import { House } from "./House";
import HouseCard from "./HouseCard";

const HouseList = ({ houses }: { houses: House[] }) => {
    return (
        <div className="max-h-full overflow-y-scroll">
            {houses.map((house, index) => (
                <React.Fragment key={index}>
                    <HouseCard house={house} />
                    {index < houses.length - 1 && (
                        <hr className="my-4 mx-auto w-9/12" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default HouseList;
