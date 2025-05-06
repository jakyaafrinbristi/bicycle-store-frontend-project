/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";

const BicycleBlogs = () => {
  const { data: blogs, isLoading, isError } = useGetAllBlogsQuery(undefined);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (isError || !blogs?.data?.length) {
    return <div className="text-center py-10">Failed to load blogs.</div>;
  }

  return (
    <div className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-400 mb-4">
          Latest Bicycle Blogs
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover insightful articles, tips, and stories from the cycling world
        </p>

        <div className="space-y-16">
          {blogs.data.map((blog: any, index: number) => (
            <div
              key={blog._id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>By {blog.author}</span>
                  </div>
                  <span>📝 {blog.comments} Comments</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex gap-4 mt-4">
                  <button className="text-blue-500 hover:underline">🔗 Share</button>
                  <button className="text-red-500 hover:underline">❤️ Like</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BicycleBlogs;
