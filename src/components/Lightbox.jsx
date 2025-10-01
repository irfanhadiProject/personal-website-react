import { useCallback, useEffect, useState } from 'react';
import styles from './Lightbox.module.css';

function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    setScale((prev) => Math.min(Math.max(prev * zoomFactor, 0.5), 5));
  }, []);

  const handleMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - translate.x, y: e.clientY - translate.y });
    },
    [translate]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      setTranslate({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePrev = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    },
    [onClose, handlePrev, handleNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleKeyDown, handleMouseUp, handleMouseMove]);
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div
          className={styles.imageWrapper}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
        >
          <img
            src={images[currentIndex]}
            alt={`Zoomable ${currentIndex + 1}`}
            style={{
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            draggable={false}
          />
        </div>

        <div className={styles.controls}>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={() => setScale((s) => Math.min(s + 0.2, 5))}>
            Zoom In
          </button>
          <button onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))}>
            Zoom Out
          </button>
          <button
            onClick={() => {
              setScale(1);
              setTranslate({ x: 0, y: 0 });
            }}
          >
            Reset
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
