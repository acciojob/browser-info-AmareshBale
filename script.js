//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the user's browser and version
    const browserName = getBrowserName();
    const browserVersion = getBrowserVersion();

    // Display the information in the 'browser-info' element
    const browserInfoElement = document.getElementById('browser-info');
    browserInfoElement.innerText = "You are using " + browserName + " version " + browserVersion;
});

// Function to get the user's browser name
function getBrowserName() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome")) {
        return "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        return "Mozilla Firefox";
    } else if (userAgent.includes("Safari")) {
        return "Apple Safari";
    } else if (userAgent.includes("Edge")) {
        return "Microsoft Edge";
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        return "Opera";
    } else if (userAgent.includes("Trident") || userAgent.includes("MSIE")) {
        return "Internet Explorer";
    } else {
        return "Unknown Browser";
    }
}

// Function to get the user's browser version
function getBrowserVersion() {
    const userAgent = navigator.userAgent;
    const versionIndex = userAgent.indexOf('Version/');

    if (versionIndex !== -1) {
        return userAgent.substring(versionIndex + 8, userAgent.indexOf(' ', versionIndex));
    } else {
        return "Unknown Version";
    }
}

