gsap.to(".cuadrado", {
  x: 700,
  duration: 3
})

gsap.from("h1", {
  opacity: 0,
  y: -50,
  duration: 1.5,
  ease: "power2.out"
});