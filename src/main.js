"use strict";
var imgBtn = document.querySelector(".imgBtn");
var videoBtn = document.querySelector('.videoBtn');
var noteBtn = document.querySelector('.noteBtn');
var taskBtn = document.querySelector('.taskBtn');
imgBtn === null || imgBtn === void 0 ? void 0 : imgBtn.addEventListener("click", function () {
    onDialog("img");
});
videoBtn === null || videoBtn === void 0 ? void 0 : videoBtn.addEventListener('click', function () {
    onDialog("video");
});
noteBtn === null || noteBtn === void 0 ? void 0 : noteBtn.addEventListener('click', function () {
    onDialog("note");
});
taskBtn === null || taskBtn === void 0 ? void 0 : taskBtn.addEventListener('click', function () {
    onDialog("task");
});
var onDialog = function (btn) {
    switch (btn) {
        case "img":
            console.log("img");
            addDialog();
            break;
        case "video":
            console.log("video");
            break;
        case "note":
            console.log("note");
            break;
        case "task":
            console.log("task");
            break;
        default:
            alert("오류!");
            break;
    }
};
var addDialog = function () {
    var container = document.querySelector(".container");
    var test = document.createElement("div");
    test.classList.add("test");
    test.innerText = "테스트";
    container === null || container === void 0 ? void 0 : container.appendChild(test);
};
