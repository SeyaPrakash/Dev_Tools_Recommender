const extensionsData = [
  { name: "Octotree", url: "https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc", icon: "images/octotree_icon.png" },
  { name: "JSON Formatter", url: "https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa", icon: "images/json_formatter_icon.png" },
  { name: "Wappalyzer", url: "https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg", icon: "images/wappalyzer_icon.png" },
  { name: "EditThisCookie", url: "https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg", icon: "images/editthiscookie_icon.png" },
  { name: "Web Developer", url: "https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm", icon: "images/web_developer_icon.png" },
  { name: "Postman", url: "https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop", icon: "images/postman_icon.png" },
  { name: "ColorPick Eyedropper", url: "https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg", icon: "images/colorpick_icon.png" },
  { name: "Live Server", url: "https://chrome.google.com/webstore/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj", icon: "images/live_server_icon.png" },
  { name: "uBlock Origin", url: "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm", icon: "images/ublock_icon.png" },
  { name: "Grammarly", url: "https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen", icon: "images/grammarly_icon.png" },
  { name: "GitZip for GitHub", url: "https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn", icon: "images/gitzip_icon.png" },
  { name: "GitHub Hovercard", url: "https://chrome.google.com/webstore/detail/github-hovercard/mmoahbbnojgkclgceahhakhnccimnplk", icon: "images/github_hovercard_icon.png" },
  { name: "VisBug", url: "https://chrome.google.com/webstore/detail/visbug/cdockenadnadldjbbgcallicgledbeoc", icon: "images/visbug_icon.png" },
  { name: "Developer Checklist", url: "https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp", icon: "images/web_developer_checklist_icon.png" },
  { name: "Awesome Screenshot", url: "https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkoblgpmj", icon: "images/awesome_screenshot_icon.png" },
  { name: "Window Resizer", url: "https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh", icon: "images/window_resizer_icon.png" },
  { name: "Session Buddy", url: "https://chrome.google.com/webstore/detail/session-buddy/edacconmaakjimmfgnblocblbcdcpbko", icon: "images/session_buddy_icon.png" },
  { name: "Toby for Chrome", url: "https://chrome.google.com/webstore/detail/toby-for-chrome/hddnkoipeenegfoeaoibdmnaalmgkpip", icon: "images/toby_icon.png" },
  { name: "Clear Cache", url: "https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn", icon: "images/clear_cache_icon.png" },
  { name: "OneTab", url: "https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall", icon: "images/onetab_icon.png" }
];

chrome.storage.sync.set({ extensions: extensionsData }, function () {
  console.log("Extension data stored successfully.");
});

chrome.runtime.onInstalled.addListener(function () {

});  