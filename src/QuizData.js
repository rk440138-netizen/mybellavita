// src/QuizData.js

export const quizData = {
    fragrance: {
      title: "Find Your Signature Scent",
      questions: [
        {
          id: 1,
          text: "Who is this perfume for?",
          options: [
            { label: "For Him", value: "men" },
            { label: "For Her", value: "women" },
            { label: "Unisex / Anyone", value: "unisex" }
          ]
        },
        {
          id: 2,
          text: "What kind of vibe do you prefer?",
          options: [
            { label: "Fresh & Energetic (Office/Day)", recommend: 101 }, // CEO Man ID
            { label: "Sweet & Romantic (Date Night)", recommend: 3 },    // Date Woman ID
            { label: "Bold & Woody (Party/Night)", recommend: 1 },       // Klub Man ID
            { label: "Subtle & Classy (Daily Wear)", recommend: 104 }    // White Oud ID
          ]
        }
      ]
    },
    lipstick: {
      title: "Find Your Perfect Lip Shade",
      questions: [
        {
          id: 1,
          text: "What is your skin undertone?",
          options: [
            { label: "Cool / Fair", value: "fair" },
            { label: "Warm / Medium", value: "medium" },
            { label: "Deep / Dark", value: "dark" }
          ]
        },
        {
          id: 2,
          text: "What finish do you like?",
          options: [
            { label: "Matte (Long lasting)", recommend: 204 }, 
            { label: "Glossy (Shiny)", recommend: 202 },       
            { label: "Satin (Creamy)", recommend: 204 }        
          ]
        }
      ]
    }
  };