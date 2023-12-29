const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google ",
};

function handelRender(comp, main) {
  const domElement = document.createElement(comp.type);
  domElement.innerHTML = comp.children;
  for (const prop in comp.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, comp.props[prop]);
  }
  main.appendChild(domElement);
}

handelRender(reactElement, mainContainer);
