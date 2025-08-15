import { PropsWithChildren, ReactNode, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ScrollToTop({
  children,
}: PropsWithChildren<{ children?: ReactNode }>) {
  const location = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'POP' | 'REPLACE'

  // Scroll to top on PUSH/REPLACE, but preserve scroll on POP (back/forward)
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, navType]);

  return <>{children}</>;
}
