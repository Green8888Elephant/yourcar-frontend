import {CarouselPluginTypes} from "@brainhubeu/react-carousel";

interface CarouselBreakpoint {
    [breakpointNumber: number]: Pick<CarouselProps, Exclude<keyof CarouselProps, "breakpoints">>
}

export interface CarouselProps {
    itemWidth?: number | undefined;
    value?: number | undefined;
    onChange?(value: number): void;
    slides?: JSX.Element[] | undefined;
    offset?: number | undefined;
    draggable?: boolean | undefined;
    animationSpeed?: number | undefined;
    className?: string | undefined;
    breakpoints?: CarouselBreakpoint;
    plugins?: Array<string|CarouselPluginTypes> | undefined;
}