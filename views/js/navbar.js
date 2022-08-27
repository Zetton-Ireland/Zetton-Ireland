var partHomePage = false;
var back2Eng = "en/";
// body append
document.querySelector("#atHomePage") ? homePage = true : homePage = false;
document.querySelector("#PartlyHomePage") ? partHomePage = true : partHomePage = false;

var menuPathNum = homePage == true ? 1 : 2;
var menuPathArray = window.location.pathname.split('/')[menuPathNum];
var navbar = document.createElement("div");
navbar.setAttribute("class", "navbar");
var language = "en";
var lang = "日本語";

function checkPathLang() {

    if (homePage == true) {
        menuPathArray = "website.html";
    }
    if (partHomePage == true) {
        back2Eng = ""
        menuPathArray = "index.html";
    }

    if (!document.querySelector("#atHomePage") && window.location.pathname.split('/')[1] == "jp") {
        language = "jp";
        lang = "English"
    } else {
        language = "en"
        lang = "日本語";
    }
}

function navigate() {
    if (language == "en") {
        navbar.innerHTML =
            `
    <header class="header container">
      <a class="logo" id="logo" href="http://zetton.net/"> Zétton Ireland </a>

      <nav id="menu" class="menu" tabindex="-1">
        <button class="menu_button menu_button--open js-open" aria-label="Open menu" aria-expanded="false" type="button">&#9776;</button>
        <div class="menu_list">
          <button class="menu_button menu_button--close js-close" aria-label="Close menu" aria-expanded="true" type="button">&times;</button>
          <ul class="menu_list_inner">
            <li class="menu_item">
              <a id="website" href="http://zetton.net/">Home</a> </li>
            <li class="menu_item">
              <a id="about" href="http://zetton.net/en/news.html">News</a> 
            </li>
            <li class="menu_item">
              <a id="irish" href="http://zetton.net/en/about.html">About</a> 
            </li>
            <li class="menu_item">
              <a id="past" href="http://zetton.net/en/books.html">Notebooks</a> 
            </li>
            <li class="menu_item">
              <a id="news" href="http://zetton.net/en/embroidery.html">Embroidery</a> 
            </li>
            <li class="menu_item">
              <a id="news" href="http://zetton.net/en/wallets.html">Wallets</a> 
            </li>
            <li class="menu_item">
              <a id="lang" href="../jp/`+ menuPathArray + `">` + lang + `</a> 
            </li>
          </ul>
        </div>
      </nav>
    </header>

    `
    } else {
        navbar.innerHTML =
            `
    <header class="header container">
      <a class="logo" id="logo" href="http://zetton.net/jp/website.html"> Zétton Ireland </a>
  
      <nav id="menu" class="menu" tabindex="-1">
        <button class="menu_button menu_button--open js-open" aria-label="Open menu" aria-expanded="false" type="button">&#9776;</button>
        <div class="menu_list">
          <button class="menu_button menu_button--close js-close" aria-label="Close menu" aria-expanded="true" type="button">&times;</button>
          <ul class="menu_list_inner">
            <li class="menu_item">
              <a id="website" href="http://zetton.net/jp/website.html">ホーム</a> </li>
            <li class="menu_item">
              <a id="about" href="http://zetton.net/jp/about.html">About</a> </li>
            <li class="menu_item">
              <a id="irish" href="http://zetton.net/jp/irish.html">アイリッシュグッズ</a> </li>
            <li class="menu_item">
              <a id="embroidery" href="http://zetton.net/jp/embroidery.html">刺繍</a> </li>
            <li class="menu_item">
              <a id="past" href="http://zetton.net/jp/past.html">過去作品</a> </li>  
            <li class="menu_item">
              <a id="news" href="http://zetton.net/jp/news.html">News</a> </li>
            <li class="menu_item">
              <a id="lang" href="../`+ back2Eng + `` + menuPathArray + `">` + lang + `</a> </li>
          </ul>
        </div>
      </nav>
    </header>
  
    `
    }
    document.body.appendChild(navbar)
}
checkPathLang();
navigate();