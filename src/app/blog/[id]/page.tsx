import { getAll } from "@/lib/getall";
import Image from "next/image";
import Link from "next/link";
const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getAll.getSingleBlog(params.id);
  const { blogTitle, blogStatus, description, blogImage, productLink } =
    data.data;
  return (
    <Link href={productLink}>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mb-4 rounded">
        <Image
          className="h-[500px] w-full object-cover rounded mb-2"
          src={blogImage}
          alt={blogTitle}
          width={400}
          height={400}
        />
        <div className="">
          <h2 className="text-3xl font-bold mb-2 ">{blogTitle}</h2>
          <p className="text-justify p-2 my-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogDetails;
