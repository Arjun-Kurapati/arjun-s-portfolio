import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut, SkipBack } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface ScreenshotGalleryProps {
  images: string[];
  title?: string;
}
const ScreenshotGallery = ({
  images,
  title = "Overview Screenshots"
}: ScreenshotGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    setZoomLevel(1);
  };
  const goToNext = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    setZoomLevel(1);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setZoomLevel(1);
  };
  const openLightbox = () => {
    setIsLightboxOpen(true);
    setZoomLevel(1);
  };
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoomLevel(1);
  };
  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };
  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);
  if (!images.length) return null;
  return <>
      <div className="mt-6 flex flex-col items-center w-full">
        {/* Section Header */}
        <div className="w-full bg-gradient-to-r from-background via-primary/60 to-background rounded-md px-4 py-3 mb-6">
          <h3 className="font-display text-lg font-semibold text-foreground text-center">
            {title}
          </h3>
        </div>

        {/* Main Image Display - Larger Size */}
        

        {/* Thumbnail Strip */}
        <div className="mt-4 flex gap-2 justify-center flex-wrap max-w-4xl w-0 shadow-sm opacity-75 border">
          {images.map((image, index) => {})}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.2
      }} className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md" onClick={closeLightbox}>
            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              {/* Zoom Controls */}
              <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-2 py-1">
                <button onClick={e => {
              e.stopPropagation();
              zoomOut();
            }} disabled={zoomLevel <= 1} className="p-1.5 rounded-full text-foreground hover:bg-primary/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Zoom out">
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="font-heading text-sm text-foreground min-w-[3rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button onClick={e => {
              e.stopPropagation();
              zoomIn();
            }} disabled={zoomLevel >= 3} className="p-1.5 rounded-full text-foreground hover:bg-primary/20 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Zoom in">
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              {/* Close Button */}
              <button onClick={closeLightbox} className="p-2 rounded-full bg-background/80 border border-border/50 text-foreground hover:bg-destructive/20 hover:border-destructive/50 transition-all duration-200" aria-label="Close lightbox">
                <SkipBack className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button onClick={e => {
          e.stopPropagation();
          goToPrevious();
        }} className="absolute left-4 md:left-8 p-3 rounded-full bg-background/80 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 z-10" aria-label="Previous image">
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button onClick={e => {
          e.stopPropagation();
          goToNext();
        }} className="absolute right-4 md:right-8 p-3 rounded-full bg-background/80 border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 z-10" aria-label="Next image">
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Lightbox Image with Zoom */}
            <motion.div className="max-w-[90vw] max-h-[85vh] relative overflow-auto" onClick={e => e.stopPropagation()} initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} transition={{
          duration: 0.2
        }}>
              <AnimatePresence mode="wait">
                <motion.img key={`${currentIndex}-${zoomLevel}`} src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="max-w-full max-h-[85vh] object-contain rounded-lg border border-border/30 shadow-2xl cursor-grab active:cursor-grabbing" style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: 0.15
            }} draggable={zoomLevel > 1} />
              </AnimatePresence>
            </motion.div>

            {/* Image Counter in Lightbox */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50">
              <span className="font-heading text-sm text-foreground">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default ScreenshotGallery;