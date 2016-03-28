var h = require("snabbdom/h");

function header(model, actions) {
    return h("div#header", [
        h("div.container", [
            h("div#logo", [
                h("h1", [
                    h("a", { href: "#" }, "Ex Machina")
                ])
            ]),
            h("nav#nav", [
                h("ul", [
                    h("li.active", [ h("a", {props: { href: "index.html"}}, "Homepage") ]),
                    h("li", [ h("a", {props: { href: "#" }, on: { click: function(evt) { evt.preventDefault(); actions.toggleLeftSidebar(); }}}, "Left Sidebar") ]),
                    h("li", [ h("a", {props: { href: "#"}, on: { click: function(evt) { evt.preventDefault(); actions.toggleRightSidebar(); }}}, "Right Sidebar") ]),
                    h("li", [ h("a", {props: { href: "#"}, on: { click: function(evt) { evt.preventDefault(); actions.disableSidebar(); }}}, "No Sidebar") ])
                ])
            ])
        ])
    ]);
}

function banner(model) {
    return h("div#banner", [
        h("div.container")
    ]);
}

function page(model, mainClazz) {
    return h("div#page", [
        marketing(model),
        main(model, mainClazz)
    ]);
}

function marketing(model) {
    return h("div#marketing.container", [
        h("div.row", [
            h("div.3u", [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus") ]),
                    h("p.subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rem."),
                    h("p", [ h("a", { href: "#" }, [ h("img", { src: "images/pics13.png" }) ]) ]),
                    h("a.button", { href: "#" }, "More")
                ])
            ]),
            h("div.3u", [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus") ]),
                    h("p.subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rem."),
                    h("p", [ h("a", { href: "#" }, [ h("img", { src: "images/pics13.png" }) ]) ]),
                    h("a.button", { href: "#" }, "More")
                ])
            ]),
            h("div.3u", [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus") ]),
                    h("p.subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rem."),
                    h("p", [ h("a", { href: "#" }, [ h("img", { src: "images/pics13.png" }) ]) ]),
                    h("a.button", { href: "#" }, "More")
                ])
            ]),
            h("div.3u", [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus") ]),
                    h("p.subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rem."),
                    h("p", [ h("a", { href: "#" }, [ h("img", { src: "images/pics13.png" }) ]) ]),
                    h("a.button", { href: "#" }, "More")
                ])
            ])                      
        ])
    ]);
}

function main(model, clazz) {
    return h("div#main.container", [
        h("div.row", [
            leftSidebar(model),
            h("div." + clazz, [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus"), h("span.byline"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, iste." ]),
                    h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consectetur dolore, minima aliquam tempore placeat totam, nisi eos, architecto temporibus recusandae minus in. Aperiam alias tenetur consectetur excepturi, libero nisi?"),
                    h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consectetur dolore, minima aliquam tempore placeat totam, nisi eos, architecto temporibus recusandae minus in. Aperiam alias tenetur consectetur excepturi, libero nisi?")
                ])
            ]),
            rightSidebar(model)
        ])
    ]);
}

function leftSidebar(model) {
    return h("div.3u.left-sidebar", [
        h("section.sidebar", [
            h("header", [ h("h2", "Feugiat Tempus") ]),
            h("ul.style1", [
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ])
            ])
        ]),
        h("section.sidebar", [
            h("header", [ h("h2", "Feugiat Tempus") ]),
            h("ul.style1", [
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ])
            ])
        ])
    ]);
}

function rightSidebar(model) {
    return h("div.3u.right-sidebar", [
        h("section.sidebar", [
            h("header", [ h("h2", "Feugiat Tempus") ]),
            h("ul.style1", [
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ])
            ])
        ]),
        h("section.sidebar", [
            h("header", [ h("h2", "Feugiat Tempus") ]),
            h("ul.style1", [
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ]),
                h("li", [ h("a", {props: { href:"#" }}), "Lorem ipsum dolor sit." ])
            ])
        ])
    ]);
}

function featured(model) {
    return h("div#featured", [
        h("div.container", [
            h("div.row", [
                h("section.4u", [
                    h("div.box", [
                        h("a.image.left", { href: "#" }, [ h("img", { src: "images/pics04.jpg", alt: "" }) ]),
                        h("h3", "Etiam posuere augue"),
                        h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptates."),
                        h("a.button", { href: "#" })
                    ])
                ]),
                h("section.4u", [
                    h("div.box", [
                        h("a.image.left", { href: "#" }, [ h("img", { src: "images/pics04.jpg", alt: "" }) ]),
                        h("h3", "Etiam posuere augue"),
                        h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptates."),
                        h("a.button", { href: "#" })
                    ])
                ]),
                h("section.4u", [
                    h("div.box", [
                        h("a.image.left", { href: "#" }, [ h("img", { src: "images/pics04.jpg", alt: "" }) ]),
                        h("h3", "Etiam posuere augue"),
                        h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptates."),
                        h("a.button", { href: "#" })
                    ])
                ])
            ]),
            h("div.divider")
        ])
    ]);
}

function footer(model) {
    return h("div#footer", [
        h("div.container")
    ])
}

function copyright(model) {
    return h("div#copyright.container", "This is a copyright &copy;");
}

module.exports = {
    header: header,
    banner: banner,
    page: page,
    featured: featured,
    footer: footer,
    copyright: copyright
}