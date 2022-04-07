/**Data for Buttons */
const list = [
  {
    name: "Props One",
    href: "/propsa",
    address: "https://source.unsplash.com/random/400x400",
    alt: "Nature",
    details:
      "Props is one of the basic topic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "Props Two",
    href: "/propsb",
    address: "https://source.unsplash.com/random/450x450",
    alt: "Nature",
    details:
      "Props is one of the basic topic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseState One",
    href: "/usestateone",
    address: "https://source.unsplash.com/random/350x350",
    alt: "Nature",
    details:
      "UsState is another Hook used in React. In this practice, I've used it using TypeScript React and Tailwind...",
  },
  {
    name: "UseState Two",
    href: "/statetwo",
    address: "https://source.unsplash.com/random/401x401",
    alt: "Nature",
    details:
      "UsState is another Hook used in React. In this practice, I've used it TypeScript React and Tailwind CSS...",
  },
  {
    name: "UseEffect One",
    href: "/effectone",
    address: "https://source.unsplash.com/random/402x402",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseEffect Two",
    href: "/effecttwo",
    address: "https://source.unsplash.com/random/405x405",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseContext One",
    href: "/effectone",
    address: "https://source.unsplash.com/random/300x300",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseContext Two",
    href: "/effecttwo",
    address: "https://source.unsplash.com/random/380x380",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseRef One",
    href: "/refone",
    address: "https://source.unsplash.com/random/370x370",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseRef Two",
    href: "/reftwo",
    address: "https://source.unsplash.com/random/360x360",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseReducer One",
    href: "/reducerone",
    address: "https://source.unsplash.com/random/350x350",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "UseReducer Two",
    href: "/reducertwo",
    address: "https://source.unsplash.com/random/340x340",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "Callback One",
    href: "/callbackone",
    address: "https://source.unsplash.com/random/320x320",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "Callback Two",
    href: "/callbacktwo",
    address: "https://source.unsplash.com/random/310x310",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
  {
    name: "My Todo List",
    href: "/todolist",
    address: "https://source.unsplash.com/random/301x301",
    alt: "Nature",
    details:
      "Props is one of the basic and crucial to learn in TypeScript Programming Language. In this practice, I've used it...",
  },
];
export function Buttons() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify text-center gap-6">
          {list.map((item) => (
            <a key={item.name} href={item.href} className="">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                  <a
                    href={item.href}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img className="rounded-t-lg" src={item.address} alt="" />
                  </a>
                  <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {item.name}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      {item.details}
                    </p>
                    <button
                      type="button"
                      className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="px-3 py-3 my-3 bg-white-400"></div>
    </>
  );
}

export default Buttons;
