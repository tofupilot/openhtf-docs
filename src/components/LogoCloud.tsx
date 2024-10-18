import { Logos } from './Logos'

export function LogoCloud() {
  return (
    <div className="pb-6 pt-1">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Logos.Google className="w-24" />
          <Logos.Waymo className="w-24" />
          <Logos.Sony className="w-24" />
          <Logos.ST className="w-24" />
          <Logos.Berkeley className="w-24" />
        </div>
      </div>
    </div>
  )
}
