import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../atoms/inputs_labels/Input';
import Label from '../../atoms/inputs_labels/Label';
import { StyledPhotoUploadForm } from './Form.style';

const PhotoUploadForm: React.FC = () => {
  // Hooks
  // - State
  const [files, setFiles] = useState([]);
  // Custom functions
  const putSelectedFilesInState = (e: any) => {
    console.log(e.target);
    setFiles(e.target.files[0]);
    setTimeout(() => {
      console.log(files);
    }, 1000);
  };
  // - Upload photo(s)
  async function postImage({ images }: any) {
    const formData = new FormData();
    formData.append('images', images);

    const result = await axios.post(
      'http://127.0.0.1:5000/multiple',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    return result.data;
  }

  const postPhotos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await postImage({ images: files });
    console.log(result);
  };

  return (
    <StyledPhotoUploadForm onSubmit={postPhotos}>
      <div>
        <Label text='Select files to upload' forProp='fileUpload' />
        <Input type='file' action={putSelectedFilesInState} multiple={true} />
      </div>
      <Input type='submit' value='Upload files' />
    </StyledPhotoUploadForm>
  );
};

export default PhotoUploadForm;
