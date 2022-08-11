import React from "react";
import Accordion from "./components/Accordion";

import './App.css';

function App() {
  const accordionData = [
    {
      title: "Why park a domain name in Parkname ?",
      content:
        "Parkname is the leading industry standard for for domain name parking and monetization services. We offer a wide variety of services to help you achive success.",
    },
  ];

  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
