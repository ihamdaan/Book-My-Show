import { Disclosure } from '@headlessui/react';
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <Disclosure>
        {
            ({ open }) => (
                <div className="bg-white px-3 py-2 shadow-md rounded-lg w-5/6 my-3">
                    <Disclosure.Button className="py-2 flex justify-between items-center w-full px-2">
                        <div className="flex items-center gap-4">
                            {open ? <BiChevronUp /> : <BiChevronDown />}
                            <span className={open ? "text-red-600" : "text-gray-700"}>{props.title}</span>
                        </div>
                        <div className="text-xs"><span className={open ? "text-red-300" : "text-gray-400"}>Clear</span></div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 py-3">
                        <div className="flex items-center gap-3 flex-wrap">
                            {props.tags.map((tag) => (
                                <div className="border border-gray-200 py-1 px-2">
                                    <span className="text-red-600">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )
        }
    </Disclosure>
  )
}

export default PlaysFilter;