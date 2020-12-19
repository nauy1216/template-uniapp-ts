module.exports = [
  {
    tag: "view",
    desc: "view",
    props: ["style"],
    events: ["click"],
    hasChildren: true
  },
  {
    tag: "text",
    desc: "text",
    props: ["style"],
    events: ["click"],
    hasChildren: true
  },
  {
    tag: "image",
    desc: "image",
    props: ["style", "src"],
    events: ["click"]
  }
];
