import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function SectionWrapper({ children, className, id, delay = 0.1 }: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id={id}
            ref={ref}
            className={twMerge('section-padding relative', className)}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}
