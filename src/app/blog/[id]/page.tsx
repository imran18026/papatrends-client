const BlogDetails = ({ params }: { params: { id: string } }) => {
  return <div>Blog Details Page {params.id}</div>;
};

export default BlogDetails;
