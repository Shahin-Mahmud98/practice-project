const About = () => {
    return (
        <div>
            <div className="my-8 text-5xl font-bold text-center "><h1>About</h1></div>
            <div className="hero px-10 bg-slate-50 my-5">
  <div className="hero-content  flex-col lg:flex-row h-[400px]">
    <img src="images/pixel2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">A website that allows people to buy and sell physical goods, services, 
      and digital products over the internet rather than at a brick-and-mortar location.
       Through an e-commerce website, a business can process orders, 
       accept payments, manage shipping and logistics, and provide customer service.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;