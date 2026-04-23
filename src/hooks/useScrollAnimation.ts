// src/hooks/useScrollAnimation.ts
import { useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return { ref, isInView };
}
