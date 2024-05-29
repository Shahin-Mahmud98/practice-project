const About = () => {
  
    return (
        <div className="my-10 mx-4 sm:mx-10 lg:mx-40 text-center sm:text-left">
            <div className="my-8 text-5xl font-bold text-center "><h1>About</h1></div>
            <div className="hero bg-slate-50 my-5">
  <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start p-6">
    <img className="px-20 w-96 h-[300px] p-10 mx-10 rounded " src="images/bd.png"  />
    <div className="lg:w-1/2">
      <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold">About Us</h1>
      <p className="py-6 text-base sm:text-lg lg:text-xl">A website that allows people to buy and sell physical goods, services, 
      and digital products over the internet rather than at a brick-and-mortar location.
       Through an e-commerce website, a business can process orders, 
       accept payments, manage shipping and logistics, and provide customer service.</p>
      <button className="btn btn-primary">Click Here</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;