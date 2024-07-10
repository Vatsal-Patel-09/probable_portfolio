"use client"

const CursorEffectComponent = () => {
  
    window.addEventListener("mousemove", (event) => {
        const pointerX = event.clientX;
        const pointerY = event.clientY;
        const body = document.querySelector("body");
        if (body) {
          body.style.setProperty("--pointerX", pointerX + "px");
          body.style.setProperty("--pointerY", pointerY + "px");
        }
      });


    return <></>
  }

  export default CursorEffectComponent;
  