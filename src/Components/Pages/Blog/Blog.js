import React from 'react';

const Blog = () => {
    return (
        <div className='w-1/2 mx-auto my-10'>
           <div className='w-full border border-spacing-2 border-gray-900 rounded-xl  p-5 mb-4'>
                <h2 className="text-xl text-primary text-center">Difference between SQL and NoSQL?</h2>
                <p className="text-sm">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
           </div>
           <div className='w-full border border-spacing-2 border-gray-900 rounded-xl  p-5 mb-4'>
                <h2 className="text-xl text-primary text-center">What is JWT, and how does it work?</h2>
                <p className="text-sm">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
           </div>
           <div className='w-full border border-spacing-2 border-gray-900  rounded-xl p-5 mb-4'>
                <h2 className="text-xl text-primary text-center">What is the difference between javascript and NodeJS?</h2>
                <p className="text-sm">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
           </div>
           <div className='w-full border border-spacing-2 border-gray-900  rounded-xl p-5 mb-4'>
                <h2 className="text-xl text-primary text-center">How does NodeJS handle multiple requests at the same time?</h2>
                <p className="text-sm"> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
           </div>
        </div>
    );
};

export default Blog;