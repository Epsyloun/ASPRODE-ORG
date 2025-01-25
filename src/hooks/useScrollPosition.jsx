import { useState, useEffect } from "react";

const useScrollPosition = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Actualiza si la sección está visible
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0.3, // Qué parte de la sección debe estar visible (10%)
      }
    );

    if (ref.current) {
      observer.observe(ref.current); // Observa el elemento
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Limpia la observación al desmontar
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useScrollPosition;
