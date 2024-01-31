import DiscussionForm from "@/components/discussionform.jsx";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import axios from "axios";
import { authOptions } from "../api/auth/[...nextauth]/route.js";

export default async function discussion() {
  let admin;
  const session = await getServerSession(authOptions);

  if(!session) return redirect("/");

  try {
    const res = await axios.post("http://localhost:3000/api/fetchAdmin", {
      username: session?.user?.name,
    });
    admin = res.data.admin;
  } catch (error) {
    console.log("Error loading admin", error);
  }

  return (
    <main>
      <DiscussionForm admin={admin} username={session?.user?.name} />
    </main>
  );
}
