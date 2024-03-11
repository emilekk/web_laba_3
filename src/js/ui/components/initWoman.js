import { womanData } from "../../mockData/womanData.js";
import { womanTemplate } from "../templates/womanTemplate.js";

const initWoman = () => {
  const womanNode = document.querySelector(".woman");

  womanNode.insertAdjacentHTML("beforeend",
     womanTemplate(womanData)
     );
};

export default initWoman;