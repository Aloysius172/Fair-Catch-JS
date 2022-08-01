// 
import { Game } from "./scripts/game.js"


const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d")


const game = new Game(canvas)
canvas.addEventListener("DOMContentLoaded", () => {
  game.gameStart()
})

document.querySelector("img").appendChild()