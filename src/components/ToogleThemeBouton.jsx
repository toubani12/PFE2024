import { Button } from "antd"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"

const ToogleThemeBouton = ({ darkTheme , ToogleTheme}) => {
  return (
    <div className="toogle-theme-btn">
      <Button onClick={ToogleTheme}>
        { darkTheme ? <HiOutlineSun /> : <HiOutlineMoon /> }
      </Button>
    </div>
  )
}

export default ToogleThemeBouton
