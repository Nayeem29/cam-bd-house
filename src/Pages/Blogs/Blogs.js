import React from 'react';

const Blogs = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='my-5 mx-auto px-5 py-10 text-justify'>
        <p className='font-bold text-xl'>How will you improve the performance of a React Application?</p>
        <p className='text-lg font-normal mt-3'>
          React by default provides many useful warnings but that hampers the production level by making the app larger and slower. Thus, we need to use the production version by setting up correctly. For efficient brunch production build we can use terser-brunch and browerify for browserify production. These plugins are need to be used only for production level, not development. There are bunch of plugins that will help to minimize a react application. For exapmple, envify, uglifyify, terser and rollup all have different specializations for making the performance better.
        </p>
      </div>
      <div className='my-5 mx-auto px-5 py-10 text-justify'>
        <p className='font-bold text-xl'> What are the different ways to manage a state in a React application?</p>
        <p className='text-lg font-normal mt-3'>
          There are four different ways to manage state in react application. Firstly, we can use state hook for simplicity. It's a matter of hook that will maintain data and pass data to the children which is known as props drilling. It may make the applcation slow for large application. Secondly, we have another hook called use reducer. It is function which takes an argument and state. Thirdly, we have context to managing our state. Its wrapper which need to be passed from the parent component and it avoids props drilling. Finally, redux has all the attribute to solve  every solutions for large application. There are three main blocks in redux: store, reducer, action. It solves two problems, props drilling and complex state changes at a time. On top of it, redux toolkit came which is build to minimize some of the complexity of the redux.
        </p>
      </div>
      <div className='my-5 mx-auto px-5 py-10 text-justify'>
        <p className='font-bold text-xl'>How does prototypical inheritance work?</p>
        <p className='text-lg font-normal mt-3'>
          javascript is a prototype-based object oriented programming meaning objects and methods can be shared, extended and copied. It allows us to resure properties and methods from one javascript object to another. In javascript every object has its hidden prototypes and an object's properties can be accessed by the inheritor object. Every object has a prototype which is linked to another object prototype. This is called prototype chaining. When we need to find an object property the entire chain is traversed until the property is found or provide null.
        </p>
      </div>
      <div className='my-5 mx-auto px-5 py-10 text-justify'>
        <p className='font-bold text-xl'>What is a unit test? Why should write unit tests?</p>
        <p className='text-lg font-normal mt-3'>
          Unite Testing is used for determining if there are any issues created by the developer himself. It concerns for the functional correctness and identify detect for fixing bugs. It helps to defect newly developed features to find bugs when changing the existing code. It minimizing the cost by capturing issues in the early phase and allow us better refactoring code.
        </p>
      </div>
      <div className='my-5 mx-auto px-5 py-10 text-justify'>
        <p className='font-bold text-xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
        <p className='text-lg font-normal mt-3'>
          I will loop through each of the products and then each product has a name property which I can access by map function. The search query will be held by if product.name is equal to name.
        </p>
      </div>
      <div className='my-5 mx-auto px-5 py-10 text-justify'>
        <p className='font-bold text-xl'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
        <p className='text-lg font-normal mt-3'>
          We should not set the state directly in react. Because react has its own lifecycle for state and we know it's an unidirectional data flow. Thus, when any state is changed react needs to compare it with previous data state and when we directly set the state, the shallow compare between view and state distrubed which eventually will affect the react lifecycle.
        </p>
      </div>
    </div>
  );
};

export default Blogs;