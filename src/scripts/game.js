
import { Ball } from "./ball.js"

import { Player } from "./player.js"

export class Game {
  constructor(canv) {
    this.ctx = canv.getContext("2d")
    this.dimensions = {
      width: canv.width,
      height: canv.height
    }
    this.player = new Player()
    this.ball = new Ball()

  
  }


  drawBackground() {
    const background = new Image()
    background.src = "./images/footballfield.jpeg"
    // if (this instanceof Game) {
      background.onload = () => {
        console.log("Load the bckgd")
        this.background = background
        background.width = canv.width
        background.height = canv.height
    this.ctx.drawImage(this.background, 0, 0);
    }
    // ctx.fillStyle = "green"

  }

  makeBalls() {
    
    let ballcounter = 0
    const allBalls = []
    let createBall = function (ball) {
      ball.animateBall()
    }

    for (let i = 0; i < 100; i++) {
      const football = new Ball(canv)
      allBalls.push(football)
      createBall(allBalls[i])
      allBalls.splice(i, 1)
      console.log(allBalls)
      ballcounter += i
      console.log(ballcounter)
    }


  }

  gameStart() {

    let addback = addEventListener("DOMContentLoaded", () =>{
       this.drawBackground();
    })
    let addplayer = addEventListener(addback, () => {
      this.player.animatePlayer()
    })
    addEventListener(addplayer, () => {
      this.player.animatePlayer()
    })
  }

  
}



