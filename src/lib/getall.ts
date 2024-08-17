const getAllBlog = async () => {
  const res = await fetch("https://papatrends-server.vercel.app/api/v1/blog", {
    next: { revalidate: 5 },
  });
  const data = await res.json();

  return data;
};

const getSingleBlog = async (id: string) => {
  const res = await fetch(
    `https://papatrends-server.vercel.app/api/v1/blog/${id}`,
    {
      next: { revalidate: 5 },
    }
  );
  const data = await res.json();
  return data;
};

export const getAll = {
  getAllBlog,
  getSingleBlog,
};
