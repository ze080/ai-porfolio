import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from 'framer-motion';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { FaXTwitter, FaLinkedin, FaLink } from 'react-icons/fa6';

const BlogLayout = ({ title, children }) => {
  const location = useLocation();
  const fullUrl = `https://zayedbinjad.dev${location.pathname}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(fullUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <Helmet>
        <title>{title} | Zayed's AI Journey</title>
        <meta name="description" content={`${title} - Weekly AI learning updates`} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-12 text-white">
        <Link to="/" className="inline-block mb-6 text-purple-400 hover:underline">
          ← Back to Portfolio
        </Link>

        {children}

        {/* Share Section */}
        <div className="flex space-x-4 text-2xl">
        <motion.a
  data-tooltip-id="x-tooltip"
  data-tooltip-content="Share on X"
  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.2 }}
 whileTap={{ scale: 0.95 }}
    className="text-white hover:text-gray-300"
  >
  <FaXTwitter />
  </motion.a>
    <ReactTooltip id="x-tooltip" place="top" effect="solid" />

  <motion.a
    data-tooltip-id="linkedin-tooltip"
    data-tooltip-content="Share on LinkedIn"
    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.95 }}
    className="text-blue-500 hover:text-blue-400"
  >
    <FaLinkedin />
  </motion.a>
  <ReactTooltip id="linkedin-tooltip" place="top" effect="solid" />

  <motion.button
    data-tooltip-id="copy-tooltip"
    data-tooltip-content="Copy Link"
    onClick={copyToClipboard}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.95 }}
    className="text-gray-300 hover:text-white"
  >
    <FaLink />
  </motion.button>
  <ReactTooltip id="copy-tooltip" place="top" effect="solid" />
</div>

        {/* Next Post Placeholder */}
        <div className="flex justify-between mt-12 border-t border-gray-700 pt-6">
          <Link 
            to="/blog/week0" 
            className="text-purple-400 hover:underline"
          >
            Next Post →
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogLayout; 