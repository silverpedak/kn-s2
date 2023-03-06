import { Location } from "@/types/domain/location-model.type";

export const emptyLocation: Location = {
  id: 0,
  title: "",
  address: "",
  zipcode: "",
  country: "",
  owner: {
    id: 0,
    name: "",
  },
  longitude: 0,
  latitude: 0,
  typeId: 0,
};

export const locationsData: Location[] = [
  {
    id: 1,
    title: "Ħamrun Office",
    address: "5 Brentwood Terrace",
    zipcode: "HMR",
    country: "Malta",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 14.482911,
    latitude: 35.884431,
    typeId: 1,
  },
  {
    id: 2,
    title: "Säffle Manufacturing",
    address: "204 Farwell Center",
    zipcode: "661 42",
    country: "Sweden",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 12.9380053,
    latitude: 59.1239637,
    typeId: 2,
  },
  {
    id: 3,
    title: "Matur Manufacturing",
    address: "46269 Eliot Park",
    zipcode: null,
    country: "Indonesia",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 100.2824483,
    latitude: -0.2762774,
    typeId: 2,
  },
  {
    id: 4,
    title: "Dashev Warehouse",
    address: "98889 Eastlawn Park",
    zipcode: null,
    country: "Ukraine",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 29.4397153,
    latitude: 48.9957904,
    typeId: 3,
  },
  {
    id: 5,
    title: "Haapajärvi Office",
    address: "03 Basil Alley",
    zipcode: "85801",
    country: "Finland",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 25.3525414,
    latitude: 63.7453456,
    typeId: 1,
  },
  {
    id: 6,
    title: "Goubangzi Manufacturing",
    address: "090 Acker Plaza",
    zipcode: null,
    country: "China",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 121.781518,
    latitude: 41.375722,
    typeId: 2,
  },
  {
    id: 7,
    title: "Limon Manufacturing",
    address: "397 Saint Paul Street",
    zipcode: "6530",
    country: "Philippines",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 124.5651398,
    latitude: 11.2807738,
    typeId: 2,
  },
  {
    id: 8,
    title: "Yangkou Office",
    address: "2 Drewry Junction",
    zipcode: null,
    country: "China",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 122.235084,
    latitude: 40.667433,
    typeId: 1,
  },
  {
    id: 9,
    title: "Valdivia Manufacturing",
    address: "47672 Debra Avenue",
    zipcode: null,
    country: "Chile",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: -73.2425333,
    latitude: -39.8173788,
    typeId: 2,
  },
  {
    id: 10,
    title: "Milotice Office",
    address: "77673 Mcguire Court",
    zipcode: "696 05",
    country: "Czech Republic",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 17.1329667,
    latitude: 48.9563647,
    typeId: 1,
  },
  {
    id: 11,
    title: "Vila Chã Warehouse",
    address: "258 American Ash Way",
    zipcode: "3505-209",
    country: "Portugal",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: -7.8160659,
    latitude: 40.7339545,
    typeId: 3,
  },
  {
    id: 12,
    title: "Lyalichi Manufacturing",
    address: "4034 Mcbride Center",
    zipcode: "692658",
    country: "Russia",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 132.3885311,
    latitude: 44.0766295,
    typeId: 2,
  },
  {
    id: 13,
    title: "Adirejo Manufacturing",
    address: "94602 Mayer Circle",
    zipcode: null,
    country: "Indonesia",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 105.3467822,
    latitude: -5.0979659,
    typeId: 2,
  },
  {
    id: 14,
    title: "Kosamphi Nakhon Pos",
    address: "6 Larry Parkway",
    zipcode: "90190",
    country: "Thailand",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 99.2823264,
    latitude: 16.6714164,
    typeId: 4,
  },
  {
    id: 15,
    title: "Tandahimba Warehouse",
    address: "19020 Beilfuss Terrace",
    zipcode: null,
    country: "Tanzania",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 39.5691841,
    latitude: -10.7385515,
    typeId: 3,
  },
  {
    id: 16,
    title: "Tallinn Office",
    address: "Peterburi tee 5",
    zipcode: null,
    country: "Estonia",
    owner: {
      id: 0,
      name: "Our Premises",
    },
    longitude: 24.80849,
    latitude: 59.42467,
    typeId: 1,
  },
  // {
  //   id: 17,
  //   title: "Rakvere Warehouse",
  //   address: "Ragavere tee 48",
  //   zipcode: 44207,
  //   country: "Estonia",
  //   owner: {
  //     id: 0,
  //     name: "Our Premises",
  //   },
  //   longitude: 26.38385,
  //   latitude: 59.33852,
  //   typeId: 3,
  // },
];
