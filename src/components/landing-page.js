export default function LandingPage() {
  const blogData = {
    category: "Theme",
    title: "Blog title heading will go here",
    dec: "A portfolio section on a website serves as a showcase for a person or business's work, accomplishments, and skills. Its purpose is to provide visitors with an idea of what they can expect from the individual or company",
    avatar: "./images/avatar.jpg",
    name: "Full Name",
    date: "11 jan 2022",
    time: "5 min read",
  };
  return (
    <div className="bg-background text-baseContent px-5 md:px-20 pt-4 md:pt-8">
      <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-x-10 text-center md:text-left pt-16">
        <div className="w-full flex flex-col gap-y-6 md:gap-y-12">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-loose">
            The most popular <p className="text-primary ">component library</p>{" "}
            for Tailwind CSS
          </h1>
          <p>
            daisyUI adds component class names to Tailwind CSS so you can make
            beautiful websites faster than ever.
          </p>
          <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-5">
            <button className="py-4 border rounded-2xl w-full transition easy-in-out duration-300 active:scale-95">
              See components
            </button>
            <button className="py-4 rounded-2xl w-full bg-primary transition easy-in-out duration-300 active:scale-95 text-primaryContent">
              How to use?
            </button>
          </div>
        </div>
        <img className="w-full rounded-2xl" src="./images/home.jpg" at="" />
      </div>
      <div className="py-5 md:py-12">
        <div className="flex flex-col gap-5 ">
          <p>Theme</p>
          <h1 className="text-4xl font-extrabold">Short heading goes here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 md:pt-20 pb-4 md:pb-10">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="border border-1 rounded-2xl p-4 shadow-md"
            >
              <img
                className="rounded-2xl w-full"
                src="./images/image.jpg"
                alt="Movie"
              />
              <div className=" text-left flex flex-col gap-5">
                <p>{blogData.category}</p>
                <h2 className="text-lg font-semibold">{blogData.title}</h2>
                <p className="line-clamp-2">{blogData.dec}</p>
                <div className="flex gap-4">
                  <div>
                    <img
                      className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>{blogData.name}</p>
                    <p>
                      {blogData.date}{" "}
                      <span className="font-bold text-xl ">.</span>{" "}
                      <span>{blogData.time}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-x-4">
          <button className="border border-primary w-28 md:w-32 rounded-2xl py-4 bg-primary text-primaryContent transition duration-200 easy-in-out active:scale-95">
            Close all
          </button>
          <button className="border border-primary w-28 md:w-32 rounded-2xl py-4 hover:bg-primary hover:hover:text-primaryContent transition duration-200 easy-in-out active:scale-95">
            view all
          </button>
        </div>
      </div>
    </div>
  );
}
