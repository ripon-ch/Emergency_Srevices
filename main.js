// Emergency services data
const emergencyServices = [
    {
        id: 1,
        icon: "🚨",
        name: "National Emergency Number",
        nameEn: "National Emergency",
        number: "999",
        category: "All",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 2,
        icon: "👮",
        name: "Police Helpline Number",
        nameEn: "Police",
        number: "999",
        category: "Police",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 3,
        icon: "🚒",
        name: "Fire Service Number",
        nameEn: "Fire Service",
        number: "999",
        category: "Fire",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 4,
        icon: "🚑",
        name: "Ambulance Service",
        nameEn: "Ambulance",
        number: "1994-999999",
        category: "Health",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 5,
        icon: "👩‍⚕️",
        name: "Women & Child Helpline",
        nameEn: "Women & Child Helpline",
        number: "109",
        category: "Help",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 6,
        icon: "⚖️",
        name: "Anti-Corruption Helpline",
        nameEn: "Anti-Corruption",
        number: "106",
        category: "Govt",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 7,
        icon: "⚡",
        name: "Electricity Helpline",
        nameEn: "Electricity Outage",
        number: "16216",
        category: "Electricity",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 8,
        icon: "📞",
        name: "Brac Helpline",
        nameEn: "Brac",
        number: "16445",
        category: "NGO",
        categoryColor: "bg-gray-100 text-gray-600"
    },
    {
        id: 9,
        icon: "🚂",
        name: "Bangladesh Railway Helpline",
        nameEn: "Bangladesh Railway",
        number: "163",
        category: "Travel",
        categoryColor: "bg-gray-100 text-gray-600"
    }
];

// Global state variables
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];
let favorites = new Set();

// DOM element references
let heartCountElement;
let coinCountElement;
let copyCountElement;
let servicesGridElement;
let noHistoryTextElement;
let historyListElement;

/**
 * Initialize the application
 */

function init() {
  // Get DOM element references
  heartCountElement = document.getElementById("heartCount");
  coinCountElement = document.getElementById("coinCount");
  copyCountElement = document.getElementById("copyCount");
  servicesGridElement = document.getElementById("servicesGrid");
  noHistoryTextElement = document.getElementById("noHistoryText");
  historyListElement = document.getElementById("historyList");
  
  // Render initial content
  renderServices();
  updateCounters();
  renderCallHistory();
  
  console.log("Emergency Service Directory initialized successfully");
}