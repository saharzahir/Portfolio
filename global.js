console.log("IT'S ALIVE!");

function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contact"},
    {url: "resume/", title: "Resume"},
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

    nav.insertAdjacentHTML('beforeend', `<a href="${url}">${title}</a>`)
}