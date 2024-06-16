/* eslint-disable @typescript-eslint/no-unused-vars */
import { LatLngExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import { House } from "./House";
import HouseList from "./HouseList";
import HouseCard from "./HouseCard";

function App() {
    const pos: LatLngExpression | LatLngTuple = [33.4949, -111.9217];
    const zoom: number = 11;
    const houses: House[] = [
        {
            name: "Hyatt Place Phoenix/Mesa",
            description:
                "This contemporary hotel in the Mesa Riverview Shopping Center is 3 miles from the Arizona Museum of Natural History and 8 miles from Phoenix Sky Harbor International Airport. Modern rooms feature free Wi-Fi, flat-screen TVs, and separate living areas with pull-out sofas, as well as coffeemakers and minifridges. Complimentary perks include breakfast and parking. Additional amenities consist of an outdoor pool, a hot tub and a fitness center. There's also a lobby bar and a 24/7 market cafe.",
            pos: [33.4294628463591, -111.90400179935803],
            bedsAvailable: 6,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipOE5n2ALvCi3wWN2hPHIEZEVIflQtkVE18WITNd=w408-h272-k-no",
        },
        {
            name: "Super 8 by Wyndham Phoenix/Mesa/Gilbert Road",
            description:
                "This low-key budget hotel off US Route 60 is a 6-minute drive from historic downtown Gilbert and 16 miles from Phoenix Sky Harbor International Airport. Simple rooms include en suite bathrooms, free Wi-Fi and flat-screen TVs with premium cable/satellite channels, plus microwaves, minifridges and coffeemakers. Some suites add wet bars and seating areas. Kids 17 and under stay free with an adult. Complimentary amenities include continental breakfast served in an informal dining area, and parking for cars and large vehicles. There's also an outdoor pool, a hot tub and a guest laundry.",
            pos: [33.392625135608476, -111.78873200028369],
            bedsAvailable: 3,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipP3HyI8zNTvVkSA9D0UN4MMIY9PEvpN4gp3TJgx=w408-h263-k-no",
        },
        {
            name: "Comfort Inn Chandler - Phoenix South I-10 Near Casinos",
            description:
                "This casual hotel is just off Interstate 10, 12 miles from Phoenix Sky Harbor International Airport and 15 miles from Downtown Phoenix. The Chandler Fashion Center mall is 4.2 miles away. All rooms and suites include free WiFi and have private bathrooms with showers, as well as flat-screen TVs, coffeemakers and minifridges, while premium rooms have microwaves and separate seating areas. A complimentary hot breakfast buffet is provided, and there's free parking for vehicles of all sizes. Other amenities include an outdoor heated pool, a fitness center, a business center, a meeting room, and laundry facilities.",
            pos: [33.30803019859046, -111.97134081839074],
            bedsAvailable: 12,
            imgUrl: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhEwqe4mmpBrK7Q_Pq-BJKSvj7AjihjbaXM5omALnETvtlawFO7Qq5BDtaspr6cHBCzvOtHlNvWIUJOwz400RXln1rH0dLXiVVUc-M6F0pER52rA58cuVUbgT3EcZK33Ls92iAq9Xei33JGTBLEz3F-xa7KfmfYTa8MffUkcnKCzo4AmPHC3mFpBJw=w408-h272-k-no",
        },
        {
            name: "Hilton Garden Inn Phoenix Midtown",
            description:
                "Between Interstate 17 and Highway 51, this laid-back hotel is 2 miles from Phoenix Art Museum and 3 miles from downtown Phoenix. Featuring custom-designed beds, the unfussy rooms offer free WiFi and flat-screen TVs. All have microwaves, minifridges and Keurig coffeemakers. Some provide balconies, and room service is available. Parking and an area shuttle are complimentary. There's a casual restaurant with a bar, along with a lounge and a 24-hour convenience store. Other amenities include a fitness center and an outdoor pool, as well as a ballroom. Coin-operated laundry facilities are on-site, and breakfast is offered for an additional fee.",
            pos: [33.50028588666924, -112.07223360355636],
            bedsAvailable: 24,
            imgUrl: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhH02ziI61AE4SqrmdJBttNptSVtBoDVMnb_jE6v4aCgnp7eL4V9YHxnRb1BBlsIyvoGafl4BP5exuHh0SHK6zRbJsOpfTtGmt_kSvjhG0GIhps9-24WYkRCeIlXiO6koIxBS5YhSLqIPT2m12CpTRe-YEgU3Y-k8S4eDpZ9oNR_9TeA1GNOhVTw=w408-h272-k-no",
        },
        {
            name: "Comfort Inn & Suites North Glendale and Peoria",
            description:
                "This simple hotel is 3.9 miles from Peoria Sports Complex and less than 4 miles off Interstate 17. All rooms and suites have en suite bathrooms and desks, as well as free WiFi, flat-screen TVs and coffeemakers. Some also feature private balconies. Free continental breakfast is provided, as well as free coffee in the lobby. The hotel also has a seasonal outdoor pool, a hot tub and a sun deck, and guests receive free access to an adjacent fitness center. Other amenities include meeting rooms for up to 50 and free large-vehicle parking.",
            pos: [33.644930887922776, -112.18096207996793],
            bedsAvailable: 4,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipMvt_6Wdx1w8W8FQ2haq2Bj3myvPrbBs8c7Mq6y=w408-h272-k-no",
        },
        {
            name: "Best Western Plus Scottsdale Thunderbird Suites",
            description:
                "This casual hotel is a mile from CrackerJax amusement park, 3 miles from the Penske Racing Museum and 6 miles from McDowell Sonoran Preserve. Decorated in neutral tones, the straightforward rooms and suites offer complimentary Wi-Fi, flat-screen TVs and wet bars. Some have balconies, pull-out sofas and/or sitting areas. Freebies include breakfast and parking. Other amenities consist of a restaurant, a cocktail lounge, and meeting and event space. There's also a convenience shop, guest laundry facilities and a gym, plus an outdoor pool and a hot tub.",
            pos: [33.62523408846759, -111.91492715989996],
            bedsAvailable: 10,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipNnh6hdkYgMG8sdwWshli5A3p5eTvGlHggWcJKY=w426-h240-k-no",
        },
        {
            name: "Hilton Garden Inn Phoenix/Tempe ASU Area",
            description:
                "An 11-minute walk from Tempe Marketplace's shopping and dining, this upscale all-suite hotel is 2 miles from Arizona State University and 7 miles from Phoenix Sky Harbor International Airport. Conservative studios come with 40-inch flat-screens and free Wi-Fi, along with living areas, desks and kitchenettes. The 1- and 2-bedroom suites add separate living rooms. Freebies include parking, a grocery shopping service and a hot breakfast buffet, plus a local-area shuttle that serves the airport. There's an outdoor pool, an exercise room and a 24/7 business center.",
            pos: [33.43376471496827, -111.89911042991976],
            bedsAvailable: 7,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipP2KLtDdODS28GFYF8XThC2zyyawE9CvUJf_w51=w408-h272-k-no",
        },
        {
            name: "WoodSpring Suites Mesa Chandler",
            description:
                "In a business park, this straightforward hotel is 3 miles from the Mesa Contemporary Arts Museum, and 14 miles from both Phoenix Sky Harbor International Airport and the Desert Botanical Garden. The unpretentious rooms have kitchens, Wi-Fi and TVs. Suites add living areas; some feature sofabeds. Amenities include a fitness room and a coin-operated laundry. Parking is available.",
            pos: [33.38487550139073, -111.82186088507422],
            bedsAvailable: 8,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipOuS1ssaTyndLD0wtrmAIl17XANUKbpc66C-v05=w408-h272-k-no",
        },
        {
            name: "Superior Suites Phoenix Mesa",
            description:
                "A 5.4-mile drive from the Mesa Arts Center, this straightforward, Southwestern-style hotel is also 6.4 miles from the Arizona Museum of Natural History. The casual rooms have complimentary Wi-Fi and TVs, plus minifridges and microwaves. Suites add full kitchens and/or whirlpool tubs. Kids aged 17 and under stay free in their parents’ room. Perks include free continental breakfast, and parking for cars and large vehicles. There's also an outdoor pool. Pets are welcome for a fee.",
            pos: [33.41933343176571, -111.73829383612457],
            bedsAvailable: 12,
            imgUrl: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhE8yE_tKFzxeeqOYzpMsVQfTI0MKfrZcOV_E2Y5kfVUR7sb91yx2t0NfEu3pG2-0ZuBFu9g5cV9qM0ROL_DtHrsrNOgm73-Zr3Hj5jBikgjlw24LHRKF8mttoEEJ8cohTRuCKuRFLalQb5laDHiq78gvWopedjFC3f3hmz4zorHSsjX2rLEYV78=w408-h300-k-no",
        },
        {
            name: "Best Western Inn Of Chandler",
            description:
                "This straightforward hotel is a mile from the Chandler Center for the Arts and 7 miles from the Arizona Museum of Natural History. Unfussy rooms come with free Wi-Fi, flat-screens and coffeemakers, plus minifridges and microwaves. Upgraded rooms and suites add whirlpool tubs and/or pull-out sofas. Kids 12 and under stay at no extra cost with an adult. Cooked breakfast and parking are complimentary. Amenities also include a seasonal outdoor pool, a hot tub and a business center.",
            pos: [33.32394350570754, -111.83771465214328],
            bedsAvailable: 20,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipMqolzzj9pWhwpYcwHjNhDvRH_NIH0eFv7M8R0b=w426-h240-k-no",
        },
        {
            name: "Best Western Innsuites Phoenix Hotel & Suites",
            description:
                "Set 6 miles from Castles N' Coasters amusement park, this casual hotel is 10 miles from both Phoenix Sky Harbor Airport and Phoenix Art Museum. The straightforward rooms have free Wi-Fi and flat-screen TVs, as well as microwaves, minifridges and coffeemakers. Suites have pull-out sofas and/or whirlpool tubs. Freebies include a hot breakfast buffet, evening cocktail socials and parking. There's a heated outdoor pool, a fitness room and a sundeck. Other amenities consist of a business center and meeting space.",
            pos: [33.55969234136609, -112.04994241387732],
            bedsAvailable: 13,
            imgUrl: "https://lh5.googleusercontent.com/p/AF1QipOqshD3u8O4wlzm8PhrMOjPi8SkdYqX5FF3B-fE=w426-h240-k-no",
        },
    ];

    return (
        <div className="flex w-screen h-screen p-3 gap-5">
            <div className="flex-initial">
                <HouseList houses={houses} />
            </div>
            <div className="flex-auto">
                <MapContainer
                    center={pos}
                    zoom={zoom}
                    className="w-full h-full rounded-xl"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {houses.map((house, idx) => {
                        const tmp: House = { ...house };

                        delete tmp.imgUrl;
                        delete tmp.description;

                        return (
                            <Marker key={idx} position={house.pos}>
                                <Popup>
                                    <HouseCard house={tmp} />
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
        </div>
    );
}

export default App;
