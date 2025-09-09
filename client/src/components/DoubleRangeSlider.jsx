import { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

export default function DoubleRangeSlider() {
    const [value, setValue] = useState([20, 80]);

    return (
        <div className="w-80">
            <SliderPrimitive.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                value={value}
                onValueChange={setValue}
                min={0}
                max={100}
                step={1}
            >
                <SliderPrimitive.Track className="bg-gray-200 relative flex-1 h-1 rounded-full">
                    <SliderPrimitive.Range className="absolute bg-black h-full rounded-full" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-6 border-black rounded-full cursor-pointer outline-none" />
                <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-6 border-black rounded-full cursor-pointer outline-none" />
            </SliderPrimitive.Root>
        </div>
    );
}
