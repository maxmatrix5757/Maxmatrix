import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { format } from 'date-fns';
import { getAllPosts } from '../lib/blog';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = getAllPosts();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-bg-secondary border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-8">Insights & <span className="accent-text">Perspectives</span></h1>
            <p className="text-text-muted leading-relaxed">
              Explore our latest articles on finance, technology, and business strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card flex flex-col h-full group"
              >
                <div className="flex items-center text-xs text-text-muted mb-4 space-x-2">
                  <Calendar size={14} className="text-brand-teal" />
                  <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                </div>
                
                <h3 className="mb-4 group-hover:text-brand-purple transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                <p className="text-sm text-text-muted mb-6 flex-grow">
                  {post.description}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-brand-purple hover:text-brand-teal transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
