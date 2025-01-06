import { useState, useEffect } from "react";

export default function usePositionWindow() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Función para actualizar la posición de scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Obtiene la posición vertical actual
    };

    // Añadimos el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup para eliminar el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Este effect se ejecuta solo una vez al montar el componente

  return scrollPosition;
}
