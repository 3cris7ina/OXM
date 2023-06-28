const cursor   = detElementById('cursor')
      follover = detElementById('aura')
      inks     = detElementById('a')

      mouseX = 0, mouseY = 0, posX = 0, posY = 0
      function mouseCoords (e) {
        mouseX = e.pageX
        mouseY = e.pageY
      }
      gsap.to ({}, 0.1, {
        repeat: -1,
        onRepeat: () =>{
          posX += (mouseX - posX) /5
          posY += (mouseY - posY) /5
          gsap.set(cursor, {
            css:
            left: mouseX,
            top: mouseY
          })
        }gsap.set(follover, {
          css:
          left: posX, - 23
          top: posY -23
        })
      }
      .mouseCoords(e)

      })
