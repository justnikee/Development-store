import { UserButton, auth } from "@clerk/nextjs";
import React from "react";

import MainNav from "@/components/main-nav";
import StoreSwithcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex items-center px-4 h-16">
        <StoreSwithcher items={stores} />
        <MainNav className="mx-6" />
        <div className="flex ml-auto items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
