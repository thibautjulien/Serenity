import { useEffect } from "react";

import Preparation from "../components/Preparation";

export default function Join() {
  useEffect(() => {
    document.title = "Nous Rejoindre - Serenity";
  }, []);

  return <Preparation />;
}
