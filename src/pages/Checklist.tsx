import { useState } from 'react';

const topics = [
  { id: 1, text: "Learn Python Basics" },
  { id: 2, text: "Understand Data Structures" },
  { id: 3, text: "Master Machine Learning" },
  { id: 4, text: "Explore Deep Learning" },
  { id: 5, text: "Build AI Projects" },
];

export default function Checklist() {
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">🧠 AI Engineer Checklist</h1>
      <ul className="space-y-4">
        {topics.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between p-4 border rounded-xl ${
              checked[item.id] ? 'bg-green-700 border-green-500' : 'bg-gray-800'
            }`}
          >
            <span className="text-xl">{item.text}</span>
            <input
              type="checkbox"
              checked={!!checked[item.id]}
              onChange={() => toggle(item.id)}
              className="w-6 h-6"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}