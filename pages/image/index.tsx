import Image from "next/image";

const ImagePage = () => {
  return (
    <div className="w-full h-screen bg-slate-600">
      <div className="w-11/12 h-32 relative">
        <Image
          className="object-contain"
          src="/images/colorfulBg.png"
          alt=""
          loading="eager"
          fill
        />
      </div>
      <div className="relative w-[300px] h-[300px]">
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <Image src="/images/moon.png" alt="logo" fill loading="eager" />
        </div>
        <div className="w-[200px] h-[50px] absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={200}
            height={50}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
