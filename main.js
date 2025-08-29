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

/**
 * Render emergency services cards in the grid
 */
function renderServices() {
  if (!servicesGridElement) {
    console.error("Services grid element not found");
    return;
  }
  
  servicesGridElement.innerHTML = "";
  
  emergencyServices.forEach(service => {
    const card = createServiceCard(service);
    servicesGridElement.appendChild(card);
  });
}

/**
 * Create a service card element
 */
 function createServiceCard(service) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow service-card";
  
  const isFavorite = favorites.has(service.id);
  const heartButtonClass = isFavorite ?
    "p-1 rounded text-red-500" :
    "p-1 rounded text-gray-400 hover:text-red-500";
  
  card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <div class="bg-blue-300 py-2 px-2 rounded-lg text-3xl">${
                service.icon
            }</div>
            <button onclick="handleHeartClick(${
                service.id
            })" class="${heartButtonClass} heart-icon">
                ${createHeartSVG(isFavorite)}
            </button>
        </div>
        
        <div class="mb-4">
            <h3 class="font-semibold text-gray-800 mb-1">${service.name}</h3>
            <p class="text-sm text-gray-600 mb-2">${service.nameEn}</p>
            <p class="text-2xl font-bold text-gray-900 mb-3">${
                service.number
            }</p>
            <span class="inline-block px-2 py-1 rounded-full text-xs font-medium ${
                service.categoryColor
            }">
                ${service.category}
            </span>
        </div>
        
        <div class="flex gap-2">
            <button onclick="handleCopyClick('${service.number}', '${
                service.nameEn
            }')" 
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors copy-btn">
                ${createCopySVG()}
                Copy
            </button>
            <button onclick="handleCallClick(${service.id})" 
                    class="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors call-btn">
                ${createPhoneSVG()}
                Call
            </button>
        </div>
    `;
  
  return card;
}

/**
 * Create heart SVG icon
 */
 function createHeartSVG(filled) {
    return `
        <svg class="w-5 h-5" fill="${
            filled ? "currentColor" : "none"
        }" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    `;
}

/**
 * Create copy SVG icon
*/

function createCopySVG() {
    return `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
    `;
}

/**
 * Create phone SVG icon
*/
function createPhoneSVG() {
    return `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
    `;
}

/**
 * Handle heart icon click
*/
function handleHeartClick(serviceId) {
    if (!favorites.has(serviceId)) {
        favorites.add(serviceId);
        heartCount++;
        updateCounters();
        renderServices();
        
        // Show feedback
        showNotification("Service added to favorites!", "success");
    } else {
        showNotification("Service already in favorites!", "info");
    }
}

/**
 * Handle call button click
*/
function handleCallClick(serviceId) {
    const service = emergencyServices.find(s => s.id === serviceId);
    
    if (!service) {
        console.error("Service not found");
        return;
    }
    
    // Check if user has enough coins
    if (coinCount < 20) {
        alert("Insufficient coins! You need at least 20 coins to make a call.");
        showNotification("Insufficient coins for call!", "error");
        return;
    }
    
    // Deduct coins
    coinCount -= 20;
    
    // Get current time
    const currentTime = getCurrentTime();
    
    // Create history item
    const newHistoryItem = {
        serviceName: service.nameEn,
        number: service.number,
        timestamp: currentTime
    };
    
    // Add to call history 
    callHistory.unshift(newHistoryItem);
    
    // Update UI
    updateCounters();
    renderCallHistory();
    
    // Show success message
    alert(`Calling ${service.nameEn} at ${service.number}. 20 coins deducted.`);
    showNotification(`Called ${service.nameEn}`, "success");
}

/**
 * Handle copy button click
*/
async function handleCopyClick(number, serviceName) {
        try {
            
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(number);
            } else {
                
                copyToClipboardFallback(number);
            }
                    // Increment copy count
        copyCount++;
        updateCounters();

        // Show success message
        alert(`${serviceName} number ${number} copied to clipboard!`);
        showNotification(`Number copied: ${number}`, "success");
    } catch (err) {
        console.error("Failed to copy to clipboard:", err);
        // Try fallback method
        copyToClipboardFallback(number);
        copyCount++;
        updateCounters();
        alert(`${serviceName} number ${number} copied to clipboard!`);
        showNotification(`Number copied: ${number}`, "success");
    }
}
            