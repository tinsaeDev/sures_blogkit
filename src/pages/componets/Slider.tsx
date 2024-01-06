import { useRef } from 'react';
import { useEffect } from 'react';
import { ReactNode } from 'react';
import React from 'react';

export default function Slider(props: { children: ReactNode; src: string }) {
  const ownRef = useRef<HTMLDivElement>();
  const imgRef = useRef<HTMLImageElement>();

  useEffect(function () {
    console.log('Updating reff');

    if (ownRef.current) {
      ownRef.current.style.height = imgRef.current.offsetHeight;
    }
  }, []);
  return (
    <div
      ref={ownRef}
      className="slider"
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        ref={imgRef}
        src={props.src}
        width="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {props.children}
    </div>
  );
}
