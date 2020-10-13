const createTemplateObjectWithLocation = (data) => {
    const dataAboutLocation = {
        country: data.country,
        city: data.city,
    };
    return dataAboutLocation;
  }

  
  export { createTemplateObjectWithLocation };