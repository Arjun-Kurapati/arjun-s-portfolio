import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotGalleryProps {
  images: string[];
  title?: string;
}

const ScreenshotGallery = ({ images, title = "Overview Screenshots" }: ScreenshotGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images.length) return null;

  return (
    <div className="mt-8">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-primary/80 to-primary/40 rounded-md px-4 py-2 mb-6">
        <h3 className="font-display text-lg font-semibold text-primary-foreground text-center">
          {title}
        </h3>
      </div>

      {/* Main Image Display */}
      <div className="relative group max-w-2xl mx-auto">
        <div className="relative aspect-video bg-background-secondary rounded-lg overflow-hidden border border-border/50 max-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Image Counter */}
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-sm border border-border/50">
            <span className="font-heading text-xs text-foreground">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-3 flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin max-w-2xl mx-auto justify-center flex-wrap">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-12 h-8 md:w-14 md:h-10 rounded overflow-hidden border transition-all duration-300 ${
              index === currentIndex
                ? "border-primary ring-1 ring-primary/30"
                : "border-border/50 hover:border-primary/50 opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScreenshotGallery;
