import React, { useEffect, useState } from 'react'
import { OverlayTrigger, Popover,Button } from 'react-bootstrap';


const UpdatingPopover = React.forwardRef(
    ({ popper, children, show: _, ...props }, ref) => {
      useEffect(() => {
        console.log('updating!');
        popper.scheduleUpdate();
      }, [children, popper]);
  
      return (
        <Popover ref={ref} body {...props}>
          {children}
        </Popover>
      );
    },
  );
  
  const longContent = `
    Very long
    Multiline content
    that is engaging and what-not
  `;
  const shortContent = 'Short and sweet!';
  
export default function Holy_guacamole() {
    const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  });

    return (
        <div>
           <OverlayTrigger
      trigger="click"
      overlay={
        <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
      }
    >
      <Button>Holy guacamole!</Button>
    </OverlayTrigger>  
        </div>
    )
}
