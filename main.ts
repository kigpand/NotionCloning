const imgBtn = document.querySelector(".imgBtn");
const videoBtn = document.querySelector('.videoBtn');
const noteBtn = document.querySelector('.noteBtn');
const taskBtn = document.querySelector('.taskBtn');

imgBtn?.addEventListener("click", () =>{
    onDialog("img");
})

videoBtn?.addEventListener('click', () =>{
    onDialog("video");
})

noteBtn?.addEventListener('click',()=>{
    onDialog("note");
})

taskBtn?.addEventListener('click',()=>{
    onDialog("task");
})


const onDialog = (btn:string) =>{
    switch(btn){
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
}

const addDialog = () =>{
    const container = document.querySelector(".container");
    const test = document.createElement("div");
    test.classList.add("test");
    test.innerText = "테스트";

    container?.appendChild(test);
}