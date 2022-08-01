// import { FallingObject } from "./fallingObject";


export class Ball {
  constructor(canv) {
    const img = new Image()
    img.src = "./images/football-png-24989.png"

    img.onload = () => {
      this.scale = 0.1
      this.img = img
      this.width = img.width * this.scale;
      this.height = img.height * this.scale;
      this.pos = {
        x: Math.floor(Math.random() * canv.width),
        y: 0
      }

      ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)


    }
    this.vel = {
      x: 0,
      y: 5
    }

  }


  update() {
    // console.log("updating ball")
    if (this.img) {
      ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
      if (this.pos.y + this.height <= canv.height) {
        this.pos.y += this.vel.y
      }
    }
  }

  animateBall() {
    console.log("object falling")
    requestAnimationFrame(this.animateBall.bind(this))
    ctx.fillRect(0, 0, canv.width, canv.height)
    this.update()
  }



}