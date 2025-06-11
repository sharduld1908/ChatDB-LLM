import React, { useState } from 'react';

function LeftContent() {
  const [query, setQuery] = useState("Find out which customer ordered the most products.");

  // Dummy data for the generated SQL block, matching the image
  const dummyGeneratedSQL = `    SELECT c.name, COUNT(o.product_id) AS product_count
    FROM customers c
    JOIN orders o ON c.id = o.customer_id
    GROUP BY c.name
    ORDER BY product_count DESC`;

  // Dummy data for the generated explanation block
  const dummyGeneratedExplanation = `The LLM agent is planning the following steps to answer your query:
1.  **Identify Data Sources:** The agent starts by listing all available tables in the database ('customers', 'payments', 'orders', 'sqlite_sequence'). This provides an overview of the data structure. 
2.  **Understand Table Structures (Implicit Next Step):** To find which customer ordered the most products, the agent will need to understand the columns within relevant tables, likely 'customers' (for customer information) and 'orders' (for order details and quantities). It will mentally (or actually) query the schema for these tables.
3.  **Formulate SQL Query:** Based on the table structures, the agent will construct an SQL query. This query would typically involve joining 'customers' and 'orders' tables, grouping by customer, and counting the products or orders for each.
4.  **Execute Query and Present Result:** Finally, the agent will execute the SQL query against the database and present the customer who has the highest count.
1.  **Identify Data Sources:** The agent starts by listing all available tables in the database ('customers', 'payments', 'orders', 'sqlite_sequence'). This provides an overview of the data structure.
2.  **Understand Table Structures (Implicit Next Step):** To find which customer ordered the most products, the agent will need to understand the columns within relevant tables, likely 'customers' (for customer information) and 'orders' (for order details and quantities). It will mentally (or actually) query the schema for these tables.
3.  **Formulate SQL Query:** Based on the table structures, the agent will construct an SQL query. This query would typically involve joining 'customers' and 'orders' tables, grouping by customer, and counting the products or orders for each.
4.  **Execute Query and Present Result:** Finally, the agent will execute the SQL query against the database and present the customer who has the highest count.
1.  **Identify Data Sources:** The agent starts by listing all available tables in the database ('customers', 'payments', 'orders', 'sqlite_sequence'). This provides an overview of the data structure.
2.  **Understand Table Structures (Implicit Next Step):** To find which customer ordered the most products, the agent will need to understand the columns within relevant tables, likely 'customers' (for customer information) and 'orders' (for order details and quantities). It will mentally (or actually) query the schema for these tables.
3.  **Formulate SQL Query:** Based on the table structures, the agent will construct an SQL query. This query would typically involve joining 'customers' and 'orders' tables, grouping by customer, and counting the products or orders for each.
4.  **Execute Query and Present Result:** Finally, the agent will execute the SQL query against the database and present the customer who has the highest count.`;

  return (
    <div className="flex flex-col h-full text-gray-800"> {/* Full height, vertical flex layout */}
      
      {/* === Input Section (Title, Textarea, Button) === */}
      {/* This div groups input elements; it does not scroll independently */}
      <div>
        <h1 className="text-2xl font-semibold mb-4">GPT Agent</h1>

        <textarea
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 resize-none mb-4 text-sm text-gray-700"
          rows="4" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your natural language query..."
        />

        <button 
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 px-5 rounded-md shadow-sm transition duration-150 ease-in-out flex items-center justify-center space-x-2 mb-6 text-sm"
        >
          <span>GENERATE SQL & EXPLAIN</span>
          {/* Simple SVG for the right arrow icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-4 h-4"
          >
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* === Output Section (SQL Log and Explanation) === */}
      {/* This div takes the remaining vertical space and handles its own scrolling */}
      <div className="flex-1 overflow-y-auto space-y-5 text-sm pb-1"> {/* Added pb-1 for a little bottom space before scrollbar */}
        
        {/* Generated SQL Block */}
        <div id="generatedSQL">
          <h3 className="text-lg font-semibold text-gray-700 mb-1.5">Generated SQL</h3>
          <pre className="font-mono whitespace-pre-wrap break-words text-gray-700">
            {dummyGeneratedSQL}
          </pre>
        </div>

        {/* Generated Explanation Block */}
        <div id="generatedExplanation">
          <h3 className="text-lg font-semibold text-gray-700 mb-1.5">Explanation</h3>
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-gray-600">
            {/* Using <pre> for multi-line formatting, but with a standard sans-serif font for readability */}
            <pre className="font-sans whitespace-pre-wrap break-words">
              {dummyGeneratedExplanation}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContent;