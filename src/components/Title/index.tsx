
type Props = {

    title : string
}

const index = ({title } :  Props) => {
  return (
    <div className="text-center text-white mb-4">
      <h1 className="fw-bold display-5 robotic-font">{title}</h1>
      <p className="fs-5 robotic-font-text">Secure your spot at next year’s biggest coding conference.</p>
    </div>
  )
}

export default index