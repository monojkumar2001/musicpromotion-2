import Image from 'next/image';
const RacognizedImg = ({img}) => {
  return (
    <>
      <div className="recognized-icon-item">
      <Image
      src={img}
      width={183}
      height={60}
      alt="Music Promotion Today"
    />
                </div>
    </>
  )
}

export default RacognizedImg