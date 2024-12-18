import React from 'react'

export default function About() {
  return (
    <div class="container py-3 about">
      <h2 class="text-center">About Us</h2>
      <p><strong>Text-WebTool </strong>is a versatile online platform designed to simplify string manipulation and basic mathematical calculations. Developed using the React.js framework, this user-friendly tool offers a wide range of functionalities to streamline your text-based tasks.</p>
      <h3>Key Features</h3>
      <ul>
        <li>String Manipulation: Easily perform various operations on text, including:
          <ul><li>Capitalization (uppercase, lowercase, title case)</li>
          <li>Character counting</li>
          <li>Word counting</li>
          <li>String trimming</li></ul>
        </li>
        <li>Basic Mathematical Calculations: Quickly perform fundamental arithmetic operations:
          <ul><li>Addition</li>
          <li>Subtraction</li>
          <li>Multiplication</li>
          <li>Division</li></ul>
        </li>
        <li><strong>Dark Mode Toggle: </strong>Customize your viewing experience by seamlessly switching between light and dark mode to suit your preference and environment.</li>
      </ul>
      <h3>Technology Stack</h3>
    <ul>
        <li><span class="highlight">React.js</span>: A popular JavaScript library for building user interfaces, providing a component-based architecture and efficient rendering.</li>
        <li><span class="highlight">useState</span>: A React hook used to manage state within functional components, enabling dynamic updates to the user interface.</li>
        <li><span class="highlight">Props</span>: Mechanisms for passing data from parent components to child components, facilitating data flow and reusability.</li>
        <li><span class="highlight">React Router</span>: A library for managing navigation and routing within React applications, allowing users to navigate between different pages or sections of the tool.</li>
    </ul>

    <h1>Benefits of Text-WebTool</h1>
    <ul>
        <li><span class="highlight">Efficiency</span>: Streamline your text-based tasks with a user-friendly interface and powerful features.</li>
        <li><span class="highlight">Accuracy</span>: Rely on accurate calculations and string manipulations for reliable results.</li>
        <li><span class="highlight">Customization</span>: Enjoy a personalized experience by toggling between light and dark mode.</li>
        <li><span class="highlight">Accessibility</span>: The intuitive design and clear layout make Text-WebTool accessible to users of all levels.</li>
    </ul>

    <p><span class="highlight">Text-WebTool</span> is your go-to solution for efficient text manipulation and basic mathematical calculations. Try it out today and experience the benefits firsthand!</p>
    <p class="text-center">Text-WebTool©copyrights</p>
    </div>
  )
}
