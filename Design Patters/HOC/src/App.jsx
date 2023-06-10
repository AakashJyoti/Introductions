import { printProps } from "./printProps";
import UserInfo from "./Userinfo";

const UserInfoWrapped = printProps(UserInfo);

export default function App() {
  return <UserInfoWrapped a={1} b="Die" c={{ name: "Astro" }} />;
}
