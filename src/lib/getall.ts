const getAllBlog = async () => {
  const res = await fetch("https://papatrends-server.vercel.app/api/v1/blog");
  const data = await res.json();

  return data;
};

export const getAll = {
  getAllBlog,
};
