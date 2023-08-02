console.log("guess who's back ?!");
browser.tabs.create({"url": "tabMap/index.html"});
browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({"url": "tabMap/index.html"});

  });
// browser.menus.create({
//     id: "open-sidebar",
//     title: "Open Tab Map",
//     contexts: ["all"],
//     command: "_execute_sidebar_action"
// });

