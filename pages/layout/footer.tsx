import React, { useEffect } from 'react';



const MyComponent = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'assets/js/scripts.bundle.js'; // Adjust the path to scripts.bundle.js
    script.async = true;

    // Load event handler
    const handleScriptLoad = () => {
      // Now that the script is loaded, you can use KTThemeMode
      if (typeof KTThemeMode !== 'undefined') {
        console.log('KTThemeMode is defined:', KTThemeMode);
        // Your code using KTThemeMode goes here
      } else {
        console.log('KTThemeMode is not defined.');
      }
    };

    script.addEventListener('load', handleScriptLoad);

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up the script on unmount
    return () => {
      script.removeEventListener('load', handleScriptLoad);
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>

      <script src="assets/plugins/global/plugins.bundle.js"></script>
      {/* <script src="assets/js/scripts.bundle.js"></script> */}
    </div>
  );
};

export default MyComponent;