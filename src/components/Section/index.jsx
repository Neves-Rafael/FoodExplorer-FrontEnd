import { Container } from "./style";
import "@splidejs/react-splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export function Section({ title, children }) {
  const splideOptions = {
    type: "loop",
    fixedWidth: 304,
    gap: 27,
    focus: "center",
    rewind: true,
    rewindByDrag: true,
    rewindSpeed: 100,
    mediaQuery: "max",
    isNavigation: true,
    breakpoints: {
      768: {
        fixedWidth: 210,
        focus: "start",
        arrows: false,
        pagination: false,
      },
      1024: {
        gap: 16,
        fixedWidth: 210,
      },
    },
  };

  return (
    <Container>
      <p>{title}</p>
      <Splide options={splideOptions} id="children">
        {children.length > 0 &&
          children.map((item) => (
            <SplideSlide key={item.key}>{item}</SplideSlide>
          ))}
      </Splide>
    </Container>
  );
}
