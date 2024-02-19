declare module 'react-slick' {
    import { ReactNode } from 'react';
  
    interface SliderSettings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
    }
  
    export default class Slider extends React.Component<SliderSettings> {
      slickNext(): void;
      slickPrev(): void;
      slickGoTo(slide: number, dontAnimate?: boolean): void;
    }
  }
  