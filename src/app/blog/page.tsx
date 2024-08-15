import { getAll } from "@/lib/getall";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const fetchData = await getAll.getAllBlog();

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {fetchData.data.map((post: any) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className="border border-yellow-300 p-4 mb-2 rounded h-[400px]">
            {/* <Image
              className="h-[250px] w-full object-cover rounded mb-2"
              src={post.image}
              alt={post.title}
              width={400}
              height={400}
            /> */}
            <h2 className="text-xl font-bold mb-2 text-center">
              {post.blogTitle}
            </h2>
            <p className="text-justify p-2 my-2">{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
