import React from 'react';
import { NextPage } from 'next';
import PoseNet from 'react-posenet';
import 'twin.macro';
import { ImageUploader } from '../components/ImageUploader';

type Props = {};

const IndexPage: NextPage<Props> = () => {
  const [dataUrl, setDataUrl] = React.useState<string>('/batter.png');
  const [posesString, setPosesString] = React.useState([]);
  const input = React.useMemo(() => {
    if (!process.browser) return;
    const image = new Image();
    image.crossOrigin = '';
    image.src = dataUrl;
    return image;
  }, [dataUrl]);

  return (
    <section tw="text-gray-700">
      <div tw="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          tw="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={dataUrl}
        />
        <div tw="text-center lg:w-2/3 w-full">
          {input && (
            <PoseNet
              input={input}
              inferenceConfig={{ decodingMethod: 'single-person' }}
              onEstimate={(poses: object) => {
                setPosesString(JSON.stringify(poses));
              }}
            />
          )}
          {posesString}
          <h1 tw="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            バッターの画像をアップロードしてください。
          </h1>
          <p tw="mb-8 leading-relaxed">注意事項</p>
          <div tw="flex justify-center">
            <ImageUploader label="画像を選択" setDataUrl={setDataUrl} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
