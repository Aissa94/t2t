import React, { useState, Fragment } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

import { Menu, Transition } from '@headlessui/react'

import { FiSearch } from 'react-icons/fi'
import { FaBars, FaCalendarAlt } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { GiAirplaneDeparture, GiAirplaneArrival } from 'react-icons/gi'
import { CgArrowsExchange } from 'react-icons/cg'
import { format } from 'date-fns'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function FormTabs() {
  const [pickerDate, setPickerDate] = useState({
    departure: new Date(),
    return: new Date(),
  })

  const [formData, setFormData] = useState({
    class: 'Class',
    type: 'one',
    source: '',
    destination: '',
    departure: format(new Date(), 'dd/MM/yy'),
    return: format(new Date(), 'dd/MM/yy'),
  })



  const handlePickerDate = (date,source) => {
    if (source === 'pickerDepature'){
      setPickerDate({ ...pickerDate, departure : date})
      setFormData({...formData, departure : format(date,"dd/MM/yy")})
    }

    if (source === 'pickerReturn') {
      setPickerDate({ ...pickerDate, return: date })
      setFormData({ ...formData, return: format(date, 'dd/MM/yy') })
    }

  }


  const handleInput = (e) => {
    let name = e.currentTarget.name
    let value = e.currentTarget.value
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className='relative my-2 py-2'>
      <form>
        {/* row */}
        <div className='flex flex-row'>
          {/* tour type */}
          <div className='flex flex-row border-r border-clr-gray-normal pr-1'>
            <div className='mx-1'>
              <input
                type='radio'
                id='oneWay'
                name='type'
                value={'one'}
                onChange={(e) => handleInput(e)}
                className='appearance-none peer'
                checked={formData.type === 'one'}
              />
              <label
                htmlFor='oneWay'
                className='shadow cursor-pointer capitalize border border-clr-gray-normal rounded-full text-clr-blue-normal text-sm px-4 py-2 peer-checked:bg-clr-blue-normal peer-checked:text-white'
              >
                One Way
              </label>
            </div>
            <div className='mx-1'>
              <input
                type='radio'
                id='round'
                name='type'
                value={'round'}
                onChange={(e) => handleInput(e)}
                className='appearance-none peer'
                checked={formData.type === 'round'}
              />
              <label
                htmlFor='round'
                className='shadow cursor-pointer capitalize border border-clr-gray-normal rounded-full text-clr-blue-normal text-sm px-4 py-2 peer-checked:bg-clr-blue-normal peer-checked:text-white'
              >
                round trip
              </label>
            </div>
            <div className='mx-1'>
              <input
                type='radio'
                id='multi'
                name='type'
                value={'multi'}
                onChange={(e) => handleInput(e)}
                className='appearance-none peer'
                checked={formData.type === 'multi'}
              />
              <label
                htmlFor='multi'
                className='shadow cursor-pointer capitalize border border-clr-gray-normal rounded-full text-clr-blue-normal text-sm px-4 py-2 peer-checked:bg-clr-blue-normal peer-checked:text-white'
              >
                multi city
              </label>
            </div>
          </div>
          {/* tour class */}
          <Menu as='div' className='relative inline-block text-left ml-1'>
            <div>
              <Menu.Button className='inline-flex items-center justify-center border border-clr-gray-notmal rounded-full px-4 py-[7px] -mt-[6px] text-sm text-clr-blue-normal shadow'>
                {formData.class}
                <FaBars className='ml-10' />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute left-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? 'bg-clr-blue-normal text-white'
                            : 'text-clr-gray-dark',
                          'block px-6 py-2 text-sm cursor-pointer'
                        )}
                        name='class'
                        value='Bussines'
                        type='button'
                        onClick={(e) => handleInput(e)}
                      >
                        Bussines
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active
                            ? 'bg-clr-blue-normal text-white'
                            : 'text-clr-gray-dark',
                          'block px-6 py-2 text-sm cursor-pointer'
                        )}
                        name='class'
                        value='Economy'
                        type='button'
                        onClick={(e) => handleInput(e)}
                      >
                        Economy
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* row */}
        <div className='grid grid-cols-12 gap-4 mt-6'>
          {/* form - to */}
          <div className='col-span-4'>
            <div className='flex flex-row'>
              {/* from */}
              <div className='mr-1'>
                <h5 className='font-semibold mb-3 text-clr-gray-normal capitalize text-sm tracking-wide'>
                  From
                </h5>
                <label className='relative block '>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                    <GiAirplaneDeparture className='text-clr-blue-normal text-2xl' />
                  </span>
                  <input
                    className='bg-white text-base w-full border border-clr-gray-normal rounded-full py-2 pl-8 focus:outline-none'
                    placeholder='Dubai (DBX)'
                    type='text'
                    name='source'
                    value={formData.source}
                    onChange={(e) => handleInput( e)}
                  />
                </label>
              </div>
              {/* space */}
              <div className='flex items-center '>
                <CgArrowsExchange className='rounded-full bg-clr-blue-normal w-10 h-10 text-center text-white mt-7 mr-1' />
              </div>
              {/* to */}
              <div>
                <h5 className='font-semibold mb-3 text-clr-gray-normal capitalize text-sm tracking-wide'>
                  To
                </h5>
                <label className='relative block'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <GiAirplaneArrival className='text-clr-blue-normal text-2xl' />
                  </span>
                  <input
                    className='w-full bg-white placeholder:font-italitc border border-clr-gray-normal rounded-full py-2 pl-10 pr-4 focus:outline-none'
                    placeholder='Sharjah (SHJ)'
                    type='text'
                    name='destination'
                    value={formData.destination}
                    onChange={(e) => handleInput(e)}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* departure - return */}
          <div className='col-span-4'>
            <div className='flex flex-row mr-1'>
              {/* departure */}
              <div className='mr-1'>
                <h5 className='font-semibold mb-3 text-clr-gray-normal capitalize text-sm tracking-wide'>
                  Departure
                </h5>
                <DatePicker
                  value={pickerDate.departure}
                  selected={pickerDate.departure}
                  onChange={(date) => handlePickerDate(date, 'pickerDepature')}
                  customInput={
                    <label className='relative block'>
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                        <FaCalendarAlt className='text-clr-blue-normal text-2xl' />
                      </span>
                      <input
                        className='w-full bg-white border text-clr-gray-dark border-clr-gray-normal rounded-tl-full rounded-bl-full py-2 pl-10 pr-1 focus:outline-none'
                        placeholder={'add date'}
                        name='departure'
                        value={formData.departure}
                        onChange={(e) => console.log(formData.departure)}
                        type='text'
                      />
                    </label>
                  }
                />
              </div>
              {/* return */}
              <div>
                <h5 className='font-semibold mb-3 text-clr-gray-normal capitalize text-sm tracking-wide'>
                  Return
                </h5>
                <DatePicker
                  value={pickerDate.return}
                  selected={pickerDate.return}
                  onChange={(date) => handlePickerDate(date, 'pickerReturn')}
                  customInput={
                    <label className='relative block'>
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                        <FaCalendarAlt className='text-clr-blue-normal text-2xl' />
                      </span>
                      <input
                        className='w-full bg-white border text-clr-gray-dark border-clr-gray-normal rounded-tr-full rounded-br-full py-2 pl-10 pr-4 focus:outline-none appearance-none'
                        placeholder={'add date'}
                        name='departure'
                        value={formData.return}
                        onChange={(e) => console.log(formData.departure)}
                        type='text'
                      />
                    </label>
                  }
                />
              </div>
            </div>
          </div>

          {/* passenger - find */}
          <div className='col-span-4'>
            <div className='flex flex-row'>
              <div>
                <h5 className='font-semibold mb-3 text-clr-gray-normal capitalize text-sm tracking-wide'>
                  Passenger
                </h5>
                <label className='relative block'>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <HiUsers className='text-clr-blue-normal text-2xl' />
                  </span>
                  <input
                    className='w-full bg-white placeholder:font-italitc border border-clr-gray-normal rounded-full py-2 pl-10 pr-4 focus:outline-none'
                    placeholder='2 Adults, 1 Child'
                    type='text'
                  />
                  <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                    <FaBars className='text-clr-blue-normal text-2xl' />
                  </span>
                </label>
              </div>
              <div className='my-auto pt-7 ml-1'>
                <button className='flex bg-clr-blue-light text-white text-lg font-semibold rounded-full shadow py-2 px-5 capitalize text-center items-center italic'>
                  <FiSearch className='mr-1' />
                  find
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormTabs
