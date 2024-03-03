import { SignedIn, auth, clerkClient  } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");
  

 // const users = await clerkClient.users.getUser(userId); 

  const user = await getUserById(userId);

  return (
    <>
   
      <h1>credit page</h1>

     
    </>
  );
};

export default Credits;