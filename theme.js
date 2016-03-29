var h = require("snabbdom/h");

function website(viewState) {
    return h("div.app", { class: { "show-left-sidebar": viewState.hasLeftSidebar, "show-right-sidebar": viewState.hasRightSidebar }}, [
        header(viewState),
        banner(),
        page(viewState),
        featured(),
        footer(),
        copyright()       
    ]);
}

function header(viewState) {
    return h("div#header", [
        h("div.container", [
            h("div#logo", [
                h("h1", [
                    h("a", { href: "#" }, "Ex Machina")
                ])
            ]),
            h("nav#nav", [
                h("ul", [
                    h("li", {class: {active: viewState.atHome}}, [ 
                        h("a", {props: { href: "#"}, on: { click: viewState.actions.showHome }}, "Homepage") 
                    ]),
                    h("li", {class: {active: viewState.hasLeftSidebar}}, [ 
                        h("a", {props: { href: "#" }, on: { click: viewState.actions.showLeftSidebar }}, "Left Sidebar") 
                    ]),
                    h("li", {class: {active: viewState.hasRightSidebar}}, [ 
                        h("a", {props: { href: "#"}, on: { click: viewState.actions.showRightSidebar }}, "Right Sidebar")
                    ]),
                    h("li",  {class: {active: viewState.noSidebar}},[ 
                        h("a", {props: { href: "#"}, on: { click: viewState.actions.disableSidebar }}, "No Sidebar")
                    ])
                ])
            ])
        ])
    ]);
}

function noSidebarMessage() {
    return h("div#nosidebar", [
        h("div.container", [
            h("h1", "Look ma! It has no sidebar ;)")
        ])
    ]);   
}

function banner() {
    return h("div#banner", [
        h("div.container")
    ]);
}

function page(viewState) {
    var noSidebarMsg = viewState.noSidebar ? noSidebarMessage() : "";

    return h("div#page", [
        marketing(viewState.marketings),
        noSidebarMsg,
        main(viewState.mainClazz)
    ]);
}

function marketing(data) {
    function marketingItem(item) {
        return h("div.3u", [
            h("section", [
                h("header", [ h("h2", item.header) ]),
                h("p.subtitle", item.subtitle),
                h("p", [ h("a", { href: "#" }, [ h("img", {props: { src: "images/" + item.image }}) ]) ]),
                h("a.button", {props: { href: "#" }}, "More")
            ])
        ]);
    }

    return h("div#marketing.container", [
        h("div.row", data.map(marketingItem))
    ]);
}

function main(clazz) {
    return h("div#main.container", [
        h("div.row", [
            leftSidebar(),
            h("div." + clazz, [
                h("section", [
                    h("header", [ h("h2", "Feugiat Tempus"), h("span.byline"), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, iste." ]),
                    h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consectetur dolore, minima aliquam tempore placeat totam, nisi eos, architecto temporibus recusandae minus in. Aperiam alias tenetur consectetur excepturi, libero nisi?"),
                    h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consectetur dolore, minima aliquam tempore placeat totam, nisi eos, architecto temporibus recusandae minus in. Aperiam alias tenetur consectetur excepturi, libero nisi?")
                ])
            ]),
            rightSidebar()
        ])
    ]);
}

function leftSidebar() {
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

function rightSidebar() {
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

function featured(data) {
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
function footer(data) {
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

function copyright() {
    return h("div#copyright.container", "Design: TEMPLATED Images: Unsplash (CC0)");
}

module.exports = {
    website: website,
    header: header,
    banner: banner,
    page: page,
    featured: featured,
    footer: footer,
    copyright: copyright
}
