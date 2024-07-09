
const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="max-container padding-container
      w-full pb-24">
          <img
          src="/camp.svg" alt="camp-420"
          width={50} height={50} />
          <p className="uppercase regular-16 -mt-1 mb-3 text-green-50">
            We are here for you 
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
              <h2 className="bold-40 xl:max-w-[395px]:">Guide You to Easy Path</h2>
              <p className="regular-22 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, 
                because we already support offline maps when there is no internet connection in the field. 
                Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain
              </p>
          </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <img 
        src="/boat.png" alt="boat"
        height={580} width={1440} 
        className="w-full object-cover object-center 2xl:rounded-5xl" 
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 rounded-3xl gap-3
        border shadow-md md:left-[5%] lg:top-20">
          <img src="/meter.svg" alt="meter"
          height={160} width={20} 
          className="h-full w-auto" />
          <div className="flexBetween flex-col">
              <div className="flex w-full flex-col ">
                  <div className="flexBetween w-full ">
                      <p className="regular-16 text-gray-20">Destination</p>
                      <p className="bold-16 text-green-50">55 Minutes</p>
                  </div>
                  <p className="bold-20 mt-2">Nordschcliffe </p>
              </div>
              <div className="flex w-full flex-col ">
                  <p className="regular-16 text-gray-20">Start Track </p>
                  <h4 className="bold-20 mt-2 whitespace-nowrap">Tubingen-Interlaken </h4>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide