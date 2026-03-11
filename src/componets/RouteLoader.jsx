import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./RouteLoader.css";

function RouteLoader() {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setLoading(true);
    const timerId = window.setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => window.clearTimeout(timerId);
  }, [location.pathname]);

  if (!loading) {
    return null;
  }

  return (
    <div className="route-loader" role="status" aria-live="polite" aria-label="Page loading">
      <span className="route-spinner" />
    </div>
  );
}

export default RouteLoader;
