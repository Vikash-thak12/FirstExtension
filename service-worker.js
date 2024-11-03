chrome.action.onClicked.addListener(async (tab) => {
    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: showAlert
        });
    } catch (error) {
        console.error("Script execution failed: ", error);
    }
});

function showAlert() {
    alert("Hello from my first Extension!");
}
