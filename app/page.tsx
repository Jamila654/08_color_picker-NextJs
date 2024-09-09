"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedColor);
    alert("Color copied to clipboard!");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card>
          <CardHeader>
            <CardTitle className=" text-center">Color Picker</CardTitle>
            <CardDescription>
              Select a color and copy the hex and RGB values
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div
              className="color_picker w-full h-32 border-2 rounded-md"
              style={{ backgroundColor: selectedColor }}
            ></div>
            <h1 className=" font-bold mt-4">{selectedColor}</h1>
            <h3>
              RGB: {parseInt(selectedColor.slice(1, 3), 16)},{" "}
              {parseInt(selectedColor.slice(3, 5), 16)},{" "}
              {parseInt(selectedColor.slice(5, 7), 16)}
            </h3>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-5">
            <Button onClick={copyToClipboard}>Copy to Clipboard</Button>

            <div className="relative w-full">
              <input
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
                className="absolute inset-0 w-full h-14 opacity-0 cursor-pointer"
              />
              <div
                className="color_picker w-full h-14 border-2 rounded-md"
                style={{ backgroundColor: selectedColor }}
              ></div>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}


