import { atom } from "recoil";

const userLogedIn = atom({
  key: "userLogedIn",
  default: false,
});

const Clicked = atom({
  key: "ButtonClicked",
  default: false,
});


export { userLogedIn, Clicked };