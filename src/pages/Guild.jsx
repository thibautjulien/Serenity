import { useEffect } from "react";

import Preparation from "../components/Preparation";

export default function Guild() {
  useEffect(() => {
    document.title = "Guilde - Serenity";
  }, []);

  return <Preparation />;
}
