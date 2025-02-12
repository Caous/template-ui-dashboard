import { useEffect, useRef } from "react";

const useScriptLoader = () => {
  const scriptLoaded = useRef(false); // Evita execução duplicada no Strict Mode

  useEffect(() => {
    if (scriptLoaded.current) return; // Se já carregou, não faz nada
    scriptLoaded.current = true; // Marca como carregado

    const loadScript = (url: string) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
          resolve(url); // Se o script já existe, resolve imediatamente
          return;
        }

        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => resolve(url);
        script.onerror = () => reject(new Error(`Error loading ${url}`));
        document.head.appendChild(script);
      });
    };

    loadScript("/js/custom.js");
    loadScript("/js/main.js");
    loadScript("/js/defaultmenu.min.js");
    loadScript("/js/sticky.js");
    
  }, []);
};

export default useScriptLoader;
