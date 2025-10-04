import GalleryCarousel from '@/components/carousels/GalleryCarousel';
import { photos } from '@/data/Gallery';
import Fade from '@/components/animations/Fade';

export default function Gallery() {
  return (
    <div id="gallery" className="container-80 mx-auto flex flex-col lg:gap-10 gap-5 lg:py-10 py-7">
      <Fade delay={200}>
        <h2 className="text-[var(--violet-light)] md:text-6xl text-5xl font-black text-center">
          Фоточки с игр
        </h2>
      </Fade>
      <Fade delay={400}>
        <GalleryCarousel photos={photos} />
      </Fade>
    </div>
  );
}
