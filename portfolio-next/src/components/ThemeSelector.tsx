import { useTheme } from '@/context/ThemeContext';

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Default' },
    { id: 'batman', name: 'Batman' },
    { id: 'console', name: 'Console' },
    { id: 'matrix', name: 'Matrix' },
    { id: 'cyberpunk', name: 'Cyberpunk' }
  ];

  return (
    <div className="absolute top-4 right-4 z-50">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="bg-black/50 text-white px-3 py-1 rounded-md border border-white/20 backdrop-blur-md"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
