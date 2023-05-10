import React from 'react'

import { Stack,Button } from '@mui/material'

import notFoundCover from '../../../assets/images/cover_not_found.jpg'

import './webbook.scss'

const WebBook = ({
    thumbnail,
    title,
    publishDate,
    info,
    id,
    onDetails
}) => {

// This function is being used to convert date to a different format
    const convertDateString = (dateString) => {
        const dateObj = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
      }

  return (
    <div className="webBook">
    <div className="img-container">
        <img src={thumbnail || notFoundCover} alt="book thumbnail" className={ thumbnail ? "thumbnail" : 'thumbnail w-50'} />
    </div>
    <div className="details">
        <h3 className="title">{title}</h3>
        <h5>Pusblished On: <span className="highlight">{convertDateString(publishDate)}</span> </h5>
        <Stack direction={'row'} spacing="8px" className="info">
        <h5>Info:</h5>
        <h5 dangerouslySetInnerHTML={{__html: info}}></h5>
        </Stack>
        <Button variant="contained" className="details-btn" onClick={onDetails}>Summary</Button>
    </div>
</div>
  )
}

export default WebBook