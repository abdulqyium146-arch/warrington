'use client';
import { useEffect } from 'react';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[AdminError]', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center p-8">
      <div className="bg-brand-darkgray border border-red-500/30 rounded-xl p-8 max-w-2xl w-full">
        <h2 className="text-xl font-bold text-red-400 mb-4">Admin Dashboard Error</h2>
        <p className="text-gray-300 text-sm mb-2 font-mono break-all">{error.message}</p>
        {error.digest && (
          <p className="text-gray-500 text-xs mb-4">Digest: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="px-4 py-2 bg-brand-gold text-black rounded font-medium text-sm"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
