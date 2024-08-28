export async function getServerSideProps() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return { props: { posts } };
}

import TheList from "@/pages/compound/list";
const TheApps = (props) => {
  const inform = props.posts;
  return (
    <div className="gaduur">
      {inform.map((data, index) => {
        return (
          <TheList
            title={data.title}
            content1={data.content}
            author={data.author}
            time={data.date}
            category={data.category}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default TheApps;
