import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles';
const categories = [
'All',
'Benefits of AI Automation',
'Case Studies',
'Compliance',
'Engineering'];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = blogArticles.filter((post) => {
    const matchesCategory =
    activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.
    toLowerCase().
    includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      {/* Header */}
      <section className="pt-40 pb-12 px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-5xl mx-auto">

          <h1 className="page-hero-title mb-4">Blog</h1>
          <p className="page-hero-subtitle">
            Insights on document automation, healthcare IT, and education
            technology in Indonesia.
          </p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="px-4 mb-10">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-sm bg-white/[0.05] border border-white/[0.08] rounded-xl py-2.5 pl-10 pr-5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#063aa4]/50 transition-all text-sm" />

        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 mb-12 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-4 pb-4">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm font-medium transition-colors relative ${activeCategory === category ? 'text-white font-bold' : 'text-slate-500 hover:text-slate-300'}`}>

              {category}
              {activeCategory === category &&
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-white" />

            }
            </button>
          )}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) =>
            <motion.div
              layout
              key={post.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                duration: 0.4
              }}>

                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#141414]">
                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />

                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-[#063aa4] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{post.date}</span>
                      <span className="text-slate-700">·</span>
                      <span className="text-[#063aa4] font-medium">
                        {post.category}
                      </span>
                      <span className="text-slate-700">·</span>
                      <span>by {post.author}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 &&
        <div className="text-center py-20">
            <p className="text-slate-500 text-lg">
              No articles found matching your criteria.
            </p>
            <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 text-[#063aa4] hover:underline text-sm">

              Clear filters
            </button>
          </div>
        }
      </section>
    </div>);

}