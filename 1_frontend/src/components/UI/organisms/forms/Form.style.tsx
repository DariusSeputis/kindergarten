import styled from 'styled-components';

export const StyledForm = styled.form``;

export const StyledLabelInputWrapper = styled.div``;

export const StyledPhotoUploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 2em;

  background-color: var(--navPrimary-color);
  height: 100vh;

  input {
    font-size: 1em;
    width: fit-content;
  }
`;
