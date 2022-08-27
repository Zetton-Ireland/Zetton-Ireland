var homePage;
        //var pathNum = homePage == true ? 8 : 4;
        //console.log(pathNum)
        //var pathArray = window.location.pathname.split('/')[pathNum];
        var searchText = [];
        var searchConText = [];
        var englishText = [];
        var aTags = document.getElementsByTagName("a");
        var pTags = document.getElementsByTagName("p");
        var spanTags = document.getElementsByTagName("span");
        //var pathName = pathArray.split('.')[0];

        var actualText = [];
        var TAG;
        var maintext;
        //current page marking
       
        function toggleNav(status, scope) {
            document.documentElement.classList.toggle("has-open-menu");

            if (status == "open") {
                scope.addEventListener("transitionend", () => {
                    scope.querySelector(".js-close").focus();
                });
            }
            if (status == "close") {
                scope.querySelector(".js-open").focus();
            }
        }

        /* ----------
         * Open & close menu on buttons click
         */
        const menu = document.getElementById("menu");

        menu.addEventListener(
            "click",
            (event) => {
                const openButton = menu.querySelector(".js-open");
                const closeButton = menu.querySelector(".js-close");

                if (event.target == openButton) {
                    toggleNav("open", menu);
                } else if (
                    event.target == closeButton ||
                    !event.target.closest(".menu_list")
                ) {
                    toggleNav("close", menu);
                }
            },
            true
        );

        function openInSameWindow(evt) {
            window.location = evt;
        }

        /* ----------
         * Close menu if Esc is pressed
         */
        document.addEventListener("keydown", (event) => {
            const escapeKey = 27;

            if (event.keyCode === escapeKey && document.documentElement.classList.contains("has-open-menu")) {
                document.documentElement.classList.remove("has-open-menu");
            }
        });
        function accumulativeParser(str, condition) {
    let accumulations = [];
    let accumulator = "";
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (condition(ch)) {
            accumulator += ch;
        } else if (accumulator !== "") {
            accumulations.push(accumulator);
            accumulator = "";
        }
    }
    return accumulations;
}

function isKanji(ch) {
    if ((ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf") || (ch >= "\u30a0" && ch <= "\u30ff") || (ch >= "\u3040" && ch <= "\u309f") || (ch >= "\u3000" && ch <= "\u303f")) {
        return true;
    }
}

function isEnglish(ch) {
    if ((ch >= "\u0030" && ch <= "\u007A") || (ch >= "\u00A0" && ch <= "\u01A0")) {
        return true;
    }
}

function parseKanjiCompounds(str) {
    return accumulativeParser(str, isKanji);
}

function parseEnglishCompounds(str) {
    return accumulativeParser(str, isEnglish);
}

function languagecheck() {
    searchText = parseKanjiCompounds(document.body.textContent);
    //menu
    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent.includes(searchText[0])) {
            searchText.shift();
            aTags[i].style = "font-family: 'Zen Kaku Gothic New', sans-serif;";
        }
    }
    for (var i = 0; i < spanTags.length; i++) {
        if (spanTags[i].textContent.includes(searchText[0])) {
            searchText.shift();
            spanTags[i].style = "font-family: 'Zen Kaku Gothic New', sans-serif;";
        }
    }
    for (var i = 0; i < pTags.length; i++) {
      if (pTags[i].textContent.includes(searchText[0])) {
          searchText.shift();
          pTags[i].style = "font-family: 'Zen Kaku Gothic New', sans-serif;";
      }
  }
}
window.onload = () => {
    let clone;
    // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
    let all = document.getElementsByClassName("image"),
        lightbox = document.createElement("div");

    lightbox.classList.add("lightbox")
    document.body.appendChild(lightbox);
    if (all.length > 0) {
        for (let i of all) {
            i.onclick = () => {
                console.log(document.documentElement.clientWidth)
                if (document.documentElement.clientWidth > 500) {
                    clone = i.cloneNode(true);
                    lightbox.appendChild(clone);
                    lightbox.classList.add("show");
                };
            };
        }
    }
    lightbox.onclick = () => {
        lightbox.removeChild(clone)
        lightbox.classList.remove("show");
    };
    languagecheck();
};
