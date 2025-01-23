// Overrides
user_pref("extensions.pocket.enabled", false); // (????) I do not use it
user_pref("browser.preferences.moreFromMozilla", false); // (????) It is just ads for mozilla products

user_pref("browser.safebrowsing.downloads.remote.enabled", true); // (0402) I am fine with giving a little info about the file to google

// Restore session
user_pref("browser.startup.page", 3); // (0102) Restore session on startup
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false); // (2811) Needed to restore session on starup (0102)
