import React, { useState, useEffect } from "react";
import AircraftCard from "./AircraftCard";

const ownedAircraft = [
  {
    id: 23,
    tailNumber: "N7881U",
    designation: "C-150",
    manufacturer: "Cessna",
    nickname: null,
    isManned: true,
    alternateDesignations: ["C-150"],
    photoUrl: null,
    year: 1965,
  },
  {
    id: 24,
    tailNumber: "N11261",
    designation: "C-150",
    manufacturer: "Cessna",
    nickname: null,
    isManned: true,
    alternateDesignations: ["C-150"],
    photoUrl: null,
    year: 1967,
  },
  {
    id: 25,
    tailNumber: "N43GEC",
    designation: "UV-18B",
    manufacturer: "DeHaviland",
    nickname: "Twin Otter",
    isManned: true,
    alternateDesignations: ["UV-18A", "UV-18B"],
    photoUrl: null,
    year: 1977,
  },
  {
    id: 26,
    tailNumber: "N82650",
    designation: "A-10C",
    manufacturer: "Fairchild Republic",
    nickname: "Thunderbolt II",
    isManned: true,
    alternateDesignations: ["A-10A", "A-10C", "OA-10A", "YA-10", "YA-10B"],
    photoUrl: null,
    year: 1982,
  },
];

const Aircraft = () => {
  const [aircraft, setAircraft] = useState({
    originalList: [],
    mappedAircraft: [],
    filteredAircraft: [],
    mappedFilteredAircraft: [],
  });

  const [pageSettings] = useState({
    year: 1967,
    isManned: true,
  });

  useEffect(() => {
    generateState(ownedAircraft);
  }, []);

  const generateState = (list) => {
    console.log(list);
    if (list?.length > 0) {
      // truthy falsey
      setAircraft((prevState) => {
        // console.log(prevState);
        const newAircraftObj = {
          ...prevState,
        };
        newAircraftObj.originalList = list;
        newAircraftObj.mappedAircraft2 = list.map((sglAircraft) => {
          return (
            <div className="row" key={sglAircraft.id}>
              <div className="card">
                <h3>{`Id: ${sglAircraft.id} : Tail: ${sglAircraft.tailNumber}`}</h3>
              </div>
            </div>
          );
        });
        newAircraftObj.mappedAircraft = aircraftMapper(list);
        newAircraftObj.filteredAircraft = list.filter(filterSingleAircraft);
        newAircraftObj.mappedFilteredAircraft = list
          .filter(filterSingleAircraft)
          .map(mapSingleAircaft);
        // newAircraftObj.mappedFilteredAircraft = aircraftMapper(
        //   newAircraftObj.filteredAircraft,
        //   true
        // );
        return newAircraftObj;
      });
    }
  };

  const mapSingleAircaft = (sglAircraft, index, allAircraft) => {
    console.log(index, allAircraft.length);
    return (
      <div className="row" key={sglAircraft.id}>
        <div className="card">
          <h3>{`Id: ${sglAircraft.id} : Tail: ${sglAircraft.tailNumber}`}</h3>
          <p>manufacturer</p>
          <p>{sglAircraft.manufacturer}</p>
        </div>
      </div>
    );
  };

  const filterSingleAircraft = (sglAircraft, index, allAircraft) => {
    console.log(
      "filterSingleAircraft",
      index,
      allAircraft.length,
      sglAircraft.year
    );
    return (
      sglAircraft.isManned === pageSettings.isManned &&
      (!pageSettings.year || sglAircraft.year === pageSettings.year)
    );
  };

  const aircraftMapper = (list, isFilter) => {
    const mapSingleAircaft2 = (sglAircraft, index, allAircraft) => {
      console.log(index, allAircraft.length);
      return (
        <div className="row" key={sglAircraft.id}>
          <div
            className="card"
            style={
              isFilter
                ? { backgroundColor: "yellow" }
                : { backgroundColor: "cyan" }
            }
            // style={{ backgroundColor: "blueviolet" }}
            // booleanOperation ? theThingYouWantIfTrue : theThingYouWantIfFalse
          >
            <h3>{`Id: ${sglAircraft.id} : Tail: ${sglAircraft.tailNumber}`}</h3>
            <p>manufacturer</p>
            <p>{sglAircraft.manufacturer}</p>
          </div>
        </div>
      );
    };
    const mapAicraftToFriend = (sglAircraft, index, allAircraft) => {
      console.log(index, allAircraft.length);
      return <AircraftCard key={sglAircraft.id} aircraft={sglAircraft} />;
    };
    console.log(list.map(mapAicraftToFriend));
    return list.map(mapSingleAircaft2);
  };

  console.log(aircraft);
  console.log(aircraft?.mappedAircraft?.length);
  console.log(aircraft?.filteredAircraft?.length);
  console.log(aircraft.mappedFilteredAircraft.length);
  return (
    <div className="container">
      <div className="row">
        <h1>Aircraft to render</h1>
      </div>
      {aircraft?.mappedAircraft}
      {aircraft?.mappedFilteredAircraft}
    </div>
  );
};

