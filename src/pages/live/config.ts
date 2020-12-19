export function uid() {
  return String(+new Date()) + parseInt("" + Math.random() * 10000);
}
export default {
  id: uid(),
  type: "view",
  props: {},
  children: [
    "hello",
    "hello",
    {
      id: uid(),
      type: "view",
      props: {
        style: "color: red;",
        onClick() {
          console.log("onClick");
        }
      },
      children: ["hello"]
    },
    {
      id: uid(),
      type: "image",
      props: {
        style: "width: 80rpx; height: 80rpx;",
        src: "/static/center/user.png"
      }
    }
  ]
};
