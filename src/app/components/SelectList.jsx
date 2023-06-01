"use client"
import React, {useState} from 'react'
import { Listbox } from '@headlessui/react';
import { Transition } from '@headlessui/react';

function SelectList({ loading, options, nombre }) {
    const [selectedPerson, setSelectedPerson] = useState(options[0])


   
    if (loading) {
        return (
          <Listbox>
            <Listbox.Button>Loading...</Listbox.Button>
          </Listbox>
        );
      }
    
      if (options.length === 0) {
        return (
          <Listbox>
            <Listbox.Button>No options available</Listbox.Button>
          </Listbox>
        );
      }
     
      return (
        


<Listbox as="div" value={selectedPerson} onChange={setSelectedPerson} className={'flex flex-col mb-5 gap-3'}>
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm font-medium text-start text-gray-700">
              Sexo
            </Listbox.Label>
            <div className="relative">
              <span className="inline-block w-full">
                <Listbox.Button className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none  flex">
                  <span className="block truncate">{selectedPerson.name}</span>
                </Listbox.Button>
              </span>
              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="border border-gray-300 rounded mt-1"
                >
                  {options.map((option) => (
                    <Listbox.Option key={option.id} value={option}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-10 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {option[nombre] }
                          </span>

                          {selected && (
                            <span
                              className={`${
                                active ? "text-white" : "text-indigo-600"
                              } absolute inset-y-0 left-0 flex items-center pl-2`}
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>


        



      );
    }


export default SelectList