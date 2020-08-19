import React from 'react';
import 'twin.macro';

type Props = {
  setDataUrl: (dataUrl: string) => void;
  label?: string;
};

export const ImageUploader: React.FC<Props> = ({
  setDataUrl,
  label = 'ファイルを選択',
}) => {
  const fileInput = React.useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (fileInput && fileInput.current) fileInput.current.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      if (!file) return;
      let reader = new FileReader();
      reader.onload = () => {
        if (reader) {
          let res = reader.result;
          if (typeof res === 'string') {
            setDataUrl(res);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        tw="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4"
      >
        {label}
      </button>
      <input ref={fileInput} type="file" tw="hidden" onChange={handleChange} />
    </>
  );
};
