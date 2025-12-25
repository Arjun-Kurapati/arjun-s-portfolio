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
    <div className="mt-6 flex flex-col items-center w-full">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-primary/80 to-primary/40 rounded px-3 py-1.5 mb-3">
        <h3 className="font-display text-sm font-semibold text-primary-foreground">
          {title}
        </h3>
      </div>

      {/* Main Image Display - Medium Size */}
      <div className="relative w-full max-w-xl mx-auto flex items-center justify-center gap-3">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 p-2 rounded-full bg-background/90 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 shadow-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative w-full max-w-lg">
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
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-background/80 backdrop-blur-sm border border-border/50">
              <span className="font-heading text-[10px] text-foreground">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 p-2 rounded-full bg-background/90 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 shadow-sm"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnail Strip - Centered */}
      <div className="mt-3 flex gap-1.5 justify-center flex-wrap max-w-xl">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-10 h-6 md:w-12 md:h-8 rounded-sm overflow-hidden border transition-all duration-200 ${
              index === currentIndex
                ? "border-primary ring-1 ring-primary/30 opacity-100"
                : "border-border/40 opacity-40 hover:opacity-80"
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
