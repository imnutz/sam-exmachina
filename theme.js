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
                    h("a.button", {props: { href: "#" }}, "More")
                ])
            ]),
            h("div.3u", [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus") ]),
                    h("p.subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rem."),
                    h("p", [ h("a", { href: "#" }, [ h("img", { src: "images/pics13.png" }) ]) ]),
                    h("a.button", {props: { href: "#" }}, "More")
                ])
            ]),
            h("div.3u", [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus") ]),
                    h("p.subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rem."),
                    h("p", [ h("a", { href: "#" }, [ h("img", { src: "images/pics13.png" }) ]) ]),
                    h("a.button", {props: { href: "#" }}, "More")
                ])
            ]),
            h("div.3u", [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus") ]),
                    h("p.subtitle", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rem."),
                    h("p", [ h("a", { href: "#" }, [ h("img", { src: "images/pics13.png" }) ]) ]),
                    h("a.button", {props: { href: "#" }}, "More")
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
                        h("a.image.left", { href: "#" }, [ h("img", {props: { src: "images/pics04.jpg", alt: "" }}) ]),
                        h("h3", "Etiam posuere augue"),
                        h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptates."),
                        h("a.button", {props: { href: "#" }}, "More")
                    ])
                ]),
                h("section.4u", [
                    h("div.box", [
                        h("a.image.left", { href: "#" }, [ h("img", {props: { src: "images/pics04.jpg", alt: "" }}) ]),
                        h("h3", "Etiam posuere augue"),
                        h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptates."),
                        h("a.button", {props: { href: "#" }}, "More")
                    ])
                ]),
                h("section.4u", [
                    h("div.box", [
                        h("a.image.left", { href: "#" }, [ h("img", {props: { src: "images/pics04.jpg", alt: "" }}) ]),
                        h("h3", "Etiam posuere augue"),
                        h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, voluptates."),
                        h("a.button", {props: { href: "#" }}, "More")
                    ])
                ])
            ]),
            h("div.divider")
        ])
    ]);
}
function footer(model) {
    return h("div#footer", [
        h("div.container", [
            h("div.row", [
                h("div.3u", [
                    h("section", [
                        h("h2", "Maecenas lectus"),
                        h("div.balloon", [
                            h("blockquote", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi delectus at libero ratione, debitis. Ullam vero, fuga corporis minima ipsa provident expedita nemo temporibus quo non, id error. Fugiat itaque vitae error totam et architecto nemo qui. Quis expedita inventore accusantium placeat doloribus eaque totam, iusto hic rem sed obcaecati."),
                            h("br"),
                            h("strong", "John Dohn")
                        ]),
                        h("div.ballon-bgbtm", " ")
                    ])
                ]),
                h("div.3u", [
                    h("section", [
                        h("h2", "Donec dictum"),
                        h("ul.default", [
                            h("li", [
                                h("h3", "Mauris vulputate dolor sit amet"),
                                h("p", [ h("a", {props: {href: "#"}}, "Lorem consequuntur laudantium animi rem.") ])
                            ]),

                            h("li", [
                                h("h3", "Mauris vulputate dolor sit amet"),
                                h("p", [ h("a", {props: {href: "#"}}, "Lorem consequuntur laudantium animi rem.") ])
                            ]),

                            h("li", [
                                h("h3", "Mauris vulputate dolor sit amet"),
                                h("p", [ h("a", {props: {href: "#"}}, "Lorem consequuntur laudantium animi rem.") ])
                            ])
                        ])
                    ])
                ]),
                h("div.3u", [
                    h("section", [
                        h("h2", "Nulla neifend"),
                        h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quia corporis culpa sequi esse quidem laboriosam explicabo tempore non nulla!"),
                        h("ul.style5", [
                            h("li", [
                                h("a", {props: {href: "#"}}, [
                                    h("img", {props: {src: "images/pics07.jpg", alt: "" }})
                                ])
                            ]),

                            h("li", [
                                h("a", {props: {href: "#"}}, [
                                    h("img", {props: {src: "images/pics08.jpg", alt: "" }})
                                ])
                            ]),

                            h("li", [
                                h("a", {props: {href: "#"}}, [
                                    h("img", {props: {src: "images/pics09.jpg", alt: "" }})
                                ])
                            ]),

                            h("li", [
                                h("a", {props: {href: "#"}}, [
                                    h("img", {props: {src: "images/pics10.jpg", alt: "" }})
                                ])
                            ]),
                            h("li", [
                                h("a", {props: {href: "#"}}, [
                                    h("img", {props: {src: "images/pics11.jpg", alt: "" }})
                                ])
                            ]),
                            h("li", [
                                h("a", {props: {href: "#"}}, [
                                    h("img", {props: {src: "images/pics12.jpg", alt: "" }})
                                ])
                            ])
                        ])
                    ])
                ]),
                h("div.3u", [
                    h("h2", "Luctus eleifend"),
                    h("p", [ h("strong", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, non.") ]),
                    h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id ratione error, ipsum, molestiae incidunt ab voluptas numquam amet quae."),
                    h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed beatae soluta id unde veniam modi voluptates quia expedita recusandae quam."),
                    h("a.button", {props: {href: "#"}}, "More Collections")
                ])
            ])
        ])
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
