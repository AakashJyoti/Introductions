"use client";

import { useAppSelector } from "@/redux/store";
import Login from "./log-in";

export default function Home() {
  const { userName, isModerator } = useAppSelector(
    (state) => state.authReducer.value
  );

  return (
    <main>
      <Login />
      <h1>UserName : {userName}</h1>
      {isModerator && <h1>This user is a Moderator</h1>}
    </main>
  );
}
