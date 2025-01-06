import React, { useEffect, useState } from "react";

export default function useNavBarSpacing() {
  const [heightWindow, setHeightWindow] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeightWindow(window.innerHeight);
    };

    // Escuchar el evento de cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpieza del evento para evitar fugas de memoria
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return heightWindow;
}
