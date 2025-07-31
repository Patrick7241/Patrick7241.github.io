import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { useParams } from 'react-router-dom';
import { articles } from '../utils/articles';
import { useMediaQuery } from 'react-responsive';

const BlogDetail = () => {
  const { id } = useParams();
  const article = articles.find(item => item.id === id);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (!article) {
    return (
      <div className="py-12 px-4">
        <div className="bg-white rounded-2xl shadow-apple p-6">
          <h1 className="text-2xl font-bold text-appleGray-dark mb-4">文章未找到</h1>
          <p className="text-appleGray-dark/70">抱歉，请求的文章不存在或已被删除。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <article className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-4 sm:p-6 lg:p-8">
          <header className="mb-6 border-b pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{article.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-2">
              <span>作者: {article.author}</span>
              <span>发布日期: {article.date}</span>
              <span>分类: {article.category}</span>
            </div>
          </header>

          {/* 优化移动端代码块显示 */}
          <div className={`prose prose-sm sm:prose-base max-w-none text-gray-800 ${isMobile ? 'px-1' : ''}`}>
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  return (
                    <code
                      {...props}
                      className={`${inline ? '' : 'block p-3 sm:p-4 rounded-md my-4 text-sm overflow-x-auto'} ${className}`}
                    >
                      {children}
                    </code>
                  );
                }
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          <footer className="mt-12 pt-8 border-t text-gray-500 text-sm">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map(tag => (
                <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-xs">{tag}</span>
              ))}
            </div>
            <p>本文采用 <a href="https://creativecommons.org/licenses/by/4.0/" className="text-blue-600 hover:underline">CC BY 4.0</a> 协议，转载请注明出处。</p>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;