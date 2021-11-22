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
    setFiles(e.target.files);
  };
  // - Upload photo(s)
  // async function postImage(images: any) {
  //   const result = await axios.post(
  //     'http://127.0.0.1:5000/multiple',
  //     formData,
  //     {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     }
  //   );
  //   return result.data;
  // }

  const postPhotos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }

      const result = await axios.post(
        'http://127.0.0.1:5000/multiple',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
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
