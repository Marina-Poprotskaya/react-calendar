const createTemplateObjectWithLocation = (data) => {
    const { loc } = data;
    const dataAboutLocation = {
        country: data.country,
        city: data.city,
    };
    return dataAboutLocation;
  }

  
  export { createTemplateObjectWithLocation };