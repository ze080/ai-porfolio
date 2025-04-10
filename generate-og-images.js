import puppeteer from 'puppeteer';
import fs from 'fs';
import blogPosts from './src/data/blogPosts.js';

const generateImages = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const post of blogPosts) {
    const html = `

  <html>
    <head>
      <style>
        body {
          width: 1200px;
          height: 630px;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #1e1e2f, #13131f);
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', sans-serif;
          color: white;
        }
        .container {
          text-align: center;
          padding: 2rem;
          width: 1000px;
          border: 3px solid #7f5af0;
          border-radius: 20px;
          background: rgba(0,0,0,0.3);
        }
        h1 {
          font-size: 60px;
          line-height: 1.2;
          margin-bottom: 40px;
        }
        .date {
          font-size: 30px;
          color: #ccc;
          margin-bottom: 40px;
        }
        .footer {
          font-size: 26px;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 ${post.title}</h1>
        <div class="date">📅 ${post.date}</div>
        <div class="footer">Zayed Binjad ✨</div>
      </div>
    </body>
  </html>
`;

    await page.setContent(html);
    await page.setViewport({ width: 1200, height: 630 });
    const filePath = `./public/og-images/${post.slug}.png`;
    await page.screenshot({ path: filePath });
    console.log(`✅ Generated ${filePath}`);
  }

  await browser.close();
};

generateImages();