export default Aircraft;

// import React, { useState, useEffect } from "react";

// const ownedAircraft = [
//   {
//     id: 23,
//     tailNumber: "N7881U",
//     designation: "C-150",
//     manufacturer: "Cessna",
//     nickname: null,
//     isManned: true,
//     alternateDesignations: ["C-150"],
//     photoUrl: null,
//     year: 1965,
//   },
//   {
//     id: 24,
//     tailNumber: "N11261",
//     designation: "C-150",
//     manufacturer: "Cessna",
//     nickname: null,
//     isManned: true,
//     alternateDesignations: ["C-150"],
//     photoUrl: null,
//     year: 1967,
//   },
//   {
//     id: 25,
//     tailNumber: "N43GEC",
//     designation: "UV-18B",
//     manufacturer: "DeHaviland",
//     nickname: "Twin Otter",
//     isManned: true,
//     alternateDesignations: ["UV-18A", "UV-18B"],
//     photoUrl: null,
//     year: 1977,
//   },
//   {
//     id: 26,
//     tailNumber: "N82650",
//     designation: "A-10C",
//     manufacturer: "Fairchild Republic",
//     nickname: "Thunderbolt II",
//     isManned: true,
//     alternateDesignations: ["A-10A", "A-10C", "OA-10A", "YA-10", "YA-10B"],
//     photoUrl: null,
//     year: 1982,
//   },
// ];

// const Aircraft = () => {
//   const [aircraft] = useState({
//     originalList: [],
//     mappedAircraft: [],
//     filteredAircraft: [],
//     mappedFilteredAircraft: [],
//   });

//   const pageSettings = useState({
//     year: 1965,
//     isManned = false
//   });

//   useEffect(() => {
//     generalState(ownedAircraft);
//   }, []);

//   const generalState = (list) => {
//     console.log(list);
//     if (list?.length > 0) {
//       //truthy falsey
//       setAircraft((prevState) => {
//         // console.log(prevState);
//         const newAircraftObj = {
//           ...prevState,
//         };
//         newAircraftObj.originalList = list;
//         newAircraftObj.mappedAircraft = list.map(mapSingleAircarft);
//         newAircraftObj.filteredAircraft = list.filter(filterSingleAircraft);
//         newAircraftObj.mappedFilteredAircraft =
//           newAircraftObj.filteredAircraft.map(mapSingleAircarft);
//         return newAircraftObj;
//       });
//     }
//   };

//   const filterSingleAircraft = (sglAircraft, index, allAircraft) => {
//     console.log("filterSingleAircraft", index, allAircraft.length);
//     return sglAircraft.isManned === pageSettings.year;
//    ( !pageSettings.year || sglAircraft.year === pageSettings.year)
//   };

//   const mapSingleAircarft = (sglAircraft, index, allAircraft) => {
//     console.log(index, allAircraft.length);
//     return (
//       <div className="row" key={sglAircraft.id}>
//         <div className="card">
//           <h3>{`Id: ${sglAircraft.id} : Tail: ${sglAircraft.tailNumber}`}</h3>
//           <p>Manufacturer</p>
//           <p>{sglAircraft.manufacturer}</p>
//         </div>
//       </div>
//     );
//   };

//   console.log(aircraft);
//   console.log(ownedAircraft?.mappedAircraft?.length);
//   console.log(ownedAircraft?.mappedAircraft?.length);
//   console.log(ownedAircraft.mappedFilteredAircraft.length);

//   return (
//     <div className="container">
//       <div className="row">
//         <h1>Aircraft to render</h1>
//       </div>
//       {aircraft?.mappedAircraft}
//       {aircraft?.mappedFilteredAircraft}
//     </div>
//   );
// };

// export default Aircraft;
