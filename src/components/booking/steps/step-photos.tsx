'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Upload, X, ImageIcon } from 'lucide-react';

export interface PhotosData {
  urls: string[];
}

interface StepPhotosProps {
  defaultValue?: PhotosData;
  onNext: (data: PhotosData) => void;
  onBack: () => void;
}

export function StepPhotos({ defaultValue, onNext, onBack }: StepPhotosProps) {
  const [urls, setUrls] = useState<string[]>(defaultValue?.urls ?? []);

  const removePhoto = (idx: number) => {
    setUrls((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-heading font-bold text-brand-white">Vehicle Photos</h2>
        <p className="text-gray-400 text-sm mt-1">
          Optional — share photos of your vehicle so we can prepare the right products
        </p>
      </div>

      <div className="bg-brand-gray/20 border-2 border-dashed border-brand-gray/50 rounded-xl p-8 text-center">
        <ImageIcon className="h-10 w-10 text-gray-500 mx-auto mb-3" />
        <p className="text-sm text-gray-400 mb-1">Photo upload coming soon</p>
        <p className="text-xs text-gray-500">You can describe your vehicle&rsquo;s condition in the notes step</p>
      </div>

      {urls.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {urls.map((url, i) => (
            <div key={url} className="relative aspect-square rounded-xl overflow-hidden group">
              <img src={url} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
              <button
                onClick={() => removePhoto(i)}
                className="absolute top-2 right-2 p-1 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3">
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={() => onNext({ urls })}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" onClick={() => onNext({ urls: [] })} className="text-gray-400">
          Skip
        </Button>
      </div>
    </div>
  );
}
