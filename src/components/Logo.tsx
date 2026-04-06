import React, { useState, useEffect } from 'react';
import { generateLogo } from '../lib/gemini';
import { Loader2, Palmtree } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogo() {
      const url = await generateLogo("Professional travel logo, beach theme, Andaman Islands vibe");
      setLogoUrl(url);
      setLoading(false);
    }
    fetchLogo();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-sky-50 rounded-full animate-pulse ${className}`}>
        <Loader2 className="w-6 h-6 text-sky-500 animate-spin" />
      </div>
    );
  }

  if (!logoUrl) {
    return (
      <div className={`flex items-center justify-center bg-sky-600 text-white rounded-lg font-bold p-2 ${className}`}>
        <Palmtree className="mr-2" />
        <span className="tracking-tighter">ANDAMAN TRIPVERSE</span>
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt="Andaman Tripverse Logo" 
      className={`object-contain rounded-lg ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
