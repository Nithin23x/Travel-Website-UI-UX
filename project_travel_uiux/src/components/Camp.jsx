import { PEOPLE_URL } from "../constants"

const Campsite = ({backgroundImage,title,subtitle,joined}) => {

  return (
    <div className={`h-full  min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl p-3`}>
       <div className="h-full flex flex-col items-start justify-between
       p-6 lg:px-10 lg:py-10 ">
          <div className="flexCenter gap-4 ">
            <div className="rounded-full bg-green-50 p-4">
                <img
                src="/public/folded-map.svg"
                alt="map" height={30} width={30} />
                
            </div>

            <div className="flex flex-col gap-1">
                  <h4 className="bold-18 text-white">{title}</h4>
                  <p className="regular-14 text-white"> {subtitle} </p>
            </div>

          </div>

          <div className="flexCenter gap-6">
              <span className="flex -space-x-3 overflow-hidden">
                  {
                    PEOPLE_URL.map(url => 
                      <img 
                      className="inline-block h-10 w-10 rounded-full"
                      src={url} key={url} alt="people"
                      height={50} width={50}/>
                    )
                  }
              </span>
              <p className="bold-16 text-white">{joined}</p>
          </div>

       </div>
    </div>
  )
}

const Camp = () => {
  return (
   <section className='2xl:max-container relative flex flex-col py-10 lg:py-20 lg:mb-10 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full justify-start
      items-start gap-8 overflow-x-auto lg:h-[420px] xl:h-[650px]'>
        <Campsite 
          backgroundImage = 'bg-bg-img-1'
          title = "Dusseldorf Camp "
          subtitle = 'Dusselforf,Germany'
          joined = '60+ already joined '
        />
        <Campsite 
          backgroundImage='bg-bg-img-2'
          title='Tubingen Camp'
          subtitle='Tubingen , Austria'
          joined='50+ already joined'
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 text-white">
        <div className="bg-green-50 p-8 lg:max-w-[500px] 
        xl:max-w-[740px] xl:rounded-5xl overflow-hidden xl:px-16 xl:py-20 relative w-full rounded-3xl">
          <h2>
            <strong>Feeling Lost</strong> And Not Knowing the Way ?..
          </h2>
          <p className="regular-18 xl:regular-22 mt-5">
          Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. 
          That's why we are here for those of you who want to start an adventure
          </p>

          <img 
          src="/quote.svg"
          height={219} width={186} alt="camp-0" 
          className="camp-quote"
          />
        </div>
      </div>
   </section>
  )
}

export default Camp