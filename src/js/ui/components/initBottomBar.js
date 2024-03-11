import bottomBarData from "../../mockData/bottomBarData.js";
import { bottomBarTemplate } from "../templates/bottomBarTemplate.js";

const initBottomBar = () => {
  const bottomBarNode = document.querySelector(".bottom_bar");
  bottomBarNode.insertAdjacentHTML("beforeend", bottomBarTemplate(bottomBarData));
};

export default initBottomBar;
