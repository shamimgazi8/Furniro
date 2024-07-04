import React from 'react';

const GetSlugFromUrl = () => {
  // Function to get slug from current URL
  const getSlugFromUrl = () => {
    // Get the current URL
    const url = window.location.href;
    
    // Split the URL by '/' to get individual parts
    const parts = url.split('/');
    
    // The last part of the URL typically contains the slug
    const lastPart = parts[parts.length - 1];
    
    // Clean and transform the last part into a slug
    const slug = lastPart
      .toLowerCase()                      // Convert to lowercase
      .replace(/[^\w-]+/g, '-')           // Replace non-word characters with -
      .replace(/--+/g, '-')               // Replace multiple - with single -
      .replace(/^-+/, '')                 // Remove leading -
      .replace(/-+$/, '');                // Remove trailing -
      
    return slug;
  };

  // Get the slug
  const slug = getSlugFromUrl();

  return (
    <div>
      <p>Current URL Slug: {slug}</p>
    </div>
  );
};

export default GetSlugFromUrl;
