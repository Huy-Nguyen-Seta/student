import { Listbox, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { SelectorIcon } from "@heroicons/react/solid";
import { FaCheck } from "react-icons/fa";
import Select from "react-select";
function FIlter(categories) {
  const [category, setcategory] = useState({ title: "cate" });
  const [rate, setRate] = useState(0);
  const [date, setDate] = useState({});
  const sortByTime = [
    { title: "Sắp xếp theo thời gian" },
    { title: "Sắp xếp theo tên" },
  ];
  
  const Filter = [
    {
      value: category,
      onChange: setcategory,
      items:
        categories?.length > 0
          ? [{ title: "Tất cả lĩnh vực" }, ...categories]
          : [],
    },
    {
      value: category,
      onChange: setcategory,
      items: sortByTime,
    },
    {
      value: category,
      onChange: setcategory,
      items: sortByTime,
    },
    {
      value: category,
      onChange: setcategory,
      items: sortByTime,
    },
  ];
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none ">
                <SelectorIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, index) => (
                  <Listbox.Option
                    value={iterm}
                    key={index}
                    className={(active) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex item-center pl-3">
                            <FaCheck className="h-3 w-3" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default FIlter;
