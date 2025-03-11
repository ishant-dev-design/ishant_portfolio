"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowDown, X } from "lucide-react";

type SearchTerm = {
  from: string;
  to: string;
  departure: Date | null;
  arrival: Date | null;
  tripType: "one-way" | "round-trip";
};

type PassengerType = {
  adults: number;
  children: number;
  infants: number;
};

export default function FlightSearchForm() {
  const [isFocused, setIsFocused] = useState({
    from: false,
    to: false,
    departure: false,
    arrival: false,
    passengers: false,
  });

  const [searchTerm, setSearchTerm] = useState<SearchTerm>({
    from: "",
    to: "",
    departure: null,
    arrival: null,
    tripType: "one-way",
  });

  const [selectedIndex, setSelectedIndex] = useState({ from: 0, to: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [AlertShow, setAlertShow] = useState(false);

  const [passengers, setPassengers] = useState<PassengerType>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [selectedClass, setSelectedClass] = useState("Economy");
  const classes = ["Economy", "Business", "First Class"];

  const increment = (type: keyof PassengerType) => {
    setPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const decrement = (type: keyof PassengerType) => {
    setPassengers((prev) => ({
      ...prev,
      [type]:
        type === "adults"
          ? Math.max(1, prev[type] - 1)
          : Math.max(0, prev[type] - 1),
    }));
  };

  useEffect(() => {
    if (searchTerm.from && searchTerm.to && searchTerm.from === searchTerm.to) {
      setAlertShow(true);
    } else {
      setAlertShow(false);
    }
  }, [searchTerm]);

  const passengerDropdownRef = useRef<HTMLDivElement>(null);
  const fromDropdownRef = useRef<HTMLDivElement | null>(null);
  const toDropdownRef = useRef<HTMLDivElement | null>(null);
  const departureRef = useRef<HTMLDivElement | null>(null);
  const arrivalRef = useRef<HTMLDivElement | null>(null);

  const locations = [
    "New York",
    "Los Angeles",
    "London",
    "Paris",
    "Tokyo",
    "Chicago",
    "San Francisco",
    "Miami",
    "Toronto",
    "Vancouver",
    "Mexico City",
    "São Paulo",
    "Buenos Aires",
    "Madrid",
    "Berlin",
    "Rome",
    "Athens",
    "Cairo",
    "Dubai",
    "Delhi",
    "Bangkok",
    "Singapore",
    "Hong Kong",
    "Sydney",
    "Melbourne",
    "Cape Town",
    "Johannesburg",
    "Istanbul",
    "Moscow",
    "Beijing",
    "Shanghai",
    "Seoul",
    "Mumbai",
    "Kuala Lumpur",
    "Jakarta",
    "Hanoi",
    "Manila",
    "Lisbon",
    "Amsterdam",
    "Brussels",
    "Zurich",
    "Stockholm",
    "Oslo",
    "Helsinki",
    "Dublin",
    "Vienna",
    "Prague",
    "Warsaw",
    "Budapest",
    "Copenhagen",
  ];

  const passengerTypes: {
    label: string;
    type: keyof PassengerType;
    age: string;
  }[] = [
    { label: "Adults", type: "adults", age: "aged 16+" },
    { label: "Children", type: "children", age: "aged 3 to 15" },
    { label: "Infants", type: "infants", age: "aged 0 to 3" },
  ];

  const filteredLocations = (type: "from" | "to") => {
    if (type !== "from" && type !== "to") return [];
    return locations.filter((location) =>
      location.toLowerCase().includes(searchTerm[type]?.toLowerCase() || "")
    );
  };

  const handleSelection = (type: "from" | "to", value: string) => {
    setSearchTerm((prev) => ({ ...prev, [type]: value }));
    setIsFocused((prev) => ({ ...prev, [type]: false }));
  };

  // Handles keyboard navigation
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: "from" | "to"
  ) => {
    const list = filteredLocations(type);

    setSelectedIndex((prev) => {
      let newIndex = prev[type];

      if (e.key === "ArrowDown") {
        newIndex = prev[type] < list.length - 1 ? prev[type] + 1 : prev[type];
      } else if (e.key === "ArrowUp") {
        newIndex = prev[type] > 0 ? prev[type] - 1 : prev[type];
      } else if (e.key === "Enter" && list.length > 0) {
        handleSelection(type, list[newIndex]);
      }

      return { ...prev, [type]: newIndex };
    });
  };

  // Detect clicks outside dropdowns and date pickers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        passengerDropdownRef.current &&
        !passengerDropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        fromDropdownRef.current &&
        !fromDropdownRef.current.contains(event.target as Node) &&
        isFocused.from
      ) {
        setIsFocused((prev) => ({ ...prev, from: false }));
      }
      if (
        toDropdownRef.current &&
        !toDropdownRef.current.contains(event.target as Node) &&
        isFocused.to
      ) {
        setIsFocused((prev) => ({ ...prev, to: false }));
      }
      if (
        departureRef.current &&
        !departureRef.current.contains(event.target as Node) &&
        isFocused.departure
      ) {
        setIsFocused((prev) => ({ ...prev, departure: false }));
      }
      if (
        arrivalRef.current &&
        !arrivalRef.current.contains(event.target as Node) &&
        isFocused.arrival
      ) {
        setIsFocused((prev) => ({ ...prev, arrival: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFocused]); // Runs whenever `isFocused` changes

  return (
    <>
      <motion.div
        className="flex flex-col mt-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Trip Type Selector */}
        <div className="flex space-x-4 mb-4 cursor-not-allowed">
          {["one-way", "round-trip"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-full transition-colors ${
                searchTerm.tripType === type
                  ? "bg-primary text-foreground font-bold"
                  : "text-foreground bg-textfield border-gray-300 border"
              }`}
              disabled // Prevents interaction
            >
              {type === "one-way" ? "One Way" : "Round Trip"}
            </button>
          ))}
        </div>

        <div className="relative w-full mb-4" ref={passengerDropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full border-gray-300 border flex items-center justify-between px-6 py-4 bg-textfield rounded-full ring-2 ring-transparent focus:ring-primary cursor-pointer"
          >
            <span>
              {passengers.adults + passengers.children + passengers.infants}{" "}
              Passengers, {selectedClass}
            </span>
            <ArrowDown
              size={20}
              className={`transition-all duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-16 left-0 w-full bg-background border-2 border-primary p-4 rounded-3xl z-50"
              >
                {/* Passenger Selection */}
                {passengerTypes.map(({ label, type, age }) => (
                  <div
                    key={type}
                    className="flex justify-between items-center py-2"
                  >
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <span>{label}</span>
                      <span className="text-xs bg-primary text-foreground px-2 py-1 rounded-full font-bold">
                        {age}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrement(type)}
                        disabled={
                          passengers[type] <= (type === "adults" ? 1 : 0)
                        } // Disable for adults at 1, others at 0
                        className="flex justify-center  items-center p-3 h-full aspect-square border rounded-full bg-primary border-primary text-foreground hover:bg-background hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={type === "adults" ? 1 : 0} // Adults min=1, others min=0
                        value={passengers[type]}
                        onChange={(e) => {
                          const value = Math.max(
                            type === "adults" ? 1 : 0,
                            parseInt(e.target.value, 10) || 0
                          );
                          setPassengers((prev) => ({ ...prev, [type]: value }));
                        }}
                        className="p-1 w-8 text-center rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => increment(type)}
                        className="flex justify-center items-center p-3 h-full aspect-square border rounded-full bg-primary border-primary text-foreground hover:bg-background hover:text-primary transition-all duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                {/* Class Selection */}
                <div className="mt-4">
                  <span className="flex mb-2">Class</span>
                  <div className="flex flex-col sm:flex-row bg-background py-2 rounded-full w-full space-y-2 sm:space-x-2 sm:space-y-0">
                    {classes.map((flightClass) => (
                      <button
                        key={flightClass}
                        className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium w-full text-nowrap
            ${
              selectedClass === flightClass
                ? "bg-primary text-foreground"
                : "text-foreground bg-textfield"
            }
          `}
                        onClick={() => setSelectedClass(flightClass)}
                      >
                        {flightClass}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 w-full">
            {/* FROM Input */}
            <div className="relative w-full" ref={fromDropdownRef}>
              <input
                className="w-full px-6 py-4 border-gray-300 border rounded-full outline-none ring-2 ring-transparent bg-textfield focus:ring-primary"
                placeholder="From"
                value={searchTerm.from}
                onChange={(e) => {
                  setSearchTerm({ ...searchTerm, from: e.target.value });
                  setSelectedIndex({ ...selectedIndex, from: 0 });
                }}
                onFocus={() => setIsFocused({ ...isFocused, from: true })}
                onKeyDown={(e) => handleKeyDown(e, "from")}
              />

              {/* Clear Button */}
              {searchTerm.from && (
                <button
                  className="absolute right-3 rounded-full p-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white hover:bg-red-600"
                  onClick={() => setSearchTerm({ ...searchTerm, from: "" })}
                >
                  <X size={20} />
                </button>
              )}

              <AnimatePresence>
                {isFocused.from && filteredLocations("from").length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-16 w-full z-50 bg-background border-2 border-primary p-4 rounded-3xl max-h-72 overflow-y-auto custom-scrollbar"
                  >
                    <ul>
                      {filteredLocations("from").map((location, index) => (
                        <li
                          key={index}
                          className={`px-4 py-2 rounded-2xl cursor-pointer transition-all ${
                            selectedIndex.from === index
                              ? "bg-primary text-foreground hover:bg-primary hover:text-foreground"
                              : ""
                          }`}
                          onMouseDown={() => handleSelection("from", location)}
                          onMouseEnter={() =>
                            setSelectedIndex({ ...selectedIndex, from: index })
                          }
                        >
                          {location}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* TO Input */}
            <div className="relative w-full" ref={toDropdownRef}>
              <input
                className="w-full px-6 border-gray-300 border py-4 rounded-full outline-none ring-2 ring-transparent bg-textfield focus:ring-primary"
                placeholder="To"
                value={searchTerm.to}
                onChange={(e) => {
                  setSearchTerm({ ...searchTerm, to: e.target.value });
                  setSelectedIndex({ ...selectedIndex, to: 0 });
                }}
                onFocus={() => {
                  setIsFocused({ ...isFocused, to: true });
                }}
                onKeyDown={(e) => handleKeyDown(e, "to")}
              />

              {/* Clear Button */}
              {searchTerm.to && (
                <button
                  className="absolute right-3 rounded-full p-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white hover:bg-red-600"
                  onClick={() => setSearchTerm({ ...searchTerm, to: "" })}
                >
                  <X size={20} />
                </button>
              )}

              <AnimatePresence>
                {isFocused.to && filteredLocations("to").length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-16 w-full z-50 bg-background border-2 border-primary p-4 rounded-3xl max-h-72 overflow-y-auto custom-scrollbar"
                  >
                    <ul>
                      {filteredLocations("to").map((location, index) => (
                        <li
                          key={index}
                          className={`px-4 py-2 rounded-2xl cursor-pointer transition-all ${
                            selectedIndex.to === index
                              ? "bg-primary text-foreground hover:bg-primary hover:text-foreground"
                              : ""
                          }`}
                          onMouseDown={() => handleSelection("to", location)}
                          onMouseEnter={() =>
                            setSelectedIndex({ ...selectedIndex, to: index })
                          }
                        >
                          {location}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 w-full">
            {/* Departure Date Picker */}
            <div className="relative w-full">
              <input
                placeholder="Departure Date"
                className="w-full px-6 py-4 border-gray-300 border rounded-full outline-none duration-200 bg-textfield ring-2 ring-transparent focus:ring-primary cursor-pointer"
                value={
                  searchTerm.departure
                    ? searchTerm.departure.toDateString()
                    : ""
                }
                onFocus={() =>
                  setIsFocused((prev) => ({ ...prev, departure: true }))
                }
                readOnly
              />

              {/* Clear Button */}
              {searchTerm.departure && (
                <button
                  className="absolute right-3 rounded-full p-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white hover:bg-red-600"
                  onClick={() =>
                    setSearchTerm({ ...searchTerm, departure: null })
                  }
                >
                  <X size={20} />
                </button>
              )}

              <AnimatePresence>
                {isFocused.departure && (
                  <motion.div
                    ref={departureRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-16 left-0 w-full z-[500] rounded-3xl"
                  >
                    <DatePicker
                      selected={searchTerm.departure}
                      onChange={(date) => {
                        setSearchTerm((prev) => ({
                          ...prev,
                          departure: date,
                          tripType:
                            date && !prev.arrival ? "one-way" : "round-trip",
                        }));
                        setIsFocused({ ...isFocused, departure: false });
                      }}
                      inline
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Arrival Date Picker */}
            <div className="relative w-full">
              <input
                placeholder="Arrival Date"
                className="w-full px-6 py-4 border-gray-300 border rounded-full outline-none duration-200 ring-2 bg-textfield ring-transparent focus:ring-primary cursor-pointer"
                value={
                  searchTerm.arrival ? searchTerm.arrival.toDateString() : ""
                }
                onFocus={() =>
                  setIsFocused((prev) => ({ ...prev, arrival: true }))
                }
                readOnly
              />

              {/* Clear Button */}
              {searchTerm.arrival && (
                <button
                  className="absolute right-3 rounded-full p-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white hover:bg-red-600"
                  onClick={() =>
                    setSearchTerm((prev) => ({
                      ...prev,
                      arrival: null,
                      tripType: prev.departure ? "one-way" : "one-way",
                    }))
                  }
                >
                  <X size={20} />
                </button>
              )}

              <AnimatePresence>
                {isFocused.arrival && (
                  <motion.div
                    ref={arrivalRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-16 left-0 w-full z-[500] rounded-3xl"
                  >
                    <DatePicker
                      selected={searchTerm.arrival}
                      onChange={(date) => {
                        setSearchTerm((prev) => ({
                          ...prev,
                          arrival: date,
                          tripType:
                            prev.departure && date ? "round-trip" : "one-way",
                        }));
                        setIsFocused({ ...isFocused, arrival: false });
                      }}
                      inline
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div
          className={`flex justify-start mt-4 bg-red-600 text-foreground px-3 py-1 rounded-full w-fit text-sm ${
            AlertShow ? "flex" : "hidden"
          }`}
        >
          From and To locations cannot be same.
        </div>

        {/* Search Button */}
        <div className="flex justify-start mt-4">
          <button
            className={`px-6 py-3 rounded-full font-semibold transition-colors ${
              searchTerm.from &&
              searchTerm.to &&
              searchTerm.departure &&
              searchTerm.from !== searchTerm.to
                ? "bg-primary text-foreground hover:bg-background hover:text-primary hover:border-primary border-2 border-transparent"
                : "bg-gray-400 cursor-not-allowed border-2 border-transparent"
            }`}
            disabled={
              !searchTerm.from ||
              !searchTerm.to ||
              !searchTerm.departure ||
              searchTerm.from === searchTerm.to
            }
            onMouseEnter={() => {
              if (searchTerm.from === searchTerm.to) {
                alert("From and To locations cannot be the same!");
              } else {
                console.log("Searching flights...", searchTerm);
              }
            }}
          >
            Search Flights
          </button>
        </div>
      </motion.div>
    </>
  );
}
