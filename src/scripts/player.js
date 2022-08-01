
export class Player {
  constructor(canv) {
    // canv = canv;
    // this.ctx = canv.getContext('2d')
    const img = new Image();
    img.src = "./images/dhopcatch.png"

    img.onload = () => {
      const scale = 0.175
      this.img = img
      this.width = img.width * scale
      this.height = img.height * scale
      // console.log(canv.width)
      this.pos = {
        x: canv.width / 2 - this.width / 2,
        y: canv.height - this.height - 20
      }
     ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
    }
    this.vel = {
      x: 0,
      y: 0
    }

  }

  // drawCharacter() {
  //   this.ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
  // }

  updateCharacter() {
    if (this.img) {
      ctx.drawImage(this.img, this.pos.x, this.pos.y, this.width, this.height)
      this.pos.x += this.vel.x
    }
  }

  animatePlayer() {
    console.log("animating player")
    requestAnimationFrame(this.animatePlayer.bind(this))
    ctx.fillRect(0, 0, canv.width, canv.height)
    this.updateCharacter()
    if (keys.left.pressed && this.pos.x >= 0) {
      this.vel.x -= 1
    } else if (keys.right.pressed && this.pos.x + this.width <= canv.width) {
      this.vel.x += 1
    } else {
      this.vel.x = 0
    }
  }

}
const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}
window.addEventListener('keydown', ({ key }) => {
  switch (key) {
    case "ArrowRight":
      console.log("move to the right")
      keys.right.pressed = true
      break

    case "ArrowLeft":
      console.log("move to the left")
      keys.left.pressed = true
      break
  }
  // console.log(keys.left.pressed)
})

window.addEventListener('keyup', ({ key }) => {
  switch (key) {
    case "ArrowRight":
      console.log("stop moving right")
      keys.right.pressed = false
      break

    case "ArrowLeft":
      console.log("stop moving left")
      keys.left.pressed = false
      break
  }
  // console.log(keys.left.pressed)
})



