import * as SliderPrimitive from "@radix-ui/react-slider";

export default function DoubleRangeSlider({ salaryRange, setSalaryRange }) {
    return (
        <div className="w-80">
            <SliderPrimitive.Root
                className="relative flex items-center w-full h-5"
                value={salaryRange}
                onValueChange={setSalaryRange}
                min={50000}
                max={100000}
                step={10000}
            >
                <SliderPrimitive.Track className="bg-[#CCC2C2] relative flex-1 h-1 rounded-full">
                    <SliderPrimitive.Range className="absolute bg-[#222222] h-full rounded-full" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-7 border-black rounded-full cursor-pointer outline-none" />
                <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-7 border-black rounded-full cursor-pointer outline-none" />
            </SliderPrimitive.Root>
        </div>
    );
}
