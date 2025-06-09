# React Blog Portfolio

This project is a personal blog portfolio built with React and Vite. It features blog posts organized by months, dynamic routing, and SEO optimization.

## Technologies Used

- React
- Vite
- React Router
- Tailwind CSS
- React Helmet Async (for SEO)
- Framer Motion (for animations)
- Lucide React and React Icons (for icons)

## Project Structure

- `src/pages/` - Contains page components including the main blog listing and individual blog post pages.
- `src/blogs/` - Contains blog post content components organized by month.
- `src/components/` - Reusable UI components such as BlogLayout and SEO.
- `src/data/blogPosts.js` - Metadata for blog posts including titles, descriptions, and slugs.
- `src/assets/` - Static assets like images and icons.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` (or the port Vite specifies).

## Adding Blog Posts

- Add blog post metadata in `src/data/blogPosts.js`.
- Create corresponding blog content components in `src/blogs/` following the existing month-based naming convention (e.g., `MonthX.jsx`).
- Update routing or blog listing pages if necessary.

## Testing

Currently, there are no automated tests included. Manual testing is recommended by navigating through the blog pages and verifying content rendering.

## License

This project is open source and available under the MIT License.
