//Activa mi plugin de scrolltrigger
gsap.registerPlugin(ScrollTrigger);

// Animación con ScrollTrigger
gsap.from(".logo", {
  y: "50vh",
  scale: 10,
  yPercent: -50,
  scrollTrigger: {
    trigger: ".contenido", // Esto indica que la animación comienza cuando ".contenido" entra en vista
    start: "top bottom", // Cuando la parte superior de ".contenido" alcanza la parte inferior de la ventana
    end: "top 1%", // La animación termina cuando la parte superior de ".contenido" llega al centro de la ventana
    scrub: true, // Hace que la animación se controle de acuerdo con el desplazamiento del scroll
  },
  y: "50vh", // Mueve el logo 50vh hacia abajo desde su posición original
  scale: 5, // Aumenta el tamaño del logo
  yPercent: -10, // Desplazamiento adicional en el eje Y
});
