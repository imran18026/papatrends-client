import Image from "next/image";
import Link from "next/link";

const page = () => {
  const BlogData = [
    {
      id: 1,
      title: "First Blog Post",
      image: "https://m.media-amazon.com/images/I/41FC8QoPGbL._AC_SX679_.jpg",
      content:
        "This is the content of the first blog post in the blog post list.",
      author: "John Doe",
      date: "2022-01-01",
    },
    {
      id: 2,
      title: "Second Blog Post",
      image: "https://m.media-amazon.com/images/I/51WQ6YVoCzL._AC_SX679_.jpg",
      content:
        "This is the content of the Second blog post on the second blog post.",
      author: "Abraham Doe",
      date: "2023-04-26",
    },
    {
      id: 3,
      title: "Third Blog Post",
      image: "https://m.media-amazon.com/images/I/61xgnFpURwL._AC_SX679_.jpg",
      content:
        "This is the content of the third blog post in the blog post list.",
      author: "Jane Smith",
      date: "2022-12-31",
    },
  ];
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {BlogData.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className="border border-yellow-300 p-4 mb-2 rounded h-[400px]">
            <Image
              className="h-[250px] w-full object-cover rounded mb-2"
              src={post.image}
              alt={post.title}
              width={400}
              height={400}
            />
            <h2 className="text-xl font-bold mb-2 text-center">{post.title}</h2>
            <p className="text-justify p-2 my-2">{post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
