import BlogDetails from "@/components/Blog/BlogDetails";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <BlogDetails id={params.id as string} />
    </div>
  );
};

export default page;
