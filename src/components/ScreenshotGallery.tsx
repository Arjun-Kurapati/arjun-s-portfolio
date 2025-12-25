import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotGalleryProps {
  images: string[];
  title?: string;
}

const ScreenshotGallery = ({ images, title = "Overview Screenshots" }: ScreenshotGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  if (!images.length) return null;

  return (
    <>
      <div className="mt-6 flex flex-col items-center w-full">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-primary/80 to-primary/40 rounded px-3 py-1.5 mb-4">
          <h3 className="font-display text-sm font-semibold text-primary-foreground">
            {title}
          </h3>
        </div>

        {/* Main Image Display - Medium Size */}
        <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 p-2 rounded-full bg-background/90 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-xl">
            <div 
              className="relative aspect-video bg-background-secondary rounded-lg overflow-hidden border border-border/50 cursor-pointer group"
              onClick={openLightbox}
            >
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

              {/* Fullscreen hint overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80 backdrop-blur-sm rounded-full p-2">
                  <Maximize2 className="w-5 h-5 text-foreground" />
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute top-2 right-2 px-2 py-1 rounded bg-background/80 backdrop-blur-sm border border-border/50">
                <span className="font-heading text-xs text-foreground">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="flex-shrink-0 p-2 rounded-full bg-background/90 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-3 flex gap-1.5 justify-center flex-wrap max-w-2xl">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-12 h-8 md:w-14 md:h-9 rounded overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? "border-primary ring-2 ring-primary/30 opacity-100"
                  : "border-border/40 opacity-50 hover:opacity-90"
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 border border-border/50 text-foreground hover:bg-destructive/20 hover:border-destructive/50 transition-all duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-background/80 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-background/80 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <motion.div
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg border border-border/30 shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              </AnimatePresence>

              {/* Image Counter in Lightbox */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
                <span className="font-heading text-sm text-foreground">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScreenshotGallery;
