"use client";

import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMount) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
