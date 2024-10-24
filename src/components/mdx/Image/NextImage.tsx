import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function NextImage({ src, alt, width, height }: ImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        className='mx-auto mb-0 mt-35 h-auto w-auto rounded-md'
      />
      {alt !== '' && (
        <span className='mb-30 mt-8 block w-full text-center text-14 text-gray-500 dark:text-gray-400'>
          {alt}
        </span>
      )}
    </>
  );
}
