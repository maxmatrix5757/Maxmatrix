import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '../lib/blog';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="section-padding bg-bg-secondary border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link 
              to="/blog"
              className="inline-flex items-center text-sm font-medium text-brand-teal hover:text-brand-purple transition-colors mb-8"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
            
            <div className="flex items-center text-sm text-text-muted mb-6 space-x-2">
              <Calendar size={16} className="text-brand-teal" />
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            </div>
            
            <h1 className="mb-6">{post.title}</h1>
            <p className="text-xl text-text-muted leading-relaxed">
              {post.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-brand max-w-none"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
