const scrollEvent = (element, distanceToActivatePercent, addClass) => {
    window.addEventListener("scroll", () => {
        // スクロール量の取得
        let scrollValue = window.pageYOffset;

        // 要素の取得
        let scrollEle = document.querySelector(element);

        // 取得した要素のtop値の取得 + スクロール量 = 要素の文書topからの距離(固定値)
        let scrollTop = scrollEle.getBoundingClientRect().top + scrollValue;

        // 画面の高さを取得
        let windowHeight = window.innerHeight;

        // はみ出させる値（お好みで設定）
        let value = windowHeight * (distanceToActivatePercent * 0.01);

        console.log(windowHeight, value);

        // 条件設定
        if (scrollValue > scrollTop - windowHeight + value) {
            scrollEle.classList.add(addClass);
        }
    });
};

scrollEvent("#section_indexpage_product1", 20, "scroll_in");
scrollEvent("#section_indexpage_product2", 20, "scroll_in");
scrollEvent("#section_indexpage_news", 20, "scroll_in");
