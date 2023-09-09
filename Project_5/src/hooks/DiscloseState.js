import { useState } from "react";
function DiscloseState() {
    const [open,setOpen] = useState(false);

    const Open = () => {
      setOpen(true);
    }
  
    const Close = () => {
      setOpen(false);
    }

  return (
    {Open,Close,open}
  )
}

export default DiscloseState