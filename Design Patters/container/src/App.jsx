import axios from "axios";
import CurrentUserLoader from "./CurrentUserLoader";
import ProductInfo from "./ProductInfo";
import ResourceLoader from "./ResourceLoader";
import UserLoader from "./UserLoaded";
import UserInfo from "./Userinfo";
import DataSource from "./DataSource";

const getUserOneData = (url) => async () => {
  const { data } = await axios.get(url);
  return data;
};

const userIds = ["1001", "1002", "1003"];

export default function App() {
  return (
    <>
      {/* <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      {/* {userIds.map((userId) => (
        <UserLoader key={userId} userId={userId}>
          <UserInfo />
        </UserLoader>
      ))} */}

      {/* <ResourceLoader
        resourceUrl="http://localhost:4000/user/1001"
        resourceName={"user"}
      >
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader
        resourceUrl="http://localhost:4000/products/10001"
        resourceName={"product"}
      >
        <ProductInfo />
      </ResourceLoader> */}

      <DataSource
        getDataFunc={getUserOneData("http://localhost:4000/user/1001")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
    </>
  );
}
