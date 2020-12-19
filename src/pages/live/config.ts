export function uuid() {
  return String(+new Date()) + parseInt("" + Math.random() * 10000);
}
export default {
  uid: uuid(),
  type: "view",
  props: {},
  children: [
    "hello",
    "hello",
    {
      uid: uuid(),
      type: "view",
      props: {
        style: "color: red;",
        onClick() {
          console.log("onClick");
        }
      },
      children: ["hello"]
    }
  ]
};
