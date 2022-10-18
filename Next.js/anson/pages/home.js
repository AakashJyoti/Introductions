import Link from "next/link";
import Profile from "../components/Profile";

const Home = ({ job }) => {
  // console.log(job);
  return (
    <div>
      <h2>Home</h2>
      <Profile />
      <Link
        href={{
          pathname: "/post/1",
          query: {
            title: "brand",
          },
        }}
      >
        post 1
      </Link>
      <p>
        <span>{job.id}</span>
        <span>{job.title}</span>
      </p>
      <Link href="users">Users</Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      job: {
        id: 123,
        title: "Developer",
      },
    },
  };
}
export default Home;
