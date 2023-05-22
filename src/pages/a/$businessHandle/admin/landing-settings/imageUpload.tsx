import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { UploadChangeParam, UploadProps } from 'antd/lib/upload';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  console.log('hola', file);
  return isJpgOrPng && isLt2M;
};

function ImageUpload({ imageUrl, setImageUrl, currentImage, landingId, imageType }: any) {
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps['onChange'] = async (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      console.log(info.file, info.fileList);
      setLoading(true);
    }
    if (info.file.status === 'done') {
      setLoading(false);
      setImageUrl(info.file.response.url);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      setLoading(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const loadingButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={`http://localhost:4000/images?landingId=${landingId}&imageType=${imageType}`}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {console.log('button', loading)}
        {loading ? (
          loadingButton
        ) : imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : currentImage ? (
          <img src={currentImage} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
}

export default ImageUpload;
