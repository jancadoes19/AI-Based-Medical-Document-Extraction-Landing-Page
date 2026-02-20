import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { getArticleBySlug } from '../data/blogArticles';
export function BlogArticlePage() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  if (!article) {
    return <Navigate to="/blog" replace />;
  }
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#063aa4] selection:text-white">
      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">

          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
          className="aspect-[21/9] rounded-2xl overflow-hidden bg-[#141414]">

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover" />

        </motion.div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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
            duration: 0.6,
            delay: 0.1
          }}>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {article.date}
            </div>
            <span className="text-slate-700">·</span>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </div>
            <span className="text-slate-700">·</span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span className="text-[#063aa4] font-medium">
                {article.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Description */}
          <p className="text-lg text-slate-400 leading-relaxed mb-12 pb-12 border-b border-white/[0.06]">
            {article.meta}
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) =>
            <p key={index} className="text-slate-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <div className="bg-[#063aa4]/10 border border-[#063aa4]/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to transform your document workflows?
              </h3>
              <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
                Contact our team for a live demonstration tailored to your
                organization's needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:support@immenzo.com"
                  className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:bg-slate-100 transition-colors">

                  Contact Us
                </a>
                <Link
                  to="/pricing"
                  className="px-6 py-3 bg-[#063aa4] text-white font-bold rounded-full text-sm hover:bg-[#052e83] transition-colors">

                  View Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <h3 className="text-xl font-bold text-white mb-6">
              More from {article.category}
            </h3>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#063aa4] hover:text-white transition-colors text-sm font-medium">

              View all articles →
            </Link>
          </div>
        </motion.div>
      </article>
    </div>);

}