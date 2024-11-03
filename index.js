async function helloFun(){
    let [tab] = await chrome.tabs.query({ active: true})
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        func: () => {
            alert("This is my first Extension..")
        }
    })
}

document.getElementById("mybutton").addEventListener('click', helloFun)