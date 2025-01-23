// Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    // Select DOM elements
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

// Total number of slides
const totalSlides = slides.children.length;

// Function to move to a specific slide
function moveToSlide(index) {
  // Ensure the index stays within bounds
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update the transform property to show the correct slide
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
prev.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

// Initial setup: Ensure first slide is displayed
moveToSlide(currentIndex);



let cartCount = 0;

    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Increment the cart count
        cartCount++;

        // Update the cart count display in the navbar
        document.getElementById('cart-count').textContent = cartCount;
      });
    });
    