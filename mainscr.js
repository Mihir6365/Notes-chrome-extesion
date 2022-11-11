const expansion_btn = document.getElementById("expansion_btn");
expansion_btn.addEventListener("click", function () {
    chrome.tabs.create({ url: chrome.extension.getURL('newtab.html') });
})