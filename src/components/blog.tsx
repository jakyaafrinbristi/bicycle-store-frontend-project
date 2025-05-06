import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";
import { Link } from "react-router";

const SingleBlogHighlight = () => {
  const { data: blogs, isLoading, isError } = useGetAllBlogsQuery(undefined);

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (isError || !blogs?.data?.length)
    return <div className="text-center py-10">Failed to load blogs.</div>;

  const blog = blogs.data[0];
  return (
    <div className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-400 mb-4">
          Featured Blog
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
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


            <Link
              to="/blog"
              className="inline-block border border-teal-500 text-teal-600 dark:text-teal-400 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition"
            >
              Read All Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHighlight;

