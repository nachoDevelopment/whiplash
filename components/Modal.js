import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import Image from 'next/image'

export default function MyModal({section}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type='button'
        onClick={openModal}
        className='bg-primary-button text-white py-3 px-6 mt-9 w-fit shadow-2xl shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.3)]'>
        {section.buttonText}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto bg-black/50'
          onClose={closeModal}>
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <div className='inline-block w-full max-w-[80%] my-20 ml-12 overflow-hidden text-left align-middle transition-all transform bg-white shadow-[-50px_-30px_rgba(196,196,196,0.82)]'>
                <div className='bg-[#F6C67A] py-6 px-8'>
                  <Dialog.Title as='h3' className='font-secondary text-5xl'>
                    {section.serviceTitle}
                  </Dialog.Title>
                  <div className='relative'>
                    {section.serviceSubtitle.split(',').map((item, i) => {
                      return (
                        <span
                          key='i'
                          className={`relative pr-3 md:pr-6 font-urban text-sm md:text-lg tracking-widest ${
                            i > 0
                              ? 'before:absolute before:bg-primary-button before:h-1 before:w-1 before:rounded-full before:top-2/4 before:-translate-y-2/4 before:-left-2 md:before:-left-3'
                              : ''
                          }`}>
                          {item}
                        </span>
                      )
                    })}
                  </div>
                  <div
                    className='absolute right-3.5 top-3.5 cursor-pointer'
                    onClick={closeModal}>
                    <Image
                      src='/close-icon.png'
                      alt='close icon'
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div className='mt-2 px-11'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mb-8'>
                    <div className='font-urban my-4'>
                      <div className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                        {section.serviceOption1}
                      </div>
                      <p className='font-light text-sm uppercase tracking-widest mb-5'>
                        {section.serviceOption1Description}
                      </p>
                      <div
                        className='font-light text-sm tracking-widest leading-7 service-option'
                        dangerouslySetInnerHTML={{
                          __html: section.serviceOption1LongDescription,
                        }}></div>
                    </div>
                    <div className='font-urban my-4'>
                      <p className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                        {section.serviceOption2}
                      </p>
                      <p className='font-light text-sm uppercase tracking-widest mb-5'>
                        {section.serviceOption1Description}
                      </p>
                      <div
                        className='font-light text-sm tracking-widest leading-7 service-option'
                        dangerouslySetInnerHTML={{
                          __html: section.serviceOption2LongDescription,
                        }}></div>
                    </div>
                    <div className='font-urban my-4'>
                      <p className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                        {section.serviceOption3}
                      </p>
                      <p className='font-light text-sm uppercase tracking-widest mb-5'>
                        {section.serviceOption1Description}
                      </p>
                      <div
                        className='font-light text-sm tracking-widest leading-7 service-option'
                        dangerouslySetInnerHTML={{
                          __html: section.serviceOption3LongDescription,
                        }}></div>
                    </div>
                    <div className='font-urban my-4'>
                      <p className='text-lg text-primary-button uppercase tracking-widest mb-2'>
                        {section.serviceOption4}
                      </p>
                      <p className='font-light text-sm uppercase tracking-widest mb-5'>
                        {section.serviceOption1Description}
                      </p>
                      <div
                        className='font-light text-sm tracking-widest leading-7 service-option'
                        dangerouslySetInnerHTML={{
                          __html: section.serviceOption4LongDescription,
                        }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
