document.getElementById("btnBookmark").addEventListener("click", function () {
    // create bookmark folder 
    chrome.bookmarks.create({
        'parentId': "1",
        'title': document.getElementById("bookmarkFolderName").value
    },
        function (newFolder) {
            console.log("added folder: " + newFolder.id);

            // get all open tabs
            chrome.tabs.query({}, function (res) {
                for (let i = 0; i < res.length; i++) {
                    // add all tabs to newly created folder
                    chrome.bookmarks.create({
                        'parentId': newFolder.id,
                        'url': res[i].url,
                        'title': res[i].title
                    });
                }
            });
        }
    );
});









// printBookmarks('1');

// function printBookmarks(id) {
//     console.log(id);
//     chrome.bookmarks.getChildren(id, function (children) {
//         console.log(children);
//         children.forEach(function (bookmark) {
//             console.log("tit: ", bookmark.title);
//             console.log("tit: ", bookmark.children);
//         });
//     });
// }

// chrome.bookmarks.getTree(function (bookmarks) {
//     console.log("book \n", bookmarks);
//     printBookmarks(bookmarks);
// });

// function printBookmarks(bookmarks) {
//     bookmarks.forEach(function (bookmark) {
//         console.debug(bookmark.id + ' - ' + bookmark.title + ' - ' + bookmark.url);
//         if (bookmark.children)
//             printBookmarks(bookmark.children);
//     });
// }