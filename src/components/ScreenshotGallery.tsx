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
      <div className="relative group">
        <div className="relative aspect-video bg-background-secondary rounded-lg overflow-hidden border border-border/50">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-background/80 backdrop-blur-sm border border-border/50">
            <span className="font-heading text-sm text-foreground">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? "border-primary ring-2 ring-primary/30"
                : "border-border/50 hover:border-primary/50 opacity-60 hover:opacity-100"
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
