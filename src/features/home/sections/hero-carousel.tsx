import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { apiService } from "@/services/api/api-service";
import { Skeleton } from "@/components/ui/skeleton";
import type {Slide} from "@/types";

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await apiService.getHeroSlides();
        setSlides(data);
      } catch (error) {
        console.error("Failed to fetch slides", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  if (loading) {
    return (
      <div className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[700px]">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] max-h-[700px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/90 sm:bg-gradient-to-r sm:from-background/95 sm:via-background/60 sm:to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto flex items-end sm:items-center pb-16 sm:pb-0">
            <div className="max-w-xl space-y-4 sm:space-y-6 py-4 sm:py-12 px-4 md:px-0">
              {slides[current].subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium"
                >
                  {slides[current].subtitle}
                </motion.span>
              )}
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight"
              >
                {slides[current].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-muted-foreground line-clamp-2 sm:line-clamp-none"
              >
                {slides[current].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-accent text-accent-foreground border-0 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg shadow-accent-glow hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  <Link to={"/products"}>
                    {"Shop Now"}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="hidden sm:flex absolute inset-y-0 left-4 items-center z-10">
        <Button
          variant="secondary"
          size="icon"
          onClick={goPrev}
          className="rounded-full w-12 h-12 glass shadow-elegant"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>
      <div className="hidden sm:flex absolute inset-y-0 right-4 items-center z-10">
        <Button
          variant="secondary"
          size="icon"
          onClick={goNext}
          className="rounded-full w-12 h-12 glass shadow-elegant"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-accent"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
