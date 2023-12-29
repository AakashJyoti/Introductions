const mainContainer = document.getElementById("root");

const reactElement = {
  type: "div",
  props: {
    className: "style",
    style: (style = "display: flex; flex-direction: column"),
  },
  children: [
    {
      type: "a",
      props: {
        href: "https://google.com",
        target: "_blank",
      },
      value: "Click me to visit Google",
      children: [],
    },
    {
      type: "a",
      props: {
        href: "https://github.com",
        target: "_blank",
      },
      value: "Click me to visit GitHub",
      children: [],
    },
  ],
};

function handelRender(comp, main) {
  const domElement = document.createElement(comp.type);
  for (const prop in comp.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, comp.props[prop]);
  }
  if (comp.value) domElement.innerHTML = comp.value;
  if (comp.children.length) {
    for (const childElement of comp.children) {
      handelRender(childElement, domElement);
    }
  }
  main.appendChild(domElement);
}

handelRender(reactElement, mainContainer);
