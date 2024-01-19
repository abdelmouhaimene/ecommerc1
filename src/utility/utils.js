export function extractProductsLink(inputString) {
    // Check if the string starts with "/products/"
    if (inputString.startsWith('/products/')) {
      // Split the string into parts using "/" as the delimiter
      const parts = inputString.split('/');
      
      // Ensure that there are at least three parts
      if (parts.length >= 3) {
        // Extract the second part and capitalize the first letter
        const secondWord = parts[2].charAt(0).toUpperCase() + parts[2].slice(1);
        return secondWord;
      }
    }
  
    // Return an empty string or handle the case where the input doesn't match the expected format
    return '';
  }

export function convertToProductPath(inputString) {
    // Make the input string lowercase
    const lowercaseString = inputString.toLowerCase();
    
    // Add "/products/" in front of the lowercase string
    const productPath = `/products/${lowercaseString}`;
    
    return productPath;
  }

export function handleChangeRadioNavigate(setValue,event) {
    setValue(event.target.value);
    navigate(convertToProductPath(event.target.value))
  };

  export function handleChangeRadio(setValue,event) {
    setValue(event.target.value);
  };
