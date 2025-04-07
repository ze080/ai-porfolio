import BlogLayout from '../components/BlogLayout';

const Week0 = () => {
  return (
    <BlogLayout title="Week 0: The Beginning of a World-Class AI Journey">
      <p className="mb-4">Hey there, world! 👋</p>
      <p className="mb-4">
        Welcome to the <strong>first official blog</strong> on my brand-new portfolio site. I’m Zayed Binjad — an aspiring AI Engineer with a mission to go from zero to <em>world-class</em>, one week at a time. 🧠⚡
      </p>
      <p className="mb-4">
        This week was all about setting the foundation, and what better way to start than by building my own digital home — this portfolio! It was a journey of late nights, troubleshooting, learning, and a bit of Googling 😅. From deploying it on <strong>Vercel</strong>, connecting custom domains like <code>.dev</code>, <code>.com</code>, and <code>.in</code>, to styling it all with <strong>React</strong> and <strong>Tailwind CSS</strong> — every line of code taught me something new.
      </p>
      <p className="mb-4">I didn’t do this with a course. No tutorial series. Just me, the docs, some AI assistance, and raw curiosity.</p>

      <h2 className="text-2xl font-semibold text-purple-300 mt-10 mb-4">🧠 What’s Next: Week 1 Learning Plan</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Master Python (variables, loops, functions, OOP)</li>
        <li>Learn NumPy, Pandas, Matplotlib basics</li>
        <li>Linear Algebra (vectors, dot product, matrix operations)</li>
        <li>Calculus (derivatives, gradients)</li>
        <li>Probability & Statistics (mean, std dev, distributions)</li>
        <li>Build Python Projects: calculator, matrix ops, CSV analyzer</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple-300 mt-10 mb-4">🔥 Why I’m Doing This</h2>
      <p className="mb-4">
        AI isn’t just the future — it’s the <em>now</em>. And I’m here to not just learn it, but <strong>master it</strong>. I’ll be documenting everything I do — honestly, openly, and consistently — so if you’ve ever wanted to learn AI, this might be your sign to start.
      </p>

      <h2 className="text-2xl font-semibold text-purple-300 mt-10 mb-4">🗓️ See You Next Sunday @ 9 PM!</h2>
      <p>
        I'll be posting a new blog every <strong>Sunday at 9 PM</strong>, sharing my progress, challenges, learnings, and projects. If you want to learn with me, or just stay inspired — I’d love to have you on this journey.
      </p>

      <p className="mt-6">Until then,<br/><strong>Stay curious, stay consistent.</strong><br/>— Zayed 💜</p>
    </BlogLayout>
  );
};

export default Week0;