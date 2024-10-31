'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
}

export function TypingAnimation({
    text,
    duration = 200,
    className,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [i, setI] = useState<number>(0);

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                setI(i + 1);
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [duration, text, i]);

    // Split the text at "|" character and render with different styles
    const parts = displayedText.split('|');
    const formattedText = parts.map((part, index) =>
        index === 1 ? (
            <span key={index} className='text-accent'>
                {part}
            </span>
        ) : (
            <span key={index}>{part}</span>
        )
    );

    return (
        <div className='flex flex-row items-center'>
            <h1
                className={cn(
                    'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm w-fit inline-block',
                    className
                )}
            >
                {formattedText}
                <span className='animate-blink'>|</span>
            </h1>
        </div>
    );
}
