import { useEffect } from "react";

import Master from "../components/members/Master";
import HautConseil from "../components/members/HautConseil";

export default function Member() {
  useEffect(() => {
    document.title = "Membres - Serenity";
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Master />
      <HautConseil />
    </div>
  );
}
