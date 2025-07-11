// src/components/ThemeToggle.jsx
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // نقرأ الثيم من localStorage أو نبدأ بـ "light"
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // عند تغيير الثيم، نخزن في localStorage ونعدّل الكلاس في <html>
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // هذا الـ effect يضيف/يحذف كلاس "dark" من العنصر الأساسي
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="text-xl px-2 py-1 rounded text-gray-600 dark:text-gray-200 hover:scale-105 transition"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
