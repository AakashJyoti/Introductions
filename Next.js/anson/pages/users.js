import Link from "next/link";

const Users = ({ user }) => {
  // console.log(user);
  return (
    <div>
      {user.map((u) => {
        return (
          <div
            key={u.id}
            style={{
              padding: "10px auto",
              margin: "10px",
              backgroundColor: "#E1F3FC",
              width: "auto",
              textAlign: "center"
            }}
          >
            <Link href={`users/${u.id}`}>{u.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await res.json();
  return {
    props: { user },
  };
}
export default Users;
