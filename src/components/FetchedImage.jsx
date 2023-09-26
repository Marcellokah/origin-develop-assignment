import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FetchedImage = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const apiKey = 'jaM4uOImXrWvwIrlPqtrFacRkT-jn2SNWMeYaheRO7I';
    const width = 605;
    const height = 400;
    const query = 'clothes';
    const fitCropQuery = `fit=scale&w=${width}&h=${height}`;
    const queryParams = `${query}&${fitCropQuery}`;

    // Fetch a random image from Unsplash
    axios
      .get(`https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${queryParams}`)
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <div>
      {image && (
        <img src={image.urls.small} alt={image.alt_description} />
      )}
    </div>
  );
};

export default FetchedImage
