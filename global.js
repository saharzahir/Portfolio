console.log("IT'S ALIVE!");

function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let pages = [
    {url: "", title: "Home"},
    {url: "Projects/", title: "Projects"},
    {url: "Contact/", title: "Contact"},
    {url: "Resume/", title: "Resume"},
    {url: "https://github.com/saharzahir", title: "GitHub"},
    {url: "https://www.linkedin.com/in/sahar-zahir-814258292/", 
        title: "LinkedIn"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

const BASE_PATH = 
    (location.hostname == "localhost" || location.hostname == "127.0.0.1")
        ? "/"
        : "/Portfolio/";

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    
    url = !url.startsWith("http") ? BASE_PATH + url : url;

    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;
   
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host !== location.host) {
        a.target = "_blank";
    }

    nav.append(a);
}