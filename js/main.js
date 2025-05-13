//Activa mi plugin de scrolltrigger
gsap.registerPlugin(ScrollTrigger);

/*================ ANIMACION PAGINA PRINCIPAL ===================*/

gsap.from(".logo", {
  y: "50vh",
  scale: 10,
  yPercent: -50,
  scrollTrigger: {
    trigger: ".descripcion", // Esto indica que la animación comienza cuando ".contenido" entra en vista
    start: "top bottom", // Cuando la parte superior de ".contenido" alcanza la parte inferior de la ventana
    end: "top 300px", // La animación termina cuando la parte superior de ".contenido" llega al centro de la ventana
    scrub: true, // Hace que la animación se controle de acuerdo con el desplazamiento del scroll
  },
  y: "50vh", // Mueve el logo 50vh hacia abajo desde su posición original
  scale: 3.5, // Aumenta el tamaño del logo
  yPercent: -10, // Desplazamiento adicional en el eje Y
});


/*================== DESPLEGABLE ==================*/

  const boton = document.querySelector('.boton-desplegable');
  const menu = document.querySelector('.contenido-desplegable');

  // Alternar visibilidad con animación
  boton.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que el clic se propague
    menu.classList.toggle('show');
  });

  // Cerrar al hacer clic fuera
  window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !boton.contains(e.target)) {
      menu.classList.remove('show');
    }
  });

  // Cerrar al hacer scroll con la rueda del ratón
  window.addEventListener('wheel', () => {
    menu.classList.remove('show');
  });


/*================ PAGINA CUIDADOS ===================*/

const panels = document.querySelectorAll(".panel");
gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (panels.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});