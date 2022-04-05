/**Data for Buttons */
export function Buttons() {
  const list = [
    { name: "Props One", href: "/propsa" },
    { name: "Props Two", href: "/propsb" },
    { name: "UseState One", href: "/usestateone" },
    { name: "UseState Two", href: "/statetwo" },
    { name: "UseEffect One", href: "/effectone" },
    { name: "UseEffect Two", href: "/effecttwo" },
    { name: "UseContext One", href: "/effectone" },
    { name: "UseContext Two", href: "/effecttwo" },
    { name: "UseRef One", href: "/refone" },
    { name: "UseRef Two", href: "/reftwo" },
    { name: "UseReducer One", href: "/reducerone" },
    { name: "UseReducer Two", href: "/reducertwo" },
    { name: "Callback One", href: "/callbackone" },
    { name: "Callback Two", href: "/callbacktwo" },
    { name: "My Todo List", href: "/todolist" },
  ];
  return (
    <>
      <div className="px-3 py-3 my-3 bg-white-400"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify text-center gap-6">
          {list.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <div className="container max-auto">
                <div className="justify-text">
                  <div className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 mx-5 px-4 rounded">
                    {item.name}
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
