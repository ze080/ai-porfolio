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
 const [copied, setCopied] = React.useState(false);

const handleCopy = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  });
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
        <div className="flex gap-4 mt-8 items-center">
  {/* X (Twitter) */}
  <motion.a
    href={`https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="group"
  >
    <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 p-1 rounded-full">
      <div className="bg-gray-900 rounded-full p-3 transition-colors duration-300 group-hover:bg-gray-800">
        <FaXTwitter className="text-white w-5 h-5" />
      </div>
    </div>
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="group"
  >
    <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-500 p-1 rounded-full">
      <div className="bg-gray-900 rounded-full p-3 transition-colors duration-300 group-hover:bg-gray-800">
        <FaLinkedin className="text-white w-5 h-5" />
      </div>
    </div>
  </motion.a>

  {/* Copy Link */}
  <motion.button
    onClick={handleCopy}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="group"
    data-tooltip-id="copy-tooltip"
    data-tooltip-content={copied ? 'Copied!' : 'Copy link'}
  >
    <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 p-1 rounded-full">
      <div className="bg-gray-900 rounded-full p-3 transition-colors duration-300 group-hover:bg-gray-800">
        <FaLink className="text-white w-5 h-5" />
      </div>
    </div>
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