import Fade from '@/components/animations/Fade';
import ReviewsCarousel from '@/components/carousels/ReviewsCarousel';

export default function Reviews() {
  return (
    <div id="gallery" className="container-80 mx-auto flex flex-col lg:gap-10 gap-5 lg:pb-10 pb-7">
      <Fade delay={200}>
        <h2 className="text-[var(--violet-light)] md:text-6xl text-5xl font-black text-center">
          О нас говорят
        </h2>
      </Fade>
      <Fade delay={400}>
        <ReviewsCarousel />
      </Fade>
    </div>
  );
}
