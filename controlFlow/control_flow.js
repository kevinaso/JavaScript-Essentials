let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? 
"Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

//Practice task

let role="employee"

switch (role) {
    case "employee":
        console.log("As an " + role + " you are authorized to have acces to Dietary services", );
        break;
    case "enrolled member":
        console.log("As an " + role + " you are authorized to have acces to Dietary services and one-on-one interaction with a dietician", );
        break;
    case "susbscriber":
        console.log("As an " + role + " you are authorized to have acces to partial Dietary services", );
        break;
    default:
        console.log("As an non-subscriber you are not authorized to have acces to any service", );
}