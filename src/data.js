export const initialCategories = [
  {
    id: "parks",
    name: "Parks",
    icon: "🌳",
    places: [
      {
        id: "gorky",
        name: "Gorky Park",
        description: "Central park of culture and leisure",
        image: "🌲",
        todos: [],
      },
      {
        id: "sokolniki",
        name: "Sokolniki",
        description: "Large park for walking and sports",
        image: "🍃",
        todos: [],
      },
    ],
  },
  {
    id: "museums",
    name: "Museums",
    icon: "🏛️",
    places: [
      {
        id: "tretyakov",
        name: "Tretyakov Gallery",
        description: "Main museum of Russian art",
        image: "🎨",
        todos: [],
      },
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants",
    icon: "🍽️",
    places: [
      {
        id: "pushkin",
        name: "Cafe Pushkin",
        description: "Historic restaurant of Russian cuisine",
        image: "🥟",
        todos: [],
      },
    ],
  },
];

export const todosData = {
  gorky: [
    { id: 1, text: "Ride a bicycle", completed: false },
    { id: 2, text: "Feed ducks at the pond", completed: true },
    { id: 3, text: "Visit the old apartment museum", completed: false },
  ],
  sokolniki: [
    { id: 1, text: "Go skiing", completed: false },
    { id: 2, text: "Visit the rose garden", completed: false },
  ],
  tretyakov: [
    { id: 1, text: "See Black Square", completed: false },
    { id: 2, text: "Buy souvenirs", completed: true },
  ],
  pushkin: [
    { id: 1, text: "Try borscht", completed: false },
    { id: 2, text: "Book a table", completed: true },
    { id: 3, text: "Leave a tip", completed: false },
  ],
};