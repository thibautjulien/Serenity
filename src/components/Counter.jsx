import { useEffect, useState } from "react";

export default function Counter({ target = 80 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= target) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
}
