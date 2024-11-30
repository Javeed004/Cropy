import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const { pathname } = useLocation(); // Get the current route's pathname.

    useEffect(() => {
        // Scroll to the top when the pathname changes.
        window.scrollTo(0, 0);
    }, [pathname]); // Run the effect when `pathname` changes.
};

export default useScrollToTop;
