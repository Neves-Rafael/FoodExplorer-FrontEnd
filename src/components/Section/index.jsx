import { Container, Carrousel } from "./style";
// import { RiArrowLeftSLine } from "react-icons/ri";
// import { RiArrowRightSLine } from "react-icons/ri";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

export function Section({ title, children }) {
  const splideOptions = {
    type: 'loop',
    fixedWidth : 304,
    gap: 27,
    focus: 'center',
    rewind: true,
    rewindByDrag: true,
    rewindSpeed: 100,
    mediaQuery: 'max',
    isNavigation: true,
    breakpoints: {
      768: {
        fixedWidth : 210,
        focus: 'start',
        arrows: false,
        pagination: false,
      },
      1024:{
        gap: 16,
        fixedWidth : 210,
      }
    }
  };

  const teste = children;

  return (
    <Container>
      <p>{title}</p>
        <Splide options={splideOptions} id="teste">
          {teste.length > 0 && teste.map((item) => (
            <SplideSlide key={item.key}>
              {item}
            </SplideSlide>
          ))}
        </Splide> 
    </Container>
  );
}
