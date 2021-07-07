let color = '#3aa757';
let usage = 'true';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ usage });
  //console.log('Default background color set to %cgreen', `color: ${color}`);
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.greeting == "true" ){
        chrome.storage.sync.set({usage:'false'});
        sendResponse({farewell: "goodbye"});
    }else if( request.greeting == "false" ){
        chrome.storage.sync.set({usage:'true'});
        sendResponse({farewell: "goodbye"});
    }
  }
);
