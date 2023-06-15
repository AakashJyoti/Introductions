import { printProps } from "./printProps";
import UserInfo from "./Userinfo";
import withUser from "./withUser";

// const UserInfoWrapped = printProps(UserInfo);
const WithUserWrapper = withUser(UserInfo, 1001);

export default function App() {
  // return <UserInfoWrapped a={1} b="Die" c={{ name: "Astro" }} />;
  return <WithUserWrapper />;
}
