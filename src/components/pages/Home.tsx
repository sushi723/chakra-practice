import { FC, memo } from "react"
import { Link } from "react-router-dom"

export const Home: FC = memo(() => {
  return (
    <>
      <p>HOMEページです</p>
      <Link to="/home/setting">aaa</Link>
      <br />
      <Link to="/home/user_management">management</Link>
    </>
  )
})