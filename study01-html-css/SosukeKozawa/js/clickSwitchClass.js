const switchClass = (classChangeElement, class1, class2) => {
    // clickElementがクリックされたら、classChangeElementのclass1とclass2を入れ替える
    // classChangeElementにclass1とclass2もなかったら、class1を付ける
    let element = document.querySelector(classChangeElement);
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else if (element.classList.contains(class2)) {
        element.classList.remove(class2);
        element.classList.add(class1);
    } else {
        element.classList.add(class1);
    }
};

const clickSwitchClass = (
    clickElement,
    classChangeElement1,
    classChangeElement2,
    class1,
    class2
) => {
    // clickElementがクリックされたら、classChangeElement1,2のclass1とclass2を入れ替える
    // classChangeElement1,2にclass1とclass2もなかったら、class1を付ける
    let buttonEle = document.querySelector(clickElement);
    buttonEle.addEventListener("click", () => {
        switchClass(classChangeElement1, class1, class2);
        switchClass(classChangeElement2, class1, class2);
    });
};

clickSwitchClass(
    "#div_indexpage_hamburger_≡",
    "#div_indexpage_hamburger_≡",
    "#div_indexpage_hamburger_x",
    "viewable",
    "unviewable"
);
