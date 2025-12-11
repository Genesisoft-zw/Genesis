import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, formatDate } from "../utils/blogUtils";
import { Footer } from "../components/Footer";
import "highlight.js/styles/github-dark.css";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // If post not found, redirect to blog list
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Genesisoft Blog</title>
        <meta name="description" content={post.description} />
        <link
          rel="canonical"
          href={`https://www.genesisoft.co.zw/blog/${post.slug}`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        {post.author && (
          <meta property="article:author" content={post.author} />
        )}
      </Helmet>

      <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-16 transition-colors duration-300">
        {/* Back to Blog Link */}
        <section className="pt-20 pb-8 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                {post.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{post.author}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.description}
              </p>
            </header>

            {/* Divider */}
            <hr className="border-gray-300 dark:border-gray-700 mb-8" />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-900 dark:text-white prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-p:text-gray-900 dark:prose-p:text-gray-100 prose-li:text-gray-900 dark:prose-li:text-gray-100 prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-100 dark:prose-pre:bg-gray-950 prose-pre:text-gray-900 dark:prose-pre:text-gray-100 prose-img:rounded-lg prose-img:shadow-lg prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:not-italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-ul:list-disc prose-ol:list-decimal prose-hr:border-gray-300 dark:prose-hr:border-gray-700 prose-th:text-gray-900 dark:prose-th:text-white prose-td:text-gray-900 dark:prose-td:text-gray-100">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Back to Blog Link (Bottom) */}
            <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
              <Link
                to="/blog"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Blog
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